(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{16:function(t,e,s){},28:function(t,e,s){},34:function(t,e,s){"use strict";s.r(e);var n=s(0),c=s(1),i=s.n(c),a=s(21),r=s.n(a),o=(s(28),s(16),s(6)),l=s(7),d=s(9),j=s(8),h=s(13),b=function(t){Object(d.a)(s,t);var e=Object(j.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).updateTasks=function(){var t=0,e=[];for(t=0;t<n.props.children.length;++t)e.push(n.props.children[t].props.children);var s=Math.floor(10*Math.random()+1);n.setState({tasks:e,randomYPosition:s}),console.log("The dismount position y position is "+n.state.randomYPosition+". But num is "+s)},n.componentDidMount=function(){n.updateTasks()},n.state={title:n.props.title,backgroundColor:n.props.color,tasks:[],randomYPosition:0},n}return Object(l.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"Floater",children:[Object(n.jsx)(h.b,{style:{textDecoration:"none",color:"black"},to:{pathname:"/goal",state:{title:this.props.title,tasks:this.state.tasks}},children:Object(n.jsx)("h2",{className:"Title",style:{backgroundColor:"#"+this.state.backgroundColor,transform:"translate(0, "+this.state.randomYPosition+"px)"},children:this.state.title})}),this.state.tasks.map((function(t){return Object(n.jsx)("div",{className:"Task",children:Object(n.jsx)("h2",{children:t})})}))]})}}]),s}(c.Component),p=function(t){Object(d.a)(s,t);var e=Object(j.a)(s);function s(){return Object(o.a)(this,s),e.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("h1",{children:["2021 ",Object(n.jsx)("strong",{children:"Goals"})]}),Object(n.jsxs)("div",{className:"GoalArray",children:[Object(n.jsxs)(b,{className:"GoalSet",title:"Music Tech CEO",color:"AFD8EF",children:[Object(n.jsx)("div",{children:"Read Books"}),Object(n.jsx)("div",{children:"YouTube/Beatstars Asset"}),Object(n.jsx)("div",{children:"CS Degree"}),Object(n.jsx)("div",{children:"Intern/Start-Up"}),Object(n.jsx)("div",{children:"Solo Projects"})]}),Object(n.jsxs)(b,{title:"Critically Acclaimed Performer",color:"F59393",children:[Object(n.jsx)("div",{children:"Strasberg Training"}),Object(n.jsx)("div",{children:"Film Roles"}),Object(n.jsx)("div",{children:"Sing a Lot"}),Object(n.jsx)("div",{children:"Dance a Lot"})]}),Object(n.jsxs)(b,{title:"Music Creator",color:"EBBD87",children:[Object(n.jsx)("div",{children:"Industry Quality Producer"}),Object(n.jsx)("div",{children:"Producer Brand"}),Object(n.jsx)("div",{children:"Vocal Mixing Skills"})]}),Object(n.jsxs)(b,{title:"Financial Freedom",color:"C0EFAF",children:[Object(n.jsx)("div",{children:"Job"}),Object(n.jsx)("div",{children:"Invest"}),Object(n.jsx)("div",{children:"Live Below Means"}),Object(n.jsx)("div",{children:"Scholarships"})]})]})]})}}]),s}(c.Component),u=s(2),O=(c.Component,function(t){Object(d.a)(s,t);var e=Object(j.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).updateSteps=function(){var t=0,e=[];for(t=0;t<n.props.children.length;++t)e.push(n.props.children[t].props.children);n.setState({tasks:e})},n.componentDidMount=function(){n.updateSteps()},n.state={tasks:[]},n}return Object(l.a)(s,[{key:"render",value:function(){return Object(n.jsx)("div",{children:this.state.tasks.map((function(t){return Object(n.jsx)("div",{className:"Task",children:Object(n.jsx)("h2",{children:t})})}))})}}]),s}(c.Component)),x=function(t){Object(d.a)(s,t);var e=Object(j.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).displaySteps=function(){n.setState({displaySteps:!n.state.displaySteps})},n.state={title:n.props.location.state.title,tasks:n.props.location.state.tasks,displaySteps:!1},n}return Object(l.a)(s,[{key:"render",value:function(){var t=this;return console.log("Tasks are "+this.state.tasks+". The type is "+typeof this.state.tasks+". Item 1 in tasks is "+this.state.tasks[0]+"."),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:this.state.title}),Object(n.jsx)("h2",{className:"Task",children:this.state.task}),this.state.tasks.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"Task",children:Object(n.jsx)("h2",{onClick:t.displaySteps.bind(null,!t.state.displaySteps),children:e})}),t.state.displaySteps&&Object(n.jsxs)(O,{className:"Steps",children:[Object(n.jsx)("div",{children:"Hi"}),Object(n.jsx)("div",{children:"Hi"})]})]})}))]})}}]),s}(c.Component);var v=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(h.a,{children:Object(n.jsxs)(u.d,{children:[Object(n.jsx)(u.b,{exact:!0,path:"/",component:p}),Object(n.jsx)(u.b,{exact:!0,path:"/goal",component:x}),Object(n.jsx)(u.b,{component:p}),Object(n.jsx)(u.a,{to:"/404"})]})})})},m=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,35)).then((function(e){var s=e.getCLS,n=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;s(t),n(t),c(t),i(t),a(t)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root")),m()}},[[34,1,2]]]);
//# sourceMappingURL=main.b9077d23.chunk.js.map