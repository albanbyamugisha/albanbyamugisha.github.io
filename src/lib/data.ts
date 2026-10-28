import { z } from 'astro:content';
import rawProfile from '../data/profile.json';
import rawProjects from '../data/projects.json';
import rawCredentials from '../data/credentials.json';
import rawExperience from '../data/experience.json';
import rawLinkedInExperience from '../data/experience-linkedin.json';
const url = z.string().refine(v => !v || /^https:\/\//.test(v), 'Use an HTTPS URL');
const local = z.string().refine(v => !v || (v.startsWith('/') && !v.startsWith('//') && !v.includes('..')), 'Use a site-relative asset path');
export const profile = z.object({name:z.string().min(1),focus:z.string().min(1),location:z.string().min(1),tagline:z.string(),introduction:z.string().min(1),about:z.string(),values:z.string(),email:z.string().email(),description:z.string().min(1),cv:local,skills:z.array(z.string()),education:z.array(z.object({period:z.string(),qualification:z.string(),institution:z.string()})),socials:z.array(z.object({label:z.string(),url:z.string().refine(v=>/^https:\/\//.test(v)||/^tel:\+\d+$/.test(v),'Use HTTPS or tel') }))}).parse(rawProfile);
export const projects = z.array(z.object({title:z.string().min(1),label:z.string(),description:z.string(),technologies:z.array(z.string()),repository:url,featured:z.boolean(),highlights:z.array(z.object({title:z.string(),description:z.string()})).default([]),workflow:z.array(z.string()).default([])})).parse(rawProjects);
export const credentials = z.array(z.object({id:z.string().regex(/^[a-z0-9-]+$/),title:z.string().min(1),issuer:z.string().min(1),kind:z.enum(['course','participation','badge']),date:z.string().refine(v=>!v||/^\d{4}-\d{2}(-\d{2})?$/.test(v),'Use YYYY-MM or YYYY-MM-DD'),verificationUrl:url,document:local}).refine(v=>!!(v.verificationUrl||v.document),'A credential needs a link or document')).parse(rawCredentials);
if(new Set(credentials.map(c=>c.id)).size!==credentials.length)throw new Error('Credential IDs must be unique');
const experienceDate = z.string().regex(/^\d{4}-\d{2}(-\d{2})?$/, 'Use YYYY-MM or YYYY-MM-DD').refine((value) => {
  const [year,month,day=1] = value.split('-').map(Number);
  const parsed = new Date(Date.UTC(year,month-1,day));
  return parsed.getUTCFullYear()===year&&parsed.getUTCMonth()===month-1&&parsed.getUTCDate()===day;
}, 'Enter a valid calendar date');
const experienceFields = {
  title:z.string().min(1),
  company:z.string().min(1),
  employmentType:z.string().optional(),
  startDate:experienceDate.optional(),
  endDate:experienceDate.optional(),
  current:z.boolean().optional(),
  location:z.string().optional(),
  description:z.string().optional(),
  skills:z.array(z.string()).optional(),
  logo:local.optional(),
  logoAlt:z.string().optional(),
  url:url.optional()
};
const experiencePosition = z.object({id:z.string().min(1),linkedinId:z.string().optional(),...experienceFields,current:z.boolean().default(false),skills:z.array(z.string()).default([])});
const manualExperience = z.object({
  manual:z.array(z.object({id:z.string().min(1),linkedinId:z.string().optional(),...experienceFields})),
  overrides:z.array(z.object({linkedinId:z.string().min(1),...experienceFields}))
}).parse(rawExperience);
const linkedInExperience = z.object({
  lastSynced:z.string().datetime().nullable(),
  entries:z.array(experiencePosition.extend({linkedinId:z.string().min(1)}))
}).parse(rawLinkedInExperience);
const manualLinkedInEntries = manualExperience.manual.filter((entry)=>entry.linkedinId);
const standaloneManualEntries = manualExperience.manual.filter((entry)=>!entry.linkedinId).map((entry)=>({...entry,current:entry.current??false,skills:entry.skills??[]}));
const manualOverrides = [...manualLinkedInEntries,...manualExperience.overrides];
const overridesByLinkedInId = new Map(manualOverrides.map((entry) => [entry.linkedinId!, entry]));
if(overridesByLinkedInId.size!==manualOverrides.length)throw new Error('Experience LinkedIn override IDs must be unique');
const linkedInIds = linkedInExperience.entries.map((entry) => entry.linkedinId);
if(new Set(linkedInIds).size!==linkedInIds.length)throw new Error('LinkedIn experience IDs must be unique');
const linkedInEntries = linkedInExperience.entries.map((entry) => {
  const override = overridesByLinkedInId.get(entry.linkedinId);
  if(!override)return entry;
  overridesByLinkedInId.delete(entry.linkedinId);
  return {...entry,...Object.fromEntries(Object.entries(override).filter(([,value])=>typeof value==='boolean'||(Array.isArray(value))||(typeof value==='string'&&value.length>0)))};
});
const unmatchedOverrides = [...overridesByLinkedInId.values()].map((entry)=>({...entry,id:'id' in entry?entry.id:`linkedin-${entry.linkedinId}`,current:entry.current??false,skills:entry.skills??[]}));
export const experience = [...standaloneManualEntries,...linkedInEntries,...unmatchedOverrides];
if(new Set(experience.map((entry)=>entry.id)).size!==experience.length)throw new Error('Experience IDs must be unique');
