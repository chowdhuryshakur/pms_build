(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[197],{2266:function(e,t,a){"use strict";a.r(t);var n=a(21),c=a(1),s=a(10),i=a(0),o=a(1229),r=a(1298),l=a(1256),m=a(1196),d=a(1170),u=a(472),b=a(477),j=a(475),g=a(473),O=a(476),p=a(474),h=a(487),f=a(490),x=a(493),C=a(498),_=a(510),v=a.n(_),y=a(511),k=a.n(y),N=a(518),S=a(563),w=a(575),L=a(554),E=a(494),A=a(1138),B=a(491),M=a(1165),D=a(1163),P=a(1164),T=a(928),z=a(464),W=a(521),I=a(500),F=a(6),R=function(e){var t=e.modal,a=e.toggleModal,o=e.ManagerInfo,r=e.setManagerInfo,l=e.resetData,m=e.setReset,d=Object(i.useRef)(),u=Object(i.useState)([]),b=Object(s.a)(u,2),j=b[0],g=b[1],O=Object(i.useState)(""),_=Object(s.a)(O,2),v=_[0],y=_[1],k=Object(i.useState)(!1),N=Object(s.a)(k,2),R=N[0],Y=N[1],H=Object(i.useState)([]),K=Object(s.a)(H,2),J=K[0],U=K[1];Object(i.useEffect)((function(){f.a.TenantChargesList().then((function(e){console.log(e.data.payload),U(e.data.payload)})).catch((function(e){Object(C.a)(e),console.log(e)}))}),[]);var $=Object(i.useState)(!1),q=Object(s.a)($,2),G=q[0],Q=q[1],V=Object(i.useState)({email:!1,mobile:!1}),X=Object(s.a)(V,2),Z=X[0],ee=X[1],te=function(e){var t=/\S+@\S+\.\S+/.test(e.target.value);if("email"===e.target.name&&t&&ee(Object(c.a)(Object(c.a)({},Z),{},{email:!1})),"email"!==e.target.name||t||ee(Object(c.a)(Object(c.a)({},Z),{},{email:!0})),"mobile"===e.target.name){if("0"===e.target.value[0])return ee(Object(c.a)(Object(c.a)({},Z),{},{mobile:!0})),0;if(ee(Object(c.a)(Object(c.a)({},Z),{},{mobile:!1})),!/^[0-9]*$/.test(e.target.value))return 0}r(Object(c.a)(Object(c.a)({},o),{},Object(n.a)({},e.target.name,e.target.value)))};return Object(F.jsxs)(S.a,{isOpen:t,toggle:a,className:"modal-dialog-centered",children:[Object(F.jsx)(w.a,{toggle:a,children:"Edit Estate Admin Info"}),Object(F.jsx)(L.a,{children:Object(F.jsxs)(E.a,{className:"row",style:{width:"100%"},onSubmit:function(e){e.preventDefault(),console.log(o);var t=o.user_id,n=o.mobile,s=o.email,i=o.full_name,r=o.address,d=o.tenant_charge,u=o.commission_percentage,b=d.id;if(!/\S+@\S+\.\S+/.test(s))return ee(Object(c.a)(Object(c.a)({},Z),{},{email:!0})),0;Q(!0),console.log({estate_manager_id:t,mobile:n,email:s,full_name:i,address:r,per_tenant_charge_id:b,commission_percentage:u}),f.a.editEstateManager({estate_manager_id:t,mobile:n,email:s,full_name:i,address:r,per_tenant_charge_id:b,commission_percentage:u}).then((function(e){console.log(e),Object(C.b)(e),Q(!1),a(),m(!l)})).catch((function(e){Object(C.a)(e),Q(!1)}))},autoComplete:"off",children:[Object(F.jsx)(p.a,{md:"6",children:Object(F.jsxs)(A.a,{children:[Object(F.jsx)(B.a,{for:"full_name",children:"Full Name"}),Object(F.jsx)(M.a,{type:"text",id:"full_name",name:"full_name",placeholder:"manager name",value:o.full_name,onChange:te})]})}),Object(F.jsx)(p.a,{md:"6",children:Object(F.jsxs)(A.a,{children:[Object(F.jsx)(B.a,{className:"form-label",for:"mobile",children:"Mobile Number"}),Object(F.jsxs)(D.a,{className:"input-group-merge w-100 mb-1",children:[Object(F.jsx)(P.a,{addonType:"prepend",children:Object(F.jsx)(T.a,{children:x.e})}),Object(F.jsx)(M.a,{autoFocus:!0,type:"text",minLength:10,maxLength:10,id:"mobile",name:"mobile",value:o.mobile,onChange:te,placeholder:"123-456-7899"})]}),Z.mobile&&Object(F.jsx)("span",{style:{color:"red",fontSize:"11px"},children:"First digit 0 not allow"})]})}),Object(F.jsx)(p.a,{md:"12",children:Object(F.jsxs)(A.a,{children:[Object(F.jsx)(B.a,{for:"email",children:"Email"}),Object(F.jsx)(M.a,{type:"email",id:"email",name:"email",placeholder:"example@gmail.com",value:o.email,onChange:te}),Z.email&&o.email&&Object(F.jsx)("span",{style:{color:"red",fontSize:"11px"},children:"Please Enter a valid Email"})]})}),Object(F.jsxs)(p.a,{md:"12",children:[Object(F.jsx)(B.a,{for:"postcode",children:"Search Address by Post Code"}),Object(F.jsxs)(D.a,{children:[Object(F.jsx)(M.a,{type:"text",id:"postcode",name:"postcode",placeholder:"post code",value:v,onChange:function(e){return y(e.target.value)}}),Object(F.jsx)(P.a,{addonType:"append",children:Object(F.jsx)(z.a,{color:"primary",outline:!0,type:"button",onClick:function(e){e.preventDefault(),Y(!0),f.a.ukAddressEndpoint({postCode:v}).then((function(e){console.log(e.data.payload),g(e.data.payload.addresses.map((function(e){return"".concat(e.building_number,", ").concat(e.thoroughfare,", ").concat(e.locality,", ").concat(e.town_or_city)}))),Y(!1)})).catch((function(e){g([]),Y(!1),Object(C.a)(e)}))},children:R?Object(F.jsx)(W.a,{size:"sm"}):"Search"})})]})]}),Object(F.jsxs)(p.a,{md:"12",children:[Object(F.jsx)(B.a,{children:"Select Address"}),Object(F.jsx)(I.a,{ref:d,theme:h.g,className:"react-select",classNamePrefix:"select",name:"address",onChange:function(e){r(Object(c.a)(Object(c.a)({},o),{},{address:e.value}))},options:j.map((function(e){return{value:e,label:e}})),value:{value:o.address,label:o.address},maxMenuHeight:150,isClearable:!1})]}),Object(F.jsx)(p.a,{md:"6",className:"my-1",children:Object(F.jsxs)(A.a,{children:[Object(F.jsx)(B.a,{for:"commission_percentage",children:"commission_percentage (%)"}),Object(F.jsx)(M.a,{type:"number",min:0,max:99,id:"commission_percentage",name:"commission_percentage",placeholder:"0",value:o.commission_percentage,onChange:te})]})}),Object(F.jsx)(p.a,{md:"6",className:"my-1",children:Object(F.jsxs)(A.a,{children:[Object(F.jsx)(B.a,{for:"per_tenant_charge",children:"Charge Per Tenant "}),o.tenant_charge&&Object(F.jsx)(I.a,{theme:h.g,className:"react-select",classNamePrefix:"select",name:"address",onChange:function(e){r(Object(c.a)(Object(c.a)({},o),{},{tenant_charge:Object(c.a)(Object(c.a)({},o.tenant_charge),{},{id:e.value})}))},maxMenuHeight:100,options:J.map((function(e){return{value:e.id,label:e.charge_name}})),value:J.filter((function(e){return e.id===o.tenant_charge.id})).map((function(e){return{value:e.id,label:e.charge_name}})),isClearable:!1})]})}),Object(F.jsx)(p.a,{md:"12 text-center",children:Object(F.jsx)(z.a.Ripple,{className:"mt-2",color:"primary",type:"submit",disabled:G,children:G?Object(F.jsx)(W.a,{size:"sm"}):"Update"})})]})})]})},Y=k()(v.a);t.default=function(){var e=Object(i.useState)(!0),t=Object(s.a)(e,2),a=t[0],h=t[1],x=Object(i.useState)(!0),_=Object(s.a)(x,2),y=_[0],k=_[1],S=Object(i.useState)([]),w=Object(s.a)(S,2),L=w[0],E=w[1],A=Object(i.useState)({}),B=Object(s.a)(A,2),M=B[0],D=B[1],P=Object(i.useState)(!1),T=Object(s.a)(P,2),z=T[0],W=T[1];Object(i.useEffect)((function(){f.a.EstateAdminsList().then((function(e){console.log(e.data.payload),E(e.data.payload),h(!1)})).catch((function(e){Object(C.a)(e),console.log(e),h(!1)}))}),[y]);var I=[{name:"Name",minWidth:"100px",sortable:!0,selector:"full_name"},{name:"Email",minWidth:"100px",sortable:!0,selector:"email"},{name:"Mobile",minWidth:"100px",sortable:!0,selector:"mobile"},{name:"Address",minWidth:"100px",selector:"address"},{name:"Commission",minWidth:"50px",selector:"commission_percentage"},{name:"Charge",minWidth:"50px",selector:function(e){return e.tenant_charge.charge_name}},{name:"Status",minWidth:"100px",selector:function(e){var t={0:{title:"Blocked",color:"light-danger"},1:{title:"Active",color:"light-success"}};return Object(F.jsx)(d.a,{color:t[e.status].color,pill:!0,className:"px-1",children:t[e.status].title})}},{name:"Action",minWidth:"100px",selector:function(e){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("span",{title:"Edit",children:Object(F.jsx)(o.a,{size:15,color:"teal",style:{cursor:"pointer"},onClick:function(t){D(e),W(!0)}})}),"\xa0\xa0",Object(F.jsx)("span",{title:"Delete",children:Object(F.jsx)(r.a,{size:15,color:"crimson",style:{cursor:"pointer"},onClick:function(t){return a=e.user_id,Y.fire(Object(n.a)({title:"Are you sure to delete?",text:"You won't be able to revert this",icon:"warning",allowOutsideClick:!1,allowEscapeKey:!1,showCancelButton:!0,confirmButtonText:"Yes",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"},showLoaderOnConfirm:!0,preConfirm:function(){return f.a.deleteEstateAdmin({estate_manager_id:a}).then((function(e){console.log(e),E(L.filter((function(e){return e.user_id!==a})))})).catch((function(e){Object(C.a)(e),console.log(e)}))},buttonsStyling:!1},"allowOutsideClick",(function(){return!v.a.isLoading()}))).then((function(e){e.isConfirmed}));var a}})}),"\xa0\xa0",e.status?Object(F.jsx)("span",{title:"Block",children:Object(F.jsx)(l.a,{size:15,color:"black",style:{cursor:"pointer"},onClick:function(t){return a=e.user_id,Y.fire(Object(n.a)({title:"Are you sure to block?",icon:"warning",allowOutsideClick:!1,allowEscapeKey:!1,showCancelButton:!0,confirmButtonText:"Yes",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"},showLoaderOnConfirm:!0,preConfirm:function(){return f.a.blockEstateManager({estate_manager_id:a}).then((function(e){console.log(e),E(L.map((function(e){return e.user_id===a?Object(c.a)(Object(c.a)({},e),{},{status:0}):e})))})).catch((function(e){Object(C.a)(e),console.log(e)}))},buttonsStyling:!1},"allowOutsideClick",(function(){return!v.a.isLoading()}))).then((function(e){e.isConfirmed}));var a}})}):Object(F.jsx)("span",{title:"Activate",children:Object(F.jsx)(m.a,{size:15,color:"dodgerblue",style:{cursor:"pointer"},onClick:function(t){return a=e.user_id,Y.fire(Object(n.a)({title:"Are you sure to activate?",icon:"warning",allowOutsideClick:!1,allowEscapeKey:!1,showCancelButton:!0,confirmButtonText:"Yes",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"},showLoaderOnConfirm:!0,preConfirm:function(){return f.a.activateEstateManager({estate_manager_id:a}).then((function(e){console.log(e),E(L.map((function(e){return e.user_id===a?Object(c.a)(Object(c.a)({},e),{},{status:1}):e})))})).catch((function(e){Object(C.a)(e),console.log(e)}))},buttonsStyling:!1},"allowOutsideClick",(function(){return!v.a.isLoading()}))).then((function(e){e.isConfirmed}));var a}})})]})}}];return Object(F.jsxs)(u.a,{children:[Object(F.jsx)(b.a,{className:"border-bottom",children:Object(F.jsx)(j.a,{tag:"h4",children:"Estate Admin List"})}),Object(F.jsxs)(g.a,{children:[Object(F.jsx)(O.a,{children:Object(F.jsx)(p.a,{md:"12",children:Object(F.jsx)(N.a,{column:I,TableData:L,TableDataLoading:a})})}),Object(F.jsx)(R,{toggleModal:function(){return W(!z)},modal:z,resetData:y,setReset:k,setManagerInfo:D,ManagerInfo:M})]})]})}},518:function(e,t,a){"use strict";var n=a(21),c=a(10),s=a(0),i=a(1199),o=a(521),r=a(495),l=a.n(r),m=a(515),d=a.n(m),u=a(6);t.a=function(e){var t=e.column,a=e.TableData,r=e.TableDataLoading,m=Object(s.useState)(0),b=Object(c.a)(m,2),j=b[0],g=b[1];return Object(u.jsx)(s.Fragment,{children:Object(u.jsx)(d.a,{noHeader:!0,pagination:!0,columns:t,paginationPerPage:15,className:"react-dataTable",sortIcon:Object(u.jsx)(i.a,{size:10}),paginationDefaultPage:j+1,paginationComponent:function(){var e;return Object(u.jsx)(l.a,(e={previousLabel:"",nextLabel:"",forcePage:j,onPageChange:function(e){return function(e){g(e.selected)}(e)},pageCount:a.length?a.length/15:1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link"},Object(n.a)(e,"breakClassName","page-item"),Object(n.a)(e,"breakLinkClassName","page-link"),Object(n.a)(e,"containerClassName","pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"),e))},data:a,progressPending:r,progressComponent:Object(u.jsx)(o.a,{color:"primary"}),responsive:!0})})}}}]);
//# sourceMappingURL=197.f980d35b.chunk.js.map