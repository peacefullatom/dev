function _defineProperties(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,s){return e&&_defineProperties(t.prototype,e),s&&_defineProperties(t,s),t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"8Sym":function(t,e,s){"use strict";var n,i=s("ofXK"),c=s("qTCB"),a=s("tyNb"),r=(s("o5IB"),s("fXoL")),o=((n=function t(){_classCallCheck(this,t)}).\u0275mod=r.Kb({type:n}),n.\u0275inj=r.Jb({factory:function(t){return new(t||n)},imports:[[i.b,a.f]]}),n);s("q6TO"),s.d(e,"a",(function(){return p}));var h,p=((h=function t(){_classCallCheck(this,t)}).\u0275mod=r.Kb({type:h}),h.\u0275inj=r.Jb({factory:function(t){return new(t||h)},imports:[[i.b,o,c.a]]}),h)},MFFz:function(t,e,s){"use strict";s.d(e,"c",(function(){return n})),s.d(e,"f",(function(){return i})),s.d(e,"e",(function(){return c})),s.d(e,"b",(function(){return a})),s.d(e,"g",(function(){return r})),s.d(e,"a",(function(){return o})),s.d(e,"d",(function(){return h}));var n="https://code.visualstudio.com/",i="https://git-scm.com/",c="https://git-scm.com/downloads/guis",a="https://getbootstrap.com/",r="https://nodejs.org",o="https://angular.io",h="conclusion"},OeOG:function(t,e,s){"use strict";s.d(e,"a",(function(){return h}));var n=s("fXoL"),i=s("bAt0"),c=s("ofXK"),a=["code"],r=function(t){return{hide:t}},o=["*"],h=function(){var t=function(){function t(e){_classCallCheck(this,t),this.idService=e,this.className="bg-dark text-light py-3 px-3 rounded",this.content=!1}return _createClass(t,[{key:"ngOnInit",value:function(){this.id=this.id||this.idService.nextId(),this.value&&"string"!=typeof this.value&&(this.value=JSON.stringify(this.value))}},{key:"ngOnChanges",value:function(t){(t.html||t.text||t.value)&&(this.content=!!this.html||!!this.text||!!this.value,this.html&&this.codeRef&&this.codeRef.nativeElement.insertAdjacentHTML("afterbegin",this.html))}},{key:"render",value:function(){return this.value?this.value:this.text?this.text:""}}]),t}();return t.\u0275fac=function(e){return new(e||t)(n.Mb(i.a))},t.\u0275cmp=n.Gb({type:t,selectors:[["app-code"]],viewQuery:function(t,e){var s;1&t&&n.oc(a,!0),2&t&&n.ic(s=n.Zb())&&(e.codeRef=s.first)},inputs:{id:"id",value:"value",text:"text",html:"html"},features:[n.vb()],ngContentSelectors:o,decls:7,vars:12,consts:[[3,"id","ngClass"],[3,"ngClass"],["code",""]],template:function(t,e){1&t&&(n.cc(),n.Qb(0,"pre",0),n.Qb(1,"code"),n.bc(2),n.Ob(),n.Ob(),n.Qb(3,"pre",1),n.Qb(4,"code",null,2),n.sc(6),n.Ob(),n.Ob()),2&t&&(n.Ab(e.className),n.dc("id",e.id)("ngClass",n.ec(8,r,e.content)),n.xb(3),n.Ab(e.className),n.dc("ngClass",n.ec(10,r,!e.content)),n.xb(3),n.tc(e.render()))},directives:[c.h],styles:[".hide[_ngcontent-%COMP%]{display:none}pre[_ngcontent-%COMP%]{max-height:20rem}"]}),t}()},o5IB:function(t,e,s){"use strict";var n=s("0eor"),i="button",c=s("fXoL"),a=s("bAt0"),r=s("ofXK"),o=s("tyNb");s.d(e,"a",(function(){return d}));var h=function(t){return{active:t}};function p(t,e){if(1&t){var s=c.Rb();c.Qb(0,"li",2),c.Qb(1,"a",3),c.Yb("click",(function(t){c.kc(s);var n=e.$implicit;return c.ac().handleClick(t,n)})),c.sc(2),c.Ob(),c.Ob()}if(2&t){var n=e.$implicit,i=c.ac();c.xb(1),c.dc("ngClass",c.ec(4,h,n.active))("routerLink",n.path)("routerLinkActive",i.active),c.xb(1),c.tc(n.title)}}var u,l=function(t){return{"nav-justified flex-column flex-sm-row":t}},d=((u=function(){function t(e){_classCallCheck(this,t),this.idService=e,this.tabs=[],this.type=i,this.fill=!1,this.active=n.a}return _createClass(t,[{key:"ngOnInit",value:function(){this.id=this.id||this.idService.nextId()}},{key:"handleClick",value:function(t,e){if(this.type===i&&t.preventDefault(),e){var s=e.click;"function"==typeof s&&s(e)}}}]),t}()).\u0275fac=function(t){return new(t||u)(c.Mb(a.a))},u.\u0275cmp=c.Gb({type:u,selectors:[["app-tabs"]],inputs:{id:"id",tabs:"tabs",type:"type",fill:"fill"},decls:2,vars:5,consts:[[1,"nav","nav-tabs",3,"id","ngClass"],["class","nav-item",4,"ngFor","ngForOf"],[1,"nav-item"],[1,"nav-item","nav-link",3,"ngClass","routerLink","routerLinkActive","click"]],template:function(t,e){1&t&&(c.Qb(0,"ul",0),c.rc(1,p,3,6,"li",1),c.Ob()),2&t&&(c.dc("id",e.id)("ngClass",c.ec(3,l,e.fill)),c.xb(1),c.dc("ngForOf",e.tabs))},directives:[r.h,r.i,o.e,o.d],styles:[".nav-item.nav-link[_ngcontent-%COMP%]{white-space:nowrap}"]}),u)},q6TO:function(t,e,s){"use strict";var n=s("tm5u"),i=s("fXoL"),c=s("bAt0"),a=s("o5IB"),r=s("ofXK"),o=s("OeOG");s.d(e,"a",(function(){return d}));var h=["data"],p=function(t){return{active:t}};function u(t,e){if(1&t&&(i.Qb(0,"div",4),i.Nb(1,"app-code",5),i.Ob()),2&t){var s=e.$implicit;i.dc("ngClass",i.ec(2,p,s.active)),i.xb(1),i.dc("html",s.source)}}var l,d=((l=function(){function t(e){_classCallCheck(this,t),this.idService=e,this.sources=[],this.tabs=[],this.fill=!0}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.id=this.id||this.idService.nextId();var e=function(t){var e=t.split("/");return e[e.length-1]},s=function(s,i){if(s){var c=function(t){return n[t]}(s);if(c){var a={title:e(c.path),id:t.idService.nextId(),hash:c.hash,active:i,click:function(e){return t.tabClick(e)}};a.active&&t.loadSource(a),t.tabs.push(a)}}},i=this.sources instanceof Array?this.sources:[this.sources],c=!0,a=!1,r=void 0;try{for(var o,h=function(){var t=o.value,e=t.id,n=t.component,i=t.singleComponent,c=t.directive,a=t.module,r=t.template,h=t.service,p=t.style,u=t.active;e&&s(e,u),n&&["ComponentHtml","ComponentScss","ComponentTs","ModuleTs"].forEach((function(t,e){return s("".concat(n).concat(t),!!u&&0===e)})),i&&s("".concat(i,"ComponentTs"),u),c&&s("".concat(c,"DirectiveTs"),u),a&&s("".concat(a,"ModuleTs"),u),h&&s("".concat(h,"ServiceTs"),u),r&&s("".concat(r,"ComponentHtml"),u),p&&s("".concat(p,"ComponentScss"),u)},p=i[Symbol.iterator]();!(c=(o=p.next()).done);c=!0)h()}catch(u){a=!0,r=u}finally{try{c||null==p.return||p.return()}finally{if(a)throw r}}}},{key:"ngAfterViewInit",value:function(){var t=this;this.tabs.forEach((function(e){return t.loadSource(e)}))}},{key:"tabClick",value:function(t){this.tabs.forEach((function(e){return e.active=e.id===t.id})),this.loadSource(t)}},{key:"loadSource",value:function(t){t.source&&!t.error||fetch("".concat("assets/sources","/").concat(t.hash)).then((function(e){return e.text().then((function(e){t.source=e,t.error=!1}))}),(function(e){console.log(e),t.error=!0}))}}]),t}()).\u0275fac=function(t){return new(t||l)(i.Mb(c.a))},l.\u0275cmp=i.Gb({type:l,selectors:[["app-source-viewer"]],viewQuery:function(t,e){var s;1&t&&i.oc(h,!0),2&t&&i.ic(s=i.Zb())&&(e.data=s.first)},inputs:{id:"id",sources:"sources"},decls:4,vars:5,consts:[[3,"tabs","fill","id"],[1,"carousel",3,"id"],[1,"carousel-inner"],["class","carousel-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"carousel-item",3,"ngClass"],[3,"html"]],template:function(t,e){1&t&&(i.Nb(0,"app-tabs",0),i.Qb(1,"div",1),i.Qb(2,"div",2),i.rc(3,u,2,4,"div",3),i.Ob(),i.Ob()),2&t&&(i.dc("tabs",e.tabs)("fill",e.fill)("id",e.id),i.xb(1),i.dc("id",e.id),i.xb(2),i.dc("ngForOf",e.tabs))},directives:[a.a,r.i,r.h,o.a],styles:[""]}),l)},qTCB:function(t,e,s){"use strict";s.d(e,"a",(function(){return c}));var n=s("ofXK"),i=(s("OeOG"),s("fXoL")),c=function(){var t=function t(){_classCallCheck(this,t)};return t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({factory:function(e){return new(e||t)},imports:[[n.b]]}),t}()},r0xP:function(t,e,s){"use strict";s.r(e);var n,i,c,a,r=s("ofXK"),o=s("fXoL"),h=s("bAt0"),p=function(t){return{disabled:t}},u=((i=function(){function t(e){_classCallCheck(this,t),this.idService=e,this.activeChange=new o.m,this.checkboxId=this.idService.nextId()}return _createClass(t,[{key:"ngOnInit",value:function(){this.id=this.id||this.idService.nextId()}},{key:"handleClick",value:function(){this.active=!this.active,this.activeChange.next(this.active)}}]),t}()).\u0275fac=function(t){return new(t||i)(o.Mb(h.a))},i.\u0275cmp=o.Gb({type:i,selectors:[["app-checkbox"]],inputs:{id:"id",active:"active",disabled:"disabled",title:"title"},outputs:{activeChange:"activeChange"},decls:4,vars:8,consts:[[1,"custom-control","custom-checkbox",3,"id","ngClass"],["type","checkbox",1,"custom-control-input",3,"checked","id","change"],[1,"custom-control-label",3,"for"]],template:function(t,e){1&t&&(o.Qb(0,"div",0),o.Qb(1,"input",1),o.Yb("change",(function(t){return e.handleClick()})),o.Ob(),o.Qb(2,"label",2),o.sc(3),o.Ob(),o.Ob()),2&t&&(o.dc("id",e.id)("ngClass",o.ec(6,p,e.disabled)),o.xb(1),o.dc("checked",e.active)("id",e.checkboxId),o.xb(1),o.dc("for",e.checkboxId),o.xb(1),o.tc(e.title))},directives:[r.h],styles:[".disabled[_ngcontent-%COMP%]{pointer-events:none}"]}),i),l=((n=function t(){_classCallCheck(this,t)}).\u0275mod=o.Kb({type:n}),n.\u0275inj=o.Jb({factory:function(t){return new(t||n)},imports:[[r.b]]}),n),d=s("snBB"),b=s("8Sym"),f=s("6NWb"),m=s("wHSu"),v=((a=function(){function t(){_classCallCheck(this,t),this.value=0,this.valueChange=new o.m,this.decrementTitle="decrement",this.incrementTitle="increment",this.valueTitle="value",this.faMinus=m.f,this.faPlus=m.h}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"decrement",value:function(){this.value=this.value-this.step,this.value<this.min&&(this.value=this.min),this.valueChange.next(this.value)}},{key:"increment",value:function(){this.value=this.value+this.step,this.value>this.max&&(this.value=this.max),this.valueChange.next(this.value)}},{key:"min",get:function(){return this.settings?this.settings.min:0}},{key:"max",get:function(){return this.settings?this.settings.max:100}},{key:"step",get:function(){return this.settings?this.settings.step:10}}]),t}()).\u0275fac=function(t){return new(t||a)},a.\u0275cmp=o.Gb({type:a,selectors:[["app-stepper"]],inputs:{settings:"settings",value:"value"},outputs:{valueChange:"valueChange"},decls:6,vars:6,consts:[[1,"btn-group",3,"title"],[1,"btn","btn-primary",3,"title","click"],[3,"icon"],["disabled","","type","text",1,"form-control",3,"value"]],template:function(t,e){1&t&&(o.Qb(0,"div",0),o.Qb(1,"button",1),o.Yb("click",(function(t){return e.decrement()})),o.Nb(2,"fa-icon",2),o.Ob(),o.Nb(3,"input",3),o.Qb(4,"button",1),o.Yb("click",(function(t){return e.increment()})),o.Nb(5,"fa-icon",2),o.Ob(),o.Ob()),2&t&&(o.dc("title",e.value),o.xb(1),o.dc("title",e.decrementTitle),o.xb(1),o.dc("icon",e.faMinus),o.xb(1),o.dc("value",e.value),o.xb(1),o.dc("title",e.incrementTitle),o.xb(1),o.dc("icon",e.faPlus))},directives:[f.a],styles:[""]}),a),g=((c=function t(){_classCallCheck(this,t)}).\u0275mod=o.Kb({type:c}),c.\u0275inj=o.Jb({factory:function(t){return new(t||c)},imports:[[r.b,f.b]]}),c),y=500,C=y/2,k=500,O=0,x=!0,w=function(t,e,s,n){return{background:t,width:e,height:s,transform:n}};function Q(t,e){if(1&t&&o.Nb(0,"div",3),2&t){var s=e.$implicit,n=o.ac();o.dc("ngStyle",o.hc(1,w,n.background,n.size(n.faceWidth(s)),n.size(n.faceHeight(s)),n.transform(s)))}}var S,T,_,M=function(t){return{perspective:t}},I=function(t,e,s){return{width:t,height:e,"transform-style":s}},j=((S=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"size",value:function(t){return"".concat(t,"px")}},{key:"faceWidth",value:function(t){switch(this.normalizeOrder(t)){case 0:case 1:case 4:case 5:return this.planeWidth;case 2:case 3:return this.depth}}},{key:"faceHeight",value:function(t){switch(this.normalizeOrder(t)){case 0:case 1:case 2:case 3:return this.planeHeight/this.steps;case 4:case 5:return this.depth}}},{key:"transform",value:function(t){var e=this.normalizeOrder(t),s=(t-e)/3*this.barHeightStep,n=this.faceHeight(e)/2;switch(e){case 0:return"translate3d(0px, ".concat(s,"px, ").concat(this.depth/2,"px)");case 1:return"rotateY(180deg) translate3d(0px, ".concat(s,"px, ").concat(this.depth/2,"px)");case 2:return"rotateY(90deg) translate3d(0px, ".concat(s,"px, ").concat(this.faceWidth(e)/-2,"px)");case 3:return"rotateY(-90deg) translate3d(0px, ".concat(s,"px, ").concat(this.faceWidth(e)/2-this.planeWidth,"px)");case 4:return"rotateX(90deg) translate3d(0px, 0px, ".concat(n-s,"px)");case 5:return"rotateX(-90deg) translate3d(0px, 0px, ".concat(s+this.barHeightStep-n,"px)")}}},{key:"normalizeOrder",value:function(t){return t%6}},{key:"width",get:function(){return this.settings?this.settings.width:y}},{key:"height",get:function(){return this.settings?this.settings.height:y}},{key:"depth",get:function(){return this.settings?this.settings.depth:C}},{key:"perspective",get:function(){return this.settings?this.settings.perspective:k}},{key:"bars",get:function(){return this.settings?this.settings.bars:5}},{key:"hue",get:function(){return this.settings?this.settings.hue:O}},{key:"mode3d",get:function(){return this.settings?this.settings.mode3d:x}},{key:"facesCount",get:function(){return Array.apply(null,{length:6*this.bars}).map(Number.call,Number)}},{key:"planeWidth",get:function(){return this.width/2}},{key:"planeHeight",get:function(){return this.height/2}},{key:"background",get:function(){return"hsla(".concat(this.hue,", 50%, 50%, 0.5)")}},{key:"barHeightStep",get:function(){return this.planeHeight/this.steps}},{key:"steps",get:function(){return 2*this.bars-1}}]),t}()).\u0275fac=function(t){return new(t||S)},S.\u0275cmp=o.Gb({type:S,selectors:[["app-misc-css3d-bars"]],inputs:{settings:"settings"},decls:3,vars:9,consts:[[1,"container",3,"ngStyle"],[1,"plane",3,"ngStyle"],["class","face",3,"ngStyle",4,"ngFor","ngForOf"],[1,"face",3,"ngStyle"]],template:function(t,e){1&t&&(o.Qb(0,"div",0),o.Qb(1,"div",1),o.rc(2,Q,1,6,"div",2),o.Ob(),o.Ob()),2&t&&(o.dc("ngStyle",o.ec(3,M,e.size(e.perspective))),o.xb(1),o.dc("ngStyle",o.gc(5,I,e.size(e.planeWidth),e.size(e.planeHeight),e.mode3d?"preserve-3d":"flat")),o.xb(1),o.dc("ngForOf",e.facesCount))},directives:[r.k,r.i],styles:[".container[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .plane[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}.container[_ngcontent-%COMP%]{width:100%;height:300px}.container[_ngcontent-%COMP%]   .plane[_ngcontent-%COMP%]{-webkit-transform:rotate3d(1,1,1,45deg);transform:rotate3d(1,1,1,45deg);-webkit-animation:6s linear infinite rotate;animation:6s linear infinite rotate}.container[_ngcontent-%COMP%]   .plane[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]{position:absolute;overflow:hidden}@-webkit-keyframes rotate{from{-webkit-transform:rotate3d(1,1,1,0deg);transform:rotate3d(1,1,1,0deg)}to{-webkit-transform:rotate3d(1,1,1,360deg);transform:rotate3d(1,1,1,360deg)}}@keyframes rotate{from{-webkit-transform:rotate3d(1,1,1,0deg);transform:rotate3d(1,1,1,0deg)}to{-webkit-transform:rotate3d(1,1,1,360deg);transform:rotate3d(1,1,1,360deg)}}"]}),S),z=s("tyNb"),H=s("f+iR"),N=s("MFFz"),A=s("+64M"),B=s("q6TO"),P=[{path:H.d,component:(T=function(){function t(){_classCallCheck(this,t),this.settings={bars:3,depth:100,height:y,width:y,perspective:k,hue:O,mode3d:x},this.barsSettings={max:10,min:1,step:1},this.depthSettings={max:250,min:50,step:50},this.perspectiveSettings={max:1e3,min:250,step:250},this.sizeSettings={max:500,min:100,step:50},this.miscCss3dBarsSources=[{component:"miscCss3dBars",active:!0},{id:"miscCss3dBarsConstTs"},{id:"miscCss3dBarsTypesTs"}],this.rotate3dUrl="https://developer.mozilla.org/docs/Web/CSS/transform-function/rotate3d",this.transformStyleUrl="https://developer.mozilla.org/docs/Web/CSS/transform-style",this.demoAnchor="demo",this.componentAnchor="component",this.descriptionAnchor="description",this.conclusionAnchor=N.d,this.modeTitle="3D mode"}return _createClass(t,[{key:"ngOnInit",value:function(){this.settings.hue=Math.round(361*Math.random())}}]),t}(),T.\u0275fac=function(t){return new(t||T)},T.\u0275cmp=o.Gb({type:T,selectors:[["app-misc-css3d"]],decls:111,vars:20,consts:[[3,"href"],[3,"id"],[3,"settings"],[1,"container-fluid"],[1,"row"],[1,"col-sm-2","col-md-3","col-lg-3","mb-3"],[1,"btn"],[3,"value","settings","valueChange"],[1,"col-sm-2","col-md-3","col-lg-3","mb-3","d-flex","justify-content-center","align-items-center"],[3,"active","title","activeChange"],[3,"sources"]],template:function(t,e){1&t&&(o.Qb(0,"h4"),o.sc(1,"CSS 3D"),o.Ob(),o.Qb(2,"p"),o.sc(3," As a frontend developer, I'm working a lot with CSS.\n"),o.Ob(),o.Qb(4,"p"),o.sc(5," From time to time, I'm experimenting with CSS just for fun.\n"),o.Ob(),o.Qb(6,"p"),o.sc(7," Recently I've found an article about 3D transforms in CSS, which gave ideas for new experiments.\n"),o.Ob(),o.Qb(8,"p"),o.sc(9,"To be short, I've finished up with the idea to build an interactive 3D object."),o.Ob(),o.Qb(10,"p"),o.sc(11,"The original article is here "),o.Qb(12,"app-external-link",0),o.sc(13,"rotate 3d"),o.Ob(),o.sc(14,"."),o.Ob(),o.Qb(15,"h5",1),o.sc(16,"Demo"),o.Ob(),o.Qb(17,"p"),o.sc(18,"This simple demo allows changing some parameters of the object: width, height, depth, number of bars."),o.Ob(),o.Nb(19,"app-misc-css3d-bars",2),o.Qb(20,"div",3),o.Qb(21,"div",4),o.Qb(22,"div",5),o.Qb(23,"span",6),o.sc(24,"Bars count:"),o.Ob(),o.Nb(25,"br"),o.Qb(26,"app-stepper",7),o.Yb("valueChange",(function(t){return e.settings.bars=t})),o.Ob(),o.Ob(),o.Qb(27,"div",5),o.Qb(28,"span",6),o.sc(29,"Depth:"),o.Ob(),o.Nb(30,"br"),o.Qb(31,"app-stepper",7),o.Yb("valueChange",(function(t){return e.settings.depth=t})),o.Ob(),o.Ob(),o.Qb(32,"div",5),o.Qb(33,"span",6),o.sc(34,"Width:"),o.Ob(),o.Nb(35,"br"),o.Qb(36,"app-stepper",7),o.Yb("valueChange",(function(t){return e.settings.width=t})),o.Ob(),o.Ob(),o.Qb(37,"div",5),o.Qb(38,"span",6),o.sc(39,"Height:"),o.Ob(),o.Nb(40,"br"),o.Qb(41,"app-stepper",7),o.Yb("valueChange",(function(t){return e.settings.height=t})),o.Ob(),o.Ob(),o.Qb(42,"div",5),o.Qb(43,"span",6),o.sc(44,"Perspective:"),o.Ob(),o.Nb(45,"br"),o.Qb(46,"app-stepper",7),o.Yb("valueChange",(function(t){return e.settings.perspective=t})),o.Ob(),o.Ob(),o.Qb(47,"div",8),o.Qb(48,"app-checkbox",9),o.Yb("activeChange",(function(t){return e.settings.mode3d=t})),o.Ob(),o.Ob(),o.Ob(),o.Ob(),o.Qb(49,"h5",1),o.sc(50,"Component"),o.Ob(),o.Qb(51,"p"),o.sc(52,"Here is the source code."),o.Ob(),o.Nb(53,"app-source-viewer",10),o.Qb(54,"p"),o.sc(55," In this demo, I've tried to simplify the entire process of rendering of the object.\n"),o.Ob(),o.Qb(56,"p"),o.sc(57," Static parts reside in the CSS definitions. And the dynamic parts are calculated upon each parameters update.\n"),o.Ob(),o.Qb(58,"p"),o.sc(59," Because this object has a simple structure, all data required to build it is calculated with the help of three functions.\n"),o.Ob(),o.Qb(60,"p"),o.sc(61,"The two of them "),o.Qb(62,"code"),o.sc(63,"faceWidth"),o.Ob(),o.sc(64," and "),o.Qb(65,"code"),o.sc(66,"faceHeight"),o.Ob(),o.sc(67," are calculating the correct width and height of each part."),o.Ob(),o.Qb(68,"p"),o.sc(69," The "),o.Qb(70,"code"),o.sc(71,"transform"),o.Ob(),o.sc(72," function finds which transformations are required to place each part in the proper place and to turn them to the right angle.\n"),o.Ob(),o.Qb(73,"h5",1),o.sc(74,"Description"),o.Ob(),o.Qb(75,"p"),o.sc(76," The idea behind the rendering process is simple.\n"),o.Ob(),o.Qb(77,"p"),o.sc(78," There is an object (I refer to it as "),o.Qb(79,"code"),o.sc(80,"plane"),o.Ob(),o.sc(81,") that defines the height and width of the object. By default the plane is invisible.\n"),o.Ob(),o.Qb(82,"p"),o.sc(83," Next, I'm creating other objects (I refer to them as "),o.Qb(84,"code"),o.sc(85,"faces"),o.Ob(),o.sc(86,"). Each face is placed in the correspondent place with the respective angle.\n"),o.Ob(),o.Qb(87,"p"),o.sc(88," The set of faces (I refer to them as "),o.Qb(89,"code"),o.sc(90,"bar"),o.Ob(),o.sc(91,") is positioned from top of the plane to the bottom in order of appearance. Thus, by defining the number of bars, it is possible to realign faces to the right places.\n"),o.Ob(),o.Qb(92,"p"),o.sc(93," In this demo, the only rotating object is the plane. All other parts are just following the plane.\n"),o.Ob(),o.Qb(94,"p"),o.sc(95," If, for some reason, the browser doesn't support the yet experimental CSS feature "),o.Qb(96,"app-external-link",0),o.sc(97,"transform-style"),o.Ob(),o.sc(98," there would be no 3D effect. To try it out, you may toggle an appropriate checkbox in the demo.\n"),o.Ob(),o.Qb(99,"h5",1),o.sc(100,"Conclusion"),o.Ob(),o.Qb(101,"p"),o.sc(102," With this new feature, it is possible to enrich web pages with simple 3D objects.\n"),o.Ob(),o.Qb(103,"p"),o.sc(104," I've got a couple of ideas about how it can be applied!\n"),o.Ob(),o.Qb(105,"p"),o.sc(106," It can be a preloader to your web application.\n"),o.Ob(),o.Qb(107,"p"),o.sc(108," It is possible to visualize some data.\n"),o.Ob(),o.Qb(109,"p"),o.sc(110," Also, it is possible to implement some fancy 3D spinners/waiters/loading indicators!\n"),o.Ob()),2&t&&(o.xb(12),o.dc("href",e.rotate3dUrl),o.xb(3),o.dc("id",e.demoAnchor),o.xb(4),o.dc("settings",e.settings),o.xb(7),o.dc("value",e.settings.bars)("settings",e.barsSettings),o.xb(5),o.dc("value",e.settings.depth)("settings",e.depthSettings),o.xb(5),o.dc("value",e.settings.width)("settings",e.sizeSettings),o.xb(5),o.dc("value",e.settings.height)("settings",e.sizeSettings),o.xb(5),o.dc("value",e.settings.perspective)("settings",e.perspectiveSettings),o.xb(2),o.dc("active",e.settings.mode3d)("title",e.modeTitle),o.xb(1),o.dc("id",e.componentAnchor),o.xb(4),o.dc("sources",e.miscCss3dBarsSources),o.xb(20),o.dc("id",e.descriptionAnchor),o.xb(23),o.dc("href",e.transformStyleUrl),o.xb(3),o.dc("id",e.conclusionAnchor))},directives:[A.a,j,v,u,B.a],styles:[""]}),T)}],q=((_=function t(){_classCallCheck(this,t)}).\u0275mod=o.Kb({type:_}),_.\u0275inj=o.Jb({factory:function(t){return new(t||_)},imports:[[z.f.forChild(P)],z.f]}),_);s.d(e,"MiscCss3dModule",(function(){return W}));var F,W=((F=function t(){_classCallCheck(this,t)}).\u0275mod=o.Kb({type:F}),F.\u0275inj=o.Jb({factory:function(t){return new(t||F)},imports:[[r.b,q,g,d.a,b.a,l]]}),F)},tm5u:function(t){t.exports=JSON.parse('{"copyJs":{"path":"copy.js","hash":"tsay2hrj"},"buttonComponentHtml":{"path":"src/app/core/ui/button/button.component.html","hash":"qou3912l"},"buttonComponentScss":{"path":"src/app/core/ui/button/button.component.scss","hash":"hlbpjtwy"},"buttonComponentTs":{"path":"src/app/core/ui/button/button.component.ts","hash":"0ziuor9d"},"buttonModuleTs":{"path":"src/app/core/ui/button/button.module.ts","hash":"te8dyr6v"},"buttonPositiveComponentTs":{"path":"src/app/core/ui/button-positive/button-positive.component.ts","hash":"dqlmuz01"},"buttonPositiveModuleTs":{"path":"src/app/core/ui/button-positive/button-positive.module.ts","hash":"hntwfkcq"},"idServiceTs":{"path":"src/app/core/service/id.service.ts","hash":"mvwod4lq"},"idServiceConstTs":{"path":"src/app/core/service/id.service.const.ts","hash":"k1bufy6s"},"noteComponentTs":{"path":"src/app/core/ui/note/note.component.ts","hash":"dxnbk36y"},"noteComponentHtml":{"path":"src/app/core/ui/note/note.component.html","hash":"ywrphxae"},"alertsComponentHtml":{"path":"src/app/core/ui/alerts/alerts.component.html","hash":"cp5zjesn"},"alertsComponentScss":{"path":"src/app/core/ui/alerts/alerts.component.scss","hash":"c83ag1hz"},"alertsComponentTs":{"path":"src/app/core/ui/alerts/alerts.component.ts","hash":"svnt4b0d"},"alertsModuleTs":{"path":"src/app/core/ui/alerts/alerts.module.ts","hash":"uy5p89ag"},"alertsConstTs":{"path":"src/app/core/ui/alerts/const.ts","hash":"ylfgvj1h"},"alertsTypesTs":{"path":"src/app/core/ui/alerts/types.ts","hash":"8witx5v0"},"appModuleTs":{"path":"src/app/app.module.ts","hash":"wa9t2yck"},"appComponentTs":{"path":"src/app/app.component.ts","hash":"o2ub6s4m"},"appComponentHtml":{"path":"src/app/app.component.html","hash":"20qxfgrv"},"alertBlockComponentHtml":{"path":"src/app/core/ui/alerts/alert-block/alert-block.component.html","hash":"pany16vt"},"alertBlockComponentScss":{"path":"src/app/core/ui/alerts/alert-block/alert-block.component.scss","hash":"dy0e9mo6"},"alertBlockComponentTs":{"path":"src/app/core/ui/alerts/alert-block/alert-block.component.ts","hash":"3x19ytrb"},"alertBlockTypesTs":{"path":"src/app/core/ui/alerts/alert-block/types.ts","hash":"ngwrq4ac"},"alertServiceTs":{"path":"src/app/core/service/alert.service.ts","hash":"4mbakiq2"},"sourceViewerComponentHtml":{"path":"src/app/core/ui/source-viewer/source-viewer.component.html","hash":"tnmlru8w"},"sourceViewerComponentScss":{"path":"src/app/core/ui/source-viewer/source-viewer.component.scss","hash":"ny3odqwi"},"sourceViewerComponentTs":{"path":"src/app/core/ui/source-viewer/source-viewer.component.ts","hash":"536cb2ty"},"sourceViewerModuleTs":{"path":"src/app/core/ui/source-viewer/source-viewer.module.ts","hash":"ydgi0j7w"},"sourceViewerConstTs":{"path":"src/app/core/ui/source-viewer/const.ts","hash":"738s60wl"},"sourceViewerTypesTs":{"path":"src/app/core/ui/source-viewer/types.ts","hash":"hydrivlz"},"sourcesJs":{"path":"sources.js","hash":"43vm6tgf"},"tabsComponentHtml":{"path":"src/app/core/ui/tabs/tabs.component.html","hash":"1wbqftzu"},"tabsComponentScss":{"path":"src/app/core/ui/tabs/tabs.component.scss","hash":"kq846fi5"},"tabsComponentTs":{"path":"src/app/core/ui/tabs/tabs.component.ts","hash":"dqbzj09p"},"tabsModuleTs":{"path":"src/app/core/ui/tabs/tabs.module.ts","hash":"6p5kznec"},"tabsConstTs":{"path":"src/app/core/ui/tabs/const.ts","hash":"qolejxfk"},"tabsTypesTs":{"path":"src/app/core/ui/tabs/types.ts","hash":"5gnt6vl4"},"miscCss3dBarsConstTs":{"path":"src/app/page/misc/misc-css3d/misc-css3d-bars/const.ts","hash":"msrxd0q3"},"miscCss3dBarsComponentHtml":{"path":"src/app/page/misc/misc-css3d/misc-css3d-bars/misc-css3d-bars.component.html","hash":"0fkln7qz"},"miscCss3dBarsComponentScss":{"path":"src/app/page/misc/misc-css3d/misc-css3d-bars/misc-css3d-bars.component.scss","hash":"hgfrsl2p"},"miscCss3dBarsComponentTs":{"path":"src/app/page/misc/misc-css3d/misc-css3d-bars/misc-css3d-bars.component.ts","hash":"ua69fj0g"},"miscCss3dBarsTypesTs":{"path":"src/app/page/misc/misc-css3d/misc-css3d-bars/types.ts","hash":"mcbqr03x"}}')}}]);