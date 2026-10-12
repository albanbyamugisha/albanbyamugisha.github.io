export function filterCredentials(records, query) {
 const normalise=value=>value.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 const terms=normalise(query.trim()).split(/\s+/).filter(Boolean);
 return records.filter(record=>terms.every(term=>normalise(record.text).includes(term)));
}
export function validateMessage(data, elapsed) {
 if(data._honey)return 'Unable to submit this message. Please use the email link.';
 if(elapsed<2000)return 'Please take a moment to review your message, then send it.';
 const name=String(data.name||'').trim(),email=String(data.email||'').trim(),message=String(data.message||'').trim();
 if(!name||name.length>100)return 'Please enter your name (up to 100 characters).';
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||email.length>254)return 'Please enter a valid email address.';
 if(!message||message.length>5000)return 'Please enter a message (up to 5,000 characters).';
 return '';
}
export async function submitContact(endpoint, data, fetcher=fetch) {
 const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),20000);
 try {
  const response=await fetcher(endpoint,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({...data,name:data.name.trim(),email:data.email.trim(),message:data.message.trim()}),signal:controller.signal});
  const result=await response.json();
  if(!response.ok||!(result.success===true||result.success==='true'))return {ok:false,message:'Your message couldn’t be sent. Your words are still here—try again, or reach me by email.'};
  return {ok:true,message:'Your message has been accepted for delivery. I appreciate you taking the time to connect.'};
 } finally {clearTimeout(timer)}
}
