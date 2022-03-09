(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[39],{1950:function(e,t,a){"use strict";a.r(t);var c=a(21),n=a(1),r=a(10),i=a(0),s=a(472),l=a(476),o=a(475),u=a(471),j=a(494),d=a(473),b=a(998),m=a(488),O=a(1026),p=a(1024),f=a(1025),h=a(852),g=a(463),x=a(515),v=a(501),y=a(483),_=a(492),w=a(122),S=a(534),C=a(498),N=a(496),F=a(508),L=a.n(F),I=a(509),T=a.n(I),U=a(602),k=a(6);T()(L.a);t.default=function(){Object(S.g)();var e=Object(i.useRef)(),t=Object(i.useRef)(),a=Object(i.useRef)(),F=JSON.parse(localStorage.getItem("userData")).role,L=Object(i.useState)(!1),I=Object(r.a)(L,2),T=I[0],z=I[1],P=Object(i.useState)([]),q=Object(r.a)(P,2),E=q[0],R=q[1],A=Object(i.useState)({previewVisible:!1,previewImage:"",previewTitle:"",fileList:[]}),D=Object(r.a)(A,2),M=D[0],V=D[1],B=Object(i.useState)(!1),J=Object(r.a)(B,2),H=J[0],$=J[1],G=Object(i.useState)(""),K=Object(r.a)(G,2),Q=K[0],W=K[1],X=Object(i.useState)(!1),Y=Object(r.a)(X,2),Z=Y[0],ee=Y[1],te=Object(i.useState)([]),ae=Object(r.a)(te,2),ce=ae[0],ne=ae[1],re=Object(i.useState)({sub_estate_manager_id:"",contractor_type_id:"",mobile:"",email:"",full_name:"",address:""}),ie=Object(r.a)(re,2),se=ie[0],le=ie[1],oe=Object(i.useState)([]),ue=Object(r.a)(oe,2),je=ue[0],de=ue[1],be=Object(i.useState)([]),me=Object(r.a)(be,2),Oe=me[0],pe=me[1];Object(i.useEffect)((function(){_.a.BranchList().then((function(e){de(e.data.payload)})).catch((function(e){Object(N.a)(e),console.log(e)})),_.a.ContractorTypeList().then((function(e){console.log(e.data.payload),pe(e.data.payload)})).catch((function(e){Object(N.a)(e),console.log(e)}))}),[]);var fe=Object(i.useState)({email:!1,mobile:!1}),he=Object(r.a)(fe,2),ge=he[0],xe=he[1],ve=function(e){var t=/\S+@\S+\.\S+/.test(e.target.value);if("email"===e.target.name&&t&&xe(Object(n.a)(Object(n.a)({},ge),{},{email:!1})),"email"!==e.target.name||t||xe(Object(n.a)(Object(n.a)({},ge),{},{email:!0})),"mobile"===e.target.name){if("0"===e.target.value[0])return xe(Object(n.a)(Object(n.a)({},ge),{},{mobile:!0})),0;if(xe(Object(n.a)(Object(n.a)({},ge),{},{mobile:!1})),!/^[0-9]*$/.test(e.target.value))return 0}le(Object(n.a)(Object(n.a)({},se),{},Object(c.a)({},e.target.name,e.target.value)))};return Object(k.jsx)(i.Fragment,{children:Object(k.jsxs)(s.a,{children:[Object(k.jsx)(l.a,{className:"border-bottom",children:Object(k.jsx)(o.a,{tag:"h4",children:"Create Contractor"})}),Object(k.jsx)(u.a,{children:Object(k.jsxs)(j.a,{className:"row pt-1",style:{width:"100%"},onSubmit:function(e){if(e.preventDefault(),T)return w.f.error("please wait, image is uploading to the server"),0;if(!E.length)return w.f.error("please upload Contractor image"),0;var t=se.sub_estate_manager_id,a=se.mobile,c=se.email,n=se.full_name,r=se.address,i=se.contractor_type_id;if(!/\S+@\S+\.\S+/.test(c))return 0;var s=E.length?E[0].url:null,l={sub_estate_manager_id:t||je[0].estate_manager_info.user_id,contractor_type_id:i,mobile:a,email:c,full_name:n,address:r,photo:s};console.log(l),$(!0),_.a.createContractor(l).then((function(e){console.log(e),Object(N.b)(e),$(!1)})).catch((function(e){Object(N.a)(e),$(!1)}))},autoComplete:"off",children:[Object(k.jsx)(d.a,{md:"3",className:"mt-0",children:Object(k.jsxs)(b.a,{children:[Object(k.jsx)(m.a,{for:"full_name",children:"Fullname"}),Object(k.jsx)(O.a,{required:!0,type:"text",id:"full_name",name:"full_name",placeholder:"Contractor name",value:se.full_name,onChange:ve})]})}),Object(k.jsx)(d.a,{md:"3",children:Object(k.jsxs)(b.a,{children:[Object(k.jsx)(m.a,{className:"form-label",for:"mobile",children:"Mobile Number"}),Object(k.jsxs)(p.a,{className:"input-group-merge w-100 mb-1",children:[Object(k.jsx)(f.a,{addonType:"prepend",children:Object(k.jsx)(h.a,{children:C.e})}),Object(k.jsx)(O.a,{autoFocus:!0,required:!0,type:"text",minLength:10,maxLength:10,id:"mobile",name:"mobile",value:se.mobile,onChange:ve,placeholder:"123-456-7899"})]}),ge.mobile&&Object(k.jsx)("span",{style:{color:"red",fontSize:"11px"},children:"First digit 0 not allow"})]})}),Object(k.jsx)(d.a,{md:"3",children:Object(k.jsxs)(b.a,{children:[Object(k.jsx)(m.a,{for:"email",children:"Email"}),Object(k.jsx)(O.a,{required:!0,type:"email",id:"email",name:"email",placeholder:"example@gmail.com",value:se.email,onChange:ve}),ge.email&&se.email&&Object(k.jsx)("span",{style:{color:"red",fontSize:"11px"},children:"Please Enter a valid Email"})]})}),"EstateManager"!==F&&Object(k.jsx)(d.a,{md:"3",className:"mt-0",children:Object(k.jsxs)(b.a,{children:[Object(k.jsx)(m.a,{children:"Select a Branch"}),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(v.a,{ref:e,theme:y.g,className:"react-select",classNamePrefix:"select",name:"sub_estate_manager_id",maxMenuHeight:150,onChange:function(e){le(Object(n.a)(Object(n.a)({},se),{},{sub_estate_manager_id:e.value}))},options:je.map((function(e){return{value:e.estate_manager_info.user_id,label:e.branch_name}})),isClearable:!1}),Object(k.jsx)(O.a,{required:!0,style:{opacity:0,width:"100%",height:0},onFocus:function(t){return e.current.select.focus()},value:se.sub_estate_manager_id||"",onChange:function(e){return""}})]})," "]})}),Object(k.jsx)(d.a,{md:"4",className:"mt-0",children:Object(k.jsxs)(b.a,{children:[Object(k.jsx)(m.a,{children:"Select a Contractor Type"}),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(v.a,{ref:t,theme:y.g,className:"react-select",classNamePrefix:"select",name:"contractor_type_id",maxMenuHeight:150,onChange:function(e){le(Object(n.a)(Object(n.a)({},se),{},{contractor_type_id:e.value}))},options:Oe.map((function(e){return{value:e.id,label:e.type_name}})),isClearable:!1}),Object(k.jsx)(O.a,{required:!0,style:{opacity:0,width:"100%",height:0},onFocus:function(e){return t.current.select.focus()},value:se.contractor_type_id||"",onChange:function(e){return""}})]})," "]})}),Object(k.jsxs)(d.a,{md:"4",children:[Object(k.jsx)(m.a,{for:"postcode",children:"Search Address by Post Code"}),Object(k.jsxs)(p.a,{children:[Object(k.jsx)(O.a,{type:"text",id:"postcode",name:"postcode",placeholder:"enter a valid postcode",value:Q,onChange:function(e){return W(e.target.value)}}),Object(k.jsx)(f.a,{addonType:"append",children:Object(k.jsx)(g.a,{color:"primary",outline:!0,type:"button",onClick:function(e){e.preventDefault(),ee(!0),_.a.ukAddressEndpoint({postCode:Q}).then((function(e){console.log(e.data.payload),ne(e.data.payload.addresses.map((function(e){return"".concat(e.building_number,", ").concat(e.thoroughfare,", ").concat(e.locality,", ").concat(e.town_or_city)}))),ee(!1)})).catch((function(e){ne([]),ee(!1),Object(N.a)(e)}))},children:Z?Object(k.jsx)(x.a,{size:"sm"}):"Search"})})]})]}),Object(k.jsxs)(d.a,{md:"4",children:[Object(k.jsx)(m.a,{children:"Address"}),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(v.a,{ref:a,theme:y.g,className:"react-select",classNamePrefix:"select",name:"address",onChange:function(e){le(Object(n.a)(Object(n.a)({},se),{},{address:e.value}))},options:ce.map((function(e){return{value:e,label:e}})),value:{value:se.address,label:se.address},isClearable:!1}),Object(k.jsx)(O.a,{required:!0,style:{opacity:0,width:"100%",height:0},onFocus:function(e){return a.current.select.focus()},value:se.address||"",onChange:function(e){return""}})]})]}),Object(k.jsxs)(d.a,{md:"12",className:"my-0",children:[Object(k.jsx)(m.a,{children:"Contractor Image"}),Object(k.jsx)(U.a,{setimgUpLoading:z,state:M,setState:V,fileUrls:E,setFileUrls:R})]}),Object(k.jsx)(d.a,{md:"12 text-center",children:Object(k.jsx)(g.a.Ripple,{className:"mt-2",color:"primary",type:"submit",disabled:H,children:H?Object(k.jsx)(x.a,{size:"sm"}):"Submit"})})]})})]})})}},602:function(e,t,a){"use strict";var c=a(121),n=a(512),r=a.n(n),i=a(514),s=a(1),l=(a(0),a(983)),o=a(1980),u=(a(556),a(122)),j=a(492),d=a(1056),b=a(496),m=a(498),O=a(6);t.a=function(e){var t=e.fileUrls,a=e.setFileUrls,n=e.state,p=e.setState,f=e.setimgUpLoading;function h(e){return new Promise((function(t,a){var c=new FileReader;c.readAsDataURL(e),c.onload=function(){return t(c.result)},c.onerror=function(e){return a(e)}}))}var g=n.previewVisible,x=n.previewImage,v=n.fileList,y=n.previewTitle,_=function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.url||t.preview){e.next=4;break}return e.next=3,h(t.originFileObj);case 3:t.preview=e.sent;case 4:p(Object(s.a)(Object(s.a)({},n),{},{previewImage:t.url||t.preview,previewVisible:!0,previewTitle:t.name||t.url.substring(t.url.lastIndexOf("/")+1)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=Object(O.jsxs)("div",{className:"text-center p-1",style:{height:"102px",width:"102px"},children:[Object(O.jsx)("span",{children:Object(O.jsx)(d.a,{size:20,className:"my-1"})})," ",Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:"Add Image"})]}),S={beforeUpload:function(e){var n=e.size/1024/1024<2,r="image/jpeg"===e.type||"image/png"===e.type;if(r){if(n){var i=new FormData;return i.append("complain_image",e),f(!0),j.a.singleFileupload(i).then((function(n){console.log(n.data.payload.fileurl),f(!1),a([].concat(Object(c.a)(t),[{uid:e.uid,name:"image.png",status:"done",type:"image/jpeg",url:n.data.payload.fileurl}]))})).catch((function(e){f(!1),console.log(e),Object(b.a)(e)})),r&&n}u.f.error("Image must smaller than 2MB!")}else u.f.error("".concat(e.name," is not a Image file"))}};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(l.a,Object(s.a)(Object(s.a)({},S),{},{action:"".concat(m.d,"/api/fackupload"),listType:"picture-card",fileList:v,onPreview:_,onChange:function(e){var c=e.fileList,r=e.file;return r.size/1024/1024>2?0:"image/jpeg"===r.type||"image/png"===r.type?(a(t.filter((function(e){return c.some((function(t){return e.uid===t.uid}))}))),void p(Object(s.a)(Object(s.a)({},n),{},{fileList:c.filter((function(e){return e.type.includes("image")}))}))):0},children:v.length>=1?null:w})),Object(O.jsx)(o.a,{visible:g,title:y,footer:null,onCancel:function(){return p(Object(s.a)(Object(s.a)({},n),{},{previewVisible:!1}))},children:Object(O.jsx)("img",{alt:"example",style:{width:"100%"},src:x})})]})}}}]);
//# sourceMappingURL=39.a3bcdb98.chunk.js.map