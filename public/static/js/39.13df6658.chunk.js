(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[39],{1951:function(e,t,a){"use strict";a.r(t);var n=a(21),c=a(1),r=a(10),s=a(0),i=a(471),l=a(476),o=a(475),u=a(472),d=a(499),j=a(473),b=a(1012),m=a(494),p=a(1039),O=a(1037),f=a(1038),h=a(861),g=a(463),x=a(517),v=a(501),y=a(488),_=a(492),w=a(121),S=a(540),C=a(497),N=a(496),F=a(508),L=a.n(F),T=a(509),I=a.n(T),M=a(557),P=a(6);I()(L.a);t.default=function(){Object(S.g)();var e=Object(s.useRef)(),t=Object(s.useRef)(),a=Object(s.useRef)(),F=JSON.parse(localStorage.getItem("userData")).role,L=Object(s.useState)(!1),T=Object(r.a)(L,2),I=T[0],R=T[1],U=Object(s.useState)([]),k=Object(r.a)(U,2),z=k[0],E=k[1],q=Object(s.useState)({previewVisible:!1,previewImage:"",previewTitle:"",fileList:[]}),A=Object(r.a)(q,2),D=A[0],V=A[1],B=Object(s.useState)(!1),J=Object(r.a)(B,2),H=J[0],$=J[1],G=Object(s.useState)(""),K=Object(r.a)(G,2),Q=K[0],W=K[1],X=Object(s.useState)(!1),Y=Object(r.a)(X,2),Z=Y[0],ee=Y[1],te=Object(s.useState)([]),ae=Object(r.a)(te,2),ne=ae[0],ce=ae[1],re=Object(s.useState)({sub_estate_manager_id:"",contractor_type_id:"",mobile:"",email:"",full_name:"",address:""}),se=Object(r.a)(re,2),ie=se[0],le=se[1],oe=Object(s.useState)([]),ue=Object(r.a)(oe,2),de=ue[0],je=ue[1],be=Object(s.useState)([]),me=Object(r.a)(be,2),pe=me[0],Oe=me[1];Object(s.useEffect)((function(){_.a.BranchList().then((function(e){je(e.data.payload)})).catch((function(e){Object(N.a)(e),console.log(e)})),_.a.ContractorTypeList().then((function(e){console.log(e.data.payload),Oe(e.data.payload)})).catch((function(e){Object(N.a)(e),console.log(e)}))}),[]);var fe=Object(s.useState)({email:!1,mobile:!1}),he=Object(r.a)(fe,2),ge=he[0],xe=he[1],ve=function(e){var t=/\S+@\S+\.\S+/.test(e.target.value);if("email"===e.target.name&&t&&xe(Object(c.a)(Object(c.a)({},ge),{},{email:!1})),"email"!==e.target.name||t||xe(Object(c.a)(Object(c.a)({},ge),{},{email:!0})),"mobile"===e.target.name){if("0"===e.target.value[0])return xe(Object(c.a)(Object(c.a)({},ge),{},{mobile:!0})),0;if(xe(Object(c.a)(Object(c.a)({},ge),{},{mobile:!1})),!/^[0-9]*$/.test(e.target.value))return 0}le(Object(c.a)(Object(c.a)({},ie),{},Object(n.a)({},e.target.name,e.target.value)))};return Object(P.jsx)(s.Fragment,{children:Object(P.jsxs)(i.a,{children:[Object(P.jsx)(l.a,{className:"border-bottom",children:Object(P.jsx)(o.a,{tag:"h4",children:"Create Contractor"})}),Object(P.jsx)(u.a,{children:Object(P.jsxs)(d.a,{className:"row pt-1",style:{width:"100%"},onSubmit:function(e){if(e.preventDefault(),I)return w.f.error("please wait, image is uploading to the server"),0;if(!z.length)return w.f.error("please upload Contractor image"),0;var t=ie.sub_estate_manager_id,a=ie.mobile,n=ie.email,c=ie.full_name,r=ie.address,s=ie.contractor_type_id;if(!/\S+@\S+\.\S+/.test(n))return 0;var i=z.length?z[0].url:null,l={sub_estate_manager_id:t||de[0].estate_manager_info.user_id,contractor_type_id:s,mobile:a,email:n,full_name:c,address:r,photo:i};console.log(l),$(!0),_.a.createContractor(l).then((function(e){console.log(e),Object(N.b)(e),$(!1)})).catch((function(e){Object(N.a)(e),$(!1)}))},autoComplete:"off",children:[Object(P.jsx)(j.a,{md:"3",className:"mt-0",children:Object(P.jsxs)(b.a,{children:[Object(P.jsx)(m.a,{for:"full_name",children:"Fullname"}),Object(P.jsx)(p.a,{required:!0,type:"text",id:"full_name",name:"full_name",placeholder:"Contractor name",value:ie.full_name,onChange:ve})]})}),Object(P.jsx)(j.a,{md:"3",children:Object(P.jsxs)(b.a,{children:[Object(P.jsx)(m.a,{className:"form-label",for:"mobile",children:"Mobile Number"}),Object(P.jsxs)(O.a,{className:"input-group-merge w-100 mb-1",children:[Object(P.jsx)(f.a,{addonType:"prepend",children:Object(P.jsx)(h.a,{children:C.e})}),Object(P.jsx)(p.a,{autoFocus:!0,required:!0,type:"text",minLength:10,maxLength:10,id:"mobile",name:"mobile",value:ie.mobile,onChange:ve,placeholder:"123-456-7899"})]}),ge.mobile&&Object(P.jsx)("span",{style:{color:"red",fontSize:"11px"},children:"First digit 0 not allow"})]})}),Object(P.jsx)(j.a,{md:"3",children:Object(P.jsxs)(b.a,{children:[Object(P.jsx)(m.a,{for:"email",children:"Email"}),Object(P.jsx)(p.a,{required:!0,type:"email",id:"email",name:"email",placeholder:"example@gmail.com",value:ie.email,onChange:ve}),ge.email&&ie.email&&Object(P.jsx)("span",{style:{color:"red",fontSize:"11px"},children:"Please Enter a valid Email"})]})}),"EstateManager"!==F&&Object(P.jsx)(j.a,{md:"3",className:"mt-0",children:Object(P.jsxs)(b.a,{children:[Object(P.jsx)(m.a,{children:"Select a Branch"}),Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(v.a,{ref:e,theme:y.g,className:"react-select",classNamePrefix:"select",name:"sub_estate_manager_id",maxMenuHeight:150,onChange:function(e){le(Object(c.a)(Object(c.a)({},ie),{},{sub_estate_manager_id:e.value}))},options:de.map((function(e){return{value:e.estate_manager_info.user_id,label:e.branch_name}})),isClearable:!1}),Object(P.jsx)(p.a,{required:!0,style:{opacity:0,width:"100%",height:0},onFocus:function(t){return e.current.select.focus()},value:ie.sub_estate_manager_id||"",onChange:function(e){return""}})]})," "]})}),Object(P.jsx)(j.a,{md:"4",className:"mt-0",children:Object(P.jsxs)(b.a,{children:[Object(P.jsx)(m.a,{children:"Select a Contractor Type"}),Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(v.a,{ref:t,theme:y.g,className:"react-select",classNamePrefix:"select",name:"contractor_type_id",maxMenuHeight:150,onChange:function(e){le(Object(c.a)(Object(c.a)({},ie),{},{contractor_type_id:e.value}))},options:pe.map((function(e){return{value:e.id,label:e.type_name}})),isClearable:!1}),Object(P.jsx)(p.a,{required:!0,style:{opacity:0,width:"100%",height:0},onFocus:function(e){return t.current.select.focus()},value:ie.contractor_type_id||"",onChange:function(e){return""}})]})," "]})}),Object(P.jsxs)(j.a,{md:"4",children:[Object(P.jsx)(m.a,{for:"postcode",children:"Search Address by Post Code"}),Object(P.jsxs)(O.a,{children:[Object(P.jsx)(p.a,{type:"text",id:"postcode",name:"postcode",placeholder:"enter a valid postcode",value:Q,onChange:function(e){return W(e.target.value)}}),Object(P.jsx)(f.a,{addonType:"append",children:Object(P.jsx)(g.a,{color:"primary",outline:!0,type:"button",onClick:function(e){e.preventDefault(),ee(!0),_.a.ukAddressEndpoint({postCode:Q}).then((function(e){console.log(e.data.payload),ce(e.data.payload.addresses.map((function(e){return"".concat(e.building_number,", ").concat(e.thoroughfare,", ").concat(e.locality,", ").concat(e.town_or_city)}))),ee(!1)})).catch((function(e){ce([]),ee(!1),Object(N.a)(e)}))},children:Z?Object(P.jsx)(x.a,{size:"sm"}):"Search"})})]})]}),Object(P.jsxs)(j.a,{md:"4",children:[Object(P.jsx)(m.a,{children:"Address"}),Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(v.a,{ref:a,theme:y.g,className:"react-select",classNamePrefix:"select",name:"address",onChange:function(e){le(Object(c.a)(Object(c.a)({},ie),{},{address:e.value}))},options:ne.map((function(e){return{value:e,label:e}})),value:{value:ie.address,label:ie.address},isClearable:!1}),Object(P.jsx)(p.a,{required:!0,style:{opacity:0,width:"100%",height:0},onFocus:function(e){return a.current.select.focus()},value:ie.address||"",onChange:function(e){return""}})]})]}),Object(P.jsxs)(j.a,{md:"12",className:"my-0",children:[Object(P.jsx)(m.a,{children:"Contractor Image"}),Object(P.jsx)(M.a,{setimgUpLoading:R,state:D,setState:V,fileUrls:z,setFileUrls:E})]}),Object(P.jsx)(j.a,{md:"12 text-center",children:Object(P.jsx)(g.a.Ripple,{className:"mt-2",color:"primary",type:"submit",disabled:H,children:H?Object(P.jsx)(x.a,{size:"sm"}):"Submit"})})]})})]})})}},471:function(e,t,a){"use strict";var n=a(15),c=a(20),r=a(0),s=a.n(r),i=a(5),l=a.n(i),o=a(58),u=a.n(o),d=a(80),j={tag:d.tagPropType,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},b=function(e){var t=e.className,a=e.cssModule,r=e.color,i=e.body,l=e.inverse,o=e.outline,j=e.tag,b=e.innerRef,m=Object(c.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(d.mapToCssModules)(u()(t,"card",!!l&&"text-white",!!i&&"card-body",!!r&&(o?"border":"bg")+"-"+r),a);return s.a.createElement(j,Object(n.a)({},m,{className:p,ref:b}))};b.propTypes=j,b.defaultProps={tag:"div"},t.a=b},557:function(e,t,a){"use strict";var n=a(122),c=a(511),r=a.n(c),s=a(516),i=a(1),l=(a(0),a(849)),o=a(1886),u=(a(542),a(121)),d=a(492),j=a(1069),b=a(496),m=a(497),p=a(6);t.a=function(e){var t=e.fileUrls,a=e.setFileUrls,c=e.state,O=e.setState,f=e.setimgUpLoading;function h(e){return new Promise((function(t,a){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return t(n.result)},n.onerror=function(e){return a(e)}}))}var g=c.previewVisible,x=c.previewImage,v=c.fileList,y=c.previewTitle,_=function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.url||t.preview){e.next=4;break}return e.next=3,h(t.originFileObj);case 3:t.preview=e.sent;case 4:O(Object(i.a)(Object(i.a)({},c),{},{previewImage:t.url||t.preview,previewVisible:!0,previewTitle:t.name||t.url.substring(t.url.lastIndexOf("/")+1)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=Object(p.jsxs)("div",{className:"text-center p-1",style:{height:"102px",width:"102px"},children:[Object(p.jsx)("span",{children:Object(p.jsx)(j.a,{size:20,className:"my-1"})})," ",Object(p.jsx)("br",{}),Object(p.jsx)("span",{children:"Add Image"})]}),S={beforeUpload:function(e){var c=e.size/1024/1024<2,r="image/jpeg"===e.type||"image/png"===e.type;if(r){if(c){var s=new FormData;return s.append("complain_image",e),f(!0),d.a.singleFileupload(s).then((function(c){console.log(c.data.payload.fileurl),f(!1),a([].concat(Object(n.a)(t),[{uid:e.uid,name:"image.png",status:"done",type:"image/jpeg",url:c.data.payload.fileurl}]))})).catch((function(e){f(!1),console.log(e),Object(b.a)(e)})),r&&c}u.f.error("Image must smaller than 2MB!")}else u.f.error("".concat(e.name," is not a Image file"))}};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(l.a,Object(i.a)(Object(i.a)({},S),{},{action:"".concat(m.d,"/api/fackupload"),listType:"picture-card",fileList:v,onPreview:_,onChange:function(e){var n=e.fileList,r=e.file;return r.size/1024/1024>2?0:"image/jpeg"===r.type||"image/png"===r.type?(a(t.filter((function(e){return n.some((function(t){return e.uid===t.uid}))}))),void O(Object(i.a)(Object(i.a)({},c),{},{fileList:n.filter((function(e){return e.type.includes("image")}))}))):0},children:v.length>=1?null:w})),Object(p.jsx)(o.a,{visible:g,title:y,footer:null,onCancel:function(){return O(Object(i.a)(Object(i.a)({},c),{},{previewVisible:!1}))},children:Object(p.jsx)("img",{alt:"example",style:{width:"100%"},src:x})})]})}}}]);
//# sourceMappingURL=39.13df6658.chunk.js.map