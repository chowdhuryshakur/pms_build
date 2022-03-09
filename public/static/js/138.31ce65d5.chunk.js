(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[138],{1926:function(e,a,s){"use strict";s.r(a);var t=s(0),n=s(483),c=s(480),r=s(481),o=s(490),l=s(487),i=s(482),d=s(1005),u=s(510),m=s(137),b=s(1885),p=s(6);a.default=function(){var e=Object(t.useContext)(m.a);return Object(p.jsxs)(t.Fragment,{children:[Object(p.jsx)(u.a,{title:"React Intl",subTitle:"This library provides React components and an API to format dates, numbers, and strings, including pluralization and handling translations.",link:"https://www.npmjs.com/package/react-intl"}),Object(p.jsx)(n.a,{children:Object(p.jsx)(c.a,{sm:"12",children:Object(p.jsxs)(r.a,{children:[Object(p.jsx)(o.a,{children:Object(p.jsx)(l.a,{tag:"h4",children:"Change Locale"})}),Object(p.jsxs)(i.a,{children:[Object(p.jsxs)("div",{className:"language-options",children:[Object(p.jsx)(d.a,{type:"radio",id:"radio-en",name:"i18n-lang-radio",onClick:function(){e.switchLanguage("en")},label:"English",className:"mb-1",defaultChecked:"en"===e.locale}),Object(p.jsx)(d.a,{type:"radio",id:"radio-fr",name:"i18n-lang-radio",onClick:function(){e.switchLanguage("fr")},label:"French",className:"mb-1",defaultChecked:"fr"===e.locale}),Object(p.jsx)(d.a,{type:"radio",id:"radio-de",name:"i18n-lang-radio",onClick:function(){e.switchLanguage("de")},label:"German",className:"mb-1",defaultChecked:"de"===e.locale}),Object(p.jsx)(d.a,{type:"radio",id:"radio-pt",name:"i18n-lang-radio",onClick:function(){e.switchLanguage("pt")},label:"Portuguese",className:"mb-1",defaultChecked:"pt"===e.locale})]}),Object(p.jsxs)("div",{className:"border p-2 mt-3",children:[Object(p.jsx)("h5",{className:"mb-1",children:"Title"}),Object(p.jsx)(b.a,{id:"text"})]})]})]})})})]})}},480:function(e,a,s){"use strict";var t=s(15),n=s(20),c=s(0),r=s.n(c),o=s(5),l=s.n(o),i=s(58),d=s.n(i),u=s(80),m=l.a.oneOfType([l.a.number,l.a.string]),b=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:m,offset:m})]),p={tag:u.tagPropType,xs:b,sm:b,md:b,lg:b,xl:b,className:l.a.string,cssModule:l.a.object,widths:l.a.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,a,s){return!0===s||""===s?e?"col":"col-"+a:"auto"===s?e?"col-auto":"col-"+a+"-auto":e?"col-"+s:"col-"+a+"-"+s},j=function(e){var a=e.className,s=e.cssModule,c=e.widths,o=e.tag,l=Object(n.a)(e,["className","cssModule","widths","tag"]),i=[];c.forEach((function(a,t){var n=e[a];if(delete l[a],n||""===n){var c=!t;if(Object(u.isObject)(n)){var r,o=c?"-":"-"+a+"-",m=g(c,a,n.size);i.push(Object(u.mapToCssModules)(d()(((r={})[m]=n.size||""===n.size,r["order"+o+n.order]=n.order||0===n.order,r["offset"+o+n.offset]=n.offset||0===n.offset,r)),s))}else{var b=g(c,a,n);i.push(b)}}})),i.length||i.push("col");var m=Object(u.mapToCssModules)(d()(a,i),s);return r.a.createElement(o,Object(t.a)({},l,{className:m}))};j.propTypes=p,j.defaultProps=f,a.a=j},481:function(e,a,s){"use strict";var t=s(15),n=s(20),c=s(0),r=s.n(c),o=s(5),l=s.n(o),i=s(58),d=s.n(i),u=s(80),m={tag:u.tagPropType,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},b=function(e){var a=e.className,s=e.cssModule,c=e.color,o=e.body,l=e.inverse,i=e.outline,m=e.tag,b=e.innerRef,p=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),f=Object(u.mapToCssModules)(d()(a,"card",!!l&&"text-white",!!o&&"card-body",!!c&&(i?"border":"bg")+"-"+c),s);return r.a.createElement(m,Object(t.a)({},p,{className:f,ref:b}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},482:function(e,a,s){"use strict";var t=s(15),n=s(20),c=s(0),r=s.n(c),o=s(5),l=s.n(o),i=s(58),d=s.n(i),u=s(80),m={tag:u.tagPropType,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},b=function(e){var a=e.className,s=e.cssModule,c=e.innerRef,o=e.tag,l=Object(n.a)(e,["className","cssModule","innerRef","tag"]),i=Object(u.mapToCssModules)(d()(a,"card-body"),s);return r.a.createElement(o,Object(t.a)({},l,{className:i,ref:c}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},483:function(e,a,s){"use strict";var t=s(15),n=s(20),c=s(0),r=s.n(c),o=s(5),l=s.n(o),i=s(58),d=s.n(i),u=s(80),m=l.a.oneOfType([l.a.number,l.a.string]),b={tag:u.tagPropType,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:m,sm:m,md:m,lg:m,xl:m},p={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e){var a=e.className,s=e.cssModule,c=e.noGutters,o=e.tag,l=e.form,i=e.widths,m=Object(n.a)(e,["className","cssModule","noGutters","tag","form","widths"]),b=[];i.forEach((function(a,s){var t=e[a];if(delete m[a],t){var n=!s;b.push(n?"row-cols-"+t:"row-cols-"+a+"-"+t)}}));var p=Object(u.mapToCssModules)(d()(a,c?"no-gutters":null,l?"form-row":"row",b),s);return r.a.createElement(o,Object(t.a)({},m,{className:p}))};f.propTypes=b,f.defaultProps=p,a.a=f},487:function(e,a,s){"use strict";var t=s(15),n=s(20),c=s(0),r=s.n(c),o=s(5),l=s.n(o),i=s(58),d=s.n(i),u=s(80),m={tag:u.tagPropType,className:l.a.string,cssModule:l.a.object},b=function(e){var a=e.className,s=e.cssModule,c=e.tag,o=Object(n.a)(e,["className","cssModule","tag"]),l=Object(u.mapToCssModules)(d()(a,"card-title"),s);return r.a.createElement(c,Object(t.a)({},o,{className:l}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},490:function(e,a,s){"use strict";var t=s(15),n=s(20),c=s(0),r=s.n(c),o=s(5),l=s.n(o),i=s(58),d=s.n(i),u=s(80),m={tag:u.tagPropType,className:l.a.string,cssModule:l.a.object},b=function(e){var a=e.className,s=e.cssModule,c=e.tag,o=Object(n.a)(e,["className","cssModule","tag"]),l=Object(u.mapToCssModules)(d()(a,"card-header"),s);return r.a.createElement(c,Object(t.a)({},o,{className:l}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},510:function(e,a,s){"use strict";var t=s(483),n=s(480),c=s(6);a.a=function(e){return Object(c.jsx)(t.a,{className:"mb-2",children:Object(c.jsxs)(n.a,{sm:"12",className:"ml-50",children:[Object(c.jsx)("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title",children:e.title}),e.link?Object(c.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.subTitle}):Object(c.jsx)("p",{className:"text-primary",children:e.subTitle})]})})}}}]);
//# sourceMappingURL=138.31ce65d5.chunk.js.map