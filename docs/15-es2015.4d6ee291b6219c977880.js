(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{MFFz:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"f",(function(){return i})),n.d(t,"e",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"g",(function(){return s})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return l}));const o="https://code.visualstudio.com/",i="https://git-scm.com/",a="https://git-scm.com/downloads/guis",r="https://getbootstrap.com/",s="https://nodejs.org",c="https://angular.io",l="conclusion"},OeOG:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n("fXoL"),i=n("bAt0"),a=n("ofXK");const r=["code"],s=function(e){return{hide:e}},c=["*"];let l=(()=>{class e{constructor(e){this.idService=e,this.className="bg-dark text-light py-3 px-3 rounded",this.content=!1}ngOnInit(){this.id=this.id||this.idService.nextId(),this.value&&"string"!=typeof this.value&&(this.value=JSON.stringify(this.value))}ngOnChanges(e){(e.html||e.text||e.value)&&(this.content=!!this.html||!!this.text||!!this.value,this.html&&this.codeRef&&this.codeRef.nativeElement.insertAdjacentHTML("afterbegin",this.html))}render(){return this.value?this.value:this.text?this.text:""}}return e.\u0275fac=function(t){return new(t||e)(o.Mb(i.a))},e.\u0275cmp=o.Gb({type:e,selectors:[["app-code"]],viewQuery:function(e,t){var n;1&e&&o.oc(r,!0),2&e&&o.ic(n=o.Zb())&&(t.codeRef=n.first)},inputs:{id:"id",value:"value",text:"text",html:"html"},features:[o.vb()],ngContentSelectors:c,decls:7,vars:12,consts:[[3,"id","ngClass"],[3,"ngClass"],["code",""]],template:function(e,t){1&e&&(o.cc(),o.Qb(0,"pre",0),o.Qb(1,"code"),o.bc(2),o.Ob(),o.Ob(),o.Qb(3,"pre",1),o.Qb(4,"code",null,2),o.sc(6),o.Ob(),o.Ob()),2&e&&(o.Ab(t.className),o.dc("id",t.id)("ngClass",o.ec(8,s,t.content)),o.xb(3),o.Ab(t.className),o.dc("ngClass",o.ec(10,s,!t.content)),o.xb(3),o.tc(t.render()))},directives:[a.h],styles:[".hide[_ngcontent-%COMP%]{display:none}pre[_ngcontent-%COMP%]{max-height:20rem}"]}),e})()},nZjq:function(e,t,n){"use strict";n.r(t);var o=n("ofXK"),i=n("qTCB"),a=n("snBB"),r=n("U5I1"),s=n("tyNb"),c=n("f+iR"),l=n("MFFz"),d=n("fXoL"),b=n("OeOG"),p=n("0LGF"),h=n("+64M");const f=[{path:c.d,component:(()=>{class e{constructor(){this.spinnerLayoutCode='<div class="container">\n  <div class="spinner"></div>\n  <div class="spinner two"></div>\n  <div class="spinner three"></div>\n</div>',this.spinnerContainerStyleCode=".container {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}",this.spinnerBorderStyleCode="  border: 4vmin solid transparent;\n  border-radius: 50%;\n  border-top-color: var(--border-color);\n  border-bottom-color: var(--border-color);\n  box-sizing: border-box;",this.spinnerBorderHighlightStyleCode="border-top-color: var(--border-color);\nborder-bottom-color: var(--border-color);",this.boxSizingUrl="https://developer.mozilla.org/docs/Web/CSS/box-sizing",this.animationTimingFunctionUrl="https://developer.mozilla.org/docs/Web/CSS/animation-timing-function",this.keyframesCode="@keyframes rotate {\n  from {\n    transform: rotate3d(0, 0, 0, 0deg);\n  }\n  to {\n    transform: rotate3d(1, 1, 1, 360deg);\n  }\n}",this.spinnerStyleCode=".spinner {\n  --size: 30vmin;\n  --border-color: #ff3333ff;\n  --delay: 0.9s;\n  width: var(--size);\n  height: var(--size);\n  animation-name: rotate;\n  animation-duration: calc(var(--delay) * 3);\n  animation-timing-function: ease-in-out;\n  animation-iteration-count: infinite;\n  border: 4vmin solid transparent;\n  border-radius: 50%;\n  border-top-color: var(--border-color);\n  border-bottom-color: var(--border-color);\n  box-sizing: border-box;\n  position: absolute;\n}",this.cssUnitsUrl="https://www.w3schools.com/cssref/css_units.asp",this.cssGlobalVariableCode=":root {\n  --delay: 0.2s;\n}",this.cssVariableAlteringCode=".spinner {\n  --border-color: #ff3333ff;\n  border-color: var(--border-color);\n}\n.spinner.two {\n  --border-color: #ffff33ff;\n}",this.cssAlteredVariableLayoutCode='\x3c!-- border color here is #ff3333ff --\x3e\n<div class="spinner"></div>\n\x3c!-- and here it will be #ffff33ff --\x3e\n<div class="spinner two"></div>',this.cssCalculationCode=".spinner {\n  --delay: 0.9s;\n  animation-duration: calc(var(--delay) * 3);\n}",this.cssVariablesExampleCode=".spinner {\n  /* size declaration */\n  --size: 30vmin;\n  /* initial border color */\n  --border-color: #ff3333ff;\n  /* delay declaration */\n  --delay: 0.9s;\n  /* applying the size*/\n  width: var(--size);\n  height: var(--size);\n  /* calculating overall length of the animation */\n  animation-duration: calc(var(--delay) * 3);\n  /* applying the border color */\n  border-top-color: var(--border-color);\n  border-bottom-color: var(--border-color);\n}\n.spinner.two {\n  /* altering border color */\n  --border-color: #ffff33ff;\n  /* applying the delay of the animation */\n  animation-delay: var(--delay);\n}\n.spinner.three {\n  /* altering border color */\n  --border-color: #33ff33ff;\n  /* calculating and applying the delay of the animation */\n  animation-delay: calc(var(--delay) * 2);\n}",this.ideaAnchor="idea",this.layoutAnchor="layout",this.cssAnchor="css",this.conclusionAnchor=l.d}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d.Gb({type:e,selectors:[["app-misc-css3d-preloader"]],decls:155,vars:17,consts:[[1,"container-fluid"],[1,"spinner"],[1,"spinner","two"],[1,"spinner","three"],[3,"id"],[1,"container-fluid","sample"],[1,"spinner","sample"],[3,"href"],[1,"spinner","animated","sample"]],template:function(e,t){1&e&&(d.Qb(0,"h4"),d.sc(1,"CSS Pseudo 3D Preloader"),d.Ob(),d.Qb(2,"p"),d.sc(3," Preloaders are the way to improve the user experience significantly.\n"),d.Ob(),d.Qb(4,"p"),d.sc(5," Instead of nervously staring into the blank page, the user will prefer to leave the page. And if your page has a preloader, it is cool. Chances that the user will stay and wait for your content to load are much higher!\n"),d.Ob(),d.Qb(6,"p"),d.sc(7," It is worth to mention that the preloader is a wide area for creativity and experiments!\n"),d.Ob(),d.Qb(8,"p"),d.sc(9," In this article, I will share the idea of how to build a fancy version of the preloader.\n"),d.Ob(),d.Qb(10,"div",0),d.Nb(11,"div",1),d.Nb(12,"div",2),d.Nb(13,"div",3),d.Ob(),d.Qb(14,"h5",4),d.sc(15,"Idea"),d.Ob(),d.Qb(16,"p"),d.sc(17,"The idea behind this version of the preloader is to rotate several colorful objects to create an illusion of 3D animation."),d.Ob(),d.Qb(18,"h5",4),d.sc(19,"Layout"),d.Ob(),d.Qb(20,"app-code"),d.sc(21),d.Ob(),d.Qb(22,"p"),d.sc(23,"The layout is pretty simple. All the magic happens in the CSS."),d.Ob(),d.Qb(24,"h5",4),d.sc(25,"CSS"),d.Ob(),d.Qb(26,"h6"),d.sc(27,"Container"),d.Ob(),d.Qb(28,"p"),d.sc(29,"The container does nothing special. Its only purpose is to take all the space available and to center its content."),d.Ob(),d.Qb(30,"app-code"),d.sc(31),d.Ob(),d.Qb(32,"h6"),d.sc(33,"Spinner"),d.Ob(),d.Qb(34,"p"),d.sc(35,"The spinning object looks like this."),d.Ob(),d.Qb(36,"div",5),d.Nb(37,"div",6),d.Ob(),d.Qb(38,"app-note"),d.sc(39,"In this example, I've highlighted normally hidden parts with a semi-transparent color."),d.Ob(),d.Qb(40,"p"),d.sc(41,"Now let's take it to step by step."),d.Ob(),d.Qb(42,"p"),d.sc(43,"Initially, the entire border is invisible:"),d.Ob(),d.Qb(44,"app-code"),d.sc(45,"border: 4vmin solid transparent;"),d.Ob(),d.Qb(46,"p"),d.sc(47,"This rule turns a square into the circle:"),d.Ob(),d.Qb(48,"app-code"),d.sc(49,"border-radius: 50%;"),d.Ob(),d.Qb(50,"p"),d.sc(51,"Next two lines are defining the visible parts:"),d.Ob(),d.Qb(52,"app-code"),d.sc(53),d.Ob(),d.Qb(54,"app-note"),d.sc(55,"Here the CSS variables are used to define the color of the visible parts. We'll talk about them later."),d.Ob(),d.Qb(56,"p"),d.sc(57,"Finally, there is a CSS rule telling the browser how to calculate the width and height of the content:"),d.Ob(),d.Qb(58,"app-code"),d.sc(59,"box-sizing: border-box;"),d.Ob(),d.Qb(60,"app-note"),d.sc(61,"You can read more about "),d.Qb(62,"app-external-link",7),d.sc(63,"box-sizing"),d.Ob(),d.sc(64,"."),d.Ob(),d.Qb(65,"p"),d.sc(66,"Ok. Now let's deal with the animation."),d.Ob(),d.Qb(67,"p"),d.sc(68,"In this example, I've used separate animation rules instead of the shorthand version."),d.Ob(),d.Qb(69,"p"),d.sc(70,"Let's take a look at them. First, the name of the animation:"),d.Ob(),d.Qb(71,"app-code"),d.sc(72,"animation-name: rotate;"),d.Ob(),d.Qb(73,"p"),d.sc(74,"After that, let's calculate the duration of the animation like this:"),d.Ob(),d.Qb(75,"app-code"),d.sc(76,"animation-duration: calc(var(--delay) * 3);"),d.Ob(),d.Qb(77,"app-note"),d.sc(78,"The explanation of the CSS variables will be a bit later."),d.Ob(),d.Qb(79,"p"),d.sc(80,"Next rule defines how the animation will be applied:"),d.Ob(),d.Qb(81,"app-code"),d.sc(82,"animation-timing-function: ease-in-out;"),d.Ob(),d.Qb(83,"app-note"),d.sc(84,"The explanation of the "),d.Qb(85,"app-external-link",7),d.sc(86,"animation-timing-function"),d.Ob(),d.sc(87,"."),d.Ob(),d.Qb(88,"p"),d.sc(89,"The last CSS rule tells the browser to play the animation forever:"),d.Ob(),d.Qb(90,"app-code"),d.sc(91,"animation-iteration-count: infinite;"),d.Ob(),d.Qb(92,"p"),d.sc(93,"The keyframes for this animation are very simple."),d.Ob(),d.Qb(94,"app-code"),d.sc(95),d.Ob(),d.Qb(96,"p"),d.sc(97,"This animation aims to rotate an object from 0 to 360 degrees around all axes."),d.Ob(),d.Qb(98,"div",5),d.Nb(99,"div",8),d.Ob(),d.Qb(100,"p"),d.sc(101,"Let's wrap it up."),d.Ob(),d.Qb(102,"app-code"),d.sc(103),d.Ob(),d.Qb(104,"h6"),d.sc(105,"CSS Variables"),d.Ob(),d.Qb(106,"p"),d.sc(107,"Now it's time to dive a bit deeper into the CSS variables."),d.Ob(),d.Qb(108,"p"),d.sc(109,"The declaration looks like this:"),d.Ob(),d.Qb(110,"app-code"),d.sc(111,"--size: 20vmin;"),d.Ob(),d.Qb(112,"app-note"),d.sc(113,"You can read about the "),d.Qb(114,"app-external-link",7),d.sc(115,"CSS measuring units"),d.Ob(),d.sc(116,"."),d.Ob(),d.Qb(117,"p"),d.sc(118," The initial declaration of the variable can be placed anywhere up the CSS elements tree from the point of implementation. Also, it is possible to declare variables in the global scope.\n"),d.Ob(),d.Qb(119,"p"),d.sc(120,"In the latter case it will look like this:"),d.Ob(),d.Qb(121,"app-code"),d.sc(122),d.Ob(),d.Qb(123,"app-note"),d.sc(124,"Keep in mind that the names are case sensitive."),d.Ob(),d.Qb(125,"p"),d.sc(126,"The next useful thing is that the value of the variable can be altered."),d.Ob(),d.Qb(127,"p"),d.sc(128,"Here is an example:"),d.Ob(),d.Qb(129,"app-code"),d.sc(130),d.Ob(),d.Qb(131,"p"),d.sc(132,"With the above example we can build a layout like this:"),d.Ob(),d.Qb(133,"app-code"),d.sc(134),d.Ob(),d.Qb(135,"p"),d.sc(136,"One more feature is that variables can be used in the CSS calculation clause:"),d.Ob(),d.Qb(137,"app-code"),d.sc(138),d.Ob(),d.Qb(139,"p"),d.sc(140,"Let's summarize:"),d.Ob(),d.Qb(141,"app-code"),d.sc(142),d.Ob(),d.Qb(143,"p"),d.sc(144," Thus, the CSS variables are a great alternative to CSS preprocessors (such as SASS or LESS). The only downside is that these features are supported only by the latest versions of browsers. And an example from this article won't work in the Internet Explorer.\n"),d.Ob(),d.Qb(145,"p"),d.sc(146," So, if your project is aimed to support only the latest versions of the browsers - go ahead and add additional flexibility to the CSS rules you are using!\n"),d.Ob(),d.Qb(147,"h5",4),d.sc(148,"Conclusion"),d.Ob(),d.Qb(149,"p"),d.sc(150,"There are plenty of ways to improve the user experience and make your clients happy."),d.Ob(),d.Qb(151,"p"),d.sc(152,"Adding a preloader to your page is only one of the possible ways to impress your visitors."),d.Ob(),d.Qb(153,"p"),d.sc(154,"Despite the simplicity, the preloader is a wide area for experiments and creativity."),d.Ob()),2&e&&(d.xb(14),d.dc("id",t.ideaAnchor),d.xb(4),d.dc("id",t.layoutAnchor),d.xb(3),d.tc(t.spinnerLayoutCode),d.xb(3),d.dc("id",t.cssAnchor),d.xb(7),d.tc(t.spinnerContainerStyleCode),d.xb(22),d.tc(t.spinnerBorderHighlightStyleCode),d.xb(9),d.dc("href",t.boxSizingUrl),d.xb(23),d.dc("href",t.animationTimingFunctionUrl),d.xb(10),d.tc(t.keyframesCode),d.xb(8),d.tc(t.spinnerStyleCode),d.xb(11),d.dc("href",t.cssUnitsUrl),d.xb(8),d.tc(t.cssGlobalVariableCode),d.xb(8),d.tc(t.cssVariableAlteringCode),d.xb(4),d.tc(t.cssAlteredVariableLayoutCode),d.xb(4),d.tc(t.cssCalculationCode),d.xb(4),d.tc(t.cssVariablesExampleCode),d.xb(5),d.dc("id",t.conclusionAnchor))},directives:[b.a,p.a,h.a],styles:[".container-fluid[_ngcontent-%COMP%]{--size:30vmin;width:100%;height:calc(var(--size) * 1.5);margin:0;padding:0;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.container-fluid.sample[_ngcontent-%COMP%]{height:calc(var(--size) * .7)}.container-fluid[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]{--border-color:#ff3333ff;--delay:0.9s;width:var(--size);height:var(--size);-webkit-animation-name:rotate;animation-name:rotate;-webkit-animation-duration:calc(var(--delay) * 3);animation-duration:calc(var(--delay) * 3);-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;border:4vmin solid transparent;border-radius:50%;border-top-color:var(--border-color);border-bottom-color:var(--border-color);box-sizing:border-box;position:absolute}.container-fluid[_ngcontent-%COMP%]   .spinner.two[_ngcontent-%COMP%]{--border-color:#ffff33ff;-webkit-animation-delay:var(--delay);animation-delay:var(--delay)}.container-fluid[_ngcontent-%COMP%]   .spinner.three[_ngcontent-%COMP%]{--border-color:#33ff33ff;-webkit-animation-delay:calc(var(--delay) * 2);animation-delay:calc(var(--delay) * 2)}.container-fluid[_ngcontent-%COMP%]   .spinner.sample[_ngcontent-%COMP%]{--size:15vmin;--border-color:#3333ffff;border:2vmin solid #3333ff44;border-top-color:var(--border-color);border-bottom-color:var(--border-color);-webkit-animation-name:none;animation-name:none}.container-fluid[_ngcontent-%COMP%]   .spinner.sample.animated[_ngcontent-%COMP%]{-webkit-animation-name:rotate;animation-name:rotate}@-webkit-keyframes rotate{from{-webkit-transform:rotate3d(0,0,0,0deg);transform:rotate3d(0,0,0,0deg)}to{-webkit-transform:rotate3d(1,1,1,360deg);transform:rotate3d(1,1,1,360deg)}}@keyframes rotate{from{-webkit-transform:rotate3d(0,0,0,0deg);transform:rotate3d(0,0,0,0deg)}to{-webkit-transform:rotate3d(1,1,1,360deg);transform:rotate3d(1,1,1,360deg)}}"]}),e})()}];let u=(()=>{class e{}return e.\u0275mod=d.Kb({type:e}),e.\u0275inj=d.Jb({factory:function(t){return new(t||e)},imports:[[s.f.forChild(f)],s.f]}),e})();n.d(t,"MiscCss3dPreloaderModule",(function(){return m}));let m=(()=>{class e{}return e.\u0275mod=d.Kb({type:e}),e.\u0275inj=d.Jb({factory:function(t){return new(t||e)},imports:[[o.b,u,i.a,r.a,a.a]]}),e})()},qTCB:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n("ofXK"),i=(n("OeOG"),n("fXoL"));let a=(()=>{class e{}return e.\u0275mod=i.Kb({type:e}),e.\u0275inj=i.Jb({factory:function(t){return new(t||e)},imports:[[o.b]]}),e})()}}]);