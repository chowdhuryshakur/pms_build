(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[257],{2130:function(e,t,a){"use strict";a.r(t);var n=a(21),c=a(120),i=a(15),o=a(0),r=a(651),s=a(487),l=a.n(s),u=a(493),d=a.n(u),p=a(1406),b=a(1405),m=(a(471),a(446)),j=a(472),g=a(477),O=a(466),x=a(481),f=a.n(x),h=a(482),v=a.n(h),C=a(567),N=a(6);v()(f.a);t.default=function(){var e=Object(r.g)(),t=Object(r.i)().receipt_id,a=Object(o.useState)(0),s=Object(i.a)(a,2),u=s[0],x=s[1],f=Object(o.useState)(!0),h=Object(i.a)(f,2),v=h[0],y=h[1],k=Object(o.useState)([]),_=Object(i.a)(k,2),S=_[0],w=_[1],L=Object(o.useState)({}),R=Object(i.a)(L,2),P=R[0],Y=R[1],M=Object(o.useState)([]),F=Object(i.a)(M,2),B=F[0],E=F[1],T=Object(o.useState)({subTotal:0,vat:0,total:0}),D=Object(i.a)(T,2),U=D[0],W=D[1];Object(o.useEffect)((function(){O.a.invoiceDetails({receipt_id:t}).then((function(e){console.log(e.data.payload),y(!1);var t=[],a=[].concat.apply([],e.data.payload.invoices.map((function(e,a){return t[a]=e.invoice_id,e.items})));console.log("productsArray ",a),Y(e.data.payload),E(t),w(Object(c.a)(a));var n=a.map((function(e){return e.total_exclude_vat})).reduce((function(e,t){return e+t})),i=a.map((function(e){return e.vat})).reduce((function(e,t){return e+t}));W({subTotal:Number(n).toFixed(2),vat:Number(i).toFixed(2),total:Number(n+i).toFixed(2)})})).catch((function(e){console.log(e)}))}),[]);var z=[{name:"Product name",selector:function(e,t){return e.productinfo?e.productinfo.productname:""},minWidth:"200px",sortable:!0},{name:"Product code",selector:function(e,t){return e.product_code},minWidth:"100px",sortable:!0},{name:"Quantity",selector:"quantity",minWidth:"100px",sortable:!0},{name:"Vat",selector:function(e){return"".concat(window.CURRENCY_SYMBOL," ").concat((+e.vat).toFixed(2))},minWidth:"100px",sortable:!0},{name:"Price",selector:function(e){return"".concat(window.CURRENCY_SYMBOL," ").concat(Object(C.c)((+e.total_exclude_vat).toFixed(2)))},minWidth:"100px",sortable:!0},{name:"Price + Vat",selector:function(e){return"".concat(window.CURRENCY_SYMBOL," ").concat(Object(C.c)((+(e.total_exclude_vat+e.vat)).toFixed(2)))},minWidth:"100px",sortable:!0}];return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(m.a.Ripple,{className:"ml-2",color:"primary",onClick:function(){return e.goBack()},children:[Object(N.jsx)(p.a,{size:10}),Object(N.jsx)("span",{className:"align-middle ml-50",children:"Back to Invoice List"})]}),Object(N.jsxs)(j.a,{className:"p-1 my-2",children:[Object(N.jsxs)("p",{children:["Receipt id: ",P.receipt_id]}),Object(N.jsxs)("p",{children:["Invoice id: ",B.toString()]}),Object(N.jsxs)("p",{children:["Invoice to : ",P.customer_business_name]}),Object(N.jsxs)("p",{children:["Store name: ",P.store_name]}),Object(N.jsxs)("p",{children:["Date : ",P.createdat?Object(C.b)(P.createdat):null," "]})]}),Object(N.jsxs)(j.a,{children:[Object(N.jsx)(d.a,{noHeader:!0,pagination:!0,columns:z,paginationPerPage:7,className:"react-dataTable",sortIcon:Object(N.jsx)(b.a,{size:10}),paginationDefaultPage:u+1,paginationComponent:function(){var e;return Object(N.jsx)(l.a,(e={previousLabel:"",nextLabel:"",forcePage:u,onPageChange:function(e){return function(e){x(e.selected)}(e)},pageCount:S.length/7||1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link"},Object(n.a)(e,"breakClassName","page-item"),Object(n.a)(e,"breakLinkClassName","page-link"),Object(n.a)(e,"containerClassName","pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"),e))},data:S,progressPending:v,progressComponent:Object(N.jsx)(g.a,{color:"primary"}),responsive:!0}),Object(N.jsx)("div",{className:"w-100 p-2 d-flex justify-content-end",children:Object(N.jsxs)("div",{style:{width:"150px",textAlign:"right"},children:[Object(N.jsxs)("p",{children:["Subtotal : ","".concat(window.CURRENCY_SYMBOL," ").concat(Object(C.c)((+U.subTotal).toFixed(2)))]}),Object(N.jsxs)("p",{children:["Vat : ","".concat(window.CURRENCY_SYMBOL," ").concat(Object(C.c)((+U.vat).toFixed()))]}),Object(N.jsx)("hr",{}),Object(N.jsxs)("p",{children:["Total : ","".concat(window.CURRENCY_SYMBOL," ").concat(Object(C.c)((+U.total).toFixed(2)))]})]})})]})]})}},477:function(e,t,a){"use strict";var n=a(14),c=a(20),i=a(0),o=a.n(i),r=a(5),s=a.n(r),l=a(56),u=a.n(l),d=a(78),p={tag:d.tagPropType,type:s.a.string,size:s.a.string,color:s.a.string,className:s.a.string,cssModule:s.a.object,children:s.a.string},b=function(e){var t=e.className,a=e.cssModule,i=e.type,r=e.size,s=e.color,l=e.children,p=e.tag,b=Object(c.a)(e,["className","cssModule","type","size","color","children","tag"]),m=Object(d.mapToCssModules)(u()(t,!!r&&"spinner-"+i+"-"+r,"spinner-"+i,!!s&&"text-"+s),a);return o.a.createElement(p,Object(n.a)({role:"status"},b,{className:m}),l&&o.a.createElement("span",{className:Object(d.mapToCssModules)("sr-only",a)},l))};b.propTypes=p,b.defaultProps={tag:"div",type:"border",children:"Loading..."},t.a=b},567:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o}));var n=function(e){return String(e).replace(/^(.{4})(.*)(.{3})$/,"$1 $2 $3")},c={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"},i=function(e){return new Date(e).toLocaleDateString(void 0,c)},o=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}}]);
//# sourceMappingURL=257.7ca74915.chunk.js.map