(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[233],{1604:function(e,t,a){"use strict";a.r(t);var n=a(21),o=a(15),c=a(0),r=a(1403),s=a(1522),i=a(472),l=a(469),u=a(461),j=a(460),b=a(465),d=a(467),p=a(466),m=a(456),g=a(481),O=a.n(g),h=a(482),f=a.n(h),x=a(510),v=(a(699),a(6)),C=f()(O.a);t.default=function(){var e=Object(c.useState)(!0),t=Object(o.a)(e,2),a=t[0],g=t[1],h=Object(c.useState)(!0),f=Object(o.a)(h,2),k=f[0],S=(f[1],Object(c.useState)([])),y=Object(o.a)(S,2),B=y[0],T=y[1];Object(c.useEffect)((function(){localStorage.setItem("useBMStoken",!0),p.a.getPendingGroupList().then((function(e){console.log(e),T(e.data),localStorage.setItem("useBMStoken",!1),g(!1)})).catch((function(e){Object(m.a)(e),console.log(e),g(!1),localStorage.setItem("useBMStoken",!1)}))}),[k]);var N=function(e,t,a){return localStorage.setItem("useBMStoken",!0),C.fire(Object(n.a)({title:a,text:"You won't be able to revert this",icon:"warning",allowOutsideClick:!1,allowEscapeKey:!1,showCancelButton:!0,confirmButtonText:"Yes",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"},showLoaderOnConfirm:!0,preConfirm:function(){return p.a.approveOrRejectGroup(e,t).then((function(t){Object(m.c)(t),console.log(t),T(B.filter((function(t){return t.id!==e}))),localStorage.setItem("useBMStoken",!1)})).catch((function(e){localStorage.setItem("useBMStoken",!1),console.log(e.response),Object(m.a)(e)}))},buttonsStyling:!1},"allowOutsideClick",(function(){return!O.a.isLoading()}))).then((function(e){e.isConfirmed}))},w=[{name:"SL",minWidth:"20px",sortable:!0,cell:function(e,t){return t+1}},{name:"Group Name",minWidth:"100px",sortable:!0,selector:"name"},{name:"Is Default",minWidth:"100px",sortable:!0,selector:function(e){return e.isDefault?"True":"False"}},{name:"Created By",minWidth:"100px",sortable:!0,selector:"createdBy"},{name:"Group Type",minWidth:"100px",sortable:!0,selector:function(e){return 1===e.groupType?"Customer":2===e.groupType?"Agent":"Merchant"}},{name:"Action",minWidth:"100px",selector:function(e){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("span",{title:"Approve",children:Object(v.jsx)(r.a,{size:15,color:"teal",style:{cursor:"pointer"},onClick:function(t){return N(e.id,1,"Do you want to approve?")}})}),"\xa0\xa0",Object(v.jsx)("span",{title:"Reject",children:Object(v.jsx)(s.a,{size:15,color:"red",style:{cursor:"pointer"},onClick:function(t){return N(e.id,0,"Do you want to reject?")}})})]})}}];return Object(v.jsxs)(i.a,{children:[Object(v.jsx)(l.a,{className:"border-bottom",children:Object(v.jsx)(u.a,{tag:"h4",children:"Pending Groups"})}),Object(v.jsx)(j.a,{children:Object(v.jsx)(b.a,{children:Object(v.jsx)(d.a,{md:"12",children:Object(v.jsx)(x.a,{column:w,TableData:B,TableDataLoading:a})})})})]})}},2271:function(e,t,a){"use strict";a.r(t);var n=a(21),o=a(15),c=a(120),r=a(0),s=a(1434),i=a(1504),l=a(1370),u=a(472),j=a(460),b=a(639),d=a(1379),p=a(1380),m=a(654),g=a(655),O=a(469),h=a(461),f=a(446),x=a(465),v=a(467),C=a(451),k=a(466),S=a(456),y=a(481),B=a.n(y),T=a(482),N=a.n(T),w=a(510),D=a(1),I=a(562),M=a(565),L=a(557),P=a(475),W=a(1341),G=a(479),R=a(1368),A=a(477),z=a(478),F=a(471),E=a(6),H=function(e){var t=e.modal,a=e.toggleModal,c=e.groupInfo,s=e.setgroupInfo,i=e.setReset,l=e.resetData,u=Object(r.useState)(!1),j=Object(o.a)(u,2),b=j[0],d=j[1];return Object(E.jsxs)(I.a,{isOpen:t,toggle:a,className:"modal-dialog-centered",children:[Object(E.jsx)(M.a,{toggle:a,children:"Edit Group"}),Object(E.jsx)(L.a,{children:Object(E.jsxs)(P.a,{className:"row",style:{width:"100%"},onSubmit:function(e){e.preventDefault();var t=c.id,n=c.name,o=c.groupType,r=c.isDefault;localStorage.setItem("useBMStoken",!0),d(!0),console.log({id:t,name:n,groupType:o,isDefault:r}),k.a.editGroup(t,{id:t,name:n,groupType:o,isDefault:r}).then((function(e){i(!l),d(!1),console.log(e),a(),Object(S.c)(e)})).catch((function(e){d(!1),localStorage.setItem("useBMStoken",!1),Object(S.a)(e),console.log(e)}))},autoComplete:"off",children:[Object(E.jsx)(v.a,{sm:"6",children:Object(E.jsxs)(W.a,{children:[Object(E.jsx)(G.a,{for:"serviceId",children:"Group Name"}),Object(E.jsx)(R.a,{type:"text",name:"name",id:"name",value:c.name,onChange:function(e){s(Object(D.a)(Object(D.a)({},c),{},Object(n.a)({},e.target.name,e.target.value)))},required:!0,placeholder:"group name"})]})}),Object(E.jsx)(v.a,{sm:"6",children:Object(E.jsxs)(W.a,{children:[Object(E.jsx)(G.a,{for:"groupType",children:"Group Type"}),Object(E.jsx)(z.a,{theme:F.h,maxMenuHeight:200,className:"react-select",classNamePrefix:"select",value:{value:c.groupType,label:1===c.groupType?"Customer":2===c.groupType?"Agent":3===c.groupType?"Merchant":""},onChange:function(e){s(Object(D.a)(Object(D.a)({},c),{},{groupType:e.value}))},options:[{value:1,label:"Customer"},{value:2,label:"Agent"},{value:3,label:"Merchant"}]})]})}),Object(E.jsx)(v.a,{sm:"12",className:"mb-1",children:Object(E.jsxs)(W.a,{check:!0,children:[Object(E.jsx)(R.a,{onChange:function(e){e.target.checked?s(Object(D.a)(Object(D.a)({},c),{},{isDefault:!0})):s(Object(D.a)(Object(D.a)({},c),{},{isDefault:!1}))},type:"checkbox",id:"isDefault",checked:c.isDefault}),Object(E.jsx)(G.a,{for:"isDefault",check:!0,children:"Is Default?"})]})}),Object(E.jsx)(v.a,{sm:"12",className:"text-center",children:b?Object(E.jsxs)(f.a.Ripple,{color:"primary",className:"mr-1",disabled:!0,style:{marginTop:"25px"},children:[Object(E.jsx)(A.a,{color:"white",size:"sm"}),Object(E.jsx)("span",{className:"ml-50",children:"Loading..."})]}):Object(E.jsx)(f.a.Ripple,{className:"ml-2",color:"primary",type:"submit",style:{marginTop:"25px"},children:Object(E.jsx)("span",{children:"Update"})})})]})})]})},Y=a(1604),K=N()(B.a);t.default=function(){var e,t=(JSON.parse(localStorage.getItem("AssignedMenus"))||[]).map((function(e){return e.submenu.map((function(e){return e.id}))})),a=(e=[]).concat.apply(e,Object(c.a)(t)),y=Object(r.useState)(!0),T=Object(o.a)(y,2),N=T[0],D=T[1],I=Object(r.useState)(!0),M=Object(o.a)(I,2),L=M[0],P=M[1],W=Object(r.useState)([]),G=Object(o.a)(W,2),R=G[0],A=G[1],z=Object(r.useState)({}),F=Object(o.a)(z,2),J=F[0],q=F[1],U=Object(r.useState)(!1),Q=Object(o.a)(U,2),V=Q[0],X=Q[1];Object(r.useEffect)((function(){localStorage.setItem("useBMStoken",!0),k.a.getGroupList().then((function(e){console.log(e),A(e.data),localStorage.setItem("useBMStoken",!1),D(!1)})).catch((function(e){Object(S.a)(e),console.log(e),D(!1),localStorage.setItem("useBMStoken",!1)}))}),[L]);var Z=[{name:"SL",minWidth:"20px",sortable:!0,cell:function(e,t){return t+1}},{name:"Group Name",minWidth:"100px",sortable:!0,selector:"name"},{name:"Is Default",minWidth:"100px",sortable:!0,selector:function(e){return e.isDefault?"True":"False"}},{name:"Group Type",minWidth:"100px",sortable:!0,selector:function(e){return 1===e.groupType?"Customer":2===e.groupType?"Agent":"Merchant"}},{name:"Action",minWidth:"100px",selector:function(e){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("span",{title:"Edit",children:Object(E.jsx)(s.a,{size:15,color:"teal",style:{cursor:"pointer"},onClick:function(t){q(e),X(!0)}})}),"\xa0\xa0",Object(E.jsx)("span",{title:"Delete",children:Object(E.jsx)(i.a,{size:15,color:"red",style:{cursor:"pointer"},onClick:function(t){return a=e.id,o="Do you want to delete?",localStorage.setItem("useBMStoken",!0),K.fire(Object(n.a)({title:o,text:"You won't be able to revert this",icon:"warning",allowOutsideClick:!1,allowEscapeKey:!1,showCancelButton:!0,confirmButtonText:"Yes",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"},showLoaderOnConfirm:!0,preConfirm:function(){return k.a.deleteGroup(a).then((function(e){Object(S.c)(e),console.log(e),localStorage.setItem("useBMStoken",!1)})).catch((function(e){localStorage.setItem("useBMStoken",!1),console.log(e.response),Object(S.a)(e)}))},buttonsStyling:!1},"allowOutsideClick",(function(){return!B.a.isLoading()}))).then((function(e){e.isConfirmed}));var a,o}})})]})}}],$=Object(r.useState)("1"),_=Object(o.a)($,2),ee=_[0],te=_[1],ae=function(e){return te(e)};return Object(E.jsx)(u.a,{children:Object(E.jsxs)(j.a,{className:"pt-2",children:[Object(E.jsxs)(b.a,{pills:!0,children:[Object(E.jsx)(d.a,{children:Object(E.jsx)(p.a,{active:"1"===ee,onClick:function(){return ae("1")},children:Object(E.jsx)("span",{className:"align-middle d-none d-sm-block",children:"Groups"})})}),a.includes(27)&&Object(E.jsx)(d.a,{children:Object(E.jsx)(p.a,{active:"2"===ee,onClick:function(){return ae("2")},children:Object(E.jsx)("span",{className:"align-middle d-none d-sm-block",children:"Approve Groups"})})})]}),Object(E.jsxs)(m.a,{activeTab:ee,children:[Object(E.jsx)(g.a,{tabId:"1",children:Object(E.jsxs)(u.a,{children:[Object(E.jsxs)(O.a,{className:"border-bottom",children:[Object(E.jsx)(h.a,{tag:"h4",children:"Groups"}),a.includes(26)&&Object(E.jsx)(f.a.Ripple,{className:"ml-2",color:"primary",tag:C.b,to:"/createGroup",children:Object(E.jsxs)("div",{className:"d-flex align-items-center",children:[Object(E.jsx)(l.a,{size:17,style:{marginRight:"5px"}}),Object(E.jsx)("span",{children:"Create Group"})]})})]}),Object(E.jsxs)(j.a,{children:[Object(E.jsx)(x.a,{children:Object(E.jsx)(v.a,{md:"12",children:Object(E.jsx)(w.a,{column:Z,TableData:R,TableDataLoading:N})})}),Object(E.jsx)(H,{toggleModal:function(){return X(!V)},modal:V,resetData:L,setReset:P,groupInfo:J,setgroupInfo:q})]})]})}),Object(E.jsx)(g.a,{tabId:"2",children:Object(E.jsx)(Y.default,{})})]})]})})}},456:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return r}));a(0);var n=a(121),o=function(e){try{var t=e.response;404===t.status||401===t.status||400===t.status||500===t.status?n.f.error(t.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):n.f.error("The server is under maintenance",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(t){n.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},c=function(e){try{var t=e.response;404!==t.status&&401!==t.status&&400!==t.status||n.f.error(t.data.errors?t.data.errors[Object.keys(t.data.errors)[0]]:t.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(t){n.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},r=function(e){var t=e.data.message||"success";n.f.success(t,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},510:function(e,t,a){"use strict";var n=a(21),o=a(15),c=a(0),r=a(1405),s=a(477),i=a(487),l=a.n(i),u=a(493),j=a.n(u),b=a(6);t.a=function(e){var t=e.column,a=e.TableData,i=e.TableDataLoading,u=Object(c.useState)(0),d=Object(o.a)(u,2),p=d[0],m=d[1];return Object(b.jsx)(c.Fragment,{children:Object(b.jsx)(j.a,{noHeader:!0,pagination:!0,columns:t,paginationPerPage:10,className:"react-dataTable",sortIcon:Object(b.jsx)(r.a,{size:10}),paginationDefaultPage:p+1,paginationComponent:function(){var e;return Object(b.jsx)(l.a,(e={previousLabel:"",nextLabel:"",forcePage:p,onPageChange:function(e){return function(e){m(e.selected)}(e)},pageCount:a.length?a.length/10:1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link"},Object(n.a)(e,"breakClassName","page-item"),Object(n.a)(e,"breakLinkClassName","page-link"),Object(n.a)(e,"containerClassName","pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"),e))},data:a,progressPending:i,progressComponent:Object(b.jsx)(s.a,{color:"primary"}),responsive:!0})})}},699:function(e,t,a){"use strict";a.r(t);var n=a(21),o=a(15),c=a(0),r=a(1403),s=a(1522),i=a(472),l=a(469),u=a(461),j=a(460),b=a(465),d=a(467),p=a(466),m=a(456),g=a(481),O=a.n(g),h=a(482),f=a.n(h),x=a(510),v=a(6),C=f()(O.a);t.default=function(){var e=Object(c.useState)(!0),t=Object(o.a)(e,2),a=t[0],g=t[1],h=Object(c.useState)(!0),f=Object(o.a)(h,2),k=f[0],S=(f[1],Object(c.useState)([])),y=Object(o.a)(S,2),B=y[0],T=y[1];Object(c.useEffect)((function(){localStorage.setItem("useBMStoken",!0),p.a.getPendingServiceLogicList().then((function(e){console.log(e),T(e.data),localStorage.setItem("useBMStoken",!1),g(!1)})).catch((function(e){Object(m.a)(e),console.log(e),g(!1),localStorage.setItem("useBMStoken",!1)}))}),[k]);var N=function(e,t,a){return localStorage.setItem("useBMStoken",!0),C.fire(Object(n.a)({title:a,text:"You won't be able to revert this",icon:"warning",allowOutsideClick:!1,allowEscapeKey:!1,showCancelButton:!0,confirmButtonText:"Yes",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"},showLoaderOnConfirm:!0,preConfirm:function(){return p.a.approveOrRejectServiceLogic(e,t).then((function(t){Object(m.c)(t),console.log(t),T(B.filter((function(t){return t.id!==e}))),localStorage.setItem("useBMStoken",!1)})).catch((function(e){localStorage.setItem("useBMStoken",!1),console.log(e.response),Object(m.a)(e)}))},buttonsStyling:!1},"allowOutsideClick",(function(){return!O.a.isLoading()}))).then((function(e){e.isConfirmed}))},w=[{name:"SL",minWidth:"20px",sortable:!0,cell:function(e,t){return t+1}},{name:"Minimum",minWidth:"100px",sortable:!0,selector:"minimum"},{name:"Maximum",minWidth:"100px",sortable:!0,selector:"maximum"},{name:"Is Financial",minWidth:"100px",sortable:!0,selector:function(e){return e.isFinancial?"True":"False"}},{name:"Service Keyword",minWidth:"100px",sortable:!0,selector:"serviceKeyword"},{name:"Rule Provider",minWidth:"100px",sortable:!0,selector:"ruleProvider"},{name:"Created By",minWidth:"100px",sortable:!0,selector:"createdBy"},{name:"Action",minWidth:"100px",selector:function(e){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("span",{title:"Approve",children:Object(v.jsx)(r.a,{size:15,color:"teal",style:{cursor:"pointer"},onClick:function(t){return N(e.id,1,"Do you want to approve?")}})}),"\xa0\xa0",Object(v.jsx)("span",{title:"Reject",children:Object(v.jsx)(s.a,{size:15,color:"red",style:{cursor:"pointer"},onClick:function(t){return N(e.id,0,"Do you want to reject?")}})})]})}}];return Object(v.jsxs)(i.a,{children:[Object(v.jsx)(l.a,{className:"border-bottom",children:Object(v.jsx)(u.a,{tag:"h4",children:"Pending Service Logics"})}),Object(v.jsx)(j.a,{children:Object(v.jsx)(b.a,{children:Object(v.jsx)(d.a,{md:"12",children:Object(v.jsx)(x.a,{column:w,TableData:B,TableDataLoading:a})})})})]})}}}]);
//# sourceMappingURL=233.cef86796.chunk.js.map