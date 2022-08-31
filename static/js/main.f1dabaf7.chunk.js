(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{27:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(8),s=n(3),a=n(1),i=n(0),l=Object(a.createContext)(),r=function(e){var t=e.children,n=Object(a.useState)("light"),c=Object(s.a)(n,2),r=c[0],j=c[1];Object(a.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");j(e.matches?"dark":"light"),e.addEventListener("change",(function(e){j(e.matches?"dark":"light")}))}),[]);return Object(i.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),j(e)}}],children:t})},j="https://ojjuiceman.github.io/cleanfolio/",o="JS.",b="Okera Johnson",h="Full Stack Developer",u="Developing user friendly, responsive, clean and cutting edge websites",d="https://1drv.ms/b/s!AoIHcoXFz1dDlEqBVX_IER3kHuu8?e=snuZWS",m={linkedin:"https://www.linkedin.com/in/okera-johnson-91ba1010b/",github:"https://github.com/ojjuiceman"},O=["HTML","CSS","JavaScript","React","Redux","SASS","Material UI","Git","CI/CD"],x="okerajohnson@gmail.com",f=n(14),k=n.n(f),v=n(12),g=n.n(v),N=n(16),p=n.n(N),_=n(15),S=n.n(_),w=(n(27),function(){var e=Object(a.useContext)(l),t=Object(s.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,r=Object(a.useState)(!1),j=Object(s.a)(r,2),o=j[0],b=j[1],h=function(){return b(!o)};return Object(i.jsxs)("nav",{className:"center nav",children:[Object(i.jsxs)("ul",{style:{display:o?"flex":null},className:"nav__list",children:[O.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#skills",onClick:h,className:"link link--nav",children:"Skills"})}):null,x?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#contact",onClick:h,className:"link link--nav",children:"Contact"})}):null]}),Object(i.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(i.jsx)(g.a,{}):Object(i.jsx)(k.a,{})}),Object(i.jsx)("button",{type:"button",onClick:h,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:o?Object(i.jsx)(S.a,{}):Object(i.jsx)(p.a,{})})]})}),C=(n(31),function(){var e=j,t=o;return Object(i.jsxs)("header",{className:"header center",children:[Object(i.jsx)("h3",{children:e?Object(i.jsx)("a",{href:e,className:"link",children:t}):t}),Object(i.jsx)(w,{})]})}),y=n(17),E=n.n(y),I=n(18),J=n.n(I),R=(n(32),function(){var e=b,t=h,n=u,c=d,s=m;return Object(i.jsxs)("div",{className:"about center",children:[e&&Object(i.jsxs)("h1",{children:["Hi, I am ",Object(i.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(i.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(i.jsx)("p",{className:"about__desc",children:n&&n}),Object(i.jsxs)("div",{className:"about__contact center",children:[c&&Object(i.jsx)("a",{href:c,children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),s&&Object(i.jsxs)(i.Fragment,{children:[s.github&&Object(i.jsx)("a",{href:s.github,"aria-label":"github",className:"link link--icon",children:Object(i.jsx)(E.a,{})}),s.linkedin&&Object(i.jsx)("a",{href:s.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(i.jsx)(J.a,{})})]})]})]})}),D=n(19),H=n.n(D),L=(n(34),function(){return O.length?Object(i.jsxs)("section",{className:"section skills",id:"skills",children:[Object(i.jsx)("h2",{className:"section__title",children:"Skills"}),Object(i.jsx)("ul",{className:"skills__list",children:O.map((function(e){return Object(i.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},H()())}))})]}):null}),A=n(20),B=n.n(A),F=(n(35),function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(i.jsx)("div",{className:"scroll-top",children:Object(i.jsx)("a",{href:"#top",children:Object(i.jsx)(B.a,{fontSize:"large"})})}):null}),M=(n(36),function(){return x?Object(i.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(i.jsx)("h2",{className:"section__title",children:"Contact"}),Object(i.jsx)("a",{href:"mailto:".concat(x),children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),T=(n(37),function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("a",{href:"https://github.com/rajshekhar26/cleanfolio",className:"link footer__link",children:"Created By Raj Shekhar"})})}),z=(n(38),function(){var e=Object(a.useContext)(l),t=Object(s.a)(e,1)[0].themeName;return Object(i.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(i.jsx)(C,{}),Object(i.jsxs)("main",{children:[Object(i.jsx)(R,{}),Object(i.jsx)(L,{}),Object(i.jsx)(M,{})]}),Object(i.jsx)(F,{}),Object(i.jsx)(T,{})]})});n(39);Object(c.render)(Object(i.jsx)(r,{children:Object(i.jsx)(z,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.f1dabaf7.chunk.js.map