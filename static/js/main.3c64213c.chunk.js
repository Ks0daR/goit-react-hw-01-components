(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"Profile_profile__2W954",description:"Profile_description__3XmDx",avatar:"Profile_avatar__10Ccd",stats:"Profile_stats__ZulK0",statsItem:"Profile_statsItem__3tAqg"}},function(e,a,t){e.exports={statistics:"Statistics_statistics__21jsf",statList:"Statistics_statList__oROQY",item:"Statistics_item__1IIxC"}},function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e,a,t){e.exports={item:"FriendList_item__2vXtP",name:"FriendList_name__23D3j",status:"FriendList_status__JsIS5",online:"FriendList_online__1Wlbv FriendList_status__JsIS5"}},,,function(e,a,t){e.exports={transactionHistory:"TransactionHistory_transactionHistory__ho1Xi"}},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mugukamil/128.jpg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(6),r=t.n(c),i=t(1),l=t.n(i);var m=function(e){var a=e.followers;return s.a.createElement("li",{className:l.a.statsItem},s.a.createElement("span",{className:"label"},"Followers"),s.a.createElement("span",{className:"quantity"},a))};var o=function(e){var a=e.views;return s.a.createElement("li",{className:l.a.statsItem},s.a.createElement("span",{className:"label"},"Views"),s.a.createElement("span",{className:"quantity"},a))};var u=function(e){var a=e.likes;return s.a.createElement("li",{className:l.a.statsItem},s.a.createElement("span",{className:"label"},"Likes"),s.a.createElement("span",{className:"quantity"},a))};var d=function(e){var a=e.name,t=e.tag,n=e.location,c=e.avatar,r=e.stats,i=r.followers,d=r.views,p=r.likes;return s.a.createElement("div",{className:l.a.profile},s.a.createElement("div",{className:l.a.description},s.a.createElement("img",{src:c,alt:"user avatar",className:l.a.avatar}),s.a.createElement("p",{className:"name"},a),s.a.createElement("p",{className:"tag"},"@",t),s.a.createElement("p",{className:"location"},n)),s.a.createElement("ul",{className:l.a.stats},s.a.createElement(m,{followers:i}),s.a.createElement(o,{views:d}),s.a.createElement(u,{likes:p})))},p=t(2),f=t.n(p);var b=function(e){return e.stats.map((function(e){return s.a.createElement("li",{key:e.id,className:f.a.item},s.a.createElement("span",{className:"label"},e.label),s.a.createElement("span",{className:"percentage"},e.percentage))}))};var y=function(e){var a=e.stats;return s.a.createElement("ul",{className:f.a.statList},s.a.createElement(b,{stats:a}))};var E=function(e){var a=e.title,t=e.stats;return s.a.createElement("section",{className:f.a.statistics},a&&s.a.createElement("h2",{className:"title"},a),s.a.createElement(y,{stats:t}))},v=t(4),_=t.n(v);var w=function(e){var a=e.friends;return s.a.createElement("ul",{className:"friend-list"},a.map((function(e){return s.a.createElement("li",{className:_.a.item,key:e.id},s.a.createElement("span",{className:e.isOnline?_.a.online:_.a.status}),s.a.createElement("img",{className:"avatar",src:e.avatar,alt:"",width:"48"}),s.a.createElement("p",{className:_.a.name},e.name))})),";")};var N=function(e){return e.items.map((function(e){var a=e.id,t=e.type,n=e.amount,c=e.currency;return s.a.createElement("tr",{key:a},s.a.createElement("td",null,t),s.a.createElement("td",null,n),s.a.createElement("td",null,c))}))},g=t(7),h=t.n(g);var O=function(e){var a=e.items;return s.a.createElement("table",{className:h.a.transactionHistory},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Type"),s.a.createElement("th",null,"Amount"),s.a.createElement("th",null,"Currency"))),s.a.createElement("tbody",null,s.a.createElement(N,{items:a})))},L=t(3),k=t(8),x=t(9),j=t(10);r.a.render(s.a.createElement((function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(d,{name:L.name,tag:L.tag,location:L.location,avatar:L.avatar,stats:L.stats}),s.a.createElement(E,{title:"Upload Stats",stats:k}),s.a.createElement(w,{friends:x}),s.a.createElement(O,{items:j}))}),null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.3c64213c.chunk.js.map