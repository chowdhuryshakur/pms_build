(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[42],{1948:function(e,t,a){"use strict";a.r(t);var n=a(21),c=a(1),i=a(10),r=a(0),l=a(1061),s=a(463),o=a(472),d=a(477),u=a(475),j=a(471),b=a(495),m=a(473),p=a(998),O=a(490),f=a(1026),h=a(1024),g=a(1025),x=a(852),v=a(516),y=a(503),w=a(484),S=a(493),L=a(122),_=a(534),N=a(498),C=a(497),F=a(511),I=a.n(F),k=a(512),U=a.n(k),z=a(601),E=a(6);U()(I.a);t.default=function(){var e=Object(_.g)(),t=(Object(r.useRef)(),Object(r.useRef)()),a=JSON.parse(localStorage.getItem("EditLandlordInfo")),F=JSON.parse(localStorage.getItem("userData")).role,I=Object(r.useState)(!1),k=Object(i.a)(I,2),U=k[0],R=k[1],T=Object(r.useState)(a.photo?[{uid:1,name:"image.png",status:"done",type:"image/jpeg",url:a.photo}]:[]),A=Object(i.a)(T,2),D=A[0],P=A[1],J=Object(r.useState)({previewVisible:!1,previewImage:"",previewTitle:"",fileList:a.photo?[{uid:1,name:"image.png",status:"done",type:"image/jpeg",url:a.photo}]:[]}),V=Object(i.a)(J,2),q=V[0],B=V[1],M=Object(r.useState)(!1),H=Object(i.a)(M,2),$=H[0],G=H[1],K=Object(r.useState)(""),Q=Object(i.a)(K,2),W=Q[0],X=Q[1],Y=Object(r.useState)(!1),Z=Object(i.a)(Y,2),ee=Z[0],te=Z[1],ae=Object(r.useState)([]),ne=Object(i.a)(ae,2),ce=ne[0],ie=ne[1],re=Object(r.useState)({sub_estate_manager_id:a.user_id,mobile:a.mobile,email:a.email,full_name:a.full_name,address:a.address}),le=Object(i.a)(re,2),se=le[0],oe=le[1],de=Object(r.useState)([]),ue=Object(i.a)(de,2),je=(ue[0],ue[1]);Object(r.useEffect)((function(){S.a.BranchList().then((function(e){console.log(e.data.payload),je(e.data.payload)})).catch((function(e){Object(C.a)(e),console.log(e)}))}),[]);var be=Object(r.useState)({email:!1,mobile:!1}),me=Object(i.a)(be,2),pe=me[0],Oe=me[1],fe=function(e){var t=/\S+@\S+\.\S+/.test(e.target.value);if("email"===e.target.name&&t&&Oe(Object(c.a)(Object(c.a)({},pe),{},{email:!1})),"email"!==e.target.name||t||Oe(Object(c.a)(Object(c.a)({},pe),{},{email:!0})),"mobile"===e.target.name){if("0"===e.target.value[0])return Oe(Object(c.a)(Object(c.a)({},pe),{},{mobile:!0})),0;if(Oe(Object(c.a)(Object(c.a)({},pe),{},{mobile:!1})),!/^[0-9]*$/.test(e.target.value))return 0}oe(Object(c.a)(Object(c.a)({},se),{},Object(n.a)({},e.target.name,e.target.value)))};return Object(E.jsxs)(r.Fragment,{children:[Object(E.jsxs)(s.a.Ripple,{className:"m-1",color:"primary",onClick:function(t){return e.push("/".concat(F,"/LandlordList"))},children:[Object(E.jsx)(l.a,{size:12})," Back"]}),Object(E.jsxs)(o.a,{children:[Object(E.jsx)(d.a,{className:"border-bottom",children:Object(E.jsx)(u.a,{tag:"h4",children:"Update Landlord"})}),Object(E.jsx)(j.a,{children:Object(E.jsxs)(b.a,{className:"row pt-1",style:{width:"100%"},onSubmit:function(t){if(t.preventDefault(),U)return L.f.error("please wait, image is uploading to the server"),0;if(!D.length)return L.f.error("please upload Landlord image"),0;var a=se.sub_estate_manager_id,n=se.mobile,c=se.email,i=se.full_name,r=se.address;if(!/\S+@\S+\.\S+/.test(c))return 0;var l={land_lord_id:a,mobile:n,email:c,full_name:i,address:r,photo:D.length?D[0].url:null};console.log(l),G(!0),S.a.editLandlord(l).then((function(t){console.log(t),Object(C.b)(t),e.push("/".concat(F,"/LandlordList")),G(!1)})).catch((function(e){Object(C.a)(e),G(!1)}))},autoComplete:"off",children:[Object(E.jsx)(m.a,{md:"4",className:"mt-0",children:Object(E.jsxs)(p.a,{children:[Object(E.jsx)(O.a,{for:"full_name",children:"Fullname"}),Object(E.jsx)(f.a,{required:!0,type:"text",id:"full_name",name:"full_name",placeholder:"Landlord name",value:se.full_name,onChange:fe})]})}),Object(E.jsx)(m.a,{md:"4",children:Object(E.jsxs)(p.a,{children:[Object(E.jsx)(O.a,{className:"form-label",for:"mobile",children:"Mobile Number"}),Object(E.jsxs)(h.a,{className:"input-group-merge w-100 mb-1",children:[Object(E.jsx)(g.a,{addonType:"prepend",children:Object(E.jsx)(x.a,{children:N.e})}),Object(E.jsx)(f.a,{autoFocus:!0,required:!0,type:"text",minLength:10,maxLength:10,id:"mobile",name:"mobile",value:se.mobile,onChange:fe,placeholder:"123-456-7899"})]}),pe.mobile&&Object(E.jsx)("span",{style:{color:"red",fontSize:"11px"},children:"First digit 0 not allow"})]})}),Object(E.jsx)(m.a,{md:"4",children:Object(E.jsxs)(p.a,{children:[Object(E.jsx)(O.a,{for:"email",children:"Email"}),Object(E.jsx)(f.a,{required:!0,type:"email",id:"email",name:"email",placeholder:"example@gmail.com",value:se.email,onChange:fe}),pe.email&&se.email&&Object(E.jsx)("span",{style:{color:"red",fontSize:"11px"},children:"Please Enter a valid Email"})]})}),Object(E.jsxs)(m.a,{md:"6",children:[Object(E.jsx)(O.a,{for:"postcode",children:"Search Address by Post Code"}),Object(E.jsxs)(h.a,{children:[Object(E.jsx)(f.a,{type:"text",id:"postcode",name:"postcode",placeholder:"post code",value:W,onChange:function(e){return X(e.target.value)}}),Object(E.jsx)(g.a,{addonType:"append",children:Object(E.jsx)(s.a,{color:"primary",outline:!0,type:"button",onClick:function(e){e.preventDefault(),te(!0),S.a.ukAddressEndpoint({postCode:W}).then((function(e){console.log(e.data.payload),ie(e.data.payload.addresses.map((function(e){return"".concat(e.building_number,", ").concat(e.thoroughfare,", ").concat(e.locality,", ").concat(e.town_or_city)}))),te(!1)})).catch((function(e){ie([]),te(!1),Object(C.a)(e)}))},children:ee?Object(E.jsx)(v.a,{size:"sm"}):"Search"})})]})]}),Object(E.jsxs)(m.a,{md:"6",children:[Object(E.jsx)(O.a,{children:"Address"}),Object(E.jsx)(y.a,{ref:t,theme:w.g,className:"react-select",classNamePrefix:"select",name:"address",onChange:function(e){oe(Object(c.a)(Object(c.a)({},se),{},{address:e.value}))},options:ce.map((function(e){return{value:e,label:e}})),value:{value:se.address,label:se.address},maxMenuHeight:150,isClearable:!1})]}),Object(E.jsxs)(m.a,{md:"12",className:"my-0",children:[Object(E.jsx)(O.a,{children:"Landlord Image"}),Object(E.jsx)(z.a,{setimgUpLoading:R,state:q,setState:B,fileUrls:D,setFileUrls:P})]}),Object(E.jsx)(m.a,{md:"12 text-center",children:Object(E.jsx)(s.a.Ripple,{className:"mt-2",color:"primary",type:"submit",disabled:$,children:$?Object(E.jsx)(v.a,{size:"sm"}):"Submit"})})]})})]})]})}},601:function(e,t,a){"use strict";var n=a(121),c=a(510),i=a.n(c),r=a(514),l=a(1),s=(a(0),a(983)),o=a(1979),d=(a(556),a(122)),u=a(493),j=a(1056),b=a(497),m=a(498),p=a(6);t.a=function(e){var t=e.fileUrls,a=e.setFileUrls,c=e.state,O=e.setState,f=e.setimgUpLoading;function h(e){return new Promise((function(t,a){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return t(n.result)},n.onerror=function(e){return a(e)}}))}var g=c.previewVisible,x=c.previewImage,v=c.fileList,y=c.previewTitle,w=function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.url||t.preview){e.next=4;break}return e.next=3,h(t.originFileObj);case 3:t.preview=e.sent;case 4:O(Object(l.a)(Object(l.a)({},c),{},{previewImage:t.url||t.preview,previewVisible:!0,previewTitle:t.name||t.url.substring(t.url.lastIndexOf("/")+1)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=Object(p.jsxs)("div",{className:"text-center p-1",style:{height:"102px",width:"102px"},children:[Object(p.jsx)("span",{children:Object(p.jsx)(j.a,{size:20,className:"my-1"})})," ",Object(p.jsx)("br",{}),Object(p.jsx)("span",{children:"Add Image"})]}),L={beforeUpload:function(e){var c=e.size/1024/1024<2,i="image/jpeg"===e.type||"image/png"===e.type;if(i){if(c){var r=new FormData;return r.append("complain_image",e),f(!0),u.a.singleFileupload(r).then((function(c){console.log(c.data.payload.fileurl),f(!1),a([].concat(Object(n.a)(t),[{uid:e.uid,name:"image.png",status:"done",type:"image/jpeg",url:c.data.payload.fileurl}]))})).catch((function(e){f(!1),console.log(e),Object(b.a)(e)})),i&&c}d.f.error("Image must smaller than 2MB!")}else d.f.error("".concat(e.name," is not a Image file"))}};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(s.a,Object(l.a)(Object(l.a)({},L),{},{action:"".concat(m.d,"/api/fackupload"),listType:"picture-card",fileList:v,onPreview:w,onChange:function(e){var n=e.fileList,i=e.file;return i.size/1024/1024>2?0:"image/jpeg"===i.type||"image/png"===i.type?(a(t.filter((function(e){return n.some((function(t){return e.uid===t.uid}))}))),void O(Object(l.a)(Object(l.a)({},c),{},{fileList:n.filter((function(e){return e.type.includes("image")}))}))):0},children:v.length>=1?null:S})),Object(p.jsx)(o.a,{visible:g,title:y,footer:null,onCancel:function(){return O(Object(l.a)(Object(l.a)({},c),{},{previewVisible:!1}))},children:Object(p.jsx)("img",{alt:"example",style:{width:"100%"},src:x})})]})}}}]);
//# sourceMappingURL=42.82b14324.chunk.js.map