(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},3625:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[e._v("Reminder Card")])])])],1)},o=[],s={},r=s,a=n("2877"),c=Object(a["a"])(r,i,o,!1,null,"06b822f2",null);t["default"]=c.exports},"5ced":function(e,t,n){},"6e88":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[e._v("Recommendation Card")]),n("div",{staticStyle:{float:"right"}},[n("el-button",{attrs:{type:"text",size:"mini"},on:{click:e.showAddRecommendationDialog}},[e._v("A")])],1)])])],1)},o=[],s={methods:{showAddRecommendationDialog:function(){console.log("open add dialog"),this.$store.commit("showAddRecommendationModal")}}},r=s,a=n("2877"),c=Object(a["a"])(r,i,o,!1,null,"1e6a7a86",null);t["default"]=c.exports},"841c":function(e,t,n){"use strict";var i=n("d784"),o=n("825a"),s=n("1d80"),r=n("129f"),a=n("14c3");i("search",1,(function(e,t,n){return[function(t){var n=s(this),i=void 0==t?void 0:t[e];return void 0!==i?i.call(t,n):new RegExp(t)[e](String(n))},function(e){var i=n(t,e,this);if(i.done)return i.value;var s=o(e),c=String(this),d=s.lastIndex;r(d,0)||(s.lastIndex=0);var l=a(s,c);return r(s.lastIndex,d)||(s.lastIndex=d),null===l?-1:l.index}]}))},bb51:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Split",{staticStyle:{height:"100vh"},on:{onDrag:e.onDrag}},[n("SplitArea",{attrs:{size:70,minsize:100,id:"stateOnASelectedTime"}},[n("left-panel-header")],1),n("SplitArea",{attrs:{size:30,minsize:100}},[e.rightPanelComponents.length>0?n("div",e._l(e.rightPanelComponents,(function(e,t){return n(e.value,{key:"right-component-"+t,tag:"component"})})),1):e._e(),n("current-state-components-search-box",{ref:"search_box",on:{renderRightPanel:e.renderRightPanel}})],1)],1),n("tab-dialog")],1)},o=[];n("4160"),n("d3b7"),n("ac1f"),n("841c"),n("1276"),n("159b");Promise.all([n.e("chunk-79ad7cde"),n.e("chunk-2d20edb2")]).then(n.bind(null,"b0c1")),Promise.all([n.e("chunk-79ad7cde"),n.e("chunk-2d230e36")]).then(n.bind(null,"edcd")),n.e("chunk-2d0c4df8").then(n.bind(null,"3d4e"));var s=function(){return n.e("chunk-dd65ca52").then(n.bind(null,"6bc6"))},r=function(){return n.e("chunk-6f07a559").then(n.bind(null,"17ba"))},a=function(){return Promise.all([n.e("chunk-998c2606"),n.e("chunk-13df7e30")]).then(n.bind(null,"dc08"))},c={name:"Home",components:{TabDialog:a,stateOnASelectedTimeHeader:s,SearchBox:r},data:function(){return{searchKeyword:"",stateOnASelectedTimeWidth:70}},computed:{focusComponent:function(){return this.$store.state.focusComponent},rightPanelComponents:function(){return this.$store.state.rightPanel.list},stateOnASelectedTimeComponents:function(){return this.$store.getters.stateOnASelectedTimeList}},beforeCreate:function(){var e=[{key:"recommendation",value:n("6e88").default},{key:"reminder",value:n("3625").default}];this.$store.commit("setRightPanelList",e)},mounted:function(){window.addEventListener("keydown",this.keydownHandler),this.$store.commit("setFocusComponent",""),this.$store.commit("setRightPanelFocusRowIndex",-1)},methods:{onDrag:function(e){var t=e[1];this.$store.commit("setRightPanelWidth","calc(".concat(t,"% - 4px) ")),this.stateOnASelectedTimeWidth=e[0]},keydownHandler:function(e){var t=this.$store.state.rightPanel.focusRowIndex,n=this.$store.state.rightPanel,i=n.rows,o=n.searchKeyword;if(!(o.length>0)){"`"==e.key?(console.log("set focus to the search box"),t=i.length-1,this.$refs.search_box.setFocus(),this.$store.commit("setRightPanelFocusRowIndex",t)):"ArrowDown"==e.key?(t==i.length-1?t=0:t+=1,this.$store.commit("setRightPanelFocusRowIndex",t)):"ArrowUp"==e.key&&(0==t?t=i.length-1:t-=1,this.$store.commit("setRightPanelFocusRowIndex",t));var s=i[t];if(null!=s){var r=s.split("-"),a=r[0],c=r[1],d=this.$store.state.tabDialog.visibility;if(1!=d)if(c>0){if("c"==e.key){if("recommendation"==a){var l=this.$store.getters.recommendations,h=l[c-1];this.$store.commit("showChangeRecommendationsModal",h)}else if("reminder"==a){var u=this.$store.getters.reminders,m=u[c-1];this.$store.commit("showEditReminderModal",m)}}else if("d"==e.key){if("recommendation"==a){var f=this.$store.getters.recommendations,g=f[c-1];this.$store.dispatch("discontinueRecommendation",{data:g,toast:this.$bvToast})}else if("reminder"==a){var v=this.$store.getters.reminders,p=v[c-1];this.$store.dispatch("discontinueReminder",{data:p,toast:this.$bvToast})}this.updateRightPanelRows()}}else"a"==e.key?"recommendation"==a?this.$store.commit("showAddRecommendationModal"):"reminder"==a&&this.$store.commit("showAddReminderModal"):"m"==e.key&&("recommendation"==a?this.$store.commit("showMultiChangeRecommendationModal"):"reminder"==a&&this.$store.commit("showMultiChangeReminderModal"))}}},renderRightPanel:function(e){if("clear"==e)this.$store.commit("setRightPanelList",[]);else if(e.search("recommendation")>-1){var t=[];this.rightPanelComponents.forEach((function(e){"recommendation"!=e.key&&t.push(e)})),t.push({key:"recommendation",value:n("6e88").default}),this.$store.commit("setRightPanelList",t)}else if(e.search("reminder")>-1){var i=[];this.rightPanelComponents.forEach((function(e){"reminder"!=e.key&&i.push(e)})),i.push({key:"reminder",value:n("3625").default}),this.$store.commit("setRightPanelList",i)}this.updateRightPanelRows()},updateRightPanelRows:function(){this.$store.dispatch("updateRightPanelRow")}},beforeDestroy:function(){window.removeEventListener("keydown",this.keydownHandler)}},d=c,l=(n("cccb"),n("2877")),h=Object(l["a"])(d,i,o,!1,null,null,null);t["default"]=h.exports},cccb:function(e,t,n){"use strict";var i=n("5ced"),o=n.n(i);o.a}}]);
//# sourceMappingURL=home.59e2439a.js.map