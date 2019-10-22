(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"8Sym":function(t,c,e){"use strict";var n=e("ofXK"),o=e("fXoL"),s=e("qTCB"),i=e("tyNb");e("o5IB");let a=(()=>{class t{}return t.ngModuleDef=o.Wb({type:t}),t.ngInjectorDef=o.Vb({factory:function(c){return new(c||t)},imports:[[n.b,i.f]]}),t})();e("q6TO"),e.d(c,"a",(function(){return r}));let r=(()=>{class t{}return t.ngModuleDef=o.Wb({type:t}),t.ngInjectorDef=o.Vb({factory:function(c){return new(c||t)},imports:[[n.b,a,s.a]]}),t})()},MFFz:function(t,c,e){"use strict";e.d(c,"b",(function(){return n})),e.d(c,"e",(function(){return o})),e.d(c,"d",(function(){return s})),e.d(c,"a",(function(){return i})),e.d(c,"c",(function(){return a}));const n="https://code.visualstudio.com/",o="https://git-scm.com/",s="https://git-scm.com/downloads/guis",i="https://getbootstrap.com/",a="conclusion"},OeOG:function(t,c,e){"use strict";e.d(c,"a",(function(){return h}));var n=e("fXoL"),o=e("bAt0"),s=e("ofXK");const i=["code"],a=[3,"ngClass","id"],r=[3,"ngClass"],p=["code",""],l=function(t){return{hide:t}},u=["*"];let h=(()=>{class t{constructor(t){this.idService=t,this.className="bg-dark text-light py-3 px-3 rounded",this.content=!1}ngOnInit(){this.id=this.id||this.idService.nextId(),this.value&&"string"!=typeof this.value&&(this.value=JSON.stringify(this.value))}ngOnChanges(t){(t.html||t.text||t.value)&&(this.content=!!this.html||!!this.text||!!this.value,this.html&&this.codeRef&&this.codeRef.nativeElement.insertAdjacentHTML("afterbegin",this.html))}render(){return this.value?this.value:this.text?this.text:""}}return t.ngFactoryDef=function(c){return new(c||t)(n.Yb(o.a))},t.ngComponentDef=n.Sb({type:t,selectors:[["app-code"]],viewQuery:function(t,c){var e;1&t&&n.zc(i,!0),2&t&&n.sc(e=n.jc())&&(c.codeRef=e.first)},inputs:{id:"id",value:"value",text:"text",html:"html"},features:[n.Ib()],ngContentSelectors:u,consts:7,vars:12,template:function(t,c){1&t&&(n.mc(),n.cc(0,"pre",a),n.Cc(),n.cc(1,"code"),n.lc(2),n.ac(),n.ac(),n.cc(3,"pre",r),n.Cc(),n.cc(4,"code",null,p),n.Fc(6),n.ac(),n.ac()),2&t&&(n.Mb(c.className),n.Dc(),n.oc("id",c.id),n.nc("ngClass",n.pc(8,l,c.content)),n.xc(3),n.Mb(c.className),n.Dc(),n.nc("ngClass",n.pc(10,l,!c.content)),n.xc(6),n.Gc(c.render()))},directives:[s.h],styles:[".hide[_ngcontent-%COMP%]{display:none}pre[_ngcontent-%COMP%]{max-height:20rem}"]}),t})()},Tkj9:function(t,c,e){"use strict";e.d(c,"b",(function(){return i})),e.d(c,"a",(function(){return a}));var n=e("f+iR"),o=e("bHPh"),s=e("z9Wc");const i=[{path:n.c,component:o.a}],a=[n.h,n.i,s.b]},bHPh:function(t,c,e){"use strict";e.d(c,"a",(function(){return p}));var n=e("fXoL"),o=e("MFFz"),s=e("q6TO"),i=e("OeOG");const a=[3,"sources"],r=[3,"id"];let p=(()=>{class t{constructor(){this.idServiceSources=[{service:"id",active:!0},{id:"idServiceConstTs"}],this.noteSources=[{singleComponent:"note",active:!0},{template:"note"}],this.inputCode="@Input() id: string;",this.injectionCode="constructor(private readonly idService: IdService) {}",this.initializationCode="ngOnInit() {\n  this.id = this.id || this.idService.nextId();\n}",this.templateCode='<div class="card {{ type }} mb-3" id="{{ id }}"></div>',this.customIdCode="<app-note [id]=\"'customId'\">Follow the KISS rule!</app-note>",this.implementationAnchor="implementation",this.conclusionAnchor=o.c}ngOnInit(){}}return t.ngFactoryDef=function(c){return new(c||t)},t.ngComponentDef=n.Sb({type:t,selectors:[["app-utilities-id"]],consts:71,vars:9,template:function(t,c){1&t&&(n.cc(0,"h4"),n.Fc(1,"Id service"),n.ac(),n.cc(2,"p"),n.Fc(3," I prefer to add an "),n.cc(4,"code"),n.Fc(5,"id"),n.ac(),n.Fc(6," to all components which can appear more than once in a single view.\n"),n.ac(),n.cc(7,"p"),n.Fc(8,"Assigning "),n.cc(9,"code"),n.Fc(10,"ids"),n.ac(),n.Fc(11," makes it easier to debug the project."),n.ac(),n.cc(12,"p"),n.Fc(13,"But adding "),n.cc(14,"code"),n.Fc(15,"ids"),n.ac(),n.Fc(16," manually takes time and tons of imagination."),n.ac(),n.cc(17,"p"),n.Fc(18," To simplify such a routine task, I'm using the next solution:\n"),n.ac(),n.Zb(19,"app-source-viewer",a),n.cc(20,"h5",r),n.Fc(21,"Implementation"),n.ac(),n.cc(22,"p"),n.Fc(23,"Here is an example:"),n.ac(),n.Zb(24,"app-source-viewer",a),n.cc(25,"p"),n.Fc(26," The implementation is quite easy.\n"),n.ac(),n.cc(27,"p"),n.Fc(28," First of all, a component has an input field named "),n.cc(29,"code"),n.Fc(30,"id"),n.ac(),n.Fc(31," of type string.\n"),n.ac(),n.cc(32,"app-code"),n.Fc(33),n.ac(),n.cc(34,"p"),n.Fc(35," After that, you need to inject a service into the constructor:\n"),n.ac(),n.cc(36,"app-code"),n.Fc(37),n.ac(),n.cc(38,"p"),n.Fc(39,"Check the "),n.cc(40,"code"),n.Fc(41,"id"),n.ac(),n.Fc(42," during the initialization:"),n.ac(),n.cc(43,"app-code"),n.Fc(44),n.ac(),n.cc(45,"p"),n.Fc(46,"Lastly, assign an "),n.cc(47,"code"),n.Fc(48,"id"),n.ac(),n.Fc(49," to a top-level tag of the template:"),n.ac(),n.cc(50,"app-code"),n.Fc(51),n.ac(),n.cc(52,"p"),n.Fc(53," Also, this approach allows defining a custom "),n.cc(54,"code"),n.Fc(55,"id"),n.ac(),n.Fc(56," in a template:\n"),n.ac(),n.cc(57,"app-code"),n.Fc(58),n.ac(),n.cc(59,"h5",r),n.Fc(60,"Conclusion"),n.ac(),n.cc(61,"p"),n.cc(62,"code"),n.Fc(63,"Ids"),n.ac(),n.Fc(64," allow you debug your code and layout. Automatically generated "),n.cc(65,"code"),n.Fc(66,"ids"),n.ac(),n.Fc(67," are a good solution. Having an ability to define custom "),n.cc(68,"code"),n.Fc(69,"id"),n.ac(),n.Fc(70," adds flexibility to this solution.\n"),n.ac()),2&t&&(n.xc(19),n.nc("sources",c.idServiceSources),n.xc(20),n.oc("id",c.implementationAnchor),n.xc(24),n.nc("sources",c.noteSources),n.xc(33),n.Gc(c.inputCode),n.xc(37),n.Gc(c.injectionCode),n.xc(44),n.Gc(c.initializationCode),n.xc(51),n.Gc(c.templateCode),n.xc(58),n.Gc(c.customIdCode),n.xc(59),n.oc("id",c.conclusionAnchor))},directives:[s.a,i.a],styles:[""]}),t})()},o5IB:function(t,c,e){"use strict";var n=e("fXoL"),o=e("0eor"),s=e("bAt0");const i="button";var a=e("ofXK"),r=e("tyNb");e.d(c,"a",(function(){return v}));const p=[1,"nav","nav-tabs",3,"ngClass","id"],l=["class","nav-item",4,"ngFor","ngForOf"],u=[1,"nav-item"],h=[1,"nav-item","nav-link",3,"ngClass","routerLink","routerLinkActive","click"],d=function(t){return{active:t}};function m(t,c){if(1&t){const t=n.dc();n.cc(0,"li",u),n.cc(1,"a",h),n.ic("click",(function(e){n.uc(t);const o=c.$implicit;return n.kc().handleClick(e,o)})),n.Fc(2),n.ac(),n.ac()}if(2&t){const t=c.$implicit,e=n.kc();n.xc(1),n.nc("ngClass",n.pc(4,d,t.active))("routerLink",t.path)("routerLinkActive",e.active),n.xc(2),n.Gc(t.title)}}const f=function(t){return{"nav-justified flex-column flex-sm-row":t}};let v=(()=>{class t{constructor(t){this.idService=t,this.tabs=[],this.type=i,this.fill=!1,this.active=o.a}ngOnInit(){this.id=this.id||this.idService.nextId()}handleClick(t,c){if(this.type===i&&t.preventDefault(),c){const{click:t}=c;"function"==typeof t&&t(c)}}}return t.ngFactoryDef=function(c){return new(c||t)(n.Yb(s.a))},t.ngComponentDef=n.Sb({type:t,selectors:[["app-tabs"]],inputs:{id:"id",tabs:"tabs",type:"type",fill:"fill"},consts:2,vars:5,template:function(t,c){1&t&&(n.cc(0,"ul",p),n.Ec(1,m,3,6,"li",l),n.ac()),2&t&&(n.oc("id",c.id),n.nc("ngClass",n.pc(3,f,c.fill)),n.xc(1),n.nc("ngForOf",c.tabs))},directives:[a.h,a.i,r.e,r.d],styles:[".nav-item.nav-link[_ngcontent-%COMP%]{white-space:nowrap}"]}),t})()},q6TO:function(t,c,e){"use strict";var n=e("fXoL"),o=e("tm5u"),s=e("bAt0");const i="assets/sources";var a=e("o5IB"),r=e("ofXK"),p=e("OeOG");e.d(c,"a",(function(){return y}));const l=["data"],u=[3,"tabs","fill","id"],h=[1,"carousel",3,"id"],d=[1,"carousel-inner"],m=["class","carousel-item",3,"ngClass",4,"ngFor","ngForOf"],f=[1,"carousel-item",3,"ngClass"],v=[3,"html"],b=function(t){return{active:t}};function g(t,c){if(1&t&&(n.cc(0,"div",f),n.Zb(1,"app-code",v),n.ac()),2&t){const t=c.$implicit;n.nc("ngClass",n.pc(2,b,t.active)),n.xc(1),n.nc("html",t.source)}}let y=(()=>{class t{constructor(t){this.idService=t,this.sources=[],this.tabs=[],this.fill=!0}ngOnInit(){this.id=this.id||this.idService.nextId();const t=t=>{const c=t.split("/");return c[c.length-1]},c=(c,e)=>{if(c){const n=(t=>o[t])(c);if(n){const c={title:t(n.path),id:this.idService.nextId(),hash:n.hash,active:e,click:t=>this.tabClick(t)};c.active&&this.loadSource(c),this.tabs.push(c)}}},e=this.sources instanceof Array?this.sources:[this.sources];for(const n of e){const{id:t,component:e,singleComponent:o,directive:s,module:i,template:a,service:r,style:p,active:l}=n;t&&c(t,l),e&&["ComponentHtml","ComponentScss","ComponentTs","ModuleTs"].forEach((t,n)=>c(`${e}${t}`,!!l&&0===n)),o&&c(`${o}ComponentTs`,l),s&&c(`${s}DirectiveTs`,l),i&&c(`${i}ModuleTs`,l),r&&c(`${r}ServiceTs`,l),a&&c(`${a}ComponentHtml`,l),p&&c(`${p}ComponentScss`,l)}}ngAfterViewInit(){this.tabs.forEach(t=>this.loadSource(t))}tabClick(t){this.tabs.forEach(c=>c.active=c.id===t.id),this.loadSource(t)}loadSource(t){t.source&&!t.error||fetch(`${i}/${t.hash}`).then(c=>c.text().then(c=>{t.source=c,t.error=!1}),c=>{console.log(c),t.error=!0})}}return t.ngFactoryDef=function(c){return new(c||t)(n.Yb(s.a))},t.ngComponentDef=n.Sb({type:t,selectors:[["app-source-viewer"]],viewQuery:function(t,c){var e;1&t&&n.zc(l,!0),2&t&&n.sc(e=n.jc())&&(c.data=e.first)},inputs:{id:"id",sources:"sources"},consts:4,vars:5,template:function(t,c){1&t&&(n.Zb(0,"app-tabs",u),n.cc(1,"div",h),n.cc(2,"div",d),n.Ec(3,g,2,4,"div",m),n.ac(),n.ac()),2&t&&(n.nc("tabs",c.tabs)("fill",c.fill)("id",c.id),n.xc(1),n.oc("id",c.id),n.xc(3),n.nc("ngForOf",c.tabs))},directives:[a.a,r.i,r.h,p.a],styles:[""]}),t})()},qTCB:function(t,c,e){"use strict";e.d(c,"a",(function(){return s}));var n=e("ofXK"),o=e("fXoL");e("OeOG");let s=(()=>{class t{}return t.ngModuleDef=o.Wb({type:t}),t.ngInjectorDef=o.Vb({factory:function(c){return new(c||t)},imports:[[n.b]]}),t})()},tm5u:function(t){t.exports=JSON.parse('{"copyJs":{"path":"copy.js","hash":"tsay2hrj"},"buttonComponentHtml":{"path":"src/app/core/ui/button/button.component.html","hash":"qou3912l"},"buttonComponentScss":{"path":"src/app/core/ui/button/button.component.scss","hash":"hlbpjtwy"},"buttonComponentTs":{"path":"src/app/core/ui/button/button.component.ts","hash":"0ziuor9d"},"buttonModuleTs":{"path":"src/app/core/ui/button/button.module.ts","hash":"te8dyr6v"},"buttonPositiveComponentTs":{"path":"src/app/core/ui/button-positive/button-positive.component.ts","hash":"dqlmuz01"},"buttonPositiveModuleTs":{"path":"src/app/core/ui/button-positive/button-positive.module.ts","hash":"hntwfkcq"},"idServiceTs":{"path":"src/app/core/service/id.service.ts","hash":"mvwod4lq"},"idServiceConstTs":{"path":"src/app/core/service/id.service.const.ts","hash":"k1bufy6s"},"noteComponentTs":{"path":"src/app/core/ui/note/note.component.ts","hash":"dxnbk36y"},"noteComponentHtml":{"path":"src/app/core/ui/note/note.component.html","hash":"ywrphxae"},"alertsComponentHtml":{"path":"src/app/core/ui/alerts/alerts.component.html","hash":"cp5zjesn"},"alertsComponentScss":{"path":"src/app/core/ui/alerts/alerts.component.scss","hash":"c83ag1hz"},"alertsComponentTs":{"path":"src/app/core/ui/alerts/alerts.component.ts","hash":"svnt4b0d"},"alertsModuleTs":{"path":"src/app/core/ui/alerts/alerts.module.ts","hash":"uy5p89ag"},"alertsConstTs":{"path":"src/app/core/ui/alerts/const.ts","hash":"ylfgvj1h"},"alertsTypesTs":{"path":"src/app/core/ui/alerts/types.ts","hash":"8witx5v0"},"appModuleTs":{"path":"src/app/app.module.ts","hash":"wa9t2yck"},"appComponentTs":{"path":"src/app/app.component.ts","hash":"o2ub6s4m"},"appComponentHtml":{"path":"src/app/app.component.html","hash":"20qxfgrv"},"alertBlockComponentHtml":{"path":"src/app/core/ui/alerts/alert-block/alert-block.component.html","hash":"pany16vt"},"alertBlockComponentScss":{"path":"src/app/core/ui/alerts/alert-block/alert-block.component.scss","hash":"dy0e9mo6"},"alertBlockComponentTs":{"path":"src/app/core/ui/alerts/alert-block/alert-block.component.ts","hash":"3x19ytrb"},"alertBlockTypesTs":{"path":"src/app/core/ui/alerts/alert-block/types.ts","hash":"ngwrq4ac"},"alertServiceTs":{"path":"src/app/core/service/alert.service.ts","hash":"4mbakiq2"}}')}}]);