(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[75],{1909:function(e,a,t){"use strict";t.r(a);var s=t(121),r=t(21),c=t(10),n=t(0),o=t(81),l=t.n(o),i=t(464),u=t(58),d=t.n(u),b=t(534),m=t(466),j=t(467),p=t(940),g=t(472),f=t(471),O=t(473),h=t(605),v=t(606),x=t(474),N=(t(941),t(6));a.default=function(){var e=Object(n.useState)(null),a=Object(c.a)(e,2),t=a[0],o=a[1],u=Object(n.useState)([]),y=Object(c.a)(u,2),T=y[0],M=y[1],C=Object(n.useState)(""),P=Object(c.a)(C,2),w=P[0],E=P[1];Object(n.useEffect)((function(){l.a.get("/faq/data/category").then((function(e){return o(e.data)}))}),[]);var z=Object(b.i)(),k=function(e){var a=e.item,t=i[a.icon];return Object(N.jsx)(g.a,{className:"kb-search-content",md:"4",sm:"6",children:Object(N.jsx)(f.a,{children:Object(N.jsxs)(O.a,{children:[Object(N.jsxs)("h6",{className:"kb-title",children:[Object(N.jsx)(t,{size:20,className:d()("mr-50",Object(r.a)({},a.iconColor,a.iconColor))}),Object(N.jsxs)("span",{children:[a.title," ","(".concat(a.questions.length,")")]})]}),Object(N.jsx)(h.a,{className:"list-group-circle mt-2",children:a.questions.map((function(e){return Object(N.jsx)(v.a,{tag:m.b,to:"/pages/knowledge-base/".concat(z.category,"/").concat(e.slug),className:"text-body",children:e.question},e.id)}))})]})})})};return Object(N.jsxs)(n.Fragment,{children:[Object(N.jsx)(j.a,{breadCrumbTitle:"Knowledge Base",breadCrumbParent:"Pages",breadCrumbParent2:"Knowledge Base",breadCrumbActive:"Category"}),Object(N.jsx)(p.a,{searchTerm:w,setSearchTerm:E,handleFilter:function(e){var a=e.target.value,r=e.target.value.toLowerCase();E(e.target.value);var c=[];a.length&&(c=t.filter((function(e){return e.title.toLowerCase().includes(r)||e.questions.filter((function(e){return e.question.toLowerCase().includes(r)})).length}))),M(Object(s.a)(c))}}),null!==t?Object(N.jsx)("div",{id:"knowledge-base-category",children:Object(N.jsx)(x.a,{className:"kb-search-content-info match-height",children:(w.length?T:t).map((function(e){return Object(N.jsx)(k,{item:e},e.id)}))})}):null]})}},467:function(e,a,t){"use strict";var s=t(466),r=t(1101),c=t(1058),n=t(1123),o=t(1118),l=t(1055),i=t(480),u=t(481),d=t(482),b=t(1326),m=t(1013),j=t(1023),p=t(6);a.a=function(e){var a=e.breadCrumbTitle,t=e.breadCrumbParent,g=e.breadCrumbParent2,f=e.breadCrumbParent3,O=e.breadCrumbActive;return Object(p.jsxs)("div",{className:"content-header row",children:[Object(p.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(p.jsx)("div",{className:"row breadcrumbs-top",children:Object(p.jsxs)("div",{className:"col-12",children:[a?Object(p.jsx)("h2",{className:"content-header-title float-left mb-0",children:a}):"",Object(p.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(p.jsxs)(i.a,{children:[Object(p.jsx)(u.a,{tag:"li",children:Object(p.jsx)(s.b,{to:"/",children:"Home"})}),Object(p.jsx)(u.a,{tag:"li",className:"text-primary",children:t}),g?Object(p.jsx)(u.a,{tag:"li",className:"text-primary",children:g}):"",f?Object(p.jsx)(u.a,{tag:"li",className:"text-primary",children:f}):"",Object(p.jsx)(u.a,{tag:"li",active:!0,children:O})]})})]})})}),Object(p.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(p.jsx)("div",{className:"form-group breadcrum-right dropdown",children:Object(p.jsxs)(d.a,{children:[Object(p.jsx)(b.a,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(p.jsx)(r.a,{size:14})}),Object(p.jsxs)(m.a,{tag:"ul",right:!0,children:[Object(p.jsxs)(j.a,{tag:s.b,to:"/apps/chat",children:[Object(p.jsx)(c.a,{className:"mr-1",size:14}),Object(p.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(p.jsxs)(j.a,{tag:s.b,to:"/apps/chat",children:[Object(p.jsx)(n.a,{className:"mr-1",size:14}),Object(p.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(p.jsxs)(j.a,{tag:s.b,to:"/apps/email",children:[Object(p.jsx)(o.a,{className:"mr-1",size:14}),Object(p.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(p.jsxs)(j.a,{tag:s.b,to:"/apps/calendar",children:[Object(p.jsx)(l.a,{className:"mr-1",size:14}),Object(p.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},468:function(e,a,t){"use strict";var s=t(15),r=t(0),c=t.n(r),n=t(5),o=t.n(n),l=t(478),i={children:o.a.node},u=function(e){return c.a.createElement(l.a,Object(s.a)({group:!0},e))};u.propTypes=i,a.a=u},471:function(e,a,t){"use strict";var s=t(15),r=t(20),c=t(0),n=t.n(c),o=t(5),l=t.n(o),i=t(58),u=t.n(i),d=t(80),b={tag:d.tagPropType,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},m=function(e){var a=e.className,t=e.cssModule,c=e.color,o=e.body,l=e.inverse,i=e.outline,b=e.tag,m=e.innerRef,j=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(d.mapToCssModules)(u()(a,"card",!!l&&"text-white",!!o&&"card-body",!!c&&(i?"border":"bg")+"-"+c),t);return n.a.createElement(b,Object(s.a)({},j,{className:p,ref:m}))};m.propTypes=b,m.defaultProps={tag:"div"},a.a=m},472:function(e,a,t){"use strict";var s=t(15),r=t(20),c=t(0),n=t.n(c),o=t(5),l=t.n(o),i=t(58),u=t.n(i),d=t(80),b=l.a.oneOfType([l.a.number,l.a.string]),m=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:b,offset:b})]),j={tag:d.tagPropType,xs:m,sm:m,md:m,lg:m,xl:m,className:l.a.string,cssModule:l.a.object,widths:l.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},f=function(e){var a=e.className,t=e.cssModule,c=e.widths,o=e.tag,l=Object(r.a)(e,["className","cssModule","widths","tag"]),i=[];c.forEach((function(a,s){var r=e[a];if(delete l[a],r||""===r){var c=!s;if(Object(d.isObject)(r)){var n,o=c?"-":"-"+a+"-",b=g(c,a,r.size);i.push(Object(d.mapToCssModules)(u()(((n={})[b]=r.size||""===r.size,n["order"+o+r.order]=r.order||0===r.order,n["offset"+o+r.offset]=r.offset||0===r.offset,n)),t))}else{var m=g(c,a,r);i.push(m)}}})),i.length||i.push("col");var b=Object(d.mapToCssModules)(u()(a,i),t);return n.a.createElement(o,Object(s.a)({},l,{className:b}))};f.propTypes=j,f.defaultProps=p,a.a=f},473:function(e,a,t){"use strict";var s=t(15),r=t(20),c=t(0),n=t.n(c),o=t(5),l=t.n(o),i=t(58),u=t.n(i),d=t(80),b={tag:d.tagPropType,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},m=function(e){var a=e.className,t=e.cssModule,c=e.innerRef,o=e.tag,l=Object(r.a)(e,["className","cssModule","innerRef","tag"]),i=Object(d.mapToCssModules)(u()(a,"card-body"),t);return n.a.createElement(o,Object(s.a)({},l,{className:i,ref:c}))};m.propTypes=b,m.defaultProps={tag:"div"},a.a=m},474:function(e,a,t){"use strict";var s=t(15),r=t(20),c=t(0),n=t.n(c),o=t(5),l=t.n(o),i=t(58),u=t.n(i),d=t(80),b=l.a.oneOfType([l.a.number,l.a.string]),m={tag:d.tagPropType,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:b,sm:b,md:b,lg:b,xl:b},j={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var a=e.className,t=e.cssModule,c=e.noGutters,o=e.tag,l=e.form,i=e.widths,b=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];i.forEach((function(a,t){var s=e[a];if(delete b[a],s){var r=!t;m.push(r?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var j=Object(d.mapToCssModules)(u()(a,c?"no-gutters":null,l?"form-row":"row",m),t);return n.a.createElement(o,Object(s.a)({},b,{className:j}))};p.propTypes=m,p.defaultProps=j,a.a=p},477:function(e,a,t){"use strict";var s=t(15),r=t(20),c=t(0),n=t.n(c),o=t(5),l=t.n(o),i=t(58),u=t.n(i),d=t(80),b={tag:d.tagPropType,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,c=e.tag,o=Object(r.a)(e,["className","cssModule","tag"]),l=Object(d.mapToCssModules)(u()(a,"card-text"),t);return n.a.createElement(c,Object(s.a)({},o,{className:l}))};m.propTypes=b,m.defaultProps={tag:"p"},a.a=m},480:function(e,a,t){"use strict";var s=t(15),r=t(20),c=t(0),n=t.n(c),o=t(5),l=t.n(o),i=t(58),u=t.n(i),d=t(80),b={tag:d.tagPropType,listTag:d.tagPropType,className:l.a.string,listClassName:l.a.string,cssModule:l.a.object,children:l.a.node,"aria-label":l.a.string},m=function(e){var a=e.className,t=e.listClassName,c=e.cssModule,o=e.children,l=e.tag,i=e.listTag,b=e["aria-label"],m=Object(r.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),j=Object(d.mapToCssModules)(u()(a),c),p=Object(d.mapToCssModules)(u()("breadcrumb",t),c);return n.a.createElement(l,Object(s.a)({},m,{className:j,"aria-label":b}),n.a.createElement(i,{className:p},o))};m.propTypes=b,m.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=m},481:function(e,a,t){"use strict";var s=t(15),r=t(20),c=t(0),n=t.n(c),o=t(5),l=t.n(o),i=t(58),u=t.n(i),d=t(80),b={tag:d.tagPropType,active:l.a.bool,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,c=e.active,o=e.tag,l=Object(r.a)(e,["className","cssModule","active","tag"]),i=Object(d.mapToCssModules)(u()(a,!!c&&"active","breadcrumb-item"),t);return n.a.createElement(o,Object(s.a)({},l,{className:i,"aria-current":c?"page":void 0}))};m.propTypes=b,m.defaultProps={tag:"li"},a.a=m},482:function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var s=t(465),r=t(15),c=t(120),n=t(119),o=t(0),l=t.n(o),i=t(5),u=t.n(i),d=t(468),b=t(80);function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}var j=["defaultOpen"],p=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={isOpen:a.defaultOpen||!1},t.toggle=t.toggle.bind(Object(c.a)(t)),t}Object(n.a)(a,e);var t=a.prototype;return t.toggle=function(){this.setState({isOpen:!this.state.isOpen})},t.render=function(){return l.a.createElement(d.a,Object(r.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(b.omit)(this.props,j)))},a}(o.Component);p.propTypes=function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){Object(s.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({defaultOpen:u.a.bool},d.a.propTypes)},496:function(e,a,t){"use strict";var s=t(15),r=t(20),c=t(120),n=t(119),o=t(0),l=t.n(o),i=t(5),u=t.n(i),d=t(58),b=t.n(d),m=t(80),j={children:u.a.node,inline:u.a.bool,tag:m.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},p=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(c.a)(t)),t.submit=t.submit.bind(Object(c.a)(t)),t}Object(n.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,c=e.inline,n=e.tag,o=e.innerRef,i=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(m.mapToCssModules)(b()(a,!!c&&"form-inline"),t);return l.a.createElement(n,Object(s.a)({},i,{ref:o,className:u}))},a}(o.Component);p.propTypes=j,p.defaultProps={tag:"form"},a.a=p},605:function(e,a,t){"use strict";var s=t(15),r=t(20),c=t(0),n=t.n(c),o=t(5),l=t.n(o),i=t(58),u=t.n(i),d=t(80),b={tag:d.tagPropType,flush:l.a.bool,className:l.a.string,cssModule:l.a.object,horizontal:l.a.oneOfType([l.a.bool,l.a.string])},m=function(e){var a=e.className,t=e.cssModule,c=e.tag,o=e.flush,l=e.horizontal,i=Object(r.a)(e,["className","cssModule","tag","flush","horizontal"]),b=Object(d.mapToCssModules)(u()(a,"list-group",o?"list-group-flush":function(e){return!1!==e&&(!0===e||"xs"===e?"list-group-horizontal":"list-group-horizontal-"+e)}(l)),t);return n.a.createElement(c,Object(s.a)({},i,{className:b}))};m.propTypes=b,m.defaultProps={tag:"ul",horizontal:!1},a.a=m},606:function(e,a,t){"use strict";var s=t(15),r=t(20),c=t(0),n=t.n(c),o=t(5),l=t.n(o),i=t(58),u=t.n(i),d=t(80),b={tag:d.tagPropType,active:l.a.bool,disabled:l.a.bool,color:l.a.string,action:l.a.bool,className:l.a.any,cssModule:l.a.object},m=function(e){e.preventDefault()},j=function(e){var a=e.className,t=e.cssModule,c=e.tag,o=e.active,l=e.disabled,i=e.action,b=e.color,j=Object(r.a)(e,["className","cssModule","tag","active","disabled","action","color"]),p=Object(d.mapToCssModules)(u()(a,!!o&&"active",!!l&&"disabled",!!i&&"list-group-item-action",!!b&&"list-group-item-"+b,"list-group-item"),t);return l&&(j.onClick=m),n.a.createElement(c,Object(s.a)({},j,{className:p}))};j.propTypes=b,j.defaultProps={tag:"li"},a.a=j},779:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/banner.06ea9907.png"},940:function(e,a,t){"use strict";var s=t(1037),r=t(471),c=t(473),n=t(477),o=t(496),l=t(1024),i=t(1025),u=t(852),d=t(1026),b=t(6);a.a=function(e){var a=e.searchTerm,m=e.setSearchTerm,j=e.handleFilter;return Object(b.jsx)("div",{id:"knowledge-base-search",children:Object(b.jsx)(r.a,{className:"knowledge-base-bg",style:{backgroundImage:"url(".concat(t(779).default,")")},children:Object(b.jsxs)(c.a,{className:"text-center",children:[Object(b.jsx)("h2",{className:"text-primary",children:"Dedicated Source Used on Website"}),Object(b.jsxs)(n.a,{className:"mb-2",children:["Popular searches: ",Object(b.jsx)("span",{className:"font-weight-bolder",children:"Sales automation, Email marketing"})]}),Object(b.jsx)(o.a,{className:"kb-search-input",onSubmit:function(e){return e.preventDefault()},children:Object(b.jsxs)(l.a,{className:"input-group-merge",children:[Object(b.jsx)(i.a,{addonType:"prepend",children:Object(b.jsx)(u.a,{children:Object(b.jsx)(s.a,{size:14})})}),Object(b.jsx)(d.a,{value:a,onChange:function(e){return function(e){j?j(e):m(e.target.value)}(e)},placeholder:"Ask a question..."})]})})]})})})}},941:function(e,a,t){}}]);
//# sourceMappingURL=75.598c2fea.chunk.js.map