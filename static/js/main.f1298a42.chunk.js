(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(t,e,c){t.exports={statisticsItem:"Statistics_statisticsItem__1b0NE"}},,,function(t,e,c){t.exports={container:"Section_container__3atf9",title:"Section_title__3Y3p5"}},,function(t,e,c){t.exports={button:"FeedbackOptions_button__1ZiO-"}},function(t,e,c){t.exports={text:"Notification_text__23kug"}},,,,,,function(t,e,c){"use strict";c.r(e);var s=c(0),n=c(1),a=c.n(n),i=c(6),o=c.n(i),r=c(3),b=c(2),j=c.n(b),l=function(t){var e=t.good,c=t.neutral,n=t.bad,a=t.total,i=t.positivePercentage;return Object(s.jsxs)("section",{children:[Object(s.jsxs)("p",{className:j.a.statisticsItem,children:["Good: ",e]}),Object(s.jsxs)("p",{className:j.a.statisticsItem,children:["Neutral: ",c]}),Object(s.jsxs)("p",{className:j.a.statisticsItem,children:["Bad: ",n]}),Object(s.jsxs)("p",{className:j.a.statisticsItem,children:["Total: ",a]}),Object(s.jsxs)("p",{className:j.a.statisticsItem,children:["Positive feedback: ",i,"%"]})]})},u=c(7),d=c.n(u),O=function(t){var e=t.options,c=t.onLeaveFeedback;return Object(s.jsx)("div",{children:e.map((function(t){return Object(s.jsx)("button",{className:d.a.button,type:"button","data-name":t,onClick:c,children:t},Object.keys(e))}))})},x=c(5),h=c.n(x),f=function(t){var e=t.title,c=t.children;return Object(s.jsxs)("section",{className:h.a.container,children:[Object(s.jsx)("h2",{className:h.a.title,children:e}),c]})},m=c(8),p=c.n(m),v=function(t){var e=t.message;return Object(s.jsx)("p",{className:p.a.text,children:e})};function k(){var t=Object(n.useState)(0),e=Object(r.a)(t,2),c=e[0],a=e[1],i=Object(n.useState)(0),o=Object(r.a)(i,2),b=o[0],j=o[1],u=Object(n.useState)(0),d=Object(r.a)(u,2),x=d[0],h=d[1],m=c+b+x,p=m>0,k=function(t){return c/t*100}(m);return Object(s.jsxs)("div",{children:[Object(s.jsx)(f,{title:"Please leave feedback",children:Object(s.jsx)(O,{options:["good","neutral","bad"],onLeaveFeedback:function(t){var e=t.target.dataset.name;"good"===e?a((function(t){return t+1})):"neutral"===e?j((function(t){return t+1})):"bad"===e&&h((function(t){return t+1}))}})}),Object(s.jsx)(f,{title:"Statistics",children:p?Object(s.jsx)(l,{good:c,neutral:b,bad:x,total:m,positivePercentage:k}):Object(s.jsx)(v,{message:"No feedback given"})})]})}o.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(k,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.f1298a42.chunk.js.map