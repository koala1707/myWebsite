(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,a,t){},107:function(e,a,t){},109:function(e,a,t){},111:function(e,a,t){},113:function(e,a,t){},116:function(e,a,t){"use strict";t.r(a);var n=t(3),l=t.n(n),r=t(35),c=t.n(r),o=(t(63),t(9));var m=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1];return l.a.createElement("div",null,l.a.createElement("h1",null,"Main"),l.a.createElement("button",{onClick:function(){fetch("http://localhost:8090/test").then(function(e){return e.json()}).then(function(e){return e.map(function(e,a){r(e.name),console.log("v: ",e.name)})}),console.log("api: ",t)}},"GetData: ",t))},i=t(36),s=t.n(i),u=(t(65),t(67),t(14)),p=t(13),E=function(){return l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"sidebar-main"},l.a.createElement(u.a,{className:"cdbsidebar"},l.a.createElement(u.c,{className:"csbsider-header",prefix:l.a.createElement("i",{className:"fa fa-bars fa-large"})},l.a.createElement("p",{className:"sidebar-menu"},"Menu")),l.a.createElement(u.b,{className:"csbsidebar-content"},l.a.createElement(u.d,null,l.a.createElement(p.b,{to:"/me"},l.a.createElement(u.e,{icon:"user"},"About me")),l.a.createElement(p.b,{to:"/portfolio"},l.a.createElement(u.e,{icon:"book"},"Portfolio")),l.a.createElement(p.b,{to:"/contact"},l.a.createElement(u.e,{icon:"envelope"},"Contact")))))))};var d=function(){return l.a.createElement("div",{style:{backgroundImage:"url(".concat(s.a,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100vh",width:"100vw"}},l.a.createElement(E,null),l.a.createElement("div",{className:"home-title"},l.a.createElement("div",{className:"vertical"}),l.a.createElement("div",{className:"horizontal"},l.a.createElement("p",null,"Erika Hosokawa"))))},g=(t(105),t(115),t(107),function(e){var a=e.percentage,t=(e.skill,e.bgColor),n=e.level,r={width:"".concat(a,"%"),backgroundColor:t};return l.a.createElement("div",{className:"progressbar-container"},l.a.createElement("div",{className:"progressbar-inline",style:r},l.a.createElement("span",{className:"progressbar-label"},"".concat(n))))}),b=t(28),h=t(48),v=t.n(h),f=t(50),N=t(51),k=t(49),y=t.n(k),C=t(0),S=t(52);var w=function(){var e=Object(C.f)();return l.a.createElement("div",{className:"myself-title"},l.a.createElement("div",{style:{backgroundImage:"url(".concat(y.a,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"28vh",width:"98vw"}},l.a.createElement("h1",null,"Erika Hosokawa"),l.a.createElement("h5",{className:"sub-title"},"Entry Software Engineer")),l.a.createElement("div",{className:"myself-home"},l.a.createElement("div",{className:"left-side"},l.a.createElement("img",{className:"photo",src:v.a}),l.a.createElement("h5",null,"CONTACT"),l.a.createElement("p",null,l.a.createElement(f.a,{className:"icon-size"})," m3tpfbzr@gmail.com"),l.a.createElement("p",null,l.a.createElement(N.a,{className:"icon-size"})," Adelaide, SA Australia"),l.a.createElement("h5",null,"EDUCATION"),l.a.createElement("p",null,"University of South Australia"),l.a.createElement("h6",null,"Bachelor of Information Technology"),l.a.createElement("h6",null,"(Software Development)"),l.a.createElement("h6",null,"February 2020 - November 2022"),l.a.createElement("h5",null,"SKILLS"),l.a.createElement("div",{className:"skill-bar"},[{percentage:40,skill:"ASP.NET",bgColor:"rgb(129, 26, 197)",level:"Experience"},{percentage:35,skill:"C++",bgColor:"rgb(150, 199, 87)",level:"Experience"},{percentage:65,skill:"CSS",bgColor:"rgb(24, 158, 91)",level:"Advanced"},{percentage:50,skill:"Java",bgColor:"rgb(26, 95, 185)",level:"Intermediate"},{percentage:70,skill:"JavaScript",bgColor:"rgb(24, 158, 91)",level:"Advanced"},{percentage:55,skill:"Python",bgColor:"rgb(196, 183, 2)",level:"Advanced"},{percentage:60,skill:"React",bgColor:"rgb(24, 158, 91)",level:"Advanced"},{percentage:55,skill:"Node.js",bgColor:"rgb(24, 158, 91)",level:"Intermediate"},{percentage:45,skill:"AWS",bgColor:"rgb(196, 134, 0)",level:"Intermediate"},{percentage:35,skill:"Docker",bgColor:"rgb(196, 134, 0)",level:"Some Experience"},{percentage:55,skill:"MySQL",bgColor:"rgb(196, 134, 0)",level:"Intermediate"},{percentage:55,skill:"SQL Server",bgColor:"rgb(196, 134, 0)",level:"Intermediate"}].map(function(e,a){return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,e.skill),l.a.createElement(g,{className:"progress-bar",key:a,percentage:e.percentage,bgColor:e.bgColor,level:e.level}))}))),l.a.createElement("div",{className:"right-side"},l.a.createElement("p",{className:"mysummary"}," Experienced an internship in IT industry with collaborating team work and excellent communication skills. Well developed ability to remain calm in stressful situations and mediate positive solutions. Creative and analytical problem solver. Patient, empathic, independent, and willing to learn new skills. AWS and Docker experience. Currently studying Bachelor of Information Technology, majoring in Software Development"),l.a.createElement("h3",null,"Work Experience"),l.a.createElement("h4",null,"AI Travel",l.a.createElement("h7",null,l.a.createElement(b.a,{className:"icon-size"})," July 2022 ~ Current")),l.a.createElement("h5",null,"Responsibilities"),l.a.createElement("p",null,"\u2022 Assist developers to extract data from database using MySQL"),l.a.createElement("p",null,"\u2022 Develop the application on Docker"),l.a.createElement("h5",null,"Achievement"),l.a.createElement("p",null,"\u2022 Created programming to manage programmers\u2019 working hours in google spreadsheet using Google Apps Scripts (GAS)"),l.a.createElement("p",null,"\u2022 Created programming to send AWS services cost to Slack and google spreadsheet. Allowing managers to monitor cost movement every six hours with AWS Lambda in Python. (GAS in JavaScript)"),l.a.createElement("p",null,"\u2022 Created programming to extract data from database in Ruby with MySQL"),l.a.createElement("p",null,"\u2022 Built API using flask and MySQL"),l.a.createElement("h4",null,"NTN Corporation",l.a.createElement("h7",null,l.a.createElement(b.a,{className:"icon-size"})," October 2014 ~ November 2019")),l.a.createElement("h5",null,"Responsibilities"),l.a.createElement("p",null,"\u2022 Manage a couple of junior staff"),l.a.createElement("p",null,"\u2022 Create document for stakeholders with Excel, Word and PowerPoint"),l.a.createElement("h5",null,"Achievement"),l.a.createElement("p",null,"\u2022 Succussed to introduce and install new system to all subsidiaries"),l.a.createElement("p",null,"\u2022 Declared of consumption tax document"),l.a.createElement("h3",null,"Volunteers"),l.a.createElement("p",null,"\u2022 University of South Australia Ultimate Treasurer 2020, 2021, 2022"),l.a.createElement("p",null,"\u2022 University Ambassador 2022"),l.a.createElement("h3",null,"Interest"),l.a.createElement("p",null,"\u2022 Multi Cultures"),l.a.createElement("p",null,"\u2022 Hiking"),l.a.createElement("p",null,"\u2022 Running"),l.a.createElement("p",null,"\u2022 Traveling"),l.a.createElement("div",{className:"home-button"},l.a.createElement("button",{onClick:function(){e("/")}},l.a.createElement(S.a,{className:"home-icon"}),l.a.createElement("p",null," HOME")))),l.a.createElement("div",null)))},A=t(19),x=t(53);t(109);var j=function(){Object(C.f)();var e=Object(n.useState)({company:"",name:"",email:"",phone:"",message:""}),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),m=Object(o.a)(c,2),i=m[0],s=m[1],u=function(e){r(function(a){return Object(x.a)({},a,Object(A.a)({},e.target.name,e.target.value))})};return l.a.createElement("div",{className:"contact"},l.a.createElement("p",{className:"contact-title"},"Contact Me!"),l.a.createElement("div",{className:"contact-container"},l.a.createElement("form",null,l.a.createElement("label",null,"Company"),l.a.createElement("input",{type:"text",placeholder:"Company",name:"company",value:t.company,onChange:u}),l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",placeholder:"Name",name:"name",value:t.name,onChange:u}),l.a.createElement("label",null,"Email Address "),l.a.createElement("input",{type:"text",placeholder:"Email Address",name:"email",value:t.email,onChange:u}),l.a.createElement("label",null,"Phone Number"),l.a.createElement("input",{type:"text",placeholder:"Phone Number",name:"phone",value:t.phone,onChange:u}),l.a.createElement("label",null,"Message"),l.a.createElement("textarea",{className:"message",name:"message",value:t.message,onChange:u})),l.a.createElement("div",null,i),l.a.createElement("button",{onClick:i?function(){""==t.name||t.email?s(!1):(s(!0),fetch("http://localhost:8090/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({eMail:t})}).then(function(e){return e.json()}).then(function(){r({company:"",name:"",email:"",phone:"",message:""})}))}:""},"Submit"),l.a.createElement("div",{className:"sent-email"},i?"Sent your message":"")))};t(111);var O=function(e){return l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("img",{src:e.img,className:"card-image"}),l.a.createElement("h2",{className:"card-title"},e.title),l.a.createElement("p",{className:"card-description"},e.description)),l.a.createElement("a",{href:e.button},l.a.createElement("button",{className:"card-button"},"Go to Repo"))))};t(113);var I=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)(function(){fetch("http://localhost:8090/github-repo").then(function(e){return e.json()}).then(function(e){return e.map(function(e,a){r(function(a){return a.concat(e)})})}),r([])},[]),l.a.createElement("div",{className:"portfolio"},l.a.createElement("div",{className:"wrapper"},t.map(function(e,a){return l.a.createElement(l.a.Fragment,null,l.a.createElement(O,{img:e.image,title:e.title,description:e.description,button:e.github_link}))})))};var T=function(){return l.a.createElement(p.a,null,l.a.createElement(C.c,null,l.a.createElement(C.a,{path:"/test",element:l.a.createElement(m,null)}),l.a.createElement(C.a,{path:"/",element:l.a.createElement(d,null)}),l.a.createElement(C.a,{path:"/me",element:l.a.createElement(w,null)}),l.a.createElement(C.a,{path:"/contact",element:l.a.createElement(j,null)}),l.a.createElement(C.a,{path:"/portfolio",element:l.a.createElement(I,null)})))};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(T,null))},36:function(e,a,t){e.exports=t.p+"static/media/leaf-background.c40b2ea6.png"},48:function(e,a,t){e.exports=t.p+"static/media/matt.da226f4b.jpg"},49:function(e,a,t){e.exports=t.p+"static/media/name-title1.1f3e0dc8.png"},56:function(e,a,t){e.exports=t(116)},63:function(e,a,t){},65:function(e,a,t){},67:function(e,a,t){}},[[56,2,1]]]);
//# sourceMappingURL=main.57251c45.chunk.js.map