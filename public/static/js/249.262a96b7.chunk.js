(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[249],{2275:function(e,t,a){"use strict";a.r(t);var n=a(21),r=a(15),s=a(120),o=a(0),c=a(1434),i=a(1504),l=a(1370),u=a(472),d=a(469),m=a(461),j=a(446),b=a(460),O=a(465),p=a(467),f=a(451),g=a(466),h=a(456),x=a(481),v=a.n(x),P=a(482),S=a.n(P),C=a(510),D=a(1),y=a(562),k=a(565),R=a(557),N=a(475),E=a(1341),A=a(479),w=a(1368),I=a(477),L=(a(471),a(6)),M=function(e){var t=e.modal,a=e.toggleModal,s=e.overallPointRuleInfo,c=e.setoverallPointRuleInfo,i=e.setReset,l=e.resetData,u=(JSON.parse(localStorage.getItem("customerBusinesses")),Object(o.useState)(!1)),d=Object(r.a)(u,2),m=d[0],b=d[1],O=function(e){c(Object(D.a)(Object(D.a)({},s),{},Object(n.a)({},e.target.name,e.target.value)))};return Object(L.jsxs)(y.a,{isOpen:t,toggle:a,className:"modal-dialog-centered",children:[Object(L.jsx)(k.a,{toggle:a,children:"Edit Point Rule"}),Object(L.jsx)(R.a,{children:Object(L.jsxs)(N.a,{className:"row",style:{width:"100%"},onSubmit:function(e){e.preventDefault();var t=s.Id,n=s.PointRateSetupName,r=s.PurchaseAmount,o=s.Points,c=s.ExpiryDate,u=s.OfferRate,d=s.merchantid,m=s.OfferStartDate,j=s.OfferEndDate;localStorage.setItem("usePMStoken",!0),b(!0);var O=d;u||(m=null,j=null),g.a.updateOverallRule(O,{rule_id:t,PointRateSetupName:n,PurchaseAmount:r,Points:o,ExpiryDate:c,OfferRate:u,OfferStartDate:m,OfferEndDate:j}).then((function(e){i(!l),b(!1),console.log(e),a(),Object(h.c)(e)})).catch((function(e){b(!1),localStorage.setItem("usePMStoken",!1),Object(h.a)(e),console.log(e)}))},autoComplete:"off",children:[Object(L.jsx)(p.a,{sm:"6",children:Object(L.jsxs)(E.a,{children:[Object(L.jsx)(A.a,{for:"PointRateSetupName",children:"Point Rate Setup Name"}),Object(L.jsx)(w.a,{type:"text",name:"PointRateSetupName",id:"PointRateSetupName",value:s.PointRateSetupName,onChange:O,placeholder:"write a name"})]})}),Object(L.jsx)(p.a,{sm:"6",children:Object(L.jsxs)(E.a,{children:[Object(L.jsx)(A.a,{for:"PurchaseAmount",children:"Purchase Amount"}),Object(L.jsx)(w.a,{type:"number",name:"PurchaseAmount",id:"PurchaseAmount",value:s.PurchaseAmount,onChange:O,placeholder:"0"})]})}),Object(L.jsx)(p.a,{sm:"6",children:Object(L.jsxs)(E.a,{children:[Object(L.jsx)(A.a,{for:"Points",children:"Points"}),Object(L.jsx)(w.a,{type:"number",name:"Points",id:"Points",value:s.Points,onChange:O,placeholder:"0"})]})}),Object(L.jsx)(p.a,{sm:"6",children:Object(L.jsxs)(E.a,{children:[Object(L.jsx)(A.a,{for:"ExpiryDate",children:"Expiry Date"}),Object(L.jsx)(w.a,{type:"date",name:"ExpiryDate",id:"ExpiryDate",value:new Date(s.ExpiryDate).toLocaleDateString("fr-CA"),onChange:O,placeholder:"0"})]})}),Object(L.jsx)(p.a,{sm:"12",className:"mb-1",children:Object(L.jsxs)(E.a,{check:!0,children:[Object(L.jsx)(w.a,{onChange:function(e){e.target.checked?c(Object(D.a)(Object(D.a)({},s),{},{OfferRate:!0})):c(Object(D.a)(Object(D.a)({},s),{},{OfferRate:!1}))},type:"checkbox",id:"viaEmail",checked:s.OfferRate}),Object(L.jsx)(A.a,{for:"viaEmail",check:!0,children:"Offer Rate"})]})}),s.OfferRate?Object(L.jsx)(p.a,{sm:"6",children:Object(L.jsxs)(E.a,{children:[Object(L.jsx)(A.a,{for:"OfferStartDate",children:"Offer Start Date"}),Object(L.jsx)(w.a,{type:"date",name:"OfferStartDate",id:"OfferStartDate",value:new Date(s.OfferStartDate).toLocaleDateString("fr-CA"),onChange:O,placeholder:"0"})]})}):null,s.OfferRate?Object(L.jsx)(p.a,{sm:"6",children:Object(L.jsxs)(E.a,{children:[Object(L.jsx)(A.a,{for:"OfferEndDate",children:"Offer End Date"}),Object(L.jsx)(w.a,{type:"date",name:"OfferEndDate",id:"OfferEndDate",value:new Date(s.OfferEndDate).toLocaleDateString("fr-CA"),onChange:O,placeholder:"0"})]})}):null,Object(L.jsx)(p.a,{sm:"12",className:"text-center",children:m?Object(L.jsxs)(j.a.Ripple,{color:"primary",className:"mr-1",disabled:!0,style:{marginTop:"25px"},children:[Object(L.jsx)(I.a,{color:"white",size:"sm"}),Object(L.jsx)("span",{className:"ml-50",children:"Loading..."})]}):Object(L.jsx)(j.a.Ripple,{className:"ml-2",color:"primary",type:"submit",style:{marginTop:"25px"},children:Object(L.jsx)("span",{children:"Submit"})})})]})})]})},B=a(567),W=S()(v.a);t.default=function(){var e,t=(JSON.parse(localStorage.getItem("AssignedMenus"))||[]).map((function(e){return e.submenu.map((function(e){return e.id}))})),a=(e=[]).concat.apply(e,Object(s.a)(t)),x=Object(o.useState)(!0),P=Object(r.a)(x,2),S=P[0],D=P[1],y=Object(o.useState)(!0),k=Object(r.a)(y,2),R=k[0],N=k[1],E=Object(o.useState)([]),A=Object(r.a)(E,2),w=A[0],I=A[1],T=Object(o.useState)({}),H=Object(r.a)(T,2),z=H[0],F=H[1],J=Object(o.useState)(!1),$=Object(r.a)(J,2),G=$[0],Y=$[1];Object(o.useEffect)((function(){localStorage.setItem("usePMStoken",!0),g.a.getAllOverallRules().then((function(e){console.log(e),I(e.data.data),localStorage.setItem("usePMStoken",!1),D(!1)})).catch((function(e){Object(h.a)(e),console.log(e),D(!1),localStorage.setItem("usePMStoken",!1)}))}),[R]);var _=[{name:"SL.",minWidth:"100px",sortable:!0,cell:function(e,t){return t+1}},{name:"Merchant Name",minWidth:"150px",sortable:!0,selector:"MerchantName"},{name:"Point Rate Setup Name",minWidth:"150px",sortable:!0,selector:"PointRateSetupName"},{name:"Purchase Amount",minWidth:"100px",sortable:!0,selector:"PurchaseAmount"},{name:"Points",minWidth:"100px",sortable:!0,selector:"Points"},{name:"Expiry Date",minWidth:"250px",sortable:!0,selector:function(e){return e.ExpiryDate?Object(B.b)(e.ExpiryDate):null}},{name:"Offer Rate",minWidth:"100px",sortable:!0,selector:function(e){return e.OfferRate?"True":"False"}},{name:"Offer Start Date",minWidth:"250px",sortable:!0,selector:function(e){return e.OfferStartDate?Object(B.b)(e.OfferStartDate):null}},{name:"Offer End Date",minWidth:"250px",sortable:!0,selector:function(e){return e.OfferEndDate?Object(B.b)(e.OfferEndDate):null}},{name:"Created At",minWidth:"250px",sortable:!0,selector:function(e){return e.CreatedAt?Object(B.b)(e.CreatedAt):null}},{name:"Action",minWidth:"100px",selector:function(e){return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("span",{title:"Edit",children:Object(L.jsx)(c.a,{size:15,color:"teal",style:{cursor:"pointer"},onClick:function(t){F(e),Y(!0)}})}),"\xa0\xa0",Object(L.jsx)("span",{title:"Delete",children:Object(L.jsx)(i.a,{size:15,color:"red",style:{cursor:"pointer"},onClick:function(t){return a=e.Id,r=e.merchantid,s="Do you want to delete?",localStorage.setItem("usePMStoken",!0),W.fire(Object(n.a)({title:s,text:"You won't be able to revert this",icon:"warning",allowOutsideClick:!1,allowEscapeKey:!1,showCancelButton:!0,confirmButtonText:"Yes",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"},showLoaderOnConfirm:!0,preConfirm:function(){var e=r;return g.a.deleteOverallRule(e,{rule_id:a}).then((function(e){Object(h.c)(e),console.log(e),I(w.filter((function(e){return e.Id!==a}))),localStorage.setItem("usePMStoken",!1)})).catch((function(e){localStorage.setItem("usePMStoken",!1),console.log(e.response),Object(h.a)(e)}))},buttonsStyling:!1},"allowOutsideClick",(function(){return!v.a.isLoading()}))).then((function(e){e.isConfirmed}));var a,r,s}})})]})}}];return Object(L.jsxs)(u.a,{children:[Object(L.jsxs)(d.a,{className:"border-bottom",children:[Object(L.jsx)(m.a,{tag:"h4",children:"Global Rules"}),a.includes(17)&&Object(L.jsx)(j.a.Ripple,{className:"ml-2",color:"primary",tag:f.b,to:"/createOverallPointRuleForAdmin",children:Object(L.jsxs)("div",{className:"d-flex align-items-center",children:[Object(L.jsx)(l.a,{size:17,style:{marginRight:"5px"}}),Object(L.jsx)("span",{children:"Create Global Rule"})]})})]}),Object(L.jsxs)(b.a,{children:[Object(L.jsx)(O.a,{children:Object(L.jsx)(p.a,{md:"12",children:Object(L.jsx)(C.a,{column:_,TableData:w,TableDataLoading:S})})}),Object(L.jsx)(M,{toggleModal:function(){return Y(!G)},modal:G,resetData:R,setReset:N,overallPointRuleInfo:z,setoverallPointRuleInfo:F})]})]})}},456:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return o}));a(0);var n=a(121),r=function(e){try{var t=e.response;404===t.status||401===t.status||400===t.status||500===t.status?n.f.error(t.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):n.f.error("The server is under maintenance",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(t){n.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},s=function(e){try{var t=e.response;404!==t.status&&401!==t.status&&400!==t.status||n.f.error(t.data.errors?t.data.errors[Object.keys(t.data.errors)[0]]:t.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(t){n.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},o=function(e){var t=e.data.message||"success";n.f.success(t,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},510:function(e,t,a){"use strict";var n=a(21),r=a(15),s=a(0),o=a(1405),c=a(477),i=a(487),l=a.n(i),u=a(493),d=a.n(u),m=a(6);t.a=function(e){var t=e.column,a=e.TableData,i=e.TableDataLoading,u=Object(s.useState)(0),j=Object(r.a)(u,2),b=j[0],O=j[1];return Object(m.jsx)(s.Fragment,{children:Object(m.jsx)(d.a,{noHeader:!0,pagination:!0,columns:t,paginationPerPage:10,className:"react-dataTable",sortIcon:Object(m.jsx)(o.a,{size:10}),paginationDefaultPage:b+1,paginationComponent:function(){var e;return Object(m.jsx)(l.a,(e={previousLabel:"",nextLabel:"",forcePage:b,onPageChange:function(e){return function(e){O(e.selected)}(e)},pageCount:a.length?a.length/10:1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link"},Object(n.a)(e,"breakClassName","page-item"),Object(n.a)(e,"breakLinkClassName","page-link"),Object(n.a)(e,"containerClassName","pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"),e))},data:a,progressPending:i,progressComponent:Object(m.jsx)(c.a,{color:"primary"}),responsive:!0})})}},567:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return o}));var n=function(e){return String(e).replace(/^(.{4})(.*)(.{3})$/,"$1 $2 $3")},r={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"},s=function(e){return new Date(e).toLocaleDateString(void 0,r)},o=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}}]);
//# sourceMappingURL=249.262a96b7.chunk.js.map