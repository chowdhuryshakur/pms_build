(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[35],{2094:function(e,a,t){"use strict";t.r(a);var s=t(21),r=t(1),c=t(15),o=t(0),n=(t(79),t(1406)),i=t(446),l=t(472),d=t(468),u=t(460),b=t(459),p=t(475),j=t(467),h=t(1342),g=t(479),m=t(1369),f=t(476),O=t(466),x=t(455),v=t(451),y=t(478),N=t(471),k=(t(604),t(6));a.default=function(){var e=Object(o.useState)(!1),a=Object(c.a)(e,2),t=a[0],C=a[1],T=Object(o.useState)([]),M=Object(c.a)(T,2),P=M[0],R=M[1],z=Object(o.useState)([]),B=Object(c.a)(z,2),w=B[0],S=B[1],_=Object(o.useState)({}),H=Object(c.a)(_,2),E=H[0],L=H[1],G=JSON.parse(localStorage.getItem("userData")),J=Object(o.useState)({group_id:0,title:"",body:""}),q=Object(c.a)(J,2),D=q[0],F=q[1],I=function(e){F(Object(r.a)(Object(r.a)({},D),{},Object(s.a)({},e.target.name,e.target.value)))};Object(o.useEffect)((function(){O.a.getNotificationGroupList().then((function(e){console.log(e),R(e.data.payload.GroupList)})).catch((function(e){Object(x.a)(e),console.log(e)})),O.a.getCampaignChannelList().then((function(e){console.log(e),S(e.data.payload)})).catch((function(e){Object(x.a)(e),console.log(e)}))}),[]);return Object(k.jsxs)(o.Fragment,{children:["vendor"===G.role?Object(k.jsx)(i.a.Ripple,{className:"mb-1",color:"primary",tag:v.b,to:"/allBulkNotificationsVendor",children:Object(k.jsxs)("div",{className:"d-flex align-items-center",children:[Object(k.jsx)(n.a,{size:17,style:{marginRight:"5px"}}),Object(k.jsx)("span",{children:"Back"})]})}):Object(k.jsx)(i.a.Ripple,{className:"mb-1",color:"primary",tag:v.b,to:"/allBulkNotifications",children:Object(k.jsxs)("div",{className:"d-flex align-items-center",children:[Object(k.jsx)(n.a,{size:17,style:{marginRight:"5px"}}),Object(k.jsx)("span",{children:"Back"})]})}),Object(k.jsxs)(l.a,{children:[Object(k.jsx)(d.a,{className:"border-bottom",children:Object(k.jsx)(u.a,{tag:"h4",children:"Create Bulk Notification"})}),Object(k.jsx)(b.a,{style:{paddingTop:"15px"},children:Object(k.jsxs)(p.a,{className:"row",style:{width:"100%"},onSubmit:function(e){e.preventDefault();var a=D.group_id;a=parseInt(E.value),C(!0),O.a.createBulkNotification(Object(r.a)(Object(r.a)({},D),{},{group_id:a})).then((function(e){C(!1),Object(x.c)(e)})).catch((function(e){C(!1),Object(x.a)(e),console.log(e.response)}))},autoComplete:"off",children:[Object(k.jsx)(j.a,{sm:"6",children:Object(k.jsxs)(h.a,{children:[Object(k.jsx)(g.a,{for:"groups",children:"Group"}),Object(k.jsx)(y.a,{theme:N.h,maxMenuHeight:200,className:"react-select",classNamePrefix:"select",value:{value:E.value,label:E.label?E.label:"select a group"},onChange:function(e){L({value:e.value,label:e.label})},options:null===P||void 0===P?void 0:P.map((function(e){return{value:e.id,label:e.group_name}}))})]})}),Object(k.jsx)(j.a,{sm:"6"}),Object(k.jsx)(j.a,{sm:"6",children:Object(k.jsxs)(h.a,{children:[Object(k.jsx)(g.a,{for:"title",children:"Title"}),Object(k.jsx)(m.a,{type:"text",name:"title",id:"title",value:D.title,onChange:I,required:!0,placeholder:"your title"})]})}),Object(k.jsx)(j.a,{sm:"6"}),Object(k.jsx)(j.a,{sm:"6",children:Object(k.jsxs)(h.a,{children:[Object(k.jsx)(g.a,{for:"body",children:"body"}),Object(k.jsx)(m.a,{type:"textarea",name:"body",id:"body",value:D.body,onChange:I,required:!0,placeholder:"your message"})]})}),Object(k.jsx)(j.a,{sm:"6"}),w.map((function(e){return e.bulk_notification&&Object(k.jsx)(j.a,{sm:"2",className:"mb-1",children:Object(k.jsxs)(h.a,{check:!0,children:[Object(k.jsx)(m.a,{onChange:function(a){a.target.checked?F(Object(r.a)(Object(r.a)({},D),{},Object(s.a)({},e.key_name,!0))):F(Object(r.a)(Object(r.a)({},D),{},Object(s.a)({},e.key_name,!1)))},type:"checkbox",id:"channels"}),Object(k.jsx)(g.a,{for:"channels",check:!0,children:e.channel_name})]})},e.id)})),Object(k.jsx)(j.a,{sm:"12",className:"text-center",children:t?Object(k.jsxs)(i.a.Ripple,{color:"primary",className:"mr-1",disabled:!0,style:{marginTop:"25px"},children:[Object(k.jsx)(f.a,{color:"white",size:"sm"}),Object(k.jsx)("span",{className:"ml-50",children:"Loading..."})]}):Object(k.jsx)(i.a.Ripple,{className:"ml-2",color:"primary",type:"submit",style:{marginTop:"25px"},children:Object(k.jsx)("span",{children:"Submit"})})})]})})]})]})}},455:function(e,a,t){"use strict";t.d(a,"a",(function(){return r})),t.d(a,"b",(function(){return c})),t.d(a,"c",(function(){return o}));t(0);var s=t(118),r=function(e){try{var a=e.response;404===a.status||401===a.status||400===a.status||500===a.status?s.f.error(a.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):s.f.error("The server is under maintenance",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(a){s.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},c=function(e){try{var a=e.response;404!==a.status&&401!==a.status&&400!==a.status||s.f.error(a.data.errors?a.data.errors[Object.keys(a.data.errors)[0]]:a.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(a){s.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},o=function(e){var a=e.data.message||"success";s.f.success(a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},475:function(e,a,t){"use strict";var s=t(14),r=t(20),c=t(117),o=t(116),n=t(0),i=t.n(n),l=t(5),d=t.n(l),u=t(56),b=t.n(u),p=t(78),j={children:d.a.node,inline:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(c.a)(t)),t.submit=t.submit.bind(Object(c.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,c=e.inline,o=e.tag,n=e.innerRef,l=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),d=Object(p.mapToCssModules)(b()(a,!!c&&"form-inline"),t);return i.a.createElement(o,Object(s.a)({},l,{ref:n,className:d}))},a}(n.Component);h.propTypes=j,h.defaultProps={tag:"form"},a.a=h},476:function(e,a,t){"use strict";var s=t(14),r=t(20),c=t(0),o=t.n(c),n=t(5),i=t.n(n),l=t(56),d=t.n(l),u=t(78),b={tag:u.tagPropType,type:i.a.string,size:i.a.string,color:i.a.string,className:i.a.string,cssModule:i.a.object,children:i.a.string},p=function(e){var a=e.className,t=e.cssModule,c=e.type,n=e.size,i=e.color,l=e.children,b=e.tag,p=Object(r.a)(e,["className","cssModule","type","size","color","children","tag"]),j=Object(u.mapToCssModules)(d()(a,!!n&&"spinner-"+c+"-"+n,"spinner-"+c,!!i&&"text-"+i),t);return o.a.createElement(b,Object(s.a)({role:"status"},p,{className:j}),l&&o.a.createElement("span",{className:Object(u.mapToCssModules)("sr-only",t)},l))};p.propTypes=b,p.defaultProps={tag:"div",type:"border",children:"Loading..."},a.a=p},479:function(e,a,t){"use strict";var s=t(14),r=t(20),c=t(0),o=t.n(c),n=t(5),i=t.n(n),l=t(56),d=t.n(l),u=t(78),b=i.a.oneOfType([i.a.number,i.a.string]),p=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:b,order:b,offset:b})]),j={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:u.tagPropType,className:i.a.string,cssModule:i.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:i.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},m=function(e){var a=e.className,t=e.cssModule,c=e.hidden,n=e.widths,i=e.tag,l=e.check,b=e.size,p=e.for,j=Object(r.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),h=[];n.forEach((function(a,s){var r=e[a];if(delete j[a],r||""===r){var c,o=!s;if(Object(u.isObject)(r)){var n,i=o?"-":"-"+a+"-";c=g(o,a,r.size),h.push(Object(u.mapToCssModules)(d()(((n={})[c]=r.size||""===r.size,n["order"+i+r.order]=r.order||0===r.order,n["offset"+i+r.offset]=r.offset||0===r.offset,n))),t)}else c=g(o,a,r),h.push(c)}}));var m=Object(u.mapToCssModules)(d()(a,!!c&&"sr-only",!!l&&"form-check-label",!!b&&"col-form-label-"+b,h,!!h.length&&"col-form-label"),t);return o.a.createElement(i,Object(s.a)({htmlFor:p},j,{className:m}))};m.propTypes=j,m.defaultProps=h,a.a=m}}]);
//# sourceMappingURL=35.43b84daf.chunk.js.map