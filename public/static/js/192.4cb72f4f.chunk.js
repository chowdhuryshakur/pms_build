(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[192],{2049:function(e,a,t){"use strict";t.r(a);var n=t(21),c=t(1),i=t(10),s=t(0),l=t(1103),o=t(1130),r=t(1070),b=t(1044),m=t(471),d=t(476),j=t(475),u=t(472),g=t(474),O=t(473),p=(t(488),t(492)),f=t(497),h=t(496),x=t(508),C=t.n(x),v=t(509),k=t.n(v),y=t(523),N=t(582),S=t(597),w=t(572),L=t(499),_=t(1012),E=t(494),M=t(1039),B=t(1037),D=t(1038),A=t(861),P=t(463),T=t(517),z=t(6),I=function(e){var a=e.modal,t=e.toggleModal,l=e.ManagerInfo,o=e.setManagerInfo,r=e.resetData,b=e.setReset,m=Object(s.useState)(!1),d=Object(i.a)(m,2),j=d[0],u=d[1],g=Object(s.useState)({email:!1,mobile:!1}),x=Object(i.a)(g,2),C=x[0],v=x[1],k=function(e){var a=/\S+@\S+\.\S+/.test(e.target.value);if("email"===e.target.name&&a&&v(Object(c.a)(Object(c.a)({},C),{},{email:!1})),"email"!==e.target.name||a||v(Object(c.a)(Object(c.a)({},C),{},{email:!0})),"mobile"===e.target.name){if("0"===e.target.value[0])return v(Object(c.a)(Object(c.a)({},C),{},{mobile:!0})),0;if(v(Object(c.a)(Object(c.a)({},C),{},{mobile:!1})),!/^[0-9]*$/.test(e.target.value))return 0}o(Object(c.a)(Object(c.a)({},l),{},Object(n.a)({},e.target.name,e.target.value)))};return Object(z.jsxs)(N.a,{isOpen:a,toggle:t,className:"modal-dialog-centered",children:[Object(z.jsx)(S.a,{toggle:t,children:"Edit Estate Admin Info"}),Object(z.jsx)(w.a,{children:Object(z.jsxs)(L.a,{className:"row",style:{width:"100%"},onSubmit:function(e){e.preventDefault(),console.log(l);var a=l.user_id,n=l.mobile,i=l.email,s=l.full_name,o=l.address;if(!/\S+@\S+\.\S+/.test(i))return v(Object(c.a)(Object(c.a)({},C),{},{email:!0})),0;u(!0),p.a.editEstateManager({estate_manager_id:a,mobile:n,email:i,full_name:s,address:o}).then((function(e){console.log(e),Object(h.b)(e),u(!1),t(),b(!r)})).catch((function(e){Object(h.a)(e),u(!1)}))},autoComplete:"off",children:[Object(z.jsx)(O.a,{md:"12",children:Object(z.jsxs)(_.a,{children:[Object(z.jsx)(E.a,{for:"full_name",children:"Full Name"}),Object(z.jsx)(M.a,{type:"text",id:"full_name",name:"full_name",placeholder:"manager name",value:l.full_name,onChange:k})]})}),Object(z.jsx)(O.a,{md:"12",children:Object(z.jsxs)(_.a,{children:[Object(z.jsx)(E.a,{className:"form-label",for:"mobile",children:"Mobile Number"}),Object(z.jsxs)(B.a,{className:"input-group-merge w-100 mb-1",children:[Object(z.jsx)(D.a,{addonType:"prepend",children:Object(z.jsx)(A.a,{children:f.e})}),Object(z.jsx)(M.a,{autoFocus:!0,type:"text",minLength:10,maxLength:10,id:"mobile",name:"mobile",value:l.mobile,onChange:k,placeholder:"123-456-7899"})]}),C.mobile&&Object(z.jsx)("span",{style:{color:"red",fontSize:"11px"},children:"First digit 0 not allow"})]})}),Object(z.jsx)(O.a,{md:"12",children:Object(z.jsxs)(_.a,{children:[Object(z.jsx)(E.a,{for:"email",children:"Email"}),Object(z.jsx)(M.a,{type:"email",id:"email",name:"email",placeholder:"example@gmail.com",value:l.email,onChange:k}),C.email&&l.email&&Object(z.jsx)("span",{style:{color:"red",fontSize:"11px"},children:"Please Enter a valid Email"})]})}),Object(z.jsxs)(O.a,{md:"12",children:[Object(z.jsx)(E.a,{children:"address"}),Object(z.jsx)(M.a,{type:"text",id:"address",name:"address",placeholder:"address",value:l.address,onChange:k})]}),Object(z.jsx)(O.a,{md:"12 text-center",children:Object(z.jsx)(P.a.Ripple,{className:"mt-2",color:"primary",type:"submit",disabled:j,children:j?Object(z.jsx)(T.a,{size:"sm"}):"Update"})})]})})]})},W=k()(C.a);a.default=function(){var e=Object(s.useState)(!0),a=Object(i.a)(e,2),t=a[0],f=a[1],x=Object(s.useState)(!0),v=Object(i.a)(x,2),k=v[0],N=v[1],S=Object(s.useState)([]),w=Object(i.a)(S,2),L=w[0],_=w[1],E=Object(s.useState)({}),M=Object(i.a)(E,2),B=M[0],D=M[1],A=Object(s.useState)(!1),P=Object(i.a)(A,2),T=P[0],F=P[1];Object(s.useEffect)((function(){p.a.EstateManagerList().then((function(e){console.log(e.data.payload),_(e.data.payload),f(!1)})).catch((function(e){Object(h.a)(e),console.log(e),f(!1)}))}),[k]);var R=[{name:"Name",minWidth:"100px",sortable:!0,selector:"full_name"},{name:"Email",minWidth:"100px",sortable:!0,selector:"email"},{name:"Mobile",minWidth:"100px",sortable:!0,selector:"mobile"},{name:"Address",minWidth:"100px",selector:"address"},{name:"Status",minWidth:"100px",selector:function(e){var a={0:{title:"Blocked",color:"light-danger"},1:{title:"Active",color:"light-success"}};return Object(z.jsx)(b.a,{color:a[e.status].color,pill:!0,className:"px-1",children:a[e.status].title})}},{name:"Action",minWidth:"100px",selector:function(e){return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("span",{title:"Edit",children:Object(z.jsx)(l.a,{size:15,color:"teal",style:{cursor:"pointer"},onClick:function(a){D(e),F(!0)}})}),"\xa0\xa0",e.status?Object(z.jsx)("span",{title:"Block",children:Object(z.jsx)(o.a,{size:15,color:"black",style:{cursor:"pointer"},onClick:function(a){return t=e.user_id,W.fire(Object(n.a)({title:"Are you sure to block?",icon:"warning",allowOutsideClick:!1,allowEscapeKey:!1,showCancelButton:!0,confirmButtonText:"Yes",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"},showLoaderOnConfirm:!0,preConfirm:function(){return p.a.blockEstateManager({estate_manager_id:t}).then((function(e){console.log(e),_(L.map((function(e){return e.user_id===t?Object(c.a)(Object(c.a)({},e),{},{status:0}):e})))})).catch((function(e){Object(h.a)(e),console.log(e)}))},buttonsStyling:!1},"allowOutsideClick",(function(){return!C.a.isLoading()}))).then((function(e){e.isConfirmed}));var t}})}):Object(z.jsx)("span",{title:"Activate",children:Object(z.jsx)(r.a,{size:15,color:"dodgerblue",style:{cursor:"pointer"},onClick:function(a){return t=e.user_id,W.fire(Object(n.a)({title:"Are you sure to activate?",icon:"warning",allowOutsideClick:!1,allowEscapeKey:!1,showCancelButton:!0,confirmButtonText:"Yes",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"},showLoaderOnConfirm:!0,preConfirm:function(){return p.a.activateEstateManager({estate_manager_id:t}).then((function(e){console.log(e),_(L.map((function(e){return e.user_id===t?Object(c.a)(Object(c.a)({},e),{},{status:1}):e})))})).catch((function(e){Object(h.a)(e),console.log(e)}))},buttonsStyling:!1},"allowOutsideClick",(function(){return!C.a.isLoading()}))).then((function(e){e.isConfirmed}));var t}})})]})}}];return Object(z.jsxs)(m.a,{children:[Object(z.jsx)(d.a,{className:"border-bottom",children:Object(z.jsx)(j.a,{tag:"h4",children:"Estate Admin List"})}),Object(z.jsxs)(u.a,{children:[Object(z.jsx)(g.a,{children:Object(z.jsx)(O.a,{md:"12",children:Object(z.jsx)(y.a,{column:R,TableData:L,TableDataLoading:t})})}),Object(z.jsx)(I,{toggleModal:function(){return F(!T)},modal:T,resetData:k,setReset:N,setManagerInfo:D,ManagerInfo:B})]})]})}},523:function(e,a,t){"use strict";var n=t(21),c=t(10),i=t(0),s=t(1073),l=t(517),o=t(495),r=t.n(o),b=t(519),m=t.n(b),d=t(6);a.a=function(e){var a=e.column,t=e.TableData,o=e.TableDataLoading,b=Object(i.useState)(0),j=Object(c.a)(b,2),u=j[0],g=j[1];return Object(d.jsx)(i.Fragment,{children:Object(d.jsx)(m.a,{noHeader:!0,pagination:!0,columns:a,paginationPerPage:15,className:"react-dataTable",sortIcon:Object(d.jsx)(s.a,{size:10}),paginationDefaultPage:u+1,paginationComponent:function(){var e;return Object(d.jsx)(r.a,(e={previousLabel:"",nextLabel:"",forcePage:u,onPageChange:function(e){return function(e){g(e.selected)}(e)},pageCount:t.length?t.length/15:1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link"},Object(n.a)(e,"breakClassName","page-item"),Object(n.a)(e,"breakLinkClassName","page-link"),Object(n.a)(e,"containerClassName","pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"),e))},data:t,progressPending:o,progressComponent:Object(d.jsx)(l.a,{color:"primary"}),responsive:!0})})}}}]);
//# sourceMappingURL=192.4cb72f4f.chunk.js.map