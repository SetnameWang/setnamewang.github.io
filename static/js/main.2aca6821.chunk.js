(this.webpackJsonpitproject=this.webpackJsonpitproject||[]).push([[0],{14:function(t,n,e){},16:function(t,n,e){"use strict";e.r(n);var i=e(0),o=e.n(i),a=e(6),c=e.n(a),s=(e(14),e(2)),u=e(3),r=e(8),l=e(7),g=e(4),h=e(1),f=e.e(4).then(e.bind(null,166)),L=o.a.lazy((function(){return f})),b=Promise.all([e.e(2),e.e(6)]).then(e.bind(null,167)),j=o.a.lazy((function(){return b})),p=function(t){Object(r.a)(e,t);var n=Object(l.a)(e);function e(){var t;return Object(s.a)(this,e),(t=n.call(this)).state={isLogin:g.a.isLogin()},t}return Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;g.a.on("login",(function(){t.setState({isLogin:!0})})),g.a.on("logout",(function(){t.setState({isLogin:!1})}))}},{key:"render",value:function(){return Object(h.jsx)(o.a.Fragment,{children:Object(h.jsx)(o.a.Suspense,{fallback:"loading",children:this.state.isLogin?Object(h.jsx)(j,{}):Object(h.jsx)(L,{})})})}}]),e}(o.a.Component),k=function(t){t&&t instanceof Function&&e.e(7).then(e.bind(null,169)).then((function(n){var e=n.getCLS,i=n.getFID,o=n.getFCP,a=n.getLCP,c=n.getTTFB;e(t),i(t),o(t),a(t),c(t)}))};c.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root")),k()},4:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var i=e(2),o=e(3),a=new(function(){function t(){Object(i.a)(this,t),this.state={isLogin:!1,token:"",expire:0},this.checkState(),this.recall={onLogin:[],onLogout:[]}}return Object(o.a)(t,[{key:"on",value:function(t,n){switch(t){case"login":this.recall.onLogin.push(n);break;case"logout":this.recall.onLogout.push(n)}}},{key:"onLogin",value:function(){this.recall.onLogin.forEach((function(t,n){t()}))}},{key:"onLogout",value:function(){this.recall.onLogout.forEach((function(t,n){t()}))}},{key:"isLogin",value:function(){return this.state.isLogin}},{key:"checkState",value:function(){var t=localStorage.getItem("loginState");t&&(t=JSON.parse(t),console.debug(t),t.expire<Date.now()?(console.debug("login expire"),this.state={isLogin:!1}):this.state={isLogin:t.isLogin,token:t.token,expire:t.expire})}},{key:"login",value:function(){this.state={isLogin:!0,token:"abc",expire:Date.now()+1e4};var t=JSON.stringify(this.state);localStorage.setItem("loginState",t),this.onLogin()}}]),t}())}},[[16,1,3]]]);
//# sourceMappingURL=main.2aca6821.chunk.js.map