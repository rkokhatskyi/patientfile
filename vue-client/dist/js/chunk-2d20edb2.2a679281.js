(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20edb2"],{b0c1:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"recommendation-panel"}},[i("b-card",{scopedSlots:t._u([{key:"header",fn:function(){return[i("CardHeader",{attrs:{title:"Recommendation",actions:"[A,M,F,D]"}})]},proxy:!0}])},[i("b-card-text",[i("DataViewTable",{attrs:{data:t.tableData}})],1)],1)],1)},n=[],o=(i("4160"),i("159b"),i("180d")),a=i("19de"),r={name:"recommendation-panel",components:{CardHeader:o["a"],DataViewTable:a["a"]},data:function(){return{selected:[],updateStatus:0}},computed:{items:function(){return this.$store.getters.panelRecommendations},fields:function(){return this.selected.length>0?["Description","Created At"]:["Description","Created At","Action"]},id:function(){return this.$route.query.patient_id},style:function(){return this.updateStatus>0?"success":this.$store.getters.style},itemCount:function(){return this.items.length},tableData:function(){var t=this.$store.getters.recommendations;return[{label:"Yours",columns:[{label:"Description",field:"description",responsiveness_priority:1},{label:"Created At",field:"createdAt",responsiveness_priority:2},{label:"",field:"action",responsiveness_priority:3,display:"on-row-active"}],rows:t,actions:["C","D"]},{label:"Other's",columns:[{label:"Description",field:"description",responsiveness_priority:1},{label:"Created At",field:"createdAt",responsiveness_priority:2},{label:"",field:"action",responsiveness_priority:3,display:"on-row-active"}],rows:t,actions:["C"]},{label:"Custom",columns:[{label:"Description",field:"description",responsiveness_priority:1},{label:"Created At",field:"createdAt",responsiveness_priority:2},{label:"",field:"action",responsiveness_priority:3,display:"on-row-active"}],rows:t,actions:["D"]}]}},mounted:function(){this.$store.dispatch("getRecommendations",{patientId:this.id,toast:this.$bvToast})},watch:{itemCount:function(){var t=this;this.updateStatus=1,setTimeout((function(){t.updateStatus=0}),2e3)}},methods:{onRowSelected:function(t){var e=[],i=!1;this.selected.forEach((function(s){s.id==t.id?i=!0:e.push(s)})),i?this.selected=e:this.selected.push(t)},showAddModal:function(){this.$store.commit("showAddRecommendationModal")},openEditModal:function(t){this.$store.commit("showChangeRecommendationsModal",t)},discontinueItem:function(t){this.$store.dispatch("discontinueRecommendation",{data:t,toast:this.$bvToast})},multidiscontinue:function(){var t=[],e=[];this.selected.forEach((function(i){t.push(i.id),e.push(i)})),this.$store.dispatch("multidiscontinueRecommendation",{selectedIds:t,selectedDatas:e,toast:this.$bvToast})},showMultiChangeModal:function(){this.$store.commit("showMultiChangeRecommendationModal")},getFormatDate:function(t){var e={year:"numeric",month:"short",day:"numeric"};return new Date(t).toLocaleDateString("en-us",e)}},beforeDestroy:function(){clearInterval(this.timer)}},c=r,d=i("2877"),l=Object(d["a"])(c,s,n,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d20edb2.2a679281.js.map