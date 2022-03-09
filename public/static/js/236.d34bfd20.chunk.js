(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[236],{2099:function(e,a,s){"use strict";s.r(a);var t=s(21),r=s(1),o=s(15),c=s(0),n=(s(79),s(1406)),l=s(446),i=s(472),u=s(469),d=s(461),p=s(460),b=s(475),m=s(467),g=s(1341),h=s(479),j=s(1368),f=s(477),O=s(466),v=s(456),x=s(451),y=s(478),N=s(471),C=(s(604),s(6));a.default=function(){var e=Object(c.useState)(!1),a=Object(o.a)(e,2),s=a[0],k=a[1],T=Object(c.useState)({value:"",label:"select a group type"}),M=Object(o.a)(T,2),P=M[0],z=M[1],R=Object(c.useState)({name:"",groupType:1,isDefault:!1,campaignId:0}),S=Object(o.a)(R,2),B=S[0],w=S[1];return Object(C.jsxs)(c.Fragment,{children:[Object(C.jsx)(l.a.Ripple,{className:"mb-1",color:"primary",tag:x.b,to:"/allGroups",children:Object(C.jsxs)("div",{className:"d-flex align-items-center",children:[Object(C.jsx)(n.a,{size:17,style:{marginRight:"5px"}}),Object(C.jsx)("span",{children:"Back"})]})}),Object(C.jsxs)(i.a,{children:[Object(C.jsx)(u.a,{className:"border-bottom",children:Object(C.jsx)(d.a,{tag:"h4",children:"Create Group"})}),Object(C.jsx)(p.a,{style:{paddingTop:"15px"},children:Object(C.jsxs)(b.a,{className:"row",style:{width:"100%"},onSubmit:function(e){e.preventDefault(),localStorage.setItem("useBMStoken",!0);var a=B.name,s=B.isDefault,t=B.groupType;t=t.value,k(!0),O.a.createGroup({name:a,isDefault:s,groupType:t}).then((function(e){k(!1),localStorage.setItem("useBMStoken",!1),Object(v.c)(e)})).catch((function(e){k(!1),localStorage.setItem("useBMStoken",!1),Object(v.a)(e),console.log(e)}))},autoComplete:"off",children:[Object(C.jsx)(m.a,{sm:"6",children:Object(C.jsxs)(g.a,{children:[Object(C.jsx)(h.a,{for:"name",children:"Group Name"}),Object(C.jsx)(j.a,{type:"text",name:"name",id:"name",value:B.name,onChange:function(e){w(Object(r.a)(Object(r.a)({},B),{},Object(t.a)({},e.target.name,e.target.value)))},required:!0,placeholder:"group name"})]})}),Object(C.jsx)(m.a,{sm:"6",children:Object(C.jsxs)(g.a,{children:[Object(C.jsx)(h.a,{for:"groupType",children:"Group Type"}),Object(C.jsx)(y.a,{theme:N.h,maxMenuHeight:200,className:"react-select",classNamePrefix:"select",value:{value:P.value,label:P.label},onChange:function(e){z({value:e.value,label:e.label})},options:[{value:1,label:"Customer"},{value:2,label:"Agent"},{value:3,label:"Merchant"}]})]})}),Object(C.jsx)(m.a,{sm:"12",className:"mb-1",children:Object(C.jsxs)(g.a,{check:!0,children:[Object(C.jsx)(j.a,{onChange:function(e){e.target.checked?w(Object(r.a)(Object(r.a)({},B),{},{isDefault:!0})):w(Object(r.a)(Object(r.a)({},B),{},{isDefault:!1}))},type:"checkbox",id:"isDefault"}),Object(C.jsx)(h.a,{for:"isDefault",check:!0,children:"Is Default?"})]})}),Object(C.jsx)(m.a,{sm:"12",className:"text-center",children:s?Object(C.jsxs)(l.a.Ripple,{color:"primary",className:"mr-1",disabled:!0,style:{marginTop:"25px"},children:[Object(C.jsx)(f.a,{color:"white",size:"sm"}),Object(C.jsx)("span",{className:"ml-50",children:"Loading..."})]}):Object(C.jsx)(l.a.Ripple,{className:"ml-2",color:"primary",type:"submit",style:{marginTop:"25px"},children:Object(C.jsx)("span",{children:"Submit"})})})]})})]})]})}},456:function(e,a,s){"use strict";s.d(a,"a",(function(){return r})),s.d(a,"b",(function(){return o})),s.d(a,"c",(function(){return c}));s(0);var t=s(121),r=function(e){try{var a=e.response;404===a.status||401===a.status||400===a.status||500===a.status?t.f.error(a.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):t.f.error("The server is under maintenance",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(a){t.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},o=function(e){try{var a=e.response;404!==a.status&&401!==a.status&&400!==a.status||t.f.error(a.data.errors?a.data.errors[Object.keys(a.data.errors)[0]]:a.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(a){t.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},c=function(e){var a=e.data.message||"success";t.f.success(a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},475:function(e,a,s){"use strict";var t=s(14),r=s(20),o=s(117),c=s(116),n=s(0),l=s.n(n),i=s(5),u=s.n(i),d=s(56),p=s.n(d),b=s(78),m={children:u.a.node,inline:u.a.bool,tag:b.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},g=function(e){function a(a){var s;return(s=e.call(this,a)||this).getRef=s.getRef.bind(Object(o.a)(s)),s.submit=s.submit.bind(Object(o.a)(s)),s}Object(c.a)(a,e);var s=a.prototype;return s.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},s.submit=function(){this.ref&&this.ref.submit()},s.render=function(){var e=this.props,a=e.className,s=e.cssModule,o=e.inline,c=e.tag,n=e.innerRef,i=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(b.mapToCssModules)(p()(a,!!o&&"form-inline"),s);return l.a.createElement(c,Object(t.a)({},i,{ref:n,className:u}))},a}(n.Component);g.propTypes=m,g.defaultProps={tag:"form"},a.a=g},477:function(e,a,s){"use strict";var t=s(14),r=s(20),o=s(0),c=s.n(o),n=s(5),l=s.n(n),i=s(56),u=s.n(i),d=s(78),p={tag:d.tagPropType,type:l.a.string,size:l.a.string,color:l.a.string,className:l.a.string,cssModule:l.a.object,children:l.a.string},b=function(e){var a=e.className,s=e.cssModule,o=e.type,n=e.size,l=e.color,i=e.children,p=e.tag,b=Object(r.a)(e,["className","cssModule","type","size","color","children","tag"]),m=Object(d.mapToCssModules)(u()(a,!!n&&"spinner-"+o+"-"+n,"spinner-"+o,!!l&&"text-"+l),s);return c.a.createElement(p,Object(t.a)({role:"status"},b,{className:m}),i&&c.a.createElement("span",{className:Object(d.mapToCssModules)("sr-only",s)},i))};b.propTypes=p,b.defaultProps={tag:"div",type:"border",children:"Loading..."},a.a=b},479:function(e,a,s){"use strict";var t=s(14),r=s(20),o=s(0),c=s.n(o),n=s(5),l=s.n(n),i=s(56),u=s.n(i),d=s(78),p=l.a.oneOfType([l.a.number,l.a.string]),b=l.a.oneOfType([l.a.bool,l.a.string,l.a.number,l.a.shape({size:p,order:p,offset:p})]),m={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:d.tagPropType,className:l.a.string,cssModule:l.a.object,xs:b,sm:b,md:b,lg:b,xl:b,widths:l.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,a,s){return!0===s||""===s?e?"col":"col-"+a:"auto"===s?e?"col-auto":"col-"+a+"-auto":e?"col-"+s:"col-"+a+"-"+s},j=function(e){var a=e.className,s=e.cssModule,o=e.hidden,n=e.widths,l=e.tag,i=e.check,p=e.size,b=e.for,m=Object(r.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),g=[];n.forEach((function(a,t){var r=e[a];if(delete m[a],r||""===r){var o,c=!t;if(Object(d.isObject)(r)){var n,l=c?"-":"-"+a+"-";o=h(c,a,r.size),g.push(Object(d.mapToCssModules)(u()(((n={})[o]=r.size||""===r.size,n["order"+l+r.order]=r.order||0===r.order,n["offset"+l+r.offset]=r.offset||0===r.offset,n))),s)}else o=h(c,a,r),g.push(o)}}));var j=Object(d.mapToCssModules)(u()(a,!!o&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,g,!!g.length&&"col-form-label"),s);return c.a.createElement(l,Object(t.a)({htmlFor:b},m,{className:j}))};j.propTypes=m,j.defaultProps=g,a.a=j}}]);
//# sourceMappingURL=236.d34bfd20.chunk.js.map