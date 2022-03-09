(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[146],{2030:function(e,t,a){"use strict";a.r(t);var n=a(10),c=a(0),s=(a(477),a(474)),i=a(473),r=a(471),o=a(472),l=a(476),j=a(475),d=a(492),b=a(786),m=a(992),u=a.n(m),h=a(993),O=a.n(h),x=(a(58),a(122)),p=(a(81),a(503)),g=a.n(p),f=a(496),v=a(6),_=function(){var e=Object(c.useState)([{name:"Earning",data:[0,0,0,0,0,0,0,0,0,0,0,0]}]),t=Object(n.a)(e,2),a=t[0],o=t[1],l=Object(c.useState)({chart:{stacked:!0,type:"bar",toolbar:{show:!1}},grid:{padding:{top:-20,bottom:-10},yaxis:{lines:{show:!1}}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],labels:{style:{colors:f.g,fontSize:"0.86rem"}},axisTicks:{show:!1},axisBorder:{show:!1}},legend:{show:!1},dataLabels:{enabled:!1},colors:[f.f],plotOptions:{bar:{columnWidth:"17%",endingShape:"rounded"},distributed:!0},yaxis:{min:0,max:1e4,tickAmount:4,labels:{style:{colors:f.g,fontSize:"0.86rem"}}}}),b=Object(n.a)(l,2),m=b[0],u=b[1],h=Object(c.useState)("null"),O=Object(n.a)(h,2);O[0],O[1];return Object(c.useEffect)((function(){d.a.GetAllInvoicesByRange({startDate:"02/02/2021",endDate:"01/01/2022"}).then((function(e){try{for(var t=e.data.payload.map((function(e){return{date:"".concat(new Date(e.issue_date).getFullYear(),"/").concat(new Date(e.issue_date).getMonth()+1),amount:e.total_amount}})),a=[],n=new Date,c=0;c<12;c++)a.push("".concat(n.getFullYear(),"/").concat(n.getMonth()+1)),n.setMonth(n.getMonth()-1);for(var s=Object(x.a)(new Set(t.map((function(e){return e.date})))),i=a.filter((function(e){return!1===s.some((function(t){return t===e}))})),r=i.map((function(e){return{date:e,amount:0}})),l=e.data.payload.map((function(e){return{date:e.issue_date,amount:e.total_amount}})),j=[].concat(Object(x.a)(l),Object(x.a)(r)),d=[],b=function(e){var t=j.filter((function(t){return new Date(t.date).getMonth()===e})),a=t.map((function(e){return e.amount})).reduce((function(e,t){return e+t})),n={date:"".concat(new Date(t[0].date).getFullYear(),"/").concat(new Date(t[0].date).getMonth()+1),amount:a};d.push(n)},m=0;m<12;m++)b(m);console.log(d),o([{name:"Earning",data:d.map((function(e){return e.amount}))}]),u({chart:{stacked:!0,type:"bar",toolbar:{show:!1}},grid:{padding:{top:-20,bottom:-10},yaxis:{lines:{show:!1}}},xaxis:{categories:d.map((function(e){return e.date})),labels:{style:{colors:f.g,fontSize:"0.86rem"}},axisTicks:{show:!1},axisBorder:{show:!1}},legend:{show:!1},dataLabels:{enabled:!1},colors:[f.f],plotOptions:{bar:{columnWidth:"17%",endingShape:"rounded"},distributed:!0},yaxis:{min:0,max:Math.max.apply(Math,Object(x.a)(d.map((function(e){return e.amount})))),tickAmount:4,labels:{style:{colors:f.g,fontSize:"0.86rem"}}}})}catch(h){console.error(h)}})).catch((function(e){console.log("GetAllInvoicesByRange",e)}))}),[]),Object(v.jsx)(r.a,{className:"card-revenue-budget",children:Object(v.jsx)(s.a,{className:"mx-0",children:Object(v.jsxs)(i.a,{className:"revenue-report-wrapper",md:"12",xs:"12",children:[Object(v.jsx)("div",{className:"d-sm-flex justify-content-between align-items-center mb-3",children:Object(v.jsx)(j.a,{className:"mb-50 mb-sm-0",children:"Revenue Report"})}),Object(v.jsx)(g.a,{id:"revenue-report-chart",type:"bar",height:"230",options:m,series:a})]})})})},N=a(1110),y=a(1078),w=a(1082),D=a(1083),k=a(1049),S=a(498),I=a(1044),C=a(463),A=a(518),M=a(631),T=a(517),P=a.n(T),L=(a(487),a(497)),z=a(540),R=a(573),E=a(592),W=a(562),J=a(544),B=function(e){var t=e.InvoiceDetails,a=e.InvModal,n=e.setInvModal;return Object(c.useEffect)((function(){console.log("row",t)}),[]),Object(v.jsxs)(R.a,{isOpen:a,toggle:function(){return n(!a)},className:"modal-dialog-centered modal-xl",children:[Object(v.jsx)(E.a,{toggle:function(){return n(!a)}}),Object(v.jsx)(W.a,{children:Object(v.jsxs)(r.a,{children:[Object(v.jsx)("br",{}),Object(v.jsxs)("h3",{className:"text-primary text-center",children:[" ",Object(v.jsx)("b",{children:" Invoice Details"})]}),Object(v.jsx)("br",{}),Object(v.jsx)("div",{className:"text-center",children:Object(v.jsxs)(k.a,{pill:!0,color:"warning",className:"px-2 py-1",children:["Current Status : ",t.statusType.status_name]})}),Object(v.jsx)("br",{}),Object(v.jsxs)(J.a,{responsive:!0,bordered:!0,children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{className:"bg-white",children:"Invoice ID"}),Object(v.jsx)("th",{className:"bg-white",children:"Issue Date"}),Object(v.jsx)("th",{className:"bg-white",children:"Total Amount"}),Object(v.jsx)("th",{className:"bg-white",children:"Paid Amount"})]})}),Object(v.jsx)("tbody",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{scope:"row",children:t.invoice_id}),Object(v.jsx)("td",{children:Object(M.a)(t.issue_date)}),Object(v.jsxs)("td",{children:[f.c," ",t.total_amount]}),Object(v.jsxs)("td",{children:[f.c," ",t.pay_amount]})]})})]}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsxs)(s.a,{className:"px-md-5 px-2",children:[Object(v.jsxs)(i.a,{md:"6",className:"pl-2",children:[Object(v.jsx)("p",{children:Object(v.jsx)("b",{children:"Client Info"})}),Object(v.jsxs)("p",{children:["Name :\xa0\xa0\xa0\xa0\xa0\xa0\xa0",t.invoice_info.clientinfo.name]}),Object(v.jsxs)("p",{children:["Phone :\xa0\xa0\xa0\xa0\xa0\xa0",t.invoice_info.clientinfo.phone]}),Object(v.jsxs)("p",{children:["Property :\xa0\xa0\xa0",t.invoice_info.clientinfo.property]}),Object(v.jsxs)("p",{children:["Email :\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",t.invoice_info.clientinfo.email]})]}),Object(v.jsxs)(i.a,{md:"6",className:"pl-2",children:[Object(v.jsx)("p",{children:Object(v.jsx)("b",{children:"Merchant Info"})}),Object(v.jsxs)("p",{children:["Name :\xa0\xa0\xa0\xa0\xa0\xa0\xa0",t.invoice_info.merchantinfo.name]}),Object(v.jsxs)("p",{children:["Phone :\xa0\xa0\xa0\xa0\xa0\xa0",t.invoice_info.merchantinfo.phone]}),Object(v.jsxs)("p",{children:["Address :\xa0\xa0\xa0\xa0",t.invoice_info.merchantinfo.address]}),Object(v.jsxs)("p",{children:["Email :\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",t.invoice_info.merchantinfo.email]})]})]}),Object(v.jsx)("br",{}),Object(v.jsx)("div",{className:"text-center",children:Object(v.jsx)(k.a,{pill:!0,color:"primary",className:"px-3 py-1",children:"Payment Info"})}),Object(v.jsx)("br",{}),Object(v.jsxs)(J.a,{responsive:!0,bordered:!0,children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{className:"bg-white",children:"Tenants"}),Object(v.jsx)("th",{className:"bg-white",children:"Description"}),Object(v.jsx)("th",{className:"bg-white",children:"Payable for Month"}),Object(v.jsx)("th",{className:"bg-white",children:"Per Unit"}),Object(v.jsx)("th",{className:"bg-white",children:"Amount"})]})}),Object(v.jsx)("tbody",{children:t.invoice_info.iteminfo.map((function(e){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{scope:"row",children:e.number_of_renter||"0"}),Object(v.jsx)("td",{children:e.description}),Object(v.jsx)("td",{children:e.pay_for_date}),Object(v.jsx)("td",{children:e.unit_per}),Object(v.jsx)("td",{children:e.amount})]})}))})]}),Object(v.jsx)("div",{className:"d-flex justify-content-end",children:Object(v.jsxs)("div",{className:"py-3 pr-2",children:[Object(v.jsxs)("p",{className:"border-bottom p-1 m-0",children:[Object(v.jsx)("b",{children:"Sub-Total"})," :\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",f.c," ",t.invoice_info.amountinfo.sub_total]}),Object(v.jsxs)("p",{className:"border-bottom p-1 m-0",children:[Object(v.jsx)("b",{children:"Tax"})," :\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",f.c," ",t.invoice_info.amountinfo.tax," "]}),Object(v.jsxs)("p",{className:"bg-primary text-white p-1 m-0",children:[Object(v.jsx)("b",{children:"Total"})," :\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",f.c," ",t.invoice_info.amountinfo.total]})]})})]})})]})},F=a(520),G=function(){var e=Object(c.useState)([]),t=Object(n.a)(e,2),a=t[0],b=t[1],m=Object(c.useState)(!1),u=Object(n.a)(m,2),h=u[0],O=u[1],x=Object(c.useState)({}),p=Object(n.a)(x,2),g=p[0],_=p[1],T=(JSON.parse(localStorage.getItem("userData")).role,Object(z.g)(),Object(c.useState)(!0)),R=Object(n.a)(T,2),E=R[0],W=R[1],J=Object(c.useState)([]),G=Object(n.a)(J,2),H=G[0],Y=G[1],q=Object(c.useState)(1),U=Object(n.a)(q,2),V=U[0],K=U[1],Q=Object(c.useState)(5),X=Object(n.a)(Q,2),Z=X[0],$=(X[1],Object(c.useState)(!1)),ee=Object(n.a)($,2),te=ee[0],ae=ee[1],ne=Object(c.useState)(""),ce=Object(n.a)(ne,2),se=ce[0],ie=ce[1],re=Object(c.useState)(""),oe=Object(n.a)(re,2),le=oe[0],je=oe[1],de=function(e,t){d.a.GetAllInvoices({page:e,limit:t}).then((function(e){console.log("getAllInvoicesData",e.data.payload),Y(e.data.payload),W(!1)})).catch((function(e){console.log("getAllInvoicesData",e),W(!1)}))};Object(c.useEffect)((function(){de(V,Z)}),[]);var be=[{name:"Invoice ID",maxWidth:"120px",selector:"invoice_id"},{name:"Invoices Issue Date",minWidth:"220px",selector:function(e){return Object(M.a)(e.issue_date)}},{name:"Total Amount",minWidth:"150px",selector:function(e){return"".concat(f.c," ").concat(e.total_amount)}},{name:"Paid Amount",minWidth:"150px",selector:function(e){return"".concat(f.c," ").concat(e.pay_amount)}},{name:"Status",minWidth:"150px",selector:function(e){return 14===e.statusType.id?Object(v.jsx)(k.a,{pill:!0,color:"warning",className:"px-1",children:"Due"}):Object(v.jsx)(k.a,{pill:!0,color:"success",className:"px-1",children:"Paid"})}},{name:"Action",minWidth:"150px",selector:function(e){return Object(v.jsx)("span",{title:"View",children:Object(v.jsx)(N.a,{size:18,color:"seagreen",style:{cursor:"pointer"},onClick:function(t){_(e),O(!0)}})})}}],me=function(e){W(!0),"prev"===e?(K(V-1),de(V-1,Z)):(K(V+1),de(V+1,Z))};return Object(v.jsxs)(r.a,{children:[Object(v.jsxs)(l.a,{className:"border-bottom titleSelect",children:[Object(v.jsx)(j.a,{tag:"h4",children:"Invoices"}),Object(v.jsxs)(S.a,{className:"d-flex",onSubmit:function(e){e.preventDefault(),W(!0),d.a.GetAllInvoicesByRange({startDate:se,endDate:le}).then((function(e){console.log("GetAllInvoicesByRange",e.data.payload),b(e.data.payload),W(!1),ae(!0)})).catch((function(e){Object(L.a)(e),W(!1)}))},children:[Object(v.jsx)(I.a,{required:!0,type:"month",onChange:function(e){return ie(new Date(e.target.value).toJSON().slice(0,10).split("-").reverse().join("/"))}}),"\xa0",Object(v.jsx)(I.a,{required:!0,type:"month",onChange:function(e){return je(new Date(e.target.value).toJSON().slice(0,10).split("-").reverse().join("/"))}}),"\xa0",Object(v.jsx)(C.a.Ripple,{size:"sm",color:"primary",type:"submit",className:"pr-1",style:{minWidth:"80px"},children:Object(v.jsx)("span",{children:"Filter"})})]})]}),Object(v.jsx)(o.a,{children:Object(v.jsx)(s.a,{children:te?Object(v.jsx)(i.a,{md:"12",children:Object(v.jsx)(F.a,{column:be,TableData:a,TableDataLoading:E})}):Object(v.jsxs)(i.a,{sm:"12",children:[Object(v.jsx)(P.a,{noHeader:!0,highlightOnHover:!0,data:H,columns:be,className:"react-dataTable",progressPending:E,sortIcon:Object(v.jsx)(y.a,{size:10}),progressComponent:Object(v.jsx)(A.a,{color:"primary"}),responsive:!0}),Object(v.jsxs)("div",{className:"text-right",children:[Object(v.jsx)(C.a.Ripple,{size:"sm",disabled:1===V,className:"mt-1",color:"secondary",onClick:function(e){return me("prev")},children:Object(v.jsx)(w.a,{color:"white",size:15})}),"\xa0\xa0\xa0\xa0",Object(v.jsx)(C.a.Ripple,{size:"sm",disabled:!H.length,className:"mt-1",color:"secondary",onClick:function(e){return me("next")},children:Object(v.jsx)(D.a,{color:"white",size:15})})]})]})})}),Object.keys(g).length?Object(v.jsx)(B,{InvoiceDetails:g,InvModal:h,setInvModal:O}):""]})},H=(a(987),a(988)),Y=a(989),q=a(990),U=a(991),V=a.p+"static/media/EAdmin.b5c93492.svg";t.default=function(){var e=Object(c.useState)({}),t=Object(n.a)(e,2),a=(t[0],t[1],Object(c.useState)(0)),m=Object(n.a)(a,2),h=m[0],x=m[1],p=Object(c.useState)({active_estate_admin:0,active_estate_manager:0,block_estate_admin:0,block_estate_manager:0,contractor:0,land_lord:0,tenant:0,due_amount:0,received_amount:0}),g=Object(n.a)(p,2),N=g[0],y=g[1];Object(c.useEffect)((function(){d.a.userCounter().then((function(e){var t=e.data.payload,a=t.active_estate_admin,n=t.active_estate_manager,c=t.block_estate_admin,s=t.block_estate_manager,i=t.contractor,r=t.land_lord,o=t.tenant,l=t.total_revenue,j=t.due_amount,d=t.received_amount;x(l),y({active_estate_admin:a,active_estate_manager:n,block_estate_admin:c,block_estate_manager:s,contractor:i,land_lord:r,tenant:o,due_amount:j,received_amount:d})})).catch((function(e){console.log(e)}))}),[]);var w=[{title:Number(N.active_estate_admin)+Number(N.block_estate_admin),subtitle:"Estate Admins",color:"light-primary",icon:V},{title:Number(N.active_estate_manager)+Number(N.block_estate_manager),subtitle:"Branch Managers",color:"light-warning",icon:H.a},{title:N.contractor,subtitle:"Contractors",color:"light-info",icon:Y.a},{title:N.tenant,subtitle:"Tenants",color:"light-danger",icon:U.a},{title:N.land_lord,subtitle:"Landlords",color:"light-success",icon:q.a}];return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(s.a,{className:"match-height",children:[Object(v.jsx)(i.a,{md:"4",children:Object(v.jsx)(r.a,{className:"card-congratulations-medal",children:Object(v.jsxs)(o.a,{children:[Object(v.jsx)("h5",{children:"Total Revenue"}),Object(v.jsx)("h3",{className:"mb-75 mt-2 pt-50",children:Object(v.jsxs)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:[f.c," ",h]})}),Object(v.jsx)("img",{className:"congratulation-medal",src:b.a,alt:"Medal Pic",height:80}),Object(v.jsxs)(s.a,{className:"mt-3",children:[Object(v.jsxs)(i.a,{md:"6",children:[Object(v.jsx)("p",{children:Object(v.jsx)("b",{children:"Received"})}),Object(v.jsx)("p",{className:"text-success",children:Object(v.jsxs)("b",{children:[f.c," ",N.received_amount]})})]}),Object(v.jsxs)(i.a,{md:"6",children:[Object(v.jsx)("p",{children:Object(v.jsx)("b",{children:"Due Amount"})}),Object(v.jsx)("p",{className:"text-warning",children:Object(v.jsxs)("b",{children:[" ",f.c," ",N.due_amount]})})]})]})]})})}),Object(v.jsx)(i.a,{md:"8",children:Object(v.jsxs)(r.a,{className:"card-statistics",children:[Object(v.jsx)(l.a,{children:Object(v.jsx)(j.a,{tag:"h5",children:"Users"})}),Object(v.jsx)(o.a,{className:"px-1",children:Object(v.jsx)("div",{className:"row",children:w.map((function(e,t){return Object(v.jsx)(i.a,{sm:"4",children:Object(v.jsxs)(u.a,{children:[Object(v.jsx)("img",{src:e.icon,className:"img-fluid m-1"}),Object(v.jsxs)(u.a,{className:"my-auto",body:!0,children:[Object(v.jsx)("h4",{className:"font-weight-bolder mb-0",children:e.title}),Object(v.jsx)(O.a,{className:"font-small-2 mb-0",children:e.subtitle})]})]})})}))})})]})})]}),Object(v.jsx)(_,{}),Object(v.jsx)(G,{})]})}},520:function(e,t,a){"use strict";var n=a(21),c=a(10),s=a(0),i=a(1078),r=a(518),o=a(493),l=a.n(o),j=a(517),d=a.n(j),b=a(6);t.a=function(e){var t=e.column,a=e.TableData,o=e.TableDataLoading,j=Object(s.useState)(0),m=Object(c.a)(j,2),u=m[0],h=m[1];return Object(b.jsx)(s.Fragment,{children:Object(b.jsx)(d.a,{noHeader:!0,pagination:!0,columns:t,paginationPerPage:15,className:"react-dataTable",sortIcon:Object(b.jsx)(i.a,{size:10}),paginationDefaultPage:u+1,paginationComponent:function(){var e;return Object(b.jsx)(l.a,(e={previousLabel:"",nextLabel:"",forcePage:u,onPageChange:function(e){return function(e){h(e.selected)}(e)},pageCount:a.length?a.length/15:1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link"},Object(n.a)(e,"breakClassName","page-item"),Object(n.a)(e,"breakLinkClassName","page-link"),Object(n.a)(e,"containerClassName","pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"),e))},data:a,progressPending:o,progressComponent:Object(b.jsx)(r.a,{color:"primary"}),responsive:!0})})}},631:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n={year:"numeric",month:"long",day:"numeric"},c=function(e){var t=new Date(e).getTime(),a=Math.floor(t/6e4%60),c=Math.floor(t/36e5%24);c=c<10?"0".concat(c):c,a=a<10?"0".concat(a):a;var s=new Date(e).toLocaleDateString(void 0,n),i="".concat(c," : ").concat(a);return"".concat(s," , ").concat(i)}},786:function(e,t,a){"use strict";t.a=a.p+"static/media/badge.7bf0a10d.svg"},987:function(e,t,a){"use strict";t.a=a.p+"static/media/property.81dcfe56.svg"},988:function(e,t,a){"use strict";t.a=a.p+"static/media/branch.26ca2046.svg"},989:function(e,t,a){"use strict";t.a=a.p+"static/media/contractor.83b2b8d9.svg"},990:function(e,t,a){"use strict";t.a=a.p+"static/media/landlord.4485578a.svg"},991:function(e,t,a){"use strict";t.a=a.p+"static/media/tenant.f5b65356.svg"}}]);
//# sourceMappingURL=146.8ee6ae11.chunk.js.map