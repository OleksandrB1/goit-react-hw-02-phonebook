(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{18:function(t,e,n){},2:function(t,e,n){t.exports={form:"Form_form__1ZTk1",label:"Form_label__3yk3p",button:"Form_button__2blIn"}},3:function(t,e,n){t.exports={listItem:"Contacts_listItem__1U2yt",item:"Contacts_item__1_t8J",button:"Contacts_button__PlMPi"}},31:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(12),i=n.n(c),s=(n(18),n(10)),o=n(4),l=n(5),u=n(7),b=n(6),m=n(13),d=n(2),j=n.n(d),h=n(0),f=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.change=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(m.a)({},a,r))},t.submit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{className:j.a.form,onSubmit:this.submit,children:[Object(h.jsxs)("label",{className:j.a.label,children:["Name",Object(h.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:this.change})]}),Object(h.jsxs)("label",{className:j.a.label,children:["Number",Object(h.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n,onChange:this.change})]}),Object(h.jsx)("button",{className:j.a.button,type:"submit",children:"Add contacts"})]})})}}]),n}(a.Component),p=f,v=n(9),O=n.n(v),x=function(t){var e=t.value,n=t.change;return Object(h.jsxs)("label",{className:O.a.label,children:["Find contacts by name",Object(h.jsx)("input",{className:O.a.input,type:"text",value:e,onChange:n})]})},_=n(3),g=n.n(_),C=function(t){var e=t.list,n=t.remove;return Object(h.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(h.jsxs)("li",{className:g.a.listItem,children:[Object(h.jsxs)("span",{className:g.a.item,children:[a,":"]}),Object(h.jsx)("span",{className:g.a.item,children:r}),Object(h.jsx)("button",{onClick:function(){n(e)},type:"button",className:g.a.button,children:"Delete"})]},e)}))})},y=function(t){Object(u.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(o.a)(this,a);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",name:"",number:""},t.short=n(20),t.addContact=function(e){var n=e.name,a=e.number,r=t.state.contacts,c=t.short.generate;console.log(r.find((function(t){return t.name===n}))),r.find((function(t){return t.name===n}))?alert("".concat(n," is already in contacts.")):t.setState((function(t){var e=t.contacts;return{contacts:[{id:c,name:n,number:a}].concat(Object(s.a)(e))}}))},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.renderList=function(){var e=t.state,n=e.contacts,a=e.filter;return Object(s.a)(n).filter((function(t){return t.name.toLowerCase().includes(a)}))},t.filterState=function(e){t.setState({filter:e.currentTarget.value})},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.addContact,e=this.filterState,n=this.renderList,a=this.removeContact,r=this.state.filter;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(p,{onSubmit:t}),Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)(x,{value:r,change:e}),Object(h.jsx)(C,{list:n(),remove:a})]})}}]),a}(a.Component),S=y,N=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),r(t),c(t),i(t)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root")),N()},9:function(t,e,n){t.exports={label:"Filter_label__IEqfB",input:"Filter_input__3BYD7"}}},[[31,1,2]]]);
//# sourceMappingURL=main.40775ef7.chunk.js.map