(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[183],{2029:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(474),s=c(472),r=c(471),j=c(479),l=c(476),i=c(473),o=c(975),d=c.n(o),u=c(6),b=function(){return Object(u.jsxs)(r.a,{children:[Object(u.jsx)(j.a,{children:Object(u.jsx)(l.a,{tag:"h4",children:"Video"})}),Object(u.jsx)(i.a,{children:Object(u.jsx)(d.a,{url:"http://youtube.com/watch?v=FCPdIvXo2rU",className:"react-player-video",width:"100%",controls:!0})})]})},x=c(10),O=c(540),h=c(463),m=c(992),p=c(683),g=c(230),f=c.n(g),y=function(e){return"0".concat(e).slice(-2)},v=function(e){var t=new Date(1e3*e),c=t.getUTCHours(),n=t.getUTCMinutes(),a=y(t.getUTCSeconds());return c?"".concat(c,":").concat(y(n),":").concat(a):"".concat(n,":").concat(a)},N=function(){Object(n.useEffect)((function(){f.a.highlightAll()}));var e=Object(n.useRef)(null),t="https://soundcloud.com/2ghost/we-will-rock-you",c=Object(n.useState)(t),o=Object(x.a)(c,2),b=o[0],g=o[1],y=Object(n.useState)(!1),N=Object(x.a)(y,2),k=N[0],C=N[1],S=Object(n.useState)(.75),P=Object(x.a)(S,2),F=P[0],w=P[1],M=Object(n.useState)(!1),T=Object(x.a)(M,2),U=T[0],D=T[1],E=Object(n.useState)(0),R=Object(x.a)(E,2),L=R[0],V=R[1],A=Object(n.useState)(0),H=Object(x.a)(A,2),I=H[0],J=H[1],X=Object(n.useState)(0),q=Object(x.a)(X,2),_=q[0],z=q[1],B=Object(n.useState)(null),G=Object(x.a)(B,2),K=G[0],Q=G[1];Object(n.useEffect)((function(){null===b&&function(e){g(e),V(0),J(0)}(t)}));var W=function(e){var t=e.className,c=e.seconds;return Object(u.jsx)("time",{dateTime:"P".concat(Math.round(c),"S"),className:t,children:v(c)})},Y=Object(u.jsx)(W,{seconds:_}),Z=Object(u.jsx)(W,{seconds:_*L}),$=Object(u.jsx)(W,{seconds:_*(1-L)});return Object(u.jsxs)(r.a,{className:"overflow-hidden",children:[Object(u.jsx)(j.a,{children:Object(u.jsx)(l.a,{tag:"h4",children:"Audio"})}),Object(u.jsx)(i.a,{children:Object(u.jsxs)(a.a,{children:[Object(u.jsx)(s.a,{xs:12,children:Object(u.jsx)(d.a,{ref:e,url:b,className:"react-player-audio",width:"500px",height:"290px",playing:k,volume:F,muted:U,onPlay:function(){return C(!0)},onPause:function(){return C(!1)},onSeek:function(e){return console.log("onSeek",e)},onProgress:function(e){K||(V(e.played),J(e.loaded))},onDuration:function(e){return z(e)}})}),Object(u.jsx)(s.a,{xs:12,children:Object(u.jsx)(O.a,{borderless:!0,className:"mt-2",children:Object(u.jsxs)("tbody",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"text-right",children:"Controls"}),Object(u.jsxs)("td",{children:[Object(u.jsx)(h.a,{variant:"primary",outline:!0,onClick:function(){C(!1),g(null)},className:"my-25 mr-50",children:"Stop"}),Object(u.jsx)(h.a,{variant:"primary",outline:!0,onClick:function(){return C(!k)},className:"my-25",children:k?"Pause":"Play"})]})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"text-right",children:"Seek"}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{type:"range",min:0,max:.999999,step:"any",value:L,onMouseDown:function(){return Q(!0)},onChange:function(e){V(parseFloat(e.target.value))},onMouseUp:function(t){Q(!1),e.current.seekTo(parseFloat(t.target.value))}})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"text-right",children:"Volume"}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{type:"range",min:0,max:1,step:"any",value:F,onChange:function(e){return w(parseFloat(e.target.value))}})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"text-right",children:"Muted"}),Object(u.jsx)("td",{children:Object(u.jsx)(m.a,{type:"checkbox",id:"audioMuted",checked:U,onChange:function(){return D(!U)}})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"text-right",children:"Played"}),Object(u.jsx)("td",{children:Object(u.jsx)(p.a,{value:L,max:1})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"text-right",children:"Loaded"}),Object(u.jsx)("td",{children:Object(u.jsx)(p.a,{value:I,max:1})})]})]})})}),Object(u.jsx)(s.a,{xs:12,children:Object(u.jsx)("pre",{className:"language-js",children:Object(u.jsx)("code",{className:"language-js",children:"state={\n  playing: ".concat(k,",\n  volume: ").concat(F.toFixed(2),",\n  played: ").concat(L.toFixed(2),",\n  loaded: ").concat(I.toFixed(2),",\n  duration: ").concat(v(Y.props.seconds),",\n  elapsed: ").concat(v(Z.props.seconds),",\n  remaining: ").concat(v($.props.seconds),"\n}\n")})})})]})})]})},k=c(33),C=c(1871),S=c.n(C),P=function(e){return"0".concat(e).slice(-2)},F=function(e){var t=new Date(1e3*e),c=t.getUTCHours(),n=t.getUTCMinutes(),a=P(t.getUTCSeconds());return c?"".concat(c,":").concat(P(n),":").concat(a):"".concat(n,":").concat(a)},w=function(){Object(n.useEffect)((function(){f.a.highlightAll()}));var e=Object(n.useRef)(null),t="http://youtube.com/watch?v=FCPdIvXo2rU",c=Object(n.useState)(t),o=Object(x.a)(c,2),b=o[0],g=o[1],y=Object(n.useState)(!1),v=Object(x.a)(y,2),N=v[0],C=v[1],P=Object(n.useState)(!1),w=Object(x.a)(P,2),M=w[0],T=w[1],U=Object(n.useState)(.75),D=Object(x.a)(U,2),E=D[0],R=D[1],L=Object(n.useState)(!1),V=Object(x.a)(L,2),A=V[0],H=V[1],I=Object(n.useState)(0),J=Object(x.a)(I,2),X=J[0],q=J[1],_=Object(n.useState)(0),z=Object(x.a)(_,2),B=z[0],G=z[1],K=Object(n.useState)(0),Q=Object(x.a)(K,2),W=Q[0],Y=Q[1],Z=Object(n.useState)(1),$=Object(x.a)(Z,2),ee=$[0],te=$[1],ce=Object(n.useState)(!1),ne=Object(x.a)(ce,2),ae=ne[0],se=ne[1],re=Object(n.useState)(null),je=Object(x.a)(re,2),le=je[0],ie=je[1];Object(n.useEffect)((function(){null===b&&function(e){g(e),q(0),G(0)}(t)}));var oe=function(e){return te(parseFloat(e.target.value))},de=function(e){var t=e.className,c=e.seconds;return Object(u.jsx)("time",{dateTime:"P".concat(Math.round(c),"S"),className:t,children:F(c)})},ue=Object(u.jsx)(de,{seconds:W}),be=Object(u.jsx)(de,{seconds:W*X}),xe=Object(u.jsx)(de,{seconds:W*(1-X)});return Object(u.jsxs)(r.a,{children:[Object(u.jsx)(j.a,{children:Object(u.jsx)(l.a,{tag:"h4",children:"Controlled Video"})}),Object(u.jsx)(i.a,{children:Object(u.jsx)(a.a,{children:Object(u.jsx)(s.a,{xs:12,children:Object(u.jsx)(d.a,{ref:e,url:b,className:"react-player-video",width:"100%",playing:N,controls:M,loop:ae,playbackRate:ee,volume:E,muted:A,onPlay:function(){return C(!0)},onPause:function(){return C(!1)},onEnded:function(){return C(ae)},onProgress:function(e){le||(q(e.played),G(e.loaded))},onDuration:function(e){return Y(e)},config:{youtube:{embedOptions:{"allow-same-origin":!0}}}})})})}),Object(u.jsx)(O.a,{borderless:!0,children:Object(u.jsxs)("tbody",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"text-right",children:"Controls"}),Object(u.jsxs)("td",{children:[Object(u.jsx)(h.a,{color:"primary",outline:!0,onClick:function(){C(!1),g(null)},className:"my-25 mr-50",children:"Stop"}),Object(u.jsx)(h.a,{color:"primary",outline:!0,onClick:function(){return C(!N)},className:"my-25 mr-50",children:N?"Pause":"Play"}),Object(u.jsx)(h.a,{color:"primary",outline:!0,onClick:function(){S.a.request(Object(k.findDOMNode)(e.current))},className:"my-25",children:"Fullscreen"})]})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"text-right",children:"Speed"}),Object(u.jsxs)("td",{children:[Object(u.jsx)(h.a,{color:"primary",outline:!0,onClick:oe,value:1,className:"my-25 mr-50",active:1===ee,children:"1x"}),Object(u.jsx)(h.a,{color:"primary",outline:!0,onClick:oe,value:1.5,className:"my-25 mr-50",active:1.5===ee,children:"1.5x"}),Object(u.jsx)(h.a,{color:"primary",outline:!0,onClick:oe,value:2,active:2===ee,children:"2x"})]})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"text-right",children:"Seek"}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{type:"range",min:0,max:.999999,step:"any",value:X,onMouseDown:function(){return ie(!0)},onChange:function(e){q(parseFloat(e.target.value))},onMouseUp:function(t){ie(!1),e.current.seekTo(parseFloat(t.target.value))}})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"text-right",children:"Volume"}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{type:"range",min:0,max:1,step:"any",value:E,onChange:function(e){return R(parseFloat(e.target.value))}})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"text-right",children:"Controls"}),Object(u.jsx)("td",{children:Object(u.jsx)(m.a,{type:"checkbox",id:"videoControls",checked:M,onChange:function(){T(!M),g(null)}})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"text-right",children:"Muted"}),Object(u.jsx)("td",{children:Object(u.jsx)(m.a,{type:"checkbox",id:"videoMuted",checked:A,onChange:function(){return H(!A)}})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"text-right",children:"Loop"}),Object(u.jsx)("td",{children:Object(u.jsx)(m.a,{type:"checkbox",id:"videoLoop",checked:ae,onChange:function(){return se(!ae)}})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"text-right",children:"Played"}),Object(u.jsx)("td",{children:Object(u.jsx)(p.a,{value:X,max:1})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"text-right",children:"Loaded"}),Object(u.jsx)("td",{children:Object(u.jsx)(p.a,{value:B,max:1})})]})]})}),Object(u.jsx)(i.a,{children:Object(u.jsx)(a.a,{children:Object(u.jsx)(s.a,{xs:12,children:Object(u.jsx)("pre",{className:"language-js",children:Object(u.jsx)("code",{className:"language-js",children:"state={\n  playing: ".concat(N,",\n  volume: ").concat(E.toFixed(2),",\n  played: ").concat(X.toFixed(2),",\n  loaded: ").concat(B.toFixed(2),",\n  duration: ").concat(F(ue.props.seconds),",\n  elapsed: ").concat(F(be.props.seconds),",\n  remaining: ").concat(F(xe.props.seconds),"\n}\n")})})})})})]})},M=c(498);t.default=function(){return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)(M.a,{title:"React Player",subTitle:"React Media Player",link:"https://github.com/CookPete/react-player"}),Object(u.jsxs)(a.a,{children:[Object(u.jsx)(s.a,{sm:"12",children:Object(u.jsx)(b,{})}),Object(u.jsx)(s.a,{sm:"12",children:Object(u.jsx)(w,{})}),Object(u.jsx)(s.a,{sm:"12",children:Object(u.jsx)(N,{})})]})]})}},498:function(e,t,c){"use strict";var n=c(474),a=c(472),s=c(6);t.a=function(e){return Object(s.jsx)(n.a,{className:"mb-2",children:Object(s.jsxs)(a.a,{sm:"12",className:"ml-50",children:[Object(s.jsx)("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title",children:e.title}),e.link?Object(s.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.subTitle}):Object(s.jsx)("p",{className:"text-primary",children:e.subTitle})]})})}}}]);
//# sourceMappingURL=183.618e72a4.chunk.js.map