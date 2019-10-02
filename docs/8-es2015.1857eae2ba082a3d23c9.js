(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{einz:function(e,t,c){"use strict";c.r(t);var n=c("ofXK"),o=c("fXoL"),s=c("6NWb"),i=c("0eor"),a=c("bAt0");const r=[3,"ngClass","id"],l=function(e){return{disabled:e}},p=["*"];let d=(()=>{class e{constructor(e,t){this.elementRef=e,this.idService=t,this.style=i.f,this.size=i.h}ngOnInit(){this.id=this.id||this.idService.nextId()}checkDisabled(){return this.elementRef.nativeElement.style.pointerEvents=this.disabled?"none":"all",this.disabled}}return e.ngFactoryDef=function(t){return new(t||e)(o.Yb(o.o),o.Yb(a.a))},e.ngComponentDef=o.Sb({type:e,selectors:[["app-button"]],inputs:{id:"id",style:"style",size:"size",disabled:"disabled"},ngContentSelectors:p,consts:2,vars:7,template:function(e,t){1&e&&(o.mc(),o.cc(0,"button",r),o.Cc(),o.lc(1),o.ac()),2&e&&(o.Ob("btn ",t.style," ",t.size,""),o.Dc(),o.oc("id",t.id),o.nc("ngClass",o.pc(5,l,t.checkDisabled())))},directives:[n.h],styles:[".btn[_ngcontent-%COMP%]{cursor:pointer}.btn.disabled[_ngcontent-%COMP%]{pointer-events:none}"]}),e})();const u=[3,"ngClass","id"],b=function(e){return{disabled:e}},h=["*"];let m=(()=>{class e extends d{constructor(e,t){super(e,t),this.elementRef=e,this.idService=t,this.style=i.j}}return e.ngFactoryDef=function(t){return new(t||e)(o.Yb(o.o),o.Yb(a.a))},e.ngComponentDef=o.Sb({type:e,selectors:[["app-button-positive"]],inputs:{style:"style"},features:[o.Hb],ngContentSelectors:h,consts:2,vars:7,template:function(e,t){1&e&&(o.mc(),o.cc(0,"button",u),o.Cc(),o.lc(1),o.ac()),2&e&&(o.Ob("btn ",t.style," ",t.size,""),o.Dc(),o.oc("id",t.id),o.nc("ngClass",o.pc(5,b,t.checkDisabled())))},directives:[n.h],styles:[".btn[_ngcontent-%COMP%]{cursor:pointer}.btn.disabled[_ngcontent-%COMP%]{pointer-events:none}"]}),e})(),f=(()=>{class e{}return e.ngModuleDef=o.Wb({type:e}),e.ngInjectorDef=o.Vb({factory:function(t){return new(t||e)},imports:[[n.b]]}),e})(),F=(()=>{class e{}return e.ngModuleDef=o.Wb({type:e}),e.ngInjectorDef=o.Vb({factory:function(t){return new(t||e)},imports:[[n.b,f]]}),e})();var g=c("qTCB"),y=c("snBB"),v=c("8Sym"),C=c("tyNb"),S=c("f+iR"),D=c("wHSu"),x=c("Tb+T");const w="buttonPositive";var A=c("MFFz"),k=c("OeOG"),B=c("q6TO"),T=c("+64M");const z=[3,"disabled"],M=[3,"icon"],O=[3,"size"],I=[3,"sources"],P=[3,"id"],j=[3,"href"],L=[{path:S.c,component:(()=>{class e{constructor(){this.faIcons=D.e,this.buttonSources={component:"button",active:!0},this.buttonPositiveSources=[{singleComponent:w,active:!0},{module:w}],this.bsBtnDark=i.e,this.bsBtnWarning=i.k,this.bsBtnDanger=i.d,this.bsBtnSizeSmall=i.i,this.bsBtnSizeLarge=i.g,this.faIconSize2x=x.a,this.bootstrapUrl=A.a,this.buttonCode="<button></button>",this.buttonPositiveExampleCode='<app-button-positive (click)="agree()">Agree</app-button-positive>',this.templateAnchor="template",this.styleAnchor="style",this.componentAnchor="component",this.moduleAnchor="module",this.exampleAnchor="example",this.conclusionAnchor="conclusion"}ngOnInit(){}}return e.ngFactoryDef=function(t){return new(t||e)},e.ngComponentDef=o.Sb({type:e,selectors:[["app-components-button"]],consts:98,vars:18,template:function(e,t){1&e&&(o.cc(0,"h4"),o.Fc(1,"Button"),o.ac(),o.cc(2,"p"),o.Fc(3,"The button is one of the most usable interactive UI building blocks."),o.ac(),o.cc(4,"p"),o.Fc(5," Buttons can be "),o.cc(6,"app-button",z),o.Cc(),o.Fc(7,"disabled"),o.ac(),o.Fc(8,", contain an "),o.cc(9,"app-button"),o.Zb(10,"fa-icon",M),o.Fc(11," icon"),o.ac(),o.Fc(12,", be "),o.cc(13,"app-button",O),o.Cc(),o.Fc(14,"LARGE"),o.ac(),o.Fc(15," or "),o.cc(16,"app-button",O),o.Cc(),o.Fc(17,"small"),o.ac(),o.Fc(18,", etc.\n"),o.ac(),o.cc(19,"p"),o.Fc(20,"So, the number of use cases for such a simple element is innumerable."),o.ac(),o.cc(21,"p"),o.Fc(22," All this power hides behind a simple tag:\n"),o.ac(),o.cc(23,"app-code"),o.Fc(24),o.ac(),o.cc(25,"p"),o.Fc(26," The simplest way to achieve this goal is to create a set of wrapping classes. Thus the only thing you'll need is to insert a button into the template and define its behavior.\n"),o.ac(),o.cc(27,"p"),o.Fc(28," What will these classes do? For the most part, they will provide you a ready to use component with all the required styles applied. Also, you can predefine some logic, for example, create a toggle button.\n"),o.ac(),o.cc(29,"p"),o.Fc(30,"Let's have a look at the base class one can use."),o.ac(),o.Zb(31,"app-source-viewer",I),o.cc(32,"p"),o.Fc(33,"The design of this class is simple and minimalistic."),o.ac(),o.cc(34,"h5",P),o.Fc(35,"Template"),o.ac(),o.cc(36,"p"),o.Fc(37," The template contains a simple HTML button component as its base. The "),o.cc(38,"code"),o.Fc(39,"button"),o.ac(),o.Fc(40," tag contains an id, a CSS class definition based on settings, and a dynamic CSS class to track disabled state.\n"),o.ac(),o.cc(41,"h5",P),o.Fc(42,"Style"),o.ac(),o.cc(43,"p"),o.Fc(44," Style definitions are minimal and containing only the most basic settings. For the most part, they are adding "),o.cc(45,"code"),o.Fc(46,"cursor"),o.ac(),o.Fc(47," pointer and removing "),o.cc(48,"code"),o.Fc(49,"pointer-events"),o.ac(),o.Fc(50," in disabled mode. The rest of the style definitions are "),o.cc(51,"app-external-link",j),o.Fc(52,"Bootstrap"),o.ac(),o.Fc(53,".\n"),o.ac(),o.cc(54,"h5",P),o.Fc(55,"Component"),o.ac(),o.cc(56,"p"),o.Fc(57," The component contains several input interfaces: an id, a style, a size, and a disabled state. Some of the interfaces have a default value.\n"),o.ac(),o.cc(58,"p"),o.Fc(59," The only tricky part of the component is a "),o.cc(60,"code"),o.Fc(61,"checkDisabled"),o.ac(),o.Fc(62," method. Because a click event is applied directly to the shadow DOM element, this method affects the "),o.cc(63,"code"),o.Fc(64,"pointer-events"),o.ac(),o.Fc(65," of the host element.\n"),o.ac(),o.cc(66,"h5",P),o.Fc(67,"Module"),o.ac(),o.cc(68,"p"),o.Fc(69," The module of this component contains only the required definitions and imports.\n"),o.ac(),o.cc(70,"h5",P),o.Fc(71,"Example"),o.ac(),o.cc(72,"p"),o.Fc(73,"Let's assume that some project requires a set of ready to use buttons."),o.ac(),o.cc(74,"p"),o.Fc(75," Among this set, there could be a default button for all positive cases. E.g. like submit, ok, agree, etc.\n"),o.ac(),o.cc(76,"p"),o.Fc(77," And it should look like this: "),o.cc(78,"app-button-positive"),o.Fc(79,"Submit"),o.ac(),o.Fc(80,", "),o.cc(81,"app-button-positive"),o.Fc(82,"Ok"),o.ac(),o.Fc(83,", "),o.cc(84,"app-button-positive"),o.Fc(85,"Agree"),o.ac(),o.Fc(86,".\n"),o.ac(),o.cc(87,"p"),o.Fc(88,"Here is the code:"),o.ac(),o.Zb(89,"app-source-viewer",I),o.cc(90,"p"),o.Fc(91," This way, a project can easily have any set of predefined components. Later on, one can use it as follows:\n"),o.ac(),o.cc(92,"app-code"),o.Fc(93),o.ac(),o.cc(94,"h5",P),o.Fc(95,"Conclusion"),o.ac(),o.cc(96,"p"),o.Fc(97," Having a set of predefined components boosts your project development. The button is a basic block of an interface. Buttons can have lots of predefined properties and logic.\n"),o.ac()),2&e&&(o.xc(6),o.Bc(o.Rb),o.Ac(t.bsBtnDark),o.Dc(),o.nc("disabled",!0),o.xc(10),o.nc("icon",t.faIcons),o.xc(13),o.Bc(o.Rb),o.Ac(t.bsBtnWarning),o.Dc(),o.nc("size",t.bsBtnSizeLarge),o.xc(16),o.Bc(o.Rb),o.Ac(t.bsBtnDanger),o.Dc(),o.nc("size",t.bsBtnSizeSmall),o.xc(24),o.Gc(t.buttonCode),o.xc(31),o.nc("sources",t.buttonSources),o.xc(34),o.oc("id",t.templateAnchor),o.xc(41),o.oc("id",t.styleAnchor),o.xc(51),o.nc("href",t.bootstrapUrl),o.xc(54),o.oc("id",t.componentAnchor),o.xc(66),o.oc("id",t.moduleAnchor),o.xc(70),o.oc("id",t.exampleAnchor),o.xc(89),o.nc("sources",t.buttonPositiveSources),o.xc(93),o.Gc(t.buttonPositiveExampleCode),o.xc(94),o.oc("id",t.conclusionAnchor))},directives:[d,s.a,k.a,B.a,T.a,m],styles:[""]}),e})()}];let R=(()=>{class e{}return e.ngModuleDef=o.Wb({type:e}),e.ngInjectorDef=o.Vb({factory:function(t){return new(t||e)},imports:[[C.f.forChild(L)],C.f]}),e})();C.f.forChild(L),c.d(t,"ComponentsButtonModule",function(){return W});let W=(()=>{class e{}return e.ngModuleDef=o.Wb({type:e}),e.ngInjectorDef=o.Vb({factory:function(t){return new(t||e)},imports:[[F,f,g.a,n.b,R,y.a,s.b,v.a]]}),e})()}}]);