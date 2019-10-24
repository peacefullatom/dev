(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{EtX0:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),e=function(){},o=u("pMnS"),a=u("IgYI"),r=u("+64M"),b=u("bAt0"),i=u("zLtL"),s=u("0LGF"),p=u("Ggrn"),c=u("q6TO"),h=u("zjdV"),g=u("OeOG"),F=function(){function l(){this.angularCliGhPagesUrl="https://github.com/angular-schule/angular-cli-ghpages",this.copySources={id:"copyJs",active:!0},this.packageJson='\n  ...\n  "scripts": {\n    "ng": "ng",\n    "start": "ng serve",\n    "build": "ng build --prod && node copy.js",\n    "test": "ng test",\n    "lint": "ng lint",\n    "e2e": "ng e2e"\n  },\n  ...\n  '}return l.prototype.ngOnInit=function(){},l}(),d=t.mb({encapsulation:0,styles:[[""]],data:{}});function f(l){return t.Gb(0,[(l()(),t.ob(0,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["A helper script for the Github Pages."])),(l()(),t.ob(2,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,[" When I have started this project, I have found that Github Pages are requiring to have a copy of an "])),(l()(),t.ob(4,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["index.html"])),(l()(),t.Fb(-1,null,[" file named "])),(l()(),t.ob(7,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["404.html"])),(l()(),t.Fb(-1,null,[".\n"])),(l()(),t.ob(10,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,[" There are projects which are solving this problem. For example, there is an "])),(l()(),t.ob(12,0,null,null,2,"app-external-link",[],null,null,null,a.b,a.a)),t.nb(13,114688,null,0,r.a,[b.a],{href:[0,"href"]},null),(l()(),t.Fb(-1,0,["angular-cli-ghpages"])),(l()(),t.Fb(-1,null,[" project.\n"])),(l()(),t.ob(16,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,[" But I wanted to solve the problem personally. Plus, I didn't want to add an extra layer to the project.\n"])),(l()(),t.ob(18,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["As one of my teachers said:"])),(l()(),t.ob(20,0,null,null,2,"app-note",[],null,null,null,i.b,i.a)),t.nb(21,114688,null,0,s.a,[b.a],null,null),(l()(),t.Fb(-1,0,['"Follow the KISS rule."'])),(l()(),t.ob(23,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["That is why I had created this script: it is simple yet robust."])),(l()(),t.ob(25,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Task"])),(l()(),t.ob(27,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,[" Copy an "])),(l()(),t.ob(29,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["index.html"])),(l()(),t.Fb(-1,null,[" with a name "])),(l()(),t.ob(32,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["404.html"])),(l()(),t.Fb(-1,null,[" after project compilation is over.\n"])),(l()(),t.ob(35,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Solution"])),(l()(),t.ob(37,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Create a script for node.js, which will perform the routine."])),(l()(),t.ob(39,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Here is the script:"])),(l()(),t.ob(41,0,null,null,1,"app-source-viewer",[],null,null,null,p.b,p.a)),t.nb(42,4308992,null,0,c.a,[b.a],{sources:[0,"sources"]},null),(l()(),t.ob(43,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["It is, indeed, simple."])),(l()(),t.ob(45,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Explanation"])),(l()(),t.ob(47,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["This script is running in the node.js environment."])),(l()(),t.ob(49,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,[" To start the script automatically, I have modified the package.json file. Here is an excerpt:\n"])),(l()(),t.ob(51,0,null,null,1,"app-code",[],null,null,null,h.b,h.a)),t.nb(52,638976,null,0,g.a,[b.a],{value:[0,"value"]},null),(l()(),t.ob(53,0,null,null,10,"p",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,[" Note the "])),(l()(),t.ob(55,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,['"build"'])),(l()(),t.Fb(-1,null,[" parameter - it starts the script. Value of this parameter instructs node.js to run "])),(l()(),t.ob(58,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["ng build"])),(l()(),t.Fb(-1,null,[" and after that run "])),(l()(),t.ob(61,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["copy.js"])),(l()(),t.Fb(-1,null,[".\n"])),(l()(),t.ob(64,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["The script will output the success or error message after it finishes."]))],(function(l,n){var u=n.component;l(n,13,0,u.angularCliGhPagesUrl),l(n,21,0),l(n,42,0,u.copySources),l(n,52,0,u.packageJson)}),null)}var y=t.kb("app-utilities-github-pages-helper-script",F,(function(l){return t.Gb(0,[(l()(),t.ob(0,0,null,null,1,"app-utilities-github-pages-helper-script",[],null,null,null,f,d)),t.nb(1,114688,null,0,F,[],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),m=u("fNgX"),v=u("SVse"),j=u("iInd"),w=function(){},I=u("Nv++"),G=u("snBB"),k=u("U5I1"),S=u("qTCB"),x=u("KW8p"),T=u("8Sym");u.d(n,"UtilitiesGithubPagesHelperScriptModuleNgFactory",(function(){return J}));var J=t.lb(e,[],(function(l){return t.xb([t.yb(512,t.j,t.W,[[8,[o.a,y,m.b,m.a]],[3,t.j],t.v]),t.yb(4608,v.l,v.k,[t.s,[2,v.t]]),t.yb(1073742336,v.b,v.b,[]),t.yb(1073742336,j.p,j.p,[[2,j.u],[2,j.l]]),t.yb(1073742336,w,w,[]),t.yb(1073742336,I.j,I.j,[]),t.yb(1073742336,G.a,G.a,[]),t.yb(1073742336,k.a,k.a,[]),t.yb(1073742336,S.a,S.a,[]),t.yb(1073742336,x.a,x.a,[]),t.yb(1073742336,T.a,T.a,[]),t.yb(1073742336,e,e,[]),t.yb(1024,j.j,(function(){return[[{path:"",component:F}]]}),[])])}))}}]);