(this["webpackJsonpcorona-viz"]=this["webpackJsonpcorona-viz"]||[]).push([[0],{25:function(e,t,n){e.exports=n(61)},30:function(e,t,n){},50:function(e){e.exports=JSON.parse("{}")},53:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),c=n.n(o),i=(n(30),n(18)),l=n(5),u=n.n(l),s=n(19),d=n(6),f=n(3);function m(e){var t=y(e);t.sort((function(e,t){return t.confirmed-e.confirmed}));var n=t.slice(0,5).map((function(e){return[e.country,e.confirmed,e.deaths,e.recovered]}));return[["Country","Confirmed Cases","Deaths","Recovered"]].concat(Object(f.a)(n))}function h(e){var t=[["Confirmed",e.confirmed.latest],["Deaths",e.deaths.latest],["New Cases",e.deaths.latest],["Recovered",e.recovered.latest]];return[["Label","Value"]].concat(t)}function v(e){var t=y(e).map((function(e){return[e.country,e.confirmed]}));return[["Country","Cases"]].concat(Object(f.a)(t))}function p(e){var t=y(e);t.sort((function(e,t){return t.confirmed-e.confirmed}));var n=t.map((function(e){return[e.country,e.confirmed]}));return[["Country","Cases"]].concat(Object(f.a)(n))}function E(e,t){return e.get(t).reduce((function(e,t){return e+Number(t.latest)}),0)}function y(e){var t=[],n=b(e.confirmed.locations,(function(e){return e.country_code})),a=b(e.deaths.locations,(function(e){return e.country_code})),r=b(e.recovered.locations,(function(e){return e.country_code}));return n.forEach((function(e,o){t.push({country:e[0].country,deaths:E(a,o),confirmed:E(n,o),recovered:E(r,o)})})),t}function b(e,t){var n=new Map;return e.forEach((function(e){var a=t(e),r=n.get(a);r?r.push(e):n.set(a,[e])})),n}n(20);var g=n(21),C=n.n(g),w=(n(50),n(51),n(52),n(53),n(2));var x=function(e){var t=e.data;return r.a.createElement(w.a,{height:"450px",width:"90%",chartType:"BarChart",loader:r.a.createElement("div",null,"Loading Chart"),data:m(t),options:{title:"Top 5 Affected Countries",chartArea:{width:"90%"},hAxis:{title:"People Affected",minValue:0},vAxis:{title:"Country"}}})};var j=function(e){var t=e.data;return r.a.createElement(w.a,{height:"350px",width:"90%",chartType:"GeoChart",data:p(t),options:{chartArea:{width:"100%"},colorAxis:{colors:["#FFDFA5","#FF0000"]}},mapsApiKey:"AIzaSyAmWei1h0Q6BXMh_4K-22FibghqjqBHWU4"})};var O=function(e){var t=e.data;return r.a.createElement(w.a,{width:"90%",height:"300px",chartType:"PieChart",loader:r.a.createElement("div",null,"Loading Chart"),data:v(t),options:{legend:"none",pieSliceText:"label",sliceVisibilityThreshold:.03},rootProps:{"data-testid":"1"}})};var A=function(e){var t=e.data;return r.a.createElement(w.a,{width:"90%",height:"300px",chartType:"PieChart",loader:r.a.createElement("div",null,"Loading Chart"),data:h(t),options:{},rootProps:{"data-testid":"1"}})},k=n(4),S=n(24),L=n.n(S);function T(){var e=Object(i.a)(["\n    display: block;\n    margin: 0 auto;\n    padding-top: 50px;\n    border-color: red;\n  "]);return T=function(){return e},e}var D=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(!0),i=Object(d.a)(c,2),l=i[0],f=i[1];Object(a.useEffect)((function(){(function(){var e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,C()("https://coronavirus-tracker-api.herokuapp.com/all");case 3:t=e.sent,o(t.data),f(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m=Object(k.css)(T());return r.a.createElement("div",{style:{margin:"10px",textAlign:"center"}},r.a.createElement("h1",null,"Coronavirus (COVID-19) Global Statistics"),!l&&r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},r.a.createElement(A,{data:n}),r.a.createElement(j,{data:n}),r.a.createElement(O,{data:n}),r.a.createElement(x,{data:n}),r.a.createElement("div",{className:"tableView"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Country"),r.a.createElement("th",null,"Confirmed Cases"),r.a.createElement("th",null,"Recovered Cases"),r.a.createElement("th",null,"Deaths"))),r.a.createElement("tbody",null,function(e){var t=y(e);return t.sort((function(e,t){return t.confirmed-e.confirmed})),t}(n).map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.country),r.a.createElement("td",null,e.confirmed.toLocaleString()),r.a.createElement("td",null,e.recovered.toLocaleString()),r.a.createElement("td",null,e.deaths.toLocaleString()))})))))),l&&r.a.createElement(L.a,{css:m,size:35,color:"#123abc",loading:l}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.57bb8d91.chunk.js.map