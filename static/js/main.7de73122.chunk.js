(this["webpackJsonpcredit-simulator"]=this["webpackJsonpcredit-simulator"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n.n(a),s=n(4),i=n.n(s),l=(n(17),n(18),n(3)),o=(n(19),n(20),function(e){var t=e.text;return Object(c.jsx)("h1",{className:"title",children:t})}),u=n(5),j=n(11),b=(n(24),n(25),new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"})),d={fontSize:"14px",color:"white"},x=function(e){var t,n=e.label,r=e.currency,s=e.minRange,i=e.maxRange,o=e.invokeFunction,x=Object(a.useState)(""),O=Object(l.a)(x,2),m=O[0],f=O[1],p=(t={},Object(u.a)(t,s,{style:d,label:Object(c.jsx)("strong",{children:"".concat(r?"$":"").concat(s)})}),Object(u.a)(t,i,{style:d,label:Object(c.jsx)("strong",{children:"".concat(r?"$":"").concat(i)})}),t);return Object(c.jsxs)("div",{className:"range",children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("span",{className:"label",children:n}),Object(c.jsx)("input",{type:"text",value:r?b.format(m):m,readOnly:!0})]}),Object(c.jsx)(j.a,{min:s,max:i,onChange:function(e){f(e),o(e)},marks:p,step:r?1e3:1})]})};x.defaultProps={currency:!1};var O=x,m=(n(26),function(e){var t=e.type,n=e.name,a=e.text;return Object(c.jsx)("button",{type:"button",name:n,className:"btn btn--".concat(t),children:a})});m.defaultProps={type:"info"};var f=m,p=(n(27),function(e){var t=e.label,n=e.result;return Object(c.jsxs)("div",{className:"result",children:[Object(c.jsx)("span",{children:t}),Object(c.jsx)("span",{children:n})]})});p.defaultProps={result:""};var v=p,h=function(e){return function(t){if(t<1)return null;var n=(e/t).toFixed(2);return b.format(n)}},y=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(null),i=Object(l.a)(s,2),u=i[0],j=i[1];return Object(c.jsxs)("div",{className:"credit",children:[Object(c.jsx)(o,{text:"Simul\xe1 tu cr\xe9dito"}),Object(c.jsx)(O,{label:"Monto Total",minRange:5e3,maxRange:5e4,currency:!0,invokeFunction:function(e){return j(e)}}),Object(c.jsx)(O,{label:"Plazo",minRange:3,maxRange:24,invokeFunction:function(e){return r(e)}}),Object(c.jsx)("div",{className:"credit__result",children:Object(c.jsx)(v,{label:"Cuota fija por mes",result:h(u)(n)})}),Object(c.jsxs)("div",{className:"credit__actions",children:[Object(c.jsx)(f,{type:"success",name:"credito",text:"Obten\xe9 Cr\xe9dito"}),Object(c.jsx)(f,{type:"info",name:"cuotas",text:"Ver detalle de cuotas"})]})]})};var g=function(){return Object(c.jsx)("div",{className:"app",children:Object(c.jsx)(y,{})})};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.7de73122.chunk.js.map