<template>
  <div style="text-align: center;">
    <el-autocomplete
      class="inline-input"
      v-model="keyword"
      :fetch-suggestions="querySearch"
      :trigger-on-focus="false"
      placeholder="Please Input"
      prefix-icon="el-icon-search"
      @select="handleSelect"
      clearable
    ></el-autocomplete>
  </div>
</template>

<script>
import {
  ADD_RECOMMENDATION,
  MULTIPLE_CHANGE_RECOMMENDATION,
  ADD_REMINDER,
  MULTIPLE_CHANGE_REMINDER,
  SOCIAL_HISTORY,
  ADD_DIAGNOSIS,
  MULTIPLE_CHANGE_ASSESSMENT,
  ADD_SERVICE_STATEMENTS, 
  MULTIPLE_CHANGE_SERVICE_STATEMENTS,
  ADD_GOAL, 
  MULTIPLE_RATE_GOAL,
  ADD_SCREEN
} from "@/const/others.js";
export default {
  data() {
    return {
      keyword: "",
      componentList: [
        {
          value: "Add Recommendation",
          key: ADD_RECOMMENDATION
        },
        {
          value: "Multi change recommendation",
          key: MULTIPLE_CHANGE_RECOMMENDATION
        },
        {
          value: "Social History",
          key: SOCIAL_HISTORY
        },
        {
          value: "Add Diagnosis",
          key: ADD_DIAGNOSIS
        },
        {
          value: "Multi change assessment",
          key: MULTIPLE_CHANGE_ASSESSMENT
        },
        {
          value: "Add service statements",
          key: ADD_SERVICE_STATEMENTS
        },
        {
          value: "Multi change service statements",
          key: MULTIPLE_CHANGE_SERVICE_STATEMENTS
        },
        {
          value: "Add goal",
          key: ADD_GOAL
        },
        {
          value: "Multi rate goals",
          key: MULTIPLE_RATE_GOAL
        },
        {
          value: "Add screen",
          key: ADD_SCREEN
        },
        {
          value: "Add reminder",
          key: ADD_REMINDER
        },
        {
          value: "Multi change reminder",
          key: MULTIPLE_CHANGE_REMINDER
        }
      ]
    };
  },
  mounted() {},
  methods: {
    querySearch(queryString, cb) {
      let results = [];
      if (queryString.length == 0) {
        results = [];
      }

      results = this.componentList.filter(item => {
        return item.value.toLowerCase().search(queryString) > -1;
      });

      cb(results);
    },
    handleSelect(item) {
      const { key } = item;
      if (key == ADD_RECOMMENDATION) {
        const addRecommendationTab = {
          label: "Add Recommendation",
          value: require("../patient/Recommendations/Layer2/AddRecommendation.vue").default,
          name: "tab-add-recommendation"
        };
        this.$store.commit("addNewTab", addRecommendationTab);
      } else if (key == MULTIPLE_CHANGE_RECOMMENDATION) {
        const multiChangeRecommendationTab = {
          label: "Multi change recommendation",
          value: require("../patient/Recommendations/Layer2/MultiChangeRecommendation").default,
          name: "tab-multi-change-recommendation"
        };
        this.$store.commit("addNewTab", multiChangeRecommendationTab);
      } else if (key == SOCIAL_HISTORY) {
        const socialHistoryTab = {
          label: "Social History",
          value: require("../patient/social-history/show-change-form-in-layer2-tab").default,
          name: "tab-social-history"
        };
        this.$store.commit("addNewTab", socialHistoryTab);
      } else if (key == ADD_DIAGNOSIS) {
        const addDiagnosisTab = {
          label: "Add Diagnosis",
          value: require("../patient/diagnosis/layer2/AddDiagnosis.vue").default,
          name: "tab-add-diagnosis"
        };
        this.$store.commit("addNewTab", addDiagnosisTab);
      } else if (key == MULTIPLE_CHANGE_ASSESSMENT) {
        const multiChangeAssessmentTab = {
          label: "Multi change assessment diagnosis",
          value: require("../patient/diagnosis/layer2/MultiChangeAssessment.vue").default,
          name: "tab-multi-change-assessment"
        };
        this.$store.commit("addNewTab", multiChangeAssessmentTab);
      } else if (key == ADD_SERVICE_STATEMENTS) {
        const addServiceStatementsTab = {
          label: "Add service statements",
          value: require("../patient/service-statements/AddServiceStatements.vue").default,
          name: "tab-add-service-statements"
        };
        this.$store.commit("addNewTab", addServiceStatementsTab);
      } else if (key == MULTIPLE_CHANGE_SERVICE_STATEMENTS) {
        const multiChangeServiceStatementsTab = {
          label: "Multi change service statements",
          value: require("../patient/service-statements/MultiChangeServiceStatements.vue").default,
          name: "tab-multi-change-service-statements"
        };
        this.$store.commit("addNewTab", multiChangeServiceStatementsTab);
      } else if (key == ADD_GOAL) {
        const addGoalTab = {
          label: "Add goal",
          value: require("../patient/goal/layer2/AddGoal.vue").default,
          name: "tab-add-goal"
        };
        this.$store.commit("addNewTab", addGoalTab);
      } else if (key == MULTIPLE_RATE_GOAL) {
        const multiChangeGoalTab = {
          label: "Multi rate goal",
          value: require("../patient/goal/layer2/MultiChangeGoal").default,
          name: "tab-multi-change-goal"
        };
        this.$store.commit("addNewTab", multiChangeGoalTab);
      }else if (key == ADD_SCREEN) {
        const addScreenTab = {
          label: "Add screen",
          value: require("../patient/Screening/Layer2/AddScreen.vue").default,
          name: "tab-add-screen"
        };
        this.$store.commit("addNewTab", addScreenTab);
      }
    }
  }
};
</script>

<style lang="scss">
</style>