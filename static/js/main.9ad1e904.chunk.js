(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(22),i=n.n(s),c=(n(34),n(23)),o=n(24),l=n(25),h=n(28),u=n(27),d=(n(35),n(36),n(0));var j=function(){return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("h1",{children:"Left Shark Audition Directory"}),Object(d.jsx)("p",{children:Object(d.jsx)("em",{children:"Search everyone who auditioned to be the next Left Shark!"})})]})};n(38);var m=function(e){return Object(d.jsxs)("form",{className:"col-lg-12",children:[Object(d.jsx)("input",{className:"inputField",value:e.search,name:"search",type:"text",placeholder:"Search Employees",onChange:e.handleInputChange}),Object(d.jsx)("button",{className:"btn btn-primary search",onClick:e.handleFormSubmit,children:"Search"})]})};var b=function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("img",{src:e.profilePic,alt:e.firstName+" "+e.lastName})}),Object(d.jsx)("td",{children:e.firstName}),Object(d.jsx)("td",{children:e.lastName}),Object(d.jsx)("td",{children:e.phone}),Object(d.jsx)("td",{children:e.email}),Object(d.jsx)("td",{children:e.age})]})},f=n(63),p=n(26),O=n.n(p),x=function(){return O.a.get("https://randomuser.me/api/?nat=us&results=100&inc=gender,name,email,dob,phone,id,picture")},v=n(64),L=n(10),g=n(7),C=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={employeeList:[],search:"",filteredList:[]},e.handleInputChange=function(t){var n=t.target,r=n.name,a=n.value;e.setState(Object(c.a)({},r,a.toLowerCase()))},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state.employeeList.filter((function(t){return t.name.first.toLowerCase().includes(e.state.search)||t.name.last.toLowerCase().includes(e.state.search)||t.email.toLowerCase().includes(e.state.search)}));e.setState({search:"",filteredList:n})},e.sortFirst=function(t){t.preventDefault();var n=e.state.employeeList.sort((function(e,t){var n=e.name.first.toLowerCase(),r=t.name.first.toLowerCase();return n<r?-1:n>r?1:0}));e.setState({filteredList:n})},e.sortLast=function(t){t.preventDefault();var n=e.state.employeeList.sort((function(e,t){var n=e.name.last.toLowerCase(),r=t.name.last.toLowerCase();return n<r?-1:n>r?1:0}));e.setState({filteredList:n})},e.sortAge=function(t){t.preventDefault();var n=e.state.employeeList.sort((function(e,t){var n=parseInt(e.dob.age),r=parseInt(t.dob.age);return n<r?-1:n>r?1:0}));e.setState({filteredList:n})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;x().then((function(t){return e.setState({employeeList:t.data.results,filteredList:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"main",children:[Object(d.jsx)(j,{}),Object(d.jsx)(m,{search:this.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}),Object(d.jsx)(v.a,{variant:"warning",className:"clearBtn",onClick:function(){return e.setState({filteredList:e.state.employeeList})},children:"Clear Search"}),Object(d.jsxs)(f.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",responsive:"sm",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Profile Pic"}),Object(d.jsxs)("th",{children:["First Name  ",Object(d.jsx)(L.a,{icon:g.a,onClick:this.sortFirst})]}),Object(d.jsxs)("th",{children:["Last Name  ",Object(d.jsx)(L.a,{icon:g.a,onClick:this.sortLast})]}),Object(d.jsx)("th",{children:"Phone Number"}),Object(d.jsx)("th",{children:"Email"}),Object(d.jsxs)("th",{children:["Age  ",Object(d.jsx)(L.a,{icon:g.b,onClick:this.sortAge})]})]})}),Object(d.jsx)("tbody",{children:this.state.filteredList.map((function(e){return Object(d.jsx)(b,{profilePic:e.picture.thumbnail,firstName:e.name.first,lastName:e.name.last,phone:e.phone,email:e.email,age:e.dob.age},e.name.first+e.dob.age)}))})]})]})}}]),n}(r.Component);n(60);var y=function(){return Object(d.jsx)(C,{})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),s(e),i(e)}))};n(61);i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root")),S()}},[[62,1,2]]]);
//# sourceMappingURL=main.9ad1e904.chunk.js.map