(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[202],{2091:function(e,a,t){"use strict";t.r(a);var r=t(523),c=t.n(r),s=t(533),n=t(21),o=t(1),i=t(15),u=t(0),l=t(1370),d=t(472),p=t(469),h=t(461),j=t(460),b=t(475),m=t(467),g=t(1341),O=t(479),f=t(1368),v=t(446),x=t(477),y=t(466),N=t(456),P=t(478),C=t(471),T=t(121),M=t(6);a.default=function(){var e,a=Object(u.useRef)(),t=Object(u.useState)([]),r=Object(i.a)(t,2),_=r[0],w=r[1],V=Object(u.useState)(""),S=Object(i.a)(V,2),D=S[0],q=S[1],R=Object(u.useState)(!1),k=Object(i.a)(R,2),E=k[0],I=k[1],A=Object(u.useState)(null),B=Object(i.a)(A,2),H=B[0],L=B[1],z=Object(u.useState)(null),F=Object(i.a)(z,2),U=F[0],J=F[1],Q=Object(u.useState)([]),G=Object(i.a)(Q,2),K=G[0],W=G[1],X=Object(u.useState)({value:"",label:"select..."}),Y=Object(i.a)(X,2),Z=Y[0],$=Y[1],ee=Object(u.useState)({value:0,label:""}),ae=Object(i.a)(ee,2),te=(ae[0],ae[1],Object(u.useState)({voucherType:"product",productId:null,voucherValue:1,minExpAmount:0,voucherValidity:0,rewardPoint:0,quota:1,expiryDate:"",createdBy:"admin",terms:"",Description:"",is_product_voucher:1,purchaseAmount:0,business_id:D,product_voucher_map_id:null})),re=Object(i.a)(te,2),ce=re[0],se=re[1],ne=function(e){W([]);var a={page:1,perPage:5e4,business_id:e,q:null,imageurlhave:null,searchValue:null};y.a.productList(a).then((function(e){var a=e.data.payload;W(a.data.map((function(e){return{value:e.productid,label:e.productname}})))})).catch((function(e){console.log(e)}))};Object(u.useEffect)((function(){y.a.customerBusinessList().then((function(e){var a=e.data.payload;w(a),q(a[0].id)})).catch((function(e){console.log(e.response),Object(N.a)(e)}))}),[]),Object(u.useEffect)((function(){""!==D&&ne(D)}),[D]);var oe=function(e){se(Object(o.a)(Object(o.a)({},ce),{},Object(n.a)({},e.target.name,e.target.value)))},ie=function(){var e=Object(s.a)(c.a.mark((function e(a){var t,r,n,o,i,u,l,d,p,h,j,b,m,g,O,f,v;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t=ce.voucherType,r=ce.voucherValue,n=ce.productId,o=ce.minExpAmount,i=ce.voucherValidity,u=ce.expiryDate,l=ce.is_product_voucher,d=ce.purchaseAmount,p=ce.rewardPoint,h=ce.quota,j=ce.createdBy,b=ce.terms,m=ce.Description,ce.business_id,g=ce.product_voucher_map_id,O=_.find((function(e){return e.id===D})).pms_merchantid,I(!0),(f=new FormData).append("image",H),e.next=9,y.a.singleFileupload(f).then(function(){var e=Object(s.a)(c.a.mark((function e(a){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,a.data.payload;case 3:return e.t0=e.sent,e.t1=[e.t0],e.t2=m,e.t3=[{product_weight:1,product_quantity:h,product_price:d,delivery_time:"2-3 weeks"}],e.t4=_[0].id,t={product_optional_image:e.t1,productname:"voucher product",categoryid:49,productdetails:e.t2,optional_data:e.t3,business_id:e.t4,is_voucher_product:!0},console.log(t),e.next=12,y.a.addProduct(t).then((function(e){console.log(e),g=e.data.payload.productid})).catch((function(e){console.log(e.response)}));case 12:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch((function(e){console.log(e.response)}));case 9:(v=new FormData).append("voucherImage",H),v.append("membershipid",O),v.append("voucherType",t),v.append("voucherValue",r),v.append("productId",n),v.append("minExpAmount",o),v.append("voucherValidity",i),v.append("expiryDate",u),v.append("rewardPoint",p),v.append("price",d),v.append("quota",h),v.append("createdBy",j),v.append("terms",b),v.append("description",m),v.append("is_product_voucher",l),v.append("product_voucher_map_id",g),localStorage.setItem("usePMStoken",!0),y.a.createVoucher(v).then((function(e){var a=e.data.data.voucherId;y.a.approveVoucher({voucherId:a,approvedBy:"fahim"}).then((function(e){localStorage.setItem("usePMStoken",!1),I(!1),T.f.success("voucher created successfully"),console.log(e)})).catch((function(e){localStorage.setItem("usePMStoken",!1),I(!1),Object(N.a)(e),console.log(e)}))})).catch((function(e){localStorage.setItem("usePMStoken",!1),I(!1),Object(N.a)(e),console.log(e)}));case 28:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(M.jsxs)(d.a,{children:[Object(M.jsx)(p.a,{className:"border-bottom",children:Object(M.jsx)(h.a,{tag:"h4",children:"Create New Voucher"})}),Object(M.jsx)(j.a,{style:{paddingTop:"15px"},children:Object(M.jsxs)(b.a,{className:"row",style:{width:"100%"},onSubmit:ie,autoComplete:"off",children:[_.length>1&&Object(M.jsx)(m.a,{md:"4",children:Object(M.jsxs)(g.a,{children:[Object(M.jsx)(O.a,{for:"Business",children:"Select a Business"}),Object(M.jsx)(P.a,{theme:C.h,maxMenuHeight:200,className:"react-select",classNamePrefix:"select",defaultValue:_.map((function(e){return{value:e.id,label:e.businessname}}))[0],onChange:function(e){ne(e.value),se(Object(o.a)(Object(o.a)({},ce),{},{business_id:e.value,productId:null})),q(e.value),$({value:"",label:"Select..."})},options:_.map((function(e){return{value:e.id,label:e.businessname}}))})]})}),Object(M.jsx)(m.a,{md:"4",children:Object(M.jsxs)(g.a,{children:[Object(M.jsx)(O.a,{for:"Business",children:"Voucher Type"}),Object(M.jsx)(P.a,{theme:C.h,maxMenuHeight:200,className:"react-select",classNamePrefix:"select",value:{value:ce.voucherType,label:ce.voucherType},onChange:function(e){$({value:"",label:"Select..."}),se(Object(o.a)(Object(o.a)({},ce),{},{voucherType:e.value,productId:null}))},options:[{value:"product",label:"product"},{value:"discount",label:"discount"},{value:"cash",label:"cash"}]})]})}),"product"===ce.voucherType&&Object(M.jsxs)(m.a,{md:"4",children:[Object(M.jsxs)(g.a,{children:[Object(M.jsx)(O.a,{for:"Business",children:"Select a Product"}),Object(M.jsx)(P.a,(e={ref:a,theme:C.h,maxMenuHeight:200,className:"react-select",classNamePrefix:"select",value:Z,onChange:function(e){$({value:e.value,label:e.label}),se(Object(o.a)(Object(o.a)({},ce),{},{productId:e.value}))}},Object(n.a)(e,"maxMenuHeight",150),Object(n.a)(e,"options",K),Object(n.a)(e,"isLoading",!K.length),e))]}),Object(M.jsx)(f.a,{required:!0,style:{opacity:0,width:"100%",height:0},onFocus:function(e){return a.current.select.focus()},value:ce.productId||"",onChange:function(e){return""}})]}),Object(M.jsx)(m.a,{md:"4",children:Object(M.jsxs)(g.a,{children:[Object(M.jsx)(O.a,{for:"voucherValue",children:"Voucher Value"}),Object(M.jsx)(f.a,{type:"number",name:"voucherValue",id:"voucherValue",value:ce.voucherValue,onChange:oe,required:!0,min:1,placeholder:"0"})]})}),Object(M.jsx)(m.a,{md:"4",children:Object(M.jsxs)(g.a,{children:[Object(M.jsx)(O.a,{for:"minExpAmount",children:"Minimum Exp Amount"}),Object(M.jsx)(f.a,{type:"number",name:"minExpAmount",id:"minExpAmount",value:ce.minExpAmount,onChange:oe,required:!0,min:0,placeholder:"0"})]})}),Object(M.jsx)(m.a,{md:"4",children:Object(M.jsxs)(g.a,{children:[Object(M.jsx)(O.a,{for:"voucherValidity",children:"Voucher Validity"}),Object(M.jsx)(f.a,{type:"number",name:"voucherValidity",id:"voucherValidity",value:ce.voucherValidity,onChange:oe,required:!0,min:0,placeholder:"0"})]})}),Object(M.jsx)(m.a,{md:"4",children:Object(M.jsxs)(g.a,{children:[Object(M.jsx)(O.a,{for:"expiryDate",children:"Expiry Date"}),Object(M.jsx)(f.a,{type:"date",min:(new Date).toLocaleDateString("fr-CA"),name:"expiryDate",id:"expiryDate",value:ce.expiryDate,onChange:oe,required:!0,placeholder:"0"})]})}),Object(M.jsx)(m.a,{md:"4",children:Object(M.jsxs)(g.a,{children:[Object(M.jsx)(O.a,{for:"rewardPoint",children:"Reward Point"}),Object(M.jsx)(f.a,{type:"number",name:"rewardPoint",id:"rewardPoint",value:ce.rewardPoint,onChange:oe,required:!0,min:0,placeholder:"0"})]})}),Object(M.jsx)(m.a,{md:"4",children:Object(M.jsxs)(g.a,{children:[Object(M.jsx)(O.a,{for:"purchaseAmount",children:"Purchase Amount"}),Object(M.jsx)(f.a,{type:"number",name:"purchaseAmount",id:"purchaseAmount",value:ce.purchaseAmount,onChange:oe,required:!0,min:0,placeholder:"0"})]})}),Object(M.jsx)(m.a,{md:"4",children:Object(M.jsxs)(g.a,{children:[Object(M.jsx)(O.a,{for:"quota",children:"Quota"}),Object(M.jsx)(f.a,{type:"number",name:"quota",id:"quota",value:ce.quota,onChange:oe,required:!0,min:1,placeholder:"0"})]})}),Object(M.jsx)(m.a,{md:"6",children:Object(M.jsxs)(g.a,{children:[Object(M.jsx)(O.a,{for:"terms",children:"Terms"}),Object(M.jsx)(f.a,{type:"textarea",name:"terms",id:"terms",value:ce.terms,onChange:oe,required:!0,placeholder:"terms & conditions"})]})}),Object(M.jsx)(m.a,{md:"6",children:Object(M.jsxs)(g.a,{children:[Object(M.jsx)(O.a,{for:"Description",children:"Description"}),Object(M.jsx)(f.a,{type:"textarea",name:"Description",id:"Description",value:ce.Description,onChange:oe,required:!0,placeholder:"Voucher Description..."})]})}),Object(M.jsxs)(m.a,{md:"12",children:[Object(M.jsx)(O.a,{for:"voucherImage",children:"Voucher Image"}),Object(M.jsxs)("div",{className:"d-flex",children:[Object(M.jsxs)("div",{className:"file position-relative overflow-hidden mr-2",children:[Object(M.jsxs)("div",{className:"text-center p-1",style:{height:"102px",width:"102px",border:"1px dashed #d9d9d9",backgroundColor:"#fafafa"},children:[Object(M.jsx)("span",{children:Object(M.jsx)(l.a,{size:20,className:"my-1"})})," ",Object(M.jsx)("br",{}),Object(M.jsx)("span",{children:"Upload"})]}),Object(M.jsx)(f.a,{style:{position:"absolute",opacity:"0",left:"0",top:"0",height:"102px",width:"102px",cursor:"pointer"},type:"file",accept:"image/png, image/jpeg",required:!0,name:"voucherImage",id:"voucherImage",onChange:function(e){0!==e.target.files.length&&J(URL.createObjectURL(e.target.files[0])),L(e.target.files[0])}})]}),U&&Object(M.jsx)("img",{src:U,alt:"voucher img",height:"100px"})]})]}),Object(M.jsx)(m.a,{md:"12",className:"text-center",children:E?Object(M.jsxs)(v.a.Ripple,{color:"primary",className:"mr-1",disabled:!0,style:{marginTop:"25px"},children:[Object(M.jsx)(x.a,{color:"white",size:"sm"}),Object(M.jsx)("span",{className:"ml-50",children:"Loading..."})]}):Object(M.jsx)(v.a.Ripple,{className:"ml-2",color:"primary",type:"submit",style:{marginTop:"25px"},children:Object(M.jsx)("span",{children:"Submit"})})})]})})]})}},456:function(e,a,t){"use strict";t.d(a,"a",(function(){return c})),t.d(a,"b",(function(){return s})),t.d(a,"c",(function(){return n}));t(0);var r=t(121),c=function(e){try{var a=e.response;404===a.status||401===a.status||400===a.status||500===a.status?r.f.error(a.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):r.f.error("The server is under maintenance",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(a){r.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},s=function(e){try{var a=e.response;404!==a.status&&401!==a.status&&400!==a.status||r.f.error(a.data.errors?a.data.errors[Object.keys(a.data.errors)[0]]:a.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(a){r.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},n=function(e){var a=e.data.message||"success";r.f.success(a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},460:function(e,a,t){"use strict";var r=t(14),c=t(20),s=t(0),n=t.n(s),o=t(5),i=t.n(o),u=t(56),l=t.n(u),d=t(78),p={tag:d.tagPropType,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},h=function(e){var a=e.className,t=e.cssModule,s=e.innerRef,o=e.tag,i=Object(c.a)(e,["className","cssModule","innerRef","tag"]),u=Object(d.mapToCssModules)(l()(a,"card-body"),t);return n.a.createElement(o,Object(r.a)({},i,{className:u,ref:s}))};h.propTypes=p,h.defaultProps={tag:"div"},a.a=h},461:function(e,a,t){"use strict";var r=t(14),c=t(20),s=t(0),n=t.n(s),o=t(5),i=t.n(o),u=t(56),l=t.n(u),d=t(78),p={tag:d.tagPropType,className:i.a.string,cssModule:i.a.object},h=function(e){var a=e.className,t=e.cssModule,s=e.tag,o=Object(c.a)(e,["className","cssModule","tag"]),i=Object(d.mapToCssModules)(l()(a,"card-title"),t);return n.a.createElement(s,Object(r.a)({},o,{className:i}))};h.propTypes=p,h.defaultProps={tag:"div"},a.a=h},469:function(e,a,t){"use strict";var r=t(14),c=t(20),s=t(0),n=t.n(s),o=t(5),i=t.n(o),u=t(56),l=t.n(u),d=t(78),p={tag:d.tagPropType,className:i.a.string,cssModule:i.a.object},h=function(e){var a=e.className,t=e.cssModule,s=e.tag,o=Object(c.a)(e,["className","cssModule","tag"]),i=Object(d.mapToCssModules)(l()(a,"card-header"),t);return n.a.createElement(s,Object(r.a)({},o,{className:i}))};h.propTypes=p,h.defaultProps={tag:"div"},a.a=h},472:function(e,a,t){"use strict";var r=t(14),c=t(20),s=t(0),n=t.n(s),o=t(5),i=t.n(o),u=t(56),l=t.n(u),d=t(78),p={tag:d.tagPropType,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},h=function(e){var a=e.className,t=e.cssModule,s=e.color,o=e.body,i=e.inverse,u=e.outline,p=e.tag,h=e.innerRef,j=Object(c.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(d.mapToCssModules)(l()(a,"card",!!i&&"text-white",!!o&&"card-body",!!s&&(u?"border":"bg")+"-"+s),t);return n.a.createElement(p,Object(r.a)({},j,{className:b,ref:h}))};h.propTypes=p,h.defaultProps={tag:"div"},a.a=h},475:function(e,a,t){"use strict";var r=t(14),c=t(20),s=t(117),n=t(116),o=t(0),i=t.n(o),u=t(5),l=t.n(u),d=t(56),p=t.n(d),h=t(78),j={children:l.a.node,inline:l.a.bool,tag:h.tagPropType,innerRef:l.a.oneOfType([l.a.object,l.a.func,l.a.string]),className:l.a.string,cssModule:l.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.submit=t.submit.bind(Object(s.a)(t)),t}Object(n.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.inline,n=e.tag,o=e.innerRef,u=Object(c.a)(e,["className","cssModule","inline","tag","innerRef"]),l=Object(h.mapToCssModules)(p()(a,!!s&&"form-inline"),t);return i.a.createElement(n,Object(r.a)({},u,{ref:o,className:l}))},a}(o.Component);b.propTypes=j,b.defaultProps={tag:"form"},a.a=b},477:function(e,a,t){"use strict";var r=t(14),c=t(20),s=t(0),n=t.n(s),o=t(5),i=t.n(o),u=t(56),l=t.n(u),d=t(78),p={tag:d.tagPropType,type:i.a.string,size:i.a.string,color:i.a.string,className:i.a.string,cssModule:i.a.object,children:i.a.string},h=function(e){var a=e.className,t=e.cssModule,s=e.type,o=e.size,i=e.color,u=e.children,p=e.tag,h=Object(c.a)(e,["className","cssModule","type","size","color","children","tag"]),j=Object(d.mapToCssModules)(l()(a,!!o&&"spinner-"+s+"-"+o,"spinner-"+s,!!i&&"text-"+i),t);return n.a.createElement(p,Object(r.a)({role:"status"},h,{className:j}),u&&n.a.createElement("span",{className:Object(d.mapToCssModules)("sr-only",t)},u))};h.propTypes=p,h.defaultProps={tag:"div",type:"border",children:"Loading..."},a.a=h}}]);
//# sourceMappingURL=202.3c776c5f.chunk.js.map