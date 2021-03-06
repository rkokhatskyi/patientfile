<template>
  <div v-elresize @elresize="handleResize">
    <el-tabs type="card" v-model="tab">
      <el-tab-pane v-for="(tab, index) in tabData" :key="`tab-${index}`" :label="tab.label">
        <!-- Ref: https://github.com/WakuwakuP/element-ui-el-table-draggable#animate -->
        <el-table-draggable>
          <el-table
            ref="dataTable"
            :data="tab.tableData"
            @selection-change="handleSelectionChange"
            @cell-mouse-enter="handleCellMouseEnter"
            @cell-mouse-leave="handleCellMouseLeave"
            :row-class-name="tableRowClassName"
            size="mini"
          >
            <el-table-column type="expand" v-if="isExpandable">
              <!-- <template slot-scope="props"> -->
              <template slot-scope="scope">
                <p
                  v-for="(column, index_expand_row) in tab.columns"
                  :key="`tab-expand-row-${index_expand_row}`"
                >{{column.label}}: {{scope.row[column.field]}}</p>
                <div>
                  <el-button
                    size="mini"
                    v-if="tab.rowActions.indexOf('C') > -1"
                    @click="handleClickOnCInDataRow(scope.$index, scope.row)"
                  >Change</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    v-if="tab.rowActions.indexOf('D') > -1"
                    @click="handleClickOnDInDataRow(scope.$index, scope.row)"
                  >Discontinue</el-button>
                </div>
              </template>
            </el-table-column>
            <el-table-column type="selection" v-if="isCurrentDate"></el-table-column>

            <el-table-column
              v-for="(column, index_column) in columns"
              :key="`tab-${index}-column-${index_column}`"
              :label="column.label "
              :property="column.field"
              :sortable="column.sortable"
            ></el-table-column>
            <el-table-column>
              <template
                slot-scope="scope"
                v-if="(scope.row.uuid == mouseOverRowId || (`${keyId}-${scope.$index+1}` == focusRow && typeOfStateDisplayArea == 'CurrentStateDisplayArea')) && isCurrentDate"
              >
                <el-button
                  type="text"
                  size="mini"
                  v-if="tab.rowActions.indexOf('C') > -1"
                  @click="handleClickOnCInDataRow(scope.$index, scope.row)"
                  style="padding: 0px;"
                >C</el-button>
                <el-button
                  type="text"
                  size="mini"
                  v-if="tab.rowActions.indexOf('D') > -1"
                  @click="handleClickOnDInDataRow(scope.$index, scope.row)"
                  style="padding: 0px;"
                >D</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-table-draggable>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ElTableDraggable from "element-ui-el-table-draggable"; // This allows rows to be dragged up or down
export default {
  props: [
    "ctName",
    "keyId",
    "typeOfStateDisplayArea",
    "columns",
    "typeOfStateDisplayAreaSpecificStyleToApply"
  ],
  components: { ElTableDraggable },
  data() {
    return {
      mouseOverRowId: "",
      isExpandable: false,
      width: 0,
      showActionColumn: false,
      originMyData: [],
      tab: 0
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.$emit("handleSelectionChange", val);
    },
    handleClickOnCInDataRow(index, row) {
      this.$emit("handleClickOnCInDataRow", row);
    },
    handleClickOnDInDataRow(index, row) {
      this.$emit("handleClickOnDInDataRow", row);
    },
    handleCellMouseEnter(row) {
      this.mouseOverRowId = row.uuid;
    },
    handleCellMouseLeave() {
      this.mouseOverRowId = "";
    },
    handleResize(data) {
      this.width = data.target.clientWidth;
      if (this.width < 380) {
        this.isExpandable = true;
      } else {
        this.isExpandable = false;
      }
    },
    tableRowClassName({ rowIndex }) {
      if (
        this.focusRow == `${this.keyId}-${rowIndex + 1}` &&
        this.typeOfStateDisplayArea == "CurrentStateDisplayArea"
      ) {
        return "focus-row";
      }
    },
    checkChangePriority() {
      if (
        this.typeOfStateDisplayArea == "CurrentStateDisplayArea" &&
        this.originMyData.length == this.myData.length
      ) {
        let changedList = [];
        for (var i = 0; i < this.originMyData.length; i++) {
          const originData = this.originMyData[i];
          const currentData = this.myData[i];
          if (originData.priority != currentData.priority) {
            changedList.push({
              uuid: currentData.uuid,
              priority: originData.priority
            });
            currentData.priority = originData.priority;
          }
        }
        if (changedList.length > 0) {
          this.$emit("updatePriority", changedList);
          this.changedList = [];

          let newList = [];
          this.myData.forEach(item => {
            newList.push({ priority: item.priority });
          });
          this.originMyData = newList;
          // this.originMyData = this.myData;
        }
      }

      // let isChanged = false;
      // this.originMyData.forEach((data, index) => {
      //   const currentData = this.myData[index];
      //   if (
      //     currentData != null &&
      //     data.priority != null &&
      //     currentData.priority != null
      //   ) {
      //     if (data.priority != currentData.priority) {
      //       isChanged = true;
      //     }
      //   }
      // });
      // if (isChanged) {
      //   console.log("the priority is changed");
      //   this.myData.map((data, index) => {
      //     data.priority = index + 1;
      //   });
      //   // let changedData = []
      //   this.$emit("updatePriority", this.myData);
      // }
      // let changedData = [];
      // this.myData.map((data, index) => {
      //   const originData = this.originMyData[index];
      //   if (data.priority != originData.priority) {
      //     isChanged = true;
      //     data.priority = index + 1;
      //     changedData.push(data);
      //   }
      // });

      // if (isChanged) {
      //   console.log("the priority is changed");
      //   console.log(changedData);
      //   this.$emit("updatePriority", changedData);
      // }
    }
  },
  mounted() {
    let apptDate = new Date()
      .toISOString()
      .slice(0, 19)
      .replace("T", " "); // Ref: https://stackoverflow.com/questions/5129624/convert-js-date-time-to-mysql-datetime
    const params = {
      patientId: this.$route.query.patient_id,
      notify: this.$notify,
      userId: this.$store.state.userId,
      date: apptDate
    };
    if (this.typeOfStateDisplayArea == "CurrentStateDisplayArea") {
      this.$store.dispatch("dbGetMyRecommendationsInSM", params);
      this.$store.dispatch("dbGetOtherRecommendationsInSM", params);
    }
  },
  computed: {
    focusRow() {
      return this.$store.getters.CurrentStateDisplayAreaFocusRow;
    },
    myData() {
      if (this.tabData.length > 0) {
        return this.tabData[0].tableData;
      }
      return [];
    },
    tabData() {
      let myList = [];
      let othersList = [];
      if (this.typeOfStateDisplayArea == "CurrentStateDisplayArea") {
        myList = this.$store.state.recommendation.yourRecommendationsList;
        othersList = this.$store.state.recommendation.othersList;
      } else {
        const timeOfState = this.timeOfState.split(" ")[0];
        myList = this.$store.state.recommendation
          .multiStateYourRecommendationsList[timeOfState];
        othersList = this.$store.state.recommendation
          .multiStateOtherRecommendationsList;
      }

      return [
        {
          label: "Yours",
          tableData: myList,
          rowActions: ["C", "D"]
        },
        {
          label: "Other's",
          tableData: othersList,
          rowActions: ["C", "D"],
          selectedColumn: ["description"]
        }
      ];
    },
    isCurrentDate() {
      if (
        this.typeOfStateDisplayAreaSpecificStyleToApply != null &&
        this.typeOfStateDisplayAreaSpecificStyleToApply != ""
      ) {
        return false;
      }
      return true;
    },
    timeOfState() {
      return this.$store.state.stateAtSelectedTime.timeOfState;
    }
  },
  watch: {
    myData() {
      if (
        this.myData.length > 0 &&
        this.originMyData.length != this.myData.length
      ) {
        console.log("Initialize origin data");
        let newPriorityList = [];
        this.myData.forEach(data => {
          newPriorityList.push({
            priority: data.priority
          });
        });
        this.originMyData = newPriorityList;
      }
      this.checkChangePriority();
    },
    tab() {
      console.log("ABC");
      console.log(this.typeOfStateDisplayArea);
      if (this.typeOfStateDisplayArea == "CurrentStateDisplayArea") {
        const tableList = this.tabData[this.tab].tableData;
        this.$emit("updateTableList", tableList);
        this.$store.dispatch("updateCurrentStateDisplayAreaRow");
      }
    }
  }
};
</script>

<style lang="scss" >
.el-table .focus-row {
  background: oldlace;
}
</style>