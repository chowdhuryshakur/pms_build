(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[231],{2141:function(e,t,a){"use strict";a.r(t);var s=a(21),i=a(1),o=a(15),c=a(0),r=(a(79),a(1063),a(472)),n=a(469),l=a(461),d=a(460),u=a(475),b=a(467),f=a(1341),h=a(479),j=a(1368),p=a(446),g=a(477),O=a(466),m=a(456),v=(a(471),a(604),a(6));t.default=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],x=t[1],N=Object(c.useState)({Notification_Title:"",Notification_Body:"",viaSMS:!1,viaEmail:!1,viaPushNotification:!1}),y=Object(o.a)(N,2),k=y[0],C=y[1],T=function(e){C(Object(i.a)(Object(i.a)({},k),{},Object(s.a)({},e.target.name,e.target.value)))};return Object(v.jsxs)(r.a,{children:[Object(v.jsx)(n.a,{className:"border-bottom",children:Object(v.jsx)(l.a,{tag:"h4",children:"Create Notification"})}),Object(v.jsx)(d.a,{style:{paddingTop:"15px"},children:Object(v.jsxs)(u.a,{className:"row",style:{width:"100%"},onSubmit:function(e){e.preventDefault();var t=k.Notification_Title,a=k.Notification_Body,s=k.viaSMS,i=k.viaEmail,o=k.viaPushNotification;x(!0),O.a.createNotifications({Notification_Title:t,Notification_Body:a,viaSMS:s,viaEmail:i,viaPushNotification:o}).then((function(e){x(!1),Object(m.c)(e)})).catch((function(e){x(!1),Object(m.a)(e),console.log(e)}))},autoComplete:"off",children:[Object(v.jsx)(b.a,{sm:"6",children:Object(v.jsxs)(f.a,{children:[Object(v.jsx)(h.a,{for:"Notification_Title",children:"Title"}),Object(v.jsx)(j.a,{type:"text",name:"Notification_Title",id:"Notification_Title",value:k.Notification_Title,onChange:T,required:!0,placeholder:"your title"})]})}),Object(v.jsx)(b.a,{sm:"6"}),Object(v.jsx)(b.a,{sm:"6",children:Object(v.jsxs)(f.a,{children:[Object(v.jsx)(h.a,{for:"Notification_Body",children:"Message"}),Object(v.jsx)(j.a,{type:"textarea",name:"Notification_Body",id:"Notification_Body",value:k.Notification_Body,onChange:T,required:!0,placeholder:"your message"})]})}),Object(v.jsx)(b.a,{sm:"12",children:Object(v.jsxs)(f.a,{check:!0,children:[Object(v.jsx)(j.a,{onChange:function(e){e.target.checked?C(Object(i.a)(Object(i.a)({},k),{},{viaSMS:!0})):C(Object(i.a)(Object(i.a)({},k),{},{viaSMS:!1}))},type:"checkbox",id:"viaSMS"}),Object(v.jsx)(h.a,{for:"viaSMS",check:!0,children:"Notification send via SMS"})]})}),Object(v.jsx)(b.a,{sm:"12",children:Object(v.jsxs)(f.a,{check:!0,children:[Object(v.jsx)(j.a,{onChange:function(e){e.target.checked?C(Object(i.a)(Object(i.a)({},k),{},{viaEmail:!0})):C(Object(i.a)(Object(i.a)({},k),{},{viaEmail:!1}))},type:"checkbox",id:"viaEmail"}),Object(v.jsx)(h.a,{for:"viaEmail",check:!0,children:"Notification send via Email"})]})}),Object(v.jsx)(b.a,{sm:"12",children:Object(v.jsxs)(f.a,{check:!0,children:[Object(v.jsx)(j.a,{onChange:function(e){e.target.checked?C(Object(i.a)(Object(i.a)({},k),{},{viaPushNotification:!0})):C(Object(i.a)(Object(i.a)({},k),{},{viaPushNotification:!1}))},type:"checkbox",id:"viaPushNotification"}),Object(v.jsx)(h.a,{for:"viaPushNotification",check:!0,children:"Notification send via Push Notification"})]})}),Object(v.jsx)(b.a,{sm:"6",className:"text-center",children:a?Object(v.jsxs)(p.a.Ripple,{color:"primary",className:"mr-1",disabled:!0,style:{marginTop:"25px"},children:[Object(v.jsx)(g.a,{color:"white",size:"sm"}),Object(v.jsx)("span",{className:"ml-50",children:"Loading..."})]}):Object(v.jsx)(p.a.Ripple,{className:"ml-2",color:"primary",type:"submit",style:{marginTop:"25px"},children:Object(v.jsx)("span",{children:"Create"})})})]})})]})}},456:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return c}));a(0);var s=a(121),i=function(e){try{var t=e.response;404===t.status||401===t.status||400===t.status||500===t.status?s.f.error(t.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):s.f.error("The server is under maintenance",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(t){s.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},o=function(e){try{var t=e.response;404!==t.status&&401!==t.status&&400!==t.status||s.f.error(t.data.errors?t.data.errors[Object.keys(t.data.errors)[0]]:t.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(t){s.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},c=function(e){var t=e.data.message||"success";s.f.success(t,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},475:function(e,t,a){"use strict";var s=a(14),i=a(20),o=a(117),c=a(116),r=a(0),n=a.n(r),l=a(5),d=a.n(l),u=a(56),b=a.n(u),f=a(78),h={children:d.a.node,inline:d.a.bool,tag:f.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},j=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.submit=a.submit.bind(Object(o.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.inline,c=e.tag,r=e.innerRef,l=Object(i.a)(e,["className","cssModule","inline","tag","innerRef"]),d=Object(f.mapToCssModules)(b()(t,!!o&&"form-inline"),a);return n.a.createElement(c,Object(s.a)({},l,{ref:r,className:d}))},t}(r.Component);j.propTypes=h,j.defaultProps={tag:"form"},t.a=j},477:function(e,t,a){"use strict";var s=a(14),i=a(20),o=a(0),c=a.n(o),r=a(5),n=a.n(r),l=a(56),d=a.n(l),u=a(78),b={tag:u.tagPropType,type:n.a.string,size:n.a.string,color:n.a.string,className:n.a.string,cssModule:n.a.object,children:n.a.string},f=function(e){var t=e.className,a=e.cssModule,o=e.type,r=e.size,n=e.color,l=e.children,b=e.tag,f=Object(i.a)(e,["className","cssModule","type","size","color","children","tag"]),h=Object(u.mapToCssModules)(d()(t,!!r&&"spinner-"+o+"-"+r,"spinner-"+o,!!n&&"text-"+n),a);return c.a.createElement(b,Object(s.a)({role:"status"},f,{className:h}),l&&c.a.createElement("span",{className:Object(u.mapToCssModules)("sr-only",a)},l))};f.propTypes=b,f.defaultProps={tag:"div",type:"border",children:"Loading..."},t.a=f},479:function(e,t,a){"use strict";var s=a(14),i=a(20),o=a(0),c=a.n(o),r=a(5),n=a.n(r),l=a(56),d=a.n(l),u=a(78),b=n.a.oneOfType([n.a.number,n.a.string]),f=n.a.oneOfType([n.a.bool,n.a.string,n.a.number,n.a.shape({size:b,order:b,offset:b})]),h={children:n.a.node,hidden:n.a.bool,check:n.a.bool,size:n.a.string,for:n.a.string,tag:u.tagPropType,className:n.a.string,cssModule:n.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:n.a.array},j={tag:"label",widths:["xs","sm","md","lg","xl"]},p=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},g=function(e){var t=e.className,a=e.cssModule,o=e.hidden,r=e.widths,n=e.tag,l=e.check,b=e.size,f=e.for,h=Object(i.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),j=[];r.forEach((function(t,s){var i=e[t];if(delete h[t],i||""===i){var o,c=!s;if(Object(u.isObject)(i)){var r,n=c?"-":"-"+t+"-";o=p(c,t,i.size),j.push(Object(u.mapToCssModules)(d()(((r={})[o]=i.size||""===i.size,r["order"+n+i.order]=i.order||0===i.order,r["offset"+n+i.offset]=i.offset||0===i.offset,r))),a)}else o=p(c,t,i),j.push(o)}}));var g=Object(u.mapToCssModules)(d()(t,!!o&&"sr-only",!!l&&"form-check-label",!!b&&"col-form-label-"+b,j,!!j.length&&"col-form-label"),a);return c.a.createElement(n,Object(s.a)({htmlFor:f},h,{className:g}))};g.propTypes=h,g.defaultProps=j,t.a=g}}]);
//# sourceMappingURL=231.73fc849d.chunk.js.map