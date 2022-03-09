(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[210],{2127:function(e,a,t){"use strict";t.r(a);var s=t(21),n=t(15),r=t(0),o=t(651),c=t(487),i=t.n(c),l=t(493),u=t.n(l),p=t(1436),d=t(1381),m=t(1405),g=(t(471),t(472)),b=t(475),f=t(1368),j=t(446),O=t(477),h=t(469),v=t(461),C=t(460),N=t(466),y=t(481),x=t.n(y),k=t(482),P=t.n(k),M=t(456),R=t(6);P()(x.a);a.default=function(){var e=Object(o.g)(),a=Object(r.useState)(""),t=Object(n.a)(a,2),c=t[0],l=t[1],y=Object(r.useState)(0),x=Object(n.a)(y,2),k=x[0],P=x[1],T=Object(r.useState)(!0),L=Object(n.a)(T,2),w=L[0],B=L[1],S=Object(r.useState)([]),E=Object(n.a)(S,2),_=E[0],z=E[1],H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};B(!0),N.a.customerBusinessList(e).then((function(e){B(!1),z(e.data.payload)})).catch((function(e){B(!1),console.log(e),Object(M.a)(e)}))};Object(r.useEffect)((function(){H()}),[]);var D=[{name:"Customer ID",selector:function(e,a){return e.storemap.customerid},minWidth:"100px",sortable:!0},{name:"Customer Name",selector:function(e,a){return"".concat(e.customerinfo.firstname," ").concat(e.customerinfo.lastname)},minWidth:"200px",sortable:!0},{name:"Business Name",selector:"businessname",minWidth:"200px",sortable:!0},{name:"Allowance",selector:function(e,a){return"".concat(window.CURRENCY_SYMBOL," ").concat((+e.iou_limit).toFixed(2))},minWidth:"100px",sortable:!0},{name:"Used",selector:function(e,a){return"".concat(window.CURRENCY_SYMBOL," ").concat((+e.iou_used).toFixed(2))},minWidth:"100px",sortable:!0},{name:"Remaining",selector:function(e,a){return"".concat(window.CURRENCY_SYMBOL," ").concat((+(e.iou_limit?e.iou_limit-e.iou_used:e.iou_used?e.iou_used:0)).toFixed(2))},minWidth:"100px",sortable:!0},{name:"Actions",allowOverflow:!0,cell:function(a){return Object(R.jsx)("div",{className:"d-flex",children:Object(R.jsx)(p.a,{size:15,color:"#2bc871",style:{cursor:"pointer"},onClick:function(){return t=a.storemap.customerid,void e.push("/CustomerIOUSetting/".concat(t));var t}})})}}];return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(g.a,{children:Object(R.jsxs)(b.a,{className:"d-flex my-2 mx-1 justify-content-center",style:{width:"100%"},onSubmit:function(e){e.preventDefault(),H({customerid:c})},autoComplete:"off",children:[Object(R.jsx)(f.a,{style:{width:"50%"},placeholder:"Search a Customer by ID",type:"number",id:"search-input",required:!0,value:c,onChange:function(e){l(e.target.value)}}),w?Object(R.jsxs)(j.a.Ripple,{className:"ml-2",color:"primary",disabled:!0,children:[Object(R.jsx)(O.a,{color:"white",size:"sm"}),Object(R.jsx)("small",{className:"ml-50",children:"Loading..."})]}):Object(R.jsxs)(j.a.Ripple,{className:"ml-2",color:"primary",type:"submit",children:[Object(R.jsx)(d.a,{size:15}),Object(R.jsx)("span",{className:"align-middle ml-50",children:"Search"})]})]})}),Object(R.jsxs)(g.a,{children:[Object(R.jsx)(h.a,{className:"border-bottom",children:Object(R.jsx)(v.a,{tag:"h4",children:"Customer IOU List"})}),Object(R.jsx)(u.a,{noHeader:!0,pagination:!0,columns:D,paginationPerPage:20,className:"react-dataTable",sortIcon:Object(R.jsx)(m.a,{size:10}),paginationDefaultPage:k+1,paginationComponent:function(){var e;return Object(R.jsx)(i.a,(e={previousLabel:"",nextLabel:"",forcePage:k,onPageChange:function(e){return function(e){P(e.selected)}(e)},pageCount:_.length?_.length/20:1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link"},Object(s.a)(e,"breakClassName","page-item"),Object(s.a)(e,"breakLinkClassName","page-link"),Object(s.a)(e,"containerClassName","pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"),e))},data:_,progressPending:w,progressComponent:Object(R.jsx)(O.a,{color:"primary"}),responsive:!0}),Object(R.jsx)(C.a,{style:{paddingTop:"15px"}})]})]})}},456:function(e,a,t){"use strict";t.d(a,"a",(function(){return n})),t.d(a,"b",(function(){return r})),t.d(a,"c",(function(){return o}));t(0);var s=t(121),n=function(e){try{var a=e.response;404===a.status||401===a.status||400===a.status||500===a.status?s.f.error(a.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):s.f.error("The server is under maintenance",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(a){s.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},r=function(e){try{var a=e.response;404!==a.status&&401!==a.status&&400!==a.status||s.f.error(a.data.errors?a.data.errors[Object.keys(a.data.errors)[0]]:a.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(a){s.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},o=function(e){var a=e.data.message||"success";s.f.success(a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},460:function(e,a,t){"use strict";var s=t(14),n=t(20),r=t(0),o=t.n(r),c=t(5),i=t.n(c),l=t(56),u=t.n(l),p=t(78),d={tag:p.tagPropType,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},m=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,c=e.tag,i=Object(n.a)(e,["className","cssModule","innerRef","tag"]),l=Object(p.mapToCssModules)(u()(a,"card-body"),t);return o.a.createElement(c,Object(s.a)({},i,{className:l,ref:r}))};m.propTypes=d,m.defaultProps={tag:"div"},a.a=m},461:function(e,a,t){"use strict";var s=t(14),n=t(20),r=t(0),o=t.n(r),c=t(5),i=t.n(c),l=t(56),u=t.n(l),p=t(78),d={tag:p.tagPropType,className:i.a.string,cssModule:i.a.object},m=function(e){var a=e.className,t=e.cssModule,r=e.tag,c=Object(n.a)(e,["className","cssModule","tag"]),i=Object(p.mapToCssModules)(u()(a,"card-title"),t);return o.a.createElement(r,Object(s.a)({},c,{className:i}))};m.propTypes=d,m.defaultProps={tag:"div"},a.a=m},469:function(e,a,t){"use strict";var s=t(14),n=t(20),r=t(0),o=t.n(r),c=t(5),i=t.n(c),l=t(56),u=t.n(l),p=t(78),d={tag:p.tagPropType,className:i.a.string,cssModule:i.a.object},m=function(e){var a=e.className,t=e.cssModule,r=e.tag,c=Object(n.a)(e,["className","cssModule","tag"]),i=Object(p.mapToCssModules)(u()(a,"card-header"),t);return o.a.createElement(r,Object(s.a)({},c,{className:i}))};m.propTypes=d,m.defaultProps={tag:"div"},a.a=m},475:function(e,a,t){"use strict";var s=t(14),n=t(20),r=t(117),o=t(116),c=t(0),i=t.n(c),l=t(5),u=t.n(l),p=t(56),d=t.n(p),m=t(78),g={children:u.a.node,inline:u.a.bool,tag:m.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,o=e.tag,c=e.innerRef,l=Object(n.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(m.mapToCssModules)(d()(a,!!r&&"form-inline"),t);return i.a.createElement(o,Object(s.a)({},l,{ref:c,className:u}))},a}(c.Component);b.propTypes=g,b.defaultProps={tag:"form"},a.a=b},477:function(e,a,t){"use strict";var s=t(14),n=t(20),r=t(0),o=t.n(r),c=t(5),i=t.n(c),l=t(56),u=t.n(l),p=t(78),d={tag:p.tagPropType,type:i.a.string,size:i.a.string,color:i.a.string,className:i.a.string,cssModule:i.a.object,children:i.a.string},m=function(e){var a=e.className,t=e.cssModule,r=e.type,c=e.size,i=e.color,l=e.children,d=e.tag,m=Object(n.a)(e,["className","cssModule","type","size","color","children","tag"]),g=Object(p.mapToCssModules)(u()(a,!!c&&"spinner-"+r+"-"+c,"spinner-"+r,!!i&&"text-"+i),t);return o.a.createElement(d,Object(s.a)({role:"status"},m,{className:g}),l&&o.a.createElement("span",{className:Object(p.mapToCssModules)("sr-only",t)},l))};m.propTypes=d,m.defaultProps={tag:"div",type:"border",children:"Loading..."},a.a=m}}]);
//# sourceMappingURL=210.86b48b04.chunk.js.map