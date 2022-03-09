(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[25,163],{1341:function(e,t,a){"use strict";a.r(t);a(21),a(1);var n=a(10),o=a(0),r=a(1079),c=a(1083),s=a(1084),i=a(1050),l=a(463),d=a(471),u=a(476),p=a(475),m=a(472),f=a(474),b=a(473),g=a(518),j=a(491),h=a(583),y=a(515),O=a.n(y),v=a(500),x=a(486),N=(a(497),a(542)),T=a(6);t.default=function(){var e=JSON.parse(localStorage.getItem("userData")).role,t=Object(N.g)(),a=Object(o.useState)(!0),y=Object(n.a)(a,2),E=y[0],M=y[1],C=Object(o.useState)([]),w=Object(n.a)(C,2),P=w[0],_=w[1],S=Object(o.useState)(1),A=Object(n.a)(S,2),I=A[0],D=A[1],k=Object(o.useState)(5),L=Object(n.a)(k,2),R=L[0],z=(L[1],Object(o.useState)(null)),W=Object(n.a)(z,2),F=W[0],$=W[1],Q=[{value:"",label:"All Complains"},{value:3,label:"Pending"},{value:12,label:"Need Approval"},{value:7,label:"Accepted"},{value:10,label:"Quotation Pending"},{value:11,label:"Quotation Approved"},{value:13,label:"Finished"},{value:2,label:"Completed"},{value:4,label:"Cancelled"}],U={3:"light-danger",12:"warning",7:"light-success",10:"light-warning",11:"light-info",13:"info",2:"success",4:"danger"},B=function(e,t,a){j.a.getRenterComplainList({status_id:e,page:t,limit:a}).then((function(e){console.log("getRenterComplainList",e.data.payload),_(e.data.payload),M(!1)})).catch((function(e){console.log("getRenterComplainList",e),M(!1)}))};Object(o.useEffect)((function(){B(F,I,R)}),[]);var G=[{name:"ID",maxWidth:"50px",sortable:!0,selector:"complain_id"},{name:"Complain Date",minWidth:"150px",sortable:!0,selector:function(e){return Object(h.a)(e.created_at)}},{name:"Complain Type",minWidth:"150px",sortable:!0,selector:function(e){return e.complainItems[0].complainType?e.complainItems[0].complainType.complain_type_name:""}},{name:"Priority",minWidth:"150px",sortable:!0,selector:function(e){return e.complainItems[0].priority.priority_name}},{name:"Status",minWidth:"150px",sortable:!0,selector:function(e){return Object(T.jsx)(i.a,{pill:!0,color:U[e.complainItems[0].statusType.id],className:"px-1",children:e.complainItems[0].statusType.status_name})}},{name:"Details",minWidth:"100px",sortable:!0,selector:function(a){return Object(T.jsx)(l.a.Ripple,{color:"primary",type:"button",size:"sm",onClick:function(n){return t.push("/".concat(e,"/Complain/").concat(a.complain_id,"-").concat(a.complainItems[0].items_id))},children:"View"})}}],J=function(e){M(!0),"prev"===e?(D(I-1),B(F,I-1,R)):(D(I+1),B(F,I+1,R))};return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)(d.a,{children:[Object(T.jsxs)(u.a,{className:"border-bottom titleSelect",children:[Object(T.jsx)(p.a,{tag:"h4",children:"Complains"}),Object(T.jsx)(p.a,{children:Object(T.jsx)("small",{children:Object(T.jsx)(v.a,{theme:x.g,className:"react-select",classNamePrefix:"select",name:"branch_id",maxMenuHeight:150,onChange:function(e){M(!0),D(1),$(e.value),B(e.value,1,R)},options:Q,defaultValue:Q[0],isClearable:!1})})})]}),Object(T.jsx)(m.a,{children:Object(T.jsx)(f.a,{children:Object(T.jsxs)(b.a,{sm:"12",children:[Object(T.jsx)(O.a,{noHeader:!0,highlightOnHover:!0,data:P,columns:G,className:"react-dataTable",progressPending:E,sortIcon:Object(T.jsx)(r.a,{size:10}),progressComponent:Object(T.jsx)(g.a,{color:"primary"}),responsive:!0}),Object(T.jsxs)("div",{className:"text-right",children:[Object(T.jsx)(l.a.Ripple,{size:"sm",disabled:1===I,className:"mt-1",color:"secondary",onClick:function(e){return J("prev")},children:Object(T.jsx)(c.a,{color:"white",size:15})}),"\xa0\xa0\xa0\xa0",Object(T.jsx)(l.a.Ripple,{size:"sm",disabled:!P.length,className:"mt-1",color:"secondary",onClick:function(e){return J("next")},children:Object(T.jsx)(s.a,{color:"white",size:15})})]})]})})})]})})}},1950:function(e,t,a){"use strict";a.r(t);var n=a(122),o=a(10),r=a(0),c=a(474),s=a(473),i=a(471),l=a(476),d=a(475),u=a(472),p=a(1341),m=a(491),f=a(988),b=a(989),g=a(990),j=a(991),h=a(992),y=a(993),O=a.n(y),v=a(994),x=a.n(v),N=a(542),T=a(6);t.default=function(){var e=Object(N.g)(),t=JSON.parse(localStorage.getItem("userData")).role,a=[{count:0,id:2,name:"Completed"},{count:0,id:3,name:"Pending"},{count:0,id:4,name:"Cancelled"},{count:0,id:7,name:"Accepted"},{count:0,id:10,name:"Quotation Pending"},{count:0,id:11,name:"Quotation Approved"},{count:0,id:12,name:"Need Approval"},{count:0,id:13,name:"Finished"}],y=[{count:0,id:3,name:"Landlord",badge:j.a},{count:0,id:4,name:"Tenant",badge:h.a},{count:0,id:5,name:"Contractor",badge:g.a},{count:0,id:6,name:"Branches",badge:b.a}],v={3:j.a,4:h.a,5:g.a,6:b.a},E={3:"/".concat(t,"/LandlordList"),4:"/".concat(t,"/TenantList"),5:"/".concat(t,"/ContractorList"),6:"/".concat(t,"/MyBranches")},M=Object(r.useState)([{count:0,name:"Contractor"},{count:0,name:"Landlord"},{count:0,name:"Tenant"}]),C=Object(o.a)(M,2),w=C[0],P=C[1],_=Object(r.useState)([{count:0,id:3,name:"Pending"},{count:0,id:12,name:"Need Approval"},{count:0,id:7,name:"Accepted"},{count:0,id:10,name:"Quotation Pending"},{count:0,id:11,name:"Quotation Approved"},{count:0,id:13,name:"Finished"},{count:0,id:2,name:"Completed"},{count:0,id:4,name:"Cancelled"}]),S=Object(o.a)(_,2),A=S[0],I=S[1],D=Object(r.useState)([{count:0,name:"Total"},{count:0,name:"Occupied"},{count:0,name:"Unoccupied"}]),k=Object(o.a)(D,2),L=k[0],R=k[1];return Object(r.useEffect)((function(){m.a.dashboardSummary().then((function(e){console.log("dashboardSummary",e.data.payload);var t=e.data.payload,o=t.complain_counter,r=t.property,c=t.user_counter,s=o?a.filter((function(e){return!1===o.some((function(t){return t.status_id===e.id}))})):[],i=c?y.filter((function(e){return!1===c.some((function(t){return t.user_type===e.id}))})):[];console.log(i),P(c?[].concat(Object(n.a)(c.map((function(e){return{link:E[e.user_type],badge:v[e.user_type],count:e.number_of_user,name:e.user_type_name}}))),Object(n.a)(i)):w),I(o?[].concat(Object(n.a)(o.map((function(e){return{count:e.number_of_complain,name:e.status_name}}))),Object(n.a)(s)):A),R(r?[{count:r.occupied_property.length+r.unoccupied_property.length,name:"Total"},{count:r.occupied_property.length,name:"Occupied"},{count:r.unoccupied_property.length,name:"Unoccupied"}]:properties)})).catch((function(e){console.log("dashboardSummary",e),Error(e)}))}),[]),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)(c.a,{className:"match-height",children:[Object(T.jsx)(s.a,{md:"4",children:Object(T.jsx)(c.a,{children:L.map((function(a,n){return Object(T.jsx)(s.a,{md:"".concat(0===n?"12":"6"),children:Object(T.jsxs)(i.a,{onClick:function(a){return e.push("/".concat(t,"/MyProperty"))},className:"cursor-pointer",children:[0===n&&Object(T.jsx)(l.a,{className:"text-primary pl-1 m-0",children:Object(T.jsxs)(d.a,{tag:"h4",className:"text-primary p-0 m-0",children:[Object(T.jsx)("img",{src:f.a,alt:"logo",className:"img-fluid"}),"\xa0\xa0Property"]})}),Object(T.jsxs)("div",{className:"text-center ".concat(0===n?"pt-0":"pt-1"),children:[Object(T.jsx)("h3",{children:Object(T.jsx)("b",{children:a.count})}),Object(T.jsx)("p",{className:"text-muted",children:a.name})]})]},n)},n)}))})}),Object(T.jsx)(s.a,{md:"8",children:Object(T.jsx)(i.a,{children:Object(T.jsx)(c.a,{children:w.map((function(a,n){return Object(T.jsx)(s.a,{md:"6",className:"px-5 py-3 cursor-pointer",onClick:function(t){return e.push(a.link)},children:"EstateManager"===t&&3===n?"":Object(T.jsxs)(O.a,{children:[Object(T.jsx)("img",{src:a.badge,className:"img-fluid mr-1"}),Object(T.jsxs)(O.a,{className:"my-auto",body:!0,children:[Object(T.jsx)("h4",{className:"font-weight-bolder mb-0",children:a.count}),Object(T.jsx)(x.a,{className:"font-small-2 mb-0",children:a.name})]})]})},n)}))})})})]}),"Estatemanager"!==t&&Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)(i.a,{children:[Object(T.jsx)(l.a,{children:Object(T.jsx)(d.a,{tag:"h4",children:"Complains Overview"})}),Object(T.jsx)(u.a,{className:"d-flex flex-row justify-content-around flex-wrap",children:A.map((function(e,t){return Object(T.jsxs)("div",{className:"text-center pt-1 mx-1",children:[Object(T.jsx)("h3",{children:Object(T.jsx)("b",{children:e.count})}),Object(T.jsx)("p",{className:"text-muted",children:e.name})]},t)}))})]}),Object(T.jsx)(p.default,{})]})]})}},472:function(e,t,a){"use strict";var n=a(15),o=a(20),r=a(0),c=a.n(r),s=a(5),i=a.n(s),l=a(58),d=a.n(l),u=a(80),p={tag:u.tagPropType,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},m=function(e){var t=e.className,a=e.cssModule,r=e.innerRef,s=e.tag,i=Object(o.a)(e,["className","cssModule","innerRef","tag"]),l=Object(u.mapToCssModules)(d()(t,"card-body"),a);return c.a.createElement(s,Object(n.a)({},i,{className:l,ref:r}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},473:function(e,t,a){"use strict";var n=a(15),o=a(20),r=a(0),c=a.n(r),s=a(5),i=a.n(s),l=a(58),d=a.n(l),u=a(80),p=i.a.oneOfType([i.a.number,i.a.string]),m=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:p,offset:p})]),f={tag:u.tagPropType,xs:m,sm:m,md:m,lg:m,xl:m,className:i.a.string,cssModule:i.a.object,widths:i.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},j=function(e){var t=e.className,a=e.cssModule,r=e.widths,s=e.tag,i=Object(o.a)(e,["className","cssModule","widths","tag"]),l=[];r.forEach((function(t,n){var o=e[t];if(delete i[t],o||""===o){var r=!n;if(Object(u.isObject)(o)){var c,s=r?"-":"-"+t+"-",p=g(r,t,o.size);l.push(Object(u.mapToCssModules)(d()(((c={})[p]=o.size||""===o.size,c["order"+s+o.order]=o.order||0===o.order,c["offset"+s+o.offset]=o.offset||0===o.offset,c)),a))}else{var m=g(r,t,o);l.push(m)}}})),l.length||l.push("col");var p=Object(u.mapToCssModules)(d()(t,l),a);return c.a.createElement(s,Object(n.a)({},i,{className:p}))};j.propTypes=f,j.defaultProps=b,t.a=j},475:function(e,t,a){"use strict";var n=a(15),o=a(20),r=a(0),c=a.n(r),s=a(5),i=a.n(s),l=a(58),d=a.n(l),u=a(80),p={tag:u.tagPropType,className:i.a.string,cssModule:i.a.object},m=function(e){var t=e.className,a=e.cssModule,r=e.tag,s=Object(o.a)(e,["className","cssModule","tag"]),i=Object(u.mapToCssModules)(d()(t,"card-title"),a);return c.a.createElement(r,Object(n.a)({},s,{className:i}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},476:function(e,t,a){"use strict";var n=a(15),o=a(20),r=a(0),c=a.n(r),s=a(5),i=a.n(s),l=a(58),d=a.n(l),u=a(80),p={tag:u.tagPropType,className:i.a.string,cssModule:i.a.object},m=function(e){var t=e.className,a=e.cssModule,r=e.tag,s=Object(o.a)(e,["className","cssModule","tag"]),i=Object(u.mapToCssModules)(d()(t,"card-header"),a);return c.a.createElement(r,Object(n.a)({},s,{className:i}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},518:function(e,t,a){"use strict";var n=a(15),o=a(20),r=a(0),c=a.n(r),s=a(5),i=a.n(s),l=a(58),d=a.n(l),u=a(80),p={tag:u.tagPropType,type:i.a.string,size:i.a.string,color:i.a.string,className:i.a.string,cssModule:i.a.object,children:i.a.string},m=function(e){var t=e.className,a=e.cssModule,r=e.type,s=e.size,i=e.color,l=e.children,p=e.tag,m=Object(o.a)(e,["className","cssModule","type","size","color","children","tag"]),f=Object(u.mapToCssModules)(d()(t,!!s&&"spinner-"+r+"-"+s,"spinner-"+r,!!i&&"text-"+i),a);return c.a.createElement(p,Object(n.a)({role:"status"},m,{className:f}),l&&c.a.createElement("span",{className:Object(u.mapToCssModules)("sr-only",a)},l))};m.propTypes=p,m.defaultProps={tag:"div",type:"border",children:"Loading..."},t.a=m},583:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n={year:"numeric",month:"long",day:"numeric"},o=function(e){var t=new Date(e).getTime(),a=Math.floor(t/6e4%60),o=Math.floor(t/36e5%24);o=o<10?"0".concat(o):o,a=a<10?"0".concat(a):a;var r=new Date(e).toLocaleDateString(void 0,n),c="".concat(o," : ").concat(a);return"".concat(r," , ").concat(c)}},644:function(e,t,a){"use strict";var n=a(591);t.__esModule=!0,t.getScrollbarWidth=c,t.setScrollbarWidth=s,t.isBodyOverflowing=i,t.getOriginalBodyPadding=function(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)},t.conditionallyUpdateScrollbar=function(){var e=c(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],a=t?parseInt(t.style.paddingRight||0,10):0;i()&&s(a+e)},t.setGlobalCssModule=function(e){o=e},t.mapToCssModules=function(e,t){void 0===e&&(e="");void 0===t&&(t=o);return t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e},t.omit=function(e,t){var a={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(a[n]=e[n])})),a},t.pick=function(e,t){var a,n=Array.isArray(t)?t:[t],o=n.length,r={};for(;o>0;)a=n[o-=1],r[a]=e[a];return r},t.warnOnce=d,t.deprecated=function(e,t){return function(a,n,o){null!==a[n]&&"undefined"!==typeof a[n]&&d('"'+n+'" property of "'+o+'" has been deprecated.\n'+t);for(var r=arguments.length,c=new Array(r>3?r-3:0),s=3;s<r;s++)c[s-3]=arguments[s];return e.apply(void 0,[a,n,o].concat(c))}},t.DOMElement=p,t.isReactRefObj=g,t.toNumber=function(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===j(e))return NaN;if(h(e)){var a="function"===typeof e.valueOf?e.valueOf():e;e=h(a)?""+a:a}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var n=/^0b[01]+$/i.test(e);return n||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),n?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e},t.isObject=h,t.isFunction=y,t.findDOMElements=O,t.isArrayOrNodeList=v,t.getTarget=function(e,t){var a=O(e);return t?v(a)?a:null===a?[]:[a]:v(a)?a[0]:a},t.addMultipleEventListeners=function(e,t,a,n){var o=e;v(o)||(o=[o]);var r=a;"string"===typeof r&&(r=r.split(/\s+/));if(!v(o)||"function"!==typeof t||!Array.isArray(r))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(r,(function(e){Array.prototype.forEach.call(o,(function(a){a.addEventListener(e,t,n)}))})),function(){Array.prototype.forEach.call(r,(function(e){Array.prototype.forEach.call(o,(function(a){a.removeEventListener(e,t,n)}))}))}},t.focusableElements=t.defaultToggleEvents=t.canUseDOM=t.PopperPlacements=t.keyCodes=t.TransitionStatuses=t.TransitionPropTypeKeys=t.TransitionTimeouts=t.tagPropType=t.targetPropType=void 0;var o,r=n(a(5));function c(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function s(e){document.body.style.paddingRight=e>0?e+"px":null}function i(){return document.body.clientWidth<window.innerWidth}var l={};function d(e){l[e]||("undefined"!==typeof console&&console.error(e),l[e]=!0)}var u="object"===typeof window&&window.Element||function(){};function p(e,t,a){if(!(e[t]instanceof u))return new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Expected prop to be an instance of Element. Validation failed.")}var m=r.default.oneOfType([r.default.string,r.default.func,p,r.default.shape({current:r.default.any})]);t.targetPropType=m;var f=r.default.oneOfType([r.default.func,r.default.string,r.default.shape({$$typeof:r.default.symbol,render:r.default.func}),r.default.arrayOf(r.default.oneOfType([r.default.func,r.default.string,r.default.shape({$$typeof:r.default.symbol,render:r.default.func})]))]);t.tagPropType=f;t.TransitionTimeouts={Fade:150,Collapse:350,Modal:300,Carousel:600};t.TransitionPropTypeKeys=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"];t.TransitionStatuses={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"};t.keyCodes={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80};t.PopperPlacements=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"];var b=!("undefined"===typeof window||!window.document||!window.document.createElement);function g(e){return!(!e||"object"!==typeof e)&&"current"in e}function j(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function h(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function y(e){if(!h(e))return!1;var t=j(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function O(e){if(g(e))return e.current;if(y(e))return e();if("string"===typeof e&&b){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function v(e){return null!==e&&(Array.isArray(e)||b&&"number"===typeof e.length)}t.canUseDOM=b;t.defaultToggleEvents=["touchstart","click"];t.focusableElements=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},988:function(e,t,a){"use strict";t.a=a.p+"static/media/property.341a7835.svg"},989:function(e,t,a){"use strict";t.a=a.p+"static/media/branch.26ca2046.svg"},990:function(e,t,a){"use strict";t.a=a.p+"static/media/contractor.b9648f1b.svg"},991:function(e,t,a){"use strict";t.a=a.p+"static/media/landlord.829d50e1.svg"},992:function(e,t,a){"use strict";t.a=a.p+"static/media/tenant.0a640657.svg"},993:function(e,t,a){"use strict";var n=a(591);t.__esModule=!0,t.default=void 0;var o=n(a(598)),r=n(a(634)),c=n(a(0)),s=n(a(5)),i=n(a(58)),l=a(644),d={body:s.default.bool,bottom:s.default.bool,children:s.default.node,className:s.default.string,cssModule:s.default.object,heading:s.default.bool,left:s.default.bool,list:s.default.bool,middle:s.default.bool,object:s.default.bool,right:s.default.bool,tag:l.tagPropType,top:s.default.bool},u=function(e){var t,a=e.body,n=e.bottom,s=e.className,d=e.cssModule,u=e.heading,p=e.left,m=e.list,f=e.middle,b=e.object,g=e.right,j=e.tag,h=e.top,y=(0,r.default)(e,["body","bottom","className","cssModule","heading","left","list","middle","object","right","tag","top"]);t=u?"h4":y.href?"a":y.src||b?"img":m?"ul":"div";var O=j||t,v=(0,l.mapToCssModules)((0,i.default)(s,{"media-body":a,"media-heading":u,"media-left":p,"media-right":g,"media-top":h,"media-bottom":n,"media-middle":f,"media-object":b,"media-list":m,media:!a&&!u&&!p&&!g&&!h&&!n&&!f&&!b&&!m}),d);return c.default.createElement(O,(0,o.default)({},y,{className:v}))};u.propTypes=d;var p=u;t.default=p},994:function(e,t,a){"use strict";var n=a(591);t.__esModule=!0,t.default=void 0;var o=n(a(598)),r=n(a(634)),c=n(a(0)),s=n(a(5)),i=n(a(58)),l=a(644),d={tag:l.tagPropType,className:s.default.string,cssModule:s.default.object},u=function(e){var t=e.className,a=e.cssModule,n=e.tag,s=(0,r.default)(e,["className","cssModule","tag"]),d=(0,l.mapToCssModules)((0,i.default)(t,"card-text"),a);return c.default.createElement(n,(0,o.default)({},s,{className:d}))};u.propTypes=d,u.defaultProps={tag:"p"};var p=u;t.default=p}}]);
//# sourceMappingURL=25.a8c50084.chunk.js.map