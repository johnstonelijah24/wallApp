(this["webpackJsonpreact-app-tabs"]=this["webpackJsonpreact-app-tabs"]||[]).push([[1],{180:function(e,t,n){e.exports=n.p+"static/media/drinks.2c7c0127.jpg"},181:function(e,t,n){e.exports=n.p+"static/media/food.a074c777.jpg"},183:function(e){e.exports=JSON.parse('{"APP_ID":"IrE3K7p7gViHvB3GtXLCDgM9TctGFZSQ0gaGBB9n","JS_KEY":"RIuC0sCmZTcUAl2XEYlfUZZy8uwul4l2Eb7PuKpn","SERVER_URL":"https://parseapi.back4app.com/"}')},366:function(e,t,n){},370:function(e,t,n){e.exports=n(757)},375:function(e,t,n){var a={"./ion-action-sheet.entry.js":[759,5],"./ion-alert.entry.js":[760,6],"./ion-app_8.entry.js":[761,7],"./ion-avatar_3.entry.js":[762,17],"./ion-back-button.entry.js":[763,18],"./ion-backdrop.entry.js":[764,43],"./ion-button_2.entry.js":[765,19],"./ion-card_5.entry.js":[766,20],"./ion-checkbox.entry.js":[767,21],"./ion-chip.entry.js":[768,22],"./ion-col_3.entry.js":[769,44],"./ion-datetime_3.entry.js":[770,10],"./ion-fab_3.entry.js":[771,23],"./ion-img.entry.js":[772,45],"./ion-infinite-scroll_2.entry.js":[773,46],"./ion-input.entry.js":[774,24],"./ion-item-option_3.entry.js":[775,25],"./ion-item_8.entry.js":[776,26],"./ion-loading.entry.js":[777,27],"./ion-menu_3.entry.js":[778,28],"./ion-modal.entry.js":[779,8],"./ion-nav_2.entry.js":[780,14],"./ion-popover.entry.js":[781,9],"./ion-progress-bar.entry.js":[782,29],"./ion-radio_2.entry.js":[783,30],"./ion-range.entry.js":[784,31],"./ion-refresher_2.entry.js":[785,11],"./ion-reorder_2.entry.js":[786,16],"./ion-ripple-effect.entry.js":[787,47],"./ion-route_4.entry.js":[788,32],"./ion-searchbar.entry.js":[789,33],"./ion-segment_2.entry.js":[790,34],"./ion-select_3.entry.js":[791,35],"./ion-slide_2.entry.js":[792,48],"./ion-spinner.entry.js":[793,13],"./ion-split-pane.entry.js":[794,49],"./ion-tab-bar_2.entry.js":[795,36],"./ion-tab_2.entry.js":[796,15],"./ion-text.entry.js":[797,37],"./ion-textarea.entry.js":[798,38],"./ion-toast.entry.js":[799,39],"./ion-toggle.entry.js":[800,12],"./ion-virtual-scroll.entry.js":[801,50]};function l(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],l=t[0];return n.e(t[1]).then((function(){return n(l)}))}l.keys=function(){return Object.keys(a)},l.id=375,e.exports=l},377:function(e,t,n){var a={"./ion-icon.entry.js":[803,57]};function l(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],l=t[0];return n.e(t[1]).then((function(){return n(l)}))}l.keys=function(){return Object.keys(a)},l.id=377,e.exports=l},615:function(e,t){},617:function(e,t){},629:function(e,t){},631:function(e,t){},658:function(e,t){},660:function(e,t){},661:function(e,t){},666:function(e,t){},668:function(e,t){},687:function(e,t){},699:function(e,t){},702:function(e,t){},744:function(e,t,n){},745:function(e,t,n){},756:function(e,t,n){},757:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(116),c=n.n(r);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(17),i=n(62),u=n(1),m=n(367),s=n(3),E=n(21),d=n(182),p=n.n(d),j=n(183);var f,b=(p.a.initialize(j.APP_ID,j.JS_KEY),p.a.serverURL=j.SERVER_URL,p.a),y=Object(o.b)({key:"userState",default:{authenticated:(null===(f=b.User.current())||void 0===f?void 0:f.authenticated())||!1}}),g=Object(o.b)({key:"modalAtomState",default:!1}),h=Object(o.b)({key:"myProductsList",default:[]}),k=Object(o.b)({key:"allUsersProductsList",default:[]}),v=l.a.memo((function(){var e=Object(o.c)(h),t=Object(s.a)(e,2)[1],n=l.a.useState(),r=Object(s.a)(n,2),c=r[0],m=r[1],d=l.a.useState(),p=Object(s.a)(d,2),j=p[0],f=p[1],g=l.a.useState(!1),k=Object(s.a)(g,2),v=k[0],O=k[1],w=Object(o.c)(y),x=Object(s.a)(w,2),_=x[0],C=x[1],z=Object(a.useCallback)((function(){c&&j?b.User.logIn(c,j).then((function(){C({authenticated:!0}),b.Cloud.run("getCurrentUserProducts").then(t)})).catch((function(){return O(!0)})):O(!0)}),[c,j,t,C]);return _.authenticated?l.a.createElement(i.a,{to:"/MyProducts"}):l.a.createElement(l.a.Fragment,null,l.a.createElement(u.g,null,l.a.createElement(u.z,null,l.a.createElement(u.x,null,"Zaloguj si\u0119!"))),l.a.createElement(u.f,{class:"ion-padding",fullscreen:!0},l.a.createElement(u.u,null,l.a.createElement(u.e,{class:"ion-text-center"},l.a.createElement(u.h,{icon:E.m,style:{fontSize:"70px",color:"#0040ff"}}))),l.a.createElement(u.u,null,l.a.createElement(u.e,null,l.a.createElement(u.j,null,l.a.createElement(u.k,{position:"floating"}," Email"),l.a.createElement(u.i,{onIonChange:function(e){return m(e.detail.value||"")},type:"email",value:c})))),l.a.createElement(u.u,null,l.a.createElement(u.e,null,l.a.createElement(u.j,null,l.a.createElement(u.k,{position:"floating"},"Password"),l.a.createElement(u.i,{onIonChange:function(e){return f(e.detail.value||"")},type:"password",value:j})))),l.a.createElement(u.u,null,l.a.createElement(u.e,{class:"ion-text-center"},l.a.createElement(u.c,{expand:"block",onClick:z},"Login"),l.a.createElement("p",{style:{fontSize:"medium"}},"Don't have an account? ",l.a.createElement(u.s,{routerLink:"/register"},"Register!")))),l.a.createElement(u.y,{color:"danger",duration:2e3,isOpen:v,message:"Niepoprawne dane logowania!",onDidDismiss:function(){return O(!1)}})))})),O=(n(744),l.a.memo((function(){var e=l.a.useState(),t=Object(s.a)(e,2),n=t[0],r=t[1],c=l.a.useState(),m=Object(s.a)(c,2),d=m[0],p=m[1],j=l.a.useState(),f=Object(s.a)(j,2),g=f[0],h=f[1],k=l.a.useState(!1),v=Object(s.a)(k,2),O=v[0],w=v[1],x=Object(o.c)(y),_=Object(s.a)(x,2),C=_[0],z=_[1],S=Object(a.useCallback)((function(){if(n&&g){var e=new b.User;e.set("username",d),e.set("password",g),e.set("email",n),e.signUp().then((function(e){z({authenticated:!0}),console.log("User created successful with name: "+e.get("username")+" and email: "+e.get("email"))})).catch((function(){return w(!0)}))}else w(!0)}),[n,d,g,z]);return C.authenticated?l.a.createElement(i.a,{to:"/MyProducts"}):l.a.createElement(l.a.Fragment,null,l.a.createElement(u.g,null,l.a.createElement(u.z,null,l.a.createElement(u.x,null,"Nowy u\u017cytkownik!"))),l.a.createElement(u.f,{fullscreen:!0,class:"ion-padding"},l.a.createElement(u.u,null,l.a.createElement(u.e,{class:"ion-text-center"},l.a.createElement(u.h,{style:{fontSize:"70px",color:"#0040ff"},icon:E.m}))),l.a.createElement(u.u,null,l.a.createElement(u.e,null,l.a.createElement(u.j,null,l.a.createElement(u.k,{position:"floating"},"User name"),l.a.createElement(u.i,{type:"text",value:d,onIonChange:function(e){return p(e.detail.value||"")}})))),l.a.createElement(u.u,null,l.a.createElement(u.e,null,l.a.createElement(u.j,null,l.a.createElement(u.k,{position:"floating"},"Email"),l.a.createElement(u.i,{type:"email",value:n,onIonChange:function(e){return r(e.detail.value||"")}})))),l.a.createElement(u.u,null,l.a.createElement(u.e,null,l.a.createElement(u.j,null,l.a.createElement(u.k,{position:"floating"},"Password"),l.a.createElement(u.i,{type:"password",value:g,onIonChange:function(e){return h(e.detail.value)}})))),l.a.createElement(u.u,null,l.a.createElement(u.e,{class:"ion-text-center"},l.a.createElement(u.c,{expand:"block",onClick:S},"Register"),l.a.createElement("p",{style:{fontSize:"medium"}},"Already sing up? ",l.a.createElement(u.s,{routerLink:"/login"},"Login!")))),l.a.createElement(u.y,{color:"danger",duration:2e3,isOpen:O,message:"Niepoprawne dane rejestracji!",onDidDismiss:function(){return w(!1)}})))}))),w=l.a.memo((function(){var e=Object(o.c)(y),t=Object(s.a)(e,2)[1],n=Object(o.c)(h),a=Object(s.a)(n,2)[1],r=Object(o.c)(k),c=Object(s.a)(r,2)[1];return l.a.createElement(u.c,{onClick:function(){c([]),a([]),b.User.logOut().then((function(){return t({authenticated:!1})})).catch(console.error)}},l.a.createElement(u.h,{icon:E.j,slot:"icon-only"}))})),x=(n(366),n(180)),_=n.n(x),C=n(181),z=n.n(C),S=l.a.memo((function(){var e=Object(o.c)(k),t=Object(s.a)(e,2),n=t[0],a=t[1],r=l.a.useState(!0),c=Object(s.a)(r,2),i=c[0],m=c[1];return l.a.useEffect((function(){b.Cloud.run("getAllUsersProducts").then(a).then((function(){return m(!1)}))}),[a]),i?l.a.createElement(u.o,{type:"indeterminate"}):l.a.createElement(u.l,null,n.map((function(e){var t;return l.a.createElement(u.j,{key:e.objectId},l.a.createElement(u.b,{slot:"start"},l.a.createElement("img",{alt:"alt",src:"drinks"===e.type?_.a:z.a})),l.a.createElement(u.k,null,l.a.createElement("div",{className:"space-between"},l.a.createElement("div",{className:"row"},l.a.createElement("h2",null,e.name),e.description&&l.a.createElement("h2",null,", ".concat(e.description))),l.a.createElement("p",null,"Ilo\u015b\u0107: ".concat(e.quantity))),l.a.createElement("div",{className:"space-between"},l.a.createElement("p",null,"Dodany przez: ".concat(null===(t=e.createdBy)||void 0===t?void 0:t.username)),l.a.createElement("span",null,"Cena: ".concat(e.price,"z\u0142")),"drinks"===e.type?l.a.createElement("span",null,"Obj\u0119to\u015b\u0107: ".concat(e.volume,"l")):l.a.createElement("span",null,"Waga: ".concat(e.weight,"kg")))))})))})),P=function(){return Object(o.d)(y).authenticated?l.a.createElement(l.a.Fragment,null,l.a.createElement(u.g,null,l.a.createElement(u.z,null,l.a.createElement(u.x,null,"Produkty wszystkich go\u015bci"),l.a.createElement(u.d,{slot:"end"},l.a.createElement(u.c,{color:"success",fill:"outline",routerLink:"/MyProducts",shape:"round"},"Tylko moje!"),l.a.createElement(u.c,{color:"primary",fill:"solid",routerLink:"/AllProducts",shape:"round"},"Wszystkie!"),l.a.createElement(l.a.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement(w,null))))),l.a.createElement(u.f,{fullscreen:!0},l.a.createElement(S,null))):l.a.createElement(i.a,{to:"/login"})},I=n(74),D=n(15),U=(n(745),l.a.memo((function(){var e=Object(o.c)(g),t=Object(s.a)(e,2)[1],n=Object(o.c)(h),r=Object(s.a)(n,2),c=r[0],i=r[1],m=l.a.useState(!1),E=Object(s.a)(m,2),d=E[0],p=E[1],j=l.a.useState("drinks"),f=Object(s.a)(j,2),y=f[0],k=f[1],v=Object(a.useCallback)((function(e){p(!0),e.preventDefault();var n=new FormData(e.target),a=Object.fromEntries(n.entries());b.Cloud.run("createProduct",Object(D.a)(Object(D.a)({},a),{},{productType:y})).then((function(e){var n=e.toJSON(),a=[].concat(Object(I.a)(c),[{price:n.price,type:y,description:n.description,quantity:n.quantity,volume:n.volume,weight:n.weight,name:n.name,objectId:n.objectId,createdBy:n.createdBy}]);i(a),t(!1)})).catch((function(){return p(!1)}))}),[i,c,y,t]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.g,{translucent:!0},l.a.createElement(u.z,null,l.a.createElement(u.x,null,"Dodaj nowy produkt!"),l.a.createElement(u.d,{slot:"end"},l.a.createElement(u.c,{onClick:function(){return t(!1)}},"Zamknij")))),l.a.createElement(u.f,{fullscreen:!0},l.a.createElement("form",{onSubmit:v},l.a.createElement(u.u,null,l.a.createElement(u.e,null,l.a.createElement(u.j,null,l.a.createElement(u.w,{name:"productName",placeholder:"Nazwa produktu:",required:!0})))),l.a.createElement(u.u,null,l.a.createElement(u.e,null,l.a.createElement(u.l,null,l.a.createElement(u.q,{onIonChange:function(e){return k(e.detail.value)},value:y},l.a.createElement(u.m,null,l.a.createElement(u.k,null,"Wybierz rodzaj:")),l.a.createElement(u.j,null,l.a.createElement(u.p,{slot:"start",value:"drinks"}),l.a.createElement(u.k,null,"Nap\xf3j")),l.a.createElement(u.j,null,l.a.createElement(u.p,{slot:"start",value:"food"}),l.a.createElement(u.k,null,"Jedzenie")))))),l.a.createElement(u.u,null,l.a.createElement(u.e,null,l.a.createElement(u.j,null,l.a.createElement(u.k,{position:"floating"},"Ilo\u015b\u0107:"),l.a.createElement(u.i,{min:"1",name:"productQuantity",placeholder:"liczba",required:!0,type:"number"}))),l.a.createElement(u.e,null,"drinks"===y?l.a.createElement(u.j,null,l.a.createElement(u.k,{position:"floating"},"Obj\u0119to\u015b\u0107:"),l.a.createElement(u.i,{min:"1",name:"productVolume",placeholder:"litry",required:!0,type:"number"})):l.a.createElement(u.j,null,l.a.createElement(u.k,{position:"floating"},"Waga:"),l.a.createElement(u.i,{min:"1",name:"productWeight",placeholder:"kg",required:!0,type:"number"}))),l.a.createElement(u.e,null,l.a.createElement(u.j,null,l.a.createElement(u.k,{position:"floating"},"Cena:"),l.a.createElement(u.i,{min:"1",name:"productPrice",placeholder:"z\u0142",required:!0,type:"number"})))),"food"===y&&l.a.createElement(u.u,null,l.a.createElement(u.e,null,l.a.createElement(u.j,null,l.a.createElement(u.w,{name:"productDescription",placeholder:"Opisz sw\xf3j produkt!",required:!0})))),l.a.createElement(u.u,null,l.a.createElement(u.e,null,l.a.createElement(u.c,{disabled:d,expand:"block",type:"submit"},d&&l.a.createElement(u.v,{name:"lines"}),l.a.createElement(u.k,null,"Zapisz")))))))}))),N=l.a.memo((function(){var e=Object(o.c)(g),t=Object(s.a)(e,2)[1],n=Object(o.c)(h),a=Object(s.a)(n,2),r=a[0],c=a[1],i=l.a.useCallback((function(e){var t=function(e,t){return[].concat(Object(I.a)(e.slice(0,t)),Object(I.a)(e.slice(t+1)))}(r,e);c(t)}),[r,c]);return(null===r||void 0===r?void 0:r.length)?l.a.createElement(u.l,null,r.map((function(e,t){return l.a.createElement(u.j,{key:e.objectId},l.a.createElement(u.b,{slot:"start"},l.a.createElement("img",{alt:"alt",src:"drinks"===e.type?_.a:z.a})),l.a.createElement(u.c,{color:"danger",fill:"clear",onClick:function(){return(n=e.objectId,b.Cloud.run("deleteProduct",{objectId:n})).then((function(){return i(t)}));var n},size:"small",slot:"end"},l.a.createElement("span",null,"Usu\u0144")),l.a.createElement(u.k,null,l.a.createElement("h2",null,e.name),l.a.createElement("h3",null,e.description),l.a.createElement("div",{className:"space-between"},l.a.createElement("p",null,"Ilo\u015b\u0107: ".concat(e.quantity)),l.a.createElement("span",null,"Cena: ".concat(e.price,"z\u0142")),"drinks"===e.type?l.a.createElement("span",null,"Obj\u0119to\u015b\u0107: ".concat(e.volume,"l")):l.a.createElement("span",null,"Waga: ".concat(e.weight,"kg")))))}))):l.a.createElement(l.a.Fragment,null,l.a.createElement(u.u,null,l.a.createElement(u.e,{class:"ion-text-center"},l.a.createElement(u.h,{className:"arrow-icon",icon:E.c}))),l.a.createElement(u.u,null,l.a.createElement(u.e,{class:"ion-text-center"},l.a.createElement(u.k,{position:"floating"},"Dodaj produkt aby rozpocz\u0105\u0107!"))),l.a.createElement(u.u,null,l.a.createElement(u.e,{class:"ion-text-center"},l.a.createElement(u.c,{onClick:function(){return t(!0)}},"Dodaj!"))))})),L=function(){var e=Object(o.d)(y),t=Object(o.c)(g),n=Object(s.a)(t,2),a=n[0],r=n[1];return e.authenticated?l.a.createElement(l.a.Fragment,null,l.a.createElement(u.n,{isOpen:a},l.a.createElement(U,null)),l.a.createElement(u.g,null,l.a.createElement(u.z,null,l.a.createElement(u.x,null,"Moje produkty"),l.a.createElement(u.d,{slot:"end"},l.a.createElement(u.c,{color:"success",fill:"solid",onClick:function(){return r(!0)},shape:"round"},l.a.createElement(u.h,{icon:E.a,slot:"start"}),"Dodaj produkt"),l.a.createElement(u.c,{color:"primary",fill:"outline",routerLink:"/AllProducts",shape:"round"},"Wszystkie"),l.a.createElement(l.a.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement(w,null))))),l.a.createElement(u.f,{class:"ion-padding"},l.a.createElement(l.a.Suspense,{fallback:l.a.createElement(u.o,{type:"indeterminate"})},l.a.createElement(N,null)))):l.a.createElement(i.a,{to:"/login"})},q=l.a.memo((function(){return l.a.createElement(u.a,null,l.a.createElement(m.a,null,l.a.createElement(u.t,null,l.a.createElement(i.b,{component:v,exact:!0,path:"/login"}),l.a.createElement(i.b,{component:O,exact:!0,path:"/register"}),l.a.createElement(i.b,{component:P,exact:!0,path:"/AllProducts"}),l.a.createElement(i.b,{component:L,exact:!0,path:"/MyProducts"}),l.a.createElement(i.b,{component:L,exact:!0,path:"/"}))))}));n(746),n(747),n(748),n(749),n(750),n(751),n(752),n(753),n(754),n(755),n(756);Object(u.I)({animated:!0});var F=function(){return l.a.createElement(o.a,null,l.a.createElement(q,null))};c.a.render(l.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[370,3,4]]]);
//# sourceMappingURL=main.35463ff2.chunk.js.map