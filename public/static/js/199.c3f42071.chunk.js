(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[199],{2144:function(e,a,t){"use strict";t.r(a);var r=t(523),s=t.n(r),c=t(533),n=t(21),o=t(1),i=t(15),l=t(0),u=t(1371),d=t(472),p=t(468),h=t(460),j=t(459),b=t(475),m=t(467),g=t(1342),O=t(479),f=t(1369),v=t(446),x=t(476),y=t(466),N=t(455),P=t(478),C=t(471),T=t(118),M=t(6);a.default=function(){var e,a=Object(l.useRef)(),t=JSON.parse(localStorage.getItem("customerBusinesses")),r=Object(l.useState)(!1),_=Object(i.a)(r,2),w=_[0],V=_[1],S=Object(l.useState)(null),D=Object(i.a)(S,2),q=D[0],I=D[1],R=Object(l.useState)(null),k=Object(i.a)(R,2),E=k[0],A=k[1],B=Object(l.useState)([]),H=Object(i.a)(B,2),L=H[0],z=H[1],F=Object(l.useState)({value:"",label:"select..."}),J=Object(i.a)(F,2),U=J[0],Q=J[1],G=Object(l.useState)({value:0,label:""}),K=Object(i.a)(G,2),W=(K[0],K[1],Object(l.useState)({voucherType:"product",productId:null,voucherValue:1,minExpAmount:0,voucherValidity:0,rewardPoint:0,quota:1,expiryDate:"",createdBy:"admin",terms:"",Description:"",is_product_voucher:1,purchaseAmount:0,business_id:t[0].id,product_voucher_map_id:null})),X=Object(i.a)(W,2),Y=X[0],Z=X[1],$=function(e){z([]);var a={page:1,perPage:5e4,business_id:e,q:null,imageurlhave:null,searchValue:null};y.a.productList(a).then((function(e){var a=e.data.payload;z(a.data.map((function(e){return{value:e.productid,label:e.productname}})))})).catch((function(e){console.log(e)}))};Object(l.useEffect)((function(){$(t[0].id)}),[]);var ee=function(e){Z(Object(o.a)(Object(o.a)({},Y),{},Object(n.a)({},e.target.name,e.target.value)))},ae=function(){var e=Object(c.a)(s.a.mark((function e(a){var r,n,o,i,l,u,d,p,h,j,b,m,g,O,f,v,x,P;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),r=Y.voucherType,n=Y.voucherValue,o=Y.productId,i=Y.minExpAmount,l=Y.voucherValidity,u=Y.expiryDate,d=Y.is_product_voucher,p=Y.purchaseAmount,h=Y.rewardPoint,j=Y.quota,b=Y.createdBy,m=Y.terms,g=Y.Description,O=Y.business_id,f=Y.product_voucher_map_id,v=t.find((function(e){return e.id===O})).pms_merchantid,V(!0),(x=new FormData).append("image",q),e.next=9,y.a.singleFileupload(x).then(function(){var e=Object(c.a)(s.a.mark((function e(a){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,a.data.payload;case 3:return e.t0=e.sent,e.t1=[e.t0],e.t2=g,e.t3=[{product_weight:1,product_quantity:j,product_price:p,delivery_time:"2-3 weeks"}],e.t4=t[0].id,r={product_optional_image:e.t1,productname:"voucher product",categoryid:49,productdetails:e.t2,optional_data:e.t3,business_id:e.t4,is_voucher_product:!0},console.log(r),e.next=12,y.a.addProduct(r).then((function(e){console.log(e),f=e.data.payload.productid})).catch((function(e){console.log(e.response)}));case 12:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch((function(e){console.log(e.response)}));case 9:(P=new FormData).append("voucherImage",q),P.append("membershipid",v),P.append("voucherType",r),P.append("voucherValue",n),P.append("productId",o),P.append("minExpAmount",i),P.append("voucherValidity",l),P.append("expiryDate",u),P.append("rewardPoint",h),P.append("price",p),P.append("quota",j),P.append("createdBy",b),P.append("terms",m),P.append("description",g),P.append("is_product_voucher",d),P.append("product_voucher_map_id",f),localStorage.setItem("usePMStoken",!0),y.a.createVoucher(P).then((function(e){console.log(e.data.data.voucherId);var a=e.data.data.voucherId;y.a.approveVoucher({voucherId:a,approvedBy:"fahim"}).then((function(e){localStorage.setItem("usePMStoken",!1),V(!1),T.f.success("voucher created successfully"),console.log(e)})).catch((function(e){localStorage.setItem("usePMStoken",!1),V(!1),Object(N.a)(e),console.log(e)}))})).catch((function(e){localStorage.setItem("usePMStoken",!1),V(!1),Object(N.a)(e),console.log(e)}));case 28:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(M.jsxs)(d.a,{children:[Object(M.jsx)(p.a,{className:"border-bottom",children:Object(M.jsx)(h.a,{tag:"h4",children:"Create New Voucher"})}),Object(M.jsx)(j.a,{style:{paddingTop:"15px"},children:Object(M.jsxs)(b.a,{className:"row",style:{width:"100%"},onSubmit:ae,autoComplete:"off",children:[t.length>1&&Object(M.jsx)(m.a,{md:"4",children:Object(M.jsxs)(g.a,{children:[Object(M.jsx)(O.a,{for:"Business",children:"Select a Business"}),Object(M.jsx)(P.a,{theme:C.h,maxMenuHeight:200,className:"react-select",classNamePrefix:"select",defaultValue:t.map((function(e){return{value:e.id,label:e.businessname}}))[0],onChange:function(e){$(e.value),Z(Object(o.a)(Object(o.a)({},Y),{},{business_id:e.value,productId:null})),Q({value:"",label:"Select..."})},options:t.map((function(e){return{value:e.id,label:e.businessname}}))})]})}),Object(M.jsx)(m.a,{md:"4",children:Object(M.jsxs)(g.a,{children:[Object(M.jsx)(O.a,{for:"Business",children:"Voucher Type"}),Object(M.jsx)(P.a,{theme:C.h,maxMenuHeight:200,className:"react-select",classNamePrefix:"select",value:{value:Y.voucherType,label:Y.voucherType},onChange:function(e){Q({value:"",label:"Select..."}),Z(Object(o.a)(Object(o.a)({},Y),{},{voucherType:e.value,productId:null}))},options:[{value:"product",label:"product"},{value:"discount",label:"discount"},{value:"cash",label:"cash"}]})]})}),"product"===Y.voucherType&&Object(M.jsxs)(m.a,{md:"4",children:[Object(M.jsxs)(g.a,{children:[Object(M.jsx)(O.a,{for:"Business",children:"Select a Product"}),Object(M.jsx)(P.a,(e={ref:a,theme:C.h,maxMenuHeight:200,className:"react-select",classNamePrefix:"select",value:U,onChange:function(e){Q({value:e.value,label:e.label}),Z(Object(o.a)(Object(o.a)({},Y),{},{productId:e.value}))}},Object(n.a)(e,"maxMenuHeight",150),Object(n.a)(e,"options",L),Object(n.a)(e,"isLoading",!L.length),e))]}),Object(M.jsx)(f.a,{required:!0,style:{opacity:0,width:"100%",height:0},onFocus:function(e){return a.current.select.focus()},value:Y.productId||"",onChange:function(e){return""}})]}),Object(M.jsx)(m.a,{md:"4",children:Object(M.jsxs)(g.a,{children:[Object(M.jsx)(O.a,{for:"voucherValue",children:"Voucher Value"}),Object(M.jsx)(f.a,{type:"number",name:"voucherValue",id:"voucherValue",value:Y.voucherValue,onChange:ee,required:!0,min:1,placeholder:"0"})]})}),Object(M.jsx)(m.a,{md:"4",children:Object(M.jsxs)(g.a,{children:[Object(M.jsx)(O.a,{for:"minExpAmount",children:"Minimum Exp Amount"}),Object(M.jsx)(f.a,{type:"number",name:"minExpAmount",id:"minExpAmount",value:Y.minExpAmount,onChange:ee,required:!0,min:0,placeholder:"0"})]})}),Object(M.jsx)(m.a,{md:"4",children:Object(M.jsxs)(g.a,{children:[Object(M.jsx)(O.a,{for:"voucherValidity",children:"Voucher Validity"}),Object(M.jsx)(f.a,{type:"number",name:"voucherValidity",id:"voucherValidity",value:Y.voucherValidity,onChange:ee,required:!0,min:0,placeholder:"0"})]})}),Object(M.jsx)(m.a,{md:"4",children:Object(M.jsxs)(g.a,{children:[Object(M.jsx)(O.a,{for:"expiryDate",children:"Expiry Date"}),Object(M.jsx)(f.a,{type:"date",min:(new Date).toLocaleDateString("fr-CA"),name:"expiryDate",id:"expiryDate",value:Y.expiryDate,onChange:ee,required:!0,placeholder:"0"})]})}),Object(M.jsx)(m.a,{md:"4",children:Object(M.jsxs)(g.a,{children:[Object(M.jsx)(O.a,{for:"rewardPoint",children:"Reward Point"}),Object(M.jsx)(f.a,{type:"number",name:"rewardPoint",id:"rewardPoint",value:Y.rewardPoint,onChange:ee,required:!0,min:0,placeholder:"0"})]})}),Object(M.jsx)(m.a,{md:"4",children:Object(M.jsxs)(g.a,{children:[Object(M.jsx)(O.a,{for:"purchaseAmount",children:"Purchase Amount"}),Object(M.jsx)(f.a,{type:"number",name:"purchaseAmount",id:"purchaseAmount",value:Y.purchaseAmount,onChange:ee,required:!0,min:0,placeholder:"0"})]})}),Object(M.jsx)(m.a,{md:"4",children:Object(M.jsxs)(g.a,{children:[Object(M.jsx)(O.a,{for:"quota",children:"Quota"}),Object(M.jsx)(f.a,{type:"number",name:"quota",id:"quota",value:Y.quota,onChange:ee,required:!0,min:1,placeholder:"0"})]})}),Object(M.jsx)(m.a,{md:"6",children:Object(M.jsxs)(g.a,{children:[Object(M.jsx)(O.a,{for:"terms",children:"Terms"}),Object(M.jsx)(f.a,{type:"textarea",name:"terms",id:"terms",value:Y.terms,onChange:ee,required:!0,placeholder:"terms & conditions"})]})}),Object(M.jsx)(m.a,{md:"6",children:Object(M.jsxs)(g.a,{children:[Object(M.jsx)(O.a,{for:"Description",children:"Description"}),Object(M.jsx)(f.a,{type:"textarea",name:"Description",id:"Description",value:Y.Description,onChange:ee,required:!0,placeholder:"Voucher Description..."})]})}),Object(M.jsxs)(m.a,{md:"12",children:[Object(M.jsx)(O.a,{for:"voucherImage",children:"Voucher Image"}),Object(M.jsxs)("div",{className:"d-flex",children:[Object(M.jsxs)("div",{className:"file position-relative overflow-hidden mr-2",children:[Object(M.jsxs)("div",{className:"text-center p-1",style:{height:"102px",width:"102px",border:"1px dashed #d9d9d9",backgroundColor:"#fafafa"},children:[Object(M.jsx)("span",{children:Object(M.jsx)(u.a,{size:20,className:"my-1"})})," ",Object(M.jsx)("br",{}),Object(M.jsx)("span",{children:"Upload"})]}),Object(M.jsx)(f.a,{style:{position:"absolute",opacity:"0",left:"0",top:"0",height:"102px",width:"102px",cursor:"pointer"},type:"file",accept:"image/png, image/jpeg",required:!0,name:"voucherImage",id:"voucherImage",onChange:function(e){0!==e.target.files.length&&A(URL.createObjectURL(e.target.files[0])),I(e.target.files[0])}})]}),E&&Object(M.jsx)("img",{src:E,alt:"voucher img",height:"100px"})]})]}),Object(M.jsx)(m.a,{md:"12",className:"text-center",children:w?Object(M.jsxs)(v.a.Ripple,{color:"primary",className:"mr-1",disabled:!0,style:{marginTop:"25px"},children:[Object(M.jsx)(x.a,{color:"white",size:"sm"}),Object(M.jsx)("span",{className:"ml-50",children:"Loading..."})]}):Object(M.jsx)(v.a.Ripple,{className:"ml-2",color:"primary",type:"submit",style:{marginTop:"25px"},children:Object(M.jsx)("span",{children:"Submit"})})})]})})]})}},455:function(e,a,t){"use strict";t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return c})),t.d(a,"c",(function(){return n}));t(0);var r=t(118),s=function(e){try{var a=e.response;404===a.status||401===a.status||400===a.status||500===a.status?r.f.error(a.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):r.f.error("The server is under maintenance",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(a){r.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},c=function(e){try{var a=e.response;404!==a.status&&401!==a.status&&400!==a.status||r.f.error(a.data.errors?a.data.errors[Object.keys(a.data.errors)[0]]:a.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(a){r.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},n=function(e){var a=e.data.message||"success";r.f.success(a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},459:function(e,a,t){"use strict";var r=t(14),s=t(20),c=t(0),n=t.n(c),o=t(5),i=t.n(o),l=t(56),u=t.n(l),d=t(78),p={tag:d.tagPropType,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},h=function(e){var a=e.className,t=e.cssModule,c=e.innerRef,o=e.tag,i=Object(s.a)(e,["className","cssModule","innerRef","tag"]),l=Object(d.mapToCssModules)(u()(a,"card-body"),t);return n.a.createElement(o,Object(r.a)({},i,{className:l,ref:c}))};h.propTypes=p,h.defaultProps={tag:"div"},a.a=h},460:function(e,a,t){"use strict";var r=t(14),s=t(20),c=t(0),n=t.n(c),o=t(5),i=t.n(o),l=t(56),u=t.n(l),d=t(78),p={tag:d.tagPropType,className:i.a.string,cssModule:i.a.object},h=function(e){var a=e.className,t=e.cssModule,c=e.tag,o=Object(s.a)(e,["className","cssModule","tag"]),i=Object(d.mapToCssModules)(u()(a,"card-title"),t);return n.a.createElement(c,Object(r.a)({},o,{className:i}))};h.propTypes=p,h.defaultProps={tag:"div"},a.a=h},468:function(e,a,t){"use strict";var r=t(14),s=t(20),c=t(0),n=t.n(c),o=t(5),i=t.n(o),l=t(56),u=t.n(l),d=t(78),p={tag:d.tagPropType,className:i.a.string,cssModule:i.a.object},h=function(e){var a=e.className,t=e.cssModule,c=e.tag,o=Object(s.a)(e,["className","cssModule","tag"]),i=Object(d.mapToCssModules)(u()(a,"card-header"),t);return n.a.createElement(c,Object(r.a)({},o,{className:i}))};h.propTypes=p,h.defaultProps={tag:"div"},a.a=h},472:function(e,a,t){"use strict";var r=t(14),s=t(20),c=t(0),n=t.n(c),o=t(5),i=t.n(o),l=t(56),u=t.n(l),d=t(78),p={tag:d.tagPropType,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},h=function(e){var a=e.className,t=e.cssModule,c=e.color,o=e.body,i=e.inverse,l=e.outline,p=e.tag,h=e.innerRef,j=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(d.mapToCssModules)(u()(a,"card",!!i&&"text-white",!!o&&"card-body",!!c&&(l?"border":"bg")+"-"+c),t);return n.a.createElement(p,Object(r.a)({},j,{className:b,ref:h}))};h.propTypes=p,h.defaultProps={tag:"div"},a.a=h},475:function(e,a,t){"use strict";var r=t(14),s=t(20),c=t(117),n=t(116),o=t(0),i=t.n(o),l=t(5),u=t.n(l),d=t(56),p=t.n(d),h=t(78),j={children:u.a.node,inline:u.a.bool,tag:h.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(c.a)(t)),t.submit=t.submit.bind(Object(c.a)(t)),t}Object(n.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,c=e.inline,n=e.tag,o=e.innerRef,l=Object(s.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(h.mapToCssModules)(p()(a,!!c&&"form-inline"),t);return i.a.createElement(n,Object(r.a)({},l,{ref:o,className:u}))},a}(o.Component);b.propTypes=j,b.defaultProps={tag:"form"},a.a=b},476:function(e,a,t){"use strict";var r=t(14),s=t(20),c=t(0),n=t.n(c),o=t(5),i=t.n(o),l=t(56),u=t.n(l),d=t(78),p={tag:d.tagPropType,type:i.a.string,size:i.a.string,color:i.a.string,className:i.a.string,cssModule:i.a.object,children:i.a.string},h=function(e){var a=e.className,t=e.cssModule,c=e.type,o=e.size,i=e.color,l=e.children,p=e.tag,h=Object(s.a)(e,["className","cssModule","type","size","color","children","tag"]),j=Object(d.mapToCssModules)(u()(a,!!o&&"spinner-"+c+"-"+o,"spinner-"+c,!!i&&"text-"+i),t);return n.a.createElement(p,Object(r.a)({role:"status"},h,{className:j}),l&&n.a.createElement("span",{className:Object(d.mapToCssModules)("sr-only",t)},l))};h.propTypes=p,h.defaultProps={tag:"div",type:"border",children:"Loading..."},a.a=h}}]);
//# sourceMappingURL=199.c3f42071.chunk.js.map