(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[195],{2266:function(e,a,t){"use strict";t.r(a);var n=t(21),c=t(1),s=t(10),i=t(0),l=t(1228),o=t(1255),r=t(1195),b=t(1170),d=t(472),u=t(477),m=t(475),j=t(473),g=t(476),O=t(474),p=t(487),h=t(490),f=t(493),x=t(498),C=t(510),v=t.n(C),y=t(511),k=t.n(y),S=t(518),N=t(563),_=t(575),w=t(554),L=t(494),E=t(1138),M=t(491),D=t(1165),B=t(1163),P=t(1164),A=t(928),T=t(464),z=t(521),I=t(500),W=t(6),R=function(e){var a=e.modal,t=e.toggleModal,l=e.ManagerInfo,o=e.setManagerInfo,r=e.resetData,b=e.setReset,d=Object(i.useRef)(),u=Object(i.useState)([]),m=Object(s.a)(u,2),j=m[0],g=m[1],C=Object(i.useState)(""),v=Object(s.a)(C,2),y=v[0],k=v[1],S=Object(i.useState)(!1),R=Object(s.a)(S,2),F=R[0],H=R[1],J=Object(i.useState)(!1),K=Object(s.a)(J,2),Y=K[0],U=K[1],$=Object(i.useState)({email:!1,mobile:!1}),q=Object(s.a)($,2),G=q[0],Q=q[1],V=function(e){var a=/\S+@\S+\.\S+/.test(e.target.value);if("email"===e.target.name&&a&&Q(Object(c.a)(Object(c.a)({},G),{},{email:!1})),"email"!==e.target.name||a||Q(Object(c.a)(Object(c.a)({},G),{},{email:!0})),"mobile"===e.target.name&&!/^[0-9]*$/.test(e.target.value))return 0;o(Object(c.a)(Object(c.a)({},l),{},Object(n.a)({},e.target.name,e.target.value)))};return Object(W.jsxs)(N.a,{isOpen:a,toggle:t,className:"modal-dialog-centered",children:[Object(W.jsx)(_.a,{toggle:t,children:"Edit Estate Manager Info"}),Object(W.jsx)(w.a,{children:Object(W.jsxs)(L.a,{className:"row",style:{width:"100%"},onSubmit:function(e){e.preventDefault();var a=l.user_id,n=l.mobile,s=l.email,i=l.full_name,o=l.address;if(!/\S+@\S+\.\S+/.test(s))return Q(Object(c.a)(Object(c.a)({},G),{},{email:!0})),0;console.log({estate_manager_id:a,mobile:11===n.length?n.substring(1):n,email:s,full_name:i,address:o}),U(!0),h.a.editEstateManager({estate_manager_id:a,mobile:11===n.length?n.substring(1):n,email:s,full_name:i,address:o}).then((function(e){console.log(e),Object(x.b)(e),U(!1),t(),b(!r)})).catch((function(e){Object(x.a)(e),U(!1)}))},autoComplete:"off",children:[Object(W.jsx)(O.a,{md:"12",children:Object(W.jsxs)(E.a,{children:[Object(W.jsx)(M.a,{for:"full_name",children:"Full Name"}),Object(W.jsx)(D.a,{type:"text",id:"full_name",name:"full_name",placeholder:"manager name",value:l.full_name,onChange:V})]})}),Object(W.jsx)(O.a,{md:"12",children:Object(W.jsxs)(E.a,{children:[Object(W.jsx)(M.a,{className:"form-label",for:"mobile",children:"Mobile Number"}),Object(W.jsxs)(B.a,{className:"input-group-merge w-100 mb-1",children:[Object(W.jsx)(P.a,{addonType:"prepend",children:Object(W.jsx)(A.a,{children:f.e})}),Object(W.jsx)(D.a,{autoFocus:!0,type:"text",minLength:"0"===String(l.mobile)[0]?11:10,maxLength:"0"===String(l.mobile)[0]?11:10,id:"mobile",name:"mobile",value:l.mobile,onChange:V,placeholder:"123-456-7899"})]})]})}),Object(W.jsx)(O.a,{md:"12",children:Object(W.jsxs)(E.a,{children:[Object(W.jsx)(M.a,{for:"email",children:"Email"}),Object(W.jsx)(D.a,{type:"email",id:"email",name:"email",placeholder:"example@gmail.com",value:l.email,onChange:V}),G.email&&l.email&&Object(W.jsx)("span",{style:{color:"red",fontSize:"11px"},children:"Please Enter a valid Email"})]})}),Object(W.jsxs)(O.a,{md:"12",children:[Object(W.jsx)(M.a,{for:"postcode",children:"Search Address by Post Code"}),Object(W.jsxs)(B.a,{children:[Object(W.jsx)(D.a,{type:"text",id:"postcode",name:"postcode",placeholder:"post code",value:y,onChange:function(e){return k(e.target.value)}}),Object(W.jsx)(P.a,{addonType:"append",children:Object(W.jsx)(T.a,{color:"primary",outline:!0,type:"button",onClick:function(e){e.preventDefault(),H(!0),h.a.ukAddressEndpoint({postCode:y}).then((function(e){console.log(e.data.payload),g(e.data.payload.addresses.map((function(e){return"".concat(e.building_number,", ").concat(e.thoroughfare,", ").concat(e.locality,", ").concat(e.town_or_city)}))),H(!1)})).catch((function(e){g([]),H(!1),Object(x.a)(e)}))},children:F?Object(W.jsx)(z.a,{size:"sm"}):"Search"})})]})]}),Object(W.jsxs)(O.a,{md:"12",children:[Object(W.jsx)(M.a,{children:"Address"}),Object(W.jsx)(I.a,{ref:d,theme:p.g,className:"react-select",classNamePrefix:"select",name:"address",onChange:function(e){o(Object(c.a)(Object(c.a)({},l),{},{address:e.value}))},options:j.map((function(e){return{value:e,label:e}})),value:{value:l.address,label:l.address},maxMenuHeight:150,isClearable:!1})]}),Object(W.jsx)(O.a,{md:"12 text-center",children:Object(W.jsx)(T.a.Ripple,{className:"mt-2",color:"primary",type:"submit",disabled:Y,children:Y?Object(W.jsx)(z.a,{size:"sm"}):"Update"})})]})})]})},F=k()(v.a);a.default=function(){var e=Object(i.useState)(!0),a=Object(s.a)(e,2),t=a[0],p=a[1],f=Object(i.useState)(!0),C=Object(s.a)(f,2),y=C[0],k=C[1],N=Object(i.useState)([]),_=Object(s.a)(N,2),w=_[0],L=_[1],E=Object(i.useState)({}),M=Object(s.a)(E,2),D=M[0],B=M[1],P=Object(i.useState)(!1),A=Object(s.a)(P,2),T=A[0],z=A[1];Object(i.useEffect)((function(){h.a.EstateManagerList().then((function(e){console.log(e.data.payload),L(e.data.payload),p(!1)})).catch((function(e){Object(x.a)(e),console.log(e),p(!1)}))}),[y]);var I=[{name:"Name",minWidth:"100px",sortable:!0,selector:"full_name"},{name:"Email",minWidth:"100px",sortable:!0,selector:"email"},{name:"Mobile",minWidth:"100px",sortable:!0,selector:"mobile"},{name:"Address",minWidth:"100px",selector:"address"},{name:"Status",minWidth:"100px",selector:function(e){var a={0:{title:"Blocked",color:"light-danger"},1:{title:"Active",color:"light-success"}};return Object(W.jsx)(b.a,{color:a[e.status].color,pill:!0,className:"px-1",children:a[e.status].title})}},{name:"Action",minWidth:"100px",selector:function(e){return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("span",{title:"Edit",children:Object(W.jsx)(l.a,{size:15,color:"teal",style:{cursor:"pointer"},onClick:function(a){B(e),z(!0)}})}),"\xa0\xa0",e.status?Object(W.jsx)("span",{title:"Block",children:Object(W.jsx)(o.a,{size:15,color:"black",style:{cursor:"pointer"},onClick:function(a){return t=e.user_id,F.fire(Object(n.a)({title:"Are you sure to block?",icon:"warning",allowOutsideClick:!1,allowEscapeKey:!1,showCancelButton:!0,confirmButtonText:"Yes",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"},showLoaderOnConfirm:!0,preConfirm:function(){return h.a.blockEstateManager({estate_manager_id:t}).then((function(e){console.log(e),L(w.map((function(e){return e.user_id===t?Object(c.a)(Object(c.a)({},e),{},{status:0}):e})))})).catch((function(e){Object(x.a)(e),console.log(e)}))},buttonsStyling:!1},"allowOutsideClick",(function(){return!v.a.isLoading()}))).then((function(e){e.isConfirmed}));var t}})}):Object(W.jsx)("span",{title:"Activate",children:Object(W.jsx)(r.a,{size:15,color:"dodgerblue",style:{cursor:"pointer"},onClick:function(a){return t=e.user_id,F.fire(Object(n.a)({title:"Are you sure to activate?",icon:"warning",allowOutsideClick:!1,allowEscapeKey:!1,showCancelButton:!0,confirmButtonText:"Yes",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"},showLoaderOnConfirm:!0,preConfirm:function(){return h.a.activateEstateManager({estate_manager_id:t}).then((function(e){console.log(e),L(w.map((function(e){return e.user_id===t?Object(c.a)(Object(c.a)({},e),{},{status:1}):e})))})).catch((function(e){Object(x.a)(e),console.log(e)}))},buttonsStyling:!1},"allowOutsideClick",(function(){return!v.a.isLoading()}))).then((function(e){e.isConfirmed}));var t}})})]})}}];return Object(W.jsxs)(d.a,{children:[Object(W.jsx)(u.a,{className:"border-bottom",children:Object(W.jsx)(m.a,{tag:"h4",children:"Estate Manager List"})}),Object(W.jsxs)(j.a,{children:[Object(W.jsx)(g.a,{children:Object(W.jsx)(O.a,{md:"12",children:Object(W.jsx)(S.a,{column:I,TableData:w,TableDataLoading:t})})}),Object(W.jsx)(R,{toggleModal:function(){return z(!T)},modal:T,resetData:y,setReset:k,setManagerInfo:B,ManagerInfo:D})]})]})}},518:function(e,a,t){"use strict";var n=t(21),c=t(10),s=t(0),i=t(1198),l=t(521),o=t(495),r=t.n(o),b=t(515),d=t.n(b),u=t(6);a.a=function(e){var a=e.column,t=e.TableData,o=e.TableDataLoading,b=Object(s.useState)(0),m=Object(c.a)(b,2),j=m[0],g=m[1];return Object(u.jsx)(s.Fragment,{children:Object(u.jsx)(d.a,{noHeader:!0,pagination:!0,columns:a,paginationPerPage:15,className:"react-dataTable",sortIcon:Object(u.jsx)(i.a,{size:10}),paginationDefaultPage:j+1,paginationComponent:function(){var e;return Object(u.jsx)(r.a,(e={previousLabel:"",nextLabel:"",forcePage:j,onPageChange:function(e){return function(e){g(e.selected)}(e)},pageCount:t.length?t.length/15:1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link"},Object(n.a)(e,"breakClassName","page-item"),Object(n.a)(e,"breakLinkClassName","page-link"),Object(n.a)(e,"containerClassName","pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"),e))},data:t,progressPending:o,progressComponent:Object(u.jsx)(l.a,{color:"primary"}),responsive:!0})})}}}]);
//# sourceMappingURL=195.9f9bc227.chunk.js.map