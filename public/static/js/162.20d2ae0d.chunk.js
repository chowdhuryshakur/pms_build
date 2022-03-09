(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[162],{1340:function(e,a,t){"use strict";t.r(a);t(21),t(1);var s=t(10),c=t(0),n=t(1078),o=t(1082),r=t(1083),l=t(1049),i=t(463),u=t(471),d=t(476),p=t(475),m=t(472),b=t(474),j=t(473),g=t(517),f=t(492),h=t(631),O=t(518),v=t.n(O),y=t(501),x=t(487),N=(t(497),t(540)),T=t(6);a.default=function(){var e=JSON.parse(localStorage.getItem("userData")).role,a=Object(N.g)(),t=Object(c.useState)(!0),O=Object(s.a)(t,2),M=O[0],C=O[1],P=Object(c.useState)([]),w=Object(s.a)(P,2),z=w[0],S=w[1],_=Object(c.useState)(1),I=Object(s.a)(_,2),R=I[0],E=I[1],D=Object(c.useState)(5),W=Object(s.a)(D,2),k=W[0],L=(W[1],Object(c.useState)(null)),A=Object(s.a)(L,2),H=A[0],J=A[1],F=[{value:"",label:"All Complains"},{value:3,label:"Pending"},{value:12,label:"Need Approval"},{value:7,label:"Accepted"},{value:10,label:"Quotation Pending"},{value:11,label:"Quotation Approved"},{value:13,label:"Finished"},{value:2,label:"Completed"},{value:4,label:"Cancelled"}],Q={3:"light-danger",12:"warning",7:"light-success",10:"light-warning",11:"light-info",13:"info",2:"success",4:"danger"},V=function(e,a,t){f.a.getRenterComplainList({status_id:e,page:a,limit:t}).then((function(e){console.log("getRenterComplainList",e.data.payload),S(e.data.payload),C(!1)})).catch((function(e){console.log("getRenterComplainList",e),C(!1)}))};Object(c.useEffect)((function(){V(H,R,k)}),[]);var q=[{name:"ID",maxWidth:"50px",sortable:!0,selector:"complain_id"},{name:"Complain Date",minWidth:"150px",sortable:!0,selector:function(e){return Object(h.a)(e.created_at)}},{name:"Complain Type",minWidth:"150px",sortable:!0,selector:function(e){return e.complainItems[0].complainType?e.complainItems[0].complainType.complain_type_name:""}},{name:"Priority",minWidth:"150px",sortable:!0,selector:function(e){return e.complainItems[0].priority.priority_name}},{name:"Status",minWidth:"150px",sortable:!0,selector:function(e){return Object(T.jsx)(l.a,{pill:!0,color:Q[e.complainItems[0].statusType.id],className:"px-1",children:e.complainItems[0].statusType.status_name})}},{name:"Details",minWidth:"100px",sortable:!0,selector:function(t){return Object(T.jsx)(i.a.Ripple,{color:"primary",type:"button",size:"sm",onClick:function(s){return a.push("/".concat(e,"/Complain/").concat(t.complain_id,"-").concat(t.complainItems[0].items_id))},children:"View"})}}],B=function(e){C(!0),"prev"===e?(E(R-1),V(H,R-1,k)):(E(R+1),V(H,R+1,k))};return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)(u.a,{children:[Object(T.jsxs)(d.a,{className:"border-bottom titleSelect",children:[Object(T.jsx)(p.a,{tag:"h4",children:"Complains"}),Object(T.jsx)(p.a,{children:Object(T.jsx)("small",{children:Object(T.jsx)(y.a,{theme:x.g,className:"react-select",classNamePrefix:"select",name:"branch_id",maxMenuHeight:150,onChange:function(e){C(!0),E(1),J(e.value),V(e.value,1,k)},options:F,defaultValue:F[0],isClearable:!1})})})]}),Object(T.jsx)(m.a,{children:Object(T.jsx)(b.a,{children:Object(T.jsxs)(j.a,{sm:"12",children:[Object(T.jsx)(v.a,{noHeader:!0,highlightOnHover:!0,data:z,columns:q,className:"react-dataTable",progressPending:M,sortIcon:Object(T.jsx)(n.a,{size:10}),progressComponent:Object(T.jsx)(g.a,{color:"primary"}),responsive:!0}),Object(T.jsxs)("div",{className:"text-right",children:[Object(T.jsx)(i.a.Ripple,{size:"sm",disabled:1===R,className:"mt-1",color:"secondary",onClick:function(e){return B("prev")},children:Object(T.jsx)(o.a,{color:"white",size:15})}),"\xa0\xa0\xa0\xa0",Object(T.jsx)(i.a.Ripple,{size:"sm",disabled:!z.length,className:"mt-1",color:"secondary",onClick:function(e){return B("next")},children:Object(T.jsx)(r.a,{color:"white",size:15})})]})]})})})]})})}},472:function(e,a,t){"use strict";var s=t(15),c=t(20),n=t(0),o=t.n(n),r=t(5),l=t.n(r),i=t(58),u=t.n(i),d=t(80),p={tag:d.tagPropType,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},m=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,r=e.tag,l=Object(c.a)(e,["className","cssModule","innerRef","tag"]),i=Object(d.mapToCssModules)(u()(a,"card-body"),t);return o.a.createElement(r,Object(s.a)({},l,{className:i,ref:n}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},473:function(e,a,t){"use strict";var s=t(15),c=t(20),n=t(0),o=t.n(n),r=t(5),l=t.n(r),i=t(58),u=t.n(i),d=t(80),p=l.a.oneOfType([l.a.number,l.a.string]),m=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:p,offset:p})]),b={tag:d.tagPropType,xs:m,sm:m,md:m,lg:m,xl:m,className:l.a.string,cssModule:l.a.object,widths:l.a.array},j={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},f=function(e){var a=e.className,t=e.cssModule,n=e.widths,r=e.tag,l=Object(c.a)(e,["className","cssModule","widths","tag"]),i=[];n.forEach((function(a,s){var c=e[a];if(delete l[a],c||""===c){var n=!s;if(Object(d.isObject)(c)){var o,r=n?"-":"-"+a+"-",p=g(n,a,c.size);i.push(Object(d.mapToCssModules)(u()(((o={})[p]=c.size||""===c.size,o["order"+r+c.order]=c.order||0===c.order,o["offset"+r+c.offset]=c.offset||0===c.offset,o)),t))}else{var m=g(n,a,c);i.push(m)}}})),i.length||i.push("col");var p=Object(d.mapToCssModules)(u()(a,i),t);return o.a.createElement(r,Object(s.a)({},l,{className:p}))};f.propTypes=b,f.defaultProps=j,a.a=f},475:function(e,a,t){"use strict";var s=t(15),c=t(20),n=t(0),o=t.n(n),r=t(5),l=t.n(r),i=t(58),u=t.n(i),d=t(80),p={tag:d.tagPropType,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,n=e.tag,r=Object(c.a)(e,["className","cssModule","tag"]),l=Object(d.mapToCssModules)(u()(a,"card-title"),t);return o.a.createElement(n,Object(s.a)({},r,{className:l}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},476:function(e,a,t){"use strict";var s=t(15),c=t(20),n=t(0),o=t.n(n),r=t(5),l=t.n(r),i=t(58),u=t.n(i),d=t(80),p={tag:d.tagPropType,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,n=e.tag,r=Object(c.a)(e,["className","cssModule","tag"]),l=Object(d.mapToCssModules)(u()(a,"card-header"),t);return o.a.createElement(n,Object(s.a)({},r,{className:l}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},517:function(e,a,t){"use strict";var s=t(15),c=t(20),n=t(0),o=t.n(n),r=t(5),l=t.n(r),i=t(58),u=t.n(i),d=t(80),p={tag:d.tagPropType,type:l.a.string,size:l.a.string,color:l.a.string,className:l.a.string,cssModule:l.a.object,children:l.a.string},m=function(e){var a=e.className,t=e.cssModule,n=e.type,r=e.size,l=e.color,i=e.children,p=e.tag,m=Object(c.a)(e,["className","cssModule","type","size","color","children","tag"]),b=Object(d.mapToCssModules)(u()(a,!!r&&"spinner-"+n+"-"+r,"spinner-"+n,!!l&&"text-"+l),t);return o.a.createElement(p,Object(s.a)({role:"status"},m,{className:b}),i&&o.a.createElement("span",{className:Object(d.mapToCssModules)("sr-only",t)},i))};m.propTypes=p,m.defaultProps={tag:"div",type:"border",children:"Loading..."},a.a=m},631:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var s={year:"numeric",month:"long",day:"numeric"},c=function(e){var a=new Date(e).getTime(),t=Math.floor(a/6e4%60),c=Math.floor(a/36e5%24);c=c<10?"0".concat(c):c,t=t<10?"0".concat(t):t;var n=new Date(e).toLocaleDateString(void 0,s),o="".concat(c," : ").concat(t);return"".concat(n," , ").concat(o)}}}]);
//# sourceMappingURL=162.20d2ae0d.chunk.js.map