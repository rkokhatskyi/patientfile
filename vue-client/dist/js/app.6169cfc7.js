(function(t){function e(e){for(var r,a,s=e[0],c=e[1],u=e[2],d=0,l=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&l.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(l.length)l.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==i[s]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},i={app:0},o=[];function s(t){return c.p+"js/"+({home:"home",login:"login"}[t]||t)+"."+{"chunk-1166c84f":"91e55ded","chunk-2d0a4677":"f69b43ff","chunk-2d0af090":"71e7fa4c","chunk-2d21eaae":"533db92a","chunk-2d228c68":"2588e54e","chunk-59bd2da8":"91800b10","chunk-6ffba00c":"b2403ef8","chunk-79ad7cde":"f90b06b2","chunk-2d20edb2":"2a679281","chunk-2d230e36":"1af79eb9","chunk-998c2606":"29dcb55b","chunk-1d11740a":"9ac41e55","chunk-57d60a1e":"520e7f19",home:"59e2439a",login:"e57b883d","chunk-2d0c4df8":"457af126","chunk-6f07a559":"4369f25a","chunk-13df7e30":"943cfe30","chunk-dd65ca52":"d02b81eb"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-1166c84f":1,"chunk-6ffba00c":1,"chunk-79ad7cde":1,"chunk-998c2606":1,"chunk-1d11740a":1,"chunk-57d60a1e":1,home:1,"chunk-6f07a559":1,"chunk-13df7e30":1,"chunk-dd65ca52":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({home:"home",login:"login"}[t]||t)+"."+{"chunk-1166c84f":"7252fee7","chunk-2d0a4677":"31d6cfe0","chunk-2d0af090":"31d6cfe0","chunk-2d21eaae":"31d6cfe0","chunk-2d228c68":"31d6cfe0","chunk-59bd2da8":"31d6cfe0","chunk-6ffba00c":"7252fee7","chunk-79ad7cde":"349d4166","chunk-2d20edb2":"31d6cfe0","chunk-2d230e36":"31d6cfe0","chunk-998c2606":"bac502f9","chunk-1d11740a":"a93d3813","chunk-57d60a1e":"10554590",home:"290365ef",login:"31d6cfe0","chunk-2d0c4df8":"31d6cfe0","chunk-6f07a559":"51ffbd93","chunk-13df7e30":"10554590","chunk-dd65ca52":"f2a27c53"}[t]+".css",i=c.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===i))return e()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){u=l[s],d=u.getAttribute("data-href");if(d===r||d===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[t],f.parentNode.removeChild(f),n(o)},f.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){a[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=o);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(t);var l=new Error;u=function(e){d.onerror=d.onload=null,clearTimeout(f);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}i[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var f=d;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"459b":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-tab",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v(" "+t._s(t.modalTitle)+" "),n("b-button",{attrs:{size:"sm",variant:"danger"},on:{click:t.closeTab}},[t._v("x")])]},proxy:!0}])},[n("label",[t._v("Description:")]),n("b-form-textarea",{attrs:{id:"textarea-state",state:t.validation,rows:"5",autofocus:""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),n("b-form-invalid-feedback",{attrs:{state:t.validation}},[t._v("Description content is required.")]),n("b-button",{staticClass:"float-right mb-2 mt-2",attrs:{variant:"primary",size:"sm",disabled:!t.validation},on:{click:t.save}},[t._v(t._s(t.buttonText))])],1)},a=[],i=(n("a4d3"),n("e01a"),n("4de4"),n("b441")),o=n("cc98"),s=n.n(o),c={data:function(){return{description:""}},computed:{type:function(){return this.$store.state.tabDialog.reminderTabType},modalTitle:function(){return this.type==i["ADD_REMINDER"]?"Add Reminder":"Edit Reminder"},buttonText:function(){return this.type==i["ADD_REMINDER"]?"Save":"Update"},validation:function(){return this.description.length>0},id:function(){return this.$route.query.patient_id},updateData:function(){return this.$store.state.tabDialog.reminderData},tabList:function(){return this.$store.state.tabDialog.tabList},userId:function(){return this.$store.state.userId}},methods:{save:function(){if(this.type==i["ADD_REMINDER"]){var t=new Date,e={createdAt:t.toDateString(),reminderID:s()(),patientId:this.id,description:this.description,createdByUserId:this.userId};this.$store.dispatch("addReminder",{data:e,toast:this.$bvToast}),this.$store.dispatch("updateRightPanelRow"),this.description=""}else this.updateData["description"]=this.description,this.updateData["discontinuedByUserId"]=this.userId,this.updateData["createdByUserId"]=this.userId,this.$store.dispatch("updateReminder",{data:this.updateData,toast:this.$bvToast})},closeTab:function(){var t=this.tabList.filter((function(t){return t.key!=i["ADD_REMINDER"]}));this.$store.commit("setTabList",t)}},mounted:function(){this.type==i["EDIT_REMINDER"]&&(this.description=this.updateData.description)}},u=c,d=n("2877"),l=Object(d["a"])(u,r,a,!1,null,"151206e7",null);e["default"]=l.exports},"50fb":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-tab",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v(" Multi change recommendation "),n("b-button",{attrs:{size:"sm",variant:"danger"},on:{click:t.closeTab}},[t._v("x")])]},proxy:!0}])},[n("TabPagination"),n("b-row",{attrs:{cols:"3","align-h":"around"}},t._l(t.recommendations,(function(e,r){return n("b-col",{key:"item-"+r},[n("label",[t._v("Description:")]),n("b-form-textarea",{attrs:{id:"textarea-state",rows:"5",autofocus:""},model:{value:e.description,callback:function(n){t.$set(e,"description",n)},expression:"item.description"}}),n("b-form-invalid-feedback",[t._v("Description content is required.")]),n("b-button",{staticClass:"float-right mb-2 mt-2",attrs:{variant:"primary",size:"sm"},on:{click:function(n){return t.update(e)}}},[t._v("Save")]),n("br"),n("history-component",{attrs:{id:e.recommendationID}})],1)})),1)],1)},a=[],i=(n("a4d3"),n("e01a"),n("4de4"),n("4160"),n("fb6a"),n("d3b7"),n("159b"),n("b441")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[n("div",{staticStyle:{cursor:"pointer"},on:{click:t.gotoPrevPage}},[t.currentPage>1?n("div",[n("b-icon-arrow-left"),n("span",[t._v("Prev")])],1):t._e()]),n("div",{staticStyle:{cursor:"pointer"},on:{click:t.gotoNextPage}},[t.currentPage<t.pageCount?n("div",[n("span",[t._v("Next")]),n("b-icon-arrow-right")],1):t._e()])])},s=[],c={props:["title"],computed:{currentPage:function(){return this.$parent.currentPage},pageCount:function(){return this.$parent.pageCount}},methods:{gotoPrevPage:function(){this.$parent.gotoPrevPage()},gotoNextPage:function(){this.$parent.gotoNextPage()}}},u=c,d=n("2877"),l=Object(d["a"])(u,o,s,!1,null,"fa428ab6",null),f=l.exports,m=function(){return n.e("chunk-2d228c68").then(n.bind(null,"db2f"))},h={computed:{items:function(){var t=this;return this.$store.state.recommendation.list.filter((function(e){return e.patientId==t.id&&1!=e.discontinue}))},id:function(){return this.$route.query.patient_id},tabList:function(){return this.$store.state.tabDialog.tabList},pageCount:function(){return Math.ceil(this.items.length/3)},recommendations:function(){var t=[];this.items.forEach((function(e){t.push({id:e["id"],description:e["description"],createdAt:e["createdAt"],patientId:e["patientId"],recommendationID:e["recommendationID"]})}));var e=3*(this.currentPage-1),n=3*this.currentPage,r=t.length;if(r<n){var a=n-r;e-=a,n=r}return t.slice(e,n)},userId:function(){return this.$store.state.userId}},data:function(){return{currentPage:1}},mounted:function(){},methods:{update:function(t){t["discontinuedByUserId"]=this.userId,t["createdByUserId"]=this.userId,this.$store.dispatch("updateRecommendation",{data:t,toast:this.$bvToast})},closeTab:function(){var t=this.tabList.filter((function(t){return t.key!=i["MULTIPLE_CHANGE_RECOMMENDATION"]}));this.$store.commit("setTabList",t)},gotoPrevPage:function(){this.currentPage-=1},gotoNextPage:function(){this.currentPage+=1}},components:{HistoryComponent:m,TabPagination:f}},p=h,b=Object(d["a"])(p,r,a,!1,null,"f4c1e9da",null);e["default"]=b.exports},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),n("Offline",{on:{"detected-condition":t.handleConnectivityChange}})],1)},i=[],o=(n("d3b7"),function(){return n.e("chunk-2d0a4677").then(n.bind(null,"05fb"))}),s={components:{Offline:o},methods:{handleConnectivityChange:function(t){this.$store.commit("setConnectionStatus",t)}}},c=s,u=n("2877"),d=Object(u["a"])(c,a,i,!1,null,null,null),l=d.exports,f=(n("99af"),n("b0c0"),n("ac1f"),n("1276"),n("96cf"),n("1da1")),m=n("2f62"),h=n("0e44"),p=(n("a4d3"),n("e01a"),n("4de4"),n("4160"),n("caad"),n("2532"),n("159b"),n("b441")),b=localStorage.getItem("token"),v={state:{list:[],currentDate:new Date},mutations:{setRecommendationList:function(t,e){t.list=e},addNewRecommendation:function(t,e){t.list.push(e)},removeNewRecommendation:function(t){t.list.pop()},setRecommendationCurrentDate:function(t,e){t.currentDate=e},SOCKET_ON_UPDATE_RECOMMENDATIONS:function(t,e){t.list=e},SOCKET_ADD_RECOMMENDATION:function(t,e){if(t.list.length>0){var n=t.list[t.list.length-1];if(n.recommendationID==e.recommendationID)return}t.list.push(e)},SOCKET_UPDATE_RECOMMENDATION:function(t,e){var n=[];t.list.forEach((function(t){t.id!=e.id?n.push(t):n.push(e)})),t.list=n},SOCKET_DISCONTINUE_RECOMMENDATION:function(t,e){console.log("SOCKET_DISCONTINUE_RECOMMENDATION");var n=t.list.filter((function(t){return t.id!=e}));t.list=n}},actions:{addRecommendation:function(t,e){return Object(f["a"])(regeneratorRuntime.mark((function n(){var r,a,i,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.commit,a=e.data,i=e.toast,r("addNewRecommendation",a),n.prev=3,n.next=6,fetch(p["RECOMMENDATION_API_URL"],{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:"Bearer "+b},body:JSON.stringify(a)});case 6:o=n.sent,o.ok||(i.toast("Failed to add recommendation data",{title:"Error",variant:"danger",solid:!0}),r("removeNewRecommendation")),n.next=14;break;case 10:n.prev=10,n.t0=n["catch"](3),i.toast("Server connection error",{title:"Error",variant:"danger",solid:!0}),r("removeNewRecommendation");case 14:case"end":return n.stop()}}),n,null,[[3,10]])})))()},updateRecommendation:function(t,e){return Object(f["a"])(regeneratorRuntime.mark((function n(){var r,a,i,o,s,c,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.state,a=t.commit,i=e.data,o=e.toast,s=r.list,c=[],s.forEach((function(t){t.id==i.id?c.push({id:i.id,description:i.description,createdAt:i.createdAt,patientId:i.patientId}):c.push(t)})),a("setRecommendationList",c),n.prev=6,n.next=9,fetch("".concat(p["RECOMMENDATION_API_URL"],"/").concat(i.id),{method:"PUT",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:"Bearer "+b},body:JSON.stringify(i)});case 9:u=n.sent,u.ok||(o.toast("Failed to update recommendation data",{title:"Error",variant:"danger",solid:!0}),a("setRecommendationList",s)),n.next=17;break;case 13:n.prev=13,n.t0=n["catch"](6),o.toast("Server connection error",{title:"Error",variant:"danger",solid:!0}),a("setRecommendationList",s);case 17:case"end":return n.stop()}}),n,null,[[6,13]])})))()},discontinueRecommendation:function(t,e){return Object(f["a"])(regeneratorRuntime.mark((function n(){var r,a,i,o,s,c,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.state,a=t.commit,i=e.data,o=e.toast,s=r.list,c=s.filter((function(t){return t.id!=i.id})),a("setRecommendationList",c),n.prev=5,i["discontinue"]=!0,n.next=9,fetch("".concat(p["RECOMMENDATION_API_URL"],"/").concat(i.id),{method:"PATCH",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:"Bearer "+b},body:JSON.stringify(i)});case 9:u=n.sent,u.ok||(o.toast("Failed to discontinue recommendation data",{title:"Error",variant:"danger",solid:!0}),a("setRecommendationList",s)),n.next=17;break;case 13:n.prev=13,n.t0=n["catch"](5),o.toast("Server connection error",{title:"Error",variant:"danger",solid:!0}),a("setRecommendationList",s);case 17:case"end":return n.stop()}}),n,null,[[5,13]])})))()},multiDiscontinueRecommendations:function(t,e){return Object(f["a"])(regeneratorRuntime.mark((function n(){var r,a,i,o,s,c,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=t.state,a=t.commit,i=e.selectedIds,o=e.toast,s=e.selectedDatas,c=r.list,u=c.filter((function(t){return!i.includes(t.id)})),a("setRecommendationList",u),s.forEach(function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e["discontinue"]=!0,t.next=4,fetch("".concat(p["RECOMMENDATION_API_URL"],"/").concat(e.id),{method:"PATCH",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:"Bearer "+b},body:JSON.stringify(e)});case 4:t.next=10;break;case 6:t.prev=6,t.t0=t["catch"](0),o.toast("Server connection error",{title:"Error",variant:"danger",solid:!0}),a("setRecommendationList",c);case 10:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}());case 6:case"end":return n.stop()}}),n)})))()},getRecommendations:function(t,e){return Object(f["a"])(regeneratorRuntime.mark((function n(){var r,a,i,o,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.commit,a=e.patientId,i=e.toast,null==b&&(b=localStorage.getItem("token")),n.prev=3,n.next=6,fetch("".concat(p["RECOMMENDATION_API_URL"],"?patientId=").concat(a),{headers:{Authorization:"Bearer "+b}});case 6:if(o=n.sent,!o.ok){n.next=14;break}return n.next=10,o.json();case 10:s=n.sent,r("setRecommendationList",s),n.next=15;break;case 14:"401"==o.status?(i.toast("Token is expired",{title:"Error",variant:"danger",solid:!0}),localStorage.removeItem("token"),window.location="/"):i.toast("Failed to get recommendation data",{title:"Error",variant:"danger",solid:!0});case 15:n.next=20;break;case 17:n.prev=17,n.t0=n["catch"](3),i.toast("Server connection error",{title:"Error",variant:"danger",solid:!0});case 20:case"end":return n.stop()}}),n,null,[[3,17]])})))()}},getters:{recommendations:function(t){return t.list.filter((function(t){return 1!=t.discontinue}))},panelRecommendations:function(t){return t.list.filter((function(e){var n=new Date(e.createdAt);return 1!=e.discontinue&&n<=t.currentDate}))}}},g=localStorage.getItem("token"),R={state:{list:[],currentDate:new Date},mutations:{setReminderList:function(t,e){t.list=e},addNewReminder:function(t,e){t.list.push(e)},removeNewReminder:function(t){t.list.pop()},setReminderCurrentDate:function(t,e){t.currentDate=e},SOCKET_ON_UPDATE_REMINDERS:function(t,e){t.list=e},SOCKET_ADD_REMINDER:function(t,e){if(t.list.length>0){var n=t.list[t.list.length-1];if(n.reminderID==e.reminderID)return}t.list.push(e)},SOCKET_UPDATE_REMINDER:function(t,e){var n=[];t.list.forEach((function(t){t.id!=e.id?n.push(t):n.push(e)})),t.list=n},SOCKET_DISCONTINUE_REMINDER:function(t,e){console.log("SOCKET_DISCONTINUE_REMINDER");var n=t.list.filter((function(t){return t.id!=e}));t.list=n}},actions:{addReminder:function(t,e){return Object(f["a"])(regeneratorRuntime.mark((function n(){var r,a,i,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.commit,a=e.data,i=e.toast,r("addNewReminder",a),n.prev=3,n.next=6,fetch(p["REMINDER_API_URL"],{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:"Bearer "+g},body:JSON.stringify(a)});case 6:o=n.sent,o.ok||(i.toast("Failed to add reminder data",{title:"Error",variant:"danger",solid:!0}),r("removeNewReminder")),n.next=14;break;case 10:n.prev=10,n.t0=n["catch"](3),i.toast("Server connection error",{title:"Error",variant:"danger",solid:!0}),r("removeNewReminder");case 14:case"end":return n.stop()}}),n,null,[[3,10]])})))()},updateReminder:function(t,e){return Object(f["a"])(regeneratorRuntime.mark((function n(){var r,a,i,o,s,c,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.state,a=t.commit,i=e.data,o=e.toast,s=r.list,c=[],s.forEach((function(t){t.id==i.id?c.push({id:i.id,description:i.description,createdAt:i.createdAt,patientId:i.patientId}):c.push(t)})),a("setReminderList",c),n.prev=6,n.next=9,fetch("".concat(p["REMINDER_API_URL"],"/").concat(i.id),{method:"PUT",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:"Bearer "+g},body:JSON.stringify(i)});case 9:u=n.sent,u.ok||(o.toast("Failed to update reminder data",{title:"Error",variant:"danger",solid:!0}),a("setReminderList",s)),n.next=17;break;case 13:n.prev=13,n.t0=n["catch"](6),o.toast("Server connection error",{title:"Error",variant:"danger",solid:!0}),a("setReminderList",s);case 17:case"end":return n.stop()}}),n,null,[[6,13]])})))()},discontinueReminder:function(t,e){return Object(f["a"])(regeneratorRuntime.mark((function n(){var r,a,i,o,s,c,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.state,a=t.commit,i=e.data,o=e.toast,s=r.list,c=s.filter((function(t){return t.id!=i.id})),a("setReminderList",c),n.prev=5,i["discontinue"]=!0,n.next=9,fetch("".concat(p["REMINDER_API_URL"],"/").concat(i.id),{method:"PATCH",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:"Bearer "+g},body:JSON.stringify(i)});case 9:u=n.sent,u.ok||(o.toast("Failed to discontinue reminder data",{title:"Error",variant:"danger",solid:!0}),a("setReminderList",s)),n.next=17;break;case 13:n.prev=13,n.t0=n["catch"](5),o.toast("Server connection error",{title:"Error",variant:"danger",solid:!0}),a("setReminderList",s);case 17:case"end":return n.stop()}}),n,null,[[5,13]])})))()},multiDiscontinueReminder:function(t,e){return Object(f["a"])(regeneratorRuntime.mark((function n(){var r,a,i,o,s,c,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=t.state,a=t.commit,i=e.selectedIds,o=e.toast,s=e.selectedDatas,c=r.list,u=c.filter((function(t){return!i.includes(t.id)})),a("setReminderList",u),s.forEach(function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e["discontinue"]=!0,t.next=4,fetch("".concat(p["REMINDER_API_URL"],"/").concat(e.id),{method:"PATCH",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:"Bearer "+g},body:JSON.stringify(e)});case 4:t.next=10;break;case 6:t.prev=6,t.t0=t["catch"](0),o.toast("Server connection error",{title:"Error",variant:"danger",solid:!0}),a("setReminderList",c);case 10:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}());case 6:case"end":return n.stop()}}),n)})))()},getReminders:function(t,e){return Object(f["a"])(regeneratorRuntime.mark((function n(){var r,a,i,o,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.commit,a=e.patientId,i=e.toast,null==g&&(g=localStorage.getItem("token")),n.prev=3,n.next=6,fetch("".concat(p["REMINDER_API_URL"],"?patientId=").concat(a),{headers:{Authorization:"Bearer "+g}});case 6:if(o=n.sent,!o.ok){n.next=14;break}return n.next=10,o.json();case 10:s=n.sent,r("setReminderList",s),n.next=15;break;case 14:"401"==o.status?(i.toast("Token is expired",{title:"Error",variant:"danger",solid:!0}),localStorage.removeItem("token"),window.location="/"):i.toast("Failed to get reminder data",{title:"Error",variant:"danger",solid:!0});case 15:n.next=20;break;case 17:n.prev=17,n.t0=n["catch"](3),i.toast("Server connection error",{title:"Error",variant:"danger",solid:!0});case 20:case"end":return n.stop()}}),n,null,[[3,17]])})))()}},getters:{reminders:function(t){return t.list.filter((function(t){return 1!=t.discontinue}))},panelReminders:function(t){return t.list.filter((function(e){var n=new Date(e.createdAt);return 1!=e.discontinue&&n<=t.currentDate}))}}},E=(n("c740"),{state:{style:1},mutations:{setStyle:function(t,e){t.style=e}},actions:{loadSetting:function(t){return Object(f["a"])(regeneratorRuntime.mark((function e(){var n,r,a,i,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,r=localStorage.getItem("token"),e.next=4,fetch(p["SETTING_API_URL"],{headers:{Authorization:"Bearer "+r}});case 4:if(a=e.sent,!a.ok){e.next=12;break}return e.next=8,a.json();case 8:i=e.sent,o=i.findIndex((function(t){return"style"==t.key})),s=i[o].value,n("setStyle",s);case 12:case"end":return e.stop()}}),e)})))()}},getters:{style:function(t){return 1==t.style?"info":"dark"}}}),D={state:{width:"29%",list:[],rows:[],focusRowIndex:-1,searchKeyword:""},mutations:{setRightPanelWidth:function(t,e){t.width=e},setRightPanelList:function(t,e){t.list=e},setRightPanelFocusRowIndex:function(t,e){t.focusRowIndex=e},setRightPanelRows:function(t,e){t.rows=e},setRightPanelSearchKeyword:function(t,e){t.searchKeyword=e}},getters:{rightPanelFocusRow:function(t){return t.rows[t.focusRowIndex]}},actions:{updateRightPanelRow:function(t){var e=t.rootState,n=t.commit,r=[],a=e.rightPanel.list;a.forEach((function(t){var n=e[t.key]["list"].filter((function(t){return 1!=t.discontinue}));r.push("".concat(t.key,"-0")),n.forEach((function(e,n){r.push("".concat(t.key,"-").concat(n+1))}))})),r.push("current-state-components-search-box"),n("setRightPanelRows",r)}}},y={state:{visibility:!1,tabList:[],recommendationTabType:"",recommendationData:null,reminderTabType:"",reminderData:null,tabValue:""},mutations:{setTabDialogVisibility:function(t,e){t.visibility=e},setRecommendationTabType:function(t,e){t.recommendationTabType=e},setRecommendationData:function(t,e){t.recommendationData=e},addNewTab:function(t,e){var n=e.name,r=t.tabList.filter((function(t){return t.name==n}));0==r.length&&t.tabList.push(e),t.tabValue=n},setTabValue:function(t,e){t.tabValue=e},setTabList:function(t,e){t.tabList=e},setReminderTabType:function(t,e){t.reminderTabType=e},setReminderData:function(t,e){t.reminderData=e},showAddRecommendationModal:function(t){var e={label:"Add Recommendation",value:n("d910").default,name:"tab-add-recommendation"};t.tabList=[e],t.recommendationTabType=p["ADD_RECOMMENDATION"],t.visibility=!0,t.tabValue=e.name},showMultiChangeRecommendationModal:function(t){var e=n("50fb");t.tabList=[{key:p["MULTIPLE_CHANGE_RECOMMENDATION"],value:e.default}],t.recommendationTabType=p["MULTIPLE_CHANGE_RECOMMENDATION"],t.visibility=!0},showChangeRecommendationsModal:function(t,e){var r=n("6ee5");t.tabList=[{key:p["ADD_RECOMMENDATION"],value:r.default}],t.visibility=!0,t.recommendationTabType=p["EDIT_RECOMMENDATION"],t.recommendationData=e},showAddReminderModal:function(t){var e=n("459b");t.tabList=[{key:p["ADD_REMINDER"],value:e.default}],t.reminderTabType=p["ADD_REMINDER"],t.visibility=!0},showMultiChangeReminderModal:function(t){var e=n("d157");t.tabList=[{key:p["MULTIPLE_CHANGE_REMINDER"],value:e.default}],t.reminderTabType=p["MULTIPLE_CHANGE_REMINDER"],t.visibility=!0},showChangeReminderModal:function(t,e){var r=n("459b");t.tabList=[{key:p["ADD_REMINDER"],value:r.default}],t.visibility=!0,t.reminderTabType=p["EDIT_REMINDER"],t.reminderData=e}}},k={state:{list:[],currentDate:"",zoomValue:1,originSize:null},mutations:{setstateOnASelectedTimeList:function(t,e){t.list=e},setstateOnASelectedTimeCurrentDate:function(t,e){t.currentDate=e},setstateOnASelectedTimeZoomValue:function(t,e){t.zoomValue=e}},actions:{getstateOnASelectedTimeComponents:function(t,e){return Object(f["a"])(regeneratorRuntime.mark((function n(){var r,a,i,o,s,c,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.commit,a=e.toast,i=e.type,o=localStorage.getItem("token"),n.prev=3,n.next=6,fetch(p["COMPONENT_API_URL"]+"/getByType/"+i,{method:"GET",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:"Bearer "+o}});case 6:if(s=n.sent,!s.ok){n.next=14;break}return n.next=10,s.json();case 10:c=n.sent,u=[],c.forEach((function(t){var e=p["STATE_ON_A_DAY_COMPONENTS"].filter((function(e){return e.key==t.name}));null!=e&&u.push(e[0].key)})),r("setstateOnASelectedTimeList",u);case 14:n.next=19;break;case 16:n.prev=16,n.t0=n["catch"](3),a.toast("Server connection error",{title:"Error",variant:"danger",solid:!0});case 19:case"end":return n.stop()}}),n,null,[[3,16]])})))()},zoomstateOnASelectedTime:function(){}},getters:{stateOnASelectedTimeList:function(t){var e=[];return t.list.forEach((function(t){var n=p["STATE_ON_A_DAY_COMPONENTS"].filter((function(e){return e.key==t}));e.push(n[0].value)})),e}}},_={state:{socialHistoryVisiblity:!1},mutations:{setSocialHistoryVisibility:function(t,e){t.socialHistoryVisiblity=e}}};r["default"].use(m["a"]);var I=new m["a"].Store({state:{userRole:"",searchComponentList:["recommendation (rex)","reminder (rem)","clear"],focusComponent:"",connectionStatus:!0,userId:-1},mutations:{setUserRole:function(t,e){t.userRole=e},setFocusComponent:function(t,e){t.focusComponent=e},setSearchComponentList:function(t,e){t.searchComponentList=e},setConnectionStatus:function(t,e){t.connectionStatus=e},setUserId:function(t,e){t.userId=e}},actions:{getRoleDetails:function(t,e){return Object(f["a"])(regeneratorRuntime.mark((function n(){var r,a,i,o,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.commit,a=localStorage.getItem("token"),n.next=4,fetch("".concat(p["ROLE_API_URL"],"/").concat(e),{headers:{Authorization:"Bearer "+a}});case 4:if(i=n.sent,!i.ok){n.next=13;break}return n.next=8,i.json();case 8:o=n.sent,r("setUserRole",o.name),s=o.availableComponents.split(","),s.push("clear"),r("setSearchComponentList",s);case 13:case"end":return n.stop()}}),n)})))()}},modules:{recommendation:v,reminder:R,setting:E,rightPanel:D,tabDialog:y,stateOnASelectedTime:k,dialog:_},plugins:[Object(h["a"])()]}),T=n("8c4f");r["default"].use(T["a"]);var N=[{path:"/",name:"Home",component:function(){return n.e("home").then(n.bind(null,"bb51"))}},{path:"/login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"a55b"))}},{path:"/reminder",name:"reminder",component:function(){return n.e("chunk-2d0af090").then(n.bind(null,"0d39"))}},{path:"/assessment",name:"assessment",component:function(){return n.e("chunk-2d21eaae").then(n.bind(null,"d716"))}},{path:"/service-statement",name:"service-statement",component:function(){return n.e("chunk-1166c84f").then(n.bind(null,"67d0"))}},{path:"/goals",name:"goals",component:function(){return n.e("chunk-6ffba00c").then(n.bind(null,"a92d"))}},{path:"/recommendation",name:"recommendation",component:function(){return n.e("chunk-59bd2da8").then(n.bind(null,"30ab"))}},{path:"/social-history",name:"social-history",component:function(){return Promise.all([n.e("chunk-998c2606"),n.e("chunk-1d11740a")]).then(n.bind(null,"9804"))}},{path:"/tab-dialog",name:"tab-dialog",component:function(){return Promise.all([n.e("chunk-998c2606"),n.e("chunk-57d60a1e")]).then(n.bind(null,"dc08"))}}],O=new T["a"]({mode:"history",base:"/",routes:N}),w=O,A=n("9b40"),L=n.n(A),x=n("3b09"),C=n("9483");Object(C["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var M=n("f617"),P=(n("dac4"),n("4d48")),S=n.n(P),U=(n("4bf4"),n("e9e9")),j=n("5c96"),$=n.n(j),z=(n("0fae"),n("b2d6")),B=n.n(z);r["default"].use(L.a);var F=n("f13c");r["default"].use(F),r["default"].use(x["a"]),r["default"].use(M["a"]),r["default"].use(S.a),r["default"].use(U),r["default"].use($.a,{locale:B.a}),r["default"].config.productionTip=!1,new r["default"]({store:I,router:w,render:function(t){return t(l)}}).$mount("#app")},"6ee5":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-tab",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v(" "+t._s(t.modalTitle)+" "),n("b-button",{attrs:{size:"sm",variant:"danger"},on:{click:t.closeTab}},[t._v("x")])]},proxy:!0}])},[n("label",[t._v("Description:")]),n("b-form-textarea",{attrs:{id:"textarea-state",state:t.validation,rows:"5",autofocus:""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),n("b-form-invalid-feedback",{attrs:{state:t.validation}},[t._v("Description content is required.")]),n("b-button",{staticClass:"float-right mb-2 mt-2",attrs:{variant:"primary",size:"sm",disabled:!t.validation},on:{click:t.save}},[t._v(t._s(t.buttonText))])],1)},a=[],i=(n("a4d3"),n("e01a"),n("4de4"),n("b441")),o=n("cc98"),s=n.n(o),c={data:function(){return{description:""}},computed:{type:function(){return this.$store.state.tabDialog.recommendationTabType},modalTitle:function(){return this.type==i["ADD_RECOMMENDATION"]?"Add Recommendation":"Edit Recommendation"},buttonText:function(){return this.type==i["ADD_RECOMMENDATION"]?"Save":"Update"},validation:function(){return this.description.length>0},id:function(){return this.$route.query.patient_id},updateData:function(){return this.$store.state.tabDialog.recommendationData},tabList:function(){return this.$store.state.tabDialog.tabList},userId:function(){return this.$store.state.userId}},methods:{save:function(){if(this.type==i["ADD_RECOMMENDATION"]){var t=new Date,e={createdAt:t.toDateString(),recommendationID:s()(),patientId:this.id,description:this.description,createdByUserId:this.userId};this.$store.dispatch("addRecommendation",{data:e,toast:this.$bvToast}),this.$store.dispatch("updateRightPanelRow"),this.description=""}else this.updateData["description"]=this.description,this.updateData["discontinuedByUserId"]=this.userId,this.updateData["createdByUserId"]=this.userId,this.$store.dispatch("updateRecommendation",{data:this.updateData,toast:this.$bvToast})},closeTab:function(){var t=this.tabList.filter((function(t){return t.key!=i["ADD_RECOMMENDATION"]}));this.$store.commit("setTabList",t)}},mounted:function(){this.type==i["EDIT_RECOMMENDATION"]&&(this.description=this.updateData.description)}},u=c,d=n("2877"),l=Object(d["a"])(u,r,a,!1,null,"2f08f9a8",null);e["default"]=l.exports},b441:function(t,e,n){n("d3b7"),t.exports={RECOMMENDATION_API_URL:"http://localhost:8000/recommendations",REMINDER_API_URL:"http://localhost:8000/reminders",SETTING_API_URL:"http://localhost:8000/settings",LOGIN_API_URL:"http://localhost:8000/auth/login",ROLE_API_URL:"http://localhost:8000/user-roles",SOCKET_API_URL:"http://localhost:8000",USER_API_URL:"http://localhost:8000/users",COMPONENT_API_URL:"http://localhost:8000/components",STATE_ON_A_DAY_COMPONENTS:[{key:"recommendation",value:function(){return Promise.all([n.e("chunk-79ad7cde"),n.e("chunk-2d20edb2")]).then(n.bind(null,"b0c1"))}},{key:"reminder",value:function(){return Promise.all([n.e("chunk-79ad7cde"),n.e("chunk-2d230e36")]).then(n.bind(null,"edcd"))}}],ADD_DIALOG:1,STYLE_1:1,STYLE_2:2,ADD_RECOMMENDATION:1,EDIT_RECOMMENDATION:2,MULTIPLE_CHANGE_RECOMMENDATION:3,ADD_REMINDER:4,EDIT_REMINDER:5,MULTIPLE_CHANGE_REMINDER:6,SOCIAL_HISTORY:7}},d157:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-tab",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v(" Multi change reminder "),n("b-button",{attrs:{size:"sm",variant:"danger"},on:{click:t.closeTab}},[t._v("x")])]},proxy:!0}])},[n("b-row",{attrs:{cols:"3"}},t._l(t.reminders,(function(e,r){return n("b-col",{key:"item-"+r},[n("label",[t._v("Description:")]),n("b-form-textarea",{attrs:{id:"textarea-state",rows:"5",autofocus:""},model:{value:e.description,callback:function(n){t.$set(e,"description",n)},expression:"item.description"}}),n("b-form-invalid-feedback",[t._v("Description content is required.")]),n("b-button",{staticClass:"float-right mb-2 mt-2",attrs:{variant:"primary",size:"sm"},on:{click:function(n){return t.update(e)}}},[t._v("Save")])],1)})),1)],1)},a=[],i=(n("a4d3"),n("e01a"),n("4de4"),n("4160"),n("159b"),n("b441")),o={computed:{items:function(){var t=this;return this.$store.state.reminder.list.filter((function(e){return e.patientId==t.id&&1!=e.discontinue}))},id:function(){return this.$route.query.patient_id},tabList:function(){return this.$store.state.tabDialog.tabList}},data:function(){return{reminders:[]}},mounted:function(){var t=this;this.items.forEach((function(e){t.reminders.push({id:e["id"],description:e["description"],createdAt:e["createdAt"],patientId:e["patientId"]})}))},methods:{update:function(t){this.$store.dispatch("updateReminder",{data:t,toast:this.$bvToast})},closeTab:function(){var t=this.tabList.filter((function(t){return t.key!=i["MULTIPLE_CHANGE_REMINDER"]}));this.$store.commit("setTabList",t)}}},s=o,c=n("2877"),u=Object(c["a"])(s,r,a,!1,null,"08614537",null);e["default"]=u.exports},d910:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",{attrs:{gutter:12}},[n("el-col",{attrs:{span:24}},[n("el-card",{staticClass:"box-card"},[n("el-form",{ref:"dynamicValidateForm",staticClass:"demo-dynamic",attrs:{model:t.dynamicValidateForm}},[t._l(t.dynamicValidateForm.domains,(function(e){return n("el-form-item",{key:e.key,attrs:{prop:"desc","label-position":"top",rules:{required:!0,message:"Description can not be blank",trigger:"blur"}}},[n("el-row",[n("el-col",{attrs:{span:2,offset:24}},[n("i",{staticClass:"el-icon-close",on:{click:function(n){return n.preventDefault(),t.removeDomain(e)}}})])],1),n("el-input",{attrs:{span:8,type:"textarea",placeholder:"You may enter multi line text",autosize:{minRows:4}},model:{value:e.value,callback:function(n){t.$set(e,"value",n)},expression:"domain.value"}})],1)})),n("el-form-item",[n("el-button",{attrs:{type:"success",size:"small"},on:{click:function(e){return t.submitForm("dynamicValidateForm")}}},[t._v("Save")]),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.addDomain}},[t._v("Add one more")])],1)],2)],1)],1)],1)],1)},a=[],i=(n("c975"),n("a434"),{data:function(){return{dynamicValidateForm:{domains:[{key:1,value:""}]}}},methods:{removeDomain:function(t){var e=this.dynamicValidateForm.domains.indexOf(t);-1!==e&&this.dynamicValidateForm.domains.splice(e,1)},addDomain:function(){this.dynamicValidateForm.domains.push({key:Date.now(),value:""})}}}),o=i,s=n("2877"),c=Object(s["a"])(o,r,a,!1,null,"aaf11752",null);e["default"]=c.exports}});
//# sourceMappingURL=app.6169cfc7.js.map