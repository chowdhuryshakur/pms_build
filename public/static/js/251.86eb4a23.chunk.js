(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[251],{2282:function(e,t,a){"use strict";a.r(t);var n=a(21),s=a(15),r=a(0),o=a(1434),c=a(1504),i=a(1371),l=a(472),u=a(468),d=a(460),g=a(446),m=a(459),b=a(465),j=a(467),p=a(451),O=a(466),h=a(455),S=a(481),f=a.n(S),x=a(482),v=a.n(x),k=a(675),C=a(1),R=a(562),P=a(565),y=a(557),K=a(475),U=a(1342),I=a(479),N=a(1369),D=a(476),L=(a(471),a(6)),w=function(e){var t=e.modal,a=e.toggleModal,o=e.pointRuleInfo,c=e.setPointRuleInfo,i=e.setReset,l=e.resetData,u=JSON.parse(localStorage.getItem("customerBusinesses")),d=Object(r.useState)(!1),m=Object(s.a)(d,2),b=m[0],p=m[1],S=Object(r.useState)({email:!1}),f=Object(s.a)(S,2),x=(f[0],f[1],function(e){c(Object(C.a)(Object(C.a)({},o),{},Object(n.a)({},e.target.name,e.target.value)))});return Object(L.jsxs)(R.a,{isOpen:t,toggle:a,className:"modal-dialog-centered",children:[Object(L.jsx)(P.a,{toggle:a,children:"Edit Point Rule"}),Object(L.jsx)(y.a,{children:Object(L.jsxs)(K.a,{className:"row",style:{width:"100%"},onSubmit:function(e){e.preventDefault();var t=o.Id,n=o.SKUAmount,s=o.SKUPoints,r=o.SKUStartRange,c=o.SKUEndRange,d=o.IsRange;localStorage.setItem("usePMStoken",!0),p(!0);var g=u[0].pms_merchantid,m=0;d||(m=n),O.a.updateMyRule(g,{rule_id:t,skuamount:m,skupoints:s,skustartrange:r,skuendrange:c,isrange:d}).then((function(e){i(!l),p(!1),console.log(e),a(),Object(h.c)(e)})).catch((function(e){p(!1),localStorage.setItem("usePMStoken",!1),Object(h.a)(e),console.log(e)}))},autoComplete:"off",children:[Object(L.jsx)(j.a,{sm:"6",children:Object(L.jsxs)(U.a,{children:[Object(L.jsx)(I.a,{for:"SKUPoints",children:"SKU Points"}),Object(L.jsx)(N.a,{type:"number",name:"SKUPoints",id:"SKUPoints",value:o.SKUPoints,onChange:x,required:!0,placeholder:"0"})]})}),Object(L.jsx)(j.a,{sm:"12",className:"mb-1",children:Object(L.jsxs)(U.a,{check:!0,children:[Object(L.jsx)(N.a,{onChange:function(e){e.target.checked?c(Object(C.a)(Object(C.a)({},o),{},{IsRange:!0})):c(Object(C.a)(Object(C.a)({},o),{},{IsRange:!1}))},type:"checkbox",id:"viaEmail",checked:o.IsRange}),Object(L.jsx)(I.a,{for:"viaEmail",check:!0,children:"Is Range"})]})}),o.IsRange?Object(L.jsx)(j.a,{sm:"6",children:Object(L.jsxs)(U.a,{children:[Object(L.jsx)(I.a,{for:"SKUStartRange",children:"SKU Start Range"}),Object(L.jsx)(N.a,{type:"number",name:"SKUStartRange",id:"SKUStartRange",value:o.SKUStartRange,onChange:x,required:!0,placeholder:"0"})]})}):null,o.IsRange?Object(L.jsx)(j.a,{sm:"6",children:Object(L.jsxs)(U.a,{children:[Object(L.jsx)(I.a,{for:"SKUEndRange",children:"SKU End Range"}),Object(L.jsx)(N.a,{type:"number",name:"SKUEndRange",id:"SKUEndRange",value:o.SKUEndRange,onChange:x,required:!0,placeholder:"0"})]})}):null,o.IsRange?null:Object(L.jsx)(j.a,{sm:"6",children:Object(L.jsxs)(U.a,{children:[Object(L.jsx)(I.a,{for:"SKUAmount",children:"SKU Amount"}),Object(L.jsx)(N.a,{type:"number",name:"SKUAmount",id:"SKUAmount",value:o.SKUAmount,onChange:x,required:!0,placeholder:"0"})]})}),Object(L.jsx)(j.a,{sm:"12",className:"text-center",children:b?Object(L.jsxs)(g.a.Ripple,{color:"primary",className:"mr-1",disabled:!0,style:{marginTop:"25px"},children:[Object(L.jsx)(D.a,{color:"white",size:"sm"}),Object(L.jsx)("span",{className:"ml-50",children:"Loading..."})]}):Object(L.jsx)(g.a.Ripple,{className:"ml-2",color:"primary",type:"submit",style:{marginTop:"25px"},children:Object(L.jsx)("span",{children:"Submit"})})})]})})]})},E=a(567),B=v()(f.a);t.default=function(){var e=Object(r.useState)(!0),t=Object(s.a)(e,2),a=t[0],S=t[1],x=Object(r.useState)(!0),v=Object(s.a)(x,2),C=v[0],R=v[1],P=Object(r.useState)([]),y=Object(s.a)(P,2),K=y[0],U=y[1],I=Object(r.useState)({}),N=Object(s.a)(I,2),D=N[0],M=N[1],A=Object(r.useState)(!1),T=Object(s.a)(A,2),W=T[0],H=T[1],_=JSON.parse(localStorage.getItem("customerBusinesses"));Object(r.useEffect)((function(){localStorage.setItem("usePMStoken",!0);var e=_[0].pms_merchantid;O.a.getMyRules(e).then((function(e){console.log(e),U(e.data.data),localStorage.setItem("usePMStoken",!1),S(!1)})).catch((function(e){Object(h.a)(e),console.log(e),S(!1),localStorage.setItem("usePMStoken",!1)}))}),[C]);var z=[{name:"SL.",minWidth:"100px",sortable:!0,cell:function(e,t){return t+1}},{name:"SKU Points",minWidth:"100px",sortable:!0,selector:"SKUPoints"},{name:"Is Range",minWidth:"100px",sortable:!0,selector:function(e){return e.IsRange?"True":"False"}},{name:"SKU Amount",minWidth:"100px",sortable:!0,selector:"SKUAmount"},{name:"SKU Start Range",minWidth:"100px",sortable:!0,selector:"SKUStartRange"},{name:"SKU End Range",minWidth:"100px",sortable:!0,selector:"SKUEndRange"},{name:"Product ID",minWidth:"100px",sortable:!0,selector:"product_id"},{name:"Created At",minWidth:"250px",sortable:!0,selector:function(e){return e.CreatedAt?Object(E.b)(e.CreatedAt):null}},{name:"Action",minWidth:"100px",selector:function(e){return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("span",{title:"Edit",children:Object(L.jsx)(o.a,{size:15,color:"teal",style:{cursor:"pointer"},onClick:function(t){M(e),H(!0)}})}),"\xa0\xa0",Object(L.jsx)("span",{title:"Delete",children:Object(L.jsx)(c.a,{size:15,color:"red",style:{cursor:"pointer"},onClick:function(t){return a=e.Id,s="Do you want to delete?",localStorage.setItem("usePMStoken",!0),B.fire(Object(n.a)({title:s,text:"You won't be able to revert this",icon:"warning",allowOutsideClick:!1,allowEscapeKey:!1,showCancelButton:!0,confirmButtonText:"Yes",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"},showLoaderOnConfirm:!0,preConfirm:function(){var e=_[0].pms_merchantid,t=parseInt(a);return O.a.deleteMyRule(e,{rule_id:t}).then((function(e){Object(h.c)(e),console.log(e),U(K.filter((function(e){return e.Id!==a}))),localStorage.setItem("usePMStoken",!1)})).catch((function(e){localStorage.setItem("usePMStoken",!1),console.log(e.response),Object(h.a)(e)}))},buttonsStyling:!1},"allowOutsideClick",(function(){return!f.a.isLoading()}))).then((function(e){e.isConfirmed}));var a,s}})})]})}}];return Object(L.jsxs)(l.a,{children:[Object(L.jsxs)(u.a,{className:"border-bottom",children:[Object(L.jsx)(d.a,{tag:"h4",children:"SKU Rules"}),Object(L.jsx)(g.a.Ripple,{className:"ml-2",color:"primary",tag:p.b,to:"/createPointRule",children:Object(L.jsxs)("div",{className:"d-flex align-items-center",children:[Object(L.jsx)(i.a,{size:17,style:{marginRight:"5px"}}),Object(L.jsx)("span",{children:"Create SKU Rule"})]})})]}),Object(L.jsxs)(m.a,{children:[Object(L.jsx)(b.a,{children:Object(L.jsx)(j.a,{md:"12",children:Object(L.jsx)(k.a,{column:z,TableData:K,TableDataLoading:a})})}),Object(L.jsx)(w,{toggleModal:function(){return H(!W)},modal:W,resetData:C,setReset:R,pointRuleInfo:D,setPointRuleInfo:M})]})]})}},455:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return o}));a(0);var n=a(118),s=function(e){try{var t=e.response;404===t.status||401===t.status||400===t.status||500===t.status?n.f.error(t.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):n.f.error("The server is under maintenance",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(t){n.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},r=function(e){try{var t=e.response;404!==t.status&&401!==t.status&&400!==t.status||n.f.error(t.data.errors?t.data.errors[Object.keys(t.data.errors)[0]]:t.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(t){n.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},o=function(e){var t=e.data.message||"success";n.f.success(t,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},567:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return o}));var n=function(e){return String(e).replace(/^(.{4})(.*)(.{3})$/,"$1 $2 $3")},s={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"},r=function(e){return new Date(e).toLocaleDateString(void 0,s)},o=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},675:function(e,t,a){"use strict";var n=a(21),s=a(15),r=a(0),o=a(1405),c=a(476),i=a(485),l=a.n(i),u=a(492),d=a.n(u),g=a(6);t.a=function(e){var t=e.column,a=e.TableData,i=e.TableDataLoading,u=Object(r.useState)(0),m=Object(s.a)(u,2),b=m[0],j=m[1];return Object(g.jsx)(r.Fragment,{children:Object(g.jsx)(d.a,{noHeader:!0,pagination:!0,columns:t,paginationPerPage:10,className:"react-dataTable",sortIcon:Object(g.jsx)(o.a,{size:10}),paginationDefaultPage:b+1,paginationComponent:function(){var e;return Object(g.jsx)(l.a,(e={previousLabel:"",nextLabel:"",forcePage:b,onPageChange:function(e){return function(e){j(e.selected)}(e)},pageCount:a.length?a.length/10:1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link"},Object(n.a)(e,"breakClassName","page-item"),Object(n.a)(e,"breakLinkClassName","page-link"),Object(n.a)(e,"containerClassName","pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"),e))},data:a,progressPending:i,progressComponent:Object(g.jsx)(c.a,{color:"primary"}),responsive:!0})})}}}]);
//# sourceMappingURL=251.86eb4a23.chunk.js.map