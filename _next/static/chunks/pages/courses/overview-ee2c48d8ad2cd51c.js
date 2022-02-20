(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[403],{9077:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/courses/overview",function(){return r(6335)}])},6335:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return y}});var o=r(5893),t=r(7294),n=r(4184),a=r.n(n),i=r(6792);const c=["xxl","xl","lg","md","sm","xs"],d=t.forwardRef((({bsPrefix:e,className:s,as:r="div",...t},n)=>{const d=(0,i.vE)(e,"row"),l=`${d}-cols`,u=[];return c.forEach((e=>{const s=t[e];let r;delete t[e],null!=s&&"object"===typeof s?({cols:r}=s):r=s;const o="xs"!==e?`-${e}`:"";null!=r&&u.push(`${l}${o}-${r}`)})),(0,o.jsx)(r,{ref:n,...t,className:a()(s,d,...u)})}));d.displayName="Row";var l=d;const u=["xxl","xl","lg","md","sm","xs"];const m=t.forwardRef(((e,s)=>{const[{className:r,...t},{as:n="div",bsPrefix:c,spans:d}]=function({as:e,bsPrefix:s,className:r,...o}){s=(0,i.vE)(s,"col");const t=[],n=[];return u.forEach((e=>{const r=o[e];let a,i,c;delete o[e],"object"===typeof r&&null!=r?({span:a,offset:i,order:c}=r):a=r;const d="xs"!==e?`-${e}`:"";a&&t.push(!0===a?`${s}${d}`:`${s}${d}-${a}`),null!=c&&n.push(`order${d}-${c}`),null!=i&&n.push(`offset${d}-${i}`)})),[{...o,className:a()(r,...t,...n)},{as:e,bsPrefix:s,spans:t}]}(e);return(0,o.jsx)(n,{...t,ref:s,className:a()(r,!d.length&&c)})}));m.displayName="Col";var h=m,p=r(8182),f=r(682),x=r(5398),g=r.n(x),v=r(1664),y=function(){var e=function(){return(0,o.jsx)(l,{lg:3,md:2,xs:2,className:"g-5 justify-content-center",children:s.map((function(e,s){return(0,o.jsx)(h,{children:(0,o.jsx)(v.default,{href:e.href,passHref:!0,children:(0,o.jsxs)(p.Z,{className:g().courseCard,children:[(0,o.jsx)(p.Z.Img,{variant:"top",src:e.image,className:g().courseImg}),(0,o.jsxs)(p.Z.Body,{children:[(0,o.jsx)(p.Z.Title,{children:e.name}),(0,o.jsxs)(p.Z.Text,{children:[e.description,(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("b",{children:"Prerequisites:"})," ",e.prerequisites.join(", ")||"None"]})]})]})})},s)}))})},s=[{name:"Intro to AI",description:"Learn how to build an AI model",image:"https://img.icons8.com/external-photo3ideastudio-gradient-photo3ideastudio/512/000000/external-ai-digital-business-photo3ideastudio-gradient-photo3ideastudio.png",href:"/courses/intro-to-ai",prerequisites:[]},{name:"Intro to Python",description:"Learn how to use basic python",image:"https://img.icons8.com/color/480/000000/python--v2.png",href:"/courses/intro-to-python",prerequisites:[]},{name:"Intermediate Python",description:"Building upon previous knowledge, learn to use more advanced python",image:"https://img.icons8.com/color/480/000000/python--v2.png",href:"/courses/intermediate-python",prerequisites:["Basic Python"]},{name:"Intro to Scikit-Learn",description:"Learn how to use Scikit-Learn",image:"https://avatars2.githubusercontent.com/u/365630?v=3&s=400",href:"/courses/intro-to-scikit-learn",prerequisites:["Basic Python","Intermediate Python","AI Concepts"]},{name:"Intro to Keras",description:"Learn how to use Keras",image:"https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",href:"/courses/intro-to-keras",prerequisites:["Basic Python","Intermediate Python","AI Concepts"]},{name:"Intro to Tensorflow",description:"Learn how to use Tensorflow",image:"https://img.icons8.com/color/480/000000/tensorflow.png",href:"/courses/intro-to-tensorflow",prerequisites:["Basic Python","Intermediate Python","AI Concepts","Keras"]}];return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(f.Z,{className:"mb-5",children:[(0,o.jsx)("h1",{className:g().title,children:"Overview"}),(0,o.jsx)("main",{className:"mt-5",children:(0,o.jsx)(e,{})})]})})}},5398:function(e){e.exports={courseCard:"Courses_courseCard__Um7jG",courseImg:"Courses_courseImg__g9kc_"}},8182:function(e,s,r){"use strict";r.d(s,{Z:function(){return I}});var o=r(4184),t=r.n(o),n=r(7294),a=r(6792),i=r(6611),c=r(9602),d=r(5893);const l=n.forwardRef((({bsPrefix:e,className:s,variant:r,as:o="img",...n},i)=>{const c=(0,a.vE)(e,"card-img");return(0,d.jsx)(o,{ref:i,className:t()(r?`${c}-${r}`:c,s),...n})}));l.displayName="CardImg";var u=l,m=r(9059);const h=n.forwardRef((({bsPrefix:e,className:s,as:r="div",...o},i)=>{const c=(0,a.vE)(e,"card-header"),l=(0,n.useMemo)((()=>({cardHeaderBsPrefix:c})),[c]);return(0,d.jsx)(m.Z.Provider,{value:l,children:(0,d.jsx)(r,{ref:i,...o,className:t()(s,c)})})}));h.displayName="CardHeader";var p=h;const f=(0,c.Z)("h5"),x=(0,c.Z)("h6"),g=(0,i.Z)("card-body"),v=(0,i.Z)("card-title",{Component:f}),y=(0,i.Z)("card-subtitle",{Component:x}),b=(0,i.Z)("card-link",{Component:"a"}),j=(0,i.Z)("card-text",{Component:"p"}),N=(0,i.Z)("card-footer"),w=(0,i.Z)("card-img-overlay"),P=n.forwardRef((({bsPrefix:e,className:s,bg:r,text:o,border:n,body:i,children:c,as:l="div",...u},m)=>{const h=(0,a.vE)(e,"card");return(0,d.jsx)(l,{ref:m,...u,className:t()(s,h,r&&`bg-${r}`,o&&`text-${o}`,n&&`border-${n}`),children:i?(0,d.jsx)(g,{children:c}):c})}));P.displayName="Card",P.defaultProps={body:!1};var I=Object.assign(P,{Img:u,Title:v,Subtitle:y,Body:g,Link:b,Text:j,Header:p,Footer:N,ImgOverlay:w})}},function(e){e.O(0,[774,888,179],(function(){return s=9077,e(e.s=s);var s}));var s=e.O();_N_E=s}]);