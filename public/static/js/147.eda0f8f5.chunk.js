(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[147],{2255:function(e,a,t){"use strict";t.r(a);var s=t(15),n=t(121),r=t(0),o=t(472),c=t(459),i=t(639),l=t(1380),u=t(1381),d=t(640),b=t(641),p=t(56),m=t.n(p),g=t(466),j=t(455),f=t(1376),h=t(465),O=t(467),v=t(675),x=t(6),T=function(e){var a=e.TableDataLoading,t=e.UserList,s=[{name:"Username",minWidth:"100px",sortable:!0,selector:"username"},{name:"Fullname",minWidth:"100px",sortable:!0,selector:"fullname"},{name:"Email",minWidth:"100px",sortable:!0,selector:"emailid"},{name:"Status",minWidth:"100px",selector:function(e){var a={0:{title:"Inactive",color:"light-danger"},1:{title:"Active",color:"light-success"}};return Object(x.jsx)(f.a,{color:a[e.userstatus].color,pill:!0,className:"px-1",children:a[e.userstatus].title})}},{name:"Action",minWidth:"100px",selector:function(e){return Object(x.jsx)(x.Fragment,{})}}];return Object(x.jsx)(o.a,{children:Object(x.jsx)(h.a,{children:Object(x.jsx)(O.a,{md:"12",children:Object(x.jsx)(v.a,{column:s,TableData:t,TableDataLoading:a})})})})},y=function(e){var a=e.TableDataLoading,t=e.UserList,s=[{name:"Username",minWidth:"100px",sortable:!0,selector:"username"},{name:"Fullname",minWidth:"100px",sortable:!0,selector:"fullname"},{name:"Email",minWidth:"100px",sortable:!0,selector:"emailid"},{name:"Status",minWidth:"100px",selector:function(e){var a={0:{title:"Inactive",color:"light-danger"},1:{title:"Active",color:"light-success"}};return Object(x.jsx)(f.a,{color:a[e.userstatus].color,pill:!0,className:"px-1",children:a[e.userstatus].title})}},{name:"Action",minWidth:"100px",selector:function(e){return Object(x.jsx)(x.Fragment,{})}}];return Object(x.jsx)(o.a,{children:Object(x.jsx)(h.a,{children:Object(x.jsx)(O.a,{md:"12",children:Object(x.jsx)(v.a,{column:s,TableData:t,TableDataLoading:a})})})})},C=t(21),N=t(1402),k=t(1504),P=t(481),L=t.n(P),M=t(482),w=t.n(M)()(L.a),D=function(e){var a=e.TableDataLoading,t=e.UserList,s=e.refresh,n=e.setRefresh,r=function(e,a,t){return w.fire(Object(C.a)({title:t,text:"You won't be able to revert this",icon:"warning",allowOutsideClick:!1,allowEscapeKey:!1,showCancelButton:!0,confirmButtonText:"Yes",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"},showLoaderOnConfirm:!0,preConfirm:function(){return g.a.approveRejectAdminUsers({username:e,action_id:a}).then((function(e){Object(j.c)(e),console.log(e),n(!s)})).catch((function(e){console.log(e.response),Object(j.a)(e)}))},buttonsStyling:!1},"allowOutsideClick",(function(){return!L.a.isLoading()}))).then((function(e){e.isConfirmed}))},c=[{name:"Username",minWidth:"100px",sortable:!0,selector:"username"},{name:"Fullname",minWidth:"100px",sortable:!0,selector:"fullname"},{name:"Email",minWidth:"100px",sortable:!0,selector:"emailid"},{name:"Status",minWidth:"100px",selector:function(e){var a={0:{title:"Inactive",color:"light-danger"},1:{title:"Active",color:"light-success"}};return Object(x.jsx)(f.a,{color:a[e.userstatus].color,pill:!0,className:"px-1",children:a[e.userstatus].title})}},{name:"Action",minWidth:"100px",selector:function(e){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("span",{title:"Approve",children:Object(x.jsx)(N.a,{size:15,color:"dodgerblue",style:{cursor:"pointer"},onClick:function(a){return r(e.username,1,"Do you want to approve?")}})}),"\xa0\xa0",Object(x.jsx)("span",{title:"Delete",children:Object(x.jsx)(k.a,{size:15,color:"red",style:{cursor:"pointer"},onClick:function(a){return r(e.username,2,"Do you want to delete?")}})})]})}}];return Object(x.jsx)(o.a,{children:Object(x.jsx)(h.a,{children:Object(x.jsx)(O.a,{md:"12",children:Object(x.jsx)(v.a,{column:c,TableData:t,TableDataLoading:a})})})})};a.default=function(){var e,a=(JSON.parse(localStorage.getItem("AssignedMenus"))||[]).map((function(e){return e.submenu.map((function(e){return e.id}))})),t=(e=[]).concat.apply(e,Object(n.a)(a)),p=Object(r.useState)(!0),f=Object(s.a)(p,2),h=f[0],O=f[1],v=Object(r.useState)("1"),C=Object(s.a)(v,2),N=C[0],k=C[1],P=Object(r.useState)({}),L=Object(s.a)(P,2),M=L[0],w=L[1],E=Object(r.useState)(!1),W=Object(s.a)(E,2),U=W[0],z=W[1],I=function(e){N!==e&&k(e)};return Object(r.useEffect)((function(){g.a.AdminUsersList().then((function(e){w(e.data.payload),O(!1)})).catch((function(e){Object(j.a)(e),console.log(e),O(!1)}))}),[U]),Object(x.jsxs)(r.Fragment,{children:[Object(x.jsx)(o.a,{children:Object(x.jsx)(c.a,{children:Object(x.jsxs)(i.a,{tabs:!0,children:[Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(l.a,{children:Object(x.jsx)(u.a,{className:m()({active:"1"===N}),onClick:function(){I("1")},children:" User List"})}),Object(x.jsx)(l.a,{children:Object(x.jsx)(u.a,{className:m()({active:"2"===N}),onClick:function(){I("2")},children:"My Pending Users"})})]}),t.includes(45)&&Object(x.jsx)(l.a,{children:Object(x.jsx)(u.a,{className:m()({active:"3"===N}),onClick:function(){I("3")},children:" Approve User"})})]})})}),Object(x.jsx)(o.a,{children:Object(x.jsxs)(d.a,{activeTab:N,children:[Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(b.a,{tabId:"1",children:Object(x.jsx)(T,{refresh:U,setRefresh:z,UserList:M.List,TableDataLoading:h})}),Object(x.jsx)(b.a,{tabId:"2",children:Object(x.jsx)(y,{refresh:U,setRefresh:z,UserList:M.MyPendingList,TableDataLoading:h})})]}),Object(x.jsx)(b.a,{tabId:"3",children:Object(x.jsx)(D,{refresh:U,setRefresh:z,UserList:M.PendingList,TableDataLoading:h})})]})})]})}},455:function(e,a,t){"use strict";t.d(a,"a",(function(){return n})),t.d(a,"b",(function(){return r})),t.d(a,"c",(function(){return o}));t(0);var s=t(118),n=function(e){try{var a=e.response;404===a.status||401===a.status||400===a.status||500===a.status?s.f.error(a.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):s.f.error("The server is under maintenance",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(a){s.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},r=function(e){try{var a=e.response;404!==a.status&&401!==a.status&&400!==a.status||s.f.error(a.data.errors?a.data.errors[Object.keys(a.data.errors)[0]]:a.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(a){s.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},o=function(e){var a=e.data.message||"success";s.f.success(a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},459:function(e,a,t){"use strict";var s=t(14),n=t(20),r=t(0),o=t.n(r),c=t(5),i=t.n(c),l=t(56),u=t.n(l),d=t(78),b={tag:d.tagPropType,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},p=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,c=e.tag,i=Object(n.a)(e,["className","cssModule","innerRef","tag"]),l=Object(d.mapToCssModules)(u()(a,"card-body"),t);return o.a.createElement(c,Object(s.a)({},i,{className:l,ref:r}))};p.propTypes=b,p.defaultProps={tag:"div"},a.a=p},465:function(e,a,t){"use strict";var s=t(14),n=t(20),r=t(0),o=t.n(r),c=t(5),i=t.n(c),l=t(56),u=t.n(l),d=t(78),b=i.a.oneOfType([i.a.number,i.a.string]),p={tag:d.tagPropType,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:b,sm:b,md:b,lg:b,xl:b},m={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,c=e.tag,i=e.form,l=e.widths,b=Object(n.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];l.forEach((function(a,t){var s=e[a];if(delete b[a],s){var n=!t;p.push(n?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var m=Object(d.mapToCssModules)(u()(a,r?"no-gutters":null,i?"form-row":"row",p),t);return o.a.createElement(c,Object(s.a)({},b,{className:m}))};g.propTypes=p,g.defaultProps=m,a.a=g},467:function(e,a,t){"use strict";var s=t(14),n=t(20),r=t(0),o=t.n(r),c=t(5),i=t.n(c),l=t(56),u=t.n(l),d=t(78),b=i.a.oneOfType([i.a.number,i.a.string]),p=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:b,offset:b})]),m={tag:d.tagPropType,xs:p,sm:p,md:p,lg:p,xl:p,className:i.a.string,cssModule:i.a.object,widths:i.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},f=function(e){var a=e.className,t=e.cssModule,r=e.widths,c=e.tag,i=Object(n.a)(e,["className","cssModule","widths","tag"]),l=[];r.forEach((function(a,s){var n=e[a];if(delete i[a],n||""===n){var r=!s;if(Object(d.isObject)(n)){var o,c=r?"-":"-"+a+"-",b=j(r,a,n.size);l.push(Object(d.mapToCssModules)(u()(((o={})[b]=n.size||""===n.size,o["order"+c+n.order]=n.order||0===n.order,o["offset"+c+n.offset]=n.offset||0===n.offset,o)),t))}else{var p=j(r,a,n);l.push(p)}}})),l.length||l.push("col");var b=Object(d.mapToCssModules)(u()(a,l),t);return o.a.createElement(c,Object(s.a)({},i,{className:b}))};f.propTypes=m,f.defaultProps=g,a.a=f},476:function(e,a,t){"use strict";var s=t(14),n=t(20),r=t(0),o=t.n(r),c=t(5),i=t.n(c),l=t(56),u=t.n(l),d=t(78),b={tag:d.tagPropType,type:i.a.string,size:i.a.string,color:i.a.string,className:i.a.string,cssModule:i.a.object,children:i.a.string},p=function(e){var a=e.className,t=e.cssModule,r=e.type,c=e.size,i=e.color,l=e.children,b=e.tag,p=Object(n.a)(e,["className","cssModule","type","size","color","children","tag"]),m=Object(d.mapToCssModules)(u()(a,!!c&&"spinner-"+r+"-"+c,"spinner-"+r,!!i&&"text-"+i),t);return o.a.createElement(b,Object(s.a)({role:"status"},p,{className:m}),l&&o.a.createElement("span",{className:Object(d.mapToCssModules)("sr-only",t)},l))};p.propTypes=b,p.defaultProps={tag:"div",type:"border",children:"Loading..."},a.a=p},505:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var s=t(0),n=t.n(s).a.createContext({})},639:function(e,a,t){"use strict";var s=t(14),n=t(20),r=t(0),o=t.n(r),c=t(5),i=t.n(c),l=t(56),u=t.n(l),d=t(78),b={tabs:i.a.bool,pills:i.a.bool,vertical:i.a.oneOfType([i.a.bool,i.a.string]),horizontal:i.a.string,justified:i.a.bool,fill:i.a.bool,navbar:i.a.bool,card:i.a.bool,tag:d.tagPropType,className:i.a.string,cssModule:i.a.object},p=function(e){var a=e.className,t=e.cssModule,r=e.tabs,c=e.pills,i=e.vertical,l=e.horizontal,b=e.justified,p=e.fill,m=e.navbar,g=e.card,j=e.tag,f=Object(n.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),h=Object(d.mapToCssModules)(u()(a,m?"navbar-nav":"nav",!!l&&"justify-content-"+l,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(i),{"nav-tabs":r,"card-header-tabs":g&&r,"nav-pills":c,"card-header-pills":g&&c,"nav-justified":b,"nav-fill":p}),t);return o.a.createElement(j,Object(s.a)({},f,{className:h}))};p.propTypes=b,p.defaultProps={tag:"ul",vertical:!1},a.a=p},640:function(e,a,t){"use strict";var s=t(14),n=t(116),r=t(0),o=t.n(r),c=t(5),i=t.n(c),l=t(56),u=t.n(l),d=t(505),b=t(78),p={tag:b.tagPropType,activeTab:i.a.any,className:i.a.string,cssModule:i.a.object},m=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(n.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,n=e.tag,r=Object(b.omit)(this.props,Object.keys(p)),c=Object(b.mapToCssModules)(u()("tab-content",a),t);return o.a.createElement(d.a.Provider,{value:{activeTabId:this.state.activeTab}},o.a.createElement(n,Object(s.a)({},r,{className:c})))},a}(r.Component);a.a=m,m.propTypes=p,m.defaultProps={tag:"div"}},641:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var s=t(14),n=t(20),r=t(0),o=t.n(r),c=t(5),i=t.n(c),l=t(56),u=t.n(l),d=t(505),b=t(78),p={tag:b.tagPropType,className:i.a.string,cssModule:i.a.object,tabId:i.a.any};function m(e){var a=e.className,t=e.cssModule,r=e.tabId,c=e.tag,i=Object(n.a)(e,["className","cssModule","tabId","tag"]),l=function(e){return Object(b.mapToCssModules)(u()("tab-pane",a,{active:r===e}),t)};return o.a.createElement(d.a.Consumer,null,(function(e){var a=e.activeTabId;return o.a.createElement(c,Object(s.a)({},i,{className:l(a)}))}))}m.propTypes=p,m.defaultProps={tag:"div"}},675:function(e,a,t){"use strict";var s=t(21),n=t(15),r=t(0),o=t(1405),c=t(476),i=t(485),l=t.n(i),u=t(492),d=t.n(u),b=t(6);a.a=function(e){var a=e.column,t=e.TableData,i=e.TableDataLoading,u=Object(r.useState)(0),p=Object(n.a)(u,2),m=p[0],g=p[1];return Object(b.jsx)(r.Fragment,{children:Object(b.jsx)(d.a,{noHeader:!0,pagination:!0,columns:a,paginationPerPage:10,className:"react-dataTable",sortIcon:Object(b.jsx)(o.a,{size:10}),paginationDefaultPage:m+1,paginationComponent:function(){var e;return Object(b.jsx)(l.a,(e={previousLabel:"",nextLabel:"",forcePage:m,onPageChange:function(e){return function(e){g(e.selected)}(e)},pageCount:t.length?t.length/10:1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link"},Object(s.a)(e,"breakClassName","page-item"),Object(s.a)(e,"breakLinkClassName","page-link"),Object(s.a)(e,"containerClassName","pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"),e))},data:t,progressPending:i,progressComponent:Object(b.jsx)(c.a,{color:"primary"}),responsive:!0})})}}}]);
//# sourceMappingURL=147.eda0f8f5.chunk.js.map