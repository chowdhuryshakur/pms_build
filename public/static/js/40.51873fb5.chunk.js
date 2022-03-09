(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[40],{1959:function(e,t,a){"use strict";a.r(t);var c=a(21),n=a(1),r=a(10),i=a(0),l=a(1079),o=a(463),s=a(471),u=a(476),d=a(475),j=a(472),b=a(499),m=a(473),p=a(1017),O=a(494),f=a(1044),h=a(1042),g=a(1043),x=a(861),y=a(517),v=a(501),_=a(487),w=a(492),S=a(121),C=a(540),N=a(496),F=a(497),L=a(508),T=a.n(L),k=a(509),I=a.n(k),R=a(557),U=a(6);I()(T.a);t.default=function(){var e=Object(C.g)(),t=(Object(i.useRef)(),JSON.parse(localStorage.getItem("userData")).role),a=Object(i.useRef)(),L=Object(i.useRef)(),T=JSON.parse(localStorage.getItem("EditContractorInfo")),k=Object(i.useState)(!1),I=Object(r.a)(k,2),z=I[0],P=I[1],E=Object(i.useState)(T.photo?[{uid:1,name:"image.png",status:"done",type:"image/jpeg",url:T.photo}]:[]),M=Object(r.a)(E,2),A=M[0],D=M[1],q=Object(i.useState)({previewVisible:!1,previewImage:"",previewTitle:"",fileList:T.photo?[{uid:1,name:"image.png",status:"done",type:"image/jpeg",url:T.photo}]:[]}),J=Object(r.a)(q,2),V=J[0],B=J[1],H=Object(i.useState)(!1),$=Object(r.a)(H,2),G=$[0],K=$[1],Q=Object(i.useState)(""),W=Object(r.a)(Q,2),X=W[0],Y=W[1],Z=Object(i.useState)(!1),ee=Object(r.a)(Z,2),te=ee[0],ae=ee[1],ce=Object(i.useState)([]),ne=Object(r.a)(ce,2),re=ne[0],ie=ne[1],le=Object(i.useState)({sub_estate_manager_id:T.user_id,contractor_type_id:T.contractor_link.contractor_type.contractor_type_id,contractor_type_name:T.contractor_link.contractor_type.type_name,mobile:T.mobile,email:T.email,full_name:T.full_name,address:T.address}),oe=Object(r.a)(le,2),se=oe[0],ue=oe[1],de=Object(i.useState)([]),je=Object(r.a)(de,2),be=(je[0],je[1]),me=Object(i.useState)([]),pe=Object(r.a)(me,2),Oe=pe[0],fe=pe[1];Object(i.useEffect)((function(){w.a.BranchList().then((function(e){be(e.data.payload)})).catch((function(e){Object(F.a)(e),console.log(e)})),w.a.ContractorTypeList().then((function(e){console.log(e.data.payload),fe(e.data.payload)})).catch((function(e){Object(F.a)(e),console.log(e)}))}),[]);var he=Object(i.useState)({email:!1,mobile:!1}),ge=Object(r.a)(he,2),xe=ge[0],ye=ge[1],ve=function(e){var t=/\S+@\S+\.\S+/.test(e.target.value);if("email"===e.target.name&&t&&ye(Object(n.a)(Object(n.a)({},xe),{},{email:!1})),"email"!==e.target.name||t||ye(Object(n.a)(Object(n.a)({},xe),{},{email:!0})),"mobile"===e.target.name){if("0"===e.target.value[0])return ye(Object(n.a)(Object(n.a)({},xe),{},{mobile:!0})),0;if(ye(Object(n.a)(Object(n.a)({},xe),{},{mobile:!1})),!/^[0-9]*$/.test(e.target.value))return 0}ue(Object(n.a)(Object(n.a)({},se),{},Object(c.a)({},e.target.name,e.target.value)))};return Object(U.jsxs)(i.Fragment,{children:[Object(U.jsxs)(o.a.Ripple,{className:"ml-1 mb-1",color:"primary",onClick:function(a){return e.push("/".concat(t,"/ContractorList"))},children:[Object(U.jsx)(l.a,{size:12})," Back"]}),Object(U.jsxs)(s.a,{children:[Object(U.jsx)(u.a,{className:"border-bottom",children:Object(U.jsx)(d.a,{tag:"h4",children:"Update Contractor"})}),Object(U.jsx)(j.a,{children:Object(U.jsxs)(b.a,{className:"row pt-1",style:{width:"100%"},onSubmit:function(e){if(e.preventDefault(),z)return S.f.error("please wait, image is uploading to the server"),0;if(!A.length)return S.f.error("please upload Contractor image"),0;var t=se.sub_estate_manager_id,a=se.mobile,c=se.email,n=se.full_name,r=se.address,i=se.contractor_type_id;if(!/\S+@\S+\.\S+/.test(c))return 0;var l={contractor_id:t,contractor_type_id:i,mobile:a,email:c,full_name:n,address:r,photo:A.length?A[0].url:null};console.log(l),K(!0),w.a.editContractor(l).then((function(e){console.log(e),Object(F.b)(e),K(!1)})).catch((function(e){Object(F.a)(e),K(!1)}))},autoComplete:"off",children:[Object(U.jsx)(m.a,{md:"4",className:"mt-0",children:Object(U.jsxs)(p.a,{children:[Object(U.jsx)(O.a,{for:"full_name",children:"Fullname"}),Object(U.jsx)(f.a,{required:!0,type:"text",id:"full_name",name:"full_name",placeholder:"Contractor name",value:se.full_name,onChange:ve})]})}),Object(U.jsx)(m.a,{md:"4",children:Object(U.jsxs)(p.a,{children:[Object(U.jsx)(O.a,{className:"form-label",for:"mobile",children:"Mobile Number"}),Object(U.jsxs)(h.a,{className:"input-group-merge w-100 mb-1",children:[Object(U.jsx)(g.a,{addonType:"prepend",children:Object(U.jsx)(x.a,{children:N.e})}),Object(U.jsx)(f.a,{autoFocus:!0,required:!0,type:"text",minLength:10,maxLength:10,id:"mobile",name:"mobile",value:se.mobile,onChange:ve,placeholder:"123-456-7899"})]}),xe.mobile&&Object(U.jsx)("span",{style:{color:"red",fontSize:"11px"},children:"First digit 0 not allow"})]})}),Object(U.jsx)(m.a,{md:"4",children:Object(U.jsxs)(p.a,{children:[Object(U.jsx)(O.a,{for:"email",children:"Email"}),Object(U.jsx)(f.a,{required:!0,type:"email",id:"email",name:"email",placeholder:"example@gmail.com",value:se.email,onChange:ve}),xe.email&&se.email&&Object(U.jsx)("span",{style:{color:"red",fontSize:"11px"},children:"Please Enter a valid Email"})]})}),Object(U.jsx)(m.a,{md:"4",className:"mt-0",children:Object(U.jsxs)(p.a,{children:[Object(U.jsx)(O.a,{children:"Select a Contractor Type"}),Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(v.a,{ref:a,theme:_.g,className:"react-select",classNamePrefix:"select",name:"contractor_type_id",maxMenuHeight:150,onChange:function(e){ue(Object(n.a)(Object(n.a)({},se),{},{contractor_type_id:e.value,contractor_type_name:e.label}))},options:Oe.map((function(e){return{value:e.id,label:e.type_name}})),value:{value:se.contractor_type_id,label:se.contractor_type_name},isClearable:!1}),Object(U.jsx)(f.a,{required:!0,style:{opacity:0,width:"100%",height:0},onFocus:function(e){return a.current.select.focus()},value:se.contractor_type_id||"",onChange:function(e){return""}})]})," "]})}),Object(U.jsxs)(m.a,{md:"4",children:[Object(U.jsx)(O.a,{for:"postcode",children:"Search Address by Post Code"}),Object(U.jsxs)(h.a,{children:[Object(U.jsx)(f.a,{type:"text",id:"postcode",name:"postcode",placeholder:"post code",value:X,onChange:function(e){return Y(e.target.value)}}),Object(U.jsx)(g.a,{addonType:"append",children:Object(U.jsx)(o.a,{color:"primary",outline:!0,type:"button",onClick:function(e){e.preventDefault(),ae(!0),w.a.ukAddressEndpoint({postCode:X}).then((function(e){console.log(e.data.payload),ie(e.data.payload.addresses.map((function(e){return"".concat(e.building_number,", ").concat(e.thoroughfare,", ").concat(e.locality,", ").concat(e.town_or_city)}))),ae(!1)})).catch((function(e){ie([]),ae(!1),Object(F.a)(e)}))},children:te?Object(U.jsx)(y.a,{size:"sm"}):"Search"})})]})]}),Object(U.jsxs)(m.a,{md:"4",children:[Object(U.jsx)(O.a,{children:"Address"}),Object(U.jsx)(v.a,{ref:L,theme:_.g,className:"react-select",classNamePrefix:"select",name:"address",onChange:function(e){ue(Object(n.a)(Object(n.a)({},se),{},{address:e.value}))},options:re.map((function(e){return{value:e,label:e}})),value:{value:se.address,label:se.address},isClearable:!1})]}),Object(U.jsxs)(m.a,{md:"12",className:"my-0",children:[Object(U.jsx)(O.a,{children:"Contractor Image"}),Object(U.jsx)(R.a,{setimgUpLoading:P,state:V,setState:B,fileUrls:A,setFileUrls:D})]}),Object(U.jsx)(m.a,{md:"12 text-center",children:Object(U.jsx)(o.a.Ripple,{className:"mt-2",color:"primary",type:"submit",disabled:G,children:G?Object(U.jsx)(y.a,{size:"sm"}):"Submit"})})]})})]})]})}},471:function(e,t,a){"use strict";var c=a(15),n=a(20),r=a(0),i=a.n(r),l=a(5),o=a.n(l),s=a(58),u=a.n(s),d=a(80),j={tag:d.tagPropType,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},b=function(e){var t=e.className,a=e.cssModule,r=e.color,l=e.body,o=e.inverse,s=e.outline,j=e.tag,b=e.innerRef,m=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(d.mapToCssModules)(u()(t,"card",!!o&&"text-white",!!l&&"card-body",!!r&&(s?"border":"bg")+"-"+r),a);return i.a.createElement(j,Object(c.a)({},m,{className:p,ref:b}))};b.propTypes=j,b.defaultProps={tag:"div"},t.a=b},557:function(e,t,a){"use strict";var c=a(122),n=a(511),r=a.n(n),i=a(516),l=a(1),o=(a(0),a(849)),s=a(1891),u=(a(542),a(121)),d=a(492),j=a(1074),b=a(497),m=a(496),p=a(6);t.a=function(e){var t=e.fileUrls,a=e.setFileUrls,n=e.state,O=e.setState,f=e.setimgUpLoading;function h(e){return new Promise((function(t,a){var c=new FileReader;c.readAsDataURL(e),c.onload=function(){return t(c.result)},c.onerror=function(e){return a(e)}}))}var g=n.previewVisible,x=n.previewImage,y=n.fileList,v=n.previewTitle,_=function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.url||t.preview){e.next=4;break}return e.next=3,h(t.originFileObj);case 3:t.preview=e.sent;case 4:O(Object(l.a)(Object(l.a)({},n),{},{previewImage:t.url||t.preview,previewVisible:!0,previewTitle:t.name||t.url.substring(t.url.lastIndexOf("/")+1)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=Object(p.jsxs)("div",{className:"text-center p-1",style:{height:"102px",width:"102px"},children:[Object(p.jsx)("span",{children:Object(p.jsx)(j.a,{size:20,className:"my-1"})})," ",Object(p.jsx)("br",{}),Object(p.jsx)("span",{children:"Add Image"})]}),S={beforeUpload:function(e){var n=e.size/1024/1024<2,r="image/jpeg"===e.type||"image/png"===e.type;if(r){if(n){var i=new FormData;return i.append("complain_image",e),f(!0),d.a.singleFileupload(i).then((function(n){console.log(n.data.payload.fileurl),f(!1),a([].concat(Object(c.a)(t),[{uid:e.uid,name:"image.png",status:"done",type:"image/jpeg",url:n.data.payload.fileurl}]))})).catch((function(e){f(!1),console.log(e),Object(b.a)(e)})),r&&n}u.f.error("Image must smaller than 2MB!")}else u.f.error("".concat(e.name," is not a Image file"))}};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(o.a,Object(l.a)(Object(l.a)({},S),{},{action:"".concat(m.d,"/api/fackupload"),listType:"picture-card",fileList:y,onPreview:_,onChange:function(e){var c=e.fileList,r=e.file;return r.size/1024/1024>2?0:"image/jpeg"===r.type||"image/png"===r.type?(a(t.filter((function(e){return c.some((function(t){return e.uid===t.uid}))}))),void O(Object(l.a)(Object(l.a)({},n),{},{fileList:c.filter((function(e){return e.type.includes("image")}))}))):0},children:y.length>=1?null:w})),Object(p.jsx)(s.a,{visible:g,title:v,footer:null,onCancel:function(){return O(Object(l.a)(Object(l.a)({},n),{},{previewVisible:!1}))},children:Object(p.jsx)("img",{alt:"example",style:{width:"100%"},src:x})})]})}}}]);
//# sourceMappingURL=40.51873fb5.chunk.js.map