(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{113:function(e,t,c){},114:function(e,t,c){"use strict";c.r(t);var i=c(3),n=c.n(i),s=c(50),a=c.n(s),r=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,117)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),i(e),n(e),s(e),a(e)}))},l=(c(62),c(11)),o=c(10),d=c(12),u=c(2);var j=function(e){return document.title="Yolo - "+e.title,Object(u.jsx)("div",{children:e.children})},h=c(18);var b=function(e){var t=e.backgroundColor?"bg-"+e.backgroundColor:"bg-main",c=e.size?"btn-"+e.size:"",i=e.animation?"btn-animate "+e.animation:"";return Object(u.jsxs)("button",{className:"btn ".concat(t," ").concat(c," ").concat(i),onClick:e.onClick?function(){return e.onClick()}:null,children:[Object(u.jsx)("span",{className:"btn__txt",children:e.children}),e.icon?Object(u.jsx)("span",{className:"btn__icon",children:Object(u.jsx)("i",{className:"".concat(e.icon," bx-tada")})}):null]})},p=function(e){return Object(u.jsxs)("div",{className:"hero-slider__item ".concat(e.active?"active":""),children:[Object(u.jsxs)("div",{className:"hero-slider__item__info",children:[Object(u.jsx)("div",{className:"hero-slider__item__info__title color-".concat(e.item.color),children:Object(u.jsx)("span",{children:e.item.title})}),Object(u.jsx)("div",{className:"hero-slider__item__info__description",children:Object(u.jsx)("span",{children:e.item.description})}),Object(u.jsx)("div",{className:"hero-slider__item__info__btn",children:Object(u.jsx)(o.b,{to:e.item.path,children:Object(u.jsx)(b,{backgroundColor:e.item.color,icon:"bx bx-cart",animation:!0,size:"sm",children:"Xem chi ti\u1ebft"})})})]}),Object(u.jsxs)("div",{className:"hero-slider__item__image",children:[Object(u.jsx)("div",{className:"shape bg-".concat(e.item.color)}),Object(u.jsx)("img",{src:e.item.img,alt:""})]})]})},m=function(e){var t=e.data,c=Object(i.useState)(0),n=Object(h.a)(c,2),s=n[0],a=n[1],r=function(){var e=s+1===t.length?0:s+1;a(e)};return Object(i.useEffect)((function(){var e=setInterval((function(){r()}),5e3);return function(){clearInterval(e)}}),[s]),Object(u.jsxs)("div",{className:"hero-slider",children:[t.map((function(e,t){return Object(u.jsx)(p,{item:e,active:t===s},t)})),e.control?Object(u.jsxs)("div",{className:"hero-slider__control",children:[Object(u.jsx)("div",{className:"hero-slider__control__item",onClick:function(){var e=s-1<0?t.length-1:s-1;a(e)},children:Object(u.jsx)("i",{className:"bx bx-chevron-left"})}),Object(u.jsx)("div",{className:"hero-slider__control__item",children:Object(u.jsxs)("div",{className:"index",children:[s+1," / ",t.length]})}),Object(u.jsx)("div",{className:"hero-slider__control__item",onClick:r,children:Object(u.jsx)("i",{className:"bx bx-chevron-right"})})]}):null]})},x=[{title:"Polo n\u1eef s\u1eb9c sy b\xe2y bi",description:"Polo n\u1eef  m\u1eb7c v\xe0o l\xe0 auto s\u1eb9c sy quy\u1ebfn z\u0169",img:c(68).default,path:"/catalog/ao-thun-dinosaur-01",color:"blue"},{title:"Polo N\u1eef D\xe1ng Su\xf4ng Model",description:"Polo n\u1eef su\xf4ng d\xe1ng Model s\u1eed d\u1ee5ng c\xf4ng ngh\u1ec7 c\xf9i c\xf9i nh\u01b0ng r\u1ea5t ch\u1ea5t l\u01b0\u1ee3ng",img:c(69).default,path:"/catalog/ao-thun-dinosaur-02",color:"pink"},{title:"Polo n\u1eef Cool Ng\u1ea7u CheChou WiBu",description:"Polo n\u1eef th\u01b0\u1eddng \u0111\u01b0\u1ee3c m\u1ea5y b\u1ea1n n\u1eef CheChou \u01b0a chu\u1ed9ng",img:c(70).default,path:"/catalog/ao-thun-dinosaur-03",color:"orange"}],g=function(e){return Object(u.jsx)("div",{className:"section__title",children:e.children})},O=function(e){return Object(u.jsx)("div",{className:"section__body",children:e.children})},f=function(e){return Object(u.jsx)("div",{className:"section",children:e.children})},_=[{name:"Mi\u1ec5n ph\xed giao h\xe0ng ",description:"Mi\u1ec5n ph\xed ship v\u1edbi \u0111\u01a1n \u0111\u1eb7t h\xe0ng tr\xean 239k",icon:"bx bx-shopping-bag"},{name:"Thanh to\xe1n COD ",description:"Thanh to\xe1n khi b\u1ea1n nh\u1eadn \u0111\u01b0\u1ee3c h\xe0ng ",icon:"bx bx-credit-card"},{name:"Kh\xe1ch h\xe0ng VIP ",description:"\u01afu \u0111\xe3i d\xe0nh cho kh\xe1ch h\xe0ng VIP",icon:"bx bx-diamond"},{name:"H\u1ed7 tr\u1ee3 b\u1ea3o h\xe0nh  ",description:"\u0110\u1ecei , s\u1eeda \u0111\u1ed3 t\u1ea1i t\u1ea5t c\u1ea3 c\xe1c store",icon:"bx bx-donate-heart"}],v=function(e){return Object(u.jsxs)("div",{className:"policy-card",children:[Object(u.jsx)("div",{className:"policy-card__icon",children:Object(u.jsx)("i",{className:e.icon})}),Object(u.jsxs)("div",{className:"policy-card__info",children:[Object(u.jsx)("div",{className:"policy-card__info__name",children:e.name}),Object(u.jsx)("div",{className:"policy-card__info__description",children:e.description})]})]})},N=function(e){var t={gap:e.gap?"".concat(e.gap,"px"):"0"},c=e.col?"grid-col-".concat(e.col):"",i=e.mdCol?"grid-col-md-".concat(e.mdCol):"",n=e.smCol?"grid-col-sm-".concat(e.smCol):"";return Object(u.jsx)("div",{className:"grid ".concat(c," ").concat(i," ").concat(n),style:t,children:e.children})},y=c(71).default,C=c(72).default,L=c(73).default,S=c(74).default,k=c(75).default,P=c(76).default,q=[{title:"\xc1o thun Dinosaur 01",id:1,qty:1,price:189e3,images:[y,C,P],categorySlug:"ao-thun",colors:["blue","red","orange","purple"],slug:"ao-thun-dinosaur-01",size:["S","M","L","XL"]},{title:"\xc1o thun Dinosaur 02",id:2,qty:1,price:189e3,images:[L,S],categorySlug:"ao-thun",colors:["blue","red","orange","purple"],slug:"ao-thun-dinosaur-02",size:["S","M","L","XL"]},{title:"\xc1o thun Dinosaur 03",id:3,qty:1,price:189e3,images:[k,P],categorySlug:"ao-thun",colors:["blue","red","orange","purple"],slug:"ao-thun-dinosaur-03",size:["S","M","L","XL"]},{title:"\xc1o thun Dinosaur 04",id:4,qty:1,price:189e3,images:[c(77).default,c(78).default],categorySlug:"ao-thun",colors:["blue","red","orange","purple"],slug:"ao-thun-dinosaur-04",size:["S","M","L","XL"]},{title:"\xc1o thun Dinosaur 05",id:5,qty:1,price:189e3,images:[c(79).default,c(80).default],categorySlug:"ao-thun",colors:["blue","red","orange","purple"],slug:"ao-thun-dinosaur-05",size:["S","M","L","XL"]},{title:"\xc1o thun Dinosaur 06",id:6,qty:1,price:189e3,images:[c(81).default,c(82).default],categorySlug:"ao-thun",colors:["blue","red","orange","purple"],slug:"ao-thun-dinosaur-06",size:["S","M","L","XL"]},{title:"\xc1o thun Dinosaur 07",id:7,qty:1,price:189e3,images:[c(83).default,c(84).default],categorySlug:"ao-thun",colors:["blue","red","orange","purple"],slug:"ao-thun-dinosaur-07",size:["S","M","L","XL"]},{title:"\xc1o thun Dinosaur 08",id:8,qty:1,price:189e3,images:[c(85).default,c(86).default],categorySlug:"ao-thun",colors:["blue","red","orange","purple"],slug:"ao-thun-dinosaur-08",size:["S","M","L","XL"]},{title:"\xc1o thun Dinosaur 09",id:9,qty:1,price:189e3,images:[c(87).default,c(88).default],categorySlug:"ao-thun",colors:["blue","red","orange","purple"],slug:"ao-thun-dinosaur-09",size:["S","M","L","XL"]},{title:"\xc1o thun Dinosaur 10",id:10,qty:1,price:189e3,images:[c(89).default,c(90).default],categorySlug:"ao-thun",colors:["blue","red","orange","purple"],slug:"ao-thun-dinosaur-10",size:["S","M","L","XL"]},{title:"\xc1o thun Dinosaur 11",id:11,qty:1,price:189e3,images:[c(91).default,c(92).default],categorySlug:"ao-thun",colors:["blue","red","orange","purple"],slug:"ao-thun-dinosaur-11",size:["S","M","L","XL"]},{title:"\xc1o thun Dinosaur 12",id:12,qty:1,price:189e3,images:[c(93).default,c(94).default],categorySlug:"ao-thun",colors:["blue","red","orange","purple"],slug:"ao-thun-dinosaur-12",size:["S","M","L","XL"]}],w={getProducts:function(e,t){if(!(t>q.length))return q.slice(e,t)},GetProductById:function(e){return q.find((function(t){return t.id===e}))}},z=c(20),T=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},M=n.a.createContext(),I=function(e){var t=e.children,c=Object(i.useState)([]),n=Object(h.a)(c,2),s=n[0],a=n[1];return Object(u.jsx)(M.Provider,{value:{listProductCart:s,setListProductCart:a},children:t})},D=function(e){var t=Object(i.useContext)(M),c=t.listProductCart,n=t.setListProductCart,s=Object(z.a)(e.images);return s.splice(2,s.length-2),Object(u.jsxs)("div",{className:"product-card",children:[Object(u.jsxs)(o.b,{to:"/catalog/".concat(e.slug),children:[Object(u.jsx)("div",{className:"product-card__image",children:s.map((function(e,t){return Object(u.jsx)("img",{src:e,alt:""},t)}))}),Object(u.jsx)("h3",{className:"product-card__name",children:e.title}),Object(u.jsxs)("div",{className:"product-card__price",children:[T(e.price),Object(u.jsx)("span",{className:"product-card__price__old",children:Object(u.jsx)("del",{children:"3,999,000"})})]})]}),Object(u.jsx)("div",{className:"product-card__btn",children:Object(u.jsx)(b,{size:"sm",icon:"bx bx-cart",animation:!0,onClick:function(){var t=c.find((function(t){return t.id===e.id}));n(t?c.map((function(c){return c.id===e.id?Object(l.a)(Object(l.a)({},t),{},{qty:t.qty+1}):c})):[].concat(Object(z.a)(c),[Object(l.a)(Object(l.a)({},e),{},{qty:1})]))},children:"Ch\u1ecdn mua"})})]})},X=c.p+"static/media/banner.3c5f3ab8.png",E=function(){return Object(u.jsxs)(j,{title:"Trang ch\u1ee7",children:[Object(u.jsx)(m,{data:x,control:!0}),Object(u.jsxs)(f,{children:[Object(u.jsx)(g,{}),Object(u.jsx)(O,{children:Object(u.jsx)(N,{col:4,mdCol:2,smCol:1,gap:10,children:_.map((function(e,t){return Object(u.jsx)(o.b,{to:"/policy",children:Object(u.jsx)(v,{name:e.name,description:e.description,icon:e.icon})},t)}))})})]}),Object(u.jsxs)(f,{children:[Object(u.jsx)(g,{children:"Top s\u1ea3n ph\u1ea9m b\xe1n ch\u1ea1y trong tu\u1ea7n"}),Object(u.jsx)(O,{children:Object(u.jsx)(N,{col:4,mdCol:2,smCol:1,gap:10,children:w.getProducts(0,4).map((function(e,t){return Object(u.jsx)(D,{id:e.id,images:e.images,title:e.title,price:e.price,slug:e.slug},t)}))})})]}),Object(u.jsxs)(f,{children:[Object(u.jsx)(g,{children:"S\u1ea3n ph\u1ea9m m\u1edbi"}),Object(u.jsx)(O,{children:Object(u.jsx)(N,{col:4,mdCol:2,smCol:1,gap:10,children:w.getProducts(4,12).map((function(e,t){return Object(u.jsx)(D,{id:e.id,images:e.images,title:e.title,price:e.price,slug:e.slug},t)}))})})]}),Object(u.jsx)(f,{children:Object(u.jsx)(O,{children:Object(u.jsx)(o.b,{to:"/catalog",children:Object(u.jsx)("img",{src:X,alt:""})})})}),Object(u.jsxs)(f,{children:[Object(u.jsx)(g,{children:"Ph\u1ed5 Bi\u1ebfn"}),Object(u.jsx)(O,{children:Object(u.jsx)(N,{col:4,mdCol:2,smCol:1,gap:10,children:w.getProducts(0,12).map((function(e,t){return Object(u.jsx)(D,{id:e.id,images:e.images,title:e.title,price:e.price,slug:e.slug},t)}))})})]})]})},A=function(){return Object(u.jsx)(j,{title:"S\u1ea3n ph\u1ea9m",children:Object(u.jsxs)(f,{children:[Object(u.jsx)(g,{children:"S\u1ea3n ph\u1ea9m hi\u1ec7n \u0111ang \u0111\u01b0\u1ee3c b\xe1n t\u1ea1i Shop"}),Object(u.jsx)(O,{children:Object(u.jsx)(N,{col:4,mdCol:2,smCol:1,gap:10,children:w.getProducts(0,12).map((function(e,t){return Object(u.jsx)(D,{images:e.images,title:e.title,price:e.price,slug:e.slug},t)}))})})]})})};var H=function(e){var t=Object(i.useContext)(M),c=t.listProductCart,n=t.setListProductCart;window.scrollTo(0,0);var s=Object(z.a)(e.images);return Object(u.jsx)("div",{className:"shopping-card__item",children:Object(u.jsxs)("div",{style:{display:"flex",flexGrow:1,justifyContent:"space-around"},children:[Object(u.jsxs)("div",{className:"shopping-card__item__product",children:[Object(u.jsx)("div",{className:"shopping-card__image",children:s.map((function(e,t){return Object(u.jsx)("img",{src:e,alt:""},t)}))}),Object(u.jsx)("h3",{className:"shopping-card-title",children:e.title})]}),Object(u.jsx)("div",{className:"shopping-card-price",children:T(e.price)}),Object(u.jsxs)("div",{className:"shopping-card-number",children:[Object(u.jsx)("i",{class:"bx bxs-minus-square",onClick:function(){var t=c.find((function(t){return t.id===e.id})),i=c.findIndex((function(t){return t.id===e.id}));if(t.qty>1){if(!t)return;n(c.map((function(c){return c.id===e.id?Object(l.a)(Object(l.a)({},t),{},{qty:t.qty-1}):c})))}else{var s=Object(z.a)(c);s.splice(i,1),n(s)}}}),Object(u.jsx)("input",{type:"text",value:e.qty,onChange:function(t){var i=Number(t.target.value);console.log(i);var s=c.find((function(t){return t.id===e.id}));i>0&&s&&n(c.map((function(t){return t.id===e.id?Object(l.a)(Object(l.a)({},s),{},{qty:i}):t})))},style:{width:"25%",textAlign:"center"}}),Object(u.jsx)("i",{class:"bx bxs-plus-square",onClick:function(){var t=c.find((function(t){return t.id===e.id}));t&&n(c.map((function(c){return c.id===e.id?Object(l.a)(Object(l.a)({},t),{},{qty:t.qty+1}):c})))}})]}),Object(u.jsx)("div",{className:"shopping-card-total",children:Object(u.jsx)("span",{children:T(e.price*e.qty)})})]})})},R=function(){var e=Object(i.useContext)(M).listProductCart,t=e.reduce((function(e,t){return e+t.price*t.qty}),0),c=e.reduce((function(e,t){return e+t.qty}),0);return Object(u.jsx)(j,{title:"Gi\u1ecf h\xe0ng",children:Object(u.jsxs)("div",{className:"shopping-cart",children:[Object(u.jsxs)("div",{className:"shopping-cart__header",children:[Object(u.jsx)("h3",{className:"title-image",children:" S\u1ea3n ph\u1ea9m "}),Object(u.jsx)("h3",{style:{width:"15%"},children:" Gi\xe1 "}),Object(u.jsx)("h3",{style:{width:"20%"},children:"S\u1ed1 l\u01b0\u1ee3ng "}),Object(u.jsx)("h3",{style:{width:"20%"},children:" T\u1ed5ng "})]}),Object(u.jsx)("div",{children:e.map((function(e,t){return Object(u.jsx)(H,{id:e.id,images:e.images,title:e.title,price:e.price,slug:e.slug,size:e.size,colors:e.colors,categorySlug:e.categorySlug,qty:e.qty},t)}))}),Object(u.jsxs)("div",{className:"shopping-cart__footer",children:[Object(u.jsx)("div",{style:{width:"35%"}}),Object(u.jsx)("span",{style:{width:"25%",textAlign:"center",margin:"auto"},children:"T\u1ed5ng s\u1ed1 l\u01b0\u1ee3ng"}),Object(u.jsx)("span",{style:{width:"20%",textAlign:"center",margin:"auto"},children:c}),Object(u.jsx)("h3",{style:{width:"20%",textAlign:"center",margin:"auto"},children:t})]}),Object(u.jsx)("div",{style:{textAlign:"right",padding:"50px"},children:Object(u.jsx)(b,{backgroundColor:"blue",size:"md",icon:"bx bx-check",animation:!0,children:"Thanh To\xe1n"})})]})})},B=function(e){return Object(u.jsx)("img",{className:"img-big ".concat(e.active?"active":""," "),src:e.item,alt:""})},G=function(e){var t=Object(i.useState)(0),c=Object(h.a)(t,2),n=c[0],s=c[1],a=Object(d.h)().slug,r=w.getProducts(0,12).find((function(e){return e.slug===a})),o=r.images.length,j=Object(i.useRef)(null),p=Object(i.useRef)(null),m=Object(i.useContext)(M),x=m.listProductCart,g=m.setListProductCart;if(Object(i.useEffect)((function(){j.current.classList.add("active"),p.current.classList.add("active"),window.scrollTo(0,0)}),[]),!(r.images.length<=0)&&Array.isArray(r.images)){var O=function(e){var t=Number(e.target.attributes.alt.value);s(t)};return Object(u.jsxs)("div",{className:"detail-product__item",children:[Object(u.jsx)("div",{className:"detail-product__item__image",ref:j,children:Object(u.jsxs)("div",{className:"detail-product__item__image_header",children:[Object(u.jsxs)("div",{className:"slider-detail",children:[Object(u.jsx)("i",{class:"bx bx-left-arrow",onClick:function(){s(0===n?o-1:n-1)}}),Object(u.jsx)("i",{class:"bx bx-right-arrow",onClick:function(){s(n===o-1?0:n+1)}}),r.images.map((function(e,t){return Object(u.jsx)(B,{item:e,active:t===n},t)}))]}),Object(u.jsx)("div",{className:"list-images",children:r.images.map((function(e,t){return Object(u.jsx)("img",{className:"".concat(t===n?"active":""," "),src:e,alt:t,onClick:O},t)}))})]})}),Object(u.jsxs)("div",{className:"detail-product__info",ref:p,children:[Object(u.jsxs)("div",{className:"detail-product__item__info__header",children:[Object(u.jsx)("h3",{children:r.title}),Object(u.jsx)("span",{children:"Form \xe1o Ch\xe2u \xc2u. \u0110\u1ecbnh l\u01b0\u1ee3ng : 220 gsm. 100% cotton. S\u1ea3n ph\u1ea9m \u0111\u01b0\u1ee3c in l\u1ee5a. Tag logo \u0111\u01b0\u1ee3c g\u1eafn \u1edf tay \xe1o. Tem ch\u1ed1ng h\xe0ng gi\u1ea3 c\u1ee7a SWE \u0111\u01b0\u1ee3c may trong s\u01b0\u1eddn \xe1o. C\xe1c b\u1ea1n vui l\xf2ng tham kh\u1ea3o b\u1ea3ng size chart tr\u01b0\u1edbc khi \u0111\u1eb7t h\xe0ng."}),Object(u.jsx)("del",{children:"500,000"}),Object(u.jsx)("span",{className:"price",children:T(r.price)})]}),Object(u.jsxs)("div",{className:"detail-product__item__info__body",children:[Object(u.jsxs)("div",{className:"title",children:[Object(u.jsx)("h4",{children:"COLOR"}),Object(u.jsx)("h4",{children:"SIZE"})]}),Object(u.jsxs)("div",{className:"detail-product__item__info__body__color_header",children:[Object(u.jsx)("div",{className:"color",children:r.colors.map((function(e,t){return Object(u.jsxs)("label",{className:"custom-radio",style:{backgroundColor:e},children:[Object(u.jsx)("input",{type:"radio",name:"color",className:"btn-color"}),Object(u.jsx)("span",{className:"radio-btn",children:Object(u.jsx)("i",{class:"bx bx-check"})})]},t)}))}),Object(u.jsx)("div",{className:"size",children:r.size.map((function(e,t){return Object(u.jsxs)("label",{className:"custom-radio-size",children:[Object(u.jsx)("span",{className:"name-size",children:e}),Object(u.jsx)("input",{type:"radio",name:"size"}),Object(u.jsx)("span",{className:"radio-btn-size",children:Object(u.jsx)("i",{class:"bx bx-check"})})]},t)}))})]}),Object(u.jsx)(b,{size:"md",icon:"bx bx-cart",animation:!0,onClick:function(){var e=x.find((function(e){return e.id===r.id}));g(e?x.map((function(t){return t.id===r.id?Object(l.a)(Object(l.a)({},e),{},{qty:e.qty+1}):t})):[].concat(Object(z.a)(x),[Object(l.a)(Object(l.a)({},r),{},{qty:1})]))},children:"Ch\u1ecdn mua"})]})]})]})}},U=function(){var e=Object(i.useRef)(0);return Object(i.useEffect)((function(){e.current.classList.add("active")}),[]),Object(u.jsxs)("div",{className:"detail-product",children:[Object(u.jsx)(G,{}),Object(u.jsx)("div",{className:"detail-product__row",ref:e,children:Object(u.jsxs)(f,{children:[Object(u.jsx)(g,{children:"C\xf3 th\u1ec3 b\u1ea1n th\xedch"}),Object(u.jsx)(O,{children:Object(u.jsx)(N,{col:4,mdCol:2,smCol:1,gap:10,children:w.getProducts(0,4).map((function(e,t){return Object(u.jsx)(D,{id:e.id,images:e.images,title:e.title,price:e.price,slug:e.slug},t)}))})})]})})]})},F=c(39),Y=c.n(F),V=c(52),J=c(23);c(100),c(101),c(102);J.a.initializeApp({apiKey:"AIzaSyCajdHcHuvIeaIfsLroQbfhYNrMaNoZvPU",authDomain:"e-commerce-shop-1d949.firebaseapp.com",projectId:"e-commerce-shop-1d949",storageBucket:"e-commerce-shop-1d949.appspot.com",messagingSenderId:"1060096991033",appId:"1:1060096991033:web:59d80a1456a468a6c392e8",measurementId:"G-8EHTMJYNXH"}),J.a.analytics();var K=J.a.auth(),W=(J.a.firestore(),J.a),Z=c(116),Q=n.a.createContext(),$=function(e){var t=e.children,c=Object(d.f)(),n=Object(i.useState)(null),s=Object(h.a)(n,2),a=s[0],r=s[1],l=Object(i.useState)(!0),o=Object(h.a)(l,2),j=o[0],b=o[1];return Object(i.useEffect)((function(){var e=K.onAuthStateChanged((function(e){if(e){var t=e.displayName,i=e.email,n=e.uid,s=e.photoURL;return r({displayName:t,email:i,uid:n,photoURL:s}),console.log(e),b(!1),void c.push("/")}b(!1),c.push("/dang-nhap")}));return function(){e()}}),[c]),Object(u.jsx)(Q.Provider,{value:{user:a,setUser:r},children:j?Object(u.jsx)(Z.a,{}):t})},ee=new W.auth.GoogleAuthProvider,te=function(){var e=function(){var e=Object(V.a)(Y.a.mark((function e(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.signInWithPopup(ee);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"sign-up",children:Object(u.jsxs)("div",{className:"form-signup",children:[Object(u.jsxs)("form",{children:[Object(u.jsxs)("div",{className:"input-div",children:[Object(u.jsx)("input",{type:"text",placeholder:"Nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i c\u1ee7a b\u1ea1n ..."}),Object(u.jsx)("i",{class:"bx bxs-user"})]}),Object(u.jsxs)("div",{className:"input-div",children:[Object(u.jsx)("input",{type:"password",placeholder:"Nh\u1eadp m\u1eadt kh\u1ea9u c\u1ee7a b\u1ea1n ..."}),Object(u.jsx)("i",{class:"bx bxs-lock-alt"})]}),Object(u.jsx)("button",{className:"sign-up-btn",type:"submit",children:"\u0110\u0103ng nh\u1eadp"})]}),Object(u.jsxs)("div",{className:"footer-form-login",children:[Object(u.jsx)(o.b,{to:"/dang-ky",children:Object(u.jsx)("span",{children:"B\u1ea1n ch\u01b0a c\xf3 t\xe0i kho\u1ea3n ?"})}),Object(u.jsxs)("div",{className:"sign-up-with",children:[Object(u.jsx)("button",{className:"btn-sign-up-with",type:"button",children:Object(u.jsx)("i",{class:"bx bxl-facebook"})}),Object(u.jsx)("button",{className:"btn-sign-up-with",onClick:e,type:"button",children:Object(u.jsx)("i",{class:"bx bxl-google"})})]})]})]})})},ce=function(e){return Object(u.jsx)("div",{className:"sign-up",children:Object(u.jsx)("div",{className:"form-signup",children:Object(u.jsxs)("form",{children:[Object(u.jsxs)("div",{className:"input-div",children:[Object(u.jsx)("input",{type:"text",placeholder:"Nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i c\u1ee7a b\u1ea1n ..."}),Object(u.jsx)("i",{class:"bx bxs-user"})]}),Object(u.jsx)("button",{className:"sign-up-btn",type:"submit",children:"\u0110\u0103ng k\xfd"})]})})})},ie=function(){return Object(u.jsxs)(d.c,{children:[Object(u.jsx)(d.a,{path:"/dang-ky",exact:!0,component:ce}),Object(u.jsx)(d.a,{path:"/dang-nhap",exact:!0,component:te}),Object(u.jsx)(d.a,{path:"/",exact:!0,component:E}),Object(u.jsx)(d.a,{path:"/catalog/:slug",exact:!0,component:U}),Object(u.jsx)(d.a,{path:"/catalog",exact:!0,component:A}),Object(u.jsx)(d.a,{path:"/cart",exact:!0,component:R})]})},ne=c.p+"static/media/Logo-2.3f227664.png",se=[{display:"Gi\u1edbi Thi\u1ec7u",path:"/"},{display:"Li\xean H\u1ec7",path:"/"},{display:"Tuy\u1ec3n D\u1ee5ng",path:"/"},{display:"Tin T\u1ee9c",path:"/"},{display:"H\u1ec7 Th\u1ed1ng C\u1eeda H\xe0ng",path:"/"}],ae=[{display:"Ch\xednh s\xe1ch \u0111\u1ed5i tr\u1ea3",path:"/"},{display:"Ch\xednh s\xe1ch b\u1ea3o h\xe0nh",path:"/"},{display:"Ch\xednh s\xe1ch ho\xe0n ti\u1ec1n",path:"/"}],re=function(){return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)(N,{col:4,mdCol:2,smCol:1,gap:10,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"footer__title",children:"T\u1ed5ng \u0111\xe0i h\u1ed5 tr\u1ee3"}),Object(u.jsxs)("div",{className:"footer__content",children:[Object(u.jsxs)("p",{children:["Li\xean h\u1ec7 \u0111\u1eb7t h\xe0ng ",Object(u.jsx)("strong",{children:"0763880318"})]}),Object(u.jsxs)("p",{children:["Th\u1eafc m\u1eafc \u0111\u01a1n h\xe0ng ",Object(u.jsx)("strong",{children:"0763880318"})]}),Object(u.jsxs)("p",{children:["G\xf3p \xfd ",Object(u.jsx)("strong",{children:"0763880318"})]})]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"footer__title",children:"V\u1ec1 YOLO"}),Object(u.jsx)("div",{className:"footer__content",children:se.map((function(e,t){return Object(u.jsx)("p",{children:Object(u.jsx)(o.b,{to:e.path,children:e.display})},t)}))})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"footer__title",children:"Ch\u0103m s\xf3c kh\xe1nh h\xe0ng"}),Object(u.jsx)("div",{className:"footer__content",children:ae.map((function(e,t){return Object(u.jsx)("p",{children:Object(u.jsx)(o.b,{to:e.path,children:e.display})},t)}))})]}),Object(u.jsxs)("div",{classNam:"footer__about",children:[Object(u.jsx)("p",{children:Object(u.jsx)(o.b,{to:"/",children:Object(u.jsx)("img",{src:ne,className:"footer__logo",alt:""})})}),Object(u.jsx)("p",{children:"H\u01b0\u1edbng \u0111\u1ebfn m\u1ee5c ti\xeau mamg l\u1ea1i ni\u1ec1m vui \u0103n m\u1eb7c m\u1edbi m\u1ed7i ng\xe0y cho h\xe0ng tri\u1ec7u ng\u01b0\u1eddi ti\xeau d\xf9ng Vi\u1ec7t. H\xe3y c\xf9ng YOLO h\u01b0\u1edbng \u0111\u1ebfn m\u1ed9t cu\u1ed9c s\u1ed1ng n\u0103ng \u0111\u1ed9ng , t\xedch c\u1ef1c h\u01a1n."})]})]})})})},le=[{display:"Trang Ch\u1ee7",path:"/"},{display:"S\u1ea3n Ph\u1ea9m",path:"/catalog"},{display:"Ph\u1ee5 Ki\u1ec7n",path:"/accessories"},{display:"Li\xean H\u1ec7",path:"/contact"}],oe=function(){var e=Object(d.g)().pathname,t=Object(i.useContext)(M).listProductCart,c=le.findIndex((function(t){return t.path===e})),n=Object(i.useRef)(0),s=Object(i.useState)(!1),a=Object(h.a)(s,2),r=a[0],l=a[1],j=Object(i.useContext)(Q),b=j.user,p=j.setUser;console.log(b),Object(i.useEffect)((function(){return window.addEventListener("scroll",(function(){document.body.scrollTop>80||document.documentElement.scrollTop>80?n.current.classList.add("shrink"):n.current.classList.remove("shrink")})),function(){window.removeEventListener("scroll",null)}}),[]);var m=Object(i.useRef)(null),x=function(){return m.current.classList.toggle("active")};return Object(u.jsx)("div",{className:"header",ref:n,children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"header__logo",children:Object(u.jsx)(o.b,{children:Object(u.jsx)("img",{src:ne,alt:""})})}),Object(u.jsxs)("div",{className:"header__menu",children:[Object(u.jsx)("div",{className:"header__menu__mobile-toggle",onClick:x,children:Object(u.jsx)("i",{class:"bx bx-menu-alt-left"})}),Object(u.jsxs)("div",{className:"header__menu__left",ref:m,children:[Object(u.jsx)("div",{className:"header__menu__left__close",onClick:x,children:Object(u.jsx)("i",{class:"bx bx-chevron-left"})}),le.map((function(e,t){return Object(u.jsx)("div",{className:"header__menu__item\n                                header__menu__left__item ".concat(t===c?"active":""),onClick:x,children:Object(u.jsx)(o.b,{to:e.path,children:Object(u.jsx)("span",{children:e.display})})},t)}))]}),Object(u.jsxs)("div",{className:"header__menu__right",children:[Object(u.jsx)("div",{className:"header__menu__item header__menu__right__item",children:Object(u.jsx)("i",{class:"bx bx-search"})}),Object(u.jsx)("div",{className:"header__menu__item header__menu__right__item",children:Object(u.jsxs)("div",{className:"group-shoppingcart",children:[t.length>0?Object(u.jsx)("span",{className:"count add-animation",children:t.length}):"",Object(u.jsx)(o.b,{to:"/cart",children:Object(u.jsx)("i",{class:"bx bxl-shopify"})})]})}),Object(u.jsx)("div",{className:"header__menu__item header__menu__right__item",children:b?Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:b.photoURL,alt:"",onClick:function(){return l(!r)}}),r?Object(u.jsx)("div",{className:"dropdown",onClick:function(){p(null),l(!1),K.signOut()},children:Object(u.jsx)("span",{children:"\u0110\u0103ng xu\u1ea5t"})}):""]}):Object(u.jsx)(o.b,{to:"/dang-nhap",children:Object(u.jsx)("i",{class:"bx bx-user"})})})]})]})]})})},de=function(){return Object(u.jsx)(o.a,{children:Object(u.jsx)($,{children:Object(u.jsx)(I,{children:Object(u.jsx)(d.a,{render:function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)(oe,Object(l.a)({},e)),Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"main",children:Object(u.jsx)(ie,{})})}),Object(u.jsx)(re,{})]})}})})})})};c(113);a.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(de,{})}),document.getElementById("root")),r()},62:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/slide_1.05395af1.png"},69:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/slide_2.a5d8646f.png"},70:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/slide_3.6e2ad4f2.png"},71:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/product-01 (1).7badc1d8.jpg"},72:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/product-01 (2).c1474aae.jpg"},73:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/product-02 (1).7a9a7232.jpg"},74:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/product-02 (2).3c26e45a.jpg"},75:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/product-03 (1).58b095c6.jpg"},76:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/product-03 (2).02973783.jpg"},77:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/product-04 (1).42c2af02.jpg"},78:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/product-04 (2).903bdb70.jpg"},79:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/product-05 (1).22ecc9c5.jpg"},80:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/product-05 (2).9789859f.jpg"},81:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/product-06 (1).d0cdaded.jpg"},82:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/product-06 (2).e0a741d7.jpg"},83:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/product-07 (1).9402d058.jpg"},84:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/product-07 (2).fea32407.jpg"},85:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/product-08 (1).b11d12fb.jpg"},86:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/product-08 (2).64bb6c0f.jpg"},87:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/product-09 (1).30ee8e32.jpg"},88:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/product-09 (2).00d45549.jpg"},89:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/product-10 (1).e2340eb7.jpg"},90:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/product-10 (2).4890e19f.jpg"},91:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/product-11 (1).815006a3.jpg"},92:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/product-11 (2).c9bc2660.jpg"},93:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/product-12 (1).35b8b824.jpg"},94:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/product-12 (2).54514ffa.jpg"}},[[114,1,2]]]);
//# sourceMappingURL=main.b853d138.chunk.js.map