(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[27,147],{1319:function(e,t,a){"use strict";a.r(t);a(21),a(1);var n=a(10),c=a(0),s=a(1057),o=a(1061),r=a(1062),l=a(1028),i=a(463),u=a(471),d=a(479),m=a(476),p=a(473),b=a(474),j=a(472),f=a(520),h=a(496),g=a(689),O=a(515),x=a.n(O),v=a(504),y=a(485),N=(a(497),a(534)),T=a(6);t.default=function(){var e=JSON.parse(localStorage.getItem("userData")).role,t=Object(N.g)(),a=Object(c.useState)(!0),O=Object(n.a)(a,2),C=O[0],M=O[1],_=Object(c.useState)([]),P=Object(n.a)(_,2),w=P[0],S=P[1],z=Object(c.useState)(1),E=Object(n.a)(z,2),R=E[0],A=E[1],I=Object(c.useState)(5),D=Object(n.a)(I,2),L=D[0],F=(D[1],Object(c.useState)(null)),Q=Object(n.a)(F,2),W=Q[0],k=Q[1],J=[{value:"",label:"All Complains"},{value:3,label:"Pending"},{value:12,label:"Need Approval"},{value:7,label:"Accepted"},{value:10,label:"Quotation Pending"},{value:11,label:"Quotation Approved"},{value:13,label:"Finished"},{value:2,label:"Completed"},{value:4,label:"Cancelled"}],H={3:"light-danger",12:"warning",7:"light-success",10:"light-warning",11:"light-info",13:"info",2:"success",4:"danger"},U=function(e,t,a){h.a.getRenterComplainList({status_id:e,page:t,limit:a}).then((function(e){console.log("getRenterComplainList",e.data.payload),S(e.data.payload),M(!1)})).catch((function(e){console.log("getRenterComplainList",e),M(!1)}))};Object(c.useEffect)((function(){U(W,R,L)}),[]);var V=[{name:"ID",maxWidth:"50px",sortable:!0,selector:"complain_id"},{name:"Complain Date",minWidth:"150px",sortable:!0,selector:function(e){return Object(g.a)(e.created_at)}},{name:"Complain Type",minWidth:"150px",sortable:!0,selector:function(e){return e.complainItems[0].complainType?e.complainItems[0].complainType.complain_type_name:""}},{name:"Priority",minWidth:"150px",sortable:!0,selector:function(e){return e.complainItems[0].priority.priority_name}},{name:"Status",minWidth:"150px",sortable:!0,selector:function(e){return Object(T.jsx)(l.a,{pill:!0,color:H[e.complainItems[0].statusType.id],className:"px-1",children:e.complainItems[0].statusType.status_name})}},{name:"Details",minWidth:"100px",sortable:!0,selector:function(a){return Object(T.jsx)(i.a.Ripple,{color:"primary",type:"button",size:"sm",onClick:function(n){return t.push("/".concat(e,"/Complain/").concat(a.complain_id,"-").concat(a.complainItems[0].items_id))},children:"View"})}}],q=function(e){M(!0),"prev"===e?(A(R-1),U(W,R-1,L)):(A(R+1),U(W,R+1,L))};return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)(u.a,{children:[Object(T.jsxs)(d.a,{className:"border-bottom titleSelect",children:[Object(T.jsx)(m.a,{tag:"h4",children:"Complains"}),Object(T.jsx)(m.a,{children:Object(T.jsx)("small",{children:Object(T.jsx)(v.a,{theme:y.g,className:"react-select",classNamePrefix:"select",name:"branch_id",maxMenuHeight:150,onChange:function(e){M(!0),A(1),k(e.value),U(e.value,1,L)},options:J,defaultValue:J[0],isClearable:!1})})})]}),Object(T.jsx)(p.a,{children:Object(T.jsx)(b.a,{children:Object(T.jsxs)(j.a,{sm:"12",children:[Object(T.jsx)(x.a,{noHeader:!0,highlightOnHover:!0,data:w,columns:V,className:"react-dataTable",progressPending:C,sortIcon:Object(T.jsx)(s.a,{size:10}),progressComponent:Object(T.jsx)(f.a,{color:"primary"}),responsive:!0}),Object(T.jsxs)("div",{className:"text-right",children:[Object(T.jsx)(i.a.Ripple,{size:"sm",disabled:1===R,className:"mt-1",color:"secondary",onClick:function(e){return q("prev")},children:Object(T.jsx)(o.a,{color:"white",size:15})}),"\xa0\xa0\xa0\xa0",Object(T.jsx)(i.a.Ripple,{size:"sm",disabled:!w.length,className:"mt-1",color:"secondary",onClick:function(e){return q("next")},children:Object(T.jsx)(r.a,{color:"white",size:15})})]})]})})})]})})}},1936:function(e,t,a){"use strict";a.r(t);var n=a(121),c=a(10),s=a(0),o=a(474),r=a(472),l=a(471),i=a(479),u=a(476),d=a(473),m=a(1319),p=a(496),b=a(6);t.default=function(){var e=JSON.parse(localStorage.getItem("userData")).role,t=[{count:0,id:2,name:"Completed"},{count:0,id:3,name:"Pending"},{count:0,id:4,name:"Cancelled"},{count:0,id:7,name:"Accepted"},{count:0,id:10,name:"Quotation Pending"},{count:0,id:11,name:"Quotation Approved"},{count:0,id:12,name:"Need Approval"},{count:0,id:13,name:"Finished"}],a=[{count:0,id:3,name:"Landlord"},{count:0,id:4,name:"Tenant"},{count:0,id:5,name:"Contractor"}],j=Object(s.useState)([{count:0,name:"Contractor"},{count:0,name:"Landlord"},{count:0,name:"Tenant"}]),f=Object(c.a)(j,2),h=f[0],g=f[1],O=Object(s.useState)([{count:0,id:3,name:"Pending"},{count:0,id:12,name:"Need Approval"},{count:0,id:7,name:"Accepted"},{count:0,id:10,name:"Quotation Pending"},{count:0,id:11,name:"Quotation Approved"},{count:0,id:13,name:"Finished"},{count:0,id:2,name:"Completed"},{count:0,id:4,name:"Cancelled"}]),x=Object(c.a)(O,2),v=x[0],y=x[1],N=Object(s.useState)([{count:0,name:"Total"},{count:0,name:"Occupied"},{count:0,name:"Unoccupied"}]),T=Object(c.a)(N,2),C=T[0],M=T[1];return Object(s.useEffect)((function(){p.a.dashboardSummary().then((function(e){console.log("dashboardSummary",e.data.payload);var c=e.data.payload,s=c.complain_counter,o=c.property,r=c.user_counter,l=s?t.filter((function(e){return!1===s.some((function(t){return t.status_id===e.id}))})):[],i=r?a.filter((function(e){return!1===r.some((function(t){return t.user_type===e.id}))})):[];console.log(i),g(r?[].concat(Object(n.a)(r.map((function(e){return{count:e.number_of_user,name:e.user_type_name}}))),Object(n.a)(i)):h),y(s?[].concat(Object(n.a)(s.map((function(e){return{count:e.number_of_complain,name:e.status_name}}))),Object(n.a)(l)):v),M(o?[{count:o.occupied_property.length+o.unoccupied_property.length,name:"Total"},{count:o.occupied_property.length,name:"Occupied"},{count:o.unoccupied_property.length,name:"Unoccupied"}]:properties)})).catch((function(e){console.log("dashboardSummary",e),Error(e)}))}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(o.a,{children:h.map((function(t,a){return Object(b.jsx)(r.a,{sm:"EstateManager"===e?"4":"3",children:Object(b.jsx)(l.a,{children:Object(b.jsxs)("div",{className:"text-center pt-1",children:[Object(b.jsx)("h3",{children:Object(b.jsx)("b",{children:t.count})}),Object(b.jsx)("p",{className:"text-muted",children:t.name})]})})},a)}))}),Object(b.jsxs)(l.a,{children:[Object(b.jsx)(i.a,{children:Object(b.jsx)(u.a,{tag:"h4",children:"Property"})}),Object(b.jsx)(d.a,{className:"d-flex flex-row justify-content-around flex-wrap",children:C.map((function(e,t){return Object(b.jsxs)("div",{className:"text-center pt-1 mx-1",children:[Object(b.jsx)("h3",{children:Object(b.jsx)("b",{children:e.count})}),Object(b.jsx)("p",{className:"text-muted",children:e.name})]},t)}))})]}),"Estatemanager"!==e&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(l.a,{children:[Object(b.jsx)(i.a,{children:Object(b.jsx)(u.a,{tag:"h4",children:"Complains Overview"})}),Object(b.jsx)(d.a,{className:"d-flex flex-row justify-content-around flex-wrap",children:v.map((function(e,t){return Object(b.jsxs)("div",{className:"text-center pt-1 mx-1",children:[Object(b.jsx)("h3",{children:Object(b.jsx)("b",{children:e.count})}),Object(b.jsx)("p",{className:"text-muted",children:e.name})]},t)}))})]}),Object(b.jsx)(m.default,{})]})]})}},471:function(e,t,a){"use strict";var n=a(15),c=a(20),s=a(0),o=a.n(s),r=a(5),l=a.n(r),i=a(58),u=a.n(i),d=a(80),m={tag:d.tagPropType,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},p=function(e){var t=e.className,a=e.cssModule,s=e.color,r=e.body,l=e.inverse,i=e.outline,m=e.tag,p=e.innerRef,b=Object(c.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),j=Object(d.mapToCssModules)(u()(t,"card",!!l&&"text-white",!!r&&"card-body",!!s&&(i?"border":"bg")+"-"+s),a);return o.a.createElement(m,Object(n.a)({},b,{className:j,ref:p}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},472:function(e,t,a){"use strict";var n=a(15),c=a(20),s=a(0),o=a.n(s),r=a(5),l=a.n(r),i=a(58),u=a.n(i),d=a(80),m=l.a.oneOfType([l.a.number,l.a.string]),p=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:m,offset:m})]),b={tag:d.tagPropType,xs:p,sm:p,md:p,lg:p,xl:p,className:l.a.string,cssModule:l.a.object,widths:l.a.array},j={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},h=function(e){var t=e.className,a=e.cssModule,s=e.widths,r=e.tag,l=Object(c.a)(e,["className","cssModule","widths","tag"]),i=[];s.forEach((function(t,n){var c=e[t];if(delete l[t],c||""===c){var s=!n;if(Object(d.isObject)(c)){var o,r=s?"-":"-"+t+"-",m=f(s,t,c.size);i.push(Object(d.mapToCssModules)(u()(((o={})[m]=c.size||""===c.size,o["order"+r+c.order]=c.order||0===c.order,o["offset"+r+c.offset]=c.offset||0===c.offset,o)),a))}else{var p=f(s,t,c);i.push(p)}}})),i.length||i.push("col");var m=Object(d.mapToCssModules)(u()(t,i),a);return o.a.createElement(r,Object(n.a)({},l,{className:m}))};h.propTypes=b,h.defaultProps=j,t.a=h},473:function(e,t,a){"use strict";var n=a(15),c=a(20),s=a(0),o=a.n(s),r=a(5),l=a.n(r),i=a(58),u=a.n(i),d=a(80),m={tag:d.tagPropType,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},p=function(e){var t=e.className,a=e.cssModule,s=e.innerRef,r=e.tag,l=Object(c.a)(e,["className","cssModule","innerRef","tag"]),i=Object(d.mapToCssModules)(u()(t,"card-body"),a);return o.a.createElement(r,Object(n.a)({},l,{className:i,ref:s}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},476:function(e,t,a){"use strict";var n=a(15),c=a(20),s=a(0),o=a.n(s),r=a(5),l=a.n(r),i=a(58),u=a.n(i),d=a(80),m={tag:d.tagPropType,className:l.a.string,cssModule:l.a.object},p=function(e){var t=e.className,a=e.cssModule,s=e.tag,r=Object(c.a)(e,["className","cssModule","tag"]),l=Object(d.mapToCssModules)(u()(t,"card-title"),a);return o.a.createElement(s,Object(n.a)({},r,{className:l}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},479:function(e,t,a){"use strict";var n=a(15),c=a(20),s=a(0),o=a.n(s),r=a(5),l=a.n(r),i=a(58),u=a.n(i),d=a(80),m={tag:d.tagPropType,className:l.a.string,cssModule:l.a.object},p=function(e){var t=e.className,a=e.cssModule,s=e.tag,r=Object(c.a)(e,["className","cssModule","tag"]),l=Object(d.mapToCssModules)(u()(t,"card-header"),a);return o.a.createElement(s,Object(n.a)({},r,{className:l}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},520:function(e,t,a){"use strict";var n=a(15),c=a(20),s=a(0),o=a.n(s),r=a(5),l=a.n(r),i=a(58),u=a.n(i),d=a(80),m={tag:d.tagPropType,type:l.a.string,size:l.a.string,color:l.a.string,className:l.a.string,cssModule:l.a.object,children:l.a.string},p=function(e){var t=e.className,a=e.cssModule,s=e.type,r=e.size,l=e.color,i=e.children,m=e.tag,p=Object(c.a)(e,["className","cssModule","type","size","color","children","tag"]),b=Object(d.mapToCssModules)(u()(t,!!r&&"spinner-"+s+"-"+r,"spinner-"+s,!!l&&"text-"+l),a);return o.a.createElement(m,Object(n.a)({role:"status"},p,{className:b}),i&&o.a.createElement("span",{className:Object(d.mapToCssModules)("sr-only",a)},i))};p.propTypes=m,p.defaultProps={tag:"div",type:"border",children:"Loading..."},t.a=p},689:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n={year:"numeric",month:"long",day:"numeric"},c=function(e){var t=new Date(e).getTime(),a=Math.floor(t/6e4%60),c=Math.floor(t/36e5%24);c=c<10?"0".concat(c):c,a=a<10?"0".concat(a):a;var s=new Date(e).toLocaleDateString(void 0,n),o="".concat(c," : ").concat(a);return"".concat(s," , ").concat(o)}}}]);
//# sourceMappingURL=27.b03ecfcd.chunk.js.map