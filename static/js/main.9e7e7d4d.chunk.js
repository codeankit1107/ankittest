(this.webpackJsonpankit=this.webpackJsonpankit||[]).push([[0],{28:function(e,c,s){"use strict";s.r(c);var t=s(1),n=s.n(t),i=s(16),a=s.n(i),r=s(7),j=s(2),l=s(0),b=function(){return Object(l.jsx)("header",{children:Object(l.jsxs)("h3",{style:{color:"white"},children:[Object(l.jsx)("i",{class:"fas fa-utensils"}),"   ",Object(l.jsx)(r.b,{style:{color:"white"},to:"/",children:"Food's Restaurant"})]})})},d=function(){return Object(l.jsx)("div",{className:"check-main",children:Object(l.jsxs)("div",{className:"check-inner",children:[Object(l.jsx)("h2",{children:"Checkout"}),Object(l.jsx)("p",{children:"Thank you for your order."})]})})},o=function(){return Object(l.jsxs)("div",{className:"heading",children:[Object(l.jsxs)("h1",{children:[" ",Object(l.jsx)("span",{children:"Welcome to Food's"})," ",Object(l.jsx)("span",{children:"Kitchen"})," "]}),Object(l.jsx)(r.b,{to:"/products",children:"Go to menu"})]})},h=s(10),O=[{name:"Hamburger",price:"Price: 200",image:"images/burger.jpeg"},{name:"Fries",price:"Price: 100",image:"images/fries.jpeg"},{name:"Coke",price:"Price: 50",image:"images/coke.jpeg"},{name:"Pepsi",price:"Price: 50",image:"images/pepsi.jpeg"}],u=function(e,c){return"INCR"===c.type&&(e+=1),e>0&&"DECR"===c.type&&(e-=1),e},m=function(){var e=Object(t.useState)(!1),c=Object(h.a)(e,2),s=c[0],n=(c[1],Object(t.useReducer)(u,0)),i=Object(h.a)(n,2),a=i[0],j=i[1];return Object(l.jsxs)("div",{className:"container product-container-main",children:[Object(l.jsxs)("div",{className:"cart-block",children:[Object(l.jsxs)(r.b,{to:"/Checkout",children:[Object(l.jsx)("i",{style:{color:"black"},class:"fas fa-shopping-cart"})," "]}),Object(l.jsx)("div",{className:"number",children:Object(l.jsx)("p",{children:a})})]}),Object(l.jsx)("div",{className:"container product-container",children:O.map((function(e,c){return Object(l.jsxs)("div",{className:"product-card",children:[Object(l.jsx)("img",{className:"img-full",src:e.image}),Object(l.jsxs)("div",{className:"details",children:[Object(l.jsx)("h2",{children:e.name}),Object(l.jsx)("p",{children:e.price})]}),Object(l.jsx)("button",{className:"blue",onClick:function(){return j({type:"INCR"})},children:Object(l.jsx)("span",{className:"plus",children:"+"})}),Object(l.jsx)("button",{className:s?"pink":"grey",onClick:function(){return j({type:"DECR"})},children:Object(l.jsx)("span",{className:"minus",children:"-"})})]},c)}))})]})},x=function(){var e=Object(t.useState)(!1),c=Object(h.a)(e,2);c[0],c[1];return Object(l.jsx)("div",{className:"popup-main",children:Object(l.jsxs)("div",{className:"popup-innner",children:[Object(l.jsx)("div",{className:"cart-block",children:Object(l.jsx)("div",{className:"number",children:Object(l.jsx)("span",{children:"2"})})}),Object(l.jsx)("h4",{children:"Order Summary"}),Object(l.jsxs)("div",{className:"inner-content",children:[Object(l.jsxs)("div",{className:"left-div",children:[Object(l.jsxs)("p",{children:["Coke:  ",Object(l.jsx)("span",{children:" 2 "})]}),Object(l.jsxs)("p",{children:["Fries:  ",Object(l.jsx)("span",{children:" 1 "})]}),Object(l.jsx)("p",{children:"Total (INR) : 200"})]}),Object(l.jsxs)("div",{className:"right-div",children:[Object(l.jsxs)("div",{className:"inner-btn",children:[Object(l.jsx)("button",{className:"plus-btn",children:"+"}),Object(l.jsx)("button",{className:"minus-btn",children:"-"})]}),Object(l.jsxs)("div",{className:"inner-btn",children:[Object(l.jsx)("button",{className:"plus-btn",children:"+"}),Object(l.jsx)("button",{className:"minus-btn",children:"-"})]})]})]}),Object(l.jsxs)("div",{className:"outr",children:[Object(l.jsx)("button",{className:"checkout-btn",children:"Save and checkout"}),Object(l.jsx)("button",{className:"cancle-btn",children:"Cancel"})]})]})})};var p=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(r.a,{children:[Object(l.jsx)(b,{}),Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{exact:!0,path:"/",component:o}),Object(l.jsx)(j.a,{exact:!0,path:"/products",component:m}),Object(l.jsx)(j.a,{exact:!0,path:"/checkout",component:d}),Object(l.jsx)(j.a,{exact:!0,path:"/popup",component:x})]})]})})};a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.9e7e7d4d.chunk.js.map