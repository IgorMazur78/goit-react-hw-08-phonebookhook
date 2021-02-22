(this["webpackJsonpgoit-react-hw-08-phonebookhook"]=this["webpackJsonpgoit-react-hw-08-phonebookhook"]||[]).push([[4],{142:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(55);function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,c=!1,a=void 0;try{for(var o,i=t[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(u){c=!0,a=u}finally{try{r||null==i.return||i.return()}finally{if(c)throw a}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},150:function(t,e,n){t.exports={formStyle:"Form_formStyle__3Y0D_",formStyleTitle:"Form_formStyleTitle__r9shw",formStyleFormInput:"Form_formStyleFormInput__1qk77",formStyleFormButton:"Form_formStyleFormButton__q33OF"}},151:function(t,e,n){t.exports={ListContactItem:"Listcontact_ListContactItem__3WJmy",buttonDeleteContact:"Listcontact_buttonDeleteContact__2plXZ"}},152:function(t,e,n){},153:function(t,e,n){t.exports={filter:"Filter_filter__2_OIK",filterInput:"Filter_filterInput__3Mmmw",filterTitle:"Filter_filterTitle__2qZkm"}},154:function(t,e,n){t.exports={phone:"phone_phone__1iaST"}},173:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return D}));var r=n(0),c=n(20),a=n(5),o=n(33),i=n(142),u=n(31),l=n.n(u),s=n(17);l.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var f=function(t){return function(e){e(s.a.addContactRecuest()),l.a.post("/contacts",t).then((function(t){e(s.a.addContactSuccess(t.data))})).catch((function(t){return e(s.a.addContactError(t))}))}},b=function(){return function(t){t(s.a.fetchContactRecuest()),l.a.get("/contacts").then((function(e){console.log(e.data),t(s.a.fetchContactSuccess(e.data))})).catch((function(e){return t(s.a.fetchContactError(e))}))}},j=function(t){return function(e){e(s.a.deleteContactRecuest()),l.a.delete("/contacts/".concat(t)).then((function(){e(s.a.deleteContactSuccess(t))})).catch((function(t){return e(s.a.deleteContactError(t))}))}},m=n(133),h=n(135),d=n(150),O=n.n(d),p=n(2);function x(){var t={name:"",number:""},e=Object(r.useState)(t),n=Object(i.a)(e,2),u=n[0],l=n[1],s=Object(c.b)(),b=function(t){var e=t.target,n=e.name,r=e.value;t.preventDefault(),l(Object(o.a)(Object(o.a)({},u),{},Object(a.a)({},n,r)))};return Object(p.jsxs)("div",{className:O.a.formStyle,children:[Object(p.jsx)(m.a,{variant:"h6",className:O.a.formStyleTitle,children:"Phonebook"}),Object(p.jsxs)("form",{className:O.a.formStyleFormInput,onSubmit:function(e){e.preventDefault(),function(t){s(f(t))}(u),l(t),console.log(u)},children:[Object(p.jsxs)("label",{children:[Object(p.jsx)(m.a,{variant:"h8",children:"Name"}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"text",name:"name",value:u.name,onChange:b,placeholder:"Add name",autoFocus:!0}),Object(p.jsx)("br",{})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)(m.a,{variant:"h8",children:"Number"}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"text",name:"number",value:u.number,onChange:b,placeholder:"Add number",autoFocus:!0})]}),Object(p.jsx)("br",{}),Object(p.jsx)(h.a,{color:"secondary",variant:"contained",type:"submit",children:"Add contact"})]})]})}var v=n(41),y=function(t){return t.allContacts.itemContacts},_=function(t){return t.allContacts.filter},C={getitemContacts:y,getFilter:_,getLoading:function(t){return t.allContacts.loading},getVisibleContact:Object(v.a)([y,_],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}))},g=n(151),S=n.n(g);n(152);function F(){var t=Object(c.b)(),e=Object(c.c)((function(t){return C.getVisibleContact(t)}));return Object(p.jsx)("ul",{children:e.map((function(e){var n=e.id,r=e.name,c=e.number;return Object(p.jsxs)("li",{className:S.a.ListContactItem,children:[Object(p.jsxs)(m.a,{children:[r,":"]}),Object(p.jsx)(m.a,{children:c}),Object(p.jsx)("button",{className:S.a.buttonDeleteContact,onClick:function(){return function(e){return t(j(e))}(n)}})]},n)}))})}var I=n(153),k=n.n(I);function N(){var t=Object(c.b)(),e=Object(c.c)((function(t){return C.getFilter(t)}));return Object(p.jsxs)("form",{className:k.a.filter,children:[Object(p.jsx)(m.a,{variant:"h6",className:k.a.filterTitle,children:"Find contacts by name"}),Object(p.jsx)("input",{className:k.a.filterInput,type:"text",name:"filter",value:e,onChange:function(e){return t(s.a.filterContact(e.target.value))}})]})}var w=n(28),L=n(154),T=n.n(L);function D(){var t=this,e=Object(c.b)(),n=Object(c.c)((function(t){return C.getLoading(t)})),a=Object(c.c)((function(t){return Object(w.b)(t)}));return Object(r.useEffect)((function(){e(b()),a||t.props.history.replace("/login")}),[e,a]),Object(p.jsxs)("div",{className:T.a.phone,children:[n&&Object(p.jsx)("h1",{children:"LOADING ..."}),Object(p.jsx)(x,{}),Object(p.jsx)(N,{}),Object(p.jsx)(F,{})]})}}}]);
//# sourceMappingURL=4.38c4f7a9.chunk.js.map