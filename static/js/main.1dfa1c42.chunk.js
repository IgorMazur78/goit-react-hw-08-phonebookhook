(this["webpackJsonpgoit-react-hw-08-phonebookhook"]=this["webpackJsonpgoit-react-hw-08-phonebookhook"]||[]).push([[1],{114:function(t,e,c){"use strict";c.r(e);var r=c(0),n=c.n(r),a=c(27),o=c.n(a),u=c(24),s=c(9),i=c(20),b=c(40),j=c(129),l=c(132),O=c(133),d=c(2),f=function(){return Object(d.jsx)(j.a,{children:Object(d.jsx)(u.b,{exact:!0,to:"/",children:Object(d.jsx)(l.a,{edge:"start",color:"secondary","aria-label":"menu",children:Object(d.jsx)(O.a,{variant:"h6",children:"Home"})})})})},h=c(54),g=c.n(h),x=c(135),p=c(134),C=c(28);function S(){var t=Object(i.b)(),e=Object(i.c)((function(t){return Object(C.a)(t)}));return Object(d.jsxs)(j.a,{className:g.a.listNavigation,children:[Object(d.jsx)(p.a,{style:{fontSize:40},color:"secondary"}),Object(d.jsxs)(O.a,{variant:"h6",children:["User page :",e]}),Object(d.jsx)(x.a,{color:"secondary",variant:"contained",type:"button",onClick:function(){return t(b.a.logOut())},className:g.a.buttonNavigation,children:"Log Out"})]})}var v=c(139),y=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(v.a,{mr:2,children:Object(d.jsx)(x.a,{color:"secondary",variant:"contained",children:Object(d.jsx)(u.b,{to:"/register",children:"Registers"})})}),Object(d.jsx)(x.a,{color:"secondary",variant:"contained",children:Object(d.jsx)(u.b,{to:"/login",children:"Log in"})})]})})},E=c(136),m=c(137),R=c(72),k=c.n(R);function I(){var t=Object(i.c)((function(t){return Object(C.b)(t)}));return Object(d.jsx)(E.a,{position:"fixed",children:Object(d.jsx)(m.a,{fixed:!0,children:Object(d.jsxs)(j.a,{className:k.a.Toolbar,children:[!t&&Object(d.jsx)(f,{}),t?Object(d.jsx)(S,{}):Object(d.jsx)(y,{})]})})})}var U=c(33),q=c(46);function z(t){var e=t.children,c=Object(q.a)(t,["children"]),r=Object(i.c)((function(t){return Object(C.b)(t)}));return Object(d.jsx)(s.b,Object(U.a)(Object(U.a)({},c),{},{children:r?e:Object(d.jsx)(s.a,{to:"/login"})}))}function N(t){var e=t.children,c=t.restricted,r=Object(q.a)(t,["children","restricted"]),n=Object(i.c)((function(t){return Object(C.b)(t)}));return Object(d.jsx)(s.b,Object(U.a)(Object(U.a)({},r),{},{children:n&&c?Object(d.jsx)(s.a,{to:"/contacts"}):e}))}var _=Object(r.lazy)((function(){return c.e(5).then(c.bind(null,169))})),w=Object(r.lazy)((function(){return Promise.all([c.e(0),c.e(7)]).then(c.bind(null,170))})),L=Object(r.lazy)((function(){return Promise.all([c.e(0),c.e(6)]).then(c.bind(null,171))})),A=Object(r.lazy)((function(){return c.e(4).then(c.bind(null,173))}));function B(){var t=Object(i.b)();return Object(r.useEffect)((function(){t(b.a.getCurrentUser())}),[t]),Object(d.jsx)(u.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(I,{}),Object(d.jsx)(r.Suspense,{fallback:Object(d.jsx)("div",{children:"Loading..."}),children:Object(d.jsxs)(s.d,{children:[Object(d.jsx)(z,{exact:!0,path:"/contacts",children:Object(d.jsx)(A,{})}),Object(d.jsx)(N,{exact:!0,path:"/",restricted:!1,children:Object(d.jsx)(_,{})}),Object(d.jsx)(N,{exact:!0,path:"/register",restricted:!0,children:Object(d.jsx)(w,{})}),Object(d.jsx)(N,{exact:!0,path:"/login",restricted:!0,children:Object(d.jsx)(L,{})})]})})]})})}var T,J,P,D,H,M,Z=c(73),F=c(4),G=c(26),K=c(74),Q=c.n(K),V=c(5),W=c(75),X=c(13),Y=c(17),$=Object(F.c)([],(T={},Object(V.a)(T,Y.a.fetchContactSuccess,(function(t,e){return e.payload})),Object(V.a)(T,Y.a.addContactSuccess,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,c=e.payload,r=t.some((function(t){return t.number===c.number}));return!r&&c.name&&c.number?[].concat(Object(W.a)(t),[c]):(r&&alert("\u0442\u0430\u043a\u0438\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0432\u0436\u0435 \u0454"),""!==c.name&&""!==c.number||alert("\u0432\u043d\u0435\u0441\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u0456"),t)})),Object(V.a)(T,Y.a.deleteContactSuccess,(function(t,e){var c=e.payload;return t.filter((function(t){return t.id!==c}))})),T)),tt=Object(F.c)(!1,(J={},Object(V.a)(J,Y.a.fetchContactRecuest,(function(){return!0})),Object(V.a)(J,Y.a.addContactRecuest,(function(){return!0})),Object(V.a)(J,Y.a.deleteContactRecuest,(function(){return!0})),Object(V.a)(J,Y.a.fetchContactSuccess,(function(){return!1})),Object(V.a)(J,Y.a.addContactSuccess,(function(){return!1})),Object(V.a)(J,Y.a.deleteContactSuccess,(function(){return!1})),Object(V.a)(J,Y.a.fetchContactError,(function(){return!1})),Object(V.a)(J,Y.a.addContactError,(function(){return!1})),Object(V.a)(J,Y.a.deleteContactError,(function(){return!1})),J)),et=Object(F.c)("",Object(V.a)({},Y.a.filterContact,(function(t,e){return e.payload}))),ct=Object(X.c)({itemContacts:$,filter:et,loading:tt}),rt=c(6),nt={name:"",email:""},at=Object(F.c)(nt,(P={},Object(V.a)(P,rt.a.registerSuccess,(function(t,e){return e.payload.user})),Object(V.a)(P,rt.a.logInSuccess,(function(t,e){return e.payload.user})),Object(V.a)(P,rt.a.getCurrentUserSuccess,(function(t,e){return e.payload})),Object(V.a)(P,rt.a.logOutSuccess,(function(){return nt})),P)),ot=Object(F.c)(null,(D={},Object(V.a)(D,rt.a.registerSuccess,(function(t,e){return e.payload.token})),Object(V.a)(D,rt.a.logInSuccess,(function(t,e){return e.payload.token})),Object(V.a)(D,rt.a.logOutSuccess,(function(){return null})),D)),ut=Object(F.c)(!1,(H={},Object(V.a)(H,rt.a.registerSuccess,(function(){return!0})),Object(V.a)(H,rt.a.logInSuccess,(function(){return!0})),Object(V.a)(H,rt.a.getCurrentUserSuccess,(function(){return!0})),Object(V.a)(H,rt.a.registerError,(function(){return!1})),Object(V.a)(H,rt.a.logInError,(function(){return!1})),Object(V.a)(H,rt.a.getCurrentUserError,(function(){return!1})),Object(V.a)(H,rt.a.logOutSuccess,(function(){return!1})),H)),st=Object(F.c)(null,(M={},Object(V.a)(M,rt.a.registerError,(function(t,e){return e.payload})),Object(V.a)(M,rt.a.logInError,(function(t,e){return e.payload})),Object(V.a)(M,rt.a.logOutError,(function(t,e){return e.payload})),Object(V.a)(M,rt.a.getCurrentUserError,(function(t,e){return e.payload})),M)),it=Object(X.c)({user:at,authorized:ut,token:ot,error:st}),bt=F.d,jt={key:"auth",storage:Q.a,whitelist:["token"]},lt=Object(F.a)({reducer:{allContacts:ct,auth:Object(G.g)(jt,it)},middleware:bt({serializableCheck:{ignoredActions:[G.a,G.f,G.b,G.c,G.d,G.e]}})}),Ot=Object(G.h)(lt);o.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(i.a,{store:lt,children:Object(d.jsx)(Z.a,{loading:null,persistor:Ot,children:Object(d.jsx)(B,{})})})}),document.getElementById("root"))},17:function(t,e,c){"use strict";var r=c(4),n=Object(r.b)("contact/addRecuest"),a=Object(r.b)("contact/addSuccess"),o=Object(r.b)("contact/addError"),u=Object(r.b)("contact/fetchRecuest"),s=Object(r.b)("contact/fetchSuccess"),i=Object(r.b)("contact/fetchError"),b=Object(r.b)("contact/deleteContactRecuest"),j=Object(r.b)("contact/deleteContactSuccess"),l=Object(r.b)("contact/deleteContactError"),O=Object(r.b)("contact/filter");e.a={filterContact:O,addContactRecuest:n,addContactSuccess:a,fetchContactSuccess:s,fetchContactRecuest:u,fetchContactError:i,deleteContactRecuest:b,deleteContactSuccess:j,deleteContactError:l,addContactError:o}},28:function(t,e,c){"use strict";c.d(e,"b",(function(){return r})),c.d(e,"a",(function(){return n}));var r=function(t){return t.auth.authorized},n=function(t){return t.auth.user.email}},40:function(t,e,c){"use strict";var r=c(31),n=c.n(r),a=c(6);n.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var o={set:function(t){n.a.defaults.headers.common.Authorization="Bearer ".concat(t)},unset:function(){n.a.defaults.headers.common.Authorization=""}};e.a={register:function(t){return function(e){e(a.a.registerRequest()),n.a.post("/users/signup",t).then((function(t){o.set(t.data.token),e(a.a.registerSuccess(t.data))})).catch((function(t){return a.a.registerError(t.payload)}))}},logIn:function(t){return function(e){e(a.a.logInRequest()),n.a.post("/users/login",t).then((function(t){console.log("LogIn:",t.data.token),o.set(t.data.token),e(a.a.logInSuccess(t.data))})).catch((function(t){return a.a.logInError(t.payload)}))}},logOut:function(){return function(t){t(a.a.logOutRequest()),n.a.post("/users/logout").then((function(){o.unset(),t(a.a.logOutSuccess())})).catch((function(e){return t(a.a.logOutError(e.payload))}))}},getCurrentUser:function(){return function(t,e){var c=e().auth.token;c&&(o.set(c),t(a.a.getCurrentUserRequest()),n.a.get("/users/current").then((function(e){return t(a.a.getCurrentUserSuccess(e.data))})).catch((function(e){return t(a.a.getCurrentUserError(e.payload))})))}},token:o}},54:function(t,e,c){t.exports={listNavigation:"navigation_listNavigation__1zcZ_"}},6:function(t,e,c){"use strict";var r=c(4),n=Object(r.b)("auth/registerRequest"),a=Object(r.b)("auth/registerSuccess"),o=Object(r.b)("auth/registerError"),u=Object(r.b)("auth/logInRequest"),s=Object(r.b)("auth/logInSuccess"),i=Object(r.b)("auth/logInError"),b=Object(r.b)("auth/logOutRequest"),j=Object(r.b)("auth/logOutSuccess"),l=Object(r.b)("auth/logOutError"),O=Object(r.b)("auth/getCurrentUserRequest"),d=Object(r.b)("auth/getCurrentUserSuccess"),f=Object(r.b)("auth/getCurrentUserError");e.a={registerRequest:n,registerSuccess:a,registerError:o,logInRequest:u,logInSuccess:s,logInError:i,logOutRequest:b,logOutSuccess:j,logOutError:l,getCurrentUserRequest:O,getCurrentUserSuccess:d,getCurrentUserError:f}},72:function(t,e,c){t.exports={Toolbar:"appBar_Toolbar__vNDBk"}}},[[114,2,3]]]);
//# sourceMappingURL=main.1dfa1c42.chunk.js.map