import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
const root=path.resolve(fileURLToPath(new URL('../',import.meta.url)));
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const hash=p=>createHash('sha256').update(fs.readFileSync(path.join(root,p))).digest('hex');
const source=JSON.parse(read('brand/cohnsoft/UPSTREAM.json'));
const product=JSON.parse(read('brand/product.json'));
const previews=['docs/brand-preview-light.html','docs/brand-preview-dark.html'];
const contrast=(a,b)=>{const lum=s=>{const c=s.match(/[0-9a-f]{2}/gi).map(v=>parseInt(v,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return c[0]*.2126+c[1]*.7152+c[2]*.0722};const x=lum(a),y=lum(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05)};

test('official asset bytes match the pinned source manifest',()=>{
 assert.equal(source.repository,'https://github.com/danecohn/cohnsoftassets');
 assert.equal(source.commit,'752e894f90f1e58e62ae466352cb03c8bfd7d703');
 assert.ok(source.files.length>40);
 for(const f of source.files){assert.ok(!f.path.startsWith('/')&&!f.path.split('/').includes('..'));assert.equal(hash('brand/cohnsoft/'+f.path),f.sha256,f.path)}
 for(const required of ['css/goldengate.css','css/cohnsans.css','fonts/OFL.txt','fonts/CohnSans-Regular.woff2','fonts/CohnSans-Bold.woff2','fonts/CohnSans-Regular.ttf','fonts/CohnSans-Bold.ttf','icons/cohnsoft.icns','icons/cohnsoft.ico','logos/social/cohnsoft-social-1200x630.png'])assert.ok(source.files.some(f=>f.path===required),required);
});
test('product identity uses exact company and founder credits without changing the repo URL',()=>{
 assert.equal(product.name,'Cohn Banshees');assert.equal(product.company,'Cohnsoft');assert.equal(product.credit,'A product of Cohnsoft.');assert.equal(product.founder,'Cohnsoft was founded by Demetria Althea Cohn.');assert.equal(product.repository,'https://github.com/danecohn/banshees');
 for(const file of ['README.md',...previews]){const text=read(file);for(const s of [product.name,product.credit,product.founder])assert.ok(text.includes(s),file+': '+s)}
});
test('original project licence, bundled font licence and source attribution survive',()=>{
 assert.equal(hash('LICENSE'),'3972dc9744f6499f0f9b2dbf76696f2ae7ad8af9b23dde66d6af86c9dfb36986');
 assert.match(read('brand/cohnsoft/fonts/OFL.txt'),/SIL OPEN FONT LICENSE Version 1\.1/);
 assert.match(read('brand/cohnsoft/fonts/OFL.txt'),/Copyright 2026 Cohnsoft/);
 assert.match(read('brand/cohnsoft/BRAND.md'),/AltStack Sprite/);
});
test('preview pages and stylesheet dependencies resolve locally without runtime hotlinks',()=>{
 const paths=new Set([...previews,'docs/brand-preview.css','brand/cohnsoft/css/cohnsans.css','brand/cohnsoft/css/goldengate.css']);
 for(const file of paths){const text=read(file);assert.ok(!/<script\b/i.test(text),file);const refs=[...text.matchAll(/(?:src|href)="([^"]+)"|url\(["']?([^\)"']+)["']?\)/g)].map(m=>m[1]||m[2]);for(const ref of refs){if(ref.startsWith('#'))continue;assert.ok(!/^(https?:|\/\/|data:)/.test(ref),ref);const target=path.resolve(root,path.dirname(file),ref);assert.ok(target.startsWith(root+path.sep),ref);assert.ok(fs.existsSync(target),file+' -> '+ref)}}
});
test('preview text colours meet 4.5:1 on actual light and dark content surfaces',()=>{
 const t=JSON.parse(read('brand/cohnsoft/tokens.json'));
 for(const surface of [t.neutral.Paper,'#f7f7fa'])for(const text of [t.neutral.Ink,t.neutral.Graphite,t.green['700']])assert.ok(contrast(text,surface)>=4.5,text+' on '+surface);
 for(const surface of [t.neutral.Night,t.neutral['Night Raised'],'#242426'])for(const text of ['#f5f5f7','#aeaeb2',t.green['400']])assert.ok(contrast(text,surface)>=4.5,text+' on '+surface);
 assert.match(read('docs/brand-preview.css'),/outline:3px solid #0a7a37/);
 assert.match(read('docs/brand-preview.css'),/outline-color:#3fd477/);
 for(const preference of ['prefers-reduced-motion','prefers-reduced-transparency','forced-colors'])assert.ok(read('brand/cohnsoft/css/goldengate.css').includes(preference));
});
test('the scaffold is not misrepresented as a released application',()=>{
 assert.match(product.stage,/no application implemented/);
 for(const file of previews){const html=read(file);assert.match(html,/brand documentation preview/);assert.match(html,/An application has not been implemented/);assert.match(html,/No application or installer is available/);assert.match(html,/No user data or configuration is migrated/)}
});
