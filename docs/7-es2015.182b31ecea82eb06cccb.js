(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{einz:function(t,e,c){"use strict";c.r(e);var n=c("ofXK"),s=c("fXoL"),o=c("6NWb"),i=c("0eor");const a="abcdefghijklmnopqrstuvwxyz0123456789";let r=(()=>{class t{constructor(){}nextId(){const t=[],e=a.split("").sort(()=>Math.random()>.5?-1:1);for(let c=0;c<6;c++){const c=Math.floor(Math.random()*e.length);t.push(e[c])}return t.join("")}}return t.ngInjectableDef=s.Ub({token:t,factory:function(e){return new(e||t)},providedIn:"root"}),t})();const l=[3,"ngClass","id"],u=function(t){return{disabled:t}},p=["*"];let d=(()=>{class t{constructor(t,e){this.elementRef=t,this.idService=e,this.style=i.f,this.size=i.h}ngOnInit(){this.id=this.id||this.idService.nextId()}checkDisabled(){return this.elementRef.nativeElement.style.pointerEvents=this.disabled?"none":"all",this.disabled}}return t.ngFactoryDef=function(e){return new(e||t)(s.Yb(s.o),s.Yb(r))},t.ngComponentDef=s.Sb({type:t,selectors:[["app-button"]],inputs:{id:"id",style:"style",size:"size",disabled:"disabled"},ngContentSelectors:p,consts:2,vars:7,template:function(t,e){1&t&&(s.mc(),s.cc(0,"button",l),s.Cc(),s.lc(1),s.ac()),2&t&&(s.Ob("btn ",e.style," ",e.size,""),s.Dc(),s.oc("id",e.id),s.nc("ngClass",s.pc(5,u,e.checkDisabled())))},directives:[n.h],styles:[".btn[_ngcontent-%COMP%]{cursor:pointer}.btn.disabled[_ngcontent-%COMP%]{pointer-events:none}"]}),t})();const b=[3,"ngClass","id"],h=function(t){return{disabled:t}},f=["*"];let m=(()=>{class t extends d{constructor(t,e){super(t,e),this.elementRef=t,this.idService=e,this.style=i.j}}return t.ngFactoryDef=function(e){return new(e||t)(s.Yb(s.o),s.Yb(r))},t.ngComponentDef=s.Sb({type:t,selectors:[["app-button-positive"]],inputs:{style:"style"},features:[s.Hb],ngContentSelectors:f,consts:2,vars:7,template:function(t,e){1&t&&(s.mc(),s.cc(0,"button",b),s.Cc(),s.lc(1),s.ac()),2&t&&(s.Ob("btn ",e.style," ",e.size,""),s.Dc(),s.oc("id",e.id),s.nc("ngClass",s.pc(5,h,e.checkDisabled())))},directives:[n.h],styles:[".btn[_ngcontent-%COMP%]{cursor:pointer}.btn.disabled[_ngcontent-%COMP%]{pointer-events:none}"]}),t})(),v=(()=>{class t{}return t.ngModuleDef=s.Wb({type:t}),t.ngInjectorDef=s.Vb({factory:function(e){return new(e||t)},imports:[[n.b]]}),t})(),g=(()=>{class t{}return t.ngModuleDef=s.Wb({type:t}),t.ngInjectorDef=s.Vb({factory:function(e){return new(e||t)},imports:[[n.b,v]]}),t})();var y=c("qTCB"),F=c("snBB"),C=c("tyNb");const k="button",D=[1,"nav","nav-tabs",3,"ngClass"],S=["class","nav-item",4,"ngFor","ngForOf"],w=[1,"nav-item"],x=[1,"nav-item","nav-link",3,"ngClass","routerLink","routerLinkActive","click"],B=function(t){return{active:t}};function T(t,e){if(1&t){const t=s.dc();s.cc(0,"li",w),s.cc(1,"a",x),s.ic("click",function(c){s.uc(t);const n=e.$implicit;return s.kc().handleClick(c,n)}),s.Fc(2),s.ac(),s.ac()}if(2&t){const t=e.$implicit,c=s.kc();s.xc(1),s.nc("ngClass",s.pc(4,B,t.active))("routerLink",t.path)("routerLinkActive",c.active),s.xc(2),s.Gc(t.title)}}const M=function(t){return{"nav-justified flex-column flex-sm-row":t}};let I=(()=>{class t{constructor(){this.tabs=[],this.type=k,this.fill=!1,this.active=i.a}ngOnInit(){}handleClick(t,e){if(this.type===k&&t.preventDefault(),e){const{click:t}=e;"function"==typeof t&&t(e)}}}return t.ngFactoryDef=function(e){return new(e||t)},t.ngComponentDef=s.Sb({type:t,selectors:[["app-tabs"]],inputs:{tabs:"tabs",type:"type",fill:"fill"},consts:2,vars:4,template:function(t,e){1&t&&(s.cc(0,"ul",D),s.Ec(1,T,3,6,"li",S),s.ac()),2&t&&(s.nc("ngClass",s.pc(2,M,e.fill)),s.xc(1),s.nc("ngForOf",e.tabs))},directives:[n.h,n.i,C.e,C.d],styles:[""]}),t})(),z=(()=>{class t{}return t.ngModuleDef=s.Wb({type:t}),t.ngInjectorDef=s.Vb({factory:function(e){return new(e||t)},imports:[[n.b,C.f]]}),t})();var O=c("tm5u");const j="assets/sources";var A=c("OeOG");const E=["data"],L=[3,"tabs","fill"],$=[1,"carousel"],W=[1,"carousel-inner"],P=["class","carousel-item",3,"ngClass",4,"ngFor","ngForOf"],R=[1,"carousel-item",3,"ngClass"],H=[3,"html"],V=function(t){return{active:t}};function q(t,e){if(1&t&&(s.cc(0,"div",R),s.Zb(1,"app-code",H),s.ac()),2&t){const t=e.$implicit;s.nc("ngClass",s.pc(2,V,t.active)),s.xc(1),s.nc("html",t.source)}}let G=(()=>{class t{constructor(t){this.idService=t,this.sources=[],this.tabs=[]}ngOnInit(){const t=t=>{const e=t.split("/");return e[e.length-1]},e=(e,c)=>{if(e){const n=(t=>O[t])(e);if(n){const e={title:t(n.path),id:this.idService.nextId(),hash:n.hash,active:c,click:t=>this.tabClick(t)};e.active&&this.loadSource(e),this.tabs.push(e)}}},c=this.sources instanceof Array?this.sources:[this.sources];for(const n of c){const{id:t,component:c,singleComponent:s,directive:o,module:i,template:a,style:r,active:l}=n;t&&e(t,l),c&&["ComponentHtml","ComponentScss","ComponentTs","ModuleTs"].forEach((t,n)=>e(`${c}${t}`,!!l&&0===n)),s&&e(`${s}ComponentTs`,l),o&&e(`${o}DirectiveTs`,l),i&&e(`${i}ModuleTs`,l),a&&e(`${a}ComponentHtml`,l),r&&e(`${r}ComponentScss`,l)}}ngAfterViewInit(){this.tabs.forEach(t=>this.loadSource(t))}tabClick(t){this.tabs.forEach(e=>e.active=e.id===t.id),this.loadSource(t)}loadSource(t){t.source&&!t.error||fetch(`${j}/${t.hash}`).then(e=>e.text().then(e=>{t.source=e,t.error=!1}),e=>{console.log(e),t.error=!0})}}return t.ngFactoryDef=function(e){return new(e||t)(s.Yb(r))},t.ngComponentDef=s.Sb({type:t,selectors:[["app-source-viewer"]],viewQuery:function(t,e){var c;1&t&&s.zc(E,!0),2&t&&s.sc(c=s.jc())&&(e.data=c.first)},inputs:{sources:"sources"},consts:4,vars:3,template:function(t,e){1&t&&(s.Zb(0,"app-tabs",L),s.cc(1,"div",$),s.cc(2,"div",W),s.Ec(3,q,2,4,"div",P),s.ac(),s.ac()),2&t&&(s.nc("tabs",e.tabs)("fill",!0),s.xc(3),s.nc("ngForOf",e.tabs))},directives:[I,n.i,n.h,A.a],styles:[""]}),t})(),Y=(()=>{class t{}return t.ngModuleDef=s.Wb({type:t}),t.ngInjectorDef=s.Vb({factory:function(e){return new(e||t)},imports:[[n.b,z,y.a]]}),t})();var Z=c("f+iR"),U=c("wHSu"),_=c("Tb+T");const J="buttonPositive";var N=c("MFFz"),X=c("+64M");const K=[3,"disabled"],Q=[3,"icon"],tt=[3,"size"],et=[3,"sources"],ct=[3,"href"],nt=[{path:Z.c,component:(()=>{class t{constructor(){this.faIcons=U.e,this.buttonSources={component:"button",active:!0},this.buttonPositiveSources=[{singleComponent:J,active:!0},{module:J}],this.bsBtnDark=i.e,this.bsBtnWarning=i.k,this.bsBtnDanger=i.d,this.bsBtnSizeSmall=i.i,this.bsBtnSizeLarge=i.g,this.faIconSize2x=_.a,this.bootstrapUrl=N.a,this.buttonCode="<button></button>",this.buttonPositiveExampleCode='<app-button-positive (click)="agree()">Agree</app-button-positive>'}ngOnInit(){}}return t.ngFactoryDef=function(e){return new(e||t)},t.ngComponentDef=s.Sb({type:t,selectors:[["app-components-button"]],consts:98,vars:12,template:function(t,e){1&t&&(s.cc(0,"h4"),s.Fc(1,"Button"),s.ac(),s.cc(2,"p"),s.Fc(3,"The button is one of the most usable interactive UI building blocks."),s.ac(),s.cc(4,"p"),s.Fc(5," Buttons can be "),s.cc(6,"app-button",K),s.Cc(),s.Fc(7,"disabled"),s.ac(),s.Fc(8,", contain an "),s.cc(9,"app-button"),s.Zb(10,"fa-icon",Q),s.Fc(11," icon"),s.ac(),s.Fc(12,", be "),s.cc(13,"app-button",tt),s.Cc(),s.Fc(14,"LARGE"),s.ac(),s.Fc(15," or "),s.cc(16,"app-button",tt),s.Cc(),s.Fc(17,"small"),s.ac(),s.Fc(18,", etc.\n"),s.ac(),s.cc(19,"p"),s.Fc(20,"So, the number of use cases for such a simple element is innumerable."),s.ac(),s.cc(21,"p"),s.Fc(22," All this power hides behind a simple tag:\n"),s.ac(),s.cc(23,"app-code"),s.Fc(24),s.ac(),s.cc(25,"p"),s.Fc(26," The simplest way to achieve this goal is to create a set of wrapping classes. Thus the only thing you'll need is to insert a button into the template and define its behavior.\n"),s.ac(),s.cc(27,"p"),s.Fc(28," What will these classes do? For the most part, they will provide you a ready to use component with all the required styles applied. Also, you can predefine some logic, for example, create a toggle button.\n"),s.ac(),s.cc(29,"p"),s.Fc(30,"Let's have a look at the base class one can use."),s.ac(),s.Zb(31,"app-source-viewer",et),s.cc(32,"p"),s.Fc(33,"The design of this class is simple and minimalistic."),s.ac(),s.cc(34,"h5"),s.Fc(35,"Template"),s.ac(),s.cc(36,"p"),s.Fc(37," The template contains a simple HTML button component as its base. The "),s.cc(38,"code"),s.Fc(39,"button"),s.ac(),s.Fc(40," tag contains an id, a CSS class definition based on settings, and a dynamic CSS class to track disabled state.\n"),s.ac(),s.cc(41,"h5"),s.Fc(42,"Style"),s.ac(),s.cc(43,"p"),s.Fc(44," Style definitions are minimal and containing only the most basic settings. For the most part, they are adding "),s.cc(45,"code"),s.Fc(46,"cursor"),s.ac(),s.Fc(47," pointer and removing "),s.cc(48,"code"),s.Fc(49,"pointer-events"),s.ac(),s.Fc(50," in disabled mode. The rest of the style definitions are "),s.cc(51,"app-external-link",ct),s.Fc(52,"Bootstrap"),s.ac(),s.Fc(53,".\n"),s.ac(),s.cc(54,"h5"),s.Fc(55,"Component"),s.ac(),s.cc(56,"p"),s.Fc(57," The component contains several input interfaces: an id, a style, a size, and a disabled state. Some of the interfaces have a default value.\n"),s.ac(),s.cc(58,"p"),s.Fc(59," The only tricky part of the component is a "),s.cc(60,"code"),s.Fc(61,"checkDisabled"),s.ac(),s.Fc(62," method. Because a click event is applied directly to the shadow DOM element, this method affects the "),s.cc(63,"code"),s.Fc(64,"pointer-events"),s.ac(),s.Fc(65," of the host element.\n"),s.ac(),s.cc(66,"h5"),s.Fc(67,"Module"),s.ac(),s.cc(68,"p"),s.Fc(69," The module of this component contains only the required definitions and imports.\n"),s.ac(),s.cc(70,"h5"),s.Fc(71,"Example"),s.ac(),s.cc(72,"p"),s.Fc(73,"Let's assume that some project requires a set of ready to use buttons."),s.ac(),s.cc(74,"p"),s.Fc(75," Among this set, there could be a default button for all positive cases. E.g. like submit, ok, agree, etc.\n"),s.ac(),s.cc(76,"p"),s.Fc(77," And it should look like this: "),s.cc(78,"app-button-positive"),s.Fc(79,"Submit"),s.ac(),s.Fc(80,", "),s.cc(81,"app-button-positive"),s.Fc(82,"Ok"),s.ac(),s.Fc(83,", "),s.cc(84,"app-button-positive"),s.Fc(85,"Agree"),s.ac(),s.Fc(86,".\n"),s.ac(),s.cc(87,"p"),s.Fc(88,"Here is the code:"),s.ac(),s.Zb(89,"app-source-viewer",et),s.cc(90,"p"),s.Fc(91," This way, a project can easily have any set of predefined components. Later on, one can use it as follows:\n"),s.ac(),s.cc(92,"app-code"),s.Fc(93),s.ac(),s.cc(94,"h5"),s.Fc(95,"Conclusion"),s.ac(),s.cc(96,"p"),s.Fc(97," Having a set of predefined components boosts your project development. The button is a basic block of an interface. Buttons can have lots of predefined properties and logic.\n"),s.ac()),2&t&&(s.xc(6),s.Bc(s.Rb),s.Ac(e.bsBtnDark),s.Dc(),s.nc("disabled",!0),s.xc(10),s.nc("icon",e.faIcons),s.xc(13),s.Bc(s.Rb),s.Ac(e.bsBtnWarning),s.Dc(),s.nc("size",e.bsBtnSizeLarge),s.xc(16),s.Bc(s.Rb),s.Ac(e.bsBtnDanger),s.Dc(),s.nc("size",e.bsBtnSizeSmall),s.xc(24),s.Gc(e.buttonCode),s.xc(31),s.nc("sources",e.buttonSources),s.xc(51),s.nc("href",e.bootstrapUrl),s.xc(89),s.nc("sources",e.buttonPositiveSources),s.xc(93),s.Gc(e.buttonPositiveExampleCode))},directives:[d,o.a,A.a,G,X.a,m],styles:[""]}),t})()}];let st=(()=>{class t{}return t.ngModuleDef=s.Wb({type:t}),t.ngInjectorDef=s.Vb({factory:function(e){return new(e||t)},imports:[[C.f.forChild(nt)],C.f]}),t})();C.f.forChild(nt),c.d(e,"ComponentsButtonModule",function(){return ot});let ot=(()=>{class t{}return t.ngModuleDef=s.Wb({type:t}),t.ngInjectorDef=s.Vb({factory:function(e){return new(e||t)},imports:[[g,v,y.a,n.b,st,F.a,o.b,Y]]}),t})()}}]);