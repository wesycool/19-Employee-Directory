(this["webpackJsonp19-employee-directory"]=this["webpackJsonp19-employee-directory"]||[]).push([[0],{21:function(e,a,t){e.exports=t(34)},26:function(e,a,t){},27:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(19),c=t.n(r),l=(t(26),t(13)),o=t(3),s=t(9),m=t(1);var _=function(e){var a=e.list;console.log("TableRow",a);var t=Object(s.a)(a,2),n=t[0],r=t[1],c=r.first_name,l=r.last_name,o=r.city,m=r.province;return i.a.createElement("tr",null,i.a.createElement("th",{scope:"row"},n),i.a.createElement("td",null,c," ",l),i.a.createElement("td",null,o,", ",m))};var f=function(e){var a=e.list,t=e.sortList;return i.a.createElement("div",{className:"container"},i.a.createElement("table",{className:"table table-hover"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{scope:"col"},"#"),i.a.createElement("th",{scope:"col",id:"last_name",onClick:t},"Name ",i.a.createElement("i",{className:"fas fa-sort-alpha-down"})),i.a.createElement("th",{scope:"col",id:"city",onClick:t},"Location ",i.a.createElement("i",{className:"fas fa-sort-alpha-down"})))),i.a.createElement("tbody",null,Object.entries(a).map((function(e){var a=Object(s.a)(e,2),t=a[0],n=a[1];return i.a.createElement(_,{key:t,list:[Number(t)+1,n]})})))))},u=t(7);t(27);var y=function(e){var a=Object(m.d)(),t=Object(n.useState)(u),r=Object(s.a)(t,2),c=r[0],_=r[1];return console.log("[App] tableManager:",c),i.a.createElement("div",null,i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-warning"},i.a.createElement(l.b,{to:"/",className:"/"===a.pathname?"nav-link active":"nav-link"},i.a.createElement("h2",{style:{color:"black"}},i.a.createElement("i",{className:"far fa-address-book"})," Employee Directory")),i.a.createElement("div",{className:"navbar-collapse justify-content-end"},i.a.createElement("form",{className:"form-inline"},i.a.createElement("input",{className:"form-control mr-sm-2 col-form-label-lg",type:"search",placeholder:"e.g. John Smith","aria-label":"name",id:"name"}),i.a.createElement("input",{className:"form-control mr-sm-2 col-form-label-lg",type:"search",placeholder:"e.g. Toronto, Ontario","aria-label":"location",id:"location"}),i.a.createElement("button",{className:"btn btn-secondary my-2 my-sm-0 btn-lg",type:"button",onClick:function(){var e=document.querySelector("#name").value.trim().split(/[\s,]+/),a=u.filter((function(a){return a.first_name.toLowerCase().indexOf(e[0].toLowerCase())>-1})),t=u.filter((function(a){return a.last_name.toLowerCase().indexOf(e[0].toLowerCase())>-1})),n=[].concat(Object(o.a)(a),Object(o.a)(t)).filter((function(e,n){return[].concat(Object(o.a)(a),Object(o.a)(t)).indexOf(e)===n})),i=e.length>1?u.filter((function(a){return a.last_name.toLowerCase().indexOf(e[1].toLowerCase())>-1})):n,r=n.filter((function(e){return i.includes(e)})),c=document.querySelector("#location").value.trim().split(/[\s,]+/),l=u.filter((function(e){return e.city.toLowerCase().indexOf(c[0].toLowerCase())>-1})),s=u.filter((function(e){return e.province.toLowerCase().indexOf(c[0].toLowerCase())>-1})),m=[].concat(Object(o.a)(l),Object(o.a)(s)).filter((function(e,a){return[].concat(Object(o.a)(l),Object(o.a)(s)).indexOf(e)===a})),f=c.length>1?u.filter((function(e){return e.province.toLowerCase().indexOf(c[1].toLowerCase())>-1})):m,y=m.filter((function(e){return f.includes(e)})),v=r.filter((function(e){return y.includes(e)})),p=y.filter((function(e){return r.includes(e)})),b=[].concat(Object(o.a)(v),Object(o.a)(p)).filter((function(e,a){return[].concat(Object(o.a)(v),Object(o.a)(p)).indexOf(e)===a}));_(b)}},i.a.createElement("i",{className:"fas fa-search"})," ",i.a.createElement("span",{id:"searchBtn"},"Search"))))),i.a.createElement(f,{list:c,sortList:function(e){var a=c.sort((function(a,t){var n=a[e.target.id]>t[e.target.id];return n-!n})),t=Object(o.a)(a);_(t)}}))};t(33);var v=function(){return i.a.createElement(l.a,null,i.a.createElement("div",null,i.a.createElement(y,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e){e.exports=JSON.parse('[{"first_name":"Hayley","last_name":"Kaufman","city":"Novar","province":" Ontario"},{"first_name":"Chad","last_name":"Lovell","city":"Fort Albany","province":" Ontario"},{"first_name":"Cavan","last_name":"Lindsay","city":"Dalton","province":" Ontario"},{"first_name":"Camille","last_name":"Mack","city":"Manitowaning","province":" Ontario"},{"first_name":"Sheldon","last_name":"Dunlop","city":"Kitchener","province":" Ontario"},{"first_name":"Aminah","last_name":"Clayton","city":"Parry Sound","province":" Ontario"},{"first_name":"Diesel","last_name":"Wallace","city":"Tudhope","province":" Ontario"},{"first_name":"Leilani","last_name":"Mcclure","city":"Yarker","province":" Ontario"},{"first_name":"Anna-Marie","last_name":"Vega","city":"Kaladar","province":" Ontario"},{"first_name":"Shelly","last_name":"Johnson","city":"Courtright","province":" Ontario"},{"first_name":"Eamonn","last_name":"Shepherd","city":"Head Lake","province":" Ontario"},{"first_name":"Arley","last_name":"Calhoun","city":"Kemptville","province":" Ontario"},{"first_name":"Shamima","last_name":"Mcleod","city":"Flesherton","province":" Ontario"},{"first_name":"Laurence","last_name":"Keller","city":"Beamsville","province":" Ontario"},{"first_name":"Kaylum","last_name":"Hatfield","city":"Manvers","province":" Ontario"},{"first_name":"Edith","last_name":"Watt","city":"Russell","province":" Ontario"},{"first_name":"Mitchel","last_name":"Jeffery","city":"Crystal Beach","province":" Ontario"},{"first_name":"Andrew","last_name":"Matthams","city":"Whitefish Falls","province":" Ontario"},{"first_name":"Pierce","last_name":"Feeney","city":"Belle River","province":" Ontario"},{"first_name":"Maverick","last_name":"Hume","city":"Ancaster","province":" Ontario"},{"first_name":"Lily","last_name":"Guy","city":"Tilbury","province":" Ontario"},{"first_name":"April","last_name":"Charlton","city":"Waterdown","province":" Ontario"},{"first_name":"Huseyin","last_name":"Patel","city":"Park Head","province":" Ontario"},{"first_name":"Juliette","last_name":"Krause","city":"Jackson Manion","province":" Ontario"},{"first_name":"Jack","last_name":"Powers","city":"Lake River","province":" Ontario"},{"first_name":"Jeff","last_name":"Ingram","city":"Coaticook","province":" Quebec"},{"first_name":"Komal","last_name":"Petersen","city":"Lac-meach","province":" Quebec"},{"first_name":"Leroy","last_name":"Devlin","city":"Saint-gabriel-de-brandon","province":" Quebec"},{"first_name":"Nuha","last_name":"Mcdermott","city":"Saint-andre-de-kamouraska","province":" Quebec"},{"first_name":"Kamran","last_name":"Crosby","city":"Cape Chatte","province":" Quebec"},{"first_name":"Oriana","last_name":"Bravo","city":"Lavaltrie","province":" Quebec"},{"first_name":"Ifrah","last_name":"Odonnell","city":"Saint-romuald-d\'etchemin","province":" Quebec"},{"first_name":"Rocco","last_name":"Donald","city":"Hervey Junction","province":" Quebec"},{"first_name":"Nafisa","last_name":"Koch","city":"Melocheville","province":" Quebec"},{"first_name":"Traci","last_name":"Jennings","city":"Huntingdon","province":" Quebec"},{"first_name":"Sufyan","last_name":"Squires","city":"Chicoutimi","province":" Quebec"},{"first_name":"Janet","last_name":"Braun","city":"Mistassini Post","province":" Quebec"},{"first_name":"Sherri","last_name":"Peterson","city":"Les Escoumins","province":" Quebec"},{"first_name":"Ailish","last_name":"Armstrong","city":"Saint-onesime","province":" Quebec"},{"first_name":"Rea","last_name":"Ventura","city":"Authier-nord","province":" Quebec"},{"first_name":"Kaitlyn","last_name":"Sellers","city":"Monk","province":" Quebec"},{"first_name":"Amit","last_name":"Russell","city":"Burbidge","province":" Quebec"},{"first_name":"Jaydon","last_name":"Brennan","city":"Lac-aux-sables","province":" Quebec"},{"first_name":"Sianna","last_name":"Frederick","city":"Luceville","province":" Quebec"},{"first_name":"Brad","last_name":"Horton","city":"Saint Come","province":" Quebec"},{"first_name":"Aled","last_name":"Bob","city":"Rollet","province":" Quebec"},{"first_name":"Leyton","last_name":"Cousins","city":"Sainte-henedine","province":" Quebec"},{"first_name":"Dylon","last_name":"Galloway","city":"Cedars","province":" Quebec"},{"first_name":"Heath","last_name":"Shepard","city":"Shawenegan","province":" Quebec"},{"first_name":"Iwan","last_name":"Power","city":"Asbestos","province":" Quebec"},{"first_name":"Herbert","last_name":"Simons","city":"Burns Lake","province":" British Columbia"},{"first_name":"Khaleesi","last_name":"Rich","city":"Snake River","province":" British Columbia"},{"first_name":"Nahla","last_name":"Tierney","city":"Colebrook","province":" British Columbia"},{"first_name":"Haya","last_name":"Miles","city":"Copper Mountain","province":" British Columbia"},{"first_name":"Taio","last_name":"Fernandez","city":"Fort Steele","province":" British Columbia"},{"first_name":"Samera","last_name":"Craft","city":"Kimberly","province":" British Columbia"},{"first_name":"Osama","last_name":"Ho","city":"Lake Windermere","province":" British Columbia"},{"first_name":"Justin","last_name":"Sharma","city":"Tappen","province":" British Columbia"},{"first_name":"Reggie","last_name":"Gibson","city":"Kitamaat","province":" British Columbia"},{"first_name":"Mackenzie","last_name":"Findlay","city":"Mcdame Creek","province":" British Columbia"},{"first_name":"Gregg","last_name":"Gordon","city":"Bloedel","province":" British Columbia"},{"first_name":"Murtaza","last_name":"Halliday","city":"Aiyansh","province":" British Columbia"},{"first_name":"Abraham","last_name":"Bloom","city":"Osland","province":" British Columbia"},{"first_name":"Lexi-Mai","last_name":"Mcneil","city":"New Hazelton Station","province":" British Columbia"},{"first_name":"Jordana","last_name":"Phillips","city":"Log Cabin","province":" British Columbia"},{"first_name":"Ruben","last_name":"Moyer","city":"Britannia Beach","province":" British Columbia"},{"first_name":"Elle-May","last_name":"Garza","city":"Proctor","province":" British Columbia"},{"first_name":"Denise","last_name":"Browne","city":"Merrit","province":" British Columbia"},{"first_name":"Radhika","last_name":"Mcdowell","city":"Port Renfrew","province":" British Columbia"},{"first_name":"Tabitha","last_name":"Davison","city":"Gang Ranch","province":" British Columbia"},{"first_name":"Elana","last_name":"Rahman","city":"Poplar Creek","province":" British Columbia"},{"first_name":"Aisling","last_name":"Ashton","city":"Kamloops","province":" British Columbia"},{"first_name":"Naya","last_name":"Schmitt","city":"Cascade","province":" British Columbia"},{"first_name":"Adyan","last_name":"Talbot","city":"Pinchi","province":" British Columbia"},{"first_name":"Keisha","last_name":"Pham","city":"Bear Lake","province":" British Columbia"},{"first_name":"Halimah","last_name":"Costa","city":"Peace River Crossing","province":" Alberta"},{"first_name":"Thiago","last_name":"Forbes","city":"Josephburg","province":" Alberta"},{"first_name":"Tomos","last_name":"Jackson","city":"Vilna","province":" Alberta"},{"first_name":"Alessio","last_name":"Phan","city":"Brooks","province":" Alberta"},{"first_name":"Jamie-Lee","last_name":"Marks","city":"Hemaruka","province":" Alberta"},{"first_name":"Nannie","last_name":"Palmer","city":"Hinton","province":" Alberta"},{"first_name":"Daria","last_name":"Bishop","city":"Drumheller","province":" Alberta"},{"first_name":"Tallulah","last_name":"Jones","city":"Dina","province":" Alberta"},{"first_name":"Sanna","last_name":"Waller","city":"Clear Hills","province":" Alberta"},{"first_name":"Kacper","last_name":"Penn","city":"Barich","province":" Alberta"},{"first_name":"Marcie","last_name":"Prince","city":"Mountain View","province":" Alberta"},{"first_name":"Shiv","last_name":"Barr","city":"Lancaster Park","province":" Alberta"},{"first_name":"Giorgio","last_name":"Guevara","city":"Wagner","province":" Alberta"},{"first_name":"Jethro","last_name":"Bowden","city":"Lamont","province":" Alberta"},{"first_name":"Shaunie","last_name":"Herbert","city":"Saint Paul","province":" Alberta"},{"first_name":"Lesley","last_name":"Mclaughlin","city":"Northbank","province":" Alberta"},{"first_name":"Warwick","last_name":"O\'Neill","city":"Craigmyle","province":" Alberta"},{"first_name":"Olivier","last_name":"George","city":"Keg River","province":" Alberta"},{"first_name":"Alyx","last_name":"Allen","city":"Turner Valley","province":" Alberta"},{"first_name":"Katelyn","last_name":"Keeling","city":"Grand Centre","province":" Alberta"},{"first_name":"Mehak","last_name":"Myers","city":"Freedom","province":" Alberta"},{"first_name":"Rivka","last_name":"Arellano","city":"Ardmore","province":" Alberta"},{"first_name":"Pedro","last_name":"Mullen","city":"Gage","province":" Alberta"},{"first_name":"Chante","last_name":"Landry","city":"Willingdon","province":" Alberta"},{"first_name":"Tayyibah","last_name":"Garcia","city":"Clairmont","province":" Alberta"}]')}},[[21,1,2]]]);
//# sourceMappingURL=main.51b85b03.chunk.js.map