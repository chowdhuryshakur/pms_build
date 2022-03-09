(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[191],{2055:function(e,a,t){"use strict";t.r(a);var n=t(21),c=t(1),s=t(10),i=t(0),l=t(1108),r=t(1135),o=t(1075),b=t(1049),m=t(471),j=t(476),d=t(475),u=t(472),g=t(474),O=t(473),p=(t(487),t(492)),f=t(496),h=t(497),x=t(508),C=t.n(x),v=t(509),k=t.n(v),y=t(520),N=t(573),S=t(592),w=t(562),L=t(498),_=t(1017),E=t(495),M=t(1044),B=t(1042),D=t(1043),P=t(861),T=t(463),z=t(518),A=t(6),I=function(e){var a=e.modal,t=e.toggleModal,l=e.ManagerInfo,r=e.setManagerInfo,o=e.resetData,b=e.setReset,m=Object(i.useState)(!1),j=Object(s.a)(m,2),d=j[0],u=j[1],g=Object(i.useState)({email:!1,mobile:!1}),x=Object(s.a)(g,2),C=x[0],v=x[1],k=function(e){var a=/\S+@\S+\.\S+/.test(e.target.value);if("email"===e.target.name&&a&&v(Object(c.a)(Object(c.a)({},C),{},{email:!1})),"email"!==e.target.name||a||v(Object(c.a)(Object(c.a)({},C),{},{email:!0})),"mobile"===e.target.name){if("0"===e.target.value[0])return v(Object(c.a)(Object(c.a)({},C),{},{mobile:!0})),0;if(v(Object(c.a)(Object(c.a)({},C),{},{mobile:!1})),!/^[0-9]*$/.test(e.target.value))return 0}r(Object(c.a)(Object(c.a)({},l),{},Object(n.a)({},e.target.name,e.target.value)))};return Object(A.jsxs)(N.a,{isOpen:a,toggle:t,className:"modal-dialog-centered",children:[Object(A.jsx)(S.a,{toggle:t,children:"Edit Estate Manager Info"}),Object(A.jsx)(w.a,{children:Object(A.jsxs)(L.a,{className:"row",style:{width:"100%"},onSubmit:function(e){e.preventDefault(),console.log(l);var a=l.user_id,n=l.mobile,s=l.email,i=l.full_name,r=l.address;if(!/\S+@\S+\.\S+/.test(s))return v(Object(c.a)(Object(c.a)({},C),{},{email:!0})),0;u(!0),p.a.editEstateManager({estate_manager_id:a,mobile:n,email:s,full_name:i,address:r}).then((function(e){console.log(e),Object(h.b)(e),u(!1),t(),b(!o)})).catch((function(e){Object(h.a)(e),u(!1)}))},autoComplete:"off",children:[Object(A.jsx)(O.a,{md:"12",children:Object(A.jsxs)(_.a,{children:[Object(A.jsx)(E.a,{for:"full_name",children:"Full Name"}),Object(A.jsx)(M.a,{type:"text",id:"full_name",name:"full_name",placeholder:"manager name",value:l.full_name,onChange:k})]})}),Object(A.jsx)(O.a,{md:"12",children:Object(A.jsxs)(_.a,{children:[Object(A.jsx)(E.a,{className:"form-label",for:"mobile",children:"Mobile Number"}),Object(A.jsxs)(B.a,{className:"input-group-merge w-100 mb-1",children:[Object(A.jsx)(D.a,{addonType:"prepend",children:Object(A.jsx)(P.a,{children:f.e})}),Object(A.jsx)(M.a,{autoFocus:!0,type:"text",minLength:10,maxLength:10,id:"mobile",name:"mobile",value:l.mobile,onChange:k,placeholder:"123-456-7899"})]}),C.mobile&&Object(A.jsx)("span",{style:{color:"red",fontSize:"11px"},children:"First digit 0 not allow"})]})}),Object(A.jsx)(O.a,{md:"12",children:Object(A.jsxs)(_.a,{children:[Object(A.jsx)(E.a,{for:"email",children:"Email"}),Object(A.jsx)(M.a,{type:"email",id:"email",name:"email",placeholder:"example@gmail.com",value:l.email,onChange:k}),C.email&&l.email&&Object(A.jsx)("span",{style:{color:"red",fontSize:"11px"},children:"Please Enter a valid Email"})]})}),Object(A.jsxs)(O.a,{md:"12",children:[Object(A.jsx)(E.a,{children:"address"}),Object(A.jsx)(M.a,{type:"text",id:"address",name:"address",placeholder:"address",value:l.address,onChange:k})]}),Object(A.jsx)(O.a,{md:"12 text-center",children:Object(A.jsx)(T.a.Ripple,{className:"mt-2",color:"primary",type:"submit",disabled:d,children:d?Object(A.jsx)(z.a,{size:"sm"}):"Update"})})]})})]})},W=k()(C.a);a.default=function(){var e=Object(i.useState)(!0),a=Object(s.a)(e,2),t=a[0],f=a[1],x=Object(i.useState)(!0),v=Object(s.a)(x,2),k=v[0],N=v[1],S=Object(i.useState)([]),w=Object(s.a)(S,2),L=w[0],_=w[1],E=Object(i.useState)({}),M=Object(s.a)(E,2),B=M[0],D=M[1],P=Object(i.useState)(!1),T=Object(s.a)(P,2),z=T[0],F=T[1];Object(i.useEffect)((function(){p.a.EstateManagerList().then((function(e){console.log(e.data.payload),_(e.data.payload),f(!1)})).catch((function(e){Object(h.a)(e),console.log(e),f(!1)}))}),[k]);var R=[{name:"Name",minWidth:"100px",sortable:!0,selector:"full_name"},{name:"Email",minWidth:"100px",sortable:!0,selector:"email"},{name:"Mobile",minWidth:"100px",sortable:!0,selector:"mobile"},{name:"Address",minWidth:"100px",selector:"address"},{name:"Status",minWidth:"100px",selector:function(e){var a={0:{title:"Blocked",color:"light-danger"},1:{title:"Active",color:"light-success"}};return Object(A.jsx)(b.a,{color:a[e.status].color,pill:!0,className:"px-1",children:a[e.status].title})}},{name:"Action",minWidth:"100px",selector:function(e){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("span",{title:"Edit",children:Object(A.jsx)(l.a,{size:15,color:"teal",style:{cursor:"pointer"},onClick:function(a){D(e),F(!0)}})}),"\xa0\xa0",e.status?Object(A.jsx)("span",{title:"Block",children:Object(A.jsx)(r.a,{size:15,color:"black",style:{cursor:"pointer"},onClick:function(a){return t=e.user_id,W.fire(Object(n.a)({title:"Are you sure to block?",icon:"warning",allowOutsideClick:!1,allowEscapeKey:!1,showCancelButton:!0,confirmButtonText:"Yes",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"},showLoaderOnConfirm:!0,preConfirm:function(){return p.a.blockEstateManager({estate_manager_id:t}).then((function(e){console.log(e),_(L.map((function(e){return e.user_id===t?Object(c.a)(Object(c.a)({},e),{},{status:0}):e})))})).catch((function(e){Object(h.a)(e),console.log(e)}))},buttonsStyling:!1},"allowOutsideClick",(function(){return!C.a.isLoading()}))).then((function(e){e.isConfirmed}));var t}})}):Object(A.jsx)("span",{title:"Activate",children:Object(A.jsx)(o.a,{size:15,color:"dodgerblue",style:{cursor:"pointer"},onClick:function(a){return t=e.user_id,W.fire(Object(n.a)({title:"Are you sure to activate?",icon:"warning",allowOutsideClick:!1,allowEscapeKey:!1,showCancelButton:!0,confirmButtonText:"Yes",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"},showLoaderOnConfirm:!0,preConfirm:function(){return p.a.activateEstateManager({estate_manager_id:t}).then((function(e){console.log(e),_(L.map((function(e){return e.user_id===t?Object(c.a)(Object(c.a)({},e),{},{status:1}):e})))})).catch((function(e){Object(h.a)(e),console.log(e)}))},buttonsStyling:!1},"allowOutsideClick",(function(){return!C.a.isLoading()}))).then((function(e){e.isConfirmed}));var t}})})]})}}];return Object(A.jsxs)(m.a,{children:[Object(A.jsx)(j.a,{className:"border-bottom",children:Object(A.jsx)(d.a,{tag:"h4",children:"Estate Manager List"})}),Object(A.jsxs)(u.a,{children:[Object(A.jsx)(g.a,{children:Object(A.jsx)(O.a,{md:"12",children:Object(A.jsx)(y.a,{column:R,TableData:L,TableDataLoading:t})})}),Object(A.jsx)(I,{toggleModal:function(){return F(!z)},modal:z,resetData:k,setReset:N,setManagerInfo:D,ManagerInfo:B})]})]})}},520:function(e,a,t){"use strict";var n=t(21),c=t(10),s=t(0),i=t(1078),l=t(518),r=t(493),o=t.n(r),b=t(517),m=t.n(b),j=t(6);a.a=function(e){var a=e.column,t=e.TableData,r=e.TableDataLoading,b=Object(s.useState)(0),d=Object(c.a)(b,2),u=d[0],g=d[1];return Object(j.jsx)(s.Fragment,{children:Object(j.jsx)(m.a,{noHeader:!0,pagination:!0,columns:a,paginationPerPage:15,className:"react-dataTable",sortIcon:Object(j.jsx)(i.a,{size:10}),paginationDefaultPage:u+1,paginationComponent:function(){var e;return Object(j.jsx)(o.a,(e={previousLabel:"",nextLabel:"",forcePage:u,onPageChange:function(e){return function(e){g(e.selected)}(e)},pageCount:t.length?t.length/15:1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link"},Object(n.a)(e,"breakClassName","page-item"),Object(n.a)(e,"breakLinkClassName","page-link"),Object(n.a)(e,"containerClassName","pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"),e))},data:t,progressPending:r,progressComponent:Object(j.jsx)(l.a,{color:"primary"}),responsive:!0})})}}}]);
//# sourceMappingURL=191.4fec1443.chunk.js.map