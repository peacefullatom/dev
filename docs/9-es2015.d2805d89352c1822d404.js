(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"8Sym":function(t,e,c){"use strict";var s=c("ofXK"),n=c("fXoL"),o=c("qTCB"),a=c("tyNb");c("o5IB");let r=(()=>{class t{}return t.ngModuleDef=n.Wb({type:t}),t.ngInjectorDef=n.Vb({factory:function(e){return new(e||t)},imports:[[s.b,a.f]]}),t})();c("q6TO"),c.d(e,"a",(function(){return i}));let i=(()=>{class t{}return t.ngModuleDef=n.Wb({type:t}),t.ngInjectorDef=n.Vb({factory:function(e){return new(e||t)},imports:[[s.b,r,o.a]]}),t})()},OeOG:function(t,e,c){"use strict";c.d(e,"a",(function(){return u}));var s=c("fXoL"),n=c("bAt0"),o=c("ofXK");const a=["code"],r=[3,"ngClass","id"],i=[3,"ngClass"],p=["code",""],l=function(t){return{hide:t}},h=["*"];let u=(()=>{class t{constructor(t){this.idService=t,this.className="bg-dark text-light py-3 px-3 rounded",this.content=!1}ngOnInit(){this.id=this.id||this.idService.nextId(),this.value&&"string"!=typeof this.value&&(this.value=JSON.stringify(this.value))}ngOnChanges(t){(t.html||t.text||t.value)&&(this.content=!!this.html||!!this.text||!!this.value,this.html&&this.codeRef&&this.codeRef.nativeElement.insertAdjacentHTML("afterbegin",this.html))}render(){return this.value?this.value:this.text?this.text:""}}return t.ngFactoryDef=function(e){return new(e||t)(s.Yb(n.a))},t.ngComponentDef=s.Sb({type:t,selectors:[["app-code"]],viewQuery:function(t,e){var c;1&t&&s.zc(a,!0),2&t&&s.sc(c=s.jc())&&(e.codeRef=c.first)},inputs:{id:"id",value:"value",text:"text",html:"html"},features:[s.Ib()],ngContentSelectors:h,consts:7,vars:12,template:function(t,e){1&t&&(s.mc(),s.cc(0,"pre",r),s.Cc(),s.cc(1,"code"),s.lc(2),s.ac(),s.ac(),s.cc(3,"pre",i),s.Cc(),s.cc(4,"code",null,p),s.Fc(6),s.ac(),s.ac()),2&t&&(s.Mb(e.className),s.Dc(),s.oc("id",e.id),s.nc("ngClass",s.pc(8,l,e.content)),s.xc(3),s.Mb(e.className),s.Dc(),s.nc("ngClass",s.pc(10,l,!e.content)),s.xc(6),s.Gc(e.render()))},directives:[o.h],styles:[".hide[_ngcontent-%COMP%]{display:none}pre[_ngcontent-%COMP%]{max-height:20rem}"]}),t})()},o5IB:function(t,e,c){"use strict";var s=c("fXoL"),n=c("0eor"),o=c("bAt0");const a="button";var r=c("ofXK"),i=c("tyNb");c.d(e,"a",(function(){return v}));const p=[1,"nav","nav-tabs",3,"ngClass","id"],l=["class","nav-item",4,"ngFor","ngForOf"],h=[1,"nav-item"],u=[1,"nav-item","nav-link",3,"ngClass","routerLink","routerLinkActive","click"],d=function(t){return{active:t}};function f(t,e){if(1&t){const t=s.dc();s.cc(0,"li",h),s.cc(1,"a",u),s.ic("click",(function(c){s.uc(t);const n=e.$implicit;return s.kc().handleClick(c,n)})),s.Fc(2),s.ac(),s.ac()}if(2&t){const t=e.$implicit,c=s.kc();s.xc(1),s.nc("ngClass",s.pc(4,d,t.active))("routerLink",t.path)("routerLinkActive",c.active),s.xc(2),s.Gc(t.title)}}const m=function(t){return{"nav-justified flex-column flex-sm-row":t}};let v=(()=>{class t{constructor(t){this.idService=t,this.tabs=[],this.type=a,this.fill=!1,this.active=n.a}ngOnInit(){this.id=this.id||this.idService.nextId()}handleClick(t,e){if(this.type===a&&t.preventDefault(),e){const{click:t}=e;"function"==typeof t&&t(e)}}}return t.ngFactoryDef=function(e){return new(e||t)(s.Yb(o.a))},t.ngComponentDef=s.Sb({type:t,selectors:[["app-tabs"]],inputs:{id:"id",tabs:"tabs",type:"type",fill:"fill"},consts:2,vars:5,template:function(t,e){1&t&&(s.cc(0,"ul",p),s.Ec(1,f,3,6,"li",l),s.ac()),2&t&&(s.oc("id",e.id),s.nc("ngClass",s.pc(3,m,e.fill)),s.xc(1),s.nc("ngForOf",e.tabs))},directives:[r.h,r.i,i.e,i.d],styles:[".nav-item.nav-link[_ngcontent-%COMP%]{white-space:nowrap}"]}),t})()},q6TO:function(t,e,c){"use strict";var s=c("fXoL"),n=c("tm5u"),o=c("bAt0");const a="assets/sources";var r=c("o5IB"),i=c("ofXK"),p=c("OeOG");c.d(e,"a",(function(){return y}));const l=["data"],h=[3,"tabs","fill","id"],u=[1,"carousel",3,"id"],d=[1,"carousel-inner"],f=["class","carousel-item",3,"ngClass",4,"ngFor","ngForOf"],m=[1,"carousel-item",3,"ngClass"],v=[3,"html"],b=function(t){return{active:t}};function g(t,e){if(1&t&&(s.cc(0,"div",m),s.Zb(1,"app-code",v),s.ac()),2&t){const t=e.$implicit;s.nc("ngClass",s.pc(2,b,t.active)),s.xc(1),s.nc("html",t.source)}}let y=(()=>{class t{constructor(t){this.idService=t,this.sources=[],this.tabs=[],this.fill=!0}ngOnInit(){this.id=this.id||this.idService.nextId();const t=t=>{const e=t.split("/");return e[e.length-1]},e=(e,c)=>{if(e){const s=(t=>n[t])(e);if(s){const e={title:t(s.path),id:this.idService.nextId(),hash:s.hash,active:c,click:t=>this.tabClick(t)};e.active&&this.loadSource(e),this.tabs.push(e)}}},c=this.sources instanceof Array?this.sources:[this.sources];for(const s of c){const{id:t,component:c,singleComponent:n,directive:o,module:a,template:r,service:i,style:p,active:l}=s;t&&e(t,l),c&&["ComponentHtml","ComponentScss","ComponentTs","ModuleTs"].forEach((t,s)=>e(`${c}${t}`,!!l&&0===s)),n&&e(`${n}ComponentTs`,l),o&&e(`${o}DirectiveTs`,l),a&&e(`${a}ModuleTs`,l),i&&e(`${i}ServiceTs`,l),r&&e(`${r}ComponentHtml`,l),p&&e(`${p}ComponentScss`,l)}}ngAfterViewInit(){this.tabs.forEach(t=>this.loadSource(t))}tabClick(t){this.tabs.forEach(e=>e.active=e.id===t.id),this.loadSource(t)}loadSource(t){t.source&&!t.error||fetch(`${a}/${t.hash}`).then(e=>e.text().then(e=>{t.source=e,t.error=!1}),e=>{console.log(e),t.error=!0})}}return t.ngFactoryDef=function(e){return new(e||t)(s.Yb(o.a))},t.ngComponentDef=s.Sb({type:t,selectors:[["app-source-viewer"]],viewQuery:function(t,e){var c;1&t&&s.zc(l,!0),2&t&&s.sc(c=s.jc())&&(e.data=c.first)},inputs:{id:"id",sources:"sources"},consts:4,vars:5,template:function(t,e){1&t&&(s.Zb(0,"app-tabs",h),s.cc(1,"div",u),s.cc(2,"div",d),s.Ec(3,g,2,4,"div",f),s.ac(),s.ac()),2&t&&(s.nc("tabs",e.tabs)("fill",e.fill)("id",e.id),s.xc(1),s.oc("id",e.id),s.xc(3),s.nc("ngForOf",e.tabs))},directives:[r.a,i.i,i.h,p.a],styles:[""]}),t})()},qTCB:function(t,e,c){"use strict";c.d(e,"a",(function(){return o}));var s=c("ofXK"),n=c("fXoL");c("OeOG");let o=(()=>{class t{}return t.ngModuleDef=n.Wb({type:t}),t.ngInjectorDef=n.Vb({factory:function(e){return new(e||t)},imports:[[s.b]]}),t})()},tm5u:function(t){t.exports=JSON.parse('{"copyJs":{"path":"copy.js","hash":"tsay2hrj"},"buttonComponentHtml":{"path":"src/app/core/ui/button/button.component.html","hash":"qou3912l"},"buttonComponentScss":{"path":"src/app/core/ui/button/button.component.scss","hash":"hlbpjtwy"},"buttonComponentTs":{"path":"src/app/core/ui/button/button.component.ts","hash":"0ziuor9d"},"buttonModuleTs":{"path":"src/app/core/ui/button/button.module.ts","hash":"te8dyr6v"},"buttonPositiveComponentTs":{"path":"src/app/core/ui/button-positive/button-positive.component.ts","hash":"dqlmuz01"},"buttonPositiveModuleTs":{"path":"src/app/core/ui/button-positive/button-positive.module.ts","hash":"hntwfkcq"},"idServiceTs":{"path":"src/app/core/service/id.service.ts","hash":"mvwod4lq"},"idServiceConstTs":{"path":"src/app/core/service/id.service.const.ts","hash":"k1bufy6s"},"noteComponentTs":{"path":"src/app/core/ui/note/note.component.ts","hash":"dxnbk36y"},"noteComponentHtml":{"path":"src/app/core/ui/note/note.component.html","hash":"ywrphxae"},"alertsComponentHtml":{"path":"src/app/core/ui/alerts/alerts.component.html","hash":"cp5zjesn"},"alertsComponentScss":{"path":"src/app/core/ui/alerts/alerts.component.scss","hash":"c83ag1hz"},"alertsComponentTs":{"path":"src/app/core/ui/alerts/alerts.component.ts","hash":"svnt4b0d"},"alertsModuleTs":{"path":"src/app/core/ui/alerts/alerts.module.ts","hash":"uy5p89ag"},"alertsConstTs":{"path":"src/app/core/ui/alerts/const.ts","hash":"ylfgvj1h"},"alertsTypesTs":{"path":"src/app/core/ui/alerts/types.ts","hash":"8witx5v0"},"appModuleTs":{"path":"src/app/app.module.ts","hash":"wa9t2yck"},"appComponentTs":{"path":"src/app/app.component.ts","hash":"o2ub6s4m"},"appComponentHtml":{"path":"src/app/app.component.html","hash":"20qxfgrv"},"alertBlockComponentHtml":{"path":"src/app/core/ui/alerts/alert-block/alert-block.component.html","hash":"pany16vt"},"alertBlockComponentScss":{"path":"src/app/core/ui/alerts/alert-block/alert-block.component.scss","hash":"dy0e9mo6"},"alertBlockComponentTs":{"path":"src/app/core/ui/alerts/alert-block/alert-block.component.ts","hash":"3x19ytrb"},"alertBlockTypesTs":{"path":"src/app/core/ui/alerts/alert-block/types.ts","hash":"ngwrq4ac"},"alertServiceTs":{"path":"src/app/core/service/alert.service.ts","hash":"4mbakiq2"}}')},xITx:function(t,e,c){"use strict";c.r(e);var s=c("ofXK"),n=c("fXoL"),o=c("qTCB"),a=c("snBB"),r=c("U5I1"),i=c("8Sym"),p=c("tyNb"),l=c("f+iR"),h=c("+64M"),u=c("0LGF"),d=c("q6TO"),f=c("OeOG");const m=[3,"href"],v=[3,"sources"],b=[3,"value"],g=[{path:l.c,component:(()=>{class t{constructor(){this.angularCliGhPagesUrl="https://github.com/angular-schule/angular-cli-ghpages",this.copySources={id:"copyJs",active:!0},this.packageJson='\n  ...\n  "scripts": {\n    "ng": "ng",\n    "start": "ng serve",\n    "build": "ng build --prod && node copy.js",\n    "test": "ng test",\n    "lint": "ng lint",\n    "e2e": "ng e2e"\n  },\n  ...\n  '}ngOnInit(){}}return t.ngFactoryDef=function(e){return new(e||t)},t.ngComponentDef=n.Sb({type:t,selectors:[["app-utilities-github-pages-helper-script"]],consts:62,vars:3,template:function(t,e){1&t&&(n.cc(0,"h4"),n.Fc(1,"A helper script for the Github Pages."),n.ac(),n.cc(2,"p"),n.Fc(3," When I have started this project, I have found that Github Pages are requiring to have a copy of an "),n.cc(4,"strong"),n.Fc(5,"index.html"),n.ac(),n.Fc(6," file named "),n.cc(7,"strong"),n.Fc(8,"404.html"),n.ac(),n.Fc(9,".\n"),n.ac(),n.cc(10,"p"),n.Fc(11," There are projects which are solving this problem. For example, there is an "),n.cc(12,"app-external-link",m),n.Fc(13,"angular-cli-ghpages"),n.ac(),n.Fc(14," project.\n"),n.ac(),n.cc(15,"p"),n.Fc(16," But I wanted to solve the problem personally. Plus, I didn't want to add an extra layer to the project.\n"),n.ac(),n.cc(17,"p"),n.Fc(18,"As one of my teachers said:"),n.ac(),n.cc(19,"app-note"),n.Fc(20,'"Follow the KISS rule."'),n.ac(),n.cc(21,"p"),n.Fc(22,"That is why I had created this script: it is simple yet robust."),n.ac(),n.cc(23,"h5"),n.Fc(24,"Task"),n.ac(),n.cc(25,"p"),n.Fc(26," Copy an "),n.cc(27,"strong"),n.Fc(28,"index.html"),n.ac(),n.Fc(29," with a name "),n.cc(30,"strong"),n.Fc(31,"404.html"),n.ac(),n.Fc(32," after project compilation is over.\n"),n.ac(),n.cc(33,"h5"),n.Fc(34,"Solution"),n.ac(),n.cc(35,"p"),n.Fc(36,"Create a script for node.js, which will perform the routine."),n.ac(),n.cc(37,"p"),n.Fc(38,"Here is the script:"),n.ac(),n.Zb(39,"app-source-viewer",v),n.cc(40,"p"),n.Fc(41,"It is, indeed, simple."),n.ac(),n.cc(42,"h5"),n.Fc(43,"Explanation"),n.ac(),n.cc(44,"p"),n.Fc(45,"This script is running in the node.js environment."),n.ac(),n.cc(46,"p"),n.Fc(47," To start the script automatically, I have modified the package.json file. Here is an excerpt:\n"),n.ac(),n.Zb(48,"app-code",b),n.cc(49,"p"),n.Fc(50," Note the "),n.cc(51,"strong"),n.Fc(52,'"build"'),n.ac(),n.Fc(53," parameter - it starts the script. Value of this parameter instructs node.js to run "),n.cc(54,"strong"),n.Fc(55,"ng build"),n.ac(),n.Fc(56," and after that run "),n.cc(57,"strong"),n.Fc(58,"copy.js"),n.ac(),n.Fc(59,".\n"),n.ac(),n.cc(60,"p"),n.Fc(61,"The script will output the success or error message after it finishes."),n.ac()),2&t&&(n.xc(12),n.nc("href",e.angularCliGhPagesUrl),n.xc(39),n.nc("sources",e.copySources),n.xc(48),n.nc("value",e.packageJson))},directives:[h.a,u.a,d.a,f.a],styles:[""]}),t})()}];let y=(()=>{class t{}return t.ngModuleDef=n.Wb({type:t}),t.ngInjectorDef=n.Vb({factory:function(e){return new(e||t)},imports:[[p.f.forChild(g)],p.f]}),t})();p.f.forChild(g),c.d(e,"UtilitiesGithubPagesHelperScriptModule",(function(){return C}));let C=(()=>{class t{}return t.ngModuleDef=n.Wb({type:t}),t.ngInjectorDef=n.Vb({factory:function(e){return new(e||t)},imports:[[s.b,y,a.a,r.a,o.a,i.a]]}),t})()}}]);