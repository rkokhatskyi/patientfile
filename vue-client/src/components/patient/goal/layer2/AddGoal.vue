<template>
  <div>
    <!-- <el-tab-pane> -->
    <el-row :gutter="12">
      <el-col :span="24">
        <el-card class="box-card">
          <el-form label-position="top" :model="goalForm" ref="goalForm" class="demo-dynamic">

            <el-card class="box-card" v-for="(domain, index) in goalForm.goals" :key="index" style="margin-bottom: 20px;">
              <el-row>
                <el-col :span="2" :offset="24">
                  <i class="el-icon-close" @click.prevent="removeDomain(domain)"></i>
                </el-col>
              </el-row>
              <el-form-item
                :prop="'goals.' + index + '.description'"
                style="font-weight:bold"
                label-position="top"
                label="Description"
                :rules="{
                  required: true, message: 'Description can not be blank', trigger: 'blur'
                }"
              >
                <el-input :span="8" type="textarea" v-model="domain.description" placeholder="You may enter multi line text" :autosize="{ minRows: 4}" :autofocus="true"></el-input>
              </el-form-item>

              <el-form-item
                :prop="'goals.' + index + '.startDate'"
                style="font-weight:bold"
                label-position="top"
                label="Start date of goal"
                :rules="{
                  required: true, message: 'Start date of goal can not be blank', trigger: 'blur'
                }"
              >
                <el-date-picker :span="8" v-model="domain.startDate" type="date" placeholder="Pick a day" :picker-options="pickerOptions" style="width: 100%;"></el-date-picker>
              </el-form-item>
              <el-form-item
                :prop="'goals.' + index + '.score'" 
                label-position="top" 
                style="font-weight:bold" 
                label="Score" 
              >
                <el-slider v-model="domain.score" :format-tooltip="formatTooltip"></el-slider>
              </el-form-item>
            </el-card>

            <el-form-item>
              <el-button type="success" @click="submitForm('goalForm')" size="small">Save</el-button>
              <el-button type="primary" @click="addDomain" size="small">Add one more</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
    <!-- </el-tab-pane> -->
  </div>
</template>

<script>
/**
 * Multi Add Goal form.
 * @displayName Add Goal
 */
import { RATE_GOAL } from "@/const/others.js";
export default {
  data() {
    return {
      id: this.$route.query.patient_id,
      goalForm: { goals: [{ description: "", startDate: "", score: "" }] },
      pickerOptions: {
        shortcuts: [{
          text: 'Today',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: 'Yesterday',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: 'A week ago',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      }
    };
  },
  methods: {
    addDomain() {
      this.goalForm.goals.push({
        description: "",
        startDate: "",
        score: ""
      });
    },
    removeDomain(item) {
      var index = this.goalForm.goals.indexOf(item);
      if (index !== -1) {
        this.goalForm.goals.splice(index, 1);
      }
    },
    submitForm(formName) {
      const vm = this;
      this.$refs[formName].validate(async valid => {
        if (valid) {
          if (this.type == RATE_GOAL) {
            this.updateData["description"] = this.goalForm.goals[0].description;
            this.updateData["startDate"] = this.goalForm.goals[0].startDate;
            this.updateData["score"] = this.goalForm.goals[0].score;
            this.updateData["discontinuedByUserId"] = this.userId;
            this.updateData["recordChangedByUUID"] = this.userId;
            this.$store.dispatch("updateGoal", {
              data: this.updateData,
              notify: this.$notify
            });
          } else {
            // Add
            let goalList = [];
            this.goalForm.goals.forEach(item => {
              goalList.push({
                description: item.description,
                startDate: item.startDate,
                score: item.score,
                patientUUID: vm.id,
                //uuid: uniqid(),
                recordChangedByUUID: this.userId
              });
            });
            await this.$store.dispatch("addGoal", {
              data: goalList,
              notify: this.$notify,
              patientUUID: this.id
            });
            await this.$store.dispatch("getGoals", {
              patientUUID: this.id,
              notify: this.$notify
            });
            this.goalForm = { goals: [{ description: "", startDate: "", score: "" }] };
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    formatTooltip(val) {
      return val ;
    }
  },
  computed: {
    type() {
      return this.$store.state.multiTabDialogLayer2.goalTabType;
    },
    updateData() {
      return this.$store.state.multiTabDialogLayer2.goalData;
    },
    userId() {
      return this.$store.state.userId;
    }
  },
  mounted() {
    if (this.type == RATE_GOAL) {
      this.goalForm = { goals: [{ description: this.updateData.description, startDate: this.updateData.startDate, score: this.updateData.score }] };
    }
  },
  watch: {
    updateData() {
      this.goalForm = { goals: [{ description: this.updateData.description, startDate: this.updateData.startDate, score: this.updateData.score }] };
    }
  }
};
</script>

<style>
.el-form--label-top .el-form-item__label {
    line-height: 0 !important;
}
</style>