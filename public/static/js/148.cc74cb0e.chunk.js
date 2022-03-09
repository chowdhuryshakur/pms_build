(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[148],{1941:function(e,a,t){"use strict";t.r(a);var s=t(21),c=t(1),n=t(10),r=t(0),o=t(472),l=t(477),i=t(475),d=t(471),u=t(495),b=t(473),m=t(998),j=t(490),p=t(1026),f=t(1024),O=t(1025),g=t(852),h=t(463),x=t(516),y=t(503),v=t(484),N=t(493),M=t(534),T=t(498),C=t(497),S=t(511),P=t.n(S),R=t(512),E=t.n(R),z=t(6);E()(P.a);a.default=function(){var e=Object(M.g)(),a=Object(r.useRef)(),t=Object(r.useState)(!1),S=Object(n.a)(t,2),P=S[0],R=S[1],E=Object(r.useState)(""),w=Object(n.a)(E,2),_=w[0],k=w[1],F=Object(r.useState)(!1),q=Object(n.a)(F,2),A=q[0],L=q[1],B=Object(r.useState)([]),D=Object(n.a)(B,2),J=D[0],H=D[1],$=Object(r.useState)({mobile:"",email:"",full_name:"",address:""}),G=Object(n.a)($,2),I=G[0],K=G[1],Q=Object(r.useState)({email:!1,mobile:!1}),U=Object(n.a)(Q,2),V=U[0],W=U[1],X=function(e){var a=/\S+@\S+\.\S+/.test(e.target.value);if("email"===e.target.name&&a&&W(Object(c.a)(Object(c.a)({},V),{},{email:!1})),"email"!==e.target.name||a||W(Object(c.a)(Object(c.a)({},V),{},{email:!0})),"mobile"===e.target.name){if("0"===e.target.value[0])return W(Object(c.a)(Object(c.a)({},V),{},{mobile:!0})),0;if(W(Object(c.a)(Object(c.a)({},V),{},{mobile:!1})),!/^[0-9]*$/.test(e.target.value))return 0}K(Object(c.a)(Object(c.a)({},I),{},Object(s.a)({},e.target.name,e.target.value)))};return Object(z.jsx)(r.Fragment,{children:Object(z.jsxs)(o.a,{children:[Object(z.jsx)(l.a,{className:"border-bottom",children:Object(z.jsx)(i.a,{tag:"h4",children:"Create Branch Manager"})}),Object(z.jsx)(d.a,{children:Object(z.jsxs)(u.a,{className:"row pt-1",style:{width:"100%"},onSubmit:function(a){a.preventDefault(),console.log(I);var t=I.mobile,s=I.email,c=I.full_name,n=I.address;if(!/\S+@\S+\.\S+/.test(s))return 0;R(!0),N.a.createEstateManager({mobile:t,email:s,full_name:c,address:n}).then((function(a){console.log(a),R(!1),e.push("/EstateAdmin/MyBranchManagers")})).catch((function(e){Object(C.a)(e),R(!1)}))},autoComplete:"off",children:[Object(z.jsx)(b.a,{md:"4",children:Object(z.jsxs)(m.a,{children:[Object(z.jsx)(j.a,{for:"full_name",children:"Full Name"}),Object(z.jsx)(p.a,{required:!0,type:"text",id:"full_name",name:"full_name",placeholder:"manager name",value:I.full_name,onChange:X})]})}),Object(z.jsx)(b.a,{md:"4",children:Object(z.jsxs)(m.a,{children:[Object(z.jsx)(j.a,{className:"form-label",for:"mobile",children:"Mobile Number"}),Object(z.jsxs)(f.a,{className:"input-group-merge w-100 mb-1",children:[Object(z.jsx)(O.a,{addonType:"prepend",children:Object(z.jsx)(g.a,{children:T.e})}),Object(z.jsx)(p.a,{autoFocus:!0,required:!0,type:"text",minLength:10,maxLength:10,id:"mobile",name:"mobile",value:I.mobile,onChange:X,placeholder:"123-456-7899"})]}),V.mobile&&Object(z.jsx)("span",{style:{color:"red",fontSize:"11px"},children:"First digit 0 not allow"})]})}),Object(z.jsx)(b.a,{md:"4",children:Object(z.jsxs)(m.a,{children:[Object(z.jsx)(j.a,{for:"email",children:"Email"}),Object(z.jsx)(p.a,{required:!0,type:"email",id:"email",name:"email",placeholder:"example@gmail.com",value:I.email,onChange:X}),V.email&&I.email&&Object(z.jsx)("span",{style:{color:"red",fontSize:"11px"},children:"Please Enter a valid Email"})]})}),Object(z.jsxs)(b.a,{md:"6",children:[Object(z.jsx)(j.a,{for:"postcode",children:"Search Address by Post Code"}),Object(z.jsxs)(f.a,{children:[Object(z.jsx)(p.a,{type:"text",id:"postcode",name:"postcode",placeholder:"enter a valid postcode",value:_,onChange:function(e){return k(e.target.value)}}),Object(z.jsx)(O.a,{addonType:"append",children:Object(z.jsx)(h.a,{color:"primary",outline:!0,type:"button",onClick:function(e){e.preventDefault(),L(!0),N.a.ukAddressEndpoint({postCode:_}).then((function(e){console.log(e.data.payload),H(e.data.payload.addresses.map((function(e){return"".concat(e.building_number,", ").concat(e.thoroughfare,", ").concat(e.locality,", ").concat(e.town_or_city)}))),L(!1)})).catch((function(e){H([]),L(!1),Object(C.a)(e)}))},children:A?Object(z.jsx)(x.a,{size:"sm"}):"Search"})})]})]}),Object(z.jsxs)(b.a,{md:"6",children:[Object(z.jsx)(j.a,{children:"Address"}),Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(y.a,{ref:a,theme:v.g,className:"react-select",classNamePrefix:"select",name:"address",onChange:function(e){K(Object(c.a)(Object(c.a)({},I),{},{address:e.value}))},maxMenuHeight:150,options:J.map((function(e){return{value:e,label:e}})),value:{value:I.address,label:I.address},isClearable:!1}),Object(z.jsx)(p.a,{required:!0,style:{opacity:0,width:"100%",height:0},onFocus:function(e){return a.current.select.focus()},value:I.address||"",onChange:function(e){return""}})]})]}),Object(z.jsx)(b.a,{md:"12 text-center",children:Object(z.jsx)(h.a.Ripple,{className:"mt-2",color:"primary",type:"submit",disabled:P,children:P?Object(z.jsx)(x.a,{size:"sm"}):"Submit"})})]})})]})})}},471:function(e,a,t){"use strict";var s=t(15),c=t(20),n=t(0),r=t.n(n),o=t(5),l=t.n(o),i=t(58),d=t.n(i),u=t(80),b={tag:u.tagPropType,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},m=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,o=e.tag,l=Object(c.a)(e,["className","cssModule","innerRef","tag"]),i=Object(u.mapToCssModules)(d()(a,"card-body"),t);return r.a.createElement(o,Object(s.a)({},l,{className:i,ref:n}))};m.propTypes=b,m.defaultProps={tag:"div"},a.a=m},472:function(e,a,t){"use strict";var s=t(15),c=t(20),n=t(0),r=t.n(n),o=t(5),l=t.n(o),i=t(58),d=t.n(i),u=t(80),b={tag:u.tagPropType,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},m=function(e){var a=e.className,t=e.cssModule,n=e.color,o=e.body,l=e.inverse,i=e.outline,b=e.tag,m=e.innerRef,j=Object(c.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(u.mapToCssModules)(d()(a,"card",!!l&&"text-white",!!o&&"card-body",!!n&&(i?"border":"bg")+"-"+n),t);return r.a.createElement(b,Object(s.a)({},j,{className:p,ref:m}))};m.propTypes=b,m.defaultProps={tag:"div"},a.a=m},475:function(e,a,t){"use strict";var s=t(15),c=t(20),n=t(0),r=t.n(n),o=t(5),l=t.n(o),i=t(58),d=t.n(i),u=t(80),b={tag:u.tagPropType,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,n=e.tag,o=Object(c.a)(e,["className","cssModule","tag"]),l=Object(u.mapToCssModules)(d()(a,"card-title"),t);return r.a.createElement(n,Object(s.a)({},o,{className:l}))};m.propTypes=b,m.defaultProps={tag:"div"},a.a=m},477:function(e,a,t){"use strict";var s=t(15),c=t(20),n=t(0),r=t.n(n),o=t(5),l=t.n(o),i=t(58),d=t.n(i),u=t(80),b={tag:u.tagPropType,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,n=e.tag,o=Object(c.a)(e,["className","cssModule","tag"]),l=Object(u.mapToCssModules)(d()(a,"card-header"),t);return r.a.createElement(n,Object(s.a)({},o,{className:l}))};m.propTypes=b,m.defaultProps={tag:"div"},a.a=m},490:function(e,a,t){"use strict";var s=t(15),c=t(20),n=t(0),r=t.n(n),o=t(5),l=t.n(o),i=t(58),d=t.n(i),u=t(80),b=l.a.oneOfType([l.a.number,l.a.string]),m=l.a.oneOfType([l.a.bool,l.a.string,l.a.number,l.a.shape({size:b,order:b,offset:b})]),j={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:u.tagPropType,className:l.a.string,cssModule:l.a.object,xs:m,sm:m,md:m,lg:m,xl:m,widths:l.a.array},p={tag:"label",widths:["xs","sm","md","lg","xl"]},f=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},O=function(e){var a=e.className,t=e.cssModule,n=e.hidden,o=e.widths,l=e.tag,i=e.check,b=e.size,m=e.for,j=Object(c.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),p=[];o.forEach((function(a,s){var c=e[a];if(delete j[a],c||""===c){var n,r=!s;if(Object(u.isObject)(c)){var o,l=r?"-":"-"+a+"-";n=f(r,a,c.size),p.push(Object(u.mapToCssModules)(d()(((o={})[n]=c.size||""===c.size,o["order"+l+c.order]=c.order||0===c.order,o["offset"+l+c.offset]=c.offset||0===c.offset,o))),t)}else n=f(r,a,c),p.push(n)}}));var O=Object(u.mapToCssModules)(d()(a,!!n&&"sr-only",!!i&&"form-check-label",!!b&&"col-form-label-"+b,p,!!p.length&&"col-form-label"),t);return r.a.createElement(l,Object(s.a)({htmlFor:m},j,{className:O}))};O.propTypes=j,O.defaultProps=p,a.a=O},495:function(e,a,t){"use strict";var s=t(15),c=t(20),n=t(120),r=t(119),o=t(0),l=t.n(o),i=t(5),d=t.n(i),u=t(58),b=t.n(u),m=t(80),j={children:d.a.node,inline:d.a.bool,tag:m.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},p=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(n.a)(t)),t.submit=t.submit.bind(Object(n.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,n=e.inline,r=e.tag,o=e.innerRef,i=Object(c.a)(e,["className","cssModule","inline","tag","innerRef"]),d=Object(m.mapToCssModules)(b()(a,!!n&&"form-inline"),t);return l.a.createElement(r,Object(s.a)({},i,{ref:o,className:d}))},a}(o.Component);p.propTypes=j,p.defaultProps={tag:"form"},a.a=p},516:function(e,a,t){"use strict";var s=t(15),c=t(20),n=t(0),r=t.n(n),o=t(5),l=t.n(o),i=t(58),d=t.n(i),u=t(80),b={tag:u.tagPropType,type:l.a.string,size:l.a.string,color:l.a.string,className:l.a.string,cssModule:l.a.object,children:l.a.string},m=function(e){var a=e.className,t=e.cssModule,n=e.type,o=e.size,l=e.color,i=e.children,b=e.tag,m=Object(c.a)(e,["className","cssModule","type","size","color","children","tag"]),j=Object(u.mapToCssModules)(d()(a,!!o&&"spinner-"+n+"-"+o,"spinner-"+n,!!l&&"text-"+l),t);return r.a.createElement(b,Object(s.a)({role:"status"},m,{className:j}),i&&r.a.createElement("span",{className:Object(u.mapToCssModules)("sr-only",t)},i))};m.propTypes=b,m.defaultProps={tag:"div",type:"border",children:"Loading..."},a.a=m}}]);
//# sourceMappingURL=148.cc74cb0e.chunk.js.map