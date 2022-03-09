(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[157],{2157:function(e,a,t){"use strict";t.r(a);var s=t(21),c=t(1),n=t(10),r=t(0),o=t(472),l=t(477),i=t(475),d=t(473),u=t(494),m=t(474),b=t(1138),j=t(491),p=t(1165),f=t(1163),g=t(1164),h=t(928),O=t(464),x=t(521),v=t(500),y=t(487),N=t(490),_=t(549),M=t(493),T=t(498),C=t(510),S=t.n(C),P=t(511),E=t.n(P),R=t(6);E()(S.a);a.default=function(){var e=Object(_.g)(),a=Object(r.useRef)(),t=Object(r.useState)(!1),C=Object(n.a)(t,2),S=C[0],P=C[1],E=Object(r.useState)(""),z=Object(n.a)(E,2),w=z[0],k=z[1],F=Object(r.useState)(!1),A=Object(n.a)(F,2),L=A[0],q=A[1],D=Object(r.useState)([]),H=Object(n.a)(D,2),J=H[0],$=H[1],B=Object(r.useState)([]),G=Object(n.a)(B,2),I=G[0],K=G[1];Object(r.useEffect)((function(){N.a.TenantChargesList().then((function(e){console.log(e.data.payload),K(e.data.payload)})).catch((function(e){Object(T.a)(e),console.log(e)}))}),[]);var Q=Object(r.useState)({mobile:"",email:"",full_name:"",address:"",commission_percentage:0,per_tenant_charge_id:1}),U=Object(n.a)(Q,2),V=U[0],W=U[1],X=Object(r.useState)({email:!1,mobile:!1}),Y=Object(n.a)(X,2),Z=Y[0],ee=Y[1],ae=function(e){var a=/\S+@\S+\.\S+/.test(e.target.value);if("email"===e.target.name&&a&&ee(Object(c.a)(Object(c.a)({},Z),{},{email:!1})),"email"!==e.target.name||a||ee(Object(c.a)(Object(c.a)({},Z),{},{email:!0})),"mobile"===e.target.name){if("0"===e.target.value[0])return ee(Object(c.a)(Object(c.a)({},Z),{},{mobile:!0})),0;if(ee(Object(c.a)(Object(c.a)({},Z),{},{mobile:!1})),!/^[0-9]*$/.test(e.target.value))return 0}W(Object(c.a)(Object(c.a)({},V),{},Object(s.a)({},e.target.name,e.target.value)))};return Object(R.jsx)(r.Fragment,{children:Object(R.jsxs)(o.a,{children:[Object(R.jsx)(l.a,{className:"border-bottom",children:Object(R.jsx)(i.a,{tag:"h4",children:"Create Estate Admin"})}),Object(R.jsx)(d.a,{children:Object(R.jsxs)(u.a,{className:"row pt-1",style:{width:"100%"},onSubmit:function(a){a.preventDefault(),console.log(V);var t=V.mobile,s=V.email,c=V.full_name,n=V.address,r=V.commission_percentage,o=V.per_tenant_charge_id;if(!/\S+@\S+\.\S+/.test(s))return 0;P(!0),N.a.createEstateManager({mobile:t,email:s,full_name:c,address:n,commission_percentage:r,per_tenant_charge_id:o}).then((function(a){console.log(a),P(!1),e.push("/SuperAdmin/EstateAdminList")})).catch((function(e){Object(T.a)(e),P(!1)}))},autoComplete:"off",children:[Object(R.jsx)(m.a,{md:"4",children:Object(R.jsxs)(b.a,{children:[Object(R.jsx)(j.a,{for:"full_name",children:"Full Name"}),Object(R.jsx)(p.a,{required:!0,type:"text",id:"full_name",name:"full_name",placeholder:"admin name",value:V.full_name,onChange:ae})]})}),Object(R.jsx)(m.a,{md:"4",children:Object(R.jsxs)(b.a,{children:[Object(R.jsx)(j.a,{className:"form-label",for:"mobile",children:"Mobile Number"}),Object(R.jsxs)(f.a,{className:"input-group-merge w-100 mb-1",children:[Object(R.jsx)(g.a,{addonType:"prepend",children:Object(R.jsx)(h.a,{children:M.e})}),Object(R.jsx)(p.a,{autoFocus:!0,required:!0,type:"text",minLength:10,maxLength:10,id:"mobile",name:"mobile",value:V.mobile,onChange:ae,placeholder:"123-456-7899"})]}),Z.mobile&&Object(R.jsx)("span",{style:{color:"red",fontSize:"11px"},children:"First digit 0 not allow"})]})}),Object(R.jsx)(m.a,{md:"4",children:Object(R.jsxs)(b.a,{children:[Object(R.jsx)(j.a,{for:"email",children:"Email"}),Object(R.jsx)(p.a,{required:!0,type:"email",id:"email",name:"email",placeholder:"example@gmail.com",value:V.email,onChange:ae}),Z.email&&V.email&&Object(R.jsx)("span",{style:{color:"red",fontSize:"11px"},children:"Please Enter a valid Email"})]})}),Object(R.jsxs)(m.a,{md:"6",children:[Object(R.jsx)(j.a,{for:"postcode",children:"Search Address by Post Code"}),Object(R.jsxs)(f.a,{children:[Object(R.jsx)(p.a,{type:"text",id:"postcode",name:"postcode",placeholder:"enter a valid postcode",value:w,onChange:function(e){return k(e.target.value)}}),Object(R.jsx)(g.a,{addonType:"append",children:Object(R.jsx)(O.a,{color:"primary",outline:!0,type:"button",onClick:function(e){e.preventDefault(),q(!0),W(Object(c.a)(Object(c.a)({},V),{},{address:""})),N.a.ukAddressEndpoint({postCode:w}).then((function(e){console.log(e.data.payload),$(e.data.payload.addresses.map((function(e){return"".concat(e.building_number,", ").concat(e.thoroughfare,", ").concat(e.locality,", ").concat(e.town_or_city)}))),q(!1)})).catch((function(e){$([]),q(!1),Object(T.a)(e)}))},children:L?Object(R.jsx)(x.a,{size:"sm"}):"Search"})})]})]}),Object(R.jsxs)(m.a,{md:"6",children:[Object(R.jsx)(j.a,{children:"Address"}),Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(v.a,{ref:a,theme:y.g,className:"react-select",classNamePrefix:"select",name:"address",onChange:function(e){W(Object(c.a)(Object(c.a)({},V),{},{address:e.value}))},maxMenuHeight:150,options:J.map((function(e){return{value:e,label:e}})),value:{value:V.address,label:V.address},isClearable:!1}),Object(R.jsx)(p.a,{required:!0,style:{opacity:0,width:"100%",height:0},onFocus:function(e){return a.current.select.focus()},value:V.address||"",onChange:function(e){return""}})]})]}),Object(R.jsx)(m.a,{md:"6",children:Object(R.jsxs)(b.a,{children:[Object(R.jsx)(j.a,{for:"commission_percentage",children:"commission_percentage (%)"}),Object(R.jsx)(p.a,{type:"number",min:0,max:99,id:"commission_percentage",name:"commission_percentage",placeholder:"0",value:V.commission_percentage,onChange:ae})]})}),Object(R.jsx)(m.a,{md:"6",children:Object(R.jsxs)(b.a,{children:[Object(R.jsx)(j.a,{for:"per_tenant_charge_id",children:"Charge Per Tenant "}),Object(R.jsx)(v.a,{theme:y.g,className:"react-select",classNamePrefix:"select",name:"address",onChange:function(e){W(Object(c.a)(Object(c.a)({},V),{},{per_tenant_charge_id:e.value}))},maxMenuHeight:100,options:I.map((function(e){return{value:e.id,label:e.charge_name}})),value:I.filter((function(e){return e.id===V.per_tenant_charge_id})).map((function(e){return{value:e.id,label:e.charge_name}})),isClearable:!1})]})}),Object(R.jsx)(m.a,{md:"12 text-center",children:Object(R.jsx)(O.a.Ripple,{className:"mt-2",color:"primary",type:"submit",disabled:S,children:S?Object(R.jsx)(x.a,{size:"sm"}):"Submit"})})]})})]})})}},472:function(e,a,t){"use strict";var s=t(15),c=t(20),n=t(0),r=t.n(n),o=t(5),l=t.n(o),i=t(58),d=t.n(i),u=t(80),m={tag:u.tagPropType,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},b=function(e){var a=e.className,t=e.cssModule,n=e.color,o=e.body,l=e.inverse,i=e.outline,m=e.tag,b=e.innerRef,j=Object(c.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(u.mapToCssModules)(d()(a,"card",!!l&&"text-white",!!o&&"card-body",!!n&&(i?"border":"bg")+"-"+n),t);return r.a.createElement(m,Object(s.a)({},j,{className:p,ref:b}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},473:function(e,a,t){"use strict";var s=t(15),c=t(20),n=t(0),r=t.n(n),o=t(5),l=t.n(o),i=t(58),d=t.n(i),u=t(80),m={tag:u.tagPropType,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},b=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,o=e.tag,l=Object(c.a)(e,["className","cssModule","innerRef","tag"]),i=Object(u.mapToCssModules)(d()(a,"card-body"),t);return r.a.createElement(o,Object(s.a)({},l,{className:i,ref:n}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},475:function(e,a,t){"use strict";var s=t(15),c=t(20),n=t(0),r=t.n(n),o=t(5),l=t.n(o),i=t(58),d=t.n(i),u=t(80),m={tag:u.tagPropType,className:l.a.string,cssModule:l.a.object},b=function(e){var a=e.className,t=e.cssModule,n=e.tag,o=Object(c.a)(e,["className","cssModule","tag"]),l=Object(u.mapToCssModules)(d()(a,"card-title"),t);return r.a.createElement(n,Object(s.a)({},o,{className:l}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},477:function(e,a,t){"use strict";var s=t(15),c=t(20),n=t(0),r=t.n(n),o=t(5),l=t.n(o),i=t(58),d=t.n(i),u=t(80),m={tag:u.tagPropType,className:l.a.string,cssModule:l.a.object},b=function(e){var a=e.className,t=e.cssModule,n=e.tag,o=Object(c.a)(e,["className","cssModule","tag"]),l=Object(u.mapToCssModules)(d()(a,"card-header"),t);return r.a.createElement(n,Object(s.a)({},o,{className:l}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},491:function(e,a,t){"use strict";var s=t(15),c=t(20),n=t(0),r=t.n(n),o=t(5),l=t.n(o),i=t(58),d=t.n(i),u=t(80),m=l.a.oneOfType([l.a.number,l.a.string]),b=l.a.oneOfType([l.a.bool,l.a.string,l.a.number,l.a.shape({size:m,order:m,offset:m})]),j={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:u.tagPropType,className:l.a.string,cssModule:l.a.object,xs:b,sm:b,md:b,lg:b,xl:b,widths:l.a.array},p={tag:"label",widths:["xs","sm","md","lg","xl"]},f=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,n=e.hidden,o=e.widths,l=e.tag,i=e.check,m=e.size,b=e.for,j=Object(c.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),p=[];o.forEach((function(a,s){var c=e[a];if(delete j[a],c||""===c){var n,r=!s;if(Object(u.isObject)(c)){var o,l=r?"-":"-"+a+"-";n=f(r,a,c.size),p.push(Object(u.mapToCssModules)(d()(((o={})[n]=c.size||""===c.size,o["order"+l+c.order]=c.order||0===c.order,o["offset"+l+c.offset]=c.offset||0===c.offset,o))),t)}else n=f(r,a,c),p.push(n)}}));var g=Object(u.mapToCssModules)(d()(a,!!n&&"sr-only",!!i&&"form-check-label",!!m&&"col-form-label-"+m,p,!!p.length&&"col-form-label"),t);return r.a.createElement(l,Object(s.a)({htmlFor:b},j,{className:g}))};g.propTypes=j,g.defaultProps=p,a.a=g},494:function(e,a,t){"use strict";var s=t(15),c=t(20),n=t(120),r=t(119),o=t(0),l=t.n(o),i=t(5),d=t.n(i),u=t(58),m=t.n(u),b=t(80),j={children:d.a.node,inline:d.a.bool,tag:b.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},p=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(n.a)(t)),t.submit=t.submit.bind(Object(n.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,n=e.inline,r=e.tag,o=e.innerRef,i=Object(c.a)(e,["className","cssModule","inline","tag","innerRef"]),d=Object(b.mapToCssModules)(m()(a,!!n&&"form-inline"),t);return l.a.createElement(r,Object(s.a)({},i,{ref:o,className:d}))},a}(o.Component);p.propTypes=j,p.defaultProps={tag:"form"},a.a=p},521:function(e,a,t){"use strict";var s=t(15),c=t(20),n=t(0),r=t.n(n),o=t(5),l=t.n(o),i=t(58),d=t.n(i),u=t(80),m={tag:u.tagPropType,type:l.a.string,size:l.a.string,color:l.a.string,className:l.a.string,cssModule:l.a.object,children:l.a.string},b=function(e){var a=e.className,t=e.cssModule,n=e.type,o=e.size,l=e.color,i=e.children,m=e.tag,b=Object(c.a)(e,["className","cssModule","type","size","color","children","tag"]),j=Object(u.mapToCssModules)(d()(a,!!o&&"spinner-"+n+"-"+o,"spinner-"+n,!!l&&"text-"+l),t);return r.a.createElement(m,Object(s.a)({role:"status"},b,{className:j}),i&&r.a.createElement("span",{className:Object(u.mapToCssModules)("sr-only",t)},i))};b.propTypes=m,b.defaultProps={tag:"div",type:"border",children:"Loading..."},a.a=b}}]);
//# sourceMappingURL=157.3c714dca.chunk.js.map