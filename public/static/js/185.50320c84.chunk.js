(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[185],{2044:function(e,a,t){"use strict";t.r(a);var n=t(1),s=t(10),c=t(0),l=t(1090),i=t(1117),r=t(1057),o=t(1031),j=t(471),b=t(479),d=t(476),m=t(473),u=t(474),g=t(472),O=(t(485),t(494)),p=t(499),h=t(497),x=t(511),f=t.n(x),v=t(512),k=t.n(v),C=t(528),N=t(21),y=t(602),S=t(621),_=t(584),L=t(496),M=t(998),E=t(491),D=t(1026),P=t(1024),z=t(1025),w=t(852),I=t(463),T=t(520),W=t(6),F=function(e){var a=e.modal,t=e.toggleModal,l=e.ManagerInfo,i=e.setManagerInfo,r=e.resetData,o=e.setReset,j=Object(c.useState)(!1),b=Object(s.a)(j,2),d=b[0],m=b[1],u=Object(c.useState)({email:!1,mobile:!1}),x=Object(s.a)(u,2),f=x[0],v=x[1],k=function(e){var a=/\S+@\S+\.\S+/.test(e.target.value);if("email"===e.target.name&&a&&v(Object(n.a)(Object(n.a)({},f),{},{email:!1})),"email"!==e.target.name||a||v(Object(n.a)(Object(n.a)({},f),{},{email:!0})),"mobile"===e.target.name){if("0"===e.target.value[0])return v(Object(n.a)(Object(n.a)({},f),{},{mobile:!0})),0;if(v(Object(n.a)(Object(n.a)({},f),{},{mobile:!1})),!/^[0-9]*$/.test(e.target.value))return 0}i(Object(n.a)(Object(n.a)({},l),{},Object(N.a)({},e.target.name,e.target.value)))};return Object(W.jsxs)(y.a,{isOpen:a,toggle:t,className:"modal-dialog-centered",children:[Object(W.jsx)(S.a,{toggle:t,children:"Edit Estate Manager Info"}),Object(W.jsx)(_.a,{children:Object(W.jsxs)(L.a,{className:"row",style:{width:"100%"},onSubmit:function(e){e.preventDefault(),console.log(l);var a=l.user_id,s=l.mobile,c=l.email,i=l.full_name,j=l.address;if(!/\S+@\S+\.\S+/.test(c))return v(Object(n.a)(Object(n.a)({},f),{},{email:!0})),0;m(!0),O.a.editEstateManager({estate_manager_id:a,mobile:s,email:c,full_name:i,address:j}).then((function(e){console.log(e),Object(h.b)(e),m(!1),t(),o(!r)})).catch((function(e){Object(h.a)(e),m(!1)}))},autoComplete:"off",children:[Object(W.jsx)(g.a,{md:"12",children:Object(W.jsxs)(M.a,{children:[Object(W.jsx)(E.a,{for:"full_name",children:"Full Name"}),Object(W.jsx)(D.a,{type:"text",id:"full_name",name:"full_name",placeholder:"manager name",value:l.full_name,onChange:k})]})}),Object(W.jsx)(g.a,{md:"12",children:Object(W.jsxs)(M.a,{children:[Object(W.jsx)(E.a,{className:"form-label",for:"mobile",children:"Mobile Number"}),Object(W.jsxs)(P.a,{className:"input-group-merge w-100 mb-1",children:[Object(W.jsx)(z.a,{addonType:"prepend",children:Object(W.jsx)(w.a,{children:p.e})}),Object(W.jsx)(D.a,{autoFocus:!0,type:"text",minLength:10,maxLength:10,id:"mobile",name:"mobile",value:l.mobile,onChange:k,placeholder:"123-456-7899"})]}),f.mobile&&Object(W.jsx)("span",{style:{color:"red",fontSize:"11px"},children:"First digit 0 not allow"})]})}),Object(W.jsx)(g.a,{md:"12",children:Object(W.jsxs)(M.a,{children:[Object(W.jsx)(E.a,{for:"email",children:"Email"}),Object(W.jsx)(D.a,{type:"email",id:"email",name:"email",placeholder:"example@gmail.com",value:l.email,onChange:k}),f.email&&l.email&&Object(W.jsx)("span",{style:{color:"red",fontSize:"11px"},children:"Please Enter a valid Email"})]})}),Object(W.jsxs)(g.a,{md:"12",children:[Object(W.jsx)(E.a,{children:"address"}),Object(W.jsx)(D.a,{type:"text",id:"address",name:"address",placeholder:"address",value:l.address,onChange:k})]}),Object(W.jsx)(g.a,{md:"12 text-center",children:Object(W.jsx)(I.a.Ripple,{className:"mt-2",color:"primary",type:"submit",disabled:d,children:d?Object(W.jsx)(T.a,{size:"sm"}):"Update"})})]})})]})};k()(f.a),a.default=function(){var e=Object(c.useState)(!0),a=Object(s.a)(e,2),t=a[0],p=a[1],x=Object(c.useState)(!0),f=Object(s.a)(x,2),v=f[0],k=f[1],N=Object(c.useState)([]),y=Object(s.a)(N,2),S=y[0],_=y[1],L=Object(c.useState)({}),M=Object(s.a)(L,2),E=M[0],D=M[1],P=Object(c.useState)(!1),z=Object(s.a)(P,2),w=z[0],I=z[1];Object(c.useEffect)((function(){O.a.EstateManagerList().then((function(e){console.log(e.data.payload),_(e.data.payload),p(!1)})).catch((function(e){Object(h.a)(e),console.log(e),p(!1)}))}),[v]);var T=[{name:"Name",minWidth:"100px",sortable:!0,selector:"full_name"},{name:"Email",minWidth:"100px",sortable:!0,selector:"email"},{name:"Mobile",minWidth:"100px",sortable:!0,selector:"mobile"},{name:"Address",minWidth:"100px",selector:"address"},{name:"Status",minWidth:"100px",selector:function(e){var a={0:{title:"Blocked",color:"light-danger"},1:{title:"Active",color:"light-success"}};return Object(W.jsx)(o.a,{color:a[e.status].color,pill:!0,className:"px-1",children:a[e.status].title})}},{name:"Action",minWidth:"100px",selector:function(e){return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("span",{title:"Edit",children:Object(W.jsx)(l.a,{size:15,color:"teal",style:{cursor:"pointer"},onClick:function(a){D(e),I(!0)}})}),"\xa0\xa0",e.status?Object(W.jsx)("span",{title:"Block",children:Object(W.jsx)(i.a,{size:15,color:"black",style:{cursor:"pointer"},onClick:function(a){return t=e.user_id,void O.a.blockEstateManager({estate_manager_id:t}).then((function(e){console.log(e),_(S.map((function(e){return e.user_id===t?Object(n.a)(Object(n.a)({},e),{},{status:0}):e})))})).catch((function(e){Object(h.a)(e),console.log(e)}));var t}})}):Object(W.jsx)("span",{title:"Activate",children:Object(W.jsx)(r.a,{size:15,color:"dodgerblue",style:{cursor:"pointer"},onClick:function(a){return t=e.user_id,void O.a.activateEstateManager({estate_manager_id:t}).then((function(e){console.log(e),_(S.map((function(e){return e.user_id===t?Object(n.a)(Object(n.a)({},e),{},{status:1}):e})))})).catch((function(e){Object(h.a)(e),console.log(e)}));var t}})})]})}}];return Object(W.jsxs)(j.a,{children:[Object(W.jsx)(b.a,{className:"border-bottom",children:Object(W.jsx)(d.a,{tag:"h4",children:"Estate Manager List"})}),Object(W.jsxs)(m.a,{children:[Object(W.jsx)(u.a,{children:Object(W.jsx)(g.a,{md:"12",children:Object(W.jsx)(C.a,{column:T,TableData:S,TableDataLoading:t})})}),Object(W.jsx)(F,{toggleModal:function(){return I(!w)},modal:w,resetData:v,setReset:k,setManagerInfo:D,ManagerInfo:E})]})]})}},528:function(e,a,t){"use strict";var n=t(21),s=t(10),c=t(0),l=t(1060),i=t(520),r=t(492),o=t.n(r),j=t(515),b=t.n(j),d=t(6);a.a=function(e){var a=e.column,t=e.TableData,r=e.TableDataLoading,j=Object(c.useState)(0),m=Object(s.a)(j,2),u=m[0],g=m[1];return Object(d.jsx)(c.Fragment,{children:Object(d.jsx)(b.a,{noHeader:!0,pagination:!0,columns:a,paginationPerPage:15,className:"react-dataTable",sortIcon:Object(d.jsx)(l.a,{size:10}),paginationDefaultPage:u+1,paginationComponent:function(){var e;return Object(d.jsx)(o.a,(e={previousLabel:"",nextLabel:"",forcePage:u,onPageChange:function(e){return function(e){g(e.selected)}(e)},pageCount:t.length?t.length/15:1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link"},Object(n.a)(e,"breakClassName","page-item"),Object(n.a)(e,"breakLinkClassName","page-link"),Object(n.a)(e,"containerClassName","pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"),e))},data:t,progressPending:r,progressComponent:Object(d.jsx)(i.a,{color:"primary"}),responsive:!0})})}}}]);
//# sourceMappingURL=185.50320c84.chunk.js.map