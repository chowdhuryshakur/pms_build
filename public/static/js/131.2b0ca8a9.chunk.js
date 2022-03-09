(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[131],{2039:function(e,a,t){"use strict";t.r(a);var s=t(0),r=t(474),c=t(473),o=t(10),n=t(728),l=t(727),i=t(472),u=t(476),d=t(475),b=t(471),j=t(6),f=function(){var e=Object(s.useState)(n.EditorState.createEmpty()),a=Object(o.a)(e,2),t=a[0],r=a[1];return Object(j.jsxs)(i.a,{children:[Object(j.jsx)(u.a,{children:Object(j.jsx)(d.a,{tag:"h4",children:"Controlled Editor"})}),Object(j.jsx)(b.a,{children:Object(j.jsx)(l.Editor,{editorState:t,onEditorStateChange:function(e){return r(e)}})})]})},m=function(){return Object(j.jsxs)(i.a,{children:[Object(j.jsx)(u.a,{children:Object(j.jsx)(d.a,{tag:"h4",children:"Uncontrolled Editor"})}),Object(j.jsx)(b.a,{children:Object(j.jsx)(l.Editor,{})})]})},p=t(500);t(668),a.default=function(){return Object(j.jsxs)(s.Fragment,{children:[Object(j.jsx)(p.a,{title:"React Draft Wysiwyg",subTitle:"A Wysiwyg Built on ReactJS and DraftJS",link:"https://jpuri.github.io/react-draft-wysiwyg/#/docs"}),Object(j.jsxs)(r.a,{children:[Object(j.jsx)(c.a,{sm:12,children:Object(j.jsx)(m,{})}),Object(j.jsx)(c.a,{sm:12,children:Object(j.jsx)(f,{})})]})]})}},471:function(e,a,t){"use strict";var s=t(15),r=t(20),c=t(0),o=t.n(c),n=t(5),l=t.n(n),i=t(58),u=t.n(i),d=t(80),b={tag:d.tagPropType,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},j=function(e){var a=e.className,t=e.cssModule,c=e.innerRef,n=e.tag,l=Object(r.a)(e,["className","cssModule","innerRef","tag"]),i=Object(d.mapToCssModules)(u()(a,"card-body"),t);return o.a.createElement(n,Object(s.a)({},l,{className:i,ref:c}))};j.propTypes=b,j.defaultProps={tag:"div"},a.a=j},472:function(e,a,t){"use strict";var s=t(15),r=t(20),c=t(0),o=t.n(c),n=t(5),l=t.n(n),i=t(58),u=t.n(i),d=t(80),b={tag:d.tagPropType,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},j=function(e){var a=e.className,t=e.cssModule,c=e.color,n=e.body,l=e.inverse,i=e.outline,b=e.tag,j=e.innerRef,f=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),m=Object(d.mapToCssModules)(u()(a,"card",!!l&&"text-white",!!n&&"card-body",!!c&&(i?"border":"bg")+"-"+c),t);return o.a.createElement(b,Object(s.a)({},f,{className:m,ref:j}))};j.propTypes=b,j.defaultProps={tag:"div"},a.a=j},473:function(e,a,t){"use strict";var s=t(15),r=t(20),c=t(0),o=t.n(c),n=t(5),l=t.n(n),i=t(58),u=t.n(i),d=t(80),b=l.a.oneOfType([l.a.number,l.a.string]),j=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:b,offset:b})]),f={tag:d.tagPropType,xs:j,sm:j,md:j,lg:j,xl:j,className:l.a.string,cssModule:l.a.object,widths:l.a.array},m={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,c=e.widths,n=e.tag,l=Object(r.a)(e,["className","cssModule","widths","tag"]),i=[];c.forEach((function(a,s){var r=e[a];if(delete l[a],r||""===r){var c=!s;if(Object(d.isObject)(r)){var o,n=c?"-":"-"+a+"-",b=p(c,a,r.size);i.push(Object(d.mapToCssModules)(u()(((o={})[b]=r.size||""===r.size,o["order"+n+r.order]=r.order||0===r.order,o["offset"+n+r.offset]=r.offset||0===r.offset,o)),t))}else{var j=p(c,a,r);i.push(j)}}})),i.length||i.push("col");var b=Object(d.mapToCssModules)(u()(a,i),t);return o.a.createElement(n,Object(s.a)({},l,{className:b}))};g.propTypes=f,g.defaultProps=m,a.a=g},474:function(e,a,t){"use strict";var s=t(15),r=t(20),c=t(0),o=t.n(c),n=t(5),l=t.n(n),i=t(58),u=t.n(i),d=t(80),b=l.a.oneOfType([l.a.number,l.a.string]),j={tag:d.tagPropType,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:b,sm:b,md:b,lg:b,xl:b},f={tag:"div",widths:["xs","sm","md","lg","xl"]},m=function(e){var a=e.className,t=e.cssModule,c=e.noGutters,n=e.tag,l=e.form,i=e.widths,b=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),j=[];i.forEach((function(a,t){var s=e[a];if(delete b[a],s){var r=!t;j.push(r?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var f=Object(d.mapToCssModules)(u()(a,c?"no-gutters":null,l?"form-row":"row",j),t);return o.a.createElement(n,Object(s.a)({},b,{className:f}))};m.propTypes=j,m.defaultProps=f,a.a=m},475:function(e,a,t){"use strict";var s=t(15),r=t(20),c=t(0),o=t.n(c),n=t(5),l=t.n(n),i=t(58),u=t.n(i),d=t(80),b={tag:d.tagPropType,className:l.a.string,cssModule:l.a.object},j=function(e){var a=e.className,t=e.cssModule,c=e.tag,n=Object(r.a)(e,["className","cssModule","tag"]),l=Object(d.mapToCssModules)(u()(a,"card-title"),t);return o.a.createElement(c,Object(s.a)({},n,{className:l}))};j.propTypes=b,j.defaultProps={tag:"div"},a.a=j},476:function(e,a,t){"use strict";var s=t(15),r=t(20),c=t(0),o=t.n(c),n=t(5),l=t.n(n),i=t(58),u=t.n(i),d=t(80),b={tag:d.tagPropType,className:l.a.string,cssModule:l.a.object},j=function(e){var a=e.className,t=e.cssModule,c=e.tag,n=Object(r.a)(e,["className","cssModule","tag"]),l=Object(d.mapToCssModules)(u()(a,"card-header"),t);return o.a.createElement(c,Object(s.a)({},n,{className:l}))};j.propTypes=b,j.defaultProps={tag:"div"},a.a=j},500:function(e,a,t){"use strict";var s=t(474),r=t(473),c=t(6);a.a=function(e){return Object(c.jsx)(s.a,{className:"mb-2",children:Object(c.jsxs)(r.a,{sm:"12",className:"ml-50",children:[Object(c.jsx)("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title",children:e.title}),e.link?Object(c.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.subTitle}):Object(c.jsx)("p",{className:"text-primary",children:e.subTitle})]})})}},668:function(e,a,t){}}]);
//# sourceMappingURL=131.2b0ca8a9.chunk.js.map