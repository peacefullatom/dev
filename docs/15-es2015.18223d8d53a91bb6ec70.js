(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{IKyJ:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var o=u("pMnS"),s=u("IgYI"),r=u("+64M"),i=u("bAt0"),c=u("XY/t"),a=u("2ciz"),b=u("zjdV"),d=u("OeOG"),h=u("0eor"),p=u("MFFz");class y{constructor(){this.concurrentlyUrl="https://github.com/kimmobrunfeldt/concurrently",this.concurrentlyReadmeUrl="https://github.com/kimmobrunfeldt/concurrently/blob/master/README.md",this.concurrentlyReadmeUsageUrl="https://github.com/kimmobrunfeldt/concurrently/blob/master/README.md#usage",this.outputCode="  [1] [nodemon] restarting due to changes...\n  [1] [nodemon] starting `node sources.js`\n  [0] i \uff62wdm\uff63: Compiling...\n  100% of source files processed\n  [1] [nodemon] clean exit - waiting for changes before restart\n  [0]\n  [0] Date: 2019-10-21T23:33:11.015Z - Hash: 2d40bfd8ab7b39a3fedf\n  [0] 21 unchanged chunks\n  [0] chunk {utilities-concurrently-utilities-concurrently-module} utilities-concurrently-utilities-concurrently-module.js, utilities-concurrently-utilities-concurrently-module.js.map (utilities-concurrently-utilities-concurrently-module) 20.5 kB  [rendered]\n  Time: 3329ms\n  [0] i \uff62wdm\uff63: Compiled successfully.",this.bsTextAlignCenter=h.t,this.taskAnchor="task",this.solutionAnchor="solution",this.conclusionAnchor=p.c}ngOnInit(){}}var m=t.mb({encapsulation:0,styles:[[""]],data:{}});function f(l){return t.Gb(0,[(l()(),t.ob(0,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Concurrently"])),(l()(),t.ob(2,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,[" The "])),(l()(),t.ob(4,0,null,null,2,"app-external-link",[],null,null,null,s.b,s.a)),t.nb(5,114688,null,0,r.a,[i.a],{href:[0,"href"]},null),(l()(),t.Fb(-1,0,["concurrently"])),(l()(),t.Fb(-1,null,[" is a utility which allows you to\n"])),(l()(),t.ob(8,0,null,null,8,"app-blockquote",[],null,null,null,c.b,c.a)),t.nb(9,114688,null,0,a.a,[i.a],{textAlign:[0,"textAlign"]},null),(l()(),t.ob(10,0,null,0,1,"p",[["class","mb-0"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,['"Run multiple commands concurrently"'])),(l()(),t.ob(12,0,null,1,4,"span",[["footer",""]],null,null,null,null,null)),(l()(),t.ob(13,0,null,null,2,"app-external-link",[],null,null,null,s.b,s.a)),t.nb(14,114688,null,0,r.a,[i.a],{href:[0,"href"]},null),(l()(),t.Fb(-1,0,["concurrently readme"])),(l()(),t.Fb(-1,null,["."])),(l()(),t.ob(17,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,[" What else to add? It's a feature-rich utility that boosts your development process! Though, in this article, I will show you the very basics of its usage.\n"])),(l()(),t.ob(19,0,null,null,1,"h5",[],[[8,"id",0]],null,null,null,null)),(l()(),t.Fb(-1,null,["Task"])),(l()(),t.ob(21,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,[" I have decided to use this utility because I need to add the actual source code of this project into my static pages.\n"])),(l()(),t.ob(23,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,[" But, I want any updates of the code to be added automatically without my involvement.\n"])),(l()(),t.ob(25,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,[" To achieve this goal, I wrote a node.js script, which is running concurrently with angular scripts.\n"])),(l()(),t.ob(27,0,null,null,1,"h5",[],[[8,"id",0]],null,null,null,null)),(l()(),t.Fb(-1,null,["Solution"])),(l()(),t.ob(29,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["First of all, add the concurrently utility to the project:"])),(l()(),t.ob(31,0,null,null,2,"app-code",[],null,null,null,b.b,b.a)),t.nb(32,638976,null,0,d.a,[i.a],null,null),(l()(),t.Fb(-1,0,["yarn add -D concurrently"])),(l()(),t.ob(34,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Next, modify the package.json. In my case, it looks like this:"])),(l()(),t.ob(36,0,null,null,2,"app-code",[],null,null,null,b.b,b.a)),t.nb(37,638976,null,0,d.a,[i.a],null,null),(l()(),t.Fb(-1,0,['"start": "concurrently -k \\"ng serve\\" \\"nodemon sources.js\\"",'])),(l()(),t.ob(39,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["What it does:"])),(l()(),t.ob(41,0,null,null,19,"dl",[["class","row"]],null,null,null,null,null)),(l()(),t.ob(42,0,null,null,2,"dt",[["class","col-sm-3"]],null,null,null,null,null)),(l()(),t.ob(43,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["-k"])),(l()(),t.ob(45,0,null,null,5,"dd",[["class","col-sm-9"]],null,null,null,null,null)),(l()(),t.ob(46,0,null,null,3,"app-external-link",[],null,null,null,s.b,s.a)),t.nb(47,114688,null,0,r.a,[i.a],{href:[0,"href"]},null),(l()(),t.ob(48,0,null,0,1,"cite",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["kill other processes if one exits or dies"])),(l()(),t.Fb(-1,null,[". "])),(l()(),t.ob(51,0,null,null,2,"dt",[["class","col-sm-3"]],null,null,null,null,null)),(l()(),t.ob(52,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["ng serve"])),(l()(),t.ob(54,0,null,null,1,"dd",[["class","col-sm-9"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["starts angular development server."])),(l()(),t.ob(56,0,null,null,2,"dt",[["class","col-sm-3"]],null,null,null,null,null)),(l()(),t.ob(57,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["nodemon sources.js"])),(l()(),t.ob(59,0,null,null,1,"dd",[["class","col-sm-9"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["runs my script upon files update."])),(l()(),t.ob(61,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,[" The output in the console should look like this:\n"])),(l()(),t.ob(63,0,null,null,2,"app-code",[],null,null,null,b.b,b.a)),t.nb(64,638976,null,0,d.a,[i.a],null,null),(l()(),t.Fb(65,0,["",""])),(l()(),t.ob(66,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,[" Note, that each task output is prefixed with the task id, e.g. "])),(l()(),t.ob(68,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["[0]"])),(l()(),t.Fb(-1,null,[".\n"])),(l()(),t.ob(71,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,[" Thus, you can understand which thread generated which line in the output for later analysis.\n"])),(l()(),t.ob(73,0,null,null,1,"h5",[],[[8,"id",0]],null,null,null,null)),(l()(),t.Fb(-1,null,["Conclusion"])),(l()(),t.ob(75,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,[" This utility is extremely useful if you need to run several tasks simultaneously.\n"])),(l()(),t.ob(77,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,[" This example demonstrates only the tip of the iceberg. This utility can do much more and thus can boost your productivity.\n"]))],(function(l,n){var u=n.component;l(n,5,0,u.concurrentlyUrl),l(n,9,0,u.bsTextAlignCenter),l(n,14,0,u.concurrentlyReadmeUrl),l(n,32,0),l(n,37,0),l(n,47,0,u.concurrentlyReadmeUsageUrl),l(n,64,0)}),(function(l,n){var u=n.component;l(n,19,0,t.sb(1,"",u.taskAnchor,"")),l(n,27,0,t.sb(1,"",u.solutionAnchor,"")),l(n,65,0,u.outputCode),l(n,73,0,t.sb(1,"",u.conclusionAnchor,""))}))}function F(l){return t.Gb(0,[(l()(),t.ob(0,0,null,null,1,"app-utilities-concurrently",[],null,null,null,f,m)),t.nb(1,114688,null,0,y,[],null,null)],(function(l,n){l(n,1,0)}),null)}var g=t.kb("app-utilities-concurrently",y,F,{},{},[]),k=u("fNgX"),v=u("SVse"),w=u("iInd");class j{}var x=u("Nv++"),T=u("snBB"),A=u("sE2E"),I=u("qTCB");u.d(n,"UtilitiesConcurrentlyModuleNgFactory",(function(){return C}));var C=t.lb(e,[],(function(l){return t.xb([t.yb(512,t.j,t.W,[[8,[o.a,g,k.b,k.a]],[3,t.j],t.v]),t.yb(4608,v.l,v.k,[t.s,[2,v.t]]),t.yb(1073742336,v.b,v.b,[]),t.yb(1073742336,w.p,w.p,[[2,w.u],[2,w.l]]),t.yb(1073742336,j,j,[]),t.yb(1073742336,x.j,x.j,[]),t.yb(1073742336,T.a,T.a,[]),t.yb(1073742336,A.a,A.a,[]),t.yb(1073742336,I.a,I.a,[]),t.yb(1073742336,e,e,[]),t.yb(1024,w.j,(function(){return[[{path:"",component:y}]]}),[])])}))}}]);