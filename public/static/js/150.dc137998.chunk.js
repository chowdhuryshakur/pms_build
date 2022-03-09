(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[150],{1943:function(e,a,t){"use strict";t.r(a);var s=t(21),n=t(1),c=t(10),r=t(0),o=t(472),l=t(476),i=t(475),u=t(471),d=t(494),b=t(473),m=t(998),f=t(488),p=t(1026),j=t(463),g=t(515),h=t(501),O=t(483),y=t(492),v=t(534),N=(t(498),t(496)),M=t(508),x=t.n(M),T=t(509),_=t.n(T),C=t(6);_()(x.a);a.default=function(){var e=Object(v.g)(),a=Object(r.useRef)(),t=Object(r.useState)(!1),M=Object(c.a)(t,2),x=M[0],T=M[1],_=Object(r.useState)([]),R=Object(c.a)(_,2),P=R[0],E=R[1],w=Object(r.useState)({branch_name:"",sub_estate_manager_id:""}),z=Object(c.a)(w,2),k=z[0],B=z[1];Object(r.useEffect)((function(){y.a.EstateManagerList().then((function(e){console.log(e.data.payload),E(e.data.payload)})).catch((function(e){Object(N.a)(e),console.log(e)}))}),[]);return Object(C.jsx)(r.Fragment,{children:Object(C.jsxs)(o.a,{children:[Object(C.jsx)(l.a,{className:"border-bottom",children:Object(C.jsx)(i.a,{tag:"h4",children:"Create New Branch"})}),Object(C.jsx)(u.a,{children:Object(C.jsxs)(d.a,{className:"row pt-1",style:{width:"100%"},onSubmit:function(a){a.preventDefault(),console.log(k),T(!0);var t=k.branch_name,s=k.sub_estate_manager_id;y.a.createBranch({branch_name:t,sub_estate_manager_id:s}).then((function(a){console.log(a),Object(N.b)(a),T(!1),e.push("/EstateAdmin/MyBranches")})).catch((function(e){Object(N.a)(e),T(!1)}))},autoComplete:"off",children:[Object(C.jsx)(b.a,{md:"4",children:Object(C.jsxs)(m.a,{children:[Object(C.jsx)(f.a,{for:"branch_name",children:"Branch Name"}),Object(C.jsx)(p.a,{required:!0,type:"text",id:"branch_name",name:"branch_name",placeholder:"name",value:k.branch_name,onChange:function(e){B(Object(n.a)(Object(n.a)({},k),{},Object(s.a)({},e.target.name,e.target.value)))}})]})}),Object(C.jsxs)(b.a,{md:"4",children:[Object(C.jsx)(f.a,{children:"Branch Manager"}),Object(C.jsx)(h.a,{ref:a,theme:O.g,className:"react-select",classNamePrefix:"select",name:"sub_estate_manager_id",onChange:function(e){B(Object(n.a)(Object(n.a)({},k),{},{sub_estate_manager_id:e.value}))},options:P.map((function(e){return{value:e.user_id,label:e.full_name}})),isLoading:!P.length,isClearable:!1}),Object(C.jsx)(p.a,{required:!0,style:{opacity:0,width:"100%",height:0},onFocus:function(e){return a.current.select.focus()},value:k.sub_estate_manager_id||"",onChange:function(e){return""}})]}),Object(C.jsx)(b.a,{md:"4 text-center",children:Object(C.jsx)(j.a.Ripple,{className:"mt-2",color:"primary",type:"submit",disabled:x,children:x?Object(C.jsx)(g.a,{size:"sm"}):"Submit"})})]})})]})})}},471:function(e,a,t){"use strict";var s=t(15),n=t(20),c=t(0),r=t.n(c),o=t(5),l=t.n(o),i=t(58),u=t.n(i),d=t(80),b={tag:d.tagPropType,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},m=function(e){var a=e.className,t=e.cssModule,c=e.innerRef,o=e.tag,l=Object(n.a)(e,["className","cssModule","innerRef","tag"]),i=Object(d.mapToCssModules)(u()(a,"card-body"),t);return r.a.createElement(o,Object(s.a)({},l,{className:i,ref:c}))};m.propTypes=b,m.defaultProps={tag:"div"},a.a=m},472:function(e,a,t){"use strict";var s=t(15),n=t(20),c=t(0),r=t.n(c),o=t(5),l=t.n(o),i=t(58),u=t.n(i),d=t(80),b={tag:d.tagPropType,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},m=function(e){var a=e.className,t=e.cssModule,c=e.color,o=e.body,l=e.inverse,i=e.outline,b=e.tag,m=e.innerRef,f=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(d.mapToCssModules)(u()(a,"card",!!l&&"text-white",!!o&&"card-body",!!c&&(i?"border":"bg")+"-"+c),t);return r.a.createElement(b,Object(s.a)({},f,{className:p,ref:m}))};m.propTypes=b,m.defaultProps={tag:"div"},a.a=m},475:function(e,a,t){"use strict";var s=t(15),n=t(20),c=t(0),r=t.n(c),o=t(5),l=t.n(o),i=t(58),u=t.n(i),d=t(80),b={tag:d.tagPropType,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,c=e.tag,o=Object(n.a)(e,["className","cssModule","tag"]),l=Object(d.mapToCssModules)(u()(a,"card-title"),t);return r.a.createElement(c,Object(s.a)({},o,{className:l}))};m.propTypes=b,m.defaultProps={tag:"div"},a.a=m},476:function(e,a,t){"use strict";var s=t(15),n=t(20),c=t(0),r=t.n(c),o=t(5),l=t.n(o),i=t(58),u=t.n(i),d=t(80),b={tag:d.tagPropType,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,c=e.tag,o=Object(n.a)(e,["className","cssModule","tag"]),l=Object(d.mapToCssModules)(u()(a,"card-header"),t);return r.a.createElement(c,Object(s.a)({},o,{className:l}))};m.propTypes=b,m.defaultProps={tag:"div"},a.a=m},488:function(e,a,t){"use strict";var s=t(15),n=t(20),c=t(0),r=t.n(c),o=t(5),l=t.n(o),i=t(58),u=t.n(i),d=t(80),b=l.a.oneOfType([l.a.number,l.a.string]),m=l.a.oneOfType([l.a.bool,l.a.string,l.a.number,l.a.shape({size:b,order:b,offset:b})]),f={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:d.tagPropType,className:l.a.string,cssModule:l.a.object,xs:m,sm:m,md:m,lg:m,xl:m,widths:l.a.array},p={tag:"label",widths:["xs","sm","md","lg","xl"]},j=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,c=e.hidden,o=e.widths,l=e.tag,i=e.check,b=e.size,m=e.for,f=Object(n.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),p=[];o.forEach((function(a,s){var n=e[a];if(delete f[a],n||""===n){var c,r=!s;if(Object(d.isObject)(n)){var o,l=r?"-":"-"+a+"-";c=j(r,a,n.size),p.push(Object(d.mapToCssModules)(u()(((o={})[c]=n.size||""===n.size,o["order"+l+n.order]=n.order||0===n.order,o["offset"+l+n.offset]=n.offset||0===n.offset,o))),t)}else c=j(r,a,n),p.push(c)}}));var g=Object(d.mapToCssModules)(u()(a,!!c&&"sr-only",!!i&&"form-check-label",!!b&&"col-form-label-"+b,p,!!p.length&&"col-form-label"),t);return r.a.createElement(l,Object(s.a)({htmlFor:m},f,{className:g}))};g.propTypes=f,g.defaultProps=p,a.a=g},494:function(e,a,t){"use strict";var s=t(15),n=t(20),c=t(120),r=t(119),o=t(0),l=t.n(o),i=t(5),u=t.n(i),d=t(58),b=t.n(d),m=t(80),f={children:u.a.node,inline:u.a.bool,tag:m.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},p=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(c.a)(t)),t.submit=t.submit.bind(Object(c.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,c=e.inline,r=e.tag,o=e.innerRef,i=Object(n.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(m.mapToCssModules)(b()(a,!!c&&"form-inline"),t);return l.a.createElement(r,Object(s.a)({},i,{ref:o,className:u}))},a}(o.Component);p.propTypes=f,p.defaultProps={tag:"form"},a.a=p},515:function(e,a,t){"use strict";var s=t(15),n=t(20),c=t(0),r=t.n(c),o=t(5),l=t.n(o),i=t(58),u=t.n(i),d=t(80),b={tag:d.tagPropType,type:l.a.string,size:l.a.string,color:l.a.string,className:l.a.string,cssModule:l.a.object,children:l.a.string},m=function(e){var a=e.className,t=e.cssModule,c=e.type,o=e.size,l=e.color,i=e.children,b=e.tag,m=Object(n.a)(e,["className","cssModule","type","size","color","children","tag"]),f=Object(d.mapToCssModules)(u()(a,!!o&&"spinner-"+c+"-"+o,"spinner-"+c,!!l&&"text-"+l),t);return r.a.createElement(b,Object(s.a)({role:"status"},m,{className:f}),i&&r.a.createElement("span",{className:Object(d.mapToCssModules)("sr-only",t)},i))};m.propTypes=b,m.defaultProps={tag:"div",type:"border",children:"Loading..."},a.a=m}}]);
//# sourceMappingURL=150.dc137998.chunk.js.map