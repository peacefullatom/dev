(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{MFFz:function(c,t,e){"use strict";e.d(t,"b",(function(){return n})),e.d(t,"e",(function(){return o})),e.d(t,"d",(function(){return a})),e.d(t,"a",(function(){return i})),e.d(t,"c",(function(){return r}));var n="https://code.visualstudio.com/",o="https://git-scm.com/",a="https://git-scm.com/downloads/guis",i="https://getbootstrap.com/",r="conclusion"},OeOG:function(c,t,e){"use strict";e.d(t,"a",(function(){return d}));var n=e("fXoL"),o=e("bAt0"),a=e("ofXK"),i=["code"],r=[3,"ngClass","id"],s=[3,"ngClass"],h=["code",""],u=function(c){return{hide:c}},p=["*"],d=function(){var c=function(){function c(c){this.idService=c,this.className="bg-dark text-light py-3 px-3 rounded",this.content=!1}return c.prototype.ngOnInit=function(){this.id=this.id||this.idService.nextId(),this.value&&"string"!=typeof this.value&&(this.value=JSON.stringify(this.value))},c.prototype.ngOnChanges=function(c){(c.html||c.text||c.value)&&(this.content=!!this.html||!!this.text||!!this.value,this.html&&this.codeRef&&this.codeRef.nativeElement.insertAdjacentHTML("afterbegin",this.html))},c.prototype.render=function(){return this.value?this.value:this.text?this.text:""},c}();return c.ngFactoryDef=function(t){return new(t||c)(n.Yb(o.a))},c.ngComponentDef=n.Sb({type:c,selectors:[["app-code"]],viewQuery:function(c,t){var e;1&c&&n.zc(i,!0),2&c&&n.sc(e=n.jc())&&(t.codeRef=e.first)},inputs:{id:"id",value:"value",text:"text",html:"html"},features:[n.Ib()],ngContentSelectors:p,consts:7,vars:12,template:function(c,t){1&c&&(n.mc(),n.cc(0,"pre",r),n.Cc(),n.cc(1,"code"),n.lc(2),n.ac(),n.ac(),n.cc(3,"pre",s),n.Cc(),n.cc(4,"code",null,h),n.Fc(6),n.ac(),n.ac()),2&c&&(n.Mb(t.className),n.Dc(),n.oc("id",t.id),n.nc("ngClass",n.pc(8,u,t.content)),n.xc(3),n.Mb(t.className),n.Dc(),n.nc("ngClass",n.pc(10,u,!t.content)),n.xc(6),n.Gc(t.render()))},directives:[a.h],styles:[".hide[_ngcontent-%COMP%]{display:none}pre[_ngcontent-%COMP%]{max-height:20rem}"]}),c}()},qTCB:function(c,t,e){"use strict";e.d(t,"a",(function(){return a}));var n=e("ofXK"),o=e("fXoL");e("OeOG");var a=function(){var c=function(){};return c.ngModuleDef=o.Wb({type:c}),c.ngInjectorDef=o.Vb({factory:function(t){return new(t||c)},imports:[[n.b]]}),c}()},ziej:function(c,t,e){"use strict";e.r(t);var n,o,a=e("ofXK"),i=e("fXoL"),r=e("6NWb"),s=e("qTCB"),h=e("snBB"),u=e("U5I1"),p=e("tyNb"),d=e("f+iR"),l=e("MFFz"),f=e("YBC8"),m=e("+64M"),g=e("OeOG"),F=e("0LGF"),y=[3,"href"],b=[3,"routerLink","fragment"],w=[3,"id"],v=[{path:d.c,component:(n=function(){function c(){this.prerequisitesPath=[d.f,d.g],this.gitAnchor=f.a,this.gitUrl=l.e,this.gitGuiUrl=l.d,this.initAnchor="init",this.pullAnchor="pull",this.branchAnchor="branch",this.checkoutAnchor="checkout",this.pushAnchor="push",this.addAnchor="add",this.commitAnchor="commit",this.mergeAnchor="merge",this.helpAnchor="help",this.summaryAnchor="summary"}return c.prototype.ngOnInit=function(){},c}(),n.ngFactoryDef=function(c){return new(c||n)},n.ngComponentDef=i.Sb({type:n,selectors:[["app-git-cli"]],consts:172,vars:14,template:function(c,t){1&c&&(i.cc(0,"h4"),i.Fc(1,"The git CLi"),i.ac(),i.cc(2,"p"),i.Fc(3,"As a developer, I'm using different tools every day."),i.ac(),i.cc(4,"p"),i.Fc(5," One of my favorite tools is a "),i.cc(6,"app-external-link",y),i.Fc(7,"git"),i.ac(),i.Fc(8,".\n"),i.ac(),i.cc(9,"p"),i.Fc(10," There are plenty of ways of using git. As I mentioned in the "),i.cc(11,"a",b),i.Fc(12,"prerequisites"),i.ac(),i.Fc(13," section, there is a set of "),i.cc(14,"app-external-link",y),i.Fc(15,"GUI software"),i.ac(),i.Fc(16,".\n"),i.ac(),i.cc(17,"p"),i.Fc(18,"But I prefer to use git from command-line."),i.ac(),i.cc(19,"p"),i.Fc(20,"So, here are some of the commands I'm using daily."),i.ac(),i.cc(21,"h5",w),i.Fc(22,"init"),i.ac(),i.cc(23,"p"),i.Fc(24,"If you need to initialize a new repository run this command:"),i.ac(),i.cc(25,"app-code"),i.Fc(26,"git init"),i.ac(),i.cc(27,"p"),i.Fc(28,"That's all! Now you have the initialized repo. Make your first commit."),i.ac(),i.cc(29,"h5",w),i.Fc(30,"pull"),i.ac(),i.cc(31,"p"),i.Fc(32," If you are working as a part of a team, or if you are working from different workstations, you need to keep your local repo up to date.\n"),i.ac(),i.cc(33,"p"),i.Fc(34," To perform this run the following:\n"),i.ac(),i.cc(35,"app-code"),i.Fc(36,"git pull"),i.ac(),i.cc(37,"p"),i.Fc(38," After running this command, don't forget to check if there are any merging conflicts.\n"),i.ac(),i.cc(39,"h5",w),i.Fc(40,"branch"),i.ac(),i.cc(41,"p"),i.Fc(42," There can be several branches in a repository.\n"),i.ac(),i.cc(43,"p"),i.Fc(44," Next command is showing a list of branches and highlights the active one:\n"),i.ac(),i.cc(45,"app-code"),i.Fc(46,"git branch"),i.ac(),i.cc(47,"p"),i.Fc(48,"It is a bad habit to work on the "),i.cc(49,"i"),i.Fc(50,"master"),i.ac(),i.Fc(51," or "),i.cc(52,"i"),i.Fc(53,"develop"),i.ac(),i.Fc(54," branch."),i.ac(),i.cc(55,"p"),i.Fc(56," Most of the work is happening in child branches.\n"),i.ac(),i.cc(57,"p"),i.Fc(58," To create a new branch, run this command:\n"),i.ac(),i.cc(59,"app-code"),i.Fc(60,"git branch "),i.cc(61,"i"),i.Fc(62,"branch_name"),i.ac(),i.ac(),i.cc(63,"p"),i.Fc(64,"If you want to remove local branch type this command:"),i.ac(),i.cc(65,"app-code"),i.Fc(66,"git branch "),i.cc(67,"b"),i.Fc(68,"-d"),i.ac(),i.Fc(69,"\xa0"),i.cc(70,"i"),i.Fc(71,"branch_name"),i.ac(),i.ac(),i.cc(72,"p"),i.Fc(73,"Don't forget that the branch will remain on a remote server."),i.ac(),i.cc(74,"h5",w),i.Fc(75,"checkout"),i.ac(),i.cc(76,"p"),i.Fc(77,"To switch to another branch issue the next command:"),i.ac(),i.cc(78,"app-code"),i.Fc(79,"git checkout "),i.cc(80,"i"),i.Fc(81,"branch_name"),i.ac(),i.ac(),i.cc(82,"p"),i.Fc(83," If you want to create a new branch and switch to it, add "),i.cc(84,"b"),i.Fc(85,"-b"),i.ac(),i.Fc(86," option:\n"),i.ac(),i.cc(87,"app-code"),i.Fc(88,"git checkout "),i.cc(89,"b"),i.Fc(90,"-b"),i.ac(),i.Fc(91,"\xa0"),i.cc(92,"i"),i.Fc(93,"branch_name"),i.ac(),i.ac(),i.cc(94,"h5",w),i.Fc(95,"add"),i.ac(),i.cc(96,"p"),i.Fc(97," After you have finished your work, you need to stage files. To add all files at once use this command:\n"),i.ac(),i.cc(98,"app-code"),i.Fc(99,"git add "),i.cc(100,"b"),i.Fc(101,"--all"),i.ac(),i.ac(),i.cc(102,"p"),i.Fc(103,"Or you can add files using the following syntax:"),i.ac(),i.cc(104,"app-code"),i.Fc(105,"git add "),i.cc(106,"i"),i.Fc(107,"path_spec"),i.ac(),i.ac(),i.cc(108,"app-note"),i.Fc(109,"Note that path_spec can be a single file name, a path to a directory, and also it supports wildcards."),i.ac(),i.cc(110,"h5",w),i.Fc(111,"commit"),i.ac(),i.cc(112,"p"),i.Fc(113," Once you have staged files, you can commit them to the remote repository. One option is to use the abilities of your IDE. But you can file the next command:\n"),i.ac(),i.cc(114,"app-code"),i.Fc(115,"git commit"),i.ac(),i.cc(116,"p"),i.Fc(117," As a result, the git will open editor which is set in its configuration and will wait until you save the generated file. This option allows you to write commit's comments longer than 70 symbols.\n"),i.ac(),i.cc(118,"p"),i.Fc(119," If you prefer one-line comment style then add your description using this syntax:\n"),i.ac(),i.cc(120,"app-code"),i.Fc(121,"git commit "),i.cc(122,"b"),i.Fc(123,"-m"),i.ac(),i.Fc(124,' "'),i.cc(125,"i"),i.Fc(126,"your_comment_here"),i.ac(),i.Fc(127,'"'),i.ac(),i.cc(128,"h5",w),i.Fc(129,"merge"),i.ac(),i.cc(130,"p"),i.Fc(131,"Merging branches can be done as follows:"),i.ac(),i.cc(132,"app-code"),i.Fc(133,"git merge "),i.cc(134,"i"),i.Fc(135,"branch_name"),i.ac(),i.ac(),i.cc(136,"p"),i.Fc(137,"Don't forget to check for conflicts and fix them if they arise."),i.ac(),i.cc(138,"p"),i.Fc(139," It is also a good practice to merge branches via pull requests instead of doing this directly.\n"),i.ac(),i.cc(140,"h5",w),i.Fc(141,"push"),i.ac(),i.cc(142,"p"),i.Fc(143,"Pushing your changes to a remote repository is done like this:"),i.ac(),i.cc(144,"app-code"),i.Fc(145,"git push"),i.ac(),i.cc(146,"p"),i.Fc(147," If your branch exists only on your local workstation, then the git will warn you about this. But if you are aware of that, you can run this command:\n"),i.ac(),i.cc(148,"app-code"),i.Fc(149,"git push "),i.cc(150,"b"),i.Fc(151,"--set-upstream"),i.ac(),i.Fc(152," origin "),i.cc(153,"i"),i.Fc(154,"branch_name"),i.ac(),i.ac(),i.cc(155,"p"),i.Fc(156," This command will create a new branch in a remote repository and push your changes.\n"),i.ac(),i.cc(157,"h5",w),i.Fc(158,"help"),i.ac(),i.cc(159,"p"),i.Fc(160," If you stuck at some point, you can always read the git manual. To ask git for help type:\n"),i.ac(),i.cc(161,"app-code"),i.Fc(162,"git "),i.cc(163,"i"),i.Fc(164,"command"),i.ac(),i.Fc(165,"\xa0"),i.cc(166,"b"),i.Fc(167,"--help"),i.ac(),i.ac(),i.cc(168,"h5",w),i.Fc(169,"summary"),i.ac(),i.cc(170,"p"),i.Fc(171," There are a lot of abilities of git which are not covered by this article. But this is the minimal set for everyday usage.\n"),i.ac()),2&c&&(i.xc(6),i.nc("href",t.gitUrl),i.xc(11),i.oc("fragment",t.gitAnchor),i.nc("routerLink",t.prerequisitesPath),i.xc(14),i.nc("href",t.gitGuiUrl),i.xc(21),i.oc("id",t.initAnchor),i.xc(29),i.oc("id",t.pullAnchor),i.xc(39),i.oc("id",t.branchAnchor),i.xc(74),i.oc("id",t.checkoutAnchor),i.xc(94),i.oc("id",t.addAnchor),i.xc(110),i.oc("id",t.commitAnchor),i.xc(128),i.oc("id",t.mergeAnchor),i.xc(140),i.oc("id",t.pushAnchor),i.xc(157),i.oc("id",t.helpAnchor),i.xc(168),i.oc("id",t.summaryAnchor))},directives:[m.a,p.e,g.a,F.a],styles:[""]}),n)}],x=((o=function(){}).ngModuleDef=i.Wb({type:o}),o.ngInjectorDef=i.Vb({factory:function(c){return new(c||o)},imports:[[p.f.forChild(v)],p.f]}),o);p.f.forChild(v),e.d(t,"GitCliModule",(function(){return k}));var A,k=((A=function(){}).ngModuleDef=i.Wb({type:A}),A.ngInjectorDef=i.Vb({factory:function(c){return new(c||A)},imports:[[a.b,x,h.a,r.b,s.a,u.a]]}),A)}}]);