(this["webpackJsonpsweet-shop"]=this["webpackJsonpsweet-shop"]||[]).push([[0],{20:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){e.exports=a.p+"static/media/cake_logo.a12ae613.png"},41:function(e,t,a){e.exports=a(61)},46:function(e,t,a){},49:function(e,t,a){},54:function(e,t,a){},56:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),s=(a(46),a(16)),o=a(2),i=a(3),m=a(5),u=a(4),d=a(6),p=a(14),h=a(8),E=(a(47),a(48),a(33),a(49),a(37)),g=a.n(E),f=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.username,n=t.isAdmin;return r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar-menu"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.c,{to:"/",className:"active","aria-current":"page"},"Home")),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/store"},"Store")),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/contact"},"Contact")),a?r.a.createElement("ul",null,n?r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.c,{to:"/create"},"Create")),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/review-orders"},"Review orders"))):r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.c,{to:"/mycart"},"My cart")),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/myorders"},"My orders"))),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/",onClick:function(t){return e.props.logout(t,e.state)}},"Logout"))):r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.c,{to:"/login"},"Login")),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/register"},"Register")))),r.a.createElement("span",null,r.a.createElement("img",{className:"logo",src:g.a,alt:"logo"}),r.a.createElement("h1",null,"Sweet Cakes by Irenka"))))}}]),a}(n.Component),b=(a(54),function(){return r.a.createElement("footer",{id:"footer",className:"page-footer mt-4"},"\xa9 Irena's Sweet Shop ",(new Date).getFullYear())}),v=a(10),y=(a(24),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={username:"",email:"",password:"",confirmPassword:""},n.handleChange=e.handleChange.bind(Object(v.a)(n)),n}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.username,n=t.email,l=t.password,c=t.confirmPassword;return r.a.createElement("div",{className:"form-wrapper"},r.a.createElement("h1",null,"Register"),r.a.createElement("form",{onSubmit:function(t){return e.props.handleSubmit(t,e.state,!0)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"E-mail"),r.a.createElement("input",{onChange:this.handleChange,type:"text",name:"email",id:"email",placeholder:"Enter e-mail",value:n})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{onChange:this.handleChange,type:"text",name:"username",id:"username",placeholder:"Enter username",value:a})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{onChange:this.handleChange,type:"password",name:"password",id:"password",placeholder:"Enter password",value:l})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"confirmPassword"},"Confirm Password"),r.a.createElement("input",{onChange:this.handleChange,type:"password",name:"confirmPassword",id:"confirmPassword",placeholder:"Enter your password again",value:c})),r.a.createElement("button",{type:"submit"},"Register")))}}]),a}(n.Component)),C=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={username:"",password:"",email:""},n.handleChange=e.handleChange.bind(Object(v.a)(n)),n}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.email,n=t.password;return r.a.createElement("div",{className:"Login"},r.a.createElement("div",{className:"form-wrapper"},r.a.createElement("h1",null,"Login"),r.a.createElement("form",{onSubmit:function(t){return e.props.handleSubmit(t,e.state,!1,e.props)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"E-mail"),r.a.createElement("input",{onChange:this.handleChange,type:"text",name:"email",id:"email",placeholder:"Enter e-mail",value:a})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{onChange:this.handleChange,type:"password",name:"password",id:"password",placeholder:"Enter password",value:n})),r.a.createElement("button",{type:"submit"},"Login")),r.a.createElement("p",null,"If you don't have an account - go and register here",r.a.createElement(d.b,{to:"register"},"Register"))))}}]),a}(n.Component),O=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={title:"",description:"Enter description",image:"",price:""},n.handleChange=e.handleChange.bind(Object(v.a)(n)),n}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.title,n=t.description,l=t.image,c=t.price;return r.a.createElement("div",{className:"form-wrapper"},r.a.createElement("h1",null,"Create New Sweet Thing"),r.a.createElement("form",{onSubmit:function(t){return e.props.handleSubmitCreate(t,e.state,e.props)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{onChange:this.handleChange,type:"text",name:"title",id:"title",placeholder:"Enter name of the Sweet",value:a})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("textarea",{rows:"5",cols:"35",onChange:this.handleChange,name:"description",defaultValue:n})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"image"},"Image URL"),r.a.createElement("input",{onChange:this.handleChange,type:"text",name:"image",id:"image",placeholder:"Enter image URL",value:l})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"price"},"Price"),r.a.createElement("input",{onChange:this.handleChange,type:"number",name:"price",id:"price",placeholder:"Enter price",value:c})),r.a.createElement("button",{type:"submit"},"Create")))}}]),a}(n.Component),w=(a(20),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.description,n=e.price,l=e.image,c=e._id;return r.a.createElement("div",{className:"cake-wrapper"},r.a.createElement("h2",null,t),r.a.createElement("div",{className:"mini-wrapper"},r.a.createElement("img",{className:"cake-image",src:l,alt:"What the Wind Knows "})),r.a.createElement("div",{className:"text-wrapper"},r.a.createElement("p",{className:"cake-description"},a),r.a.createElement("p",{className:"cake-price"},n," leva/piece")),r.a.createElement(d.b,{type:"submit",to:"/order/".concat(c)},"Order"))}}]),a}(r.a.Component)),k=function(){return r.a.createElement("p",{className:"loading"},"Loading...")},j=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.description,n=e.price,l=e.image,c=e._id;return r.a.createElement("div",{className:"cake-wrapper"},r.a.createElement("h2",null,t),r.a.createElement("div",{className:"mini-wrapper"},r.a.createElement("img",{className:"cake-image",src:l,alt:"What the Wind Knows "})),r.a.createElement("div",{className:"text-wrapper"},r.a.createElement("p",{className:"cake-description"},a),r.a.createElement("p",{className:"cake-price"},n," leva/piece")),r.a.createElement(d.b,{type:"submit",to:"/change/".concat(c)},"Make a Change"))}}]),a}(r.a.Component),S=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.sweets,a=e.isLoading,l=e.isAdmin;return a?r.a.createElement(k,null):t.length||a?r.a.createElement(n.Fragment,null,r.a.createElement("h2",{className:"sweets-page-h2"},"All the sweets in one place"),r.a.createElement("h4",null,"Orders for whole cake (10/12 pieces) will be 10% less of the price"),r.a.createElement("div",{className:"cakes"},l?t.map((function(e){return r.a.createElement(j,Object.assign({key:e._id},e))})):t.map((function(e){return r.a.createElement(w,Object.assign({key:e._id},e))})))):r.a.createElement("div",null,"No Sweets at this moment!")}}]),a}(n.Component),N=a(29),P=a.n(N),A=a(30),L=a(40);function B(e){var t=function(){var e=window.localStorage.getItem("token");return e&&e.length?{Authorization:"Bearer ".concat(e)}:{}};return function(){var a=Object(L.a)(P.a.mark((function a(n){var r,l,c,s,o=arguments;return P.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:{},l=o.length>2&&void 0!==o[2]?o[2]:{},c=t(),a.next=5,fetch(n,Object(A.a)({method:e,headers:Object(A.a)({"Content-Type":"application/json",Accept:"application/json"},c),body:Object.keys(r).length?JSON.stringify(r):void 0},l));case 5:return s=a.sent,a.abrupt("return",s.json());case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}var F=B("get"),M=B("post"),D=B("put"),I=B("delete"),x=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"You got something wrong!!!"),r.a.createElement("h3",null,"Please check again in a few minutes"))}}]),a}(n.Component),U=(a(35),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("main",null,this.props.username?r.a.createElement("div",{className:"welcome-user-message"},r.a.createElement("h1",null,"Welcome, ",this.props.username,"!"),r.a.createElement("p",null,r.a.createElement(d.b,{to:"/store"},"Check the Store"),this.props.isAdmin?r.a.createElement(d.b,{to:"/users"},"Check Users"):r.a.createElement(d.b,{to:"/myorders"},"View your orders"))):r.a.createElement("div",{className:"welcome-user-message"},r.a.createElement("h1",null,"Welcome to the Sweet shop!"),r.a.createElement("h3",null,"Log in/Sign up in your profile so you can make your order"),r.a.createElement(d.b,{to:"/login"},"Login"),r.a.createElement(d.b,{to:"/register"},"Register")),r.a.createElement("div",{className:"promotions"},r.a.createElement("a",{href:"https://www.healthline.com/nutrition/7-health-benefits-dark-chocolate"},"7 Proven Health Benefits of Dark Chocolate"),r.a.createElement("a",{href:"https://www.health.com/mind-body/the-reason-why-sweets-lift-your-spirits"},"Why sweets lift your spirits"),r.a.createElement("a",{href:"https://www.mashed.com/102706/popular-cake-year-born/"},"Most popular cake by the year of birth")))}}]),a}(n.Component)),_=(a(56),function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("h2",null,"Contact us"),r.a.createElement("div",{className:"twodiv"},r.a.createElement("div",{className:"address"},r.a.createElement("p",{className:"addbuilding"},"Business Center Serdika"),r.a.createElement("p",null,'Boulevard "Akademik Ivan Evstratiev Geshov " 2\u0415, 1330 g.k. Serdika, Sofia'),r.a.createElement("h3",null,"Working hours:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Monday to Friday -> 8am - 18pm "),r.a.createElement("li",null,"Saturday -> 9am - 15pm "))),r.a.createElement("div",{className:"address"},r.a.createElement("p",{className:"phone"},r.a.createElement("span",null,"Office phone number:"),r.a.createElement("a",{href:"tel:02 822 1115"},"02 822 1115")),r.a.createElement("p",{className:"phone"},r.a.createElement("span",null,"Main contact person - Ivana Ivanova:"),r.a.createElement("a",{href:"tel:00359 882 822 111"},"00359 882 822 111")),r.a.createElement("p",{className:"phone"},r.a.createElement("span",null,"Email:"),r.a.createElement("a",{href:"mailto:sweetcakes@sweet.com"},"sweetcakes@sweet.com")))))}),Y=(a(25),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.product[0].data,a=t.title,n=t.price,l=this.props.product[0],c=l.quantity,s=l.fSum;return r.a.createElement("div",{className:"group"},r.a.createElement("input",{type:"text",name:"name",id:"name",value:a,readOnly:"readonly"}),r.a.createElement("input",{type:"num",name:"quantity",id:"quantity",value:c,readOnly:"readonly"}),r.a.createElement("input",{type:"num",name:"price",id:"price",value:n,readOnly:"readonly"}),r.a.createElement("input",{type:"num",name:"mediary-price",id:"mediary-price",value:s,readOnly:"readonly"}),r.a.createElement("button",{onClick:function(t){return e.props.deleteCartProduct(t,e.props._id)}},"Remove product"))}}]),a}(r.a.Component)),R=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"totalSum",value:function(e){var t=0;return e.map((function(e){return t+=e.product[0].fSum})),Math.round(100*t)/100}},{key:"render",value:function(){var e=this,t=this.props,a=t.cartProducts,n=t.isLoadingCart;return n?r.a.createElement(k,null):a.length||n?r.a.createElement("div",{className:"mycart"},r.a.createElement("h2",null,"My Cart"),r.a.createElement("form",{onSubmit:function(t){return e.props.handleMyCartSubmit(t,a)}},r.a.createElement("div",{className:"group"},r.a.createElement("p",null,"Name"),r.a.createElement("p",null,"Quantity"),r.a.createElement("p",null,"Price per 1 item"),r.a.createElement("p",null,"Sum")),a.map((function(t){return r.a.createElement(Y,Object.assign({key:t._id},t,{deleteCartProduct:e.props.deleteCartProduct.bind(e)}))})),r.a.createElement("div",{className:"total-price"},r.a.createElement("label",{htmlFor:"total-price"},"Total:"),r.a.createElement("input",{type:"num",name:"total-price",id:"total-price",value:this.totalSum(a),readOnly:"readonly"})),r.a.createElement("div",{className:"buttons"},r.a.createElement(d.b,{className:"after-order",to:"/store"},"Go back for more"),r.a.createElement("button",{className:"after-order",type:"submit"},"Finish the order")))):r.a.createElement("div",{className:"cart-empty"},"Your cart is empty!")}}]),a}(r.a.Component),G=(a(26),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={quantity:"1"},n.handleChange=n.handleChange.bind(Object(v.a)(n)),n}return Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState({quantity:e.target.value})}},{key:"getSum",value:function(e,t){var a=Number(e)*Number(t);return e>=10?Math.round(.9*a*100)/100:Math.round(100*a)/100}},{key:"render",value:function(){var e=this,t=this.props.match.params.id,a=this.props.sweets.find((function(e){return e._id===t})),n=this.state.quantity,l=this.getSum(n,a.price),c={data:a,quantity:n,fSum:l};return r.a.createElement("div",{className:"order-wrapper"},r.a.createElement("h2",null,"Let us take your order and add it to your cart"),r.a.createElement("form",{onSubmit:function(t){return e.props.addToCartSubmit(t,c,e.props)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",name:"title",id:"title",value:a.title,readOnly:"readonly"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"price"},"Price"),r.a.createElement("input",{type:"text",name:"title",id:"title",value:a.price,readOnly:"readonly"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"quantity"},"Enter quantity"),r.a.createElement("select",{value:this.state.quantity,onChange:this.handleChange},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"12"},"12"))),r.a.createElement("p",{className:"additional-info"},"Orders for whole cake ",r.a.createElement("span",null,"10 or 12 pieces")," will be ",r.a.createElement("span",null,"10%")," less of the price"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"sum"},"Sum"),r.a.createElement("input",{type:"text",name:"sum",id:"sum",value:l,readOnly:"readonly"}),n>=10?r.a.createElement("span",null,"10% discount included"):null),r.a.createElement("button",{type:"submit"},"Add to Cart"),r.a.createElement("p",null,"All shown prices are in BGN - bulgarian leva")),r.a.createElement(d.c,{className:"after-order",to:"/store"},"Go to the Store"),r.a.createElement(d.c,{className:"after-order",to:"/mycart"},"Go to My cart"))}}]),a}(r.a.Component)),T=(a(36),a(17)),q=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={buttonIsActive:!1,aOrderProductsList:""},e}return Object(i.a)(a,[{key:"onClickChange",value:function(e){var t=this;this.state.buttonIsActive?this.setState({buttonIsActive:!1,aOrderProductsList:""}):F("http://localhost:5000/orders/user/".concat(e)).then((function(e){t.setState({aOrderProductsList:e,buttonIsActive:!0})}))}},{key:"totalSumForOrder",value:function(e){var t=0;return e.forEach((function(e){t+=e.product[0].fSum})),t}},{key:"render",value:function(){var e=this,t=this.state,a=t.buttonIsActive,n=t.aOrderProductsList,l=this.props,c=l.date,s=l.status,o=l._id,i=T(c).format("DD MMMM YYYY"),m=T(c).format("HHMMSS");return r.a.createElement("div",{className:"orderdetails"},r.a.createElement("div",{className:"info"},r.a.createElement("p",{className:"date"},"Date: ",r.a.createElement("span",null,i)),r.a.createElement("p",{className:"number"},"Order number: ",r.a.createElement("span",null,m)),r.a.createElement("p",{className:"status"},"Status: ",r.a.createElement("span",null,s)),"Approved"===s?r.a.createElement(d.b,{to:"/payment/".concat(o),className:"payment-link"},"Pay Order"):null,"Cancelled"===s?r.a.createElement("button",{onClick:function(t){return e.props.deleteCancelledOrder(t,o)}},"Delete"):null),r.a.createElement("div",{className:"list",onClick:function(){return e.onClickChange(o)}},a?r.a.createElement("ul",null,n.map((function(e){return r.a.createElement("li",{key:e._id},e.product[0].data.title," - ",e.product[0].quantity," ",e.product[0].quantity>=2?"pieces":"piece"," with ",e.product[0].data.price," for piece => sum: ",e.product[0].fSum)})),r.a.createElement("p",null,"Total: ",this.totalSumForOrder(n)),r.a.createElement("button",null,"Hide")):r.a.createElement("button",null,"Load more information")))}}]),a}(r.a.Component),W=a(21),H=a(22),V=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.orders,n=t.ordersLoading;return n?r.a.createElement(k,null):a.length||n?r.a.createElement("div",{className:"myorders"},r.a.createElement("h2",null,"My Orders ",r.a.createElement(W.a,{icon:H.b,color:"red",className:"star"})," "),a.map((function(t){return r.a.createElement(q,Object.assign({key:t._id},t,{deleteCancelledOrder:e.props.deleteCancelledOrder.bind(e)}))})),r.a.createElement("div",{className:"important-info"},r.a.createElement("h4",null,r.a.createElement(W.a,{icon:H.a,color:"red"})," Legend of an order Status! ",r.a.createElement(W.a,{icon:H.a,color:"red"})),r.a.createElement("p",null,r.a.createElement("span",null,"Pending")," - order awaits approval - admin needs to check the availability of the items in your order"),r.a.createElement("p",null,r.a.createElement("span",null,"Cancelled")," - order is cancelled - no availability of the items or problem with the order (contact us for details)"),r.a.createElement("p",null,r.a.createElement("span",null,"Approved")," - order is approved - the approval means that we have all the products in your order and you can make the payment for your order and after it will be dispatched towards you"))):r.a.createElement("div",{className:"cart-empty"},"Your dont have any orders yet!")}}]),a}(r.a.Component),J=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.products,n=t.creator,l=t.date,c=t._id;return r.a.createElement("div",{className:"cake-wrapper"},r.a.createElement("p",null,"Order ",r.a.createElement("span",null,c)," from ",r.a.createElement("span",null,T(l).format("DD MMMM YYYY"))),r.a.createElement("p",null,"Made by user - ",r.a.createElement("span",null,n)),r.a.createElement("ul",null,r.a.createElement("h3",null,"Order contains:"),a.map((function(e){return r.a.createElement("li",{key:e._id},e.product[0].title)}))),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(t){return e.props.handleApproveOrder(t,c)}},"Approve order"),r.a.createElement("button",{onClick:function(t){return e.props.handleCancelOrder(t,c)}},"Cancel order")))}}]),a}(r.a.Component),K=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.pendingOrders,n=t.ordersForReviewLoading;return n?r.a.createElement(k,null):a.length||n?r.a.createElement("div",{className:"myorders"},r.a.createElement("h2",null,"Orders"),a.map((function(t){return r.a.createElement(J,Object.assign({key:t._id},t,{handleCancelOrder:e.props.handleCancelOrder.bind(e),handleApproveOrder:e.props.handleApproveOrder.bind(e)}))}))):r.a.createElement("div",{className:"cart-empty"},"No orders for review!")}}]),a}(r.a.Component),z=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={word:"",title:"",price:"",description:"",image:""},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;F("http://localhost:5000/sweets/allsweets/".concat(t)).then((function(t){e.setState({title:t.title,price:t.price,description:t.description,image:t.image})}))}},{key:"handleChangeEdit",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this,t=this.props.match.params.id,a=this.state,n=a.title,l=a.description,c=a.image,s=a.price,o=this.state.word;return r.a.createElement("div",{className:"order-wrapper"},r.a.createElement("h2",null,"Change"),r.a.createElement("form",{onSubmit:function(a){return e.props.handleChangeOfProduct(a,o,t,e.state,e.props)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{onChange:this.handleChangeEdit.bind(this),type:"text",name:"title",id:"title",value:n})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("textarea",{onChange:this.handleChangeEdit.bind(this),name:"description",rows:"5",cols:"35",value:l})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"image"},"Image"),r.a.createElement("input",{onChange:this.handleChangeEdit.bind(this),type:"text",name:"image",id:"image",value:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"price"},"Price"),r.a.createElement("input",{onChange:this.handleChangeEdit.bind(this),type:"number",name:"price",id:"price",value:s})),r.a.createElement("button",{onClick:function(){return e.setState({word:"edit"})}},"Edit"),r.a.createElement("button",{onClick:function(){return e.setState({word:"delete"})}},"Delete")),r.a.createElement(d.b,{className:"after-order",to:"/store"},"Go back"))}}]),a}(r.a.Component),Q=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={city:"Sofia",selectedOptionGift:"",selectedOptionPayment:"Card",emailPayPal:"",passwordPayPal:""},n.handleChangeCity=n.handleChangeCity.bind(Object(v.a)(n)),n.radioChangeGift=n.radioChangeGift.bind(Object(v.a)(n)),n.radioChangePayment=n.radioChangePayment.bind(Object(v.a)(n)),n}return Object(i.a)(a,[{key:"handleChangeCity",value:function(e){this.setState({city:e.target.value})}},{key:"radioChangeGift",value:function(e){this.setState({selectedOptionGift:e.currentTarget.value})}},{key:"radioChangePayment",value:function(e){this.setState({selectedOptionPayment:e.currentTarget.value})}},{key:"render",value:function(){var e=this.state,t=e.emailPayPal,a=e.passwordPayPal,n=e.selectedOptionPayment;return r.a.createElement("div",{className:"form-wrapper"},r.a.createElement("h1",null,"Payment Page"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("h3",null,"Is this order a gift?"),r.a.createElement("input",{type:"radio",value:"Yes",checked:"Yes"===this.state.selectedOptionGift,onChange:this.radioChangeGift}),"Yes",r.a.createElement("input",{type:"radio",value:"No",checked:"No"===this.state.selectedOptionGift,onChange:this.radioChangeGift}),"No"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"city"},"Billing address"),r.a.createElement("select",{value:this.state.city,onChange:this.handleChangeCity},r.a.createElement("option",{value:"Sofia"},"Sofia"),r.a.createElement("option",{value:"Plovdiv"},"Plovdiv"),r.a.createElement("option",{value:"Varna"},"Varna"),r.a.createElement("option",{value:"Burgas"},"Burgas"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("h3",null,"Payment methods options:"),r.a.createElement("input",{type:"radio",value:"Card",checked:"Card"===this.state.selectedOptionPayment,onChange:this.radioChangePayment}),"Card",r.a.createElement("input",{type:"radio",value:"PayPal",checked:"PayPal"===this.state.selectedOptionPayment,onChange:this.radioChangePayment}),"PayPal"),"Card"===n?r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"number",name:"card-number",id:"card-number",placeholder:"Card Number"}),r.a.createElement("input",{type:"text",name:"card-date",id:"card-date",placeholder:"MM/YY"}),r.a.createElement("input",{type:"number",name:"cvc",id:"cvc",placeholder:"CVC"})):r.a.createElement("div",null,r.a.createElement("h3",null,"Log in to your PayPal account:"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"E-mail"),r.a.createElement("input",{type:"text",name:"email",id:"email",value:t})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",name:"password",id:"password",value:a}))),r.a.createElement(d.b,{to:"/not-working"},"Complete Order")))}}]),a}(n.Component);var X=function(){return r.a.createElement("div",null,r.a.createElement("h2",{style:{textAlign:"center",marginTop:"3em"}},"Paying for Orders is still not Available!!!"),r.a.createElement(k,null))},Z=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.loadUsers;return r.a.createElement("div",null,r.a.createElement("h2",{style:{textAlign:"center",margin:"2em 0"}},"User List:"),r.a.createElement("div",null,r.a.createElement("ul",null,t.map((function(t){return r.a.createElement("li",{key:t._id,style:{paddingBottom:"1em"}},t.username," with id: ",t._id,"Admin"==t.roles?null:r.a.createElement("span",{style:{paddingLeft:"1em"}},r.a.createElement("button",{onClick:function(a){return e.props.promoteUser(a,t._id)}},"Promote to Admin"),r.a.createElement("button",{onClick:function(a){return e.props.deleteUser(a,t._id)},style:{marginLeft:"1em"}},"Delete User")))})))))}}]),a}(n.Component),$=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={username:"",isAdmin:"",sweets:[],orders:[],cartProducts:[],isLoading:!0,isLoadingCart:!0,ordersLoading:!0,ordersForReviewLoading:!0,pendingOrders:[],loadUsers:""},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="true"===localStorage.getItem("isAdmin");localStorage.getItem("username")&&this.setState({username:localStorage.getItem("username"),isAdmin:t}),F("http://localhost:5000/orders/pending").then((function(t){t&&e.setState({ordersForReviewLoading:!1,pendingOrders:t})})),F("http://localhost:5000/carts/userCart").then((function(t){e.setState({cartProducts:t,isLoadingCart:!1})})),F("http://localhost:5000/orders/user").then((function(t){e.setState({orders:t,ordersLoading:!1})})),F("http://localhost:5000/sweets/all").then((function(t){e.setState({sweets:t,isLoading:!1})})),F("http://localhost:5000/users/all").then((function(t){e.setState({loadUsers:t.data})}))}},{key:"handleChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e,t,a,n){var r=this;e.preventDefault(),M("http://localhost:5000/auth/"+(a?"signup":"login"),t).then((function(e){e.user?(r.setState({username:e.user.username,isAdmin:e.user.isAdmin}),localStorage.setItem("username",e.user.username),localStorage.setItem("isAdmin",e.user.isAdmin),localStorage.setItem("token",e.token),h.b.success("Welcome, ".concat(e.user.username),{closeButton:!1}),F("http://localhost:5000/orders/user").then((function(e){r.setState({orders:e,ordersLoading:!1})})),n.history.push("/")):h.b.error("".concat(e.message),{closeButton:!1})}))}},{key:"handleSubmitCreate",value:function(e,t,a){var n=this;e.preventDefault(),M("http://localhost:5000/sweets/create",t).then((function(e){e.success?(h.b.success("".concat(e.message),{closeButton:!1}),n.setState({isLoading:!0}),F("http://localhost:5000/sweets/all").then((function(e){n.setState({sweets:e,isLoading:!1})})),a.history.push("/store")):h.b.error("".concat(e.message),{closeButton:!1})}))}},{key:"logout",value:function(e){try{e.preventDefault(),localStorage.removeItem("username"),localStorage.removeItem("isAdmin"),localStorage.removeItem("token"),this.setState({username:"",isAdmin:""}),h.b.success("Successful, logout",{closeButton:!1})}catch(t){h.b.error("Something is wrong",{closeButton:!1})}}},{key:"handleMyCartSubmit",value:function(e,t){var a=this;e.preventDefault(),M("http://localhost:5000/orders/submit",t).then((function(e){e.success?(h.b.success("".concat(e.message),{closeButton:!1}),a.setState({orders:e.data,cartProducts:[]}),I("http://localhost:5000/carts/userCartDel")):h.b.error("".concat(e.message),{closeButton:!1})})).then((function(){F("http://localhost:5000/orders/user").then((function(e){a.setState({orders:e,ordersLoading:!1})}))}))}},{key:"addToCartSubmit",value:function(e,t,a){var n=this;e.preventDefault(),M("http://localhost:5000/carts/add",t).then((function(e){e.success?(h.b.success("".concat(e.message),{closeButton:!1}),F("http://localhost:5000/carts/userCart").then((function(e){n.setState({cartProducts:e,isLoadingCart:!1})})),a.history.push("/store")):h.b.error("".concat(e.message),{closeButton:!1})}))}},{key:"handleChangeOfProduct",value:function(e,t,a,n,r){var l=this;e.preventDefault(),"edit"===t?M("http://localhost:5000/sweets/".concat(t,"/").concat(a),n).then((function(e){l.setState({isLoading:!0}),e.success?(h.b.success("".concat(e.message),{closeButton:!1}),F("http://localhost:5000/sweets/all").then((function(e){l.setState({sweets:e,isLoading:!1})})),r.history.push("/store")):h.b.error("".concat(e.message),{closeButton:!1})})):"delete"===t&&I("http://localhost:5000/sweets/".concat(t,"/").concat(a)).then((function(e){l.setState({isLoading:!0}),e.error?h.b.error("".concat(e.message),{closeButton:!1}):(h.b.success("".concat(e.message),{closeButton:!1}),F("http://localhost:5000/sweets/all").then((function(e){l.setState({sweets:e,isLoading:!1})})),r.history.push("/store"))}))}},{key:"handleApproveOrder",value:function(e,t){var a=this;e.preventDefault(),M("http://localhost:5000/orders/approve/".concat(t)).then((function(e){e.success?(h.b.success("".concat(e.message),{closeButton:!1}),F("http://localhost:5000/orders/pending").then((function(e){e&&a.setState({ordersForReviewLoading:!1,pendingOrders:e})}))):h.b.error("".concat(e.message),{closeButton:!1})}))}},{key:"handleCancelOrder",value:function(e,t){var a=this;e.preventDefault(),M("http://localhost:5000/orders/cancel/".concat(t)).then((function(e){e.success?(h.b.success("".concat(e.message),{closeButton:!1}),F("http://localhost:5000/orders/pending").then((function(e){e&&a.setState({ordersForReviewLoading:!1,pendingOrders:e})}))):h.b.error("".concat(e.message),{closeButton:!1})}))}},{key:"promoteUser",value:function(e,t){var a=this;e.preventDefault(),D("http://localhost:5000/users/user/".concat(t)).then((function(e){e.success?(h.b.success("".concat(e.message),{closeButton:!1}),F("http://localhost:5000/users/all").then((function(e){a.setState({loadUsers:e.data})}))):h.b.error("".concat(e.message),{closeButton:!1})}))}},{key:"deleteUser",value:function(e,t){var a=this;e.preventDefault(),I("http://localhost:5000/users/user/".concat(t)).then((function(e){e.success?(h.b.success("".concat(e.message),{closeButton:!1}),F("http://localhost:5000/users/all").then((function(e){a.setState({loadUsers:e.data})}))):h.b.error("".concat(e.message),{closeButton:!1})}))}},{key:"deleteCancelledOrder",value:function(e,t){var a=this;e.preventDefault(),I("http://localhost:5000/orders/deleteorder/".concat(t)).then((function(e){e.success?(h.b.success("".concat(e.message),{closeButton:!1}),F("http://localhost:5000/orders/user").then((function(e){a.setState({orders:e,ordersLoading:!1})}))):h.b.error("".concat(e.message),{closeButton:!1})}))}},{key:"deleteCartProduct",value:function(e,t){var a=this;e.preventDefault(),I("http://localhost:5000/carts/delete/product/".concat(t)).then((function(e){e.success?(h.b.success("".concat(e.message),{closeButton:!1}),F("http://localhost:5000/carts/userCart").then((function(e){a.setState({cartProducts:e})}))):h.b.error("".concat(e.message),{closeButton:!1})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,null,r.a.createElement(n.Fragment,null,r.a.createElement(h.a,null),r.a.createElement(f,{username:this.state.username,isAdmin:this.state.isAdmin,logout:this.logout.bind(this)}),r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/",exact:!0,render:function(t){return r.a.createElement(U,Object.assign({},t,{username:e.state.username,isAdmin:e.state.isAdmin,sweets:e.state.sweets}))}}),r.a.createElement(p.b,{path:"/register",render:function(t){return r.a.createElement(y,Object.assign({},t,{handleSubmit:e.handleSubmit.bind(e),handleChange:e.handleChange}))}}),r.a.createElement(p.b,{path:"/login",render:function(t){return r.a.createElement(C,Object.assign({},t,{handleSubmit:e.handleSubmit.bind(e),handleChange:e.handleChange}))}}),r.a.createElement(p.b,{path:"/order/:id",render:function(t){return e.state.username?r.a.createElement(G,Object.assign({},t,{sweets:e.state.sweets,isAdmin:e.state.isAdmin,addToCartSubmit:e.addToCartSubmit.bind(e)})):r.a.createElement(p.a,{to:{pathname:"/login"}})}}),r.a.createElement(p.b,{render:function(t){return e.state.isAdmin?r.a.createElement(O,Object.assign({},t,{handleSubmitCreate:e.handleSubmitCreate.bind(e),handleChange:e.handleChange})):r.a.createElement(p.a,{to:{pathname:"/login"}})},path:"/create"}),r.a.createElement(p.b,{path:"/store",render:function(t){return r.a.createElement(S,Object.assign({},t,{sweets:e.state.sweets,isLoading:e.state.isLoading,isAdmin:e.state.isAdmin}))}}),r.a.createElement(p.b,{path:"/mycart",render:function(t){return e.state.username?r.a.createElement(R,Object.assign({},t,{username:e.state.username,cartProducts:e.state.cartProducts,isLoadingCart:e.state.isLoadingCart,handleMyCartSubmit:e.handleMyCartSubmit.bind(e),deleteCartProduct:e.deleteCartProduct.bind(e)})):r.a.createElement(p.a,{to:{pathname:"/login"}})}}),r.a.createElement(p.b,{path:"/myorders",render:function(t){return e.state.username?r.a.createElement(V,Object.assign({},t,{username:e.state.username,orders:e.state.orders,ordersLoading:e.state.ordersLoading,deleteCancelledOrder:e.deleteCancelledOrder.bind(e)})):r.a.createElement(p.a,{to:{pathname:"/login"}})}}),r.a.createElement(p.b,{path:"/review-orders",render:function(t){return e.state.isAdmin?r.a.createElement(K,Object.assign({},t,{username:e.state.username,pendingOrders:e.state.pendingOrders,ordersForReviewLoading:e.state.ordersForReviewLoading,handleApproveOrder:e.handleApproveOrder.bind(e),handleCancelOrder:e.handleCancelOrder.bind(e)})):r.a.createElement(p.a,{to:{pathname:"/login"}})}}),r.a.createElement(p.b,{path:"/change/:id",render:function(t){return e.state.isAdmin?r.a.createElement(z,Object.assign({},t,{isAdmin:e.state.isAdmin,handleChangeOfProduct:e.handleChangeOfProduct.bind(e)})):r.a.createElement(p.a,{to:{pathname:"/login"}})}}),r.a.createElement(p.b,{path:"/payment/:id",render:function(t){return e.state.username?r.a.createElement(Q,Object.assign({},t,{handleSubmitCreate:e.handleSubmitCreate.bind(e),handleChange:e.handleChange})):r.a.createElement(p.a,{to:{pathname:"/login"}})}}),r.a.createElement(p.b,{path:"/users",render:function(t){return e.state.isAdmin?r.a.createElement(Z,Object.assign({},t,{isAdmin:e.state.isAdmin,loadUsers:e.state.loadUsers,promoteUser:e.promoteUser.bind(e),deleteUser:e.deleteUser.bind(e)})):r.a.createElement(p.a,{to:{pathname:"/login"}})}}),r.a.createElement(p.b,{path:"/contact",component:_}),r.a.createElement(p.b,{path:"/not-working",component:X}),r.a.createElement(p.b,{component:x})),r.a.createElement(b,null))))}}]),a}(n.Component);c.a.render(r.a.createElement($,null),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.b210fb39.chunk.js.map