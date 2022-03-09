(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[79],{1095:function(e,t,a){"use strict";a.r(t);var s=a(15),c=a(0),n=a(451),l=a(477),i=a(79),r=a.n(i),o=function(e){return function(t){r.a.get("/apps/invoice/invoices",e).then((function(a){t({type:"GET_DATA",allData:a.data.allData,data:a.data.invoices,totalPages:a.data.total,params:e})}))}},d=a(133),j=a(1524),b=a(1376),u=a(1352),m=a(1643),h=a(1356),p=a(1366),x=a(1488),O=a(1402),g=a(1487),f=a(1388),N=a(1453),v=a(1479),y=a(1506),w=a(1434),C=a(1436),A=a(1472),D=a(1430),k=a(1504),E=a(1422),M=a(6),P={Sent:{color:"light-secondary",icon:x.a},Paid:{color:"light-success",icon:O.a},Draft:{color:"light-primary",icon:g.a},Downloaded:{color:"light-info",icon:f.a},"Past Due":{color:"light-danger",icon:N.a},"Partial Payment":{color:"light-warning",icon:v.a}},R=function(e){var t=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return e.avatar.length?Object(M.jsx)(l.a,{className:"mr-50",img:e.avatar,width:"32",height:"32"}):Object(M.jsx)(l.a,{color:t,className:"mr-50",content:e.client?e.client.name:"John Doe",initials:!0})},S=[{name:"#",minWidth:"107px",selector:"id",cell:function(e){return Object(M.jsx)(n.b,{to:"/apps/invoice/preview/".concat(e.id),children:"#".concat(e.id)})}},{name:Object(M.jsx)(y.a,{size:14}),minWidth:"102px",selector:"invoiceStatus",sortable:!0,cell:function(e){var t=P[e.invoiceStatus]?P[e.invoiceStatus].color:"primary",a=P[e.invoiceStatus]?P[e.invoiceStatus].icon:w.a;return Object(M.jsxs)(c.Fragment,{children:[Object(M.jsx)(l.a,{color:t,icon:Object(M.jsx)(a,{size:14}),id:"av-tooltip-".concat(e.id)}),Object(M.jsxs)(j.a,{placement:"top",target:"av-tooltip-".concat(e.id),children:[Object(M.jsx)("span",{className:"font-weight-bold",children:e.invoiceStatus}),Object(M.jsx)("br",{}),Object(M.jsx)("span",{className:"font-weight-bold",children:"Balance:"})," ",e.balance,Object(M.jsx)("br",{}),Object(M.jsx)("span",{className:"font-weight-bold",children:"Due Date:"})," ",e.dueDate]})]})}},{name:"Client",minWidth:"350px",selector:"client",sortable:!0,cell:function(e){var t=e.client?e.client.name:"John Doe",a=e.client?e.client.companyEmail:"johnDoe@email.com";return Object(M.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[R(e),Object(M.jsxs)("div",{className:"d-flex flex-column",children:[Object(M.jsx)("h6",{className:"user-name text-truncate mb-0",children:t}),Object(M.jsx)("small",{className:"text-truncate text-muted mb-0",children:a})]})]})}},{name:"Total",selector:"total",sortable:!0,minWidth:"150px",cell:function(e){return Object(M.jsxs)("span",{children:["$",e.total||0]})}},{name:"Issued Date",selector:"dueDate",sortable:!0,minWidth:"200px",cell:function(e){return e.dueDate}},{name:"Balance",selector:"balance",sortable:!0,minWidth:"164px",cell:function(e){return 0!==e.balance?Object(M.jsx)("span",{children:e.balance}):Object(M.jsx)(b.a,{color:"light-success",pill:!0,children:"Paid"})}},{name:"Action",minWidth:"110px",selector:"",sortable:!0,cell:function(e){return Object(M.jsxs)("div",{className:"column-action d-flex align-items-center",children:[Object(M.jsx)(x.a,{size:17,id:"send-tooltip-".concat(e.id)}),Object(M.jsx)(j.a,{placement:"top",target:"send-tooltip-".concat(e.id),children:"Send Mail"}),Object(M.jsx)(n.b,{to:"/apps/invoice/preview/".concat(e.id),id:"pw-tooltip-".concat(e.id),children:Object(M.jsx)(C.a,{size:17,className:"mx-1"})}),Object(M.jsx)(j.a,{placement:"top",target:"pw-tooltip-".concat(e.id),children:"Preview Invoice"}),Object(M.jsxs)(u.a,{children:[Object(M.jsx)(m.a,{tag:"span",children:Object(M.jsx)(A.a,{size:17,className:"cursor-pointer"})}),Object(M.jsxs)(h.a,{right:!0,children:[Object(M.jsxs)(p.a,{tag:"a",href:"/",className:"w-100",onClick:function(e){return e.preventDefault()},children:[Object(M.jsx)(D.a,{size:14,className:"mr-50"}),Object(M.jsx)("span",{className:"align-middle",children:"Download"})]}),Object(M.jsxs)(p.a,{tag:n.b,to:"/apps/invoice/edit/".concat(e.id),className:"w-100",children:[Object(M.jsx)(w.a,{size:14,className:"mr-50"}),Object(M.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(M.jsxs)(p.a,{tag:"a",href:"/",className:"w-100",onClick:function(t){var a;t.preventDefault(),d.a.dispatch((a=e.id,function(e,t){r.a.delete("/apps/invoice/delete",{id:a}).then((function(t){e({type:"DELETE_INVOICE"})})).then((function(){return e(o(t().invoice.params))}))}))},children:[Object(M.jsx)(k.a,{size:14,className:"mr-50"}),Object(M.jsx)("span",{className:"align-middle",children:"Delete"})]}),Object(M.jsxs)(p.a,{tag:"a",href:"/",className:"w-100",onClick:function(e){return e.preventDefault()},children:[Object(M.jsx)(E.a,{size:14,className:"mr-50"}),Object(M.jsx)("span",{className:"align-middle",children:"Duplicate"})]})]})]})]})}}],T=a(485),U=a.n(T),I=a(1405),z=a(492),G=a.n(z),B=a(465),L=a(467),Z=a(479),F=a(1339),Y=a(446),H=a(1369),W=a(472),J=a(125),Q=(a(983),a(749),function(e){var t=e.handleFilter,a=e.value,s=e.handleStatusValue,c=e.statusValue,l=e.handlePerPage,i=e.rowsPerPage;return Object(M.jsx)("div",{className:"invoice-list-table-header w-100 py-2",children:Object(M.jsxs)(B.a,{children:[Object(M.jsxs)(L.a,{lg:"6",className:"d-flex align-items-center px-0 px-lg-1",children:[Object(M.jsxs)("div",{className:"d-flex align-items-center mr-2",children:[Object(M.jsx)(Z.a,{for:"rows-per-page",children:"Show"}),Object(M.jsxs)(F.a,{className:"form-control ml-50 pr-3",type:"select",id:"rows-per-page",value:i,onChange:l,children:[Object(M.jsx)("option",{value:"10",children:"10"}),Object(M.jsx)("option",{value:"25",children:"25"}),Object(M.jsx)("option",{value:"50",children:"50"})]})]}),Object(M.jsx)(Y.a.Ripple,{tag:n.b,to:"/apps/invoice/add",color:"primary",children:"Add Record"})]}),Object(M.jsxs)(L.a,{lg:"6",className:"actions-right d-flex align-items-center justify-content-lg-end flex-lg-nowrap flex-wrap mt-lg-0 mt-1 pr-lg-1 p-0",children:[Object(M.jsxs)("div",{className:"d-flex align-items-center",children:[Object(M.jsx)(Z.a,{for:"search-invoice",children:"Search"}),Object(M.jsx)(H.a,{id:"search-invoice",className:"ml-50 mr-2 w-100",type:"text",value:a,onChange:function(e){return t(e.target.value)},placeholder:"Search Invoice"})]}),Object(M.jsxs)(H.a,{className:"w-auto ",type:"select",value:c,onChange:s,children:[Object(M.jsx)("option",{value:"",children:"Select Status"}),Object(M.jsx)("option",{value:"downloaded",children:"Downloaded"}),Object(M.jsx)("option",{value:"draft",children:"Draft"}),Object(M.jsx)("option",{value:"paid",children:"Paid"}),Object(M.jsx)("option",{value:"partial payment",children:"Partial Payment"}),Object(M.jsx)("option",{value:"past due",children:"Past Due"}),Object(M.jsx)("option",{value:"partial payment",children:"Partial Payment"})]})]})]})})});t.default=function(){var e=Object(J.b)(),t=Object(J.c)((function(e){return e.invoice})),a=Object(c.useState)(""),n=Object(s.a)(a,2),l=n[0],i=n[1],r=Object(c.useState)(1),d=Object(s.a)(r,2),j=d[0],b=d[1],u=Object(c.useState)(""),m=Object(s.a)(u,2),h=m[0],p=m[1],x=Object(c.useState)(10),O=Object(s.a)(x,2),g=O[0],f=O[1];Object(c.useEffect)((function(){e(o({page:j,perPage:g,status:h,q:l}))}),[e,t.data.length]);return Object(M.jsx)("div",{className:"invoice-list-wrapper",children:Object(M.jsx)(W.a,{children:Object(M.jsx)("div",{className:"invoice-list-dataTable",children:Object(M.jsx)(G.a,{noHeader:!0,pagination:!0,paginationServer:!0,subHeader:!0,columns:S,responsive:!0,sortIcon:Object(M.jsx)(I.a,{}),className:"react-dataTable",defaultSortField:"invoiceId",paginationDefaultPage:j,paginationComponent:function(){var a=Number((t.total/g).toFixed(0));return Object(M.jsx)(U.a,{pageCount:a||1,nextLabel:"",breakLabel:"...",previousLabel:"",activeClassName:"active",breakClassName:"page-item",breakLinkClassName:"page-link",forcePage:0!==j?j-1:0,onPageChange:function(t){return function(t){e(o({page:t.selected+1,perPage:g,status:h,q:l})),b(t.selected+1)}(t)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end p-1"})},data:function(){var e={status:h,q:l},a=Object.keys(e).some((function(t){return e[t].length>0}));return t.data.length>0?t.data:0===t.data.length&&a?[]:t.allData.slice(0,g)}(),subHeaderComponent:Object(M.jsx)(Q,{value:l,statusValue:h,rowsPerPage:g,handleFilter:function(t){i(t),e(o({page:j,perPage:g,status:h,q:t}))},handlePerPage:function(t){e(o({page:j,perPage:parseInt(t.target.value),status:h,q:l})),f(parseInt(t.target.value))},handleStatusValue:function(t){p(t.target.value),e(o({page:j,perPage:g,status:t.target.value,q:l}))}})})})})})}},1128:function(e,t,a){"use strict";t.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABdCAYAAADzCKvfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExODA4M0IxNEM4MzdEODk1OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQTY5RDZFNjk2NDUxMUU5QjgzM0NGNjBGOUVEM0JBMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQTY5RDZFNTk2NDUxMUU5QjgzM0NGNjBGOUVEM0JBMSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDE4MDExNzQwNzIwNjgxMTgwODNCMTRDODM3RDg5NTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTgwODNCMTRDODM3RDg5NTgiLz4gPC9yZGY6RGVzY3Jp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"},2243:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(653),n=a(451),l=a(934),i=a(125),r=a(465),o=a(467),d=a(624),j=a(472),b=a(468),u=a(1376),m=a(1524),h=a(459),p=a(446),x=a(6),O=function(e){var t=e.selectedUser;return Object(x.jsxs)(j.a,{className:"plan-card border-primary",children:[Object(x.jsxs)(b.a,{className:"d-flex justify-content-between align-items-center pt-75 pb-1",children:[Object(x.jsx)("h5",{className:"mb-0",children:"Current Plan"}),Object(x.jsxs)(u.a,{id:"plan-expiry-date",color:"light-secondary",children:["July 22, ",(new Date).getFullYear()]}),Object(x.jsx)(m.a,{placement:"top",target:"plan-expiry-date",children:"Expiry Date"})]}),Object(x.jsxs)(h.a,{children:[Object(x.jsx)(u.a,{className:"text-capitalize",color:"light-primary",children:null!==t?t.currentPlan:"Basic"}),Object(x.jsxs)("ul",{className:"list-unstyled my-1",children:[Object(x.jsx)("li",{children:Object(x.jsx)("span",{className:"align-middle",children:"5 Users"})}),Object(x.jsx)("li",{className:"my-25",children:Object(x.jsx)("span",{className:"align-middle",children:"10 GB Storage"})}),Object(x.jsx)("li",{children:Object(x.jsx)("span",{className:"align-middle",children:"Basic Support"})})]}),Object(x.jsx)(p.a.Ripple,{className:"text-center",color:"primary",block:!0,children:"Upgrade Plan"})]})]})},g=a(477),f=a(484),N=a(1429),v=a(1506),y=a(1377),w=a(1404),C=a(1497),A=a(1441),D=a(1478),k=function(e){var t=e.selectedUser;return Object(x.jsx)(j.a,{children:Object(x.jsx)(h.a,{children:Object(x.jsxs)(r.a,{children:[Object(x.jsxs)(o.a,{xl:"6",lg:"12",className:"d-flex flex-column justify-content-between border-container-lg",children:[Object(x.jsx)("div",{className:"user-avatar-section",children:Object(x.jsxs)("div",{className:"d-flex justify-content-start",children:[function(){if(null!==t&&t.avatar.length)return Object(x.jsx)("img",{src:t.avatar,alt:"user-avatar",className:"img-fluid rounded",height:"104",width:"104"});var e=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return Object(x.jsx)(g.a,{initials:!0,color:e,className:"rounded",content:t.fullName,contentStyles:{borderRadius:0,fontSize:"calc(36px)",width:"100%",height:"100%"},style:{height:"90px",width:"90px"}})}(),Object(x.jsxs)("div",{className:"d-flex flex-column ml-1",children:[Object(x.jsxs)("div",{className:"user-info mb-1",children:[Object(x.jsx)("h4",{className:"mb-0",children:null!==t?t.fullName:"Eleanor Aguilar"}),Object(x.jsx)(f.a,{tag:"span",children:null!==t?t.email:"eleanor.aguilar@gmail.com"})]}),Object(x.jsxs)("div",{className:"d-flex flex-wrap align-items-center",children:[Object(x.jsx)(p.a.Ripple,{tag:n.b,to:"/apps/user/edit/".concat(t.id),color:"primary",children:"Edit"}),Object(x.jsx)(p.a.Ripple,{className:"ml-1",color:"danger",outline:!0,children:"Delete"})]})]})]})}),Object(x.jsxs)("div",{className:"d-flex align-items-center user-total-numbers",children:[Object(x.jsxs)("div",{className:"d-flex align-items-center mr-2",children:[Object(x.jsx)("div",{className:"color-box bg-light-primary",children:Object(x.jsx)(N.a,{className:"text-primary"})}),Object(x.jsxs)("div",{className:"ml-1",children:[Object(x.jsx)("h5",{className:"mb-0",children:"23.3k"}),Object(x.jsx)("small",{children:"Monthly Sales"})]})]}),Object(x.jsxs)("div",{className:"d-flex align-items-center",children:[Object(x.jsx)("div",{className:"color-box bg-light-success",children:Object(x.jsx)(v.a,{className:"text-success"})}),Object(x.jsxs)("div",{className:"ml-1",children:[Object(x.jsx)("h5",{className:"mb-0",children:"$99.87K"}),Object(x.jsx)("small",{children:"Annual Profit"})]})]})]})]}),Object(x.jsx)(o.a,{xl:"6",lg:"12",className:"mt-2 mt-xl-0",children:Object(x.jsxs)("div",{className:"user-info-wrapper",children:[Object(x.jsxs)("div",{className:"d-flex flex-wrap align-items-center",children:[Object(x.jsxs)("div",{className:"user-info-title",children:[Object(x.jsx)(y.a,{className:"mr-1",size:14}),Object(x.jsx)(f.a,{tag:"span",className:"user-info-title font-weight-bold mb-0",children:"Username"})]}),Object(x.jsx)(f.a,{className:"mb-0",children:null!==t?t.username:"eleanor.aguilar"})]}),Object(x.jsxs)("div",{className:"d-flex flex-wrap align-items-center my-50",children:[Object(x.jsxs)("div",{className:"user-info-title",children:[Object(x.jsx)(w.a,{className:"mr-1",size:14}),Object(x.jsx)(f.a,{tag:"span",className:"user-info-title font-weight-bold mb-0",children:"Status"})]}),Object(x.jsx)(f.a,{className:"text-capitalize mb-0",children:null!==t?t.status:"Active"})]}),Object(x.jsxs)("div",{className:"d-flex flex-wrap align-items-center my-50",children:[Object(x.jsxs)("div",{className:"user-info-title",children:[Object(x.jsx)(C.a,{className:"mr-1",size:14}),Object(x.jsx)(f.a,{tag:"span",className:"user-info-title font-weight-bold mb-0",children:"Role"})]}),Object(x.jsx)(f.a,{className:"text-capitalize mb-0",children:null!==t?t.role:"Admin"})]}),Object(x.jsxs)("div",{className:"d-flex flex-wrap align-items-center my-50",children:[Object(x.jsxs)("div",{className:"user-info-title",children:[Object(x.jsx)(A.a,{className:"mr-1",size:14}),Object(x.jsx)(f.a,{tag:"span",className:"user-info-title font-weight-bold mb-0",children:"Country"})]}),Object(x.jsx)(f.a,{className:"mb-0",children:null!==t?t.country:"England"})]}),Object(x.jsxs)("div",{className:"d-flex flex-wrap align-items-center",children:[Object(x.jsxs)("div",{className:"user-info-title",children:[Object(x.jsx)(D.a,{className:"mr-1",size:14}),Object(x.jsx)(f.a,{tag:"span",className:"user-info-title font-weight-bold mb-0",children:"Contact"})]}),Object(x.jsx)(f.a,{className:"mb-0",children:null!==t?t.contact:"(123) 456-7890"})]})]})})]})})})},E=a(907),M=a(135),P=a(1128),R=a(1372),S=a(460),T=[{title:"12 Invoices have been paid",content:"Invoices have been paid to the company.",meta:"12 min ago",customContent:Object(x.jsxs)(R.a,{className:"align-items-center",children:[Object(x.jsx)("img",{className:"mr-1",src:P.a,alt:"pdf",height:"23"}),Object(x.jsx)(R.a,{body:!0,children:"invoice.pdf"})]})},{title:"Client Meeting",content:"Project meeting with john @10:15am.",meta:"45 min ago",color:"warning",customContent:Object(x.jsxs)(R.a,{className:"align-items-center",children:[Object(x.jsx)(g.a,{img:M.default,imgHeight:38,imgWidth:38}),Object(x.jsxs)(R.a,{className:"ml-50",body:!0,children:[Object(x.jsx)("h6",{className:"mb-0",children:"John Doe (Client)"}),Object(x.jsx)("span",{children:"CEO of Infibeam"})]})]})},{title:"Create a new project for client",content:"Add files to new design folder",meta:"2 days ago",color:"info"}],U=function(){return Object(x.jsxs)(j.a,{children:[Object(x.jsx)(b.a,{children:Object(x.jsx)(S.a,{tag:"h4",className:"mb-2",children:"User Timeline"})}),Object(x.jsx)(h.a,{children:Object(x.jsx)(E.a,{data:T})})]})},I=a(1095),z=a(623),G=a(1339),B=function(){return Object(x.jsxs)(j.a,{children:[Object(x.jsx)(b.a,{children:Object(x.jsx)(S.a,{tag:"h4",children:"Permissions"})}),Object(x.jsx)(f.a,{className:"ml-2",children:"Permission according to roles"}),Object(x.jsxs)(z.a,{striped:!0,borderless:!0,responsive:!0,children:[Object(x.jsx)("thead",{className:"thead-light",children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Module"}),Object(x.jsx)("th",{children:"Read"}),Object(x.jsx)("th",{children:"Write"}),Object(x.jsx)("th",{children:"Create"}),Object(x.jsx)("th",{children:"Delete"})]})}),Object(x.jsxs)("tbody",{children:[Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Admin"}),Object(x.jsx)("td",{children:Object(x.jsx)(G.a,{type:"checkbox",id:"admin-1",label:"",defaultChecked:!0,disabled:!0})}),Object(x.jsx)("td",{children:Object(x.jsx)(G.a,{type:"checkbox",id:"admin-2",label:"",disabled:!0})}),Object(x.jsx)("td",{children:Object(x.jsx)(G.a,{type:"checkbox",id:"admin-3",label:"",disabled:!0})}),Object(x.jsx)("td",{children:Object(x.jsx)(G.a,{type:"checkbox",id:"admin-4",label:"",disabled:!0})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Staff"}),Object(x.jsx)("td",{children:Object(x.jsx)(G.a,{type:"checkbox",id:"staff-1",label:"",disabled:!0})}),Object(x.jsx)("td",{children:Object(x.jsx)(G.a,{type:"checkbox",id:"staff-2",label:"",defaultChecked:!0,disabled:!0})}),Object(x.jsx)("td",{children:Object(x.jsx)(G.a,{type:"checkbox",id:"staff-3",label:"",disabled:!0})}),Object(x.jsx)("td",{children:Object(x.jsx)(G.a,{type:"checkbox",id:"staff-4",label:"",disabled:!0})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Author"}),Object(x.jsx)("td",{children:Object(x.jsx)(G.a,{type:"checkbox",id:"author-1",label:"",defaultChecked:!0,disabled:!0})}),Object(x.jsx)("td",{children:Object(x.jsx)(G.a,{type:"checkbox",id:"author-2",label:"",disabled:!0})}),Object(x.jsx)("td",{children:Object(x.jsx)(G.a,{type:"checkbox",id:"author-3",label:"",defaultChecked:!0,disabled:!0})}),Object(x.jsx)("td",{children:Object(x.jsx)(G.a,{type:"checkbox",id:"author-4",label:"",disabled:!0})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Contributor"}),Object(x.jsx)("td",{children:Object(x.jsx)(G.a,{type:"checkbox",id:"contributor-1",label:"",disabled:!0})}),Object(x.jsx)("td",{children:Object(x.jsx)(G.a,{type:"checkbox",id:"contributor-2",label:"",disabled:!0})}),Object(x.jsx)("td",{children:Object(x.jsx)(G.a,{type:"checkbox",id:"contributor-3",label:"",disabled:!0})}),Object(x.jsx)("td",{children:Object(x.jsx)(G.a,{type:"checkbox",id:"contributor-4",label:"",disabled:!0})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"User"}),Object(x.jsx)("td",{children:Object(x.jsx)(G.a,{type:"checkbox",id:"user-1",label:"",disabled:!0})}),Object(x.jsx)("td",{children:Object(x.jsx)(G.a,{type:"checkbox",id:"user-2",label:"",disabled:!0})}),Object(x.jsx)("td",{children:Object(x.jsx)(G.a,{type:"checkbox",id:"user-3",label:"",disabled:!0})}),Object(x.jsx)("td",{children:Object(x.jsx)(G.a,{type:"checkbox",id:"user-4",label:"",defaultChecked:!0,disabled:!0})})]})]})]})]})};a(992),t.default=function(e){var t=Object(i.c)((function(e){return e.users})),a=Object(i.b)(),j=Object(c.i)().id;return Object(s.useEffect)((function(){a(Object(l.e)(parseInt(j)))}),[a]),null!==t.selectedUser&&void 0!==t.selectedUser?Object(x.jsxs)("div",{className:"app-user-view",children:[Object(x.jsxs)(r.a,{children:[Object(x.jsx)(o.a,{xl:"9",lg:"8",md:"7",children:Object(x.jsx)(k,{selectedUser:t.selectedUser})}),Object(x.jsx)(o.a,{xl:"3",lg:"4",md:"5",children:Object(x.jsx)(O,{selectedUser:t.selectedUser})})]}),Object(x.jsxs)(r.a,{children:[Object(x.jsx)(o.a,{md:"6",children:Object(x.jsx)(U,{})}),Object(x.jsx)(o.a,{md:"6",children:Object(x.jsx)(B,{})})]}),Object(x.jsx)(r.a,{children:Object(x.jsx)(o.a,{sm:"12",children:Object(x.jsx)(I.default,{})})})]}):Object(x.jsxs)(d.a,{color:"danger",children:[Object(x.jsx)("h4",{className:"alert-heading",children:"User not found"}),Object(x.jsxs)("div",{className:"alert-body",children:["User with id: ",j," doesn't exist. Check list of all Users: ",Object(x.jsx)(n.b,{to:"/apps/user/list",children:"Users List"})]})]})}},459:function(e,t,a){"use strict";var s=a(14),c=a(20),n=a(0),l=a.n(n),i=a(5),r=a.n(i),o=a(56),d=a.n(o),j=a(78),b={tag:j.tagPropType,className:r.a.string,cssModule:r.a.object,innerRef:r.a.oneOfType([r.a.object,r.a.string,r.a.func])},u=function(e){var t=e.className,a=e.cssModule,n=e.innerRef,i=e.tag,r=Object(c.a)(e,["className","cssModule","innerRef","tag"]),o=Object(j.mapToCssModules)(d()(t,"card-body"),a);return l.a.createElement(i,Object(s.a)({},r,{className:o,ref:n}))};u.propTypes=b,u.defaultProps={tag:"div"},t.a=u},460:function(e,t,a){"use strict";var s=a(14),c=a(20),n=a(0),l=a.n(n),i=a(5),r=a.n(i),o=a(56),d=a.n(o),j=a(78),b={tag:j.tagPropType,className:r.a.string,cssModule:r.a.object},u=function(e){var t=e.className,a=e.cssModule,n=e.tag,i=Object(c.a)(e,["className","cssModule","tag"]),r=Object(j.mapToCssModules)(d()(t,"card-title"),a);return l.a.createElement(n,Object(s.a)({},i,{className:r}))};u.propTypes=b,u.defaultProps={tag:"div"},t.a=u},465:function(e,t,a){"use strict";var s=a(14),c=a(20),n=a(0),l=a.n(n),i=a(5),r=a.n(i),o=a(56),d=a.n(o),j=a(78),b=r.a.oneOfType([r.a.number,r.a.string]),u={tag:j.tagPropType,noGutters:r.a.bool,className:r.a.string,cssModule:r.a.object,form:r.a.bool,xs:b,sm:b,md:b,lg:b,xl:b},m={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e){var t=e.className,a=e.cssModule,n=e.noGutters,i=e.tag,r=e.form,o=e.widths,b=Object(c.a)(e,["className","cssModule","noGutters","tag","form","widths"]),u=[];o.forEach((function(t,a){var s=e[t];if(delete b[t],s){var c=!a;u.push(c?"row-cols-"+s:"row-cols-"+t+"-"+s)}}));var m=Object(j.mapToCssModules)(d()(t,n?"no-gutters":null,r?"form-row":"row",u),a);return l.a.createElement(i,Object(s.a)({},b,{className:m}))};h.propTypes=u,h.defaultProps=m,t.a=h},468:function(e,t,a){"use strict";var s=a(14),c=a(20),n=a(0),l=a.n(n),i=a(5),r=a.n(i),o=a(56),d=a.n(o),j=a(78),b={tag:j.tagPropType,className:r.a.string,cssModule:r.a.object},u=function(e){var t=e.className,a=e.cssModule,n=e.tag,i=Object(c.a)(e,["className","cssModule","tag"]),r=Object(j.mapToCssModules)(d()(t,"card-header"),a);return l.a.createElement(n,Object(s.a)({},i,{className:r}))};u.propTypes=b,u.defaultProps={tag:"div"},t.a=u},484:function(e,t,a){"use strict";var s=a(14),c=a(20),n=a(0),l=a.n(n),i=a(5),r=a.n(i),o=a(56),d=a.n(o),j=a(78),b={tag:j.tagPropType,className:r.a.string,cssModule:r.a.object},u=function(e){var t=e.className,a=e.cssModule,n=e.tag,i=Object(c.a)(e,["className","cssModule","tag"]),r=Object(j.mapToCssModules)(d()(t,"card-text"),a);return l.a.createElement(n,Object(s.a)({},i,{className:r}))};u.propTypes=b,u.defaultProps={tag:"p"},t.a=u},623:function(e,t,a){"use strict";var s=a(14),c=a(20),n=a(0),l=a.n(n),i=a(5),r=a.n(i),o=a(56),d=a.n(o),j=a(78),b={className:r.a.string,cssModule:r.a.object,size:r.a.string,bordered:r.a.bool,borderless:r.a.bool,striped:r.a.bool,dark:r.a.bool,hover:r.a.bool,responsive:r.a.oneOfType([r.a.bool,r.a.string]),tag:j.tagPropType,responsiveTag:j.tagPropType,innerRef:r.a.oneOfType([r.a.func,r.a.string,r.a.object])},u=function(e){var t=e.className,a=e.cssModule,n=e.size,i=e.bordered,r=e.borderless,o=e.striped,b=e.dark,u=e.hover,m=e.responsive,h=e.tag,p=e.responsiveTag,x=e.innerRef,O=Object(c.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),g=Object(j.mapToCssModules)(d()(t,"table",!!n&&"table-"+n,!!i&&"table-bordered",!!r&&"table-borderless",!!o&&"table-striped",!!b&&"table-dark",!!u&&"table-hover"),a),f=l.a.createElement(h,Object(s.a)({},O,{ref:x,className:g}));if(m){var N=Object(j.mapToCssModules)(!0===m?"table-responsive":"table-responsive-"+m,a);return l.a.createElement(p,{className:N},f)}return f};u.propTypes=b,u.defaultProps={tag:"table",responsiveTag:"div"},t.a=u},624:function(e,t,a){"use strict";var s=a(14),c=a(20),n=a(449),l=a(0),i=a.n(l),r=a(5),o=a.n(r),d=a(56),j=a.n(d),b=a(78),u=a(502);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var p={children:o.a.node,className:o.a.string,closeClassName:o.a.string,closeAriaLabel:o.a.string,cssModule:o.a.object,color:o.a.string,fade:o.a.bool,isOpen:o.a.bool,toggle:o.a.func,tag:b.tagPropType,transition:o.a.shape(u.a.propTypes),innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},x={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:h(h({},u.a.defaultProps),{},{unmountOnExit:!0})};function O(e){var t=e.className,a=e.closeClassName,n=e.closeAriaLabel,l=e.cssModule,r=e.tag,o=e.color,d=e.isOpen,m=e.toggle,p=e.children,x=e.transition,O=e.fade,g=e.innerRef,f=Object(c.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),N=Object(b.mapToCssModules)(j()(t,"alert","alert-"+o,{"alert-dismissible":m}),l),v=Object(b.mapToCssModules)(j()("close",a),l),y=h(h(h({},u.a.defaultProps),x),{},{baseClass:O?x.baseClass:"",timeout:O?x.timeout:0});return i.a.createElement(u.a,Object(s.a)({},f,y,{tag:r,className:N,in:d,role:"alert",innerRef:g}),m?i.a.createElement("button",{type:"button",className:v,"aria-label":n,onClick:m},i.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,p)}O.propTypes=p,O.defaultProps=x,t.a=O},749:function(e,t,a){},907:function(e,t,a){"use strict";var s=a(21),c=a(56),n=a.n(c),l=a(6);t.a=function(e){var t=e.data,a=e.tag,c=e.className,i=a||"ul";return Object(l.jsx)(i,{className:n()("timeline",Object(s.a)({},c,c)),children:t.map((function(e,a){var i,r=e.tag?e.tag:"li";return Object(l.jsxs)(r,{className:n()("timeline-item",Object(s.a)({},e.className,c)),children:[Object(l.jsx)("span",{className:n()("timeline-point",(i={},Object(s.a)(i,"timeline-point-".concat(e.color),e.color),Object(s.a)(i,"timeline-point-indicator",!e.icon),i)),children:e.icon?e.icon:null}),Object(l.jsxs)("div",{className:"timeline-event",children:[Object(l.jsxs)("div",{className:n()("d-flex justify-content-between flex-sm-row flex-column",{"mb-sm-0 mb-1":e.meta}),children:[Object(l.jsx)("h6",{children:e.title}),e.meta?Object(l.jsx)("span",{className:n()("timeline-event-time",Object(s.a)({},e.metaClassName,e.metaClassName)),children:e.meta}):null]}),Object(l.jsx)("p",{className:n()({"mb-0":a===t.length-1&&!e.customContent}),children:e.content}),e.customContent?e.customContent:null]})]},a)}))})}},934:function(e,t,a){"use strict";a.d(t,"c",(function(){return r})),a.d(t,"d",(function(){return o})),a.d(t,"e",(function(){return d})),a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return b}));var s=a(523),c=a.n(s),n=a(533),l=a(79),i=a.n(l),r=function(){return function(){var e=Object(n.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/api/users/list/all-data").then((function(e){t({type:"GET_ALL_DATA",data:e.data})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},o=function(e){return function(){var t=Object(n.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/api/users/list/data",e).then((function(t){a({type:"GET_DATA",data:t.data.users,totalPages:t.data.total,params:e})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(n.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/api/users/user",{id:e}).then((function(e){a({type:"GET_USER",selectedUser:e.data.user})})).catch((function(e){return console.log(e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(t,a){i.a.post("/apps/users/add-user",e).then((function(a){t({type:"ADD_USER",user:e})})).then((function(){t(o(a().users.params)),t(r())})).catch((function(e){return console.log(e)}))}},b=function(e){return function(t,a){i.a.delete("/apps/users/delete",{id:e}).then((function(e){t({type:"DELETE_USER"})})).then((function(){t(o(a().users.params)),t(r())}))}}},983:function(e,t,a){},992:function(e,t,a){}}]);
//# sourceMappingURL=79.9fa4efa0.chunk.js.map