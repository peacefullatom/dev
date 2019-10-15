function _inheritsLoose(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{einz:function(e,t,c){"use strict";c.r(t);var n,o,i,s,a,r,p=c("ofXK"),l=c("fXoL"),u=c("6NWb"),d=c("0eor"),h=c("bAt0"),b=[3,"ngClass","id"],f=function(e){return{disabled:e}},m=["*"],F=((n=function(){function e(e,t){this.elementRef=e,this.idService=t,this.style=d.f,this.size=d.h}var t=e.prototype;return t.ngOnInit=function(){this.id=this.id||this.idService.nextId()},t.checkDisabled=function(){return this.elementRef.nativeElement.style.pointerEvents=this.disabled?"none":"all",this.disabled},e}()).ngFactoryDef=function(e){return new(e||n)(l.Yb(l.o),l.Yb(h.a))},n.ngComponentDef=l.Sb({type:n,selectors:[["app-button"]],inputs:{id:"id",style:"style",size:"size",disabled:"disabled"},ngContentSelectors:m,consts:2,vars:7,template:function(e,t){1&e&&(l.mc(),l.cc(0,"button",b),l.Cc(),l.lc(1),l.ac()),2&e&&(l.Ob("btn ",t.style," ",t.size,""),l.Dc(),l.oc("id",t.id),l.nc("ngClass",l.pc(5,f,t.checkDisabled())))},directives:[p.h],styles:[".btn[_ngcontent-%COMP%]{cursor:pointer}.btn.disabled[_ngcontent-%COMP%]{pointer-events:none}"]}),n),y=[3,"ngClass","id"],g=function(e){return{disabled:e}},v=["*"],S=((s=function(e){function t(t,c){var n;return(n=e.call(this,t,c)||this).elementRef=t,n.idService=c,n.style=d.j,n}return _inheritsLoose(t,e),t}(F)).ngFactoryDef=function(e){return new(e||s)(l.Yb(l.o),l.Yb(h.a))},s.ngComponentDef=l.Sb({type:s,selectors:[["app-button-positive"]],inputs:{style:"style"},features:[l.Hb],ngContentSelectors:v,consts:2,vars:7,template:function(e,t){1&e&&(l.mc(),l.cc(0,"button",y),l.Cc(),l.lc(1),l.ac()),2&e&&(l.Ob("btn ",t.style," ",t.size,""),l.Dc(),l.oc("id",t.id),l.nc("ngClass",l.pc(5,g,t.checkDisabled())))},directives:[p.h],styles:[".btn[_ngcontent-%COMP%]{cursor:pointer}.btn.disabled[_ngcontent-%COMP%]{pointer-events:none}"]}),s),C=((i=function(){}).ngModuleDef=l.Wb({type:i}),i.ngInjectorDef=l.Vb({factory:function(e){return new(e||i)},imports:[[p.b]]}),i),D=((o=function(){}).ngModuleDef=l.Wb({type:o}),o.ngInjectorDef=l.Vb({factory:function(e){return new(e||o)},imports:[[p.b,C]]}),o),x=c("qTCB"),k=c("snBB"),w=c("8Sym"),A=c("tyNb"),B=c("f+iR"),T=c("wHSu"),z=c("Tb+T"),M="buttonPositive",O=c("MFFz"),L=c("Tkj9"),I=c("OeOG"),P=c("q6TO"),j=c("+64M"),_=[3,"disabled"],R=[3,"icon"],W=[3,"size"],E=[3,"sources"],q=[3,"id"],H=[3,"href"],G=[3,"routerLink"],V=[{path:B.c,component:(a=function(){function e(){this.faIcons=T.e,this.buttonSources={component:"button",active:!0},this.buttonPositiveSources=[{singleComponent:M,active:!0},{module:M}],this.bsBtnDark=d.e,this.bsBtnWarning=d.k,this.bsBtnDanger=d.d,this.bsBtnSizeSmall=d.i,this.bsBtnSizeLarge=d.g,this.faIconSize2x=z.a,this.bootstrapUrl=O.a,this.buttonCode="<button></button>",this.buttonPositiveExampleCode='<app-button-positive (click)="agree()">Agree</app-button-positive>',this.templateAnchor="template",this.styleAnchor="style",this.componentAnchor="component",this.moduleAnchor="module",this.exampleAnchor="example",this.conclusionAnchor="conclusion",this.referenceAnchor="reference",this.idServicePath=L.a}return e.prototype.ngOnInit=function(){},e}(),a.ngFactoryDef=function(e){return new(e||a)},a.ngComponentDef=l.Sb({type:a,selectors:[["app-components-button"]],consts:105,vars:20,template:function(e,t){1&e&&(l.cc(0,"h4"),l.Fc(1,"Button"),l.ac(),l.cc(2,"p"),l.Fc(3,"The button is one of the most usable interactive UI building blocks."),l.ac(),l.cc(4,"p"),l.Fc(5," Buttons can be "),l.cc(6,"app-button",_),l.Cc(),l.Fc(7,"disabled"),l.ac(),l.Fc(8,", contain an "),l.cc(9,"app-button"),l.Zb(10,"fa-icon",R),l.Fc(11," icon"),l.ac(),l.Fc(12,", be "),l.cc(13,"app-button",W),l.Cc(),l.Fc(14,"LARGE"),l.ac(),l.Fc(15," or "),l.cc(16,"app-button",W),l.Cc(),l.Fc(17,"small"),l.ac(),l.Fc(18,", etc.\n"),l.ac(),l.cc(19,"p"),l.Fc(20,"So, the number of use cases for such a simple element is innumerable."),l.ac(),l.cc(21,"p"),l.Fc(22," All this power hides behind a simple tag:\n"),l.ac(),l.cc(23,"app-code"),l.Fc(24),l.ac(),l.cc(25,"p"),l.Fc(26," The simplest way to achieve this goal is to create a set of wrapping classes. Thus the only thing you'll need is to insert a button into the template and define its behavior.\n"),l.ac(),l.cc(27,"p"),l.Fc(28," What will these classes do? For the most part, they will provide you a ready to use component with all the required styles applied. Also, you can predefine some logic, for example, create a toggle button.\n"),l.ac(),l.cc(29,"p"),l.Fc(30,"Let's have a look at the base class one can use."),l.ac(),l.Zb(31,"app-source-viewer",E),l.cc(32,"p"),l.Fc(33,"The design of this class is simple and minimalistic."),l.ac(),l.cc(34,"h5",q),l.Fc(35,"Template"),l.ac(),l.cc(36,"p"),l.Fc(37," The template contains a simple HTML button component as its base. The "),l.cc(38,"code"),l.Fc(39,"button"),l.ac(),l.Fc(40," tag contains an id, a CSS class definition based on settings, and a dynamic CSS class to track disabled state.\n"),l.ac(),l.cc(41,"h5",q),l.Fc(42,"Style"),l.ac(),l.cc(43,"p"),l.Fc(44," Style definitions are minimal and containing only the most basic settings. For the most part, they are adding "),l.cc(45,"code"),l.Fc(46,"cursor"),l.ac(),l.Fc(47," pointer and removing "),l.cc(48,"code"),l.Fc(49,"pointer-events"),l.ac(),l.Fc(50," in disabled mode. The rest of the style definitions are "),l.cc(51,"app-external-link",H),l.Fc(52,"Bootstrap"),l.ac(),l.Fc(53,".\n"),l.ac(),l.cc(54,"h5",q),l.Fc(55,"Component"),l.ac(),l.cc(56,"p"),l.Fc(57," The component contains several input interfaces: an id, a style, a size, and a disabled state. Some of the interfaces have a default value.\n"),l.ac(),l.cc(58,"p"),l.Fc(59," The only tricky part of the component is a "),l.cc(60,"code"),l.Fc(61,"checkDisabled"),l.ac(),l.Fc(62," method. Because a click event is applied directly to the shadow DOM element, this method affects the "),l.cc(63,"code"),l.Fc(64,"pointer-events"),l.ac(),l.Fc(65," of the host element.\n"),l.ac(),l.cc(66,"h5",q),l.Fc(67,"Module"),l.ac(),l.cc(68,"p"),l.Fc(69," The module of this component contains only the required definitions and imports.\n"),l.ac(),l.cc(70,"h5",q),l.Fc(71,"Example"),l.ac(),l.cc(72,"p"),l.Fc(73,"Let's assume that some project requires a set of ready to use buttons."),l.ac(),l.cc(74,"p"),l.Fc(75," Among this set, there could be a default button for all positive cases. E.g. like submit, ok, agree, etc.\n"),l.ac(),l.cc(76,"p"),l.Fc(77," And it should look like this: "),l.cc(78,"app-button-positive"),l.Fc(79,"Submit"),l.ac(),l.Fc(80,", "),l.cc(81,"app-button-positive"),l.Fc(82,"Ok"),l.ac(),l.Fc(83,", "),l.cc(84,"app-button-positive"),l.Fc(85,"Agree"),l.ac(),l.Fc(86,".\n"),l.ac(),l.cc(87,"p"),l.Fc(88,"Here is the code:"),l.ac(),l.Zb(89,"app-source-viewer",E),l.cc(90,"p"),l.Fc(91," This way, a project can easily have any set of predefined components. Later on, one can use it as follows:\n"),l.ac(),l.cc(92,"app-code"),l.Fc(93),l.ac(),l.cc(94,"h5",q),l.Fc(95,"Conclusion"),l.ac(),l.cc(96,"p"),l.Fc(97," Having a set of predefined components boosts your project development. The button is a basic block of an interface. Buttons can have lots of predefined properties and logic.\n"),l.ac(),l.cc(98,"h5",q),l.Fc(99,"Reference"),l.ac(),l.cc(100,"p"),l.Fc(101,"This component relies on "),l.cc(102,"a",G),l.Fc(103,"idService"),l.ac(),l.Fc(104,"."),l.ac()),2&e&&(l.xc(6),l.Bc(l.Rb),l.Ac(t.bsBtnDark),l.Dc(),l.nc("disabled",!0),l.xc(10),l.nc("icon",t.faIcons),l.xc(13),l.Bc(l.Rb),l.Ac(t.bsBtnWarning),l.Dc(),l.nc("size",t.bsBtnSizeLarge),l.xc(16),l.Bc(l.Rb),l.Ac(t.bsBtnDanger),l.Dc(),l.nc("size",t.bsBtnSizeSmall),l.xc(24),l.Gc(t.buttonCode),l.xc(31),l.nc("sources",t.buttonSources),l.xc(34),l.oc("id",t.templateAnchor),l.xc(41),l.oc("id",t.styleAnchor),l.xc(51),l.nc("href",t.bootstrapUrl),l.xc(54),l.oc("id",t.componentAnchor),l.xc(66),l.oc("id",t.moduleAnchor),l.xc(70),l.oc("id",t.exampleAnchor),l.xc(89),l.nc("sources",t.buttonPositiveSources),l.xc(93),l.Gc(t.buttonPositiveExampleCode),l.xc(94),l.oc("id",t.conclusionAnchor),l.xc(98),l.oc("id",t.referenceAnchor),l.xc(102),l.nc("routerLink",t.idServicePath))},directives:[F,u.a,I.a,P.a,j.a,S,A.e],styles:[""]}),a)}],Y=((r=function(){}).ngModuleDef=l.Wb({type:r}),r.ngInjectorDef=l.Vb({factory:function(e){return new(e||r)},imports:[[A.f.forChild(V)],A.f]}),r);A.f.forChild(V),c.d(t,"ComponentsButtonModule",function(){return Z});var U,Z=((U=function(){}).ngModuleDef=l.Wb({type:U}),U.ngInjectorDef=l.Vb({factory:function(e){return new(e||U)},imports:[[D,C,x.a,p.b,Y,k.a,u.b,w.a]]}),U)}}]);