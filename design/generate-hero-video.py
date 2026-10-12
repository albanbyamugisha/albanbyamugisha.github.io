"""Render an original seamless engineering/AI motion asset, without stock footage."""
from pathlib import Path
import math, json
import numpy as np
from PIL import Image, ImageDraw, ImageFilter
import imageio_ffmpeg

out=Path('/tmp/alban-hero-video')
out.mkdir(exist_ok=True)
W,H,FPS,SECONDS=1280,720,24,8
y,x=np.mgrid[0:H,0:W]
blue=np.exp(-(((x-W*.68)/(W*.3))**2+((y-H*.45)/(H*.65))**2))
violet=np.exp(-(((x-W*.94)/(W*.27))**2+((y-H*.8)/(H*.65))**2))
background=np.stack([7+blue*9+violet*16,12+blue*18+violet*4,25+blue*38+violet*31],axis=-1).clip(0,255).astype('uint8')
rng=np.random.default_rng(42)
stars=rng.random((85,3))
writer=imageio_ffmpeg.write_frames(str(out/'hero-neural-systems.mp4'),(W,H),fps=FPS,codec='libx264',pix_fmt_out='yuv420p',quality=7,output_params=['-movflags','+faststart','-an'],ffmpeg_log_level='error')
writer.send(None)
def project(p,angle):
    px,py,pz=p
    c,s=math.cos(angle),math.sin(angle)
    xx=px*c+pz*s;zz=-px*s+pz*c
    tilt=.3
    yy=py*math.cos(tilt)-zz*math.sin(tilt);zz=py*math.sin(tilt)+zz*math.cos(tilt)
    f=580/(580+zz)
    return W*.71+xx*f,H*.47+yy*f
edges=[(0,1),(1,3),(3,2),(2,0),(4,5),(5,7),(7,6),(6,4),(0,4),(1,5),(2,6),(3,7)]
for frame in range(FPS*SECONDS):
    t=2*math.pi*frame/(FPS*SECONDS)
    img=Image.fromarray(background.copy()).convert('RGB')
    layer=Image.new('RGBA',(W,H));d=ImageDraw.Draw(layer)
    # A perspective circuit plane with slowly circulating data traces.
    for i in range(15):
        bx=100+i*97
        d.line([(W*.69,H*.40),(bx,H)],fill=(67,110,188,30),width=1)
    for i in range(9):
        yy=H*.49+(i/8)**1.9*H*.5
        d.line([(0,yy),(W,yy)],fill=(74,117,190,24),width=1)
    for sx,sy,phase in stars:
        xx=(sx*W+12*math.sin(t+phase*6))%W;yy=sy*H+7*math.cos(t+phase*6)
        intensity=int(45+90*(.5+.5*math.sin(t+phase*6)))
        d.ellipse((xx-1,yy-1,xx+1,yy+1),fill=(129,171,250,intensity))
    angle=.5+.20*math.sin(t)
    # Nested silicon-like lattices suggesting architecture and model layers.
    for size,color in [(142,(82,163,255,180)),(98,(149,123,255,175)),(48,(134,207,255,220))]:
        vertices=[project((a*size,b*size,c*size),angle) for a,b,c in [(-1,-1,-1),(-1,-1,1),(-1,1,-1),(-1,1,1),(1,-1,-1),(1,-1,1),(1,1,-1),(1,1,1)]]
        for e1,e2 in edges:
            p,q=vertices[e1],vertices[e2]
            d.line([p,q],fill=color,width=2 if size==48 else 1)
            u=(frame/(FPS*SECONDS)+e1/8)%1
            xx=p[0]+(q[0]-p[0])*u;yy=p[1]+(q[1]-p[1])*u
            d.ellipse((xx-2,yy-2,xx+2,yy+2),fill=(169,225,255,225))
        for xx,yy in vertices:d.ellipse((xx-3,yy-3,xx+3,yy+3),fill=color)
    # Orbiting model/data nodes connected into a neural system.
    node=[]
    for i in range(14):
        a=i*2*math.pi/14
        p=(math.cos(a)*270,math.sin(a)*185,math.sin(a*2+t)*45)
        node.append(project(p,angle))
    for i,p in enumerate(node):
        q=node[(i+3)%len(node)]
        d.line([p,q],fill=(125,133,242,55),width=1)
        d.line([p,(W*.71,H*.47)],fill=(65,141,232,35),width=1)
        pulse=.5+.5*math.sin(t+i)
        r=3+2*pulse
        d.ellipse((p[0]-r,p[1]-r,p[0]+r,p[1]+r),fill=(130,180,255,int(160+70*pulse)))
    glow=layer.filter(ImageFilter.GaussianBlur(9))
    img=Image.alpha_composite(img.convert('RGBA'),glow)
    img=Image.alpha_composite(img,layer).convert('RGB')
    if frame==0:img.save(out/'hero-neural-systems-poster.jpg',quality=90)
    writer.send(np.asarray(img))
writer.close()
(out/'generation.json').write_text(json.dumps({'title':'Neural Systems','method':'Original procedural animation rendered with NumPy/Pillow and encoded with imageio-ffmpeg','resolution':[W,H],'durationSeconds':SECONDS,'fps':FPS,'audio':False,'loop':'periodic 8-second cycle','visuals':'Nested architecture lattices, data traces, orbital neural nodes; blue/violet'},indent=2))
print('Generated',out/'hero-neural-systems.mp4',f'({(out/"hero-neural-systems.mp4").stat().st_size/1024/1024:.2f} MB)')
