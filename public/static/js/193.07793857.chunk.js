(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[193],{2058:function(e,t,a){"use strict";a.r(t);var n=a(21),c=a(1),s=a(10),i=a(0),l=a(1109),o=a(1136),r=a(1076),b=a(1050),d=a(471),j=a(476),u=a(475),m=a(472),O=a(474),g=a(473),p=a(486),h=a(491),f=a(494),x=a(497),C=a(509),v=a.n(C),y=a(510),k=a.n(y),N=a(519),S=a(559),_=a(575),w=a(554),L=a(495),E=a(1018),M=a(490),D=a(1045),B=a(1043),P=a(1044),A=a(861),T=a(463),z=a(518),I=a(500),W=a(6),F=function(e){var t=e.modal,a=e.toggleModal,l=e.ManagerInfo,o=e.setManagerInfo,r=e.resetData,b=e.setReset,d=Object(i.useRef)(),j=Object(i.useState)([]),u=Object(s.a)(j,2),m=u[0],O=u[1],C=Object(i.useState)(""),v=Object(s.a)(C,2),y=v[0],k=v[1],N=Object(i.useState)(!1),F=Object(s.a)(N,2),R=F[0],H=F[1],J=Object(i.useState)(!1),K=Object(s.a)(J,2),Y=K[0],U=K[1],$=Object(i.useState)({email:!1,mobile:!1}),q=Object(s.a)($,2),G=q[0],Q=q[1],V=function(e){var t=/\S+@\S+\.\S+/.test(e.target.value);if("email"===e.target.name&&t&&Q(Object(c.a)(Object(c.a)({},G),{},{email:!1})),"email"!==e.target.name||t||Q(Object(c.a)(Object(c.a)({},G),{},{email:!0})),"mobile"===e.target.name){if("0"===e.target.value[0])return Q(Object(c.a)(Object(c.a)({},G),{},{mobile:!0})),0;if(Q(Object(c.a)(Object(c.a)({},G),{},{mobile:!1})),!/^[0-9]*$/.test(e.target.value))return 0}o(Object(c.a)(Object(c.a)({},l),{},Object(n.a)({},e.target.name,e.target.value)))};return Object(W.jsxs)(S.a,{isOpen:t,toggle:a,className:"modal-dialog-centered",children:[Object(W.jsx)(_.a,{toggle:a,children:"Edit Estate Manager Info"}),Object(W.jsx)(w.a,{children:Object(W.jsxs)(L.a,{className:"row",style:{width:"100%"},onSubmit:function(e){e.preventDefault(),console.log(l);var t=l.user_id,n=l.mobile,s=l.email,i=l.full_name,o=l.address;if(!/\S+@\S+\.\S+/.test(s))return Q(Object(c.a)(Object(c.a)({},G),{},{email:!0})),0;U(!0),h.a.editEstateManager({estate_manager_id:t,mobile:n,email:s,full_name:i,address:o}).then((function(e){console.log(e),Object(x.b)(e),U(!1),a(),b(!r)})).catch((function(e){Object(x.a)(e),U(!1)}))},autoComplete:"off",children:[Object(W.jsx)(g.a,{md:"12",children:Object(W.jsxs)(E.a,{children:[Object(W.jsx)(M.a,{for:"full_name",children:"Full Name"}),Object(W.jsx)(D.a,{type:"text",id:"full_name",name:"full_name",placeholder:"manager name",value:l.full_name,onChange:V})]})}),Object(W.jsx)(g.a,{md:"12",children:Object(W.jsxs)(E.a,{children:[Object(W.jsx)(M.a,{className:"form-label",for:"mobile",children:"Mobile Number"}),Object(W.jsxs)(B.a,{className:"input-group-merge w-100 mb-1",children:[Object(W.jsx)(P.a,{addonType:"prepend",children:Object(W.jsx)(A.a,{children:f.e})}),Object(W.jsx)(D.a,{autoFocus:!0,type:"text",minLength:10,maxLength:10,id:"mobile",name:"mobile",value:l.mobile,onChange:V,placeholder:"123-456-7899"})]}),G.mobile&&Object(W.jsx)("span",{style:{color:"red",fontSize:"11px"},children:"First digit 0 not allow"})]})}),Object(W.jsx)(g.a,{md:"12",children:Object(W.jsxs)(E.a,{children:[Object(W.jsx)(M.a,{for:"email",children:"Email"}),Object(W.jsx)(D.a,{type:"email",id:"email",name:"email",placeholder:"example@gmail.com",value:l.email,onChange:V}),G.email&&l.email&&Object(W.jsx)("span",{style:{color:"red",fontSize:"11px"},children:"Please Enter a valid Email"})]})}),Object(W.jsxs)(g.a,{md:"12",children:[Object(W.jsx)(M.a,{for:"postcode",children:"Search Address by Post Code"}),Object(W.jsxs)(B.a,{children:[Object(W.jsx)(D.a,{type:"text",id:"postcode",name:"postcode",placeholder:"post code",value:y,onChange:function(e){return k(e.target.value)}}),Object(W.jsx)(P.a,{addonType:"append",children:Object(W.jsx)(T.a,{color:"primary",outline:!0,type:"button",onClick:function(e){e.preventDefault(),H(!0),h.a.ukAddressEndpoint({postCode:y}).then((function(e){console.log(e.data.payload),O(e.data.payload.addresses.map((function(e){return"".concat(e.building_number,", ").concat(e.thoroughfare,", ").concat(e.locality,", ").concat(e.town_or_city)}))),H(!1)})).catch((function(e){O([]),H(!1),Object(x.a)(e)}))},children:R?Object(W.jsx)(z.a,{size:"sm"}):"Search"})})]})]}),Object(W.jsxs)(g.a,{md:"12",children:[Object(W.jsx)(M.a,{children:"Address"}),Object(W.jsx)(I.a,{ref:d,theme:p.g,className:"react-select",classNamePrefix:"select",name:"address",onChange:function(e){o(Object(c.a)(Object(c.a)({},l),{},{address:e.value}))},options:m.map((function(e){return{value:e,label:e}})),value:{value:l.address,label:l.address},maxMenuHeight:150,isClearable:!1})]}),Object(W.jsx)(g.a,{md:"12 text-center",children:Object(W.jsx)(T.a.Ripple,{className:"mt-2",color:"primary",type:"submit",disabled:Y,children:Y?Object(W.jsx)(z.a,{size:"sm"}):"Update"})})]})})]})},R=k()(v.a);t.default=function(){var e=Object(i.useState)(!0),t=Object(s.a)(e,2),a=t[0],p=t[1],f=Object(i.useState)(!0),C=Object(s.a)(f,2),y=C[0],k=C[1],S=Object(i.useState)([]),_=Object(s.a)(S,2),w=_[0],L=_[1],E=Object(i.useState)({}),M=Object(s.a)(E,2),D=M[0],B=M[1],P=Object(i.useState)(!1),A=Object(s.a)(P,2),T=A[0],z=A[1];Object(i.useEffect)((function(){h.a.EstateManagerList().then((function(e){console.log(e.data.payload),L(e.data.payload),p(!1)})).catch((function(e){Object(x.a)(e),console.log(e),p(!1)}))}),[y]);var I=[{name:"Name",minWidth:"100px",sortable:!0,selector:"full_name"},{name:"Email",minWidth:"100px",sortable:!0,selector:"email"},{name:"Mobile",minWidth:"100px",sortable:!0,selector:"mobile"},{name:"Address",minWidth:"100px",selector:"address"},{name:"Status",minWidth:"100px",selector:function(e){var t={0:{title:"Blocked",color:"light-danger"},1:{title:"Active",color:"light-success"}};return Object(W.jsx)(b.a,{color:t[e.status].color,pill:!0,className:"px-1",children:t[e.status].title})}},{name:"Action",minWidth:"100px",selector:function(e){return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("span",{title:"Edit",children:Object(W.jsx)(l.a,{size:15,color:"teal",style:{cursor:"pointer"},onClick:function(t){B(e),z(!0)}})}),"\xa0\xa0",e.status?Object(W.jsx)("span",{title:"Block",children:Object(W.jsx)(o.a,{size:15,color:"black",style:{cursor:"pointer"},onClick:function(t){return a=e.user_id,R.fire(Object(n.a)({title:"Are you sure to block?",icon:"warning",allowOutsideClick:!1,allowEscapeKey:!1,showCancelButton:!0,confirmButtonText:"Yes",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"},showLoaderOnConfirm:!0,preConfirm:function(){return h.a.blockEstateManager({estate_manager_id:a}).then((function(e){console.log(e),L(w.map((function(e){return e.user_id===a?Object(c.a)(Object(c.a)({},e),{},{status:0}):e})))})).catch((function(e){Object(x.a)(e),console.log(e)}))},buttonsStyling:!1},"allowOutsideClick",(function(){return!v.a.isLoading()}))).then((function(e){e.isConfirmed}));var a}})}):Object(W.jsx)("span",{title:"Activate",children:Object(W.jsx)(r.a,{size:15,color:"dodgerblue",style:{cursor:"pointer"},onClick:function(t){return a=e.user_id,R.fire(Object(n.a)({title:"Are you sure to activate?",icon:"warning",allowOutsideClick:!1,allowEscapeKey:!1,showCancelButton:!0,confirmButtonText:"Yes",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"},showLoaderOnConfirm:!0,preConfirm:function(){return h.a.activateEstateManager({estate_manager_id:a}).then((function(e){console.log(e),L(w.map((function(e){return e.user_id===a?Object(c.a)(Object(c.a)({},e),{},{status:1}):e})))})).catch((function(e){Object(x.a)(e),console.log(e)}))},buttonsStyling:!1},"allowOutsideClick",(function(){return!v.a.isLoading()}))).then((function(e){e.isConfirmed}));var a}})})]})}}];return Object(W.jsxs)(d.a,{children:[Object(W.jsx)(j.a,{className:"border-bottom",children:Object(W.jsx)(u.a,{tag:"h4",children:"Estate Manager List"})}),Object(W.jsxs)(m.a,{children:[Object(W.jsx)(O.a,{children:Object(W.jsx)(g.a,{md:"12",children:Object(W.jsx)(N.a,{column:I,TableData:w,TableDataLoading:a})})}),Object(W.jsx)(F,{toggleModal:function(){return z(!T)},modal:T,resetData:y,setReset:k,setManagerInfo:B,ManagerInfo:D})]})]})}},519:function(e,t,a){"use strict";var n=a(21),c=a(10),s=a(0),i=a(1079),l=a(518),o=a(496),r=a.n(o),b=a(515),d=a.n(b),j=a(6);t.a=function(e){var t=e.column,a=e.TableData,o=e.TableDataLoading,b=Object(s.useState)(0),u=Object(c.a)(b,2),m=u[0],O=u[1];return Object(j.jsx)(s.Fragment,{children:Object(j.jsx)(d.a,{noHeader:!0,pagination:!0,columns:t,paginationPerPage:15,className:"react-dataTable",sortIcon:Object(j.jsx)(i.a,{size:10}),paginationDefaultPage:m+1,paginationComponent:function(){var e;return Object(j.jsx)(r.a,(e={previousLabel:"",nextLabel:"",forcePage:m,onPageChange:function(e){return function(e){O(e.selected)}(e)},pageCount:a.length?a.length/15:1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link"},Object(n.a)(e,"breakClassName","page-item"),Object(n.a)(e,"breakLinkClassName","page-link"),Object(n.a)(e,"containerClassName","pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"),e))},data:a,progressPending:o,progressComponent:Object(j.jsx)(l.a,{color:"primary"}),responsive:!0})})}}}]);
//# sourceMappingURL=193.07793857.chunk.js.map