(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[30],{2168:function(e,a,t){"use strict";t.r(a);var n=t(21),r=t(10),s=t(0),o=t(1229),i=t(1298),l=t(472),c=t(477),u=t(475),p=t(473),d=t(476),f=t(474),g=(t(487),t(549)),b=t(490),m=(t(493),t(498)),v=t(510),h=t.n(v),y=t(511),C=t.n(y),j=t(518),x=t(6),O=C()(h.a);a.default=function(){var e=JSON.parse(localStorage.getItem("userData")).role,a=Object(g.g)(),t=Object(s.useState)(!0),v=Object(r.a)(t,2),y=v[0],C=v[1],k=Object(s.useState)([]),N=Object(r.a)(k,2),P=N[0],L=N[1],w=Object(s.useState)(!1),E=Object(r.a)(w,2),T=E[0];E[1];Object(s.useEffect)((function(){b.a.ContractorList().then((function(e){var a=e.data.payload;console.log(a),L(a),C(!1)})).catch((function(e){Object(m.a)(e),console.log(e),C(!1)}))}),[T]);var _=[{name:"Photo",maxWidth:"100px",selector:function(e){return Object(x.jsx)("img",{src:e.photo,alt:"photo",width:"50px"})}},{name:"Name",minWidth:"100px",sortable:!0,selector:"full_name"},{name:"Type",minWidth:"100px",sortable:!0,selector:function(e){return e.contractor_link.contractor_type.type_name}},{name:"Email",minWidth:"150px",selector:"email"},{name:"Mobile",minWidth:"100px",sortable:!0,selector:"mobile"},{name:"Address",minWidth:"300px",selector:"address"},{name:"Action",minWidth:"100px",selector:function(t){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("span",{title:"Edit",children:Object(x.jsx)(o.a,{size:15,color:"teal",style:{cursor:"pointer"},onClick:function(n){localStorage.setItem("EditContractorInfo",JSON.stringify(t)),a.push("/".concat(e,"/EditContractor"))}})}),"\xa0\xa0",Object(x.jsx)("span",{title:"Delete",children:Object(x.jsx)(i.a,{size:15,color:"red",style:{cursor:"pointer"},onClick:function(e){return a=t.user_id,r="Do you want to delete?",O.fire(Object(n.a)({title:r,text:"You won't be able to revert this",icon:"warning",allowOutsideClick:!1,allowEscapeKey:!1,showCancelButton:!0,confirmButtonText:"Yes",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"},showLoaderOnConfirm:!0,preConfirm:function(){return b.a.deleteContractor({contractor_id:a}).then((function(e){Object(m.b)(e),console.log(e),L(P.filter((function(e){return e.user_id!==a})))})).catch((function(e){console.log(e),Object(m.a)(e)}))},buttonsStyling:!1},"allowOutsideClick",(function(){return!h.a.isLoading()}))).then((function(e){e.isConfirmed}));var a,r}})})]})}}];return Object(x.jsxs)(l.a,{children:[Object(x.jsx)(c.a,{className:"border-bottom titleSelect",children:Object(x.jsx)(u.a,{tag:"h4",children:"Contractor list"})}),Object(x.jsx)(p.a,{children:Object(x.jsx)(d.a,{children:Object(x.jsx)(f.a,{md:"12",children:Object(x.jsx)(j.a,{column:_,TableData:P,TableDataLoading:y})})})})]})}},473:function(e,a,t){"use strict";var n=t(15),r=t(20),s=t(0),o=t.n(s),i=t(5),l=t.n(i),c=t(58),u=t.n(c),p=t(80),d={tag:p.tagPropType,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},f=function(e){var a=e.className,t=e.cssModule,s=e.innerRef,i=e.tag,l=Object(r.a)(e,["className","cssModule","innerRef","tag"]),c=Object(p.mapToCssModules)(u()(a,"card-body"),t);return o.a.createElement(i,Object(n.a)({},l,{className:c,ref:s}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},475:function(e,a,t){"use strict";var n=t(15),r=t(20),s=t(0),o=t.n(s),i=t(5),l=t.n(i),c=t(58),u=t.n(c),p=t(80),d={tag:p.tagPropType,className:l.a.string,cssModule:l.a.object},f=function(e){var a=e.className,t=e.cssModule,s=e.tag,i=Object(r.a)(e,["className","cssModule","tag"]),l=Object(p.mapToCssModules)(u()(a,"card-title"),t);return o.a.createElement(s,Object(n.a)({},i,{className:l}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},477:function(e,a,t){"use strict";var n=t(15),r=t(20),s=t(0),o=t.n(s),i=t(5),l=t.n(i),c=t(58),u=t.n(c),p=t(80),d={tag:p.tagPropType,className:l.a.string,cssModule:l.a.object},f=function(e){var a=e.className,t=e.cssModule,s=e.tag,i=Object(r.a)(e,["className","cssModule","tag"]),l=Object(p.mapToCssModules)(u()(a,"card-header"),t);return o.a.createElement(s,Object(n.a)({},i,{className:l}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},495:function(e,a,t){(function(n){var r;e.exports=(r=t(0),function(e){var a={};function t(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var r in e)t.d(n,r,function(a){return e[a]}.bind(null,r));return n},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=4)}([function(e,a,t){e.exports=t(2)()},function(e,a){e.exports=r},function(e,a,t){"use strict";var n=t(3);function r(){}function s(){}s.resetWarningCache=r,e.exports=function(){function e(e,a,t,r,s,o){if(o!==n){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function a(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:s,resetWarningCache:r};return t.PropTypes=t,t}},function(e,a,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),o=n(0),i=n.n(o);function l(){return(l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var c=function(e){var a=e.pageClassName,t=e.pageLinkClassName,n=e.page,r=e.selected,o=e.activeClassName,i=e.activeLinkClassName,c=e.getEventListener,u=e.pageSelectedHandler,p=e.href,d=e.extraAriaContext,f=e.ariaLabel||"Page "+n+(d?" "+d:""),g=null;return r&&(g="page",f=e.ariaLabel||"Page "+n+" is your current page",a=void 0!==a?a+" "+o:o,void 0!==t?void 0!==i&&(t=t+" "+i):t=i),s.a.createElement("li",{className:a},s.a.createElement("a",l({role:"button",className:t,href:p,tabIndex:"0","aria-label":f,"aria-current":g,onKeyPress:u},c(u)),n))};c.propTypes={pageSelectedHandler:i.a.func.isRequired,selected:i.a.bool.isRequired,pageClassName:i.a.string,pageLinkClassName:i.a.string,activeClassName:i.a.string,activeLinkClassName:i.a.string,extraAriaContext:i.a.string,href:i.a.string,ariaLabel:i.a.string,page:i.a.number.isRequired,getEventListener:i.a.func.isRequired};var u=c;function p(){return(p=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==t?t:a;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/PageView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/PageView.js")}}();var d=function(e){var a=e.breakLabel,t=e.breakClassName,n=e.breakLinkClassName,r=e.breakHandler,o=e.getEventListener,i=t||"break";return s.a.createElement("li",{className:i},s.a.createElement("a",p({className:n,role:"button",tabIndex:"0",onKeyPress:r},o(r)),a))};d.propTypes={breakLabel:i.a.oneOfType([i.a.string,i.a.node]),breakClassName:i.a.string,breakLinkClassName:i.a.string,breakHandler:i.a.func.isRequired,getEventListener:i.a.func.isRequired};var f=d;function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function m(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,a){return(v=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function h(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=j(e);if(a){var r=j(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return y(this,t)}}function y(e,a){return!a||"object"!==g(a)&&"function"!=typeof a?C(e):a}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==t?t:a;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/BreakView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/BreakView.js")}}();var O=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&v(e,a)}(o,e);var a,t,n,r=h(o);function o(e){var a,t;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,o),x(C(a=r.call(this,e)),"handlePreviousPage",(function(e){var t=a.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,t>0&&a.handlePageSelected(t-1,e)})),x(C(a),"handleNextPage",(function(e){var t=a.state.selected,n=a.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,t<n-1&&a.handlePageSelected(t+1,e)})),x(C(a),"handlePageSelected",(function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1,a.state.selected!==e&&(a.setState({selected:e}),a.callCallback(e))})),x(C(a),"getEventListener",(function(e){return x({},a.props.eventListener,e)})),x(C(a),"handleBreakClick",(function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1;var n=a.state.selected;a.handlePageSelected(n<e?a.getForwardJump():a.getBackwardJump(),t)})),x(C(a),"callCallback",(function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e})})),x(C(a),"pagination",(function(){var e=[],t=a.props,n=t.pageRangeDisplayed,r=t.pageCount,o=t.marginPagesDisplayed,i=t.breakLabel,l=t.breakClassName,c=t.breakLinkClassName,u=a.state.selected;if(r<=n)for(var p=0;p<r;p++)e.push(a.getPageElement(p));else{var d,g,b,m=n/2,v=n-m;u>r-n/2?m=n-(v=r-u):u<n/2&&(v=n-(m=u));var h=function(e){return a.getPageElement(e)};for(d=0;d<r;d++)(g=d+1)<=o||g>r-o||d>=u-m&&d<=u+v?e.push(h(d)):i&&e[e.length-1]!==b&&(b=s.a.createElement(f,{key:d,breakLabel:i,breakClassName:l,breakLinkClassName:c,breakHandler:a.handleBreakClick.bind(null,d),getEventListener:a.getEventListener}),e.push(b))}return e})),t=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,a.state={selected:t},a}return a=o,(t=[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,n=e.extraAriaContext;void 0===a||t||this.callCallback(a),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,n=e+a.pageRangeDisplayed;return n>=t?t-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var a=this.props,t=a.hrefBuilder,n=a.pageCount;if(t&&e!==this.state.selected&&e>=0&&e<n)return t(e+1)}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var a=this.state.selected,t=this.props,n=t.pageClassName,r=t.pageLinkClassName,o=t.activeClassName,i=t.activeLinkClassName,l=t.extraAriaContext;return s.a.createElement(u,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:a===e,pageClassName:n,pageLinkClassName:r,activeClassName:o,activeLinkClassName:i,extraAriaContext:l,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,a=e.disabledClassName,t=e.pageCount,n=e.containerClassName,r=e.previousLabel,o=e.previousClassName,i=e.previousLinkClassName,l=e.previousAriaLabel,c=e.prevRel,u=e.nextLabel,p=e.nextClassName,d=e.nextLinkClassName,f=e.nextAriaLabel,g=e.nextRel,m=this.state.selected,v=o+(0===m?" ".concat(a):""),h=p+(m===t-1?" ".concat(a):""),y=0===m?"true":"false",C=m===t-1?"true":"false";return s.a.createElement("ul",{className:n},s.a.createElement("li",{className:v},s.a.createElement("a",b({className:i,href:this.hrefBuilder(m-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":y,"aria-label":l,rel:c},this.getEventListener(this.handlePreviousPage)),r)),this.pagination(),s.a.createElement("li",{className:h},s.a.createElement("a",b({className:d,href:this.hrefBuilder(m+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":C,"aria-label":f,rel:g},this.getEventListener(this.handleNextPage)),u)))}}])&&m(a.prototype,t),n&&m(a,n),o}(r.Component);x(O,"propTypes",{pageCount:i.a.number.isRequired,pageRangeDisplayed:i.a.number.isRequired,marginPagesDisplayed:i.a.number.isRequired,previousLabel:i.a.node,previousAriaLabel:i.a.string,prevRel:i.a.string,nextLabel:i.a.node,nextAriaLabel:i.a.string,nextRel:i.a.string,breakLabel:i.a.oneOfType([i.a.string,i.a.node]),hrefBuilder:i.a.func,onPageChange:i.a.func,initialPage:i.a.number,forcePage:i.a.number,disableInitialCallback:i.a.bool,containerClassName:i.a.string,pageClassName:i.a.string,pageLinkClassName:i.a.string,activeClassName:i.a.string,activeLinkClassName:i.a.string,previousClassName:i.a.string,nextClassName:i.a.string,previousLinkClassName:i.a.string,nextLinkClassName:i.a.string,disabledClassName:i.a.string,breakClassName:i.a.string,breakLinkClassName:i.a.string,extraAriaContext:i.a.string,ariaLabelBuilder:i.a.func,eventListener:i.a.string}),x(O,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,eventListener:"onClick"}),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==t?t:a;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}(),t.default=O,function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==t?t:a;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/index.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/index.js")}}()}]))}).call(this,t(9))},518:function(e,a,t){"use strict";var n=t(21),r=t(10),s=t(0),o=t(1199),i=t(521),l=t(495),c=t.n(l),u=t(515),p=t.n(u),d=t(6);a.a=function(e){var a=e.column,t=e.TableData,l=e.TableDataLoading,u=Object(s.useState)(0),f=Object(r.a)(u,2),g=f[0],b=f[1];return Object(d.jsx)(s.Fragment,{children:Object(d.jsx)(p.a,{noHeader:!0,pagination:!0,columns:a,paginationPerPage:15,className:"react-dataTable",sortIcon:Object(d.jsx)(o.a,{size:10}),paginationDefaultPage:g+1,paginationComponent:function(){var e;return Object(d.jsx)(c.a,(e={previousLabel:"",nextLabel:"",forcePage:g,onPageChange:function(e){return function(e){b(e.selected)}(e)},pageCount:t.length?t.length/15:1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link"},Object(n.a)(e,"breakClassName","page-item"),Object(n.a)(e,"breakLinkClassName","page-link"),Object(n.a)(e,"containerClassName","pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"),e))},data:t,progressPending:l,progressComponent:Object(d.jsx)(i.a,{color:"primary"}),responsive:!0})})}},521:function(e,a,t){"use strict";var n=t(15),r=t(20),s=t(0),o=t.n(s),i=t(5),l=t.n(i),c=t(58),u=t.n(c),p=t(80),d={tag:p.tagPropType,type:l.a.string,size:l.a.string,color:l.a.string,className:l.a.string,cssModule:l.a.object,children:l.a.string},f=function(e){var a=e.className,t=e.cssModule,s=e.type,i=e.size,l=e.color,c=e.children,d=e.tag,f=Object(r.a)(e,["className","cssModule","type","size","color","children","tag"]),g=Object(p.mapToCssModules)(u()(a,!!i&&"spinner-"+s+"-"+i,"spinner-"+s,!!l&&"text-"+l),t);return o.a.createElement(d,Object(n.a)({role:"status"},f,{className:g}),c&&o.a.createElement("span",{className:Object(p.mapToCssModules)("sr-only",t)},c))};f.propTypes=d,f.defaultProps={tag:"div",type:"border",children:"Loading..."},a.a=f}}]);
//# sourceMappingURL=30.d80f626f.chunk.js.map