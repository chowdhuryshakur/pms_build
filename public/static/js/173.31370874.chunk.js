(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[173,185],{1603:function(e,t,a){"use strict";a.r(t);var s=a(21),o=a(15),n=a(0),r=a(1403),c=a(1522),i=a(472),l=a(469),u=a(461),d=a(460),p=a(465),g=a(467),m=a(466),b=a(456),f=a(481),j=a.n(f),O=a(482),h=a.n(O),v=a(510),x=(a(699),a(6)),y=h()(j.a);t.default=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),a=t[0],f=t[1],O=Object(n.useState)(!0),h=Object(o.a)(O,2),C=h[0],k=(h[1],Object(n.useState)([])),M=Object(o.a)(k,2),N=M[0],S=M[1];Object(n.useEffect)((function(){localStorage.setItem("useBMStoken",!0),m.a.getPendingGroupMapList().then((function(e){console.log(e),S(e.data),localStorage.setItem("useBMStoken",!1),f(!1)})).catch((function(e){Object(b.a)(e),console.log(e),f(!1),localStorage.setItem("useBMStoken",!1)}))}),[C]);var T=function(e,t,a){return localStorage.setItem("useBMStoken",!0),y.fire(Object(s.a)({title:a,text:"You won't be able to revert this",icon:"warning",allowOutsideClick:!1,allowEscapeKey:!1,showCancelButton:!0,confirmButtonText:"Yes",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"},showLoaderOnConfirm:!0,preConfirm:function(){return m.a.approveOrRejectGroupMap(e,t).then((function(t){Object(b.c)(t),console.log(t),S(N.filter((function(t){return t.id!==e}))),localStorage.setItem("useBMStoken",!1)})).catch((function(e){localStorage.setItem("useBMStoken",!1),console.log(e.response),Object(b.a)(e)}))},buttonsStyling:!1},"allowOutsideClick",(function(){return!j.a.isLoading()}))).then((function(e){e.isConfirmed}))},w=[{name:"SL",minWidth:"20px",sortable:!0,cell:function(e,t){return t+1}},{name:"Group ID",minWidth:"100px",sortable:!0,selector:"groupId"},{name:"Created By",minWidth:"100px",sortable:!0,selector:"createdBy"},{name:"Group Type",minWidth:"100px",sortable:!0,selector:function(e){return 1===e.groupType?"Customer":2===e.groupType?"Agent":"Merchant"}},{name:"Action",minWidth:"100px",selector:function(e){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("span",{title:"Approve",children:Object(x.jsx)(r.a,{size:15,color:"teal",style:{cursor:"pointer"},onClick:function(t){return T(e.id,1,"Do you want to approve?")}})}),"\xa0\xa0",Object(x.jsx)("span",{title:"Reject",children:Object(x.jsx)(c.a,{size:15,color:"red",style:{cursor:"pointer"},onClick:function(t){return T(e.id,0,"Do you want to reject?")}})})]})}}];return Object(x.jsxs)(i.a,{children:[Object(x.jsx)(l.a,{className:"border-bottom",children:Object(x.jsx)(u.a,{tag:"h4",children:"Pending Group Maps"})}),Object(x.jsx)(d.a,{children:Object(x.jsx)(p.a,{children:Object(x.jsx)(g.a,{md:"12",children:Object(x.jsx)(v.a,{column:w,TableData:N,TableDataLoading:a})})})})]})}},456:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return r}));a(0);var s=a(121),o=function(e){try{var t=e.response;404===t.status||401===t.status||400===t.status||500===t.status?s.f.error(t.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):s.f.error("The server is under maintenance",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(t){s.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},n=function(e){try{var t=e.response;404!==t.status&&401!==t.status&&400!==t.status||s.f.error(t.data.errors?t.data.errors[Object.keys(t.data.errors)[0]]:t.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(t){s.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},r=function(e){var t=e.data.message||"success";s.f.success(t,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},460:function(e,t,a){"use strict";var s=a(14),o=a(20),n=a(0),r=a.n(n),c=a(5),i=a.n(c),l=a(56),u=a.n(l),d=a(78),p={tag:d.tagPropType,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},g=function(e){var t=e.className,a=e.cssModule,n=e.innerRef,c=e.tag,i=Object(o.a)(e,["className","cssModule","innerRef","tag"]),l=Object(d.mapToCssModules)(u()(t,"card-body"),a);return r.a.createElement(c,Object(s.a)({},i,{className:l,ref:n}))};g.propTypes=p,g.defaultProps={tag:"div"},t.a=g},461:function(e,t,a){"use strict";var s=a(14),o=a(20),n=a(0),r=a.n(n),c=a(5),i=a.n(c),l=a(56),u=a.n(l),d=a(78),p={tag:d.tagPropType,className:i.a.string,cssModule:i.a.object},g=function(e){var t=e.className,a=e.cssModule,n=e.tag,c=Object(o.a)(e,["className","cssModule","tag"]),i=Object(d.mapToCssModules)(u()(t,"card-title"),a);return r.a.createElement(n,Object(s.a)({},c,{className:i}))};g.propTypes=p,g.defaultProps={tag:"div"},t.a=g},465:function(e,t,a){"use strict";var s=a(14),o=a(20),n=a(0),r=a.n(n),c=a(5),i=a.n(c),l=a(56),u=a.n(l),d=a(78),p=i.a.oneOfType([i.a.number,i.a.string]),g={tag:d.tagPropType,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},m={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var t=e.className,a=e.cssModule,n=e.noGutters,c=e.tag,i=e.form,l=e.widths,p=Object(o.a)(e,["className","cssModule","noGutters","tag","form","widths"]),g=[];l.forEach((function(t,a){var s=e[t];if(delete p[t],s){var o=!a;g.push(o?"row-cols-"+s:"row-cols-"+t+"-"+s)}}));var m=Object(d.mapToCssModules)(u()(t,n?"no-gutters":null,i?"form-row":"row",g),a);return r.a.createElement(c,Object(s.a)({},p,{className:m}))};b.propTypes=g,b.defaultProps=m,t.a=b},467:function(e,t,a){"use strict";var s=a(14),o=a(20),n=a(0),r=a.n(n),c=a(5),i=a.n(c),l=a(56),u=a.n(l),d=a(78),p=i.a.oneOfType([i.a.number,i.a.string]),g=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:p,offset:p})]),m={tag:d.tagPropType,xs:g,sm:g,md:g,lg:g,xl:g,className:i.a.string,cssModule:i.a.object,widths:i.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},j=function(e){var t=e.className,a=e.cssModule,n=e.widths,c=e.tag,i=Object(o.a)(e,["className","cssModule","widths","tag"]),l=[];n.forEach((function(t,s){var o=e[t];if(delete i[t],o||""===o){var n=!s;if(Object(d.isObject)(o)){var r,c=n?"-":"-"+t+"-",p=f(n,t,o.size);l.push(Object(d.mapToCssModules)(u()(((r={})[p]=o.size||""===o.size,r["order"+c+o.order]=o.order||0===o.order,r["offset"+c+o.offset]=o.offset||0===o.offset,r)),a))}else{var g=f(n,t,o);l.push(g)}}})),l.length||l.push("col");var p=Object(d.mapToCssModules)(u()(t,l),a);return r.a.createElement(c,Object(s.a)({},i,{className:p}))};j.propTypes=m,j.defaultProps=b,t.a=j},469:function(e,t,a){"use strict";var s=a(14),o=a(20),n=a(0),r=a.n(n),c=a(5),i=a.n(c),l=a(56),u=a.n(l),d=a(78),p={tag:d.tagPropType,className:i.a.string,cssModule:i.a.object},g=function(e){var t=e.className,a=e.cssModule,n=e.tag,c=Object(o.a)(e,["className","cssModule","tag"]),i=Object(d.mapToCssModules)(u()(t,"card-header"),a);return r.a.createElement(n,Object(s.a)({},c,{className:i}))};g.propTypes=p,g.defaultProps={tag:"div"},t.a=g},477:function(e,t,a){"use strict";var s=a(14),o=a(20),n=a(0),r=a.n(n),c=a(5),i=a.n(c),l=a(56),u=a.n(l),d=a(78),p={tag:d.tagPropType,type:i.a.string,size:i.a.string,color:i.a.string,className:i.a.string,cssModule:i.a.object,children:i.a.string},g=function(e){var t=e.className,a=e.cssModule,n=e.type,c=e.size,i=e.color,l=e.children,p=e.tag,g=Object(o.a)(e,["className","cssModule","type","size","color","children","tag"]),m=Object(d.mapToCssModules)(u()(t,!!c&&"spinner-"+n+"-"+c,"spinner-"+n,!!i&&"text-"+i),a);return r.a.createElement(p,Object(s.a)({role:"status"},g,{className:m}),l&&r.a.createElement("span",{className:Object(d.mapToCssModules)("sr-only",a)},l))};g.propTypes=p,g.defaultProps={tag:"div",type:"border",children:"Loading..."},t.a=g},510:function(e,t,a){"use strict";var s=a(21),o=a(15),n=a(0),r=a(1405),c=a(477),i=a(487),l=a.n(i),u=a(493),d=a.n(u),p=a(6);t.a=function(e){var t=e.column,a=e.TableData,i=e.TableDataLoading,u=Object(n.useState)(0),g=Object(o.a)(u,2),m=g[0],b=g[1];return Object(p.jsx)(n.Fragment,{children:Object(p.jsx)(d.a,{noHeader:!0,pagination:!0,columns:t,paginationPerPage:10,className:"react-dataTable",sortIcon:Object(p.jsx)(r.a,{size:10}),paginationDefaultPage:m+1,paginationComponent:function(){var e;return Object(p.jsx)(l.a,(e={previousLabel:"",nextLabel:"",forcePage:m,onPageChange:function(e){return function(e){b(e.selected)}(e)},pageCount:a.length?a.length/10:1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link"},Object(s.a)(e,"breakClassName","page-item"),Object(s.a)(e,"breakLinkClassName","page-link"),Object(s.a)(e,"containerClassName","pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"),e))},data:a,progressPending:i,progressComponent:Object(p.jsx)(c.a,{color:"primary"}),responsive:!0})})}},699:function(e,t,a){"use strict";a.r(t);var s=a(21),o=a(15),n=a(0),r=a(1403),c=a(1522),i=a(472),l=a(469),u=a(461),d=a(460),p=a(465),g=a(467),m=a(466),b=a(456),f=a(481),j=a.n(f),O=a(482),h=a.n(O),v=a(510),x=a(6),y=h()(j.a);t.default=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),a=t[0],f=t[1],O=Object(n.useState)(!0),h=Object(o.a)(O,2),C=h[0],k=(h[1],Object(n.useState)([])),M=Object(o.a)(k,2),N=M[0],S=M[1];Object(n.useEffect)((function(){localStorage.setItem("useBMStoken",!0),m.a.getPendingServiceLogicList().then((function(e){console.log(e),S(e.data),localStorage.setItem("useBMStoken",!1),f(!1)})).catch((function(e){Object(b.a)(e),console.log(e),f(!1),localStorage.setItem("useBMStoken",!1)}))}),[C]);var T=function(e,t,a){return localStorage.setItem("useBMStoken",!0),y.fire(Object(s.a)({title:a,text:"You won't be able to revert this",icon:"warning",allowOutsideClick:!1,allowEscapeKey:!1,showCancelButton:!0,confirmButtonText:"Yes",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"},showLoaderOnConfirm:!0,preConfirm:function(){return m.a.approveOrRejectServiceLogic(e,t).then((function(t){Object(b.c)(t),console.log(t),S(N.filter((function(t){return t.id!==e}))),localStorage.setItem("useBMStoken",!1)})).catch((function(e){localStorage.setItem("useBMStoken",!1),console.log(e.response),Object(b.a)(e)}))},buttonsStyling:!1},"allowOutsideClick",(function(){return!j.a.isLoading()}))).then((function(e){e.isConfirmed}))},w=[{name:"SL",minWidth:"20px",sortable:!0,cell:function(e,t){return t+1}},{name:"Minimum",minWidth:"100px",sortable:!0,selector:"minimum"},{name:"Maximum",minWidth:"100px",sortable:!0,selector:"maximum"},{name:"Is Financial",minWidth:"100px",sortable:!0,selector:function(e){return e.isFinancial?"True":"False"}},{name:"Service Keyword",minWidth:"100px",sortable:!0,selector:"serviceKeyword"},{name:"Rule Provider",minWidth:"100px",sortable:!0,selector:"ruleProvider"},{name:"Created By",minWidth:"100px",sortable:!0,selector:"createdBy"},{name:"Action",minWidth:"100px",selector:function(e){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("span",{title:"Approve",children:Object(x.jsx)(r.a,{size:15,color:"teal",style:{cursor:"pointer"},onClick:function(t){return T(e.id,1,"Do you want to approve?")}})}),"\xa0\xa0",Object(x.jsx)("span",{title:"Reject",children:Object(x.jsx)(c.a,{size:15,color:"red",style:{cursor:"pointer"},onClick:function(t){return T(e.id,0,"Do you want to reject?")}})})]})}}];return Object(x.jsxs)(i.a,{children:[Object(x.jsx)(l.a,{className:"border-bottom",children:Object(x.jsx)(u.a,{tag:"h4",children:"Pending Service Logics"})}),Object(x.jsx)(d.a,{children:Object(x.jsx)(p.a,{children:Object(x.jsx)(g.a,{md:"12",children:Object(x.jsx)(v.a,{column:w,TableData:N,TableDataLoading:a})})})})]})}}}]);
//# sourceMappingURL=173.31370874.chunk.js.map