(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[36],{2036:function(e,t,a){"use strict";a.r(t);var c=a(21),n=a(10),s=a(0),o=a(1058),i=a(1077),r=a(1116),l=a(463),d=a(474),j=a(472),b=a(471),m=a(479),p=a(476),u=a(473),h=a(600),x=a(618),O=a(582),g=a(495),f=a(995),y=a(1023),v=a(520),_=a(689),N=a(496),C=a(497),w=a(122),S=a(534),k=a(511),L=a.n(k),T=a(512),D=a.n(T),R=a(1121),q=a(1140),A=a(701),B=a(1021),Q=a(1022),z=a(850),F=a(491),P=a(475),E=(a(58),a(6)),I=new(window.SpeechRecognition||window.webkitSpeechRecognition);I.continuous=!0,I.interimResults=!0,I.lang="en-US";var W=function(e){var t=e.note,a=e.setNote,c=e.complain_item_id,o=JSON.parse(localStorage.getItem("userData")).user_id,i=Object(s.useState)([]),r=Object(n.a)(i,2),l=r[0],d=r[1],j=Object(s.useState)(!1),h=Object(n.a)(j,2),x=h[0],O=h[1],f=Object(s.useState)(!1),w=Object(n.a)(f,2),S=w[0],k=w[1],L=Object(s.useState)(!1),T=Object(n.a)(L,2),D=T[0],W=T[1];function M(){var e=document.getElementById("chatScroll");e.scrollTop=e.scrollHeight}Object(s.useEffect)((function(){D?(a(""),I.start(),I.onend=function(){console.log("continue.."),W(!1)}):(I.stop(),I.onend=function(){console.log("Stopped Mic on Click")}),I.onstart=function(){console.log("Mics on")},I.onresult=function(e){var t=Array.from(e.results).map((function(e){return e[0]})).map((function(e){return e.transcript})).join("");console.log(t),a(t),I.onerror=function(e){console.log(e.error)}}}),[D]),Object(s.useEffect)((function(){0!==l.length&&M(),N.a.complainComments({complain_item_id:c}).then((function(e){d(e.data.payload.comment),0!==e.data.payload.comment.length&&M()})).catch((function(e){console.log("complainComments",e),Object(C.a)(e)}))}),[x]);return Object(E.jsxs)(b.a,{children:[Object(E.jsx)(m.a,{className:"border-bottom py-1",children:Object(E.jsx)(p.a,{tag:"h4",children:"Chat"})}),Object(E.jsx)(u.a,{className:"d-flex align-items-end overflow-auto",style:{padding:"0",height:"322px"},children:0!==l.length&&Object(E.jsx)("div",{id:"chatScroll",className:"w-100 overflow-auto p-1",style:{height:"322px"},children:l.map((function(e,t){return e.comment_user.user_id!==o?Object(E.jsxs)("div",{className:"d-flex  my-1 ",children:[Object(E.jsx)("div",{className:"chat-avatar",children:Object(E.jsx)(P.a,{className:"box-shadow-1 cursor-pointer mt-1",img:e.comment_user.photo})}),Object(E.jsx)("div",{className:"chat-body ml-1 ",style:{maxWidth:"80%"},children:Object(E.jsxs)("div",{className:"chat-content",children:[Object(E.jsxs)("div",{className:"d-flex flex-column justify-content-between",children:[Object(E.jsx)("small",{children:e.comment_user.full_name}),Object(E.jsx)("small",{style:{fontSize:"10px"},className:"text-right",children:Object(_.a)(e.created_at)})]}),Object(E.jsx)("p",{style:{fontSize:"14px",borderRadius:"0px 8px 8px 8px",padding:"5px 15px 5px 15px"},className:"bg-light-secondary text-black",children:e.comment})]})})]},t):Object(E.jsxs)("div",{className:"d-flex  my-1 justify-content-end",children:[Object(E.jsx)("div",{className:"chat-body mr-1  text-right ",style:{maxWidth:"80%"},children:Object(E.jsxs)("div",{className:"chat-content",children:[Object(E.jsxs)("div",{className:"d-flex flex-column justify-content-between",children:[Object(E.jsx)("small",{children:e.comment_user.full_name}),Object(E.jsx)("small",{style:{fontSize:"10px"},className:"text-left",children:Object(_.a)(e.created_at)})]}),Object(E.jsx)("p",{style:{fontSize:"14px",borderRadius:"8px 0px 8px 8px",padding:"5px 15px 5px 15px"},className:"text-light bg-primary",children:e.comment})]})}),Object(E.jsx)("div",{className:"chat-avatar",children:Object(E.jsx)(P.a,{className:"box-shadow-1 cursor-pointer mt-1",img:e.comment_user.photo})})]},t)}))})}),Object(E.jsx)(A.a,{className:"p-1",children:Object(E.jsxs)(g.a,{className:"chat-app-form",onSubmit:function(e){e.preventDefault(),k(!0),N.a.submitComplain({complain_item_id:c,comment:t}).then((function(e){a(""),W(!1),O(!x),k(!1)})).catch((function(e){k(!1),console.log("submitComplain",e),Object(C.a)(e)}))},style:{width:"100%"},children:[Object(E.jsxs)(B.a,{className:"input-group-merge mr-1 form-send-message",children:[Object(E.jsx)(Q.a,{addonType:"prepend",children:Object(E.jsx)(z.a,{children:Object(E.jsx)(R.a,{className:D?"cursor-pointer listening":"cursor-pointer",size:14,onClick:function(){return W(!D)}})})}),Object(E.jsx)(y.a,{required:!0,value:t,onChange:function(e){W(!1),a(e.target.value)},placeholder:"Type your message or use speech to text"}),Object(E.jsx)(Q.a,{addonType:"append",children:Object(E.jsx)(z.a,{children:Object(E.jsx)(F.a,{className:"attachment-icon mb-0",for:"attach-doc",title:"Send",children:Object(E.jsx)("button",{type:"submit",className:"sendBtn",disabled:S,children:S?Object(E.jsx)(v.a,{className:"text-secondary",size:"sm"}):Object(E.jsx)(q.a,{className:"cursor-pointer text-secondary",size:14})})})})})]}),D&&Object(E.jsxs)("div",{class:"loader",children:[Object(E.jsx)("div",{class:"line"}),Object(E.jsx)("div",{class:"line"}),Object(E.jsx)("div",{class:"line"}),Object(E.jsx)("div",{class:"line"})]})]})})]})},M=a(528),J=a(500),H=(D()(L.a),function(e){var t=e.Contractormodal,a=e.contractorList,c=e.toggleContractormodal;return Object(E.jsxs)(h.a,{isOpen:t,toggle:c,className:"modal-dialog-centered",children:[Object(E.jsx)(x.a,{toggle:c,children:"Contractor List"}),Object(E.jsx)(O.a,{children:Object(E.jsx)(d.a,{children:Object(E.jsx)(j.a,{md:"12",children:a.map((function(e,t){return Object(E.jsxs)("div",{className:"border m-1 p-1",children:[Object(E.jsx)("img",{src:e.photo,alt:"photo",style:{width:"50px",height:"50px",borderRadious:"50%"}}),"\xa0\xa0",Object(E.jsx)("span",{className:"text-primary",children:e.full_name})," ",Object(E.jsx)("br",{}),Object(E.jsxs)("span",{children:["Email :- \xa0\xa0",e.email," "]})," ",Object(E.jsx)("br",{}),Object(E.jsxs)("span",{children:["Phone :- \xa0\xa0",e.mobile]})]},t)}))})})})]})}),K=D()(L.a);t.default=function(){var e=Object(S.g)(),t=Object(s.useState)([]),a=Object(n.a)(t,2),k=a[0],T=a[1],D=Object(s.useState)(""),R=Object(n.a)(D,2),q=R[0],A=R[1],B=Object(s.useState)(!1),Q=Object(n.a)(B,2),z=Q[0],F=Q[1],P=Object(s.useState)(!1),I=Object(n.a)(P,2),U=I[0],Y=I[1],G=Object(s.useState)(!1),V=Object(n.a)(G,2),X=V[0],Z=V[1],$=Object(s.useState)(!1),ee=Object(n.a)($,2),te=ee[0],ae=ee[1],ce=Object(s.useState)(!1),ne=Object(n.a)(ce,2),se=ne[0],oe=ne[1],ie=function(){return oe(!se)},re=Object(s.useState)(!1),le=Object(n.a)(re,2),de=le[0],je=le[1],be=Object(s.useState)([]),me=Object(n.a)(be,2),pe=me[0],ue=me[1],he=function(){return je(!de)},xe=Object(s.useState)(!1),Oe=Object(n.a)(xe,2),ge=Oe[0],fe=Oe[1],ye=Object(s.useState)(!1),ve=Object(n.a)(ye,2),_e=ve[0],Ne=ve[1],Ce=Object(s.useState)(""),we=Object(n.a)(Ce,2),Se=we[0],ke=we[1],Le=Object(S.i)().ComplainID,Te=String(Le).split("-")[0],De=String(Le).split("-")[1],Re=Object(s.useState)({complainItems:[{complain_image_urls:[""],statusType:{id:0},contractor_quotation_list:[]}]}),qe=Object(n.a)(Re,2),Ae=qe[0],Be=qe[1],Qe=Object(s.useState)("Contractor assigned working Date-Time."),ze=Object(n.a)(Qe,2),Fe=ze[0],Pe=ze[1],Ee=Object(s.useState)(""),Ie=Object(n.a)(Ee,2),We=Ie[0],Me=Ie[1];Object(s.useEffect)((function(){N.a.getSingleComplainDetails({complain_id:Te,item_id:De}).then((function(e){console.log("getSingleComplainDetails",e.data.payload),Be(e.data.payload[0]),Ne(!0);var t=e.data.payload[0].complainItems[0],a=t.comment,c=t.statusType,n=t.isNeedLandLordApproval,s=t.isApprovedByLandLord,o=t.complainResolve,i=t.isApprovedByEstateManager;T(a),3===c.id?Me("Accept/Forward to Landlord"):7===c.id?!0===i&&Me("Accepted by - Branch Manager."):12===c.id?!0===n?(Me("Waiting for Landlords approval."),!0===s&&Me("Approved by - Landlord.")):Me("Accept/Forward to Landlord"):10===c.id?null!==o?(Me("Contractor assigned, waiting for - Quotation"),0!==o.quotation&&(Me("Quotation set, waiting for - Branch Mng. Approval"),!0===o.isNeedLandLordApprovalForQu?(Me("Waiting for Landlord - Quotation Approval"),!0===o.isQuotationCanceledByLandLor?Me("Quotation cancelled by - Landlord"):!0===o.isApprovedQuotationByLandLor&&Me("Quotation approved by - landlord")):Me("Need Landlord Approval For Quotation"))):Me("Waiting for approval"):11===c.id?Me("Quotation approved by - Branch Mng."):13===c.id?Me("Finished by - Contractor"):2===c.id?Me("Completed by - Tenant"):4===c.id&&Me("Cancelled..!!"),null!==o&&(null!==o.renter_avilable_date_time?!0===o.is_approved_working_date_time?Pe("Accepted - by Tenant"):Pe("Pending"):!0===o.is_approved_working_date_time&&Pe("Accepted - by Tenant")),3===c.id?(F(!0),Y(!0),Z(!1)):7===c.id?(F(!1),Y(!1),Z(!0)):4===c.id?(F(!1),Y(!1),Z(!1)):12===c.id&&!0===n&&!0===s?(F(!0),Y(!1)):(F(!1),Y(!1),Z(!1))})).catch((function(e){console.log("getSingleComplainDetails",e),Object(C.a)(e)}))}),[ge]);var Je=Ae.complainItems[0],He=Je.complain_type_id,Ke=Je.complain_image_urls,Ue=Je.complainType,Ye=Je.statusType,Ge=Je.complain_details,Ve=Je.contractor_quotation_list,Xe=Je.complainResolve,Ze=function(e,t,a){return K.fire(Object(c.a)({title:"Are you sure?",text:t,icon:"warning",allowOutsideClick:!1,allowEscapeKey:!1,showCancelButton:!0,confirmButtonText:"Yes",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"},showLoaderOnConfirm:!0,preConfirm:function(){return"approve"===e?N.a.approveComplain({complain_item_id:De}).then((function(e){Object(C.b)(e),console.log(e),fe(!ge)})).catch((function(e){console.log(e),Object(C.a)(e)})):"forward"===e?N.a.needLandlordpproval({complain_item_id:De}).then((function(e){Object(C.b)(e),console.log(e),fe(!ge)})).catch((function(e){console.log(e),Object(C.a)(e)})):"quotation"===e?N.a.reqForQuotation({complain_item_id:De,contractor_id:Ue.id}).then((function(e){Object(C.b)(e),console.log(e),fe(!ge)})).catch((function(e){console.log(e),Object(C.a)(e)})):"acceptQuotation"===e?N.a.acceptQuotation({complain_item_id:De,contractor_quotation_id:a}).then((function(e){Object(C.b)(e),console.log(e),fe(!ge)})).catch((function(e){console.log(e),Object(C.a)(e)})):void 0},buttonsStyling:!1},"allowOutsideClick",(function(){return!L.a.isLoading()}))).then((function(e){e.isConfirmed}))},$e=[{name:"Start date",minWidth:"250px",selector:function(e){return Object(_.a)(new Date(e.working_start_datetime))}},{name:"End date",minWidth:"250px",selector:function(e){return Object(_.a)(new Date(e.working_end_datetime))}},{name:"Contractor",minWidth:"100px",sortable:!0,selector:"contractor_name"},{name:"Quotation",minWidth:"100px",selector:function(e){return"".concat(J.c," ").concat(e.quotation)}},{name:"Action",minWidth:"100px",selector:function(e){return Object(E.jsx)(l.a.Ripple,{size:"sm",color:"success",onClick:function(t){return Ze("acceptQuotation","Do you want to accept this quotation?",e.id)},children:"Approve"})}}];return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(E.jsxs)(l.a.Ripple,{className:"mb-1 ml-1",color:"primary",onClick:function(t){return e.goBack()},children:[Object(E.jsx)(o.a,{size:12})," Back"]}),Object(E.jsxs)("div",{children:[z&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(l.a.Ripple,{color:"success",onClick:function(e){return Ze("approve","Do you want to approve?")},children:"Approve"}),"\xa0"]}),U&&Object(E.jsxs)(l.a.Ripple,{color:"primary",onClick:function(e){return Ze("forward","Forward to landlord")},children:[Object(E.jsx)(i.a,{size:12})," \xa0Forward to landlord"]}),X&&Object(E.jsx)(l.a.Ripple,{color:"primary",onClick:function(e){7===Ye.id||10===Ye.id?Ze("quotation","Request for quotation"):w.f.error("Can't Request For Quotation by this state")},children:"Request for quotation"})]})]}),Object(E.jsxs)(d.a,{className:"match-height",children:[Object(E.jsx)(j.a,{md:"7",children:Object(E.jsxs)(b.a,{children:[Object(E.jsxs)(m.a,{className:"border-bottom py-1",children:[Object(E.jsx)(p.a,{tag:"h4",children:"Complain Details"}),Object(E.jsx)(p.a,{tag:"h4",children:Object(E.jsx)("small",{children:_e?Object(_.a)(new Date(Ae.created_at)):""})})]}),Object(E.jsx)(u.a,{children:_e&&Object(E.jsx)("p",{className:"mt-1",children:Ge})})]})}),Object(E.jsx)(j.a,{md:"5",children:Object(E.jsxs)(d.a,{className:"match-height",children:[Object(E.jsx)(j.a,{md:"12",children:Object(E.jsxs)(b.a,{children:[Object(E.jsx)(m.a,{className:"border-bottom py-1",children:Object(E.jsx)(p.a,{tag:"h4",children:"Status"})}),Object(E.jsx)(u.a,{className:"mt-1",children:_e&&Object(E.jsxs)("div",{children:[10===Ye.id&&Object(E.jsx)("span",{className:"text-warning cursor-pointer",onClick:function(e){he(),N.a.ContractorListByType({contractor_type_id:He}).then((function(e){console.log("ContractorListByType",e.data.payload),ue(e.data.payload)})).catch((function(e){console.log("ContractorListByType",e),Object(C.a)(e)}))},children:Object(E.jsx)("b",{children:Ye.status_name})}),10!==Ye.id&&Object(E.jsx)("span",{className:"text-warning",children:Object(E.jsx)("b",{children:Ye.status_name})})," ",Object(E.jsx)("br",{}),Object(E.jsx)("small",{children:We})]})})]})}),Object(E.jsx)(j.a,{md:"12",children:Object(E.jsxs)(b.a,{children:[Object(E.jsx)(m.a,{className:"border-bottom py-1",children:Object(E.jsx)(p.a,{tag:"h4",children:"Type"})}),Object(E.jsx)(u.a,{className:"mt-1",children:_e&&Object(E.jsx)("span",{children:Object(E.jsx)("b",{children:Ue.complain_type_name})})})]})})]})})]}),Object(E.jsxs)(b.a,{children:[Object(E.jsx)(m.a,{className:"border-bottom py-1",children:Object(E.jsx)(p.a,{tag:"h4",children:"Images"})}),Object(E.jsx)(u.a,{className:"mt-1",children:_e?Object(E.jsx)(d.a,{children:Ke.map((function(e,t){return Object(E.jsx)(j.a,{sm:"4",children:Object(E.jsx)("img",{src:e,className:"img-fluid",style:{height:"300px",borderRadius:"10px"}})},t)}))}):Object(E.jsx)(d.a,{children:Object(E.jsx)(j.a,{sm:"4",children:Object(E.jsx)("div",{className:"bg-light",style:{height:"300px",width:"250px",borderRadius:"10px"}})})})})]}),Ve.length&&10===Ye.id?Object(E.jsxs)(b.a,{children:[Object(E.jsxs)(m.a,{className:"border-bottom",children:[Object(E.jsx)(p.a,{tag:"h4",children:"Quotation List"}),Object(E.jsx)(p.a,{tag:"h4",children:Object(E.jsxs)(l.a.Ripple,{size:"sm",color:"primary",onClick:ie,children:[Object(E.jsx)(i.a,{size:12})," \xa0Forward to landlord"]})})]}),Object(E.jsxs)(u.a,{children:[Object(E.jsx)(d.a,{children:Object(E.jsx)(j.a,{md:"12",children:Object(E.jsx)(M.a,{column:$e,TableData:Ve,TableDataLoading:!1})})}),Object(E.jsxs)(h.a,{isOpen:se,toggle:ie,className:"modal-dialog-centered",children:[Object(E.jsx)(x.a,{toggle:ie,children:"Enter Quotation Percentage"}),Object(E.jsx)(O.a,{children:Object(E.jsxs)(g.a,{className:"row pt-1",style:{width:"100%"},onSubmit:function(e){e.preventDefault(),ae(!0),N.a.quotationNeedLandlordpproval({complain_item_id:De,adding_percent_with_quotation:Number(Se)}).then((function(e){Object(C.b)(e),ie(),console.log(e),fe(!ge),ae(!1)})).catch((function(e){console.log(e),Object(C.a)(e),ae(!1)}))},autoComplete:"off",children:[Object(E.jsx)(j.a,{md:"12",children:Object(E.jsx)(f.a,{children:Object(E.jsx)(y.a,{required:!0,type:"number",id:"quotationPercentage",name:"quotationPercentage",min:1,max:99,placeholder:"15%",value:Se,onChange:function(e){return ke(e.target.value)}})})}),Object(E.jsx)(j.a,{md:"12 text-center",children:Object(E.jsx)(l.a.Ripple,{className:"mt-2",color:"primary",type:"submit",disabled:te,children:te?Object(E.jsx)(v.a,{size:"sm"}):"Forward"})})]})})]})]})]}):"",Object(E.jsxs)(d.a,{children:[Object(E.jsxs)(j.a,{md:"4",children:[Object(E.jsxs)(b.a,{children:[Object(E.jsx)(m.a,{className:"border-bottom py-1",children:Object(E.jsx)(p.a,{tag:"h4",children:"Tenant Info"})}),_e&&Object(E.jsxs)(u.a,{className:"mt-1 text-center",children:[Object(E.jsx)("img",{src:Ae.renter_info.photo,style:{height:"50px",width:"50px",borderRadius:"50%",margin:"10px 0px"}}),Object(E.jsx)("h3",{children:Ae.renter_info.full_name}),Object(E.jsx)(r.a,{size:14,style:{marginTop:"-3px"}}),"\xa0\xa0",Object(E.jsx)("span",{className:"text-muted",children:Ae.renter_info.renter_house_info.house_details})]})]}),_e&&null!==Xe&&Object(E.jsxs)(b.a,{children:[Object(E.jsx)(m.a,{className:"border-bottom py-1",children:Object(E.jsx)(p.a,{tag:"h4",children:"Assigned Contractor Info"})}),_e&&Object(E.jsx)(u.a,{className:"mt-1 text-center",children:null!==Xe?0!==Object.keys(Xe.contractor).length&&Object(E.jsxs)("div",{children:[Object(E.jsx)("img",{src:Xe.contractor.photo,style:{height:"50px",width:"50px",borderRadius:"50%",margin:"10px 0px"}}),Object(E.jsx)("h3",{children:Xe.contractor.full_name})," ",Object(E.jsx)("hr",{}),Object(E.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(E.jsx)("small",{children:"Amount"}),Object(E.jsxs)("small",{children:[J.c," ",Xe.quotation]})]}),Object(E.jsx)("hr",{}),Object(E.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(E.jsx)("small",{children:"Start Time"}),Object(E.jsx)("small",{children:Object(_.a)(new Date(Xe.working_date_time))})]}),Object(E.jsx)("hr",{}),Object(E.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(E.jsx)("small",{children:"End Time"}),Object(E.jsx)("small",{children:Object(_.a)(new Date(Xe.working_end_date_time))})]}),Object(E.jsx)("hr",{}),Object(E.jsx)("div",{className:"text-center",children:Object(E.jsx)("span",{children:Fe})})]}):""})]})]}),Object(E.jsx)(j.a,{md:"8",children:Object(E.jsx)(W,{note:q,setNote:A,comment:k,complain_item_id:De})})]}),Object(E.jsx)(H,{toggleContractormodal:he,Contractormodal:de,contractorList:pe})]})}},528:function(e,t,a){"use strict";var c=a(21),n=a(10),s=a(0),o=a(1057),i=a(520),r=a(492),l=a.n(r),d=a(515),j=a.n(d),b=a(6);t.a=function(e){var t=e.column,a=e.TableData,r=e.TableDataLoading,d=Object(s.useState)(0),m=Object(n.a)(d,2),p=m[0],u=m[1];return Object(b.jsx)(s.Fragment,{children:Object(b.jsx)(j.a,{noHeader:!0,pagination:!0,columns:t,paginationPerPage:15,className:"react-dataTable",sortIcon:Object(b.jsx)(o.a,{size:10}),paginationDefaultPage:p+1,paginationComponent:function(){var e;return Object(b.jsx)(l.a,(e={previousLabel:"",nextLabel:"",forcePage:p,onPageChange:function(e){return function(e){u(e.selected)}(e)},pageCount:a.length?a.length/15:1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link"},Object(c.a)(e,"breakClassName","page-item"),Object(c.a)(e,"breakLinkClassName","page-link"),Object(c.a)(e,"containerClassName","pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"),e))},data:a,progressPending:r,progressComponent:Object(b.jsx)(i.a,{color:"primary"}),responsive:!0})})}},689:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var c={year:"numeric",month:"long",day:"numeric"},n=function(e){var t=new Date(e).getTime(),a=Math.floor(t/6e4%60),n=Math.floor(t/36e5%24);n=n<10?"0".concat(n):n,a=a<10?"0".concat(a):a;var s=new Date(e).toLocaleDateString(void 0,c),o="".concat(n," : ").concat(a);return"".concat(s," , ").concat(o)}}}]);
//# sourceMappingURL=36.6a3da323.chunk.js.map