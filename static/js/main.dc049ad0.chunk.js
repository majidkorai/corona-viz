(this["webpackJsonpcorona-viz"]=this["webpackJsonpcorona-viz"]||[]).push([[0],{25:function(e,t,n){e.exports=n(61)},30:function(e,t,n){},50:function(e){e.exports=JSON.parse("{}")},53:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(17),c=n.n(o),i=(n(30),n(18)),u=n(5),l=n.n(u),s=n(19),d=n(6),f=n(3);function m(e){var t=E(e);console.log(t),t.sort((function(e,t){return t.confirmed-e.confirmed}));var n=t.slice(0,5).map((function(e){return[e.country,e.confirmed,e.deaths,e.recovered]}));return[["Country","Confirmed Cases","Deaths","Recovered"]].concat(Object(f.a)(n))}function h(e){var t=E(e).map((function(e){return[e.country,e.confirmed]}));return[["Country","Cases"]].concat(Object(f.a)(t))}function p(e){var t=E(e);t.sort((function(e,t){return t.confirmed-e.confirmed}));var n=t.map((function(e){return[e.country,e.confirmed]}));return[["Country","Cases"]].concat(Object(f.a)(n))}function v(e,t){return e.get(t).reduce((function(e,t){return e+Number(t.latest)}),0)}function E(e){var t=[],n=y(e.confirmed.locations,(function(e){return e.country_code})),r=y(e.deaths.locations,(function(e){return e.country_code})),a=y(e.recovered.locations,(function(e){return e.country_code}));return n.forEach((function(e,o){t.push({country:e[0].country,deaths:v(r,o),confirmed:v(n,o),recovered:v(a,o)})})),t}function y(e,t){var n=new Map;return e.forEach((function(e){var r=t(e),a=n.get(r);a?a.push(e):n.set(r,[e])})),n}n(20);var g=n(21),b=n.n(g),C=(n(50),n(51),n(52),n(53),n(2));var w=function(e){var t=e.data;return a.a.createElement(C.a,{height:"500px",width:"90%",chartType:"BarChart",loader:a.a.createElement("div",null,"Loading Chart"),data:m(t),options:{title:"Top 5 Affected Countries",chartArea:{width:"90%"},hAxis:{title:"People Affected",minValue:0},vAxis:{title:"Country"}}})};var x=function(e){var t=e.data;return a.a.createElement(C.a,{height:"350px",width:"90%",chartType:"GeoChart",data:p(t),options:{chartArea:{width:"100%"},colorAxis:{colors:["#FFDFA5","#FF0000"]}},mapsApiKey:"AIzaSyAmWei1h0Q6BXMh_4K-22FibghqjqBHWU4"})};var j=function(e){var t=e.data;return a.a.createElement(C.a,{width:"90%",height:"350px",chartType:"PieChart",loader:a.a.createElement("div",null,"Loading Chart"),data:h(t),options:{},rootProps:{"data-testid":"1"}})},O=n(4),A=n(24),k=n.n(A);function S(){var e=Object(i.a)(["\n    display: block;\n    margin: 0 auto;\n    padding-top: 30px;\n    border-color: red;\n  "]);return S=function(){return e},e}var F=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)(!0),i=Object(d.a)(c,2),u=i[0],f=i[1];Object(r.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,b()("https://coronavirus-tracker-api.herokuapp.com/all");case 3:t=e.sent,o(t.data),f(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m=Object(O.css)(S());return a.a.createElement("div",{style:{margin:"10px",textAlign:"center"}},a.a.createElement("h1",null,"Coronavirus (COVID-19) Global Statistics"),!u&&a.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},a.a.createElement(x,{data:n}),a.a.createElement(j,{data:n}),a.a.createElement(w,{data:n}),a.a.createElement("div",{className:"tableView"},a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Country"),a.a.createElement("th",null,"Confirmed Cases"),a.a.createElement("th",null,"Recovered Cases"),a.a.createElement("th",null,"Deaths"))),a.a.createElement("tbody",null,function(e){var t=E(e);return t.sort((function(e,t){return t.confirmed-e.confirmed})),t}(n).map((function(e){return a.a.createElement("tr",null,a.a.createElement("td",null,e.country),a.a.createElement("td",null,e.confirmed.toLocaleString()),a.a.createElement("td",null,e.recovered.toLocaleString()),a.a.createElement("td",null,e.deaths.toLocaleString()))})))))),u&&a.a.createElement(k.a,{css:m,size:35,color:"#123abc",loading:u}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.dc049ad0.chunk.js.map