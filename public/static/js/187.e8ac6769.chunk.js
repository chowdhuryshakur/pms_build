(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[187],{2047:function(e,a,t){"use strict";t.r(a);var n=t(21),c=t(10),s=t(0),i=t(1090),r=t(1159),o=t(472),l=t(477),b=t(475),u=t(471),j=t(474),m=t(473),d=t(484),g=t(493),h=(t(498),t(497)),O=t(511),p=t.n(O),f=t(512),x=t.n(f),_=t(528),C=t(1),v=t(602),N=t(621),k=t(584),y=t(495),B=t(998),L=t(490),w=t(1026),D=t(463),S=t(516),P=t(503),E=t(6),M=function(e){var a=e.modal,t=e.toggleModal,i=e.BranchInfo,r=e.setBranchInfo,o=e.resetData,l=e.setReset,b=Object(s.useState)(!1),u=Object(c.a)(b,2),j=u[0],O=u[1],p=Object(s.useState)([]),f=Object(c.a)(p,2),x=f[0],_=f[1];Object(s.useEffect)((function(){g.a.EstateManagerList().then((function(e){console.log(e.data.payload),_(e.data.payload)})).catch((function(e){Object(h.a)(e),console.log(e)}))}),[]);return Object(E.jsxs)(v.a,{isOpen:a,toggle:t,className:"modal-dialog-centered",children:[Object(E.jsx)(N.a,{toggle:t,children:"Edit Branch"}),Object(E.jsx)(k.a,{children:Object(E.jsxs)(y.a,{className:"row pt-1",style:{width:"100%"},onSubmit:function(e){e.preventDefault(),O(!0);var a=i.id,n=i.estate_manager_id,c=i.branch_name;console.log({sub_estate_manager_id:n,id:a,branch_name:c}),g.a.editEstateBranch({sub_estate_manager_id:n,id:a,branch_name:c}).then((function(e){l(!o),console.log(e),Object(h.b)(e),O(!1),t()})).catch((function(e){Object(h.a)(e),O(!1)}))},autoComplete:"off",children:[Object(E.jsx)(m.a,{md:"12",children:Object(E.jsxs)(B.a,{children:[Object(E.jsx)(L.a,{for:"branch_name",children:"Branch Name"}),Object(E.jsx)(w.a,{required:!0,type:"text",id:"branch_name",name:"branch_name",placeholder:"name",value:i.branch_name,onChange:function(e){r(Object(C.a)(Object(C.a)({},i),{},Object(n.a)({},e.target.name,e.target.value)))}})]})}),Object(E.jsxs)(m.a,{md:"12",children:[Object(E.jsx)(L.a,{children:"Branch Manager"}),Object(E.jsx)(P.a,{theme:d.g,className:"react-select",classNamePrefix:"select",name:"sub_estate_manager_id",onChange:function(e){r(Object(C.a)(Object(C.a)({},i),{},{estate_manager_id:e.value,estate_manager_info:Object(C.a)(Object(C.a)({},i.estate_manager_info),{},{full_name:e.label})}))},options:x.map((function(e){return{value:e.user_id,label:e.full_name}})),value:{value:i.estate_manager_id,label:i.estate_manager_info?i.estate_manager_info.full_name:""},isLoading:!x.length,isClearable:!1})]}),Object(E.jsx)(m.a,{md:"12 text-center",children:Object(E.jsx)(D.a.Ripple,{className:"mt-2",color:"primary",type:"submit",disabled:j,children:j?Object(E.jsx)(S.a,{size:"sm"}):"Submit"})})]})})]})},T=x()(p.a);a.default=function(){var e=Object(s.useState)(!0),a=Object(c.a)(e,2),t=a[0],d=a[1],O=Object(s.useState)(!0),f=Object(c.a)(O,2),x=f[0],C=f[1],v=Object(s.useState)([]),N=Object(c.a)(v,2),k=N[0],y=N[1],B=Object(s.useState)({}),L=Object(c.a)(B,2),w=L[0],D=L[1],S=Object(s.useState)(!1),P=Object(c.a)(S,2),I=P[0],z=P[1];Object(s.useEffect)((function(){g.a.BranchList().then((function(e){console.log(e.data.payload),y(e.data.payload),d(!1)})).catch((function(e){Object(h.a)(e),console.log(e),d(!1)}))}),[x]);var R=[{name:"Branch Name",minWidth:"100px",sortable:!0,selector:"branch_name"},{name:"Manager Name",minWidth:"100px",sortable:!0,selector:function(e){return e.estate_manager_info.full_name}},{name:"Action",minWidth:"100px",selector:function(e){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("span",{title:"Edit",children:Object(E.jsx)(i.a,{size:15,color:"teal",style:{cursor:"pointer"},onClick:function(a){D(e),z(!0)}})}),"\xa0\xa0",Object(E.jsx)("span",{title:"Delete",children:Object(E.jsx)(r.a,{size:15,color:"red",style:{cursor:"pointer"},onClick:function(a){return t=e.id,c="Do you want to delete?",T.fire(Object(n.a)({title:c,text:"You won't be able to revert this",icon:"warning",allowOutsideClick:!1,allowEscapeKey:!1,showCancelButton:!0,confirmButtonText:"Yes",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"},showLoaderOnConfirm:!0,preConfirm:function(){return g.a.deleteBrach({id:t}).then((function(e){Object(h.b)(e),console.log(e),y(k.filter((function(e){return e.id!==t})))})).catch((function(e){console.log(e),Object(h.a)(e)}))},buttonsStyling:!1},"allowOutsideClick",(function(){return!p.a.isLoading()}))).then((function(e){e.isConfirmed}));var t,c}})})]})}}];return Object(E.jsxs)(o.a,{children:[Object(E.jsx)(l.a,{className:"border-bottom",children:Object(E.jsx)(b.a,{tag:"h4",children:"My Branches"})}),Object(E.jsxs)(u.a,{children:[Object(E.jsx)(j.a,{children:Object(E.jsx)(m.a,{md:"12",children:Object(E.jsx)(_.a,{column:R,TableData:k,TableDataLoading:t})})}),Object(E.jsx)(M,{toggleModal:function(){return z(!I)},modal:I,resetData:x,setReset:C,BranchInfo:w,setBranchInfo:D})]})]})}},528:function(e,a,t){"use strict";var n=t(21),c=t(10),s=t(0),i=t(1060),r=t(516),o=t(492),l=t.n(o),b=t(515),u=t.n(b),j=t(6);a.a=function(e){var a=e.column,t=e.TableData,o=e.TableDataLoading,b=Object(s.useState)(0),m=Object(c.a)(b,2),d=m[0],g=m[1];return Object(j.jsx)(s.Fragment,{children:Object(j.jsx)(u.a,{noHeader:!0,pagination:!0,columns:a,paginationPerPage:15,className:"react-dataTable",sortIcon:Object(j.jsx)(i.a,{size:10}),paginationDefaultPage:d+1,paginationComponent:function(){var e;return Object(j.jsx)(l.a,(e={previousLabel:"",nextLabel:"",forcePage:d,onPageChange:function(e){return function(e){g(e.selected)}(e)},pageCount:t.length?t.length/15:1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link"},Object(n.a)(e,"breakClassName","page-item"),Object(n.a)(e,"breakLinkClassName","page-link"),Object(n.a)(e,"containerClassName","pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"),e))},data:t,progressPending:o,progressComponent:Object(j.jsx)(r.a,{color:"primary"}),responsive:!0})})}}}]);
//# sourceMappingURL=187.e8ac6769.chunk.js.map