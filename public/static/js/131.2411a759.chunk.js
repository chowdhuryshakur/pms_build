(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[131],{1963:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a(0),s=a.n(r),o=a(483),l=a(480),i=a(669);function c(e){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,a){return t&&b(e.prototype,t),a&&b(e,a),e}function f(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},j.apply(this,arguments)}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){f(e,t,a[t])}))}return e}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?O(e):t}var g={display:"inline-block",borderRadius:"50%",border:"5px double white",width:30,height:30},x={empty:p({},g,{backgroundColor:"#ccc"}),full:p({},g,{backgroundColor:"black"}),placeholder:p({},g,{backgroundColor:"red"})},k=function(e){return s.a.isValidElement(e)?e:"object"===c(e)&&null!==e?s.a.createElement("span",{style:e}):"[object String]"===Object.prototype.toString.call(e)?s.a.createElement("span",{className:e}):void 0},C=function(e){function t(){return u(this,t),v(this,m(t).apply(this,arguments))}return h(t,e),d(t,[{key:"render",value:function(){var e,t=this.props,a=t.index,n=t.inactiveIcon,r=t.activeIcon,o=t.percent,l=t.direction,i=t.readonly,c=t.onClick,u=t.onMouseMove,b=k(n),d=o<100?{}:{visibility:"hidden"},j=k(r),p=(f(e={display:"inline-block",position:"absolute",overflow:"hidden",top:0},"rtl"===l?"right":"left",0),f(e,"width","".concat(o,"%")),e),h={cursor:i?"inherit":"pointer",display:"inline-block",position:"relative"};function m(e){u&&u(a,e)}function y(e){c&&(e.preventDefault(),c(a,e))}return s.a.createElement("span",{style:h,onClick:y,onMouseMove:m,onTouchMove:m,onTouchEnd:y},s.a.createElement("span",{style:d},b),s.a.createElement("span",{style:p},j))}}]),t}(s.a.PureComponent),S=function(e){function t(e){var a;return u(this,t),(a=v(this,m(t).call(this,e))).state={displayValue:a.props.value,interacting:!1},a.onMouseLeave=a.onMouseLeave.bind(O(O(a))),a.symbolMouseMove=a.symbolMouseMove.bind(O(O(a))),a.symbolClick=a.symbolClick.bind(O(O(a))),a}return h(t,e),d(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this.props.value!==e.value;this.setState((function(a){return{displayValue:t?e.value:a.displayValue}}))}},{key:"componentDidUpdate",value:function(e,t){if(e.value===this.props.value)return t.interacting&&!this.state.interacting?this.props.onHover():void(this.state.interacting&&this.props.onHover(this.state.displayValue))}},{key:"symbolClick",value:function(e,t){var a=this.calculateDisplayValue(e,t);this.props.onClick(a,t)}},{key:"symbolMouseMove",value:function(e,t){var a=this.calculateDisplayValue(e,t);this.setState({interacting:!this.props.readonly,displayValue:a})}},{key:"onMouseLeave",value:function(){this.setState({displayValue:this.props.value,interacting:!1})}},{key:"calculateDisplayValue",value:function(e,t){var a=this.calculateHoverPercentage(t),n=Math.ceil(a%1*this.props.fractions)/this.props.fractions,r=Math.pow(10,3),s=e+(Math.floor(a)+Math.floor(n*r)/r);return s>0?s>this.props.totalSymbols?this.props.totalSymbols:s:1/this.props.fractions}},{key:"calculateHoverPercentage",value:function(e){var t=e.nativeEvent.type.indexOf("touch")>-1?e.nativeEvent.type.indexOf("touchend")>-1?e.changedTouches[0].clientX:e.touches[0].clientX:e.clientX,a=e.target.getBoundingClientRect(),n="rtl"===this.props.direction?a.right-t:t-a.left;return n<0?0:n/a.width}},{key:"render",value:function(){var e,t=this.props,a=t.readonly,n=t.quiet,r=t.totalSymbols,o=t.value,l=t.placeholderValue,i=t.direction,c=t.emptySymbol,u=t.fullSymbol,b=t.placeholderSymbol,d=t.className,f=t.id,h=t.style,m=t.tabIndex,y=this.state,O=y.displayValue,v=y.interacting,g=[],x=[].concat(c),k=[].concat(u),S=[].concat(b),M=0!==l&&0===o&&!v;e=M?l:n?o:O;for(var N=Math.floor(e),w=0;w<r;w++){var T=void 0;T=w-N<0?100:w-N===0?100*(e-w):0,g.push(s.a.createElement(C,j({key:w,index:w,readonly:a,inactiveIcon:x[w%x.length],activeIcon:M?S[w%k.length]:k[w%k.length],percent:T,direction:i},!a&&{onClick:this.symbolClick,onMouseMove:this.symbolMouseMove,onTouchMove:this.symbolMouseMove,onTouchEnd:this.symbolClick})))}return s.a.createElement("span",j({id:f,style:p({},h,{display:"inline-block",direction:i}),className:d,tabIndex:m,"aria-label":this.props["aria-label"]},!a&&{onMouseLeave:this.onMouseLeave}),g)}}]),t}(s.a.PureComponent);function M(){}M._name="react_rating_noop";var N=function(e){function t(e){var a;return u(this,t),(a=v(this,m(t).call(this,e))).state={value:e.initialRating},a.handleClick=a.handleClick.bind(O(O(a))),a.handleHover=a.handleHover.bind(O(O(a))),a}return h(t,e),d(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.setState({value:e.initialRating})}},{key:"handleClick",value:function(e,t){var a=this,n=this.translateDisplayValueToValue(e);this.props.onClick(n),this.state.value!==n&&this.setState({value:n},(function(){return a.props.onChange(a.state.value)}))}},{key:"handleHover",value:function(e){var t=void 0===e?e:this.translateDisplayValueToValue(e);this.props.onHover(t)}},{key:"translateDisplayValueToValue",value:function(e){var t=e*this.props.step+this.props.start;return t===this.props.start?t+1/this.props.fractions:t}},{key:"tranlateValueToDisplayValue",value:function(e){return void 0===e?0:(e-this.props.start)/this.props.step}},{key:"render",value:function(){var e=this.props,t=e.step,a=e.emptySymbol,n=e.fullSymbol,r=e.placeholderSymbol,o=e.readonly,l=e.quiet,i=e.fractions,c=e.direction,u=e.start,b=e.stop,d=e.id,f=e.className,j=e.style,p=e.tabIndex;return s.a.createElement(S,{id:d,style:j,className:f,tabIndex:p,"aria-label":this.props["aria-label"],totalSymbols:function(e,t,a){return Math.floor((t-e)/a)}(u,b,t),value:this.tranlateValueToDisplayValue(this.state.value),placeholderValue:this.tranlateValueToDisplayValue(this.props.placeholderRating),readonly:o,quiet:l,fractions:i,direction:c,emptySymbol:a,fullSymbol:n,placeholderSymbol:r,onClick:this.handleClick,onHover:this.handleHover})}}]),t}(s.a.PureComponent);N.defaultProps={start:0,stop:5,step:1,readonly:!1,quiet:!1,fractions:1,direction:"ltr",onHover:M,onClick:M,onChange:M,emptySymbol:x.empty,fullSymbol:x.full,placeholderSymbol:x.placeholder};var w=N,T=a(1161),P=a(481),E=a(490),z=a(487),R=a(482),V=a(6),_=function(e){var t=e.filledColor,a=e.dir;return Object(V.jsxs)(P.a,{children:[Object(V.jsx)(E.a,{children:Object(V.jsx)(z.a,{tag:"h4",children:"Basic"})}),Object(V.jsx)(R.a,{children:Object(V.jsx)(w,{emptySymbol:Object(V.jsx)(T.a,{size:32,fill:"#babfc7",stroke:"#babfc7"}),fullSymbol:Object(V.jsx)(T.a,{size:32,fill:t,stroke:t}),initialRating:2,direction:a})})]})},D=function(e){var t=e.filledColor,a=e.dir;return Object(V.jsxs)(P.a,{children:[Object(V.jsx)(E.a,{children:Object(V.jsx)(z.a,{tag:"h4",children:"Sizes"})}),Object(V.jsxs)(R.a,{children:[Object(V.jsx)("h6",{children:"Large"}),Object(V.jsx)(w,{direction:a,emptySymbol:Object(V.jsx)(T.a,{size:42,fill:"#babfc7",stroke:"#babfc7"}),fullSymbol:Object(V.jsx)(T.a,{size:42,fill:t,stroke:t})}),Object(V.jsx)("h6",{className:"mt-2",children:"Default"}),Object(V.jsx)(w,{direction:a,emptySymbol:Object(V.jsx)(T.a,{size:32,fill:"#babfc7",stroke:"#babfc7"}),fullSymbol:Object(V.jsx)(T.a,{size:32,fill:t,stroke:t})}),Object(V.jsx)("h6",{className:"mt-2",children:"Small"}),Object(V.jsx)(w,{direction:a,emptySymbol:Object(V.jsx)(T.a,{size:20,fill:"#babfc7",stroke:"#babfc7"}),fullSymbol:Object(V.jsx)(T.a,{size:20,fill:t,stroke:t})})]})]})},H=function(e){var t=e.filledColor,a=e.dir,s=Object(r.useState)(0),o=Object(n.a)(s,2),l=o[0],i=o[1];return Object(V.jsxs)(r.Fragment,{children:[Object(V.jsx)(w,{initialRating:l,id:"ratings-hover",emptySymbol:Object(V.jsx)(T.a,{size:32,fill:"#babfc7",stroke:"#babfc7"}),fullSymbol:Object(V.jsx)(T.a,{size:32,fill:t,stroke:t}),onHover:function(e){return function(e){void 0!==e&&i(e)}(e)},onChange:function(e){return i(e)},direction:a}),Object(V.jsx)("div",{className:"counter-wrapper mt-1",children:Object(V.jsxs)("span",{className:"font-weight-bold",children:["Ratings: ",l]})})]})},I=a(489),L=function(e){var t=e.filledColor,a=e.dir;return Object(V.jsxs)(P.a,{children:[Object(V.jsx)(E.a,{children:Object(V.jsx)(z.a,{tag:"h4",children:"Events"})}),Object(V.jsx)(R.a,{children:Object(V.jsxs)(o.a,{children:[Object(V.jsxs)(l.a,{md:"6",className:"d-flex flex-column align-items-start mb-md-0 mb-1",children:[Object(V.jsx)(I.a,{className:"font-weight-semibold mb-25",children:"On Change"}),Object(V.jsx)(w,{emptySymbol:Object(V.jsx)(T.a,{size:32,fill:"#babfc7",stroke:"#babfc7"}),fullSymbol:Object(V.jsx)(T.a,{size:32,fill:t,stroke:t}),onChange:function(e){return alert(e)},direction:a})]}),Object(V.jsxs)(l.a,{md:"6",className:"d-flex flex-column align-items-start",children:[Object(V.jsx)(I.a,{className:"font-weight-semibold mb-25",children:"On Hover"}),Object(V.jsx)(H,{filledColor:t,dir:a})]})]})})]})},F=function(e){return Object(V.jsxs)(P.a,{children:[Object(V.jsx)(E.a,{children:Object(V.jsx)(z.a,{tag:"h4",children:"Numbers"})}),Object(V.jsx)(R.a,{children:Object(V.jsx)(w,{emptySymbol:Object(V.jsx)("span",{className:"font-medium-3 mr-50",children:"-"}),fullSymbol:[1,2,3,4,5].map((function(e){return Object(V.jsx)("span",{className:"font-medium-3 mr-50",children:e})})),direction:e.dir})})]})},G=function(e){var t=e.filledColor,a=e.dir;return Object(V.jsxs)(P.a,{children:[Object(V.jsx)(E.a,{children:Object(V.jsx)(z.a,{tag:"h4",children:"Readonly"})}),Object(V.jsx)(R.a,{children:Object(V.jsx)(w,{emptySymbol:Object(V.jsx)(T.a,{size:32,fill:"#babfc7",stroke:"#babfc7"}),fullSymbol:Object(V.jsx)(T.a,{size:32,fill:t,stroke:t}),readonly:!0,initialRating:2,direction:a})})]})},q=a(1162),A=a(1082),U=a(1080),X=a(1081),B=a(1079),J=function(e){e.emptyColor;var t=e.dir;return Object(V.jsxs)(P.a,{children:[Object(V.jsx)(E.a,{children:Object(V.jsx)(z.a,{tag:"h4",children:"Custom SVG"})}),Object(V.jsx)(R.a,{children:Object(V.jsx)(w,{emptySymbol:Object(V.jsx)(q.a,{size:32,stroke:"#babfc7"}),fullSymbol:[Object(V.jsx)(A.a,{size:32,stroke:"#babfc7"}),Object(V.jsx)(U.a,{size:32,stroke:"#babfc7"}),Object(V.jsx)(X.a,{size:32,stroke:"#babfc7"}),Object(V.jsx)(B.a,{size:32,stroke:"#babfc7"})],stop:4,direction:t})})]})},W=function(e){var t=e.filledColor,a=e.dir;return Object(V.jsxs)(P.a,{children:[Object(V.jsx)(E.a,{children:Object(V.jsx)(z.a,{tag:"h4",children:"Fractional"})}),Object(V.jsx)(R.a,{children:Object(V.jsx)(w,{emptySymbol:Object(V.jsx)(T.a,{size:32,fill:"#babfc7",stroke:"#babfc7"}),fullSymbol:Object(V.jsx)(T.a,{size:32,fill:t,stroke:t}),fractions:2,initialRating:2.5,direction:a})})]})},K=a(463),Q=function(e){var t=e.filledColor,a=e.dir,s=Object(r.useState)(0),o=Object(n.a)(s,2),l=o[0],i=o[1];return Object(V.jsxs)(P.a,{children:[Object(V.jsx)(E.a,{children:Object(V.jsx)(z.a,{tag:"h4",children:"Controlled Ratings"})}),Object(V.jsxs)(R.a,{children:[Object(V.jsx)(w,{emptySymbol:Object(V.jsx)(T.a,{size:32,fill:"#babfc7",stroke:"#babfc7"}),fullSymbol:Object(V.jsx)(T.a,{size:32,fill:t,stroke:t}),initialRating:l,onChange:function(e){return i(e)},direction:a}),Object(V.jsxs)("div",{className:"demo-inline-spacing",children:[Object(V.jsx)(K.a,{color:"primary",onClick:function(){return i(0)},outline:!0,children:"Reset"}),Object(V.jsx)(K.a,{color:"primary",onClick:function(){return alert(l)},outline:!0,children:"Get Ratings"}),Object(V.jsx)(K.a,{color:"primary",onClick:function(){return i(3)},outline:!0,children:"Set Ratings to 3"})]})]})]})},Y=a(510),Z=a(129);t.default=function(){var e=Object(i.a)(),t=Object(n.a)(e,2),a=t[0],s=(t[1],Object(r.useContext)(Z.a));return Object(V.jsxs)(r.Fragment,{children:[Object(V.jsx)(Y.a,{title:"React Rating",subTitle:"A rating react component with custom symbols",link:"https://github.com/dreyescat/react-rating"}),Object(V.jsxs)(o.a,{className:"match-height",children:[Object(V.jsx)(l.a,{lg:6,xs:12,children:Object(V.jsx)(_,{dir:a?"rtl":"ltr",filledColor:s.colors.warning.main})}),Object(V.jsx)(l.a,{lg:6,xs:12,children:Object(V.jsx)(G,{dir:a?"rtl":"ltr",filledColor:s.colors.warning.main})}),Object(V.jsx)(l.a,{lg:6,xs:12,children:Object(V.jsx)(W,{dir:a?"rtl":"ltr",filledColor:s.colors.warning.main})}),Object(V.jsx)(l.a,{lg:6,xs:12,children:Object(V.jsx)(J,{dir:a?"rtl":"ltr",filledColor:s.colors.warning.main})}),Object(V.jsx)(l.a,{lg:6,xs:12,children:Object(V.jsx)(F,{dir:a?"rtl":"ltr",filledColor:s.colors.warning.main})}),Object(V.jsx)(l.a,{lg:6,xs:12,children:Object(V.jsx)(L,{dir:a?"rtl":"ltr",filledColor:s.colors.warning.main})}),Object(V.jsx)(l.a,{lg:6,xs:12,children:Object(V.jsx)(Q,{dir:a?"rtl":"ltr",filledColor:s.colors.warning.main})}),Object(V.jsx)(l.a,{lg:6,xs:12,children:Object(V.jsx)(D,{dir:a?"rtl":"ltr",filledColor:s.colors.warning.main})})]})]})}},480:function(e,t,a){"use strict";var n=a(15),r=a(20),s=a(0),o=a.n(s),l=a(5),i=a.n(l),c=a(58),u=a.n(c),b=a(80),d=i.a.oneOfType([i.a.number,i.a.string]),f=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:d,offset:d})]),j={tag:b.tagPropType,xs:f,sm:f,md:f,lg:f,xl:f,className:i.a.string,cssModule:i.a.object,widths:i.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},m=function(e){var t=e.className,a=e.cssModule,s=e.widths,l=e.tag,i=Object(r.a)(e,["className","cssModule","widths","tag"]),c=[];s.forEach((function(t,n){var r=e[t];if(delete i[t],r||""===r){var s=!n;if(Object(b.isObject)(r)){var o,l=s?"-":"-"+t+"-",d=h(s,t,r.size);c.push(Object(b.mapToCssModules)(u()(((o={})[d]=r.size||""===r.size,o["order"+l+r.order]=r.order||0===r.order,o["offset"+l+r.offset]=r.offset||0===r.offset,o)),a))}else{var f=h(s,t,r);c.push(f)}}})),c.length||c.push("col");var d=Object(b.mapToCssModules)(u()(t,c),a);return o.a.createElement(l,Object(n.a)({},i,{className:d}))};m.propTypes=j,m.defaultProps=p,t.a=m},481:function(e,t,a){"use strict";var n=a(15),r=a(20),s=a(0),o=a.n(s),l=a(5),i=a.n(l),c=a(58),u=a.n(c),b=a(80),d={tag:b.tagPropType,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},f=function(e){var t=e.className,a=e.cssModule,s=e.color,l=e.body,i=e.inverse,c=e.outline,d=e.tag,f=e.innerRef,j=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(b.mapToCssModules)(u()(t,"card",!!i&&"text-white",!!l&&"card-body",!!s&&(c?"border":"bg")+"-"+s),a);return o.a.createElement(d,Object(n.a)({},j,{className:p,ref:f}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},482:function(e,t,a){"use strict";var n=a(15),r=a(20),s=a(0),o=a.n(s),l=a(5),i=a.n(l),c=a(58),u=a.n(c),b=a(80),d={tag:b.tagPropType,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},f=function(e){var t=e.className,a=e.cssModule,s=e.innerRef,l=e.tag,i=Object(r.a)(e,["className","cssModule","innerRef","tag"]),c=Object(b.mapToCssModules)(u()(t,"card-body"),a);return o.a.createElement(l,Object(n.a)({},i,{className:c,ref:s}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},483:function(e,t,a){"use strict";var n=a(15),r=a(20),s=a(0),o=a.n(s),l=a(5),i=a.n(l),c=a(58),u=a.n(c),b=a(80),d=i.a.oneOfType([i.a.number,i.a.string]),f={tag:b.tagPropType,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},j={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var t=e.className,a=e.cssModule,s=e.noGutters,l=e.tag,i=e.form,c=e.widths,d=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];c.forEach((function(t,a){var n=e[t];if(delete d[t],n){var r=!a;f.push(r?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var j=Object(b.mapToCssModules)(u()(t,s?"no-gutters":null,i?"form-row":"row",f),a);return o.a.createElement(l,Object(n.a)({},d,{className:j}))};p.propTypes=f,p.defaultProps=j,t.a=p},487:function(e,t,a){"use strict";var n=a(15),r=a(20),s=a(0),o=a.n(s),l=a(5),i=a.n(l),c=a(58),u=a.n(c),b=a(80),d={tag:b.tagPropType,className:i.a.string,cssModule:i.a.object},f=function(e){var t=e.className,a=e.cssModule,s=e.tag,l=Object(r.a)(e,["className","cssModule","tag"]),i=Object(b.mapToCssModules)(u()(t,"card-title"),a);return o.a.createElement(s,Object(n.a)({},l,{className:i}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},489:function(e,t,a){"use strict";var n=a(15),r=a(20),s=a(0),o=a.n(s),l=a(5),i=a.n(l),c=a(58),u=a.n(c),b=a(80),d={tag:b.tagPropType,className:i.a.string,cssModule:i.a.object},f=function(e){var t=e.className,a=e.cssModule,s=e.tag,l=Object(r.a)(e,["className","cssModule","tag"]),i=Object(b.mapToCssModules)(u()(t,"card-text"),a);return o.a.createElement(s,Object(n.a)({},l,{className:i}))};f.propTypes=d,f.defaultProps={tag:"p"},t.a=f},490:function(e,t,a){"use strict";var n=a(15),r=a(20),s=a(0),o=a.n(s),l=a(5),i=a.n(l),c=a(58),u=a.n(c),b=a(80),d={tag:b.tagPropType,className:i.a.string,cssModule:i.a.object},f=function(e){var t=e.className,a=e.cssModule,s=e.tag,l=Object(r.a)(e,["className","cssModule","tag"]),i=Object(b.mapToCssModules)(u()(t,"card-header"),a);return o.a.createElement(s,Object(n.a)({},l,{className:i}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},510:function(e,t,a){"use strict";var n=a(483),r=a(480),s=a(6);t.a=function(e){return Object(s.jsx)(n.a,{className:"mb-2",children:Object(s.jsxs)(r.a,{sm:"12",className:"ml-50",children:[Object(s.jsx)("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title",children:e.title}),e.link?Object(s.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.subTitle}):Object(s.jsx)("p",{className:"text-primary",children:e.subTitle})]})})}}}]);
//# sourceMappingURL=131.2411a759.chunk.js.map