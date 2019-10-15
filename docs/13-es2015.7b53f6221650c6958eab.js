(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"8G2M":function(c,e,o){"use strict";o.r(e);var a=o("ofXK"),t=o("fXoL"),n=o("6NWb"),r=o("qTCB"),s=o("snBB"),i=o("tyNb"),l=o("f+iR"),p=o("wHSu"),h=o("MFFz"),f=o("YBC8"),u=o("+64M"),d=o("OeOG");const F=[3,"id"],m=[3,"href"],g=[3,"routerLink"],w=[3,"icon"],y=[{path:l.c,component:(()=>{class c{constructor(){this.nodeJsAnchor="NodeJs",this.nodeJsUrl="https://nodejs.org",this.yarnAnchor="Yarn",this.yarnUrl="https://yarnpkg.com/",this.ideAnchor="IDE",this.eclipseUrl="http://eclipse.org/",this.netBeansUrl="https://netbeans.org/",this.webStormUrl="https://www.jetbrains.com/webstorm/",this.codeUrl=h.b,this.atomUrl="https://atom.io/",this.sublimeUrl="https://www.sublimetext.com/",this.vimUrl="http://www.vim.org/",this.gitAnchor=f.a,this.gitUrl=h.d,this.gitGuiUrl=h.c,this.angularAnchor="Angular",this.angularUrl="https://angular.io",this.bootstrapAnchor="Bootstrap",this.bootstrapUrl="https://getbootstrap.com/",this.fontAwesomeAnchor="FontAwesome",this.fontAwesomeUrl="https://fontawesome.com/",this.fontAwesomeIconsUrl="https://fontawesome.com/icons",this.angularFontAwesomeUrl="https://github.com/FortAwesome/angular-fontawesome",this.vsCodeExtensionsPath=[l.f,l.j],this.gitCliPath=[l.f,l.d],this.faExternalLinkSquareAlt=p.d}ngOnInit(){}}return c.ngFactoryDef=function(e){return new(e||c)},c.ngComponentDef=t.Sb({type:c,selectors:[["app-prerequisites"]],consts:200,vars:26,template:function(c,e){1&c&&(t.cc(0,"h4"),t.Fc(1,"The list of required tools"),t.ac(),t.cc(2,"p"),t.Fc(3," Here goes the list of tools which one will need to have to start developing.\n"),t.ac(),t.cc(4,"p"),t.Fc(5,"Please, note that the order of the list is also important."),t.ac(),t.cc(6,"p"),t.Fc(7,"For example, Yarn will not work without NPM, etc."),t.ac(),t.cc(8,"p"),t.Fc(9,"Ok let's get started"),t.ac(),t.cc(10,"h5",F),t.cc(11,"app-external-link",m),t.Fc(12,"Node.js"),t.ac(),t.ac(),t.cc(13,"p"),t.Fc(14," The Node.js provides a powerful V8 JavaScript engine, a package manager (aka NPM), server-side JavaScript runtime environment, etc.\n"),t.ac(),t.cc(15,"h5",F),t.cc(16,"app-external-link",m),t.Fc(17,"Yarn"),t.ac(),t.ac(),t.cc(18,"p"),t.Fc(19,"The Yarn package manager is a superset for an NPM."),t.ac(),t.cc(20,"p"),t.Fc(21,"Why use Yarn?"),t.ac(),t.cc(22,"p"),t.Fc(23,"First of all, it is much faster."),t.ac(),t.cc(24,"p"),t.Fc(25," Secondly, Yarn will recreate all of the dependencies you use in your project with the same version on any remote workstation.\n"),t.ac(),t.cc(26,"h5",F),t.Fc(27,"IDE"),t.ac(),t.cc(28,"p"),t.Fc(29,"You may use any IDE which fits you the most."),t.ac(),t.cc(30,"p"),t.Fc(31," Here are some of them "),t.cc(32,"app-external-link",m),t.Fc(33,"Eclipse"),t.ac(),t.Fc(34,", "),t.cc(35,"app-external-link",m),t.Fc(36,"NetBeans"),t.ac(),t.Fc(37,", "),t.cc(38,"app-external-link",m),t.Fc(39,"WebStorm"),t.ac(),t.Fc(40,", "),t.cc(41,"app-external-link",m),t.Fc(42,"Visual Studio Code"),t.ac(),t.Fc(43,".\n"),t.ac(),t.cc(44,"p"),t.Fc(45," If you are a hardcore type of developer you may also use "),t.cc(46,"app-external-link",m),t.Fc(47,"Atom"),t.ac(),t.Fc(48,", "),t.cc(49,"app-external-link",m),t.Fc(50,"Sublime Text"),t.ac(),t.Fc(51," or even "),t.cc(52,"app-external-link",m),t.Fc(53,"Vim"),t.ac(),t.Fc(54,".\n"),t.ac(),t.cc(55,"p"),t.Fc(56," I'm using Visual Studio Code if you are using it too then checkout "),t.cc(57,"a",g),t.Fc(58,"list"),t.ac(),t.Fc(59," of extensions I'm using daily to be more productive.\n"),t.ac(),t.cc(60,"h5",F),t.cc(61,"app-external-link",m),t.Fc(62,"Git"),t.ac(),t.ac(),t.cc(63,"p"),t.Fc(64,"Git is a powerful yet flexible, still easy to use version control system."),t.ac(),t.cc(65,"p"),t.Fc(66," You can use different software to sync your work between local and remote repositories and other developers.\n"),t.ac(),t.cc(67,"p"),t.Fc(68," Though, the official package of git includes such tools as "),t.cc(69,"code"),t.Fc(70,"gitk"),t.ac(),t.Fc(71," and "),t.cc(72,"code"),t.Fc(73,"git-gui"),t.ac(),t.Fc(74," you may also use any of programs listed on the official "),t.cc(75,"app-external-link",m),t.Fc(76,"site"),t.ac(),t.Fc(77,".\n"),t.ac(),t.cc(78,"p"),t.Fc(79," If you prefer to use the CLI, then take a look at the "),t.cc(80,"a",g),t.Fc(81,"list"),t.ac(),t.Fc(82," of commands which I'm using daily.\n"),t.ac(),t.cc(83,"h5",F),t.cc(84,"app-external-link",m),t.Fc(85,"Angular"),t.ac(),t.ac(),t.cc(86,"p"),t.Fc(87,"To start a new Angular project follow these steps."),t.ac(),t.cc(88,"p"),t.Fc(89,"First, install an Angular CLI via NPM."),t.ac(),t.cc(90,"app-code"),t.Fc(91,"npm install -g @angular/cli"),t.ac(),t.cc(92,"p"),t.Fc(93,"Or using Yarn:"),t.ac(),t.cc(94,"app-code"),t.Fc(95,"yarn add global @angular/cli"),t.ac(),t.cc(96,"p"),t.Fc(97,"Second, create a new project:"),t.ac(),t.cc(98,"app-code"),t.Fc(99,"ng new app"),t.ac(),t.cc(100,"p"),t.Fc(101," Before the creation, Angular will ask you about the basic features of the new project.\n"),t.ac(),t.cc(102,"p"),t.Fc(103," The first question is about enabling Angular routing in your project (default option is no).\n"),t.ac(),t.cc(104,"p"),t.Fc(105,"The second question is about CSS handling (default option is pure CSS)."),t.ac(),t.cc(106,"p"),t.Fc(107,"After all of the required operations are done, go to the project folder."),t.ac(),t.cc(108,"app-code"),t.Fc(109,"cd app"),t.ac(),t.cc(110,"p"),t.Fc(111,"Finally, run the project!"),t.ac(),t.cc(112,"app-code"),t.Fc(113,"ng serve"),t.ac(),t.cc(114,"p"),t.Fc(115," Optionally you can provide "),t.cc(116,"code"),t.Fc(117,"--open"),t.ac(),t.Fc(118," flag, which will open your default browser once the project is ready to start.\n"),t.ac(),t.cc(119,"app-code"),t.Fc(120,"ng serve --open"),t.ac(),t.cc(121,"p"),t.Fc(122,"To get a list of available commands run the following:"),t.ac(),t.cc(123,"app-code"),t.Fc(124,"ng help"),t.ac(),t.cc(125,"h5",F),t.cc(126,"app-external-link",m),t.Fc(127,"Bootstrap"),t.ac(),t.ac(),t.cc(128,"p"),t.Fc(129,"To build applications fast, one should use CSS component library."),t.ac(),t.cc(130,"p"),t.Fc(131,"My favorite is Bootstrap!"),t.ac(),t.cc(132,"p"),t.Fc(133," So, to add this component library to your project start CLI anywhere inside your project's folder and install it via NPM:\n"),t.ac(),t.cc(134,"app-code"),t.Fc(135,"npm install bootstrap"),t.ac(),t.cc(136,"p"),t.Fc(137,"Or via Yarn:"),t.ac(),t.cc(138,"app-code"),t.Fc(139,"yarn add bootstrap"),t.ac(),t.cc(140,"h5",F),t.cc(141,"app-external-link",m),t.Fc(142,"Font Awesome"),t.ac(),t.ac(),t.cc(143,"p"),t.Fc(144," One more thing you can to do is to install the Font Awesome, though this step is optional.\n"),t.ac(),t.cc(145,"p"),t.Fc(146,"This toolkit will allow you to add awesome SVG icons into your project."),t.ac(),t.cc(147,"p"),t.Fc(148," Which, in turn, will enrich the visual experience and will add a neat look to your project.\n"),t.ac(),t.cc(149,"p"),t.Fc(150," For example, you can distinguish external links from regular links by and SVG attached after the link name - "),t.Zb(151,"fa-icon",w),t.Fc(152,".\n"),t.ac(),t.cc(153,"p"),t.Fc(154,"Anywhere inside your project's folder run:"),t.ac(),t.cc(155,"app-code"),t.Fc(156,"npm install @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/angular-fontawesome"),t.ac(),t.cc(157,"p"),t.Fc(158,"Or via Yarn:"),t.ac(),t.cc(159,"app-code"),t.Fc(160,"yarn add @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/angular-fontawesome"),t.ac(),t.cc(161,"p"),t.Fc(162,"Here goes short description for each package installed:"),t.ac(),t.cc(163,"p"),t.cc(164,"code"),t.Fc(165,"@fortawesome/fontawesome-svg-core"),t.ac(),t.Fc(166," - the toolkit itself."),t.ac(),t.cc(167,"p"),t.cc(168,"code"),t.Fc(169,"@fortawesome/free-brands-svg-icons"),t.ac(),t.Fc(170," - the set of free "),t.cc(171,"code"),t.Fc(172,"branded"),t.ac(),t.Fc(173," icons, such as Google, Twitter, Facebook, etc.\n"),t.ac(),t.cc(174,"p"),t.cc(175,"code"),t.Fc(176,"@fortawesome/free-regular-svg-icons"),t.ac(),t.Fc(177," - the set of free "),t.cc(178,"code"),t.Fc(179,"regular"),t.ac(),t.Fc(180," icons.\n"),t.ac(),t.cc(181,"p"),t.cc(182,"code"),t.Fc(183,"@fortawesome/free-solid-svg-icons"),t.ac(),t.Fc(184," - the set of free "),t.cc(185,"code"),t.Fc(186,"solid"),t.ac(),t.Fc(187," icons.\n"),t.ac(),t.cc(188,"p"),t.cc(189,"code"),t.Fc(190,"@fortawesome/angular-fontawesome"),t.ac(),t.Fc(191," - this is a wrapper "),t.cc(192,"app-external-link",m),t.Fc(193,"library"),t.ac(),t.Fc(194," for use in Angular projects.\n"),t.ac(),t.cc(195,"p"),t.Fc(196," You can browse the icons "),t.cc(197,"app-external-link",m),t.Fc(198,"here"),t.ac(),t.Fc(199,".\n"),t.ac()),2&c&&(t.xc(10),t.oc("id",e.nodeJsAnchor),t.xc(11),t.nc("href",e.nodeJsUrl),t.xc(15),t.oc("id",e.yarnAnchor),t.xc(16),t.nc("href",e.yarnUrl),t.xc(26),t.oc("id",e.ideAnchor),t.xc(32),t.nc("href",e.eclipseUrl),t.xc(35),t.nc("href",e.netBeansUrl),t.xc(38),t.nc("href",e.webStormUrl),t.xc(41),t.nc("href",e.codeUrl),t.xc(46),t.nc("href",e.atomUrl),t.xc(49),t.nc("href",e.sublimeUrl),t.xc(52),t.nc("href",e.vimUrl),t.xc(57),t.nc("routerLink",e.vsCodeExtensionsPath),t.xc(60),t.oc("id",e.gitAnchor),t.xc(61),t.nc("href",e.gitUrl),t.xc(75),t.nc("href",e.gitGuiUrl),t.xc(80),t.nc("routerLink",e.gitCliPath),t.xc(83),t.oc("id",e.angularAnchor),t.xc(84),t.nc("href",e.angularUrl),t.xc(125),t.oc("id",e.bootstrapAnchor),t.xc(126),t.nc("href",e.bootstrapUrl),t.xc(140),t.oc("id",e.fontAwesomeAnchor),t.xc(141),t.nc("href",e.fontAwesomeUrl),t.xc(151),t.nc("icon",e.faExternalLinkSquareAlt),t.xc(192),t.nc("href",e.angularFontAwesomeUrl),t.xc(197),t.nc("href",e.fontAwesomeIconsUrl))},directives:[u.a,i.e,d.a,n.a],styles:[""]}),c})()}];let x=(()=>{class c{}return c.ngModuleDef=t.Wb({type:c}),c.ngInjectorDef=t.Vb({factory:function(e){return new(e||c)},imports:[[i.f.forChild(y)],i.f]}),c})();i.f.forChild(y),o.d(e,"PrerequisitesModule",function(){return b});let b=(()=>{class c{}return c.ngModuleDef=t.Wb({type:c}),c.ngInjectorDef=t.Vb({factory:function(e){return new(e||c)},imports:[[a.b,x,s.a,r.a,n.b]]}),c})()}}]);