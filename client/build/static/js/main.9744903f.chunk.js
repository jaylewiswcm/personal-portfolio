(this["webpackJsonppersonal-portfolio"]=this["webpackJsonppersonal-portfolio"]||[]).push([[0],{42:function(e,s,t){},65:function(e,s,t){"use strict";t.r(s);var c,i,a,n,r,l,o,j=t(0),d=t(1),b=t.n(d),h=t(17),m=t.n(h),u=(t(42),t(3)),p=t(4),x=t(13),O=t(12),g=t(34),f=t(35),v=t(10),w="EXACT_ROUTE_LOCATION",N="FORM_DATA",k="INPUT_ERROR",y={location:""},C={data:{},error:"",isValid:!1},D=Object(O.combineReducers)({exactRouteLocation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,s=arguments.length>1?arguments[1]:void 0,t=s.type,c=s.payload;switch(t){case w:return Object(v.a)(Object(v.a)({},e),{},{location:c});default:return e}},formData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,s=arguments.length>1?arguments[1]:void 0,t=s.type,c=s.payload;switch(t){case N:return Object(v.a)(Object(v.a)({},e),{},{data:c,error:"",isValid:!0});case k:return Object(v.a)(Object(v.a)({},e),{},{data:{},error:c,isValid:!1});default:return e}}}),A=[f.a],L=Object(O.createStore)(D,{},Object(O.compose)(Object(g.composeWithDevTools)(O.applyMiddleware.apply(void 0,A)))),B=t(14),S=function(){var e=Object(d.useState)(),s=Object(B.a)(e,2),t=(s[0],s[1]),i=Object(p.f)();return i.pathname!==c&&(t(i.pathname),console.log("hello")),c=i.pathname,Object(d.useEffect)((function(){t(i.pathname)}),[t]),Object(j.jsx)("header",{children:Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(u.c,{exact:!0,activeClassName:"active",to:"/",children:"home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(u.c,{exact:!0,activeClassName:"active",to:"/projects",children:"projects"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/#about",children:"about"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/#contact",className:"contact-link",children:"contact"})})]})})})},T=function(){return Object(j.jsx)("div",{className:"introduction-container",children:Object(j.jsxs)("div",{className:"title-wrapper",children:[Object(j.jsx)("h1",{children:"Jay Lewis"}),Object(j.jsx)("p",{children:"Front-end Web Developer"})]})})},I=t(11),E=function(){var e,s;return Object(j.jsxs)("div",{className:"projects-container",children:[Object(j.jsxs)("div",{className:"projects-flex",children:[Object(j.jsxs)("li",{className:"dirt-display",children:[Object(j.jsx)("img",{className:"project-name",src:"/assets/project-names/dirt-name.svg",alt:"Dirt"}),Object(j.jsx)("img",{className:"project-photo",src:"/assets/project-photos/dirt@2x.jpg",alt:"Dirt Page"}),Object(j.jsx)("a",{href:"/",className:"project-link",children:Object(j.jsx)("img",{src:"/assets/icons/arrow-left.svg",alt:"Link to project",className:"shake-animation"})}),Object(j.jsxs)("div",{className:"link-container",children:[Object(j.jsx)("a",{href:"https://github.com/JayLewis1/dirt",className:"shake-animation",children:Object(j.jsx)("img",{src:"/assets/icons/github.svg",alt:"Github Link"})}),Object(j.jsx)("a",{href:"http://www.dirtaliceinchains.com/",className:"shake-animation",children:Object(j.jsx)("img",{src:"/assets/icons/website.svg",alt:"Website Link"})})]})]}),Object(j.jsxs)("li",{className:"bouncing-display",children:[Object(j.jsx)("img",{className:"project-name",src:"/assets/project-names/bouncing-name.svg",alt:"Bouncing Borders"}),Object(j.jsx)("img",{className:"project-photo",src:"/assets/project-photos/bouncing-borders@2x.jpg",alt:"Bouncing Borders Page"}),Object(j.jsx)("a",{href:"/",className:"project-link",children:Object(j.jsx)("img",{src:"/assets/icons/arrow-left-pink.svg",alt:"Link to project",className:"shake-animation"})}),Object(j.jsxs)("div",{className:"link-container",children:[Object(j.jsx)("a",(e={href:"https://github.com/JayLewis1/bouncingborderswp",className:"bb-links"},Object(I.a)(e,"className","shake-animation"),Object(I.a)(e,"children",Object(j.jsx)("img",{src:"/assets/icons/github-pink.svg",alt:"Github Link"})),e)),Object(j.jsx)("a",(s={href:"http://bouncingborders.com/",className:"bb-links"},Object(I.a)(s,"className","shake-animation"),Object(I.a)(s,"children",Object(j.jsx)("img",{src:"/assets/icons/website-pink.svg",alt:"Website Link"})),s))]})]})]}),Object(j.jsxs)("div",{className:"projects-flex",children:[Object(j.jsxs)("li",{className:"logic-display",children:[Object(j.jsx)("img",{className:"project-name",src:"/assets/project-names/logic-name.svg",alt:"Logic"}),Object(j.jsx)("img",{className:"project-photo",src:"/assets/project-photos/logic@2x.jpg",alt:"Logic Page"}),Object(j.jsx)("a",{href:"/",className:"project-link",children:Object(j.jsx)("img",{src:"/assets/icons/arrow-left-orange.svg",alt:"Link to project",className:"shake-animation"})}),Object(j.jsxs)("div",{className:"link-container",children:[Object(j.jsx)("a",{href:"https://github.com/JayLewis1/logic-trades",className:"shake-animation",children:Object(j.jsx)("img",{src:"/assets/icons/github-orange.svg",alt:"Github Link"})}),Object(j.jsx)("a",{href:"https://logictrades.herokuapp.com/",className:"shake-animation",children:Object(j.jsx)("img",{src:"/assets/icons/website-orange.svg",alt:"Website Link"})})]})]}),Object(j.jsxs)("li",{className:"see-all-projects",children:[Object(j.jsx)("h5",{children:"See all projects"}),Object(j.jsx)("a",{href:"/",className:"all-projects-link",children:Object(j.jsx)("img",{src:"/assets/icons/arrow-left-blue.svg",alt:"Link to all projects"})}),Object(j.jsxs)("div",{className:"all-projects-images",children:[Object(j.jsx)("img",{className:"pro-1",src:"/assets/project-photos/bouncing-borders@2x.jpg",alt:"Bouncing Borders"}),Object(j.jsx)("img",{className:"pro-2",src:"/assets/project-photos/logic@2x.jpg",alt:"Logic"}),Object(j.jsx)("img",{className:"pro-3",src:"/assets/project-photos/dirt@2x.jpg",alt:"Dirt"})]})]})]})]})},J=function(){var e=function(e,s){var t=document.getElementsByClassName("table-row"),c=s,n=function(){return 0===i||void 0===i?(t[c].setAttribute("id","enlarge-height"),i=1):(t[c].removeAttribute("id"),i=0)};if(void 0!==a)return a===s||(i=0,function(){for(var e=0;e<t.length;e++)"undefined"!==t[e].id&&t[e].removeAttribute("id")}()),n(),a=s,i;n(),a=s};return Object(j.jsxs)(d.Fragment,{children:[Object(j.jsxs)("div",{className:"table-row",children:[Object(j.jsxs)("div",{className:"row-wrapper",children:[Object(j.jsx)("p",{className:"topic",children:"Front-end Development"}),Object(j.jsx)("p",{className:"skill",children:"HTML"}),Object(j.jsx)("button",{onClick:function(s){return e(0,0)},value:"front-end",children:Object(j.jsx)("img",{src:"/assets/icons/down-arrow.svg",alt:"Down Arrow"})})]}),Object(j.jsxs)("ul",{className:"list-of-skills",children:[Object(j.jsx)("li",{children:"HTML"}),Object(j.jsx)("li",{children:"CSS"}),Object(j.jsx)("li",{children:"JavaScript"}),Object(j.jsx)("li",{children:"JQuery"}),Object(j.jsx)("li",{children:"Sass"}),Object(j.jsx)("li",{children:"React"}),Object(j.jsx)("li",{children:"Redux"})]})]}),Object(j.jsxs)("div",{className:"table-row",children:[Object(j.jsxs)("div",{className:"row-wrapper",children:[Object(j.jsx)("p",{className:"topic",children:"Back-end Development"}),Object(j.jsx)("p",{className:"skill",children:"Node.js"}),Object(j.jsx)("button",{onClick:function(s){return e(0,1)},value:"back-end",children:Object(j.jsx)("img",{src:"/assets/icons/down-arrow.svg",alt:"Down Arrow"})})]}),Object(j.jsxs)("ul",{className:"list-of-skills",children:[Object(j.jsx)("li",{children:"Node.js"}),Object(j.jsx)("li",{children:"Express"}),Object(j.jsx)("li",{children:"JavaScript"})]})]}),Object(j.jsxs)("div",{className:"table-row",children:[Object(j.jsxs)("div",{className:"row-wrapper",children:[Object(j.jsx)("p",{className:"topic",children:"Frameworks"}),Object(j.jsx)("p",{className:"skill",children:"React"}),Object(j.jsx)("button",{onClick:function(s){return e(0,2)},value:"frameworks",children:Object(j.jsx)("img",{src:"/assets/icons/down-arrow.svg",alt:"Down Arrow"})})]}),Object(j.jsx)("ul",{className:"list-of-skills",children:Object(j.jsx)("li",{children:"React"})})]}),Object(j.jsxs)("div",{className:"table-row",children:[Object(j.jsxs)("div",{className:"row-wrapper",children:[Object(j.jsx)("p",{className:"topic",children:"Design"}),Object(j.jsx)("p",{className:"skill",children:"Adobe XD"}),Object(j.jsx)("button",{onClick:function(s){return e(0,3)},value:"design",children:Object(j.jsx)("img",{src:"/assets/icons/down-arrow.svg",alt:"Down Arrow"})})]}),Object(j.jsxs)("ul",{className:"list-of-skills",children:[Object(j.jsx)("li",{children:"Adobe XD"}),Object(j.jsx)("li",{children:"Adobe Illustrator"})]})]}),Object(j.jsxs)("div",{className:"table-row",children:[Object(j.jsxs)("div",{className:"row-wrapper",children:[Object(j.jsx)("p",{className:"topic",children:"Version Control"}),Object(j.jsx)("p",{className:"skill",children:"Github"}),Object(j.jsx)("button",{onClick:function(s){return e(0,4)},value:"version",children:Object(j.jsx)("img",{src:"/assets/icons/down-arrow.svg",alt:"Down Arrow"})})]}),Object(j.jsx)("ul",{className:"list-of-skills",children:Object(j.jsx)("li",{children:"Github"})})]}),Object(j.jsxs)("div",{className:"table-row",children:[Object(j.jsxs)("div",{className:"row-wrapper",children:[Object(j.jsx)("p",{className:"topic",children:"Database"}),Object(j.jsx)("p",{className:"skill",children:"MongoDB"}),Object(j.jsx)("button",{onClick:function(s){return e(0,5)},value:"database",children:Object(j.jsx)("img",{src:"/assets/icons/down-arrow.svg",alt:"Down Arrow"})})]}),Object(j.jsxs)("ul",{className:"list-of-skills",children:[Object(j.jsx)("li",{children:"MongoDB"}),Object(j.jsx)("li",{children:"Mongoose"})]})]})]})},M=function(){var e=function(e,s){var t=document.getElementsByClassName("table-row"),c=s,i=function(){return 0===n||void 0===n?(1===c||2===c?t[c].setAttribute("id","enlarge-height-edu"):t[c].setAttribute("id","enlarge-height-exp"),n=1):(t[c].removeAttribute("id"),n=0)};if(void 0!==r)return r===s||(n=0,function(){for(var e=0;e<t.length;e++)"undefined"!==t[e].id&&t[e].removeAttribute("id")}()),i(),r=s,n;i(),r=s};return Object(j.jsxs)(d.Fragment,{children:[Object(j.jsxs)("div",{className:"table-row",children:[Object(j.jsxs)("div",{className:"row-wrapper",children:[Object(j.jsxs)("span",{className:"left-wrapper",children:[Object(j.jsx)("p",{className:"school",children:"Specsavers"}),Object(j.jsx)("p",{className:"date",children:"November 2019 \u2013 July 2020"})]}),Object(j.jsx)("p",{className:"course",children:"Clinical Assistant"}),Object(j.jsx)("button",{onClick:function(s){return e(0,0)},children:Object(j.jsx)("img",{src:"/assets/icons/down-arrow.svg",alt:"Down Arrow"})})]}),Object(j.jsx)("div",{}),Object(j.jsxs)("div",{className:"course-info",children:[Object(j.jsx)("p",{children:"Being in a role solely focused on the customer has opened up my knowledge and developed my skills massively when it comes to customers. "}),Object(j.jsx)("p",{children:"The role included many jobs which increased over the period of time working here through training and the amount of effort I put in. This gave me the ability to adapt to different roles due to many different types of jobs that had to be done in a day for example throughout the day I might have to arrive a patient in, preform a pretest to then finding the customers needs and preferences and finally advising them and fitting a pair of glasses. "}),Object(j.jsx)("p",{children:"Throughout the job role I would learn different topics and new things to better my performance in the job role and then eventually became a massive asset to the team on sales and also customer experience."}),Object(j.jsx)("p",{children:"I also created bonds with many of my colleagues here and became a positive asset to the team."})]})]}),Object(j.jsxs)("div",{className:"table-row",children:[Object(j.jsxs)("div",{className:"row-wrapper",children:[Object(j.jsxs)("span",{className:"left-wrapper",children:[Object(j.jsx)("p",{className:"school",children:"The Crafty Half / Hyde Park Pub "}),Object(j.jsx)("p",{className:"date",children:"January \u2013 June 2019"})]}),Object(j.jsx)("p",{className:"course",children:"Bartender"}),Object(j.jsx)("button",{onClick:function(s){return e(0,1)},children:Object(j.jsx)("img",{src:"/assets/icons/down-arrow.svg",alt:"Down Arrow"})})]}),Object(j.jsx)("div",{}),Object(j.jsxs)("div",{className:"course-info",children:[Object(j.jsx)("p",{children:"This role presented me face to face with customers where I had to be behind the bar taking orders, holding conversations and making sure the customer "}),Object(j.jsx)("p",{children:"The bar had to be kept at a high standard of cleanliness, professionalism while obtaining a certain atmosphere. Some shifts I was the only member staff working so had to keep these stands up by myself which gave me responsibility and developed my professionalism."})]})]}),Object(j.jsxs)("div",{className:"table-row",children:[Object(j.jsxs)("div",{className:"row-wrapper",children:[Object(j.jsxs)("span",{className:"left-wrapper",children:[Object(j.jsx)("p",{className:"school",children:"Pertemps, Coldcall"}),Object(j.jsx)("p",{className:"date",children:"June \u2013 September 2018"})]}),Object(j.jsx)("p",{className:"course",children:"Delivery Driver"}),Object(j.jsx)("button",{onClick:function(s){return e(0,2)},children:Object(j.jsx)("img",{src:"/assets/icons/down-arrow.svg",alt:"Down Arrow"})})]}),Object(j.jsx)("div",{}),Object(j.jsxs)("div",{className:"course-info",children:[Object(j.jsx)("p",{children:"My responsibilities within this role included delivering products to different Tesco petrol stations. I developed time management skills due to having to deliver the product at the slotted time."}),Object(j.jsx)("p",{children:"This role was my first experience interacting with customers although it wasn\u2019t a customer service roll. This helped to initially develop customer understanding skills."}),Object(j.jsx)("p",{children:"Not too long into the role I was given more responsibility where I had to do a unique route which included picking up food samples from factories and taking them to lab for testing."})]})]}),Object(j.jsxs)("div",{className:"table-row",children:[Object(j.jsxs)("div",{className:"row-wrapper",children:[Object(j.jsxs)("span",{className:"left-wrapper",children:[Object(j.jsx)("p",{className:"school",children:"Mamma Mia Restaurant "}),Object(j.jsx)("p",{className:"date",children:"November 2012 - August 2017"})]}),Object(j.jsx)("p",{className:"course",children:"Sous Chef"}),Object(j.jsx)("button",{onClick:function(s){return e(0,3)},children:Object(j.jsx)("img",{src:"/assets/icons/down-arrow.svg",alt:"Down Arrow"})})]}),Object(j.jsx)("div",{}),Object(j.jsxs)("div",{className:"course-info",children:[Object(j.jsx)("p",{children:"At the age of 15 I was keen and intrigued to see what the working world was like so I threw myself into a part-time job. This is where my work ethic, ethos and whole attitude towards work began and further developed through the years working at this restaurant. "}),Object(j.jsx)("p",{children:"Initially my job role was Kitchen Porter this involved me carrying out washing and cleaning tasks. I developed a keen work ethic and a selection of skills such as organisation, time management and team working throughout this job role. I also created strong relationships with my colleagues that I still have to this day."}),Object(j.jsx)("p",{children:"I transitioned into the Sous Chef role after 1-2 years of working at the restaurant due to the owners seeing potential in me. This job role developed new skills such as working under pressure due to being in the middle of a fast paced kitchen with the duty of making sure every dish comes out on time and having to coordinate the kitchen staff to make sure dishes come out together. This would develop my organisation, coordinating and communication skills."}),Object(j.jsx)("p",{children:"I attained more responsibility throughout this role, for example I was given the keys and had to open the restaurant up frequently."})]})]})]})},W=function(){var e=function(e,s){var t=document.getElementsByClassName("table-row"),c=s,i=function(){return 0===l||void 0===l?(2!==c?t[c].setAttribute("id","enlarge-height-edu"):t[c].setAttribute("id","enlarge-height-larger"),l=1):(t[c].removeAttribute("id"),l=0)};if(void 0!==o)return o===s||(l=0,function(){for(var e=0;e<t.length;e++)"undefined"!==t[e].id&&t[e].removeAttribute("id")}()),i(),o=s,l;i(),o=s};return Object(j.jsxs)(d.Fragment,{children:[Object(j.jsxs)("div",{className:"table-row",children:[Object(j.jsxs)("div",{className:"row-wrapper",children:[Object(j.jsxs)("span",{className:"left-wrapper",children:[Object(j.jsx)("p",{className:"school",children:"Plymouth University"}),Object(j.jsx)("p",{className:"date",children:"September 2016 - September 2019"})]}),Object(j.jsx)("p",{className:"course",children:"Internet Design BA Hons : 2:1"}),Object(j.jsx)("button",{onClick:function(s){return e(0,0)},children:Object(j.jsx)("img",{src:"/assets/icons/down-arrow.svg",alt:"Down Arrow"})})]}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{className:"course-info",children:Object(j.jsx)("p",{children:"The role included many jobs which increased over the period of time working here through training and the amount of effort I put in. This gave me the ability to adapt to different roles due to many different types of jobs that had to be done in a day for example throughout the day I might have to arrive a patient in, preform a pretest to then finding the customers needs and preferences and finally advising them and fitting a pair of glasses. "})})]}),Object(j.jsxs)("div",{className:"table-row",children:[Object(j.jsxs)("div",{className:"row-wrapper",children:[Object(j.jsxs)("span",{className:"left-wrapper",children:[Object(j.jsx)("p",{className:"school",children:"Chepstow School Sixth Form - A Level"}),Object(j.jsx)("p",{className:"date",children:"September 2014 - August 2016"})]}),Object(j.jsx)("p",{className:"course",children:"Business Studies : B"}),Object(j.jsx)("button",{onClick:function(s){return e(0,1)},children:Object(j.jsx)("img",{src:"/assets/icons/down-arrow.svg",alt:"Down Arrow"})})]}),Object(j.jsx)("div",{}),Object(j.jsxs)("ul",{className:"list-of-grades",children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("p",{children:"Business Studies"})," ",Object(j.jsx)("p",{className:"grade",children:"B"})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("p",{children:"ICT"})," ",Object(j.jsx)("p",{className:"grade",children:"C"})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("p",{children:"Welsh Baccalaureate"})," ",Object(j.jsx)("p",{className:"grade",children:"B"})]})]})]}),Object(j.jsxs)("div",{className:"table-row",children:[Object(j.jsxs)("div",{className:"row-wrapper",children:[Object(j.jsxs)("span",{className:"left-wrapper",children:[Object(j.jsx)("p",{className:"school",children:"Chepstow School - GCSE"}),Object(j.jsx)("p",{className:"date",children:"September 2009 - August 2016"})]}),Object(j.jsx)("p",{className:"course",children:"English Language : B"}),Object(j.jsx)("button",{onClick:function(s){return e(0,2)},children:Object(j.jsx)("img",{src:"/assets/icons/down-arrow.svg",alt:"Down Arrow"})})]}),Object(j.jsx)("div",{}),Object(j.jsxs)("ul",{className:"list-of-grades",children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("p",{children:"English Language"})," ",Object(j.jsx)("p",{className:"grade",children:"B"})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("p",{children:"English Literature"})," ",Object(j.jsx)("p",{className:"grade",children:"C"})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("p",{children:"Math"})," ",Object(j.jsx)("p",{className:"grade",children:"B"})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("p",{children:"Science"})," ",Object(j.jsx)("p",{className:"grade",children:"C"})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("p",{children:"Business Studies"})," ",Object(j.jsx)("p",{className:"grade",children:"B"})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("p",{children:"Resistant Materials"})," ",Object(j.jsx)("p",{className:"grade",children:"A"})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("p",{children:"History"})," ",Object(j.jsx)("p",{className:"grade",children:"D"})]})]})]})]})},F=function(){var e=Object(d.useState)("skills"),s=Object(B.a)(e,2),t=s[0],c=s[1],i=function(e){var s=e.target.value;c(s)};return Object(j.jsxs)("div",{className:"about-container",id:"about",children:[Object(j.jsxs)("ul",{className:"table-header-buttons",children:[Object(j.jsx)("li",{children:Object(j.jsx)("button",{value:"skills",onClick:function(e){return i(e)},className:"skills"===t?"btnSelected":void 0,children:"Skills"})}),Object(j.jsx)("li",{children:Object(j.jsx)("button",{value:"workexp",onClick:function(e){return i(e)},className:"workexp"===t?"btnSelected":void 0,children:"Work Experience"})}),Object(j.jsx)("li",{children:Object(j.jsx)("button",{value:"education",onClick:function(e){return i(e)},className:"education"===t?"btnSelected":void 0,children:"Education"})})]}),Object(j.jsxs)("div",{className:"table",children:["skills"===t&&Object(j.jsx)(J,{}),"workexp"===t&&Object(j.jsx)(M,{}),"education"===t&&Object(j.jsx)(W,{})]})]})},R=function(){return Object(j.jsxs)("div",{className:"interests-container",children:[Object(j.jsx)("h3",{className:"hobbies-title-mobile",children:"Hobbies"}),Object(j.jsxs)("div",{className:"interests-grid",children:[Object(j.jsx)("li",{className:"row-1",children:Object(j.jsx)("img",{className:"bounce",src:"/assets/icons/interests/pasta.svg",alt:"Pasta"})}),Object(j.jsx)("li",{className:"row-2",children:Object(j.jsx)("img",{className:"shake",src:"/assets/icons/interests/guitar.svg",alt:"Guitar"})}),Object(j.jsx)("li",{className:"row-2",children:Object(j.jsx)("img",{className:"shake",src:"/assets/icons/interests/controller.svg",alt:"Controller"})}),Object(j.jsx)("li",{className:"row-3",children:Object(j.jsx)("img",{className:"bounce",src:"/assets/icons/interests/camping.svg",alt:"Camping"})}),Object(j.jsx)("li",{className:"row-3 hobbies-title",children:Object(j.jsx)("h3",{children:"Hobbies"})}),Object(j.jsx)("li",{className:"row-3",children:Object(j.jsx)("img",{className:"shake",src:"/assets/icons/interests/beer.svg",alt:"Beer"})}),Object(j.jsx)("li",{className:"row-2",children:Object(j.jsx)("img",{className:"shake",src:"/assets/icons/interests/hiking.svg",alt:"Hiking"})}),Object(j.jsx)("li",{className:"row-2",children:Object(j.jsx)("img",{className:"bounce",src:"/assets/icons/interests/movies.svg",alt:"Movies"})}),Object(j.jsx)("li",{className:"row-1",children:Object(j.jsx)("img",{className:"shake",src:"/assets/icons/interests/travelling.svg",alt:"Travelling"})})]})]})},q=t(36),P=t.n(q),G=Object(x.b)((function(e){return{handledFormData:e}}),{handleFormDataWithNodemailer:function(e){return function(s){var t=e.name,c=e.email,i=e.message,a={name:"",email:"",message:""};t||(a.name="Name field must not be left blank"),c||(a.email="Email field must not be left blank"),i||(a.message="Message field must not be left blank"),t&&t.length<3&&(a.name="Name should be longer than 2 characters"),c&&c.length<=8&&(a.email="Email should be longer than 8 characters"),i&&i.length<=10&&(a.message="Message should be longer than 10 characters"),""===a.name&&""===a.email&&""===a.message?(s({type:N,payload:e}),P.a.post("/api/nodemailer",e).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))):s({type:k,payload:a})}}})((function(e){var s,t=e.handleFormDataWithNodemailer,c=e.handledFormData,i=Object(d.useState)(2),a=Object(B.a)(i,2),n=a[0],r=a[1],l=Object(d.useState)([]),o=Object(B.a)(l,2),b=o[0],h=o[1],m=Object(d.useState)("no"),u=Object(B.a)(m,2),p=(u[0],u[1]);Object(d.useEffect)((function(){var e=setTimeout((function(){p("set")}),5e3);return function(){return clearTimeout(e)}}),[p]),n;var x=function(e){r(e);var s=document.createElement("textarea");switch(e){case 0:s.value="07592832146";break;case 1:s.value="jr_lewis@outlook.com"}document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s)},O=function(e){h(Object(v.a)(Object(v.a)({},b),{},Object(I.a)({},e.target.name,e.target.value)))},g=c.formData.error.name,f=c.formData.error.email,w=c.formData.error.message;return Object(j.jsxs)("div",{className:"contact-container",id:"contact",children:[Object(j.jsx)("h3",{children:"Get in Contact"}),Object(j.jsx)("div",{className:"contact-details",children:Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{className:"number",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:"/assets/icons/contact/phone.svg",alt:"Phone Number"}),Object(j.jsx)("p",{children:"07592832146"}),Object(j.jsx)("button",{onClick:function(){return x(0)},children:Object(j.jsx)("img",{src:"/assets/icons/copy.svg",alt:"copy"})})]}),Object(j.jsxs)("span",{className:0===n?"showCopied":null,children:[Object(j.jsx)("p",{children:"\ud83d\udc4d"}),Object(j.jsx)("p",{children:"Copied!"})]})]}),Object(j.jsxs)("li",{className:"email",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:"/assets/icons/contact/email.svg",alt:"Email Address"}),Object(j.jsx)("p",{children:"Jr_lewis@outlook.com"}),Object(j.jsx)("button",{onClick:function(){return x(1)},children:Object(j.jsx)("img",{src:"/assets/icons/copy.svg",alt:"copy"})})]}),Object(j.jsxs)("span",{className:1===n?"showCopied":null,children:[Object(j.jsx)("p",{children:"\ud83d\udc4d"}),Object(j.jsx)("p",{children:"Copied!"})]})]}),Object(j.jsx)("li",{className:"LinkedIn",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:"/assets/icons/contact/linkedin.svg",alt:"LinkedIn"}),Object(j.jsx)("p",{children:"jaylewis98"}),Object(j.jsx)("a",{href:"https://www.linkedin.com/in/jaylewis98/",target:"_blank",children:Object(j.jsx)("img",{src:"/assets/icons/blue-arrow.svg",alt:"Go to linkedIn"})})]})})]})}),Object(j.jsx)("div",{className:"form-container",children:Object(j.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(b)}(e)},children:[Object(j.jsxs)("span",{children:[Object(j.jsxs)("span",{className:"label-flex",children:[Object(j.jsx)("label",{htmlFor:"name",children:"Name"}),Object(j.jsx)("p",{children:"*"})]}),Object(j.jsx)("input",(s={className:"success",type:"text",id:"name",placeholder:"John Smith",name:"name"},Object(I.a)(s,"className",g?"error":b.name?"success":null),Object(I.a)(s,"onChange",(function(e){return O(e)})),s)),g&&Object(j.jsxs)("p",{className:"error-msg",children:[" ",g," "]})]}),Object(j.jsxs)("span",{children:[Object(j.jsxs)("span",{className:"label-flex",children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email"}),Object(j.jsx)("p",{children:"*"})]}),Object(j.jsx)("input",{type:"text",id:"email",placeholder:"Johnsmith@email.com",name:"email",className:f?"error":b.email?"success":null,onChange:function(e){return O(e)}}),f&&Object(j.jsxs)("p",{className:"error-msg",children:[" ",f," "]})]}),Object(j.jsxs)("span",{children:[Object(j.jsx)("span",{className:"label-flex",children:Object(j.jsx)("label",{htmlFor:"company",children:"Company"})}),Object(j.jsx)("input",{type:"text",id:"company",placeholder:"JohnSmithLtd",name:"company",className:b.company?"success":null,onChange:function(e){return O(e)}})]}),Object(j.jsxs)("span",{children:[Object(j.jsxs)("span",{className:"label-flex",children:[Object(j.jsx)("label",{htmlFor:"message",children:"Message"}),Object(j.jsx)("p",{children:"*"})]}),Object(j.jsx)("textarea",{type:"text",id:"message",placeholder:"Hi Jay, just wanted to get in contact with you ...",name:"message",className:w?"error":b.message?"success":null,onChange:function(e){return O(e)}}),w&&Object(j.jsxs)("p",{className:"error-msg",children:[" ",w," "]})]}),Object(j.jsx)("input",{type:"submit",value:"Send Message",id:"submit"})]})})]})})),H=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(T,{}),Object(j.jsx)(E,{}),Object(j.jsx)(F,{}),Object(j.jsx)(R,{}),Object(j.jsx)(G,{})]})},_=Object(x.b)(null,{setRouteLocation:function(e){return function(s){s({type:w,payload:e})}}})((function(e){var s=e.setRouteLocation,t=Object(p.f)().pathname;return Object(d.useEffect)((function(){s(t)}),[s,t]),Object(j.jsxs)("div",{className:"portfolio-container",children:[Object(j.jsx)("h3",{children:"My Portfolio"}),Object(j.jsxs)("ul",{className:"portfolio-grid",children:[Object(j.jsx)("li",{children:Object(j.jsx)(u.b,{to:"/projects/dirt",children:Object(j.jsx)("img",{src:"/assets/project-photos/dirt@2x.jpg",alt:"Dirt Website"})})}),Object(j.jsx)("li",{children:Object(j.jsx)(u.b,{to:"/projects/bouncingborders",children:Object(j.jsx)("img",{src:"/assets/project-photos/bouncing-borders@2x.jpg",alt:"Bouncing Borders Website"})})}),Object(j.jsx)("li",{children:Object(j.jsx)(u.b,{to:"/projects/logic",children:Object(j.jsx)("img",{src:"/assets/project-photos/logic@2x.jpg",alt:"Logic Website"})})})]})]})})),V=function(){return Object(d.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(j.jsxs)("div",{className:"project-container",children:[Object(j.jsx)("div",{className:"backbtn",children:Object(j.jsx)(u.b,{to:"/projects",children:Object(j.jsx)("img",{src:"/assets/icons/arrow-left-blue.svg",alt:"Back to projects"})})}),Object(j.jsx)("div",{className:"photo-container",children:Object(j.jsx)("img",{className:"project-photo",src:"/assets/project-photos/dirt@2x.jpg",alt:"Bouncing Dirt Website"})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Dirt"}),Object(j.jsxs)("span",{className:"link-container",children:[Object(j.jsx)("a",{href:"https://github.com/JayLewis1/dirt",children:Object(j.jsx)("img",{src:"/assets/icons/github-blue.svg",alt:"Github Link"})}),Object(j.jsx)("a",{href:"http://www.dirtaliceinchains.com/",children:Object(j.jsx)("img",{src:"/assets/icons/website-blue.svg",alt:"Website Link"})})]}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend, risus ac ullamcorper scelerisque, libero ipsum aliquam turpis, ac dapibus velit nisl eu magna. Duis sit amet magna ac risus gravida vehicula eget vel nibh. Morbi diam nisl, placerat et consequat eu, volutpat at velit. Curabitur lacus felis, tempus eget mauris vel, eleifend tempus nibh. Nulla in fringilla diam, sed luctus ligula. Duis maximus nisl risus, id elementum mi convallis eget. Aliquam ac blandit urna, in eleifend ex. Nulla facilisi. "}),Object(j.jsxs)(u.b,{to:"/projects",className:"mobile-backbtn",children:[Object(j.jsx)("img",{src:"/assets/icons/arrow.svg",alt:"back arrow"}),"Back to projects"]})]})]})},U=function(){return Object(d.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(j.jsxs)("div",{className:"project-container",children:[Object(j.jsx)("div",{className:"backbtn",children:Object(j.jsx)(u.b,{to:"/projects",children:Object(j.jsx)("img",{src:"/assets/icons/arrow-left-blue.svg",alt:"Back to projects"})})}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:"project-photo",src:"/assets/project-photos/bouncing-borders@2x.jpg",alt:"Bouncing Borders Website"})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Bouncing Borders"}),Object(j.jsxs)("span",{className:"link-container",children:[Object(j.jsx)("a",{href:"https://github.com/JayLewis1/Portfolio",children:Object(j.jsx)("img",{src:"/assets/icons/github-blue.svg",alt:"Github Link"})}),Object(j.jsx)("a",{href:"/",children:Object(j.jsx)("img",{src:"/assets/icons/website-blue.svg",alt:"Website Link"})})]}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend, risus ac ullamcorper scelerisque, libero ipsum aliquam turpis, ac dapibus velit nisl eu magna. Duis sit amet magna ac risus gravida vehicula eget vel nibh. Morbi diam nisl, placerat et consequat eu, volutpat at velit. Curabitur lacus felis, tempus eget mauris vel, eleifend tempus nibh. Nulla in fringilla diam, sed luctus ligula. Duis maximus nisl risus, id elementum mi convallis eget. Aliquam ac blandit urna, in eleifend ex. Nulla facilisi. "})]})]})},X=function(){return Object(d.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(j.jsxs)("div",{className:"project-container",children:[Object(j.jsx)("div",{className:"backbtn",children:Object(j.jsx)(u.b,{to:"/projects",children:Object(j.jsx)("img",{src:"/assets/icons/arrow-left-blue.svg",alt:"Back to projects"})})}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:"project-photo",src:"/assets/project-photos/logic@2x.jpg",alt:"Bouncing Borders Website"})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Logic Trades"}),Object(j.jsxs)("span",{className:"link-container",children:[Object(j.jsx)("a",{href:"https://github.com/JayLewis1/logic-trades",children:Object(j.jsx)("img",{src:"/assets/icons/github-blue.svg",alt:"Github Link"})}),Object(j.jsx)("a",{href:"https://logictrades.herokuapp.com/",children:Object(j.jsx)("img",{src:"/assets/icons/website-blue.svg",alt:"Website Link"})})]}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend, risus ac ullamcorper scelerisque, libero ipsum aliquam turpis, ac dapibus velit nisl eu magna. Duis sit amet magna ac risus gravida vehicula eget vel nibh. Morbi diam nisl, placerat et consequat eu, volutpat at velit. Curabitur lacus felis, tempus eget mauris vel, eleifend tempus nibh. Nulla in fringilla diam, sed luctus ligula. Duis maximus nisl risus, id elementum mi convallis eget. Aliquam ac blandit urna, in eleifend ex. Nulla facilisi. "})]})]})},K=Object(x.b)((function(e){return{route:e.exactRouteLocation}}))((function(e){e.route;return Object(j.jsxs)("div",{className:"footer",children:[Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"Top"})}),Object(j.jsx)("li",{children:Object(j.jsx)(u.c,{exact:!0,activeClassName:"footerActive",to:"/",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(u.c,{exact:!0,activeClassName:"footerActive",to:"/projects",children:"Projects"})}),Object(j.jsx)("li",{children:Object(j.jsx)(u.c,{to:"/#about",children:"About"})}),Object(j.jsx)("li",{children:Object(j.jsx)(u.c,{to:"/#contact",children:"Contact"})})]})}),Object(j.jsxs)("p",{children:["Site designed and developed by myself ",Object(j.jsx)("span",{children:"Jay Lewis"}),"."]}),Object(j.jsxs)("span",{className:"github-wrapper",children:[Object(j.jsx)("img",{src:"/assets/icons/github-blue.svg",alt:"github"}),Object(j.jsxs)("p",{children:["You can check out the code for this site ",Object(j.jsx)("a",{href:"/",children:"here"})," \ud83d\ude00"]})]}),Object(j.jsx)("span",{className:"flaticon-ref",children:Object(j.jsxs)("p",{children:["Icons made by",Object(j.jsx)("a",{href:"https://www.flaticon.com/authors/freepik",children:"Freepik"})," from ",Object(j.jsx)("a",{href:"https://www.flaticon.com/",children:"www.flaticon.com"})," "]})})]})})),Q=function(){return Object(j.jsx)(x.a,{store:L,children:Object(j.jsx)(u.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(S,{}),Object(j.jsxs)(p.c,{children:[Object(j.jsx)(p.a,{exact:!0,path:"/",component:H}),Object(j.jsx)(p.a,{exact:!0,path:"/projects",component:_}),Object(j.jsx)(p.a,{exact:!0,path:"/projects/dirt",component:V}),Object(j.jsx)(p.a,{exact:!0,path:"/projects/bouncingborders",component:U}),Object(j.jsx)(p.a,{exact:!0,path:"/projects/logic",component:X})]}),Object(j.jsx)(K,{})]})})})};m.a.render(Object(j.jsx)(b.a.StrictMode,{children:Object(j.jsx)(Q,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.9744903f.chunk.js.map