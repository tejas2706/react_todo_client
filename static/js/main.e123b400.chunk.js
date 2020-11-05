(this.webpackJsonpreact_todo=this.webpackJsonpreact_todo||[]).push([[0],{21:function(e,t){e.exports={apiPrefix:Object({NODE_ENV:"production",PUBLIC_URL:"/react_todo_client",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_PREFIX||"https://secure-oasis-82717.herokuapp.com"}},45:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){},53:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n(0),c=n.n(s),i=n(37),o=n.n(i),r=(n(45),n(46),n(27)),l=n(4),h=n(9),j=n.n(h),d=n(22),u=n(19),b=n(13),p=n(24),O=n(16),m=n(26),x=n(25),g=(n(48),n(21)),f=function(e){Object(m.a)(n,e);var t=Object(x.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).onChange=function(e){e.preventDefault(),a.setState(Object(b.a)({},e.target.name,e.target.value)),console.log(a.state)},a.addnewTask=function(){var e=Object(u.a)(j.a.mark((function e(t){var n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("".concat(g.apiPrefix,"/todo"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:localStorage.getItem("token")},body:JSON.stringify(Object(d.a)(Object(d.a)({},a.state),{},{date:(new Date).toLocaleString()}))});case 3:return n=e.sent,e.next=6,n.json();case 6:(s=e.sent)&&s._id&&a.props.cancel();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={title:"",description:"",priority:""},a}return Object(O.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"newtask__container",children:[Object(a.jsx)("h3",{className:"newtask__title",children:"Create Task"}),Object(a.jsx)("div",{children:Object(a.jsxs)("form",{className:"newtask__form",onSubmit:this.addnewTask,children:[Object(a.jsxs)("label",{children:[Object(a.jsx)("h3",{children:"Title :"}),Object(a.jsx)("input",{type:"text",name:"title",value:this.state.title,onChange:this.onChange,className:"newtask__formLabel"})]}),Object(a.jsxs)("label",{children:[Object(a.jsx)("h3",{children:"Description : "}),Object(a.jsx)("textarea",{type:"text",name:"description",value:this.state.description,onChange:this.onChange,className:"newtask__formLabelDescription"})]}),Object(a.jsxs)("label",{children:[Object(a.jsx)("h3",{children:"Priority : "}),Object(a.jsx)("input",{type:"text",name:"priority",value:this.state.priority,onChange:this.onChange,className:"newtask__formLabel"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:"newtask__submit",children:"Submit"}),Object(a.jsx)("button",{value:"cancel",className:"newtask__submit",onClick:function(){return e.props.cancel()},children:"Cancel"})]})]})})]})}}]),n}(s.Component),_=Object(l.e)(f),v=n(78),N=n(82),k=n(81),C=n(76),w=n(79),y=n(80),S=n(77),T=n(83),L=(n(53),n(34)),P=function(e){Object(m.a)(n,e);var t=Object(x.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).createNew=function(){a.setState({createNew:!0})},a.cancel=function(){a.setState({createNew:!1,loading:!0})},a.deleteTodo=function(){var e=Object(u.a)(j.a.mark((function e(t){var n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(g.apiPrefix,"/todo/").concat(t),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:localStorage.getItem("token")}});case 3:return n=e.sent,e.next=6,n.json();case 6:s=e.sent,L.isEmpty(s)||a.setState({loading:!0}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Home -> componentDidMount -> error",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),a.logout=function(){localStorage.clear(),a.props.history.push("/login")},a.state={todos:[],createNew:!1,loading:!0},a}return Object(O.a)(n,[{key:"componentDidMount",value:function(){this.getTodos()}},{key:"componentDidUpdate",value:function(e,t,n){this.state.loading&&(this.getTodos(),this.setState({loading:!1}))}},{key:"getTodos",value:function(){var e=Object(u.a)(j.a.mark((function e(){var t,n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(t=localStorage.getItem("token"))||this.props.history.push("/login"),e.next=5,fetch("".concat(g.apiPrefix,"/todos"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:t}});case 5:return n=e.sent,e.next=8,n.json();case 8:a=e.sent,L.isEmpty(a)||this.setState({todos:a}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("Home -> getTodos -> error",e.t0);case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{className:"home__container",children:this.state.createNew?Object(a.jsx)(_,{cancel:function(){return e.cancel()}}):Object(a.jsxs)("div",{className:"home__innerContainer",children:[Object(a.jsxs)("div",{className:"home__header",children:[Object(a.jsx)("button",{className:"home__createNewButton",onClick:function(){return e.createNew()},children:"Create Task"}),Object(a.jsxs)("div",{className:"home__accountDetails",children:[Object(a.jsx)(T.a,{className:"home__avatar",onClick:function(){return e.logout}}),Object(a.jsx)("h3",{className:"home__logout",onClick:this.logout,children:"Logout"})]})]}),this.state.todos.length?Object(a.jsx)(C.a,{component:S.a,children:Object(a.jsxs)(v.a,{size:"small","aria-label":"a dense table",children:[Object(a.jsx)(w.a,{className:"home__tablehead",children:Object(a.jsxs)(y.a,{children:[Object(a.jsx)(k.a,{children:"Sr no."}),Object(a.jsx)(k.a,{align:"center",children:"Title"}),Object(a.jsx)(k.a,{align:"center",children:"Description\xa0"}),Object(a.jsx)(k.a,{align:"center",children:"Priority\xa0"}),Object(a.jsx)(k.a,{align:"center",children:"Date\xa0"}),Object(a.jsx)(k.a,{align:"center",children:"Action\xa0"})]})}),Object(a.jsx)(N.a,{children:this.state.todos.map((function(t,n){return Object(a.jsxs)(y.a,{children:[Object(a.jsx)(k.a,{component:"th",scope:"row",children:n+1}),Object(a.jsx)(k.a,{align:"center",children:t.title}),Object(a.jsx)(k.a,{align:"center",children:t.description}),Object(a.jsx)(k.a,{align:"center",children:t.priority}),Object(a.jsx)(k.a,{align:"center",children:t.date}),Object(a.jsx)(k.a,{align:"center",children:Object(a.jsx)("button",{className:"home__delBtn",onClick:function(){return e.deleteTodo(t._id)},children:"Delete"})})]},t._id)}))})]})}):Object(a.jsx)("h3",{children:"No Todos, create new to add todos."})]})})}}]),n}(s.Component),D=Object(l.e)(P),E=(n(55),function(e){Object(m.a)(n,e);var t=Object(x.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).handleChange=function(e){e.target.value.length>12||a.setState((function(t){return{details:Object(d.a)(Object(d.a)({},t.details),{},Object(b.a)({},e.target.name,e.target.value))}}))},a.changeOption=function(e){e!==a.state.selectedOption?a.setState({selectedOption:e}):console.log("Already selected")},a.submit=function(){var e=Object(u.a)(j.a.mark((function e(t){var n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,fetch("".concat(g.apiPrefix,"/").concat(a.state.selectedOption),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(Object(d.a)({},a.state.details))});case 4:return n=e.sent,e.next=7,n.json();case 7:s=e.sent,console.log("Login ->------------ result",s),s&&s.token?(localStorage.setItem("token",s.token),a.props.history.push("/home")):(a.setState({details:{username:"",password:""}}),alert(s.msg)),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.log("Login -> login -> error",e.t0),a.setState({details:{username:"",password:""}});case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),a.state={details:{name:"",username:"",password:""},selectedOption:"login"},a}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{localStorage.getItem("token")&&this.props.history.push("/home")}catch(t){}case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"login__container",children:[Object(a.jsxs)("div",{className:"login__btnGrp",children:[Object(a.jsx)("button",{className:"login__loginsignupBtn",value:"login",onClick:function(){return e.changeOption("login")},children:"LOGIN \xa0\xa0"}),"|",Object(a.jsx)("button",{className:"login__loginsignupBtn",value:"signup",onClick:function(){return e.changeOption("signup")},children:"\xa0\xa0SIGN UP"})]}),Object(a.jsx)("div",{className:"login__line"}),"login"===this.state.selectedOption?Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{className:"login__title",children:"Login"}),Object(a.jsx)("div",{children:Object(a.jsxs)("form",{className:"login__form",onSubmit:this.submit,children:[Object(a.jsxs)("label",{children:[Object(a.jsx)("h2",{children:"Username :"}),Object(a.jsx)("input",{required:!0,type:"text",name:"username",value:this.state.details.username,onChange:this.handleChange,className:"login__formLabel"})]}),Object(a.jsxs)("label",{children:[Object(a.jsx)("h2",{children:"Password :"}),Object(a.jsx)("input",{required:!0,type:"password",name:"password",value:this.state.details.password,onChange:this.handleChange,className:"login__formLabel"})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:"login__submit",children:"Login"})})]})})]}):Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{className:"login__title",children:"Sign Up"}),Object(a.jsx)("div",{children:Object(a.jsxs)("form",{className:"login__form",onSubmit:this.submit,children:[Object(a.jsxs)("label",{children:[Object(a.jsx)("h2",{children:"Name :"}),Object(a.jsx)("input",{required:!0,type:"text",name:"name",value:this.state.details.name,onChange:this.handleChange,className:"login__formLabel"})]}),Object(a.jsxs)("label",{children:[Object(a.jsx)("h2",{children:"Username :"}),Object(a.jsx)("input",{required:!0,type:"text",name:"username",value:this.state.details.username,onChange:this.handleChange,className:"login__formLabel"})]}),Object(a.jsxs)("label",{children:[Object(a.jsx)("h2",{children:"Password :"}),Object(a.jsx)("input",{required:!0,type:"password",name:"password",value:this.state.details.password,onChange:this.handleChange,className:"login__formLabel"})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:"login__submit",children:"Login"})})]})})]})]})}}]),n}(s.Component)),A=Object(l.e)(E);var I=function(){return Object(a.jsxs)(r.a,{basename:"/",children:[Object(a.jsx)(l.a,{exact:!0,path:"/",children:Object(a.jsx)(A,{})}),Object(a.jsx)(l.a,{path:"/login",children:Object(a.jsx)(A,{})}),Object(a.jsx)(l.a,{path:"/home",children:Object(a.jsx)(D,{})})]})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,84)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(I,{})}),document.getElementById("root")),B()}},[[56,1,2]]]);
//# sourceMappingURL=main.e123b400.chunk.js.map