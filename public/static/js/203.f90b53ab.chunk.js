(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[203],{2112:function(e,a,s){"use strict";s.r(a);var t=s(21),c=s(1),r=s(15),o=s(0),l=s(653),n=s(451),i=(s(911),s(478)),d=(s(485),s(492),s(1406)),j=s(471),b=s(446),u=s(472),m=s(468),O=s(460),p=s(459),h=s(475),f=s(467),x=s(1342),g=s(479),y=s(1369),N=s(476),v=(s(455),s(466)),T=s(481),C=s.n(T),S=s(482),w=s.n(S),z=s(6),k=w()(C.a);a.default=function(){var e=Object(l.g)(),a=Object(o.useState)(!1),s=Object(r.a)(a,2),T=s[0],C=s[1],S=Object(o.useState)(!0),w=Object(r.a)(S,2),P=(w[0],w[1],Object(o.useState)([{value:"",label:""}])),U=Object(r.a)(P,2),M=U[0],E=U[1],R=Object(o.useState)([{value:"",label:""}]),B=Object(r.a)(R,2),L=B[0],q=B[1],H=Object(o.useState)([]),D=Object(r.a)(H,2),F=(D[0],D[1],Object(o.useState)([])),J=Object(r.a)(F,2),A=J[0],W=J[1],G=Object(o.useState)({}),I=Object(r.a)(G,2),K=I[0],Q=I[1],V=Object(o.useState)({userType:!1,userTitle:!1,storeName:!1,email:!1}),X=Object(r.a)(V,2),Y=X[0],Z=X[1],$=Object(o.useState)(0),_=Object(r.a)($,2),ee=(_[0],_[1],Object(o.useState)(!0)),ae=Object(r.a)(ee,2),se=ae[0];ae[1];Object(o.useEffect)((function(){v.a.userRoleList().then((function(e){var a=e.data.payload.map((function(e){return{value:e.id,label:e.statusdesc}}));E(a)})).catch((function(e){console.log(e.response)})),v.a.userTitleList().then((function(e){var a=e.data.payload.map((function(e){return{value:e.id,label:e.statusdesc}}));q(a)})).catch((function(e){console.log(e.response)})),v.a.storeList().then((function(e){var a=e.data.payload.map((function(e){return{value:e.storeid,label:e.storename}}));W(a)})).catch((function(e){console.log(e)}))}),[se]);var te=function(e){var a=/\S+@\S+\.\S+/.test(e.target.value);"Email"===e.target.name&&a&&Z(Object(c.a)(Object(c.a)({},Y),{},{email:!1})),Q(Object(c.a)(Object(c.a)({},K),{},Object(t.a)({},e.target.name,e.target.value)))};return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)(b.a.Ripple,{className:"ml-2 mb-2",color:"primary",tag:n.b,to:"/user",children:[Object(z.jsx)(d.a,{size:10}),Object(z.jsx)("span",{className:"align-middle ml-50",children:"Back"})]}),Object(z.jsxs)(u.a,{children:[Object(z.jsx)(m.a,{className:"border-bottom",children:Object(z.jsx)(O.a,{tag:"h4",children:"Add New Staff"})}),Object(z.jsx)(p.a,{style:{paddingTop:"15px"},children:Object(z.jsxs)(h.a,{className:"row",style:{width:"100%"},onSubmit:function(a){a.preventDefault();var s=K.username,t=K.password,r=K.Email,o=K.firstName,l=K.lastName,n=K.StoreName,i=K.UserType,d=K.UserTitle,j=/\S+@\S+\.\S+/.test(r),b=Object(c.a)({},Y);if(b.email=!j,K.UserType?b.userType=!1:b.userType=!0,K.UserTitle?b.userTitle=!1:b.userTitle=!0,K.StoreName?b.storeName=!1:b.storeName=!0,Z(b),j&&!b.userType&&!b.userTitle&&!b.storeName){C(!0);var u="".concat(o," ").concat(l);v.a.addAdminUser({fullname:u,username:s,password:t,roleid:i,emailid:r,storeid:n,title:d}).then((function(a){console.log(a),k.fire({icon:"success",title:"Done!",text:"The Staff has been added successfully",customClass:{confirmButton:"btn btn-success"}}),setTimeout((function(){e.replace("/user")}),1e3)})).catch((function(e){console.log(e)}))}},autoComplete:"off",children:[Object(z.jsx)(f.a,{sm:"3",children:Object(z.jsxs)(x.a,{children:[Object(z.jsxs)(g.a,{for:"username",children:["Username ",Object(z.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(z.jsx)(y.a,{type:"text",name:"username",id:"username",onChange:te,required:!0,placeholder:"username"})]})}),Object(z.jsx)(f.a,{sm:"3",children:Object(z.jsxs)(x.a,{children:[Object(z.jsxs)(g.a,{for:"password",children:["Password",Object(z.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(z.jsx)(y.a,{type:"password",name:"password",id:"password",onChange:te,required:!0,placeholder:"password"})]})}),Object(z.jsx)(f.a,{sm:"3",children:Object(z.jsxs)(x.a,{children:[Object(z.jsxs)(g.a,{for:"firstName",children:["First Name ",Object(z.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(z.jsx)(y.a,{type:"text",name:"firstName",id:"firstName",onChange:te,required:!0,placeholder:"firstName"})]})}),Object(z.jsx)(f.a,{sm:"3",children:Object(z.jsxs)(x.a,{children:[Object(z.jsxs)(g.a,{for:"lastName",children:["Last Name ",Object(z.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(z.jsx)(y.a,{type:"text",name:"lastName",id:"lastName",onChange:te,required:!0,placeholder:"lastName"})]})}),Object(z.jsx)(f.a,{sm:"3",children:Object(z.jsxs)(x.a,{children:[Object(z.jsx)(g.a,{for:"Email",children:"Email"}),"\xa0",Y.email&&Object(z.jsx)("span",{style:{color:"red",fontSize:"11px"},children:" is not valid"}),Object(z.jsx)(y.a,{type:"email",name:"Email",id:"Email",onChange:te,placeholder:"Example@gmail.com"})]})}),Object(z.jsx)(f.a,{sm:"3",children:Object(z.jsxs)(x.a,{children:[Object(z.jsxs)(g.a,{for:"StoreName",children:["Store Name",Object(z.jsx)("span",{style:{color:"red"},children:"*"})]}),"\xa0",Y.storeName&&Object(z.jsx)("span",{style:{color:"red",fontSize:"11px"},children:"Required"}),Object(z.jsx)(i.a,{theme:j.h,className:"react-select",classNamePrefix:"select",name:"StoreName",onChange:function(e,a){"clear"===a.action?Q(Object(c.a)(Object(c.a)({},K),{},{StoreName:null})):(Z(Object(c.a)(Object(c.a)({},Y),{},{storeName:!1})),Q(Object(c.a)(Object(c.a)({},K),{},{StoreName:e.value})))},options:A,isClearable:!0,isLoading:!1})]})}),Object(z.jsx)(f.a,{sm:"3",children:Object(z.jsxs)(x.a,{children:[Object(z.jsxs)(g.a,{for:"UserType",children:["User Type",Object(z.jsx)("span",{style:{color:"red"},children:"*"})]}),"\xa0",Y.userType&&Object(z.jsx)("span",{style:{color:"red",fontSize:"11px"},children:"Required"}),Object(z.jsx)(i.a,{theme:j.h,className:"react-select",classNamePrefix:"select",name:"UserType",onChange:function(e,a){"clear"===a.action?Q(Object(c.a)(Object(c.a)({},K),{},{UserType:null})):(Z(Object(c.a)(Object(c.a)({},Y),{},{userType:!1})),Q(Object(c.a)(Object(c.a)({},K),{},{UserType:e.value})))},options:M,isClearable:!0,isLoading:!1})]})}),Object(z.jsx)(f.a,{sm:"3",children:Object(z.jsxs)(x.a,{children:[Object(z.jsxs)(g.a,{for:"UserTitle",children:["User Title",Object(z.jsx)("span",{style:{color:"red"},children:"*"})]}),"\xa0",Y.userTitle&&Object(z.jsx)("span",{style:{color:"red",fontSize:"11px"},children:"Required"}),Object(z.jsx)(i.a,{theme:j.h,className:"react-select",classNamePrefix:"select",name:"UserTitle",onChange:function(e,a){"clear"===a.action?Q(Object(c.a)(Object(c.a)({},K),{},{UserTitle:null})):(Z(Object(c.a)(Object(c.a)({},Y),{},{userTitle:!1})),Q(Object(c.a)(Object(c.a)({},K),{},{UserTitle:e.value})))},options:L,isClearable:!0,isLoading:!1})]})}),Object(z.jsx)(f.a,{sm:"3",children:T?Object(z.jsxs)(b.a.Ripple,{color:"primary",className:"mr-1",disabled:!0,style:{marginTop:"25px"},children:[Object(z.jsx)(N.a,{color:"white",size:"sm"}),Object(z.jsx)("span",{className:"ml-50",children:"Loading..."})]}):Object(z.jsx)(b.a.Ripple,{className:"ml-2",color:"primary",type:"submit",style:{marginTop:"25px"},children:Object(z.jsx)("span",{className:"align-middle ml-50",children:"Submit"})})})]})})]})]})}},455:function(e,a,s){"use strict";s.d(a,"a",(function(){return c})),s.d(a,"b",(function(){return r})),s.d(a,"c",(function(){return o}));s(0);var t=s(118),c=function(e){try{var a=e.response;404===a.status||401===a.status||400===a.status||500===a.status?t.f.error(a.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):t.f.error("The server is under maintenance",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(a){t.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},r=function(e){try{var a=e.response;404!==a.status&&401!==a.status&&400!==a.status||t.f.error(a.data.errors?a.data.errors[Object.keys(a.data.errors)[0]]:a.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(a){t.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},o=function(e){var a=e.data.message||"success";t.f.success(a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},459:function(e,a,s){"use strict";var t=s(14),c=s(20),r=s(0),o=s.n(r),l=s(5),n=s.n(l),i=s(56),d=s.n(i),j=s(78),b={tag:j.tagPropType,className:n.a.string,cssModule:n.a.object,innerRef:n.a.oneOfType([n.a.object,n.a.string,n.a.func])},u=function(e){var a=e.className,s=e.cssModule,r=e.innerRef,l=e.tag,n=Object(c.a)(e,["className","cssModule","innerRef","tag"]),i=Object(j.mapToCssModules)(d()(a,"card-body"),s);return o.a.createElement(l,Object(t.a)({},n,{className:i,ref:r}))};u.propTypes=b,u.defaultProps={tag:"div"},a.a=u},467:function(e,a,s){"use strict";var t=s(14),c=s(20),r=s(0),o=s.n(r),l=s(5),n=s.n(l),i=s(56),d=s.n(i),j=s(78),b=n.a.oneOfType([n.a.number,n.a.string]),u=n.a.oneOfType([n.a.bool,n.a.number,n.a.string,n.a.shape({size:n.a.oneOfType([n.a.bool,n.a.number,n.a.string]),order:b,offset:b})]),m={tag:j.tagPropType,xs:u,sm:u,md:u,lg:u,xl:u,className:n.a.string,cssModule:n.a.object,widths:n.a.array},O={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e,a,s){return!0===s||""===s?e?"col":"col-"+a:"auto"===s?e?"col-auto":"col-"+a+"-auto":e?"col-"+s:"col-"+a+"-"+s},h=function(e){var a=e.className,s=e.cssModule,r=e.widths,l=e.tag,n=Object(c.a)(e,["className","cssModule","widths","tag"]),i=[];r.forEach((function(a,t){var c=e[a];if(delete n[a],c||""===c){var r=!t;if(Object(j.isObject)(c)){var o,l=r?"-":"-"+a+"-",b=p(r,a,c.size);i.push(Object(j.mapToCssModules)(d()(((o={})[b]=c.size||""===c.size,o["order"+l+c.order]=c.order||0===c.order,o["offset"+l+c.offset]=c.offset||0===c.offset,o)),s))}else{var u=p(r,a,c);i.push(u)}}})),i.length||i.push("col");var b=Object(j.mapToCssModules)(d()(a,i),s);return o.a.createElement(l,Object(t.a)({},n,{className:b}))};h.propTypes=m,h.defaultProps=O,a.a=h},479:function(e,a,s){"use strict";var t=s(14),c=s(20),r=s(0),o=s.n(r),l=s(5),n=s.n(l),i=s(56),d=s.n(i),j=s(78),b=n.a.oneOfType([n.a.number,n.a.string]),u=n.a.oneOfType([n.a.bool,n.a.string,n.a.number,n.a.shape({size:b,order:b,offset:b})]),m={children:n.a.node,hidden:n.a.bool,check:n.a.bool,size:n.a.string,for:n.a.string,tag:j.tagPropType,className:n.a.string,cssModule:n.a.object,xs:u,sm:u,md:u,lg:u,xl:u,widths:n.a.array},O={tag:"label",widths:["xs","sm","md","lg","xl"]},p=function(e,a,s){return!0===s||""===s?e?"col":"col-"+a:"auto"===s?e?"col-auto":"col-"+a+"-auto":e?"col-"+s:"col-"+a+"-"+s},h=function(e){var a=e.className,s=e.cssModule,r=e.hidden,l=e.widths,n=e.tag,i=e.check,b=e.size,u=e.for,m=Object(c.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),O=[];l.forEach((function(a,t){var c=e[a];if(delete m[a],c||""===c){var r,o=!t;if(Object(j.isObject)(c)){var l,n=o?"-":"-"+a+"-";r=p(o,a,c.size),O.push(Object(j.mapToCssModules)(d()(((l={})[r]=c.size||""===c.size,l["order"+n+c.order]=c.order||0===c.order,l["offset"+n+c.offset]=c.offset||0===c.offset,l))),s)}else r=p(o,a,c),O.push(r)}}));var h=Object(j.mapToCssModules)(d()(a,!!r&&"sr-only",!!i&&"form-check-label",!!b&&"col-form-label-"+b,O,!!O.length&&"col-form-label"),s);return o.a.createElement(n,Object(t.a)({htmlFor:u},m,{className:h}))};h.propTypes=m,h.defaultProps=O,a.a=h},539:function(e,a,s){},911:function(e,a,s){"use strict";var t=s(15),c=s(0),r=s(551),o=s.n(r),l=s(1341),n=s(1377),i=s(1399),d=s(1463),j=s(1400),b=s(1429),u=s(562),m=s(565),O=s(557),p=s(1342),h=s(479),f=s(1367),x=s(1368),g=s(1104),y=s(1369),N=s(446),v=(s(539),s(6));a.a=function(e){var a=e.open,s=e.handleModal,r=Object(c.useState)(new Date),T=Object(t.a)(r,2),C=T[0],S=T[1],w=Object(v.jsx)(l.a,{className:"cursor-pointer",size:15,onClick:s});return Object(v.jsxs)(u.a,{isOpen:a,toggle:s,className:"sidebar-sm",modalClassName:"modal-slide-in",contentClassName:"pt-0",children:[Object(v.jsx)(m.a,{className:"mb-3",toggle:s,close:w,tag:"div",children:Object(v.jsx)("h5",{className:"modal-title",children:"New Record"})}),Object(v.jsxs)(O.a,{className:"flex-grow-1",children:[Object(v.jsxs)(p.a,{children:[Object(v.jsx)(h.a,{for:"full-name",children:"Full Name"}),Object(v.jsxs)(f.a,{children:[Object(v.jsx)(x.a,{addonType:"prepend",children:Object(v.jsx)(g.a,{children:Object(v.jsx)(n.a,{size:15})})}),Object(v.jsx)(y.a,{id:"full-name",placeholder:"Bruce Wayne"})]})]}),Object(v.jsxs)(p.a,{children:[Object(v.jsx)(h.a,{for:"post",children:"Post"}),Object(v.jsxs)(f.a,{children:[Object(v.jsx)(x.a,{addonType:"prepend",children:Object(v.jsx)(g.a,{children:Object(v.jsx)(i.a,{size:15})})}),Object(v.jsx)(y.a,{id:"post",placeholder:"Web Developer"})]})]}),Object(v.jsxs)(p.a,{children:[Object(v.jsx)(h.a,{for:"email",children:"Email"}),Object(v.jsxs)(f.a,{children:[Object(v.jsx)(x.a,{addonType:"prepend",children:Object(v.jsx)(g.a,{children:Object(v.jsx)(d.a,{size:15})})}),Object(v.jsx)(y.a,{type:"email",id:"email",placeholder:"brucewayne@email.com"})]})]}),Object(v.jsxs)(p.a,{children:[Object(v.jsx)(h.a,{for:"joining-date",children:"Joining Date"}),Object(v.jsxs)(f.a,{children:[Object(v.jsx)(x.a,{addonType:"prepend",children:Object(v.jsx)(g.a,{children:Object(v.jsx)(j.a,{size:15})})}),Object(v.jsx)(o.a,{className:"form-control",id:"joining-date",value:C,onChange:function(e){return S(e)}})]})]}),Object(v.jsxs)(p.a,{className:"mb-4",children:[Object(v.jsx)(h.a,{for:"salary",children:"Salary"}),Object(v.jsxs)(f.a,{children:[Object(v.jsx)(x.a,{addonType:"prepend",children:Object(v.jsx)(g.a,{children:Object(v.jsx)(b.a,{size:15})})}),Object(v.jsx)(y.a,{type:"number",id:"salary"})]})]}),Object(v.jsx)(N.a,{className:"mr-1",color:"primary",onClick:s,children:"Submit"}),Object(v.jsx)(N.a,{color:"secondary",onClick:s,outline:!0,children:"Cancel"})]})]})}}}]);
//# sourceMappingURL=203.f90b53ab.chunk.js.map