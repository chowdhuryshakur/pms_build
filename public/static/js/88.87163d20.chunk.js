(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[88],{1054:function(e,a,s){},2287:function(e,a,s){"use strict";s.r(a);var t=s(0),c=s(462),r=s(1),n=s(15),o=s(56),l=s.n(o),i=s(918),d=s(1405),b=s(1341),j=s(1485),u=s(1067),m=s(472),p=s(468),O=s(460),g=s(6),h=function(e){var a=e.title,s=e.actions,c=e.children,o=e.collapseIcon,h=e.reloadIcon,f=e.removeIcon,x=e.endReload,v=Object(t.useState)(!1),N=Object(n.a)(v,2),y=N[0],T=N[1],M=Object(t.useState)(!0),C=Object(n.a)(M,2),P=C[0],w=C[1],R=Object(t.useState)(!0),z=Object(n.a)(R,2),k=z[0],E=z[1],A={collapse:o||d.a,remove:f||b.a,reload:h||j.a},F=function(e){switch(e){case"collapse":return w(!P);case"remove":return E(!1);case"reload":return T(!0)}},I=function(){T(!1)};Object(t.useEffect)((function(){y&&x(I)}));var G="collapse"===s||s.includes("collapse")?u.a:t.Fragment,S="reload"===s||s.includes("reload")?i.a:t.Fragment;return Object(g.jsx)(S,Object(r.a)(Object(r.a)({},"reload"===s||s.includes("reload")?{blocking:y}:{}),{},{children:Object(g.jsxs)(m.a,{className:l()("card-action",{"d-none":!k}),children:[Object(g.jsxs)(p.a,{children:[Object(g.jsx)(O.a,{tag:"h4",children:a}),Object(g.jsx)("div",{className:"action-icons",children:function(){if(Array.isArray(s))return s.map((function(e,a){var t=A[e];return Object(g.jsx)(t,{className:l()("cursor-pointer",{"mr-50":a<s.length-1}),size:15,onClick:function(){return F(e)}},a)}));var e=A[s];return Object(g.jsx)(e,{className:"cursor-pointer",size:15,onClick:function(){return F(s)}})}()})]}),Object(g.jsx)(G,Object(r.a)(Object(r.a)({},"collapse"===s||s.includes("collapse")?{isOpen:P}:{}),{},{children:c}))]})}))},f=s(465),x=s(467),v=s(459),N=s(623),y=s(484);a.default=function(){return Object(g.jsxs)(t.Fragment,{children:[Object(g.jsx)(c.a,{breadCrumbTitle:"Card Actions",breadCrumbParent:"Card",breadCrumbActive:"Card Actions"}),Object(g.jsx)(f.a,{children:Object(g.jsx)(x.a,{sm:"12",children:Object(g.jsx)(h,{title:"Card Actions",actions:["collapse","reload","remove"],endReload:function(e){setTimeout((function(){return e()}),2e3)},children:Object(g.jsx)(v.a,{className:"pt-0",children:Object(g.jsxs)(N.a,{responsive:!0,bordered:!0,children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"Action"}),Object(g.jsx)("th",{children:"Icon"}),Object(g.jsx)("th",{children:"Details"})]})}),Object(g.jsxs)("tbody",{children:[Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Collapse"}),Object(g.jsx)("td",{className:"text-center",children:Object(g.jsx)(d.a,{className:"collapse-icon",size:15})}),Object(g.jsx)("td",{children:" Collapse card content using collapse action."})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Refresh Content"}),Object(g.jsx)("td",{className:"text-center",children:Object(g.jsx)(j.a,{size:15})}),Object(g.jsx)("td",{children:"Refresh your card content using refresh action."})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Remove Card"}),Object(g.jsx)("td",{className:"text-center",children:Object(g.jsx)(b.a,{size:15})}),Object(g.jsx)("td",{children:" Remove card from page using remove card action"})]})]})]})})})})}),Object(g.jsxs)(f.a,{children:[Object(g.jsx)(x.a,{md:"6",sm:"12",children:Object(g.jsx)(h,{title:"Collapse",actions:"collapse",children:Object(g.jsxs)(v.a,{className:"pt-0",children:[Object(g.jsxs)(y.a,{children:["You can create a collapsible content by using our",Object(g.jsx)("code",{children:"CardAction"})," component and by passing prop",Object(g.jsx)("code",{children:"actions='collapse'"}),"."]}),Object(g.jsxs)(y.a,{className:"mb-0",children:["Click on ",Object(g.jsx)(d.a,{size:15})," to see card collapse in action"]})]})})}),Object(g.jsx)(x.a,{md:"6",sm:"12",children:Object(g.jsx)(h,{title:"Reload",actions:"reload",endReload:function(e){setTimeout((function(){return e()}),2e3)},children:Object(g.jsxs)(v.a,{className:"pt-0",children:[Object(g.jsxs)(y.a,{children:["To create a re-loadable card pass prop",Object(g.jsx)("code",{children:"actions='reload'"})," and pass prop ",Object(g.jsx)("code",{children:"endReload"}),"to end the loading."]}),Object(g.jsxs)(y.a,{className:"mb-0",children:["Click on ",Object(g.jsx)(j.a,{size:15})," to see card refresh in action"]})]})})}),Object(g.jsx)(x.a,{md:"6",sm:"12",children:Object(g.jsx)(h,{title:"Remove",actions:"remove",children:Object(g.jsxs)(v.a,{className:"pt-0",children:[Object(g.jsxs)(y.a,{children:["You can add refresh content action to card by adding class",Object(g.jsx)("code",{children:".card-reload"})," with your card tag, and add conditional spinner into card body to show when card is refreshing."]}),Object(g.jsxs)(y.a,{className:"mb-0",children:["Click on ",Object(g.jsx)(j.a,{size:15})," to see card refresh in action"]})]})})})]})]})}},459:function(e,a,s){"use strict";var t=s(14),c=s(20),r=s(0),n=s.n(r),o=s(5),l=s.n(o),i=s(56),d=s.n(i),b=s(78),j={tag:b.tagPropType,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},u=function(e){var a=e.className,s=e.cssModule,r=e.innerRef,o=e.tag,l=Object(c.a)(e,["className","cssModule","innerRef","tag"]),i=Object(b.mapToCssModules)(d()(a,"card-body"),s);return n.a.createElement(o,Object(t.a)({},l,{className:i,ref:r}))};u.propTypes=j,u.defaultProps={tag:"div"},a.a=u},460:function(e,a,s){"use strict";var t=s(14),c=s(20),r=s(0),n=s.n(r),o=s(5),l=s.n(o),i=s(56),d=s.n(i),b=s(78),j={tag:b.tagPropType,className:l.a.string,cssModule:l.a.object},u=function(e){var a=e.className,s=e.cssModule,r=e.tag,o=Object(c.a)(e,["className","cssModule","tag"]),l=Object(b.mapToCssModules)(d()(a,"card-title"),s);return n.a.createElement(r,Object(t.a)({},o,{className:l}))};u.propTypes=j,u.defaultProps={tag:"div"},a.a=u},462:function(e,a,s){"use strict";var t=s(451),c=s(486),r=s(487),n=s(6);a.a=function(e){var a=e.breadCrumbTitle,s=e.breadCrumbParent,o=e.breadCrumbParent2,l=e.breadCrumbParent3,i=e.breadCrumbActive;return Object(n.jsxs)("div",{className:"content-header row",children:[Object(n.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(n.jsx)("div",{className:"row breadcrumbs-top",children:Object(n.jsxs)("div",{className:"col-12",children:[a?Object(n.jsx)("h2",{className:"content-header-title float-left mb-0",children:a}):"",Object(n.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(n.jsxs)(c.a,{children:[Object(n.jsx)(r.a,{tag:"li",children:Object(n.jsx)(t.b,{to:"/",children:"Home"})}),Object(n.jsx)(r.a,{tag:"li",className:"text-primary",children:s}),o?Object(n.jsx)(r.a,{tag:"li",className:"text-primary",children:o}):"",l?Object(n.jsx)(r.a,{tag:"li",className:"text-primary",children:l}):"",Object(n.jsx)(r.a,{tag:"li",active:!0,children:i})]})})]})})}),Object(n.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(n.jsx)("div",{className:"form-group breadcrum-right dropdown"})})]})}},465:function(e,a,s){"use strict";var t=s(14),c=s(20),r=s(0),n=s.n(r),o=s(5),l=s.n(o),i=s(56),d=s.n(i),b=s(78),j=l.a.oneOfType([l.a.number,l.a.string]),u={tag:b.tagPropType,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:j,sm:j,md:j,lg:j,xl:j},m={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var a=e.className,s=e.cssModule,r=e.noGutters,o=e.tag,l=e.form,i=e.widths,j=Object(c.a)(e,["className","cssModule","noGutters","tag","form","widths"]),u=[];i.forEach((function(a,s){var t=e[a];if(delete j[a],t){var c=!s;u.push(c?"row-cols-"+t:"row-cols-"+a+"-"+t)}}));var m=Object(b.mapToCssModules)(d()(a,r?"no-gutters":null,l?"form-row":"row",u),s);return n.a.createElement(o,Object(t.a)({},j,{className:m}))};p.propTypes=u,p.defaultProps=m,a.a=p},467:function(e,a,s){"use strict";var t=s(14),c=s(20),r=s(0),n=s.n(r),o=s(5),l=s.n(o),i=s(56),d=s.n(i),b=s(78),j=l.a.oneOfType([l.a.number,l.a.string]),u=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:j,offset:j})]),m={tag:b.tagPropType,xs:u,sm:u,md:u,lg:u,xl:u,className:l.a.string,cssModule:l.a.object,widths:l.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},O=function(e,a,s){return!0===s||""===s?e?"col":"col-"+a:"auto"===s?e?"col-auto":"col-"+a+"-auto":e?"col-"+s:"col-"+a+"-"+s},g=function(e){var a=e.className,s=e.cssModule,r=e.widths,o=e.tag,l=Object(c.a)(e,["className","cssModule","widths","tag"]),i=[];r.forEach((function(a,t){var c=e[a];if(delete l[a],c||""===c){var r=!t;if(Object(b.isObject)(c)){var n,o=r?"-":"-"+a+"-",j=O(r,a,c.size);i.push(Object(b.mapToCssModules)(d()(((n={})[j]=c.size||""===c.size,n["order"+o+c.order]=c.order||0===c.order,n["offset"+o+c.offset]=c.offset||0===c.offset,n)),s))}else{var u=O(r,a,c);i.push(u)}}})),i.length||i.push("col");var j=Object(b.mapToCssModules)(d()(a,i),s);return n.a.createElement(o,Object(t.a)({},l,{className:j}))};g.propTypes=m,g.defaultProps=p,a.a=g},468:function(e,a,s){"use strict";var t=s(14),c=s(20),r=s(0),n=s.n(r),o=s(5),l=s.n(o),i=s(56),d=s.n(i),b=s(78),j={tag:b.tagPropType,className:l.a.string,cssModule:l.a.object},u=function(e){var a=e.className,s=e.cssModule,r=e.tag,o=Object(c.a)(e,["className","cssModule","tag"]),l=Object(b.mapToCssModules)(d()(a,"card-header"),s);return n.a.createElement(r,Object(t.a)({},o,{className:l}))};u.propTypes=j,u.defaultProps={tag:"div"},a.a=u},472:function(e,a,s){"use strict";var t=s(14),c=s(20),r=s(0),n=s.n(r),o=s(5),l=s.n(o),i=s(56),d=s.n(i),b=s(78),j={tag:b.tagPropType,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},u=function(e){var a=e.className,s=e.cssModule,r=e.color,o=e.body,l=e.inverse,i=e.outline,j=e.tag,u=e.innerRef,m=Object(c.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(b.mapToCssModules)(d()(a,"card",!!l&&"text-white",!!o&&"card-body",!!r&&(i?"border":"bg")+"-"+r),s);return n.a.createElement(j,Object(t.a)({},m,{className:p,ref:u}))};u.propTypes=j,u.defaultProps={tag:"div"},a.a=u},476:function(e,a,s){"use strict";var t=s(14),c=s(20),r=s(0),n=s.n(r),o=s(5),l=s.n(o),i=s(56),d=s.n(i),b=s(78),j={tag:b.tagPropType,type:l.a.string,size:l.a.string,color:l.a.string,className:l.a.string,cssModule:l.a.object,children:l.a.string},u=function(e){var a=e.className,s=e.cssModule,r=e.type,o=e.size,l=e.color,i=e.children,j=e.tag,u=Object(c.a)(e,["className","cssModule","type","size","color","children","tag"]),m=Object(b.mapToCssModules)(d()(a,!!o&&"spinner-"+r+"-"+o,"spinner-"+r,!!l&&"text-"+l),s);return n.a.createElement(j,Object(t.a)({role:"status"},u,{className:m}),i&&n.a.createElement("span",{className:Object(b.mapToCssModules)("sr-only",s)},i))};u.propTypes=j,u.defaultProps={tag:"div",type:"border",children:"Loading..."},a.a=u},484:function(e,a,s){"use strict";var t=s(14),c=s(20),r=s(0),n=s.n(r),o=s(5),l=s.n(o),i=s(56),d=s.n(i),b=s(78),j={tag:b.tagPropType,className:l.a.string,cssModule:l.a.object},u=function(e){var a=e.className,s=e.cssModule,r=e.tag,o=Object(c.a)(e,["className","cssModule","tag"]),l=Object(b.mapToCssModules)(d()(a,"card-text"),s);return n.a.createElement(r,Object(t.a)({},o,{className:l}))};u.propTypes=j,u.defaultProps={tag:"p"},a.a=u},486:function(e,a,s){"use strict";var t=s(14),c=s(20),r=s(0),n=s.n(r),o=s(5),l=s.n(o),i=s(56),d=s.n(i),b=s(78),j={tag:b.tagPropType,listTag:b.tagPropType,className:l.a.string,listClassName:l.a.string,cssModule:l.a.object,children:l.a.node,"aria-label":l.a.string},u=function(e){var a=e.className,s=e.listClassName,r=e.cssModule,o=e.children,l=e.tag,i=e.listTag,j=e["aria-label"],u=Object(c.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),m=Object(b.mapToCssModules)(d()(a),r),p=Object(b.mapToCssModules)(d()("breadcrumb",s),r);return n.a.createElement(l,Object(t.a)({},u,{className:m,"aria-label":j}),n.a.createElement(i,{className:p},o))};u.propTypes=j,u.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=u},487:function(e,a,s){"use strict";var t=s(14),c=s(20),r=s(0),n=s.n(r),o=s(5),l=s.n(o),i=s(56),d=s.n(i),b=s(78),j={tag:b.tagPropType,active:l.a.bool,className:l.a.string,cssModule:l.a.object},u=function(e){var a=e.className,s=e.cssModule,r=e.active,o=e.tag,l=Object(c.a)(e,["className","cssModule","active","tag"]),i=Object(b.mapToCssModules)(d()(a,!!r&&"active","breadcrumb-item"),s);return n.a.createElement(o,Object(t.a)({},l,{className:i,"aria-current":r?"page":void 0}))};u.propTypes=j,u.defaultProps={tag:"li"},a.a=u},623:function(e,a,s){"use strict";var t=s(14),c=s(20),r=s(0),n=s.n(r),o=s(5),l=s.n(o),i=s(56),d=s.n(i),b=s(78),j={className:l.a.string,cssModule:l.a.object,size:l.a.string,bordered:l.a.bool,borderless:l.a.bool,striped:l.a.bool,dark:l.a.bool,hover:l.a.bool,responsive:l.a.oneOfType([l.a.bool,l.a.string]),tag:b.tagPropType,responsiveTag:b.tagPropType,innerRef:l.a.oneOfType([l.a.func,l.a.string,l.a.object])},u=function(e){var a=e.className,s=e.cssModule,r=e.size,o=e.bordered,l=e.borderless,i=e.striped,j=e.dark,u=e.hover,m=e.responsive,p=e.tag,O=e.responsiveTag,g=e.innerRef,h=Object(c.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),f=Object(b.mapToCssModules)(d()(a,"table",!!r&&"table-"+r,!!o&&"table-bordered",!!l&&"table-borderless",!!i&&"table-striped",!!j&&"table-dark",!!u&&"table-hover"),s),x=n.a.createElement(p,Object(t.a)({},h,{ref:g,className:f}));if(m){var v=Object(b.mapToCssModules)(!0===m?"table-responsive":"table-responsive-"+m,s);return n.a.createElement(O,{className:v},x)}return x};u.propTypes=j,u.defaultProps={tag:"table",responsiveTag:"div"},a.a=u},918:function(e,a,s){"use strict";var t=s(1),c=s(21),r=s(0),n=s(56),o=s.n(n),l=s(476),i=(s(1054),s(6)),d=function(e){var a,s=e.children,n=e.blocking,l=e.loader,d=e.className,b=e.tag,j=e.overlayColor,u=b;return Object(i.jsxs)(u,{className:o()("ui-loader",(a={},Object(c.a)(a,d,d),Object(c.a)(a,"show",n),a)),children:[s,n?Object(i.jsxs)(r.Fragment,{children:[Object(i.jsx)("div",Object(t.a)({className:"overlay"},n&&j?{style:{backgroundColor:j}}:{})),Object(i.jsx)("div",{className:"loader",children:l})]}):null]})};a.a=d,d.defaultProps={tag:"div",blocking:!1,loader:Object(i.jsx)(l.a,{color:"primary"})}}}]);
//# sourceMappingURL=88.87163d20.chunk.js.map