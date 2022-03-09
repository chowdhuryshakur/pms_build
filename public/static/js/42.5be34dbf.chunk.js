(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[42],{1950:function(e,a,t){"use strict";t.r(a);var n=t(21),r=t(1),c=t(10),i=t(0),l=t(1074),s=t(463),o=t(471),d=t(476),u=t(475),b=t(472),j=t(499),m=t(473),p=t(1012),O=t(494),f=t(1039),g=t(1037),h=t(1038),x=t(861),v=t(517),y=t(501),w=t(488),S=t(492),L=t(121),_=t(540),N=t(497),C=t(496),F=t(508),I=t.n(F),T=t(509),k=t.n(T),R=t(557),U=t(6);k()(I.a);a.default=function(){var e=Object(_.g)(),a=(Object(i.useRef)(),Object(i.useRef)()),t=JSON.parse(localStorage.getItem("EditLandlordInfo")),F=JSON.parse(localStorage.getItem("userData")).role,I=Object(i.useState)(!1),T=Object(c.a)(I,2),k=T[0],z=T[1],E=Object(i.useState)(t.photo?[{uid:1,name:"image.png",status:"done",type:"image/jpeg",url:t.photo}]:[]),M=Object(c.a)(E,2),P=M[0],A=M[1],D=Object(i.useState)({previewVisible:!1,previewImage:"",previewTitle:"",fileList:t.photo?[{uid:1,name:"image.png",status:"done",type:"image/jpeg",url:t.photo}]:[]}),J=Object(c.a)(D,2),V=J[0],q=J[1],B=Object(i.useState)(!1),H=Object(c.a)(B,2),$=H[0],G=H[1],K=Object(i.useState)(""),Q=Object(c.a)(K,2),W=Q[0],X=Q[1],Y=Object(i.useState)(!1),Z=Object(c.a)(Y,2),ee=Z[0],ae=Z[1],te=Object(i.useState)([]),ne=Object(c.a)(te,2),re=ne[0],ce=ne[1],ie=Object(i.useState)({sub_estate_manager_id:t.user_id,mobile:t.mobile,email:t.email,full_name:t.full_name,address:t.address}),le=Object(c.a)(ie,2),se=le[0],oe=le[1],de=Object(i.useState)([]),ue=Object(c.a)(de,2),be=(ue[0],ue[1]);Object(i.useEffect)((function(){S.a.BranchList().then((function(e){console.log(e.data.payload),be(e.data.payload)})).catch((function(e){Object(C.a)(e),console.log(e)}))}),[]);var je=Object(i.useState)({email:!1,mobile:!1}),me=Object(c.a)(je,2),pe=me[0],Oe=me[1],fe=function(e){var a=/\S+@\S+\.\S+/.test(e.target.value);if("email"===e.target.name&&a&&Oe(Object(r.a)(Object(r.a)({},pe),{},{email:!1})),"email"!==e.target.name||a||Oe(Object(r.a)(Object(r.a)({},pe),{},{email:!0})),"mobile"===e.target.name){if("0"===e.target.value[0])return Oe(Object(r.a)(Object(r.a)({},pe),{},{mobile:!0})),0;if(Oe(Object(r.a)(Object(r.a)({},pe),{},{mobile:!1})),!/^[0-9]*$/.test(e.target.value))return 0}oe(Object(r.a)(Object(r.a)({},se),{},Object(n.a)({},e.target.name,e.target.value)))};return Object(U.jsxs)(i.Fragment,{children:[Object(U.jsxs)(s.a.Ripple,{className:"m-1",color:"primary",onClick:function(a){return e.push("/".concat(F,"/LandlordList"))},children:[Object(U.jsx)(l.a,{size:12})," Back"]}),Object(U.jsxs)(o.a,{children:[Object(U.jsx)(d.a,{className:"border-bottom",children:Object(U.jsx)(u.a,{tag:"h4",children:"Update Landlord"})}),Object(U.jsx)(b.a,{children:Object(U.jsxs)(j.a,{className:"row pt-1",style:{width:"100%"},onSubmit:function(a){if(a.preventDefault(),k)return L.f.error("please wait, image is uploading to the server"),0;if(!P.length)return L.f.error("please upload Landlord image"),0;var t=se.sub_estate_manager_id,n=se.mobile,r=se.email,c=se.full_name,i=se.address;if(!/\S+@\S+\.\S+/.test(r))return 0;var l={land_lord_id:t,mobile:n,email:r,full_name:c,address:i,photo:P.length?P[0].url:null};console.log(l),G(!0),S.a.editLandlord(l).then((function(a){console.log(a),Object(C.b)(a),e.push("/".concat(F,"/LandlordList")),G(!1)})).catch((function(e){Object(C.a)(e),G(!1)}))},autoComplete:"off",children:[Object(U.jsx)(m.a,{md:"4",className:"mt-0",children:Object(U.jsxs)(p.a,{children:[Object(U.jsx)(O.a,{for:"full_name",children:"Fullname"}),Object(U.jsx)(f.a,{required:!0,type:"text",id:"full_name",name:"full_name",placeholder:"Landlord name",value:se.full_name,onChange:fe})]})}),Object(U.jsx)(m.a,{md:"4",children:Object(U.jsxs)(p.a,{children:[Object(U.jsx)(O.a,{className:"form-label",for:"mobile",children:"Mobile Number"}),Object(U.jsxs)(g.a,{className:"input-group-merge w-100 mb-1",children:[Object(U.jsx)(h.a,{addonType:"prepend",children:Object(U.jsx)(x.a,{children:N.e})}),Object(U.jsx)(f.a,{autoFocus:!0,required:!0,type:"text",minLength:10,maxLength:10,id:"mobile",name:"mobile",value:se.mobile,onChange:fe,placeholder:"123-456-7899"})]}),pe.mobile&&Object(U.jsx)("span",{style:{color:"red",fontSize:"11px"},children:"First digit 0 not allow"})]})}),Object(U.jsx)(m.a,{md:"4",children:Object(U.jsxs)(p.a,{children:[Object(U.jsx)(O.a,{for:"email",children:"Email"}),Object(U.jsx)(f.a,{required:!0,type:"email",id:"email",name:"email",placeholder:"example@gmail.com",value:se.email,onChange:fe}),pe.email&&se.email&&Object(U.jsx)("span",{style:{color:"red",fontSize:"11px"},children:"Please Enter a valid Email"})]})}),Object(U.jsxs)(m.a,{md:"6",children:[Object(U.jsx)(O.a,{for:"postcode",children:"Search Address by Post Code"}),Object(U.jsxs)(g.a,{children:[Object(U.jsx)(f.a,{type:"text",id:"postcode",name:"postcode",placeholder:"post code",value:W,onChange:function(e){return X(e.target.value)}}),Object(U.jsx)(h.a,{addonType:"append",children:Object(U.jsx)(s.a,{color:"primary",outline:!0,type:"button",onClick:function(e){e.preventDefault(),ae(!0),S.a.ukAddressEndpoint({postCode:W}).then((function(e){console.log(e.data.payload),ce(e.data.payload.addresses.map((function(e){return"".concat(e.building_number,", ").concat(e.thoroughfare,", ").concat(e.locality,", ").concat(e.town_or_city)}))),ae(!1)})).catch((function(e){ce([]),ae(!1),Object(C.a)(e)}))},children:ee?Object(U.jsx)(v.a,{size:"sm"}):"Search"})})]})]}),Object(U.jsxs)(m.a,{md:"6",children:[Object(U.jsx)(O.a,{children:"Address"}),Object(U.jsx)(y.a,{ref:a,theme:w.g,className:"react-select",classNamePrefix:"select",name:"address",onChange:function(e){oe(Object(r.a)(Object(r.a)({},se),{},{address:e.value}))},options:re.map((function(e){return{value:e,label:e}})),value:{value:se.address,label:se.address},maxMenuHeight:150,isClearable:!1})]}),Object(U.jsxs)(m.a,{md:"12",className:"my-0",children:[Object(U.jsx)(O.a,{children:"Landlord Image"}),Object(U.jsx)(R.a,{setimgUpLoading:z,state:V,setState:q,fileUrls:P,setFileUrls:A})]}),Object(U.jsx)(m.a,{md:"12 text-center",children:Object(U.jsx)(s.a.Ripple,{className:"mt-2",color:"primary",type:"submit",disabled:$,children:$?Object(U.jsx)(v.a,{size:"sm"}):"Submit"})})]})})]})]})}},471:function(e,a,t){"use strict";var n=t(15),r=t(20),c=t(0),i=t.n(c),l=t(5),s=t.n(l),o=t(58),d=t.n(o),u=t(80),b={tag:u.tagPropType,inverse:s.a.bool,color:s.a.string,body:s.a.bool,outline:s.a.bool,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},j=function(e){var a=e.className,t=e.cssModule,c=e.color,l=e.body,s=e.inverse,o=e.outline,b=e.tag,j=e.innerRef,m=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(u.mapToCssModules)(d()(a,"card",!!s&&"text-white",!!l&&"card-body",!!c&&(o?"border":"bg")+"-"+c),t);return i.a.createElement(b,Object(n.a)({},m,{className:p,ref:j}))};j.propTypes=b,j.defaultProps={tag:"div"},a.a=j},557:function(e,a,t){"use strict";var n=t(122),r=t(511),c=t.n(r),i=t(516),l=t(1),s=(t(0),t(849)),o=t(1886),d=(t(542),t(121)),u=t(492),b=t(1069),j=t(496),m=t(497),p=t(6);a.a=function(e){var a=e.fileUrls,t=e.setFileUrls,r=e.state,O=e.setState,f=e.setimgUpLoading;function g(e){return new Promise((function(a,t){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return a(n.result)},n.onerror=function(e){return t(e)}}))}var h=r.previewVisible,x=r.previewImage,v=r.fileList,y=r.previewTitle,w=function(){var e=Object(i.a)(c.a.mark((function e(a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.url||a.preview){e.next=4;break}return e.next=3,g(a.originFileObj);case 3:a.preview=e.sent;case 4:O(Object(l.a)(Object(l.a)({},r),{},{previewImage:a.url||a.preview,previewVisible:!0,previewTitle:a.name||a.url.substring(a.url.lastIndexOf("/")+1)}));case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),S=Object(p.jsxs)("div",{className:"text-center p-1",style:{height:"102px",width:"102px"},children:[Object(p.jsx)("span",{children:Object(p.jsx)(b.a,{size:20,className:"my-1"})})," ",Object(p.jsx)("br",{}),Object(p.jsx)("span",{children:"Add Image"})]}),L={beforeUpload:function(e){var r=e.size/1024/1024<2,c="image/jpeg"===e.type||"image/png"===e.type;if(c){if(r){var i=new FormData;return i.append("complain_image",e),f(!0),u.a.singleFileupload(i).then((function(r){console.log(r.data.payload.fileurl),f(!1),t([].concat(Object(n.a)(a),[{uid:e.uid,name:"image.png",status:"done",type:"image/jpeg",url:r.data.payload.fileurl}]))})).catch((function(e){f(!1),console.log(e),Object(j.a)(e)})),c&&r}d.f.error("Image must smaller than 2MB!")}else d.f.error("".concat(e.name," is not a Image file"))}};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(s.a,Object(l.a)(Object(l.a)({},L),{},{action:"".concat(m.d,"/api/fackupload"),listType:"picture-card",fileList:v,onPreview:w,onChange:function(e){var n=e.fileList,c=e.file;return c.size/1024/1024>2?0:"image/jpeg"===c.type||"image/png"===c.type?(t(a.filter((function(e){return n.some((function(a){return e.uid===a.uid}))}))),void O(Object(l.a)(Object(l.a)({},r),{},{fileList:n.filter((function(e){return e.type.includes("image")}))}))):0},children:v.length>=1?null:S})),Object(p.jsx)(o.a,{visible:h,title:y,footer:null,onCancel:function(){return O(Object(l.a)(Object(l.a)({},r),{},{previewVisible:!1}))},children:Object(p.jsx)("img",{alt:"example",style:{width:"100%"},src:x})})]})}}}]);
//# sourceMappingURL=42.5be34dbf.chunk.js.map