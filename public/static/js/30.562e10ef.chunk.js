(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[30],{1948:function(e,t,a){"use strict";a.r(t);var n=a(21),r=a(10),i=a(0),o=a(1090),s=a(1159),l=a(471),c=a(479),u=a(476),p=a(473),d=a(474),f=a(472),g=(a(485),a(534)),b=a(494),m=(a(499),a(497)),v=a(511),h=a.n(v),y=a(512),C=a.n(y),x=a(528),k=a(6),j=C()(h.a);t.default=function(){var e=JSON.parse(localStorage.getItem("userData")).role,t=Object(g.g)(),a=Object(i.useState)(!0),v=Object(r.a)(a,2),y=v[0],C=v[1],O=Object(i.useState)([]),L=Object(r.a)(O,2),P=L[0],N=L[1],w=Object(i.useState)(!1),E=Object(r.a)(w,2),_=E[0];E[1];Object(i.useEffect)((function(){b.a.ContractorList().then((function(e){var t=e.data.payload;console.log(t),N(t),C(!1)})).catch((function(e){Object(m.a)(e),console.log(e),C(!1)}))}),[_]);var S=[{name:"Photo",maxWidth:"100px",selector:function(e){return Object(k.jsx)("img",{src:e.photo,alt:"photo",width:"50px"})}},{name:"Name",minWidth:"100px",sortable:!0,selector:"full_name"},{name:"Type",minWidth:"100px",sortable:!0,selector:function(e){return e.contractor_link.contractor_type.type_name}},{name:"Email",minWidth:"150px",selector:"email"},{name:"Mobile",minWidth:"100px",sortable:!0,selector:"mobile"},{name:"Address",minWidth:"300px",selector:"address"},{name:"Action",minWidth:"100px",selector:function(a){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("span",{title:"Edit",children:Object(k.jsx)(o.a,{size:15,color:"teal",style:{cursor:"pointer"},onClick:function(n){localStorage.setItem("EditContractorInfo",JSON.stringify(a)),t.push("/".concat(e,"/EditContractor"))}})}),"\xa0\xa0",Object(k.jsx)("span",{title:"Delete",children:Object(k.jsx)(s.a,{size:15,color:"red",style:{cursor:"pointer"},onClick:function(e){return t=a.user_id,r="Do you want to delete?",j.fire(Object(n.a)({title:r,text:"You won't be able to revert this",icon:"warning",allowOutsideClick:!1,allowEscapeKey:!1,showCancelButton:!0,confirmButtonText:"Yes",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"},showLoaderOnConfirm:!0,preConfirm:function(){return b.a.deleteContractor({contractor_id:t}).then((function(e){Object(m.b)(e),console.log(e),N(P.filter((function(e){return e.user_id!==t})))})).catch((function(e){console.log(e),Object(m.a)(e)}))},buttonsStyling:!1},"allowOutsideClick",(function(){return!h.a.isLoading()}))).then((function(e){e.isConfirmed}));var t,r}})})]})}}];return Object(k.jsxs)(l.a,{children:[Object(k.jsx)(c.a,{className:"border-bottom titleSelect",children:Object(k.jsx)(u.a,{tag:"h4",children:"Contractor list"})}),Object(k.jsx)(p.a,{children:Object(k.jsx)(d.a,{children:Object(k.jsx)(f.a,{md:"12",children:Object(k.jsx)(x.a,{column:S,TableData:P,TableDataLoading:y})})})})]})}},492:function(e,t,a){(function(n){var r;e.exports=(r=a(0),function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t,a){e.exports=a(2)()},function(e,t){e.exports=r},function(e,t,a){"use strict";var n=a(3);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,i,o){if(o!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return a.PropTypes=a,a}},function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,a,n){"use strict";n.r(a);var r=n(1),i=n.n(r),o=n(0),s=n.n(o);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c=function(e){var t=e.pageClassName,a=e.pageLinkClassName,n=e.page,r=e.selected,o=e.activeClassName,s=e.activeLinkClassName,c=e.getEventListener,u=e.pageSelectedHandler,p=e.href,d=e.extraAriaContext,f=e.ariaLabel||"Page "+n+(d?" "+d:""),g=null;return r&&(g="page",f=e.ariaLabel||"Page "+n+" is your current page",t=void 0!==t?t+" "+o:o,void 0!==a?void 0!==s&&(a=a+" "+s):a=s),i.a.createElement("li",{className:t},i.a.createElement("a",l({role:"button",className:a,href:p,tabIndex:"0","aria-label":f,"aria-current":g,onKeyPress:u},c(u)),n))};c.propTypes={pageSelectedHandler:s.a.func.isRequired,selected:s.a.bool.isRequired,pageClassName:s.a.string,pageLinkClassName:s.a.string,activeClassName:s.a.string,activeLinkClassName:s.a.string,extraAriaContext:s.a.string,href:s.a.string,ariaLabel:s.a.string,page:s.a.number.isRequired,getEventListener:s.a.func.isRequired};var u=c;function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var i=void 0;try{i=n[r]}catch(e){continue}e.register(i,r,"/home/adele/workspace/react-paginate/react_components/PageView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/PageView.js")}}();var d=function(e){var t=e.breakLabel,a=e.breakClassName,n=e.breakLinkClassName,r=e.breakHandler,o=e.getEventListener,s=a||"break";return i.a.createElement("li",{className:s},i.a.createElement("a",p({className:n,role:"button",tabIndex:"0",onKeyPress:r},o(r)),t))};d.propTypes={breakLabel:s.a.oneOfType([s.a.string,s.a.node]),breakClassName:s.a.string,breakLinkClassName:s.a.string,breakHandler:s.a.func.isRequired,getEventListener:s.a.func.isRequired};var f=d;function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function m(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=x(e);if(t){var r=x(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return y(this,a)}}function y(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?C(e):t}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var i=void 0;try{i=n[r]}catch(e){continue}e.register(i,r,"/home/adele/workspace/react-paginate/react_components/BreakView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/BreakView.js")}}();var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(o,e);var t,a,n,r=h(o);function o(e){var t,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),k(C(t=r.call(this,e)),"handlePreviousPage",(function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)})),k(C(t),"handleNextPage",(function(e){var a=t.state.selected,n=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<n-1&&t.handlePageSelected(a+1,e)})),k(C(t),"handlePageSelected",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))})),k(C(t),"getEventListener",(function(e){return k({},t.props.eventListener,e)})),k(C(t),"handleBreakClick",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var n=t.state.selected;t.handlePageSelected(n<e?t.getForwardJump():t.getBackwardJump(),a)})),k(C(t),"callCallback",(function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})})),k(C(t),"pagination",(function(){var e=[],a=t.props,n=a.pageRangeDisplayed,r=a.pageCount,o=a.marginPagesDisplayed,s=a.breakLabel,l=a.breakClassName,c=a.breakLinkClassName,u=t.state.selected;if(r<=n)for(var p=0;p<r;p++)e.push(t.getPageElement(p));else{var d,g,b,m=n/2,v=n-m;u>r-n/2?m=n-(v=r-u):u<n/2&&(v=n-(m=u));var h=function(e){return t.getPageElement(e)};for(d=0;d<r;d++)(g=d+1)<=o||g>r-o||d>=u-m&&d<=u+v?e.push(h(d)):s&&e[e.length-1]!==b&&(b=i.a.createElement(f,{key:d,breakLabel:s,breakClassName:l,breakLinkClassName:c,breakHandler:t.handleBreakClick.bind(null,d),getEventListener:t.getEventListener}),e.push(b))}return e})),a=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:a},t}return t=o,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,n=e.extraAriaContext;void 0===t||a||this.callCallback(t),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,n=e+t.pageRangeDisplayed;return n>=a?a-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,n=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<n)return a(e+1)}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,n=a.pageClassName,r=a.pageLinkClassName,o=a.activeClassName,s=a.activeLinkClassName,l=a.extraAriaContext;return i.a.createElement(u,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:n,pageLinkClassName:r,activeClassName:o,activeLinkClassName:s,extraAriaContext:l,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.pageCount,n=e.containerClassName,r=e.previousLabel,o=e.previousClassName,s=e.previousLinkClassName,l=e.previousAriaLabel,c=e.prevRel,u=e.nextLabel,p=e.nextClassName,d=e.nextLinkClassName,f=e.nextAriaLabel,g=e.nextRel,m=this.state.selected,v=o+(0===m?" ".concat(t):""),h=p+(m===a-1?" ".concat(t):""),y=0===m?"true":"false",C=m===a-1?"true":"false";return i.a.createElement("ul",{className:n},i.a.createElement("li",{className:v},i.a.createElement("a",b({className:s,href:this.hrefBuilder(m-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":y,"aria-label":l,rel:c},this.getEventListener(this.handlePreviousPage)),r)),this.pagination(),i.a.createElement("li",{className:h},i.a.createElement("a",b({className:d,href:this.hrefBuilder(m+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":C,"aria-label":f,rel:g},this.getEventListener(this.handleNextPage)),u)))}}])&&m(t.prototype,a),n&&m(t,n),o}(r.Component);k(j,"propTypes",{pageCount:s.a.number.isRequired,pageRangeDisplayed:s.a.number.isRequired,marginPagesDisplayed:s.a.number.isRequired,previousLabel:s.a.node,previousAriaLabel:s.a.string,prevRel:s.a.string,nextLabel:s.a.node,nextAriaLabel:s.a.string,nextRel:s.a.string,breakLabel:s.a.oneOfType([s.a.string,s.a.node]),hrefBuilder:s.a.func,onPageChange:s.a.func,initialPage:s.a.number,forcePage:s.a.number,disableInitialCallback:s.a.bool,containerClassName:s.a.string,pageClassName:s.a.string,pageLinkClassName:s.a.string,activeClassName:s.a.string,activeLinkClassName:s.a.string,previousClassName:s.a.string,nextClassName:s.a.string,previousLinkClassName:s.a.string,nextLinkClassName:s.a.string,disabledClassName:s.a.string,breakClassName:s.a.string,breakLinkClassName:s.a.string,extraAriaContext:s.a.string,ariaLabelBuilder:s.a.func,eventListener:s.a.string}),k(j,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,eventListener:"onClick"}),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var i=void 0;try{i=n[r]}catch(e){continue}e.register(i,r,"/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}(),a.default=j,function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var i=void 0;try{i=n[r]}catch(e){continue}e.register(i,r,"/home/adele/workspace/react-paginate/react_components/index.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/index.js")}}()}]))}).call(this,a(9))},520:function(e,t,a){"use strict";var n=a(15),r=a(20),i=a(0),o=a.n(i),s=a(5),l=a.n(s),c=a(58),u=a.n(c),p=a(80),d={tag:p.tagPropType,type:l.a.string,size:l.a.string,color:l.a.string,className:l.a.string,cssModule:l.a.object,children:l.a.string},f=function(e){var t=e.className,a=e.cssModule,i=e.type,s=e.size,l=e.color,c=e.children,d=e.tag,f=Object(r.a)(e,["className","cssModule","type","size","color","children","tag"]),g=Object(p.mapToCssModules)(u()(t,!!s&&"spinner-"+i+"-"+s,"spinner-"+i,!!l&&"text-"+l),a);return o.a.createElement(d,Object(n.a)({role:"status"},f,{className:g}),c&&o.a.createElement("span",{className:Object(p.mapToCssModules)("sr-only",a)},c))};f.propTypes=d,f.defaultProps={tag:"div",type:"border",children:"Loading..."},t.a=f},528:function(e,t,a){"use strict";var n=a(21),r=a(10),i=a(0),o=a(1060),s=a(520),l=a(492),c=a.n(l),u=a(515),p=a.n(u),d=a(6);t.a=function(e){var t=e.column,a=e.TableData,l=e.TableDataLoading,u=Object(i.useState)(0),f=Object(r.a)(u,2),g=f[0],b=f[1];return Object(d.jsx)(i.Fragment,{children:Object(d.jsx)(p.a,{noHeader:!0,pagination:!0,columns:t,paginationPerPage:15,className:"react-dataTable",sortIcon:Object(d.jsx)(o.a,{size:10}),paginationDefaultPage:g+1,paginationComponent:function(){var e;return Object(d.jsx)(c.a,(e={previousLabel:"",nextLabel:"",forcePage:g,onPageChange:function(e){return function(e){b(e.selected)}(e)},pageCount:a.length?a.length/15:1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link"},Object(n.a)(e,"breakClassName","page-item"),Object(n.a)(e,"breakLinkClassName","page-link"),Object(n.a)(e,"containerClassName","pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"),e))},data:a,progressPending:l,progressComponent:Object(d.jsx)(s.a,{color:"primary"}),responsive:!0})})}}}]);
//# sourceMappingURL=30.562e10ef.chunk.js.map