(this["webpackJsonpuser-info"]=this["webpackJsonpuser-info"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(3),i=a.n(c),r=(a(12),a(4)),l=a(5),o=a(7),j=a(6),d=(a(13),a(0));var u=function(){return Object(d.jsx)("div",{className:"d-flex justify-content-center loader",children:Object(d.jsx)("div",{className:"spinner-border",role:"status",children:Object(d.jsx)("span",{className:"sr-only",children:"Loading..."})})})};var h=function(e){return Object(d.jsxs)("h4",{className:"card-title",children:["Name: ",e.name]})};var b=function(e){return Object(d.jsxs)("h4",{className:"card-title",children:["User ID: ",e.id]})};var m=function(e){return Object(d.jsxs)("h4",{className:"card-title",children:["Email: ",e.email]})};var p=function(e){return Object(d.jsxs)("ul",{class:"pagination pagination-lg justify-content-center fixed-bottom",children:[Object(d.jsx)("li",{class:"page-item",children:Object(d.jsx)("button",{type:"button",className:"page-link btn-page",onClick:e.prev,children:"Prev"})}),Object(d.jsx)("li",{class:"page-item",children:Object(d.jsx)("button",{type:"button",className:"page-link btn-page",onClick:e.next,children:"Next"})})]})},x=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).apiCall=function(){n.setState({loading:!0}),fetch("https://reqres.in/api/users?page=".concat(n.state.page)).then((function(e){return e.json()})).then((function(e){n.setState({users:e.data,loading:!1})})).catch((function(e){return console.err(e)}))},n.handleNextClick=function(){n.setState({page:n.state.page+1},n.apiCall)},n.handlePrevClick=function(){1!==n.state.page?n.setState({page:n.state.page-1},n.apiCall):n.setState({page:1})},n.state={users:[],page:2,loading:!1},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({loading:!0},this.apiCall)}},{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"full-container",children:[Object(d.jsx)("h1",{children:"U S E R S"}),this.state.loading?Object(d.jsx)(u,{}):Object(d.jsx)("div",{className:"main-container",children:Object(d.jsx)("div",{className:"container mx-auto mt-4",children:Object(d.jsx)("div",{className:"row",children:this.state.users.map((function(e,t){return Object(d.jsx)("div",{className:"col-md-4",children:Object(d.jsxs)("div",{className:"card-users",children:[Object(d.jsx)("img",{className:"user-img",src:e.avatar,alt:"thumbnail"}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)(b,{id:e.id}),Object(d.jsx)(h,{name:e.first_name+" "+e.last_name}),Object(d.jsx)(m,{email:e.email})]})]})},t)}))})})}),Object(d.jsx)(p,{prev:this.handlePrevClick,next:this.handleNextClick})]})})}}]),a}(s.a.Component);i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.682891c5.chunk.js.map