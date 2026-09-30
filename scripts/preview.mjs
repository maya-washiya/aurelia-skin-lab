import http from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../docs/',import.meta.url));
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.mp4':'video/mp4','.webp':'image/webp','.png':'image/png','.svg':'image/svg+xml'};
const base=(process.env.PREVIEW_BASE||'/').replace(/\/$/,'')+'/';
http.createServer(async(req,res)=>{try{
 const url=new URL(req.url,'http://localhost');
 if(!url.pathname.startsWith(base)){res.writeHead(404);return res.end('Not found');}
 let path=resolve(root,decodeURIComponent(url.pathname.slice(base.length)));
 if(path!==root.replace(/\/$/,'')&&!path.startsWith(root.replace(/\/$/,'')+sep)){res.writeHead(403);return res.end();}
 if((await stat(path)).isDirectory()){
  if(!url.pathname.endsWith('/')){res.writeHead(301,{Location:url.pathname+'/'});return res.end();}
  path=resolve(path,'index.html');
 }
 const data=await readFile(path);const headers={'Content-Type':types[extname(path)]||'application/octet-stream','Accept-Ranges':'bytes'};
 const range=/^bytes=(\d+)-(\d*)$/.exec(req.headers.range||'');
 if(range){const start=Number(range[1]),end=Math.min(range[2]?Number(range[2]):data.length-1,data.length-1);if(start>end){res.writeHead(416);return res.end();}res.writeHead(206,{...headers,'Content-Range':`bytes ${start}-${end}/${data.length}`,'Content-Length':end-start+1});res.end(data.subarray(start,end+1));}
 else {res.writeHead(200,{...headers,'Content-Length':data.length});res.end(data);}
 }catch{res.writeHead(404);res.end('Not found');}
}).listen(Number(process.env.PORT||4173),'0.0.0.0',()=>console.log(`Preview: http://localhost:${process.env.PORT||4173}${base}`));
