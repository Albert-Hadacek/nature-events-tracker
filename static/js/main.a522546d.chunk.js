(this["webpackJsonpnature-tracker"]=this["webpackJsonpnature-tracker"]||[]).push([[0],{36:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(4),a=n.n(r),s=n(0),o=(n(35),n(36),n(3)),i=n(9),l=n.n(i),u=n(10),j=n(27),d=function(e,t){return 0!==t.length&&(e=e.filter((function(e){return t.includes(e.categories[0].id)}))),e.map((function(e){var t=e.geometries[e.geometries.length-1].coordinates,n=e.geometries[e.geometries.length-1].date;return{id:e.id,title:e.title,lng:"number"===typeof t[0]?t[0]:t[0][0][0],lat:"number"===typeof t[1]?t[1]:t[0][0][1],time:n,catId:e.categories[0].id,catTitle:e.categories[0].title}}))},b=function(e){var t=e.map((function(e){return JSON.stringify({label:e.catTitle,value:e.catId})}));return Object(j.a)(new Set(t)).map(JSON.parse)},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(s.useState)([]),n=Object(o.a)(t,2),c=n[0],r=n[1],a=Object(s.useState)([]),i=Object(o.a)(a,2),j=i[0],O=i[1],h=Object(s.useState)(!1),m=Object(o.a)(h,2),f=m[0],g=m[1],x=Object(s.useState)(!1),p=Object(o.a)(x,2),v=p[0],k=p[1];return Object(s.useEffect)((function(){Object(u.a)(l.a.mark((function t(){var n,c,a,s,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return k(!0),t.prev=1,t.next=4,fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events");case 4:return n=t.sent,t.next=7,n.json();case 7:c=t.sent,a=c.events,s=d(a,e),r(s),0===e.length&&(o=b(s),O(o)),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(1),console.log(t.t0),g(!0);case 18:return t.prev=18,k(!1),t.finish(18);case 21:case"end":return t.stop()}}),t,null,[[1,14,18,21]])})))()}),[e]),[c,j,f,v]},h=n(28),m=n(12),f=n(13),g=n.n(f),x=n(14),p=n.n(x),v=n(15),k=n.n(v),w=n(16),N=n.n(w),y=n(17),S=n.n(y),C=n(18),I=n.n(C),F=n(19),D=n.n(F),E=n(20),J=n.n(E),T=n(21),A=n.n(T),K=n(22),L=n.n(K),z=n(23),P=n.n(z),R=n(24),q=n.n(R),B=n(25),M=n.n(B),Y=n(26),Z=n.n(Y),H=function(e){var t=e.onClick,n=function(e){switch(e){case 6:return[k.a,"yellow"];case 7:return[N.a,"brown"];case 16:return[S.a,"grey"];case 9:return[I.a,"blue"];case 14:return[D.a,"darkgrey"];case 19:return[J.a,"black"];case 15:return[A.a,"darkblue"];case 10:return[L.a,"cornflowerblue"];case 17:return[P.a,"whitesmoke"];case 18:return[q.a,"orange"];case 12:return[M.a,"tomato"];case 13:return[Z.a,"springgreen"];case 8:return[g.a,"red"];default:return[p.a,"darkred"]}}(e.catId),r=Object(o.a)(n,2),a=r[0],s=r[1];return Object(c.jsx)("div",{className:"marker",onClick:t,children:Object(c.jsx)(m.Icon,{icon:a,style:{color:s},className:"marker-icon"})})},Q=function(e){var t=e.info,n=t.id,r=t.title,a=t.time,s=(t.catTitle,t.lng),o=t.lat,i=e.onClose;return Object(c.jsxs)("div",{className:"info-box",children:[Object(c.jsx)("span",{className:"info-box-close",onClick:i,children:"X"}),Object(c.jsx)("h2",{children:"Event Information"}),Object(c.jsxs)("p",{children:["ID: ",Object(c.jsx)("strong",{children:n})]}),Object(c.jsxs)("p",{children:["Title: ",Object(c.jsx)("strong",{children:r})]}),Object(c.jsxs)("p",{children:["Category: ",Object(c.jsx)("strong",{children:"category"})]}),Object(c.jsxs)("p",{children:["Time: ",Object(c.jsx)("strong",{children:new Date(a).toDateString()})]}),Object(c.jsxs)("p",{children:["Coords: ",Object(c.jsxs)("strong",{children:[o,", ",s]})]})]})},U=function(e){var t=e.center,n=e.zoom,r=e.eventsData,a=Object(s.useState)(null),i=Object(o.a)(a,2),l=i[0],u=i[1],j=r.map((function(e){return Object(c.jsx)(H,{lat:e.lat,lng:e.lng,catId:e.catId,onClick:function(){return u(e)}},e.id)}));return Object(c.jsxs)("main",{className:"main",children:[Object(c.jsx)(h.a,{bootstrapURLKeys:{key:"AIzaSyAq5FZJKfOPjnd9Quk4InVEKMmMKwm-9FY"},defaultCenter:t,defaultZoom:n,options:{fullscreenControl:!1},children:j}),l&&Object(c.jsx)(Q,{info:l,onClose:function(){return u(null)}})]})};U.defaultProps={center:{lat:49.8175,lng:15.473},zoom:5};var V=U,X=n(29),G=function(e){var t=e.numOfResults,n=e.setFilters,r=e.options,a=Object(s.useState)([]),i=Object(o.a)(a,2),l=i[0],u=i[1],j=Object(s.useCallback)((function(){n([])}),[]);return Object(s.useLayoutEffect)((function(){var e=document.querySelector(".dropdown-search-clear-icon");e&&e.addEventListener("click",j)}),[l,j,n]),Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)("div",{className:"header-logo",children:Object(c.jsx)("img",{src:"".concat("/nature-events-tracker","media/logo.svg"),alt:"Logo"})}),Object(c.jsx)(X.a,{className:"header-select",options:r,value:l,onChange:u,labelledBy:"Select Filters"}),Object(c.jsxs)("div",{className:"header-buttons",children:[Object(c.jsx)("button",{className:"header-button",disabled:0===l.length,onClick:function(){n(l.map((function(e){return e.value})))},children:"Filter"}),Object(c.jsx)("button",{className:"header-button",onClick:j,children:"Show All"})]}),Object(c.jsxs)("div",{className:"header-text",children:["Number of results: ",t]})]})};G.defaultProps={options:[]};var W=G,$=function(){return Object(c.jsxs)("footer",{className:"footer",children:["Copyright \xa9 Albert Hadacek ",(new Date).getFullYear()," (",Object(c.jsx)("a",{href:"https://hadacek.tech",children:"www.hadacek.tech"}),")"]})},_=function(){return Object(c.jsx)("main",{className:"main main-custom-page",children:Object(c.jsx)("div",{className:"loader-icon"})})},ee=function(){return Object(c.jsx)("main",{className:"main main-custom-page",children:Object(c.jsx)("p",{children:"Something went wrong..."})})},te=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],a=O(n),i=Object(o.a)(a,4),l=i[0],u=i[1],j=i[2],d=i[3];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(W,{setFilters:r,numOfResults:l.length,options:u}),j?Object(c.jsx)(ee,{}):Object(c.jsx)(c.Fragment,{children:d?Object(c.jsx)(_,{}):Object(c.jsx)(V,{eventsData:l})}),Object(c.jsx)($,{})]})};a.a.render(Object(c.jsx)(te,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.a522546d.chunk.js.map