(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{12:function(e,t,s){},25:function(e){e.exports=JSON.parse('{"Music Tech CEO":{"Tasks":{"CS Degree":{"Steps":["Attend All Classes","Clear Agenda Daily","Study Daily","Check NYUClasses For Assignments Every Sunday"],"SMART Goal":"Achieve a 3.5+ GPA by end of Spring 21 semester"},"Intern/Work":{"Steps":["Build Portfolio","Master Javascript/React JS","Practice Front End Exercises","Do Relevant LeetCode","Build at Least 10 Strong Connects","Apply to Jobs Everyday","Focus on Front End Classes","Build 500+ LinkedIn Connections","Blog About REMI"],"SMART Goal":"Earn a part-time front-end development job or full-time internship by September"},"Stellar Portfolio":{"Steps":["Remake Common Projects","Work on JARVIS"],"SMART Goal":"Add 5 Strong Interactive Web Apps"},"Develop SoundGood":{"Steps":["Stay on Top of Software Engineering"],"SMART Goal":"Perfect all assignments in Software Engineering and Design Project"}}},"Critically Acclaimed Performer":{"Tasks":{"Strasberg Training":{"Steps":["Practice Exercises","Watch TV Shows/Movies","Memorize and Master 4 Monologues","Read Plays"],"SMART Goal":""},"Film Roles":{"Steps":["Check Backstage for Roles"],"SMART Goal":""},"Sing a Lot":{"Steps":["Daily Vocal Exercises"],"SMART Goal":""},"Dance a Lot":{"Steps":["Stay At It"],"SMART Goal":""}}},"Music Creator":{"Tasks":{"Top-40 Producer":{"Steps":["Sound Design Tutorials","Reverse Engineer Songs","Type Beat Tutorials","Master Logic Pro X","Lock Vocal Mixing","Read Songwriting Books","Be Mentored"],"SMART Goal":"Get Both Nate Fox and [Andrew Goldstein or Louis Bell] as Summer Mentors"},"Producer Brand":{"Steps":["Post IG Video Weekly","Post Tik Tok Videos 2x A Week","Post 5 Interactive Stories Daily","Go Hard With Matty Beats Management","Throw Contests","Log in Blog Releases"],"SMART Goal":"Gain 100k(Tik Tok) and 10k(Instagram)"},"Vocal Mixing Skills":{"Steps":["Read Engineering Books","Video Tutorials"],"SMART Goal":"Mix 5 Quality Songs"},"Industry Level Up":{"Steps":["Check Email Every Day","Remix and Repost Songwriters through Instagram","Attend Conferences/seminars","Stay In Contact With Contacts","Be Mentored"],"SMART Goal":"Land on New Music Friday, get a publishing deal offer, release at least 10 songs, and produce 2 major artists"}}},"Financial Freedom":{"Tasks":{"Max Streams of Income":{"Steps":["Apply 3 Jobs / Day","Work 20+ Hours a Week","Post Weekly on YouTube","Guitar Lessons","Custom Beats","Secure free LA housing","Get Subletter ASAP"],"SMART Goal":"Raise $3,800 (average case) for the summer and get free housing","Saint Steph(10) Invest(30) Needs(20) LA(40)":""},"Invest":{"Steps":["Index Funds","Learn About More Value Investing","60% of Income In Business and Funds","Stock in Companies I Know"],"SMART Goal":"Get Finance Mentor by June"},"Live Below Means":{"Steps":["LA Housing \u2013\xa040%","Investment \u2013\xa030%","Needs \u2013\xa020%","Saint Steph \u2013\xa010%"],"SMART Goal":""},"Scholarships":{"Steps":["February to April are Prime Months"],"SMART Goal":""}}},"Personal Goals":{"Tasks":{"Good Sleep":{"Steps":["Sleep & Wake at Consistent Times","Control Light Exposure","Exercise Consistently"],"SMART Goal":""},"Personal Fitness":{"Steps":["Workout 3+ Days/Week","Eat 3 Meals a Day","Stock on High Protein"],"SMART Goal":"Gain 10 pounds"},"God":{"Steps":["Gospel Music Nutrition","Attend Church 2x Month","Pray in Thanks & Service"],"SMART Goal":""},"Miina":{"Steps":["Reassure Her Daily","Make Solo Convo Time"],"SMART Goal":""},"Model Form":{"Steps":["Hair: Cut, Braided, Beard Clean","Clothes: Accessorize for Season","Fragrance: Deodorant and Cologne","Body: Build"],"SMART Goal":""}}}}')},37:function(e,t,s){},57:function(e,t,s){"use strict";s.r(t);var n=s(1),o=s(0),a=s.n(o),i=s(18),r=s.n(i),c=(s(37),s(19)),l=(s(12),s(5)),d=s(6),j=s(8),h=s(7),u=s(13),b=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).updateTasks=function(){var e=0,t=[];for(e=0;e<n.props.children.length;++e)t.push(n.props.children[e].props.children);var s=Math.floor(10*Math.random()+1);n.setState({tasks:t,randomYPosition:s})},n.componentDidMount=function(){n.updateTasks()},n.state={title:n.props.title,backgroundColor:n.props.color,tasks:[],randomYPosition:0},n}return Object(d.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"Floater",children:[Object(n.jsx)(u.b,{style:{textDecoration:"none",color:"black"},to:{pathname:"/goal",state:{title:this.props.title,tasks:this.state.tasks}},children:Object(n.jsx)("h2",{className:"Title",style:{backgroundColor:"#"+this.state.backgroundColor,transform:"translate(0, "+this.state.randomYPosition+"px)"},children:this.state.title})}),this.state.tasks.map((function(e){return Object(n.jsx)("div",{className:"Task",children:Object(n.jsx)("h2",{children:e})})}))]})}}]),s}(o.Component),p=s.p+"static/media/Clipboard.23c1b3f7.svg";function O(){return Object(n.jsx)("img",{className:"Icon",src:p,alt:"clipboard text"})}var x=s.p+"static/media/Shuffle Cards.d9c34215.svg";function S(){return Object(n.jsx)("img",{className:"Icon",src:x,alt:"Shuffle Cards Icon"})}function m(){return Object(n.jsxs)("div",{className:"NavbarIcons",children:[Object(n.jsx)("div",{class:"navIcons"}),Object(n.jsx)("div",{class:"navTitle",children:Object(n.jsxs)("h1",{children:["2021",Object(n.jsx)("strong",{children:"Goals"})]})}),Object(n.jsxs)("div",{class:"navIcons",children:[Object(n.jsx)(u.b,{to:{pathname:"/weeklyList"},children:Object(n.jsx)(O,{})}),Object(n.jsx)(u.b,{to:{pathname:"/shuffleTasks"},children:Object(n.jsx)(S,{})})]})]})}var v=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(m,{}),Object(n.jsxs)("div",{className:"GoalArray",children:[Object(n.jsxs)(b,{className:"GoalSet",title:"Music Tech CEO",color:"AFD8EF",children:[Object(n.jsx)("div",{children:"Develop SoundGood"}),Object(n.jsx)("div",{children:"CS Degree"}),Object(n.jsx)("div",{children:"Intern/Work"}),Object(n.jsx)("div",{children:"Stellar Portfolio"})]}),Object(n.jsxs)(b,{title:"Critically Acclaimed Performer",color:"F59393",children:[Object(n.jsx)("div",{children:"Strasberg Training"}),Object(n.jsx)("div",{children:"Film Roles"}),Object(n.jsx)("div",{children:"Sing a Lot"}),Object(n.jsx)("div",{children:"Dance a Lot"})]}),Object(n.jsxs)(b,{title:"Music Creator",color:"EBBD87",children:[Object(n.jsx)("div",{children:"Top-40 Producer"}),Object(n.jsx)("div",{children:"Producer Brand"}),Object(n.jsx)("div",{children:"Vocal Mixing Skills"}),Object(n.jsx)("div",{children:"Industry Level Up"})]}),Object(n.jsxs)(b,{title:"Financial Freedom",color:"C0EFAF",children:[Object(n.jsx)("div",{children:"Max Streams of Income"}),Object(n.jsx)("div",{children:"Invest"}),Object(n.jsx)("div",{children:"Live Below Means"}),Object(n.jsx)("div",{children:"Scholarships"})]}),Object(n.jsxs)(b,{title:"Personal Goals",color:"d1a9d4",children:[Object(n.jsx)("div",{children:"Good Sleep"}),Object(n.jsx)("div",{children:"Personal Fitness"}),Object(n.jsx)("div",{children:"God"}),Object(n.jsx)("div",{children:"Miina"}),Object(n.jsx)("div",{children:"Model Form"})]})]})]})}}]),s}(o.Component),g=s(2),f=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).state={taskName:n.props.children},n}return Object(d.a)(s,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"Step",children:Object(n.jsx)("h2",{children:this.state.taskName})})}}]),s}(o.Component),T=s(25),k=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).displaySteps=function(){n.setState({displaySteps:!n.state.displaySteps}),n.state.displaySteps?console.log("Display on"):console.log("Display off")},n.state={title:n.props.location.state.title,tasks:n.props.location.state.tasks,displaySteps:!1},n}return Object(d.a)(s,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:this.state.title}),Object(n.jsx)("h2",{className:"Task Task_Mobile",children:this.state.task}),this.state.tasks.map((function(t){return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"Task Task_Mobile",children:Object(n.jsx)("h2",{onClick:e.displaySteps.bind(null,!e.state.displaySteps),children:t})}),e.state.displaySteps&&Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{className:"SMARTGoal",children:T[e.state.title].Tasks[t]["SMART Goal"]}),T[e.state.title].Tasks[t].Steps.map((function(e){return Object(n.jsx)(f,{children:e})}))]})]})}))]})}}]),s}(o.Component),y=function(e){var t=e.inputText,s=e.setInputText,o=e.toDos,a=e.setToDos,i=e.setCategory;return Object(n.jsxs)("form",{children:[Object(n.jsx)("input",{onChange:function(e){s(e.target.value)},placeholder:"Enter Task",type:"text"}),Object(n.jsxs)("select",{onChange:function(e){i(e.target.value)},name:"category",size:"5",multiple:!0,children:[Object(n.jsx)("option",{value:"MusicTech",children:"Music Tech"}),Object(n.jsx)("option",{value:"Performance",children:"Performance"}),Object(n.jsx)("option",{value:"MusicCreator",children:"Music Creator"}),Object(n.jsx)("option",{value:"FinancialFreedom",children:"Financial Freedom"}),Object(n.jsx)("option",{value:"Personal",children:"Personal"})]}),Object(n.jsx)("button",{onClick:function(e){e.preventDefault();var s={name:t,completed:!1,id:1e3*Math.random()},n=o.concat(s);localStorage.setItem("lst",n),a(n),console.log("lst parameter",n)},type:"submit",children:"Submit"}),Object(n.jsx)("button",{onClick:function(e){e.preventDefault(),localStorage.clear()},children:"Clear Storage"})]})},M=s(28),C=s.n(M);function A(e){var t=e.item,s=e.toDos,a=e.setToDos,i=(e.categoryColor,Object(o.useState)("")),r=Object(c.a)(i,2);r[0],r[1];return Object(n.jsxs)("div",{className:"toDoItem",children:[Object(n.jsxs)("div",{className:"thirtyThree",children:[Object(n.jsx)("div",{className:"colorBar"}),Object(n.jsx)("li",{children:t.name})]}),Object(n.jsx)("div",{className:"thirtyThree"}),Object(n.jsxs)("div",{className:"thirtyThree",children:[Object(n.jsx)(C.a,{onClick:function(){var e=s.filter((function(e){return e.id!==t.id}));a(e)}}),Object(n.jsx)("button",{className:"checkButton",onClick:function(){var e=s.forEach((function(e){e.id===t.id&&(t.completed=!t.completed)}));console.log(e)}})]})]})}var D=function(e){var t=e.toDos,s=e.setToDos,o=e.categoryColor;return Object(n.jsx)("div",{className:"toDoContainer",children:Object(n.jsx)("ul",{className:"toDoList",children:t.map((function(e){return Object(n.jsx)(A,{item:e,toDos:t,setToDos:s,categoryColor:o})}))})})},G=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).setInputText=function(e){n.setState({inputText:e})},n.setToDos=function(e){localStorage.setItem("lst",JSON.stringify(e)),n.setState({toDoList:JSON.parse(localStorage.getItem("lst")),length:JSON.parse(localStorage.getItem("lst")).length}),console.log("Length of object:",n.state.length)},n.setCategory=function(e){return"MusicCreator"===e?"#EBBD87":"FinancialFreedom"===e?"#C0EFAF":"Performance"===e?"#F59393":"MusicTech"===e?"#AFD8EF":"Personal"===e?"#D1A9D4":void 0},n.state={inputText:"",toDoList:JSON.parse(localStorage.getItem("lst"))||[],length:JSON.parse(localStorage.getItem("lst")).length},n}return Object(d.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Your Weekly Goals"}),Object(n.jsxs)("h3",{children:["Total Tasks: ",this.state.length]}),Object(n.jsx)(y,{inputText:this.state.inputText,setInputText:this.setInputText,toDos:this.state.toDoList,setToDos:this.setToDos,setCategory:this.setCategory}),Object(n.jsx)(D,{item:this.state.inputText,toDos:0!=this.state.toDoList.length?this.state.toDoList:[],setToDos:this.setToDos,categoryColor:this.setCategory()})]})}}]),s}(o.Component),I=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Shuffle Tasks"})})}}]),s}(o.Component),F=s(30),R=s.n(F);function P(){return Object(n.jsxs)("div",{className:"Loader",children:[Object(n.jsx)("h1",{children:"R.E.M.I"}),Object(n.jsx)("div",{className:"Caption",children:"React Engineered Machine Interface"})]})}var N=function(){var e=Object(o.useState)(!1),t=Object(c.a)(e,2),s=t[0],a=t[1];return Object(o.useEffect)((function(){a(!0),setTimeout((function(){a(!1)}),3e3)}),[]),Object(n.jsx)("div",{className:"App",children:s?Object(n.jsxs)("div",{children:[Object(n.jsx)(P,{}),Object(n.jsx)(R.a,{color:"#E584F6",loading:s,size:130})]}):Object(n.jsx)(u.a,{children:Object(n.jsxs)(g.d,{children:[Object(n.jsx)(g.b,{exact:!0,path:"/",component:v}),Object(n.jsx)(g.b,{exact:!0,path:"/goal",component:k}),Object(n.jsx)(g.b,{exact:!0,path:"/weeklyList",component:G}),Object(n.jsx)(g.b,{exact:!0,path:"/shuffleTasks",component:I}),Object(n.jsx)(g.b,{component:v}),Object(n.jsx)(g.a,{to:"/404"})]})})})},L=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,70)).then((function(t){var s=t.getCLS,n=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),n(e),o(e),a(e),i(e)}))};r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(N,{})}),document.getElementById("root")),L()}},[[57,1,2]]]);
//# sourceMappingURL=main.33b4dd1d.chunk.js.map