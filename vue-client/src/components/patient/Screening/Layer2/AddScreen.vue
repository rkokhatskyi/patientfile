<template>
  <div>
    <!-- <el-tab-pane> -->
    <el-row :gutter="12">
      <el-col :span="24">
        <el-card class="box-card" :body-style="{ padding: '3px' }">
          <el-form :model="screenForm" ref="screenForm" class="demo-dynamic">

            <el-card class="box-card" v-for="(domain, index) in screenForm.screenings" :key="index" style="margin-bottom: 20px;">
              <el-row>
                <el-col :span="2" :offset="24">
                  <i class="el-icon-close" @click.prevent="removeDomain(domain)"></i>
                </el-col>
              </el-row>
              <el-form-item
                :prop="'screenings.' + index + '.value'" style="font-weight:bold" 
                label-position="top" label="value"
                :rules="{required: true, message: 'value can not be blank', trigger: 'blur'}"
              >
              <p class="lbl-screen">Select screen:</p>
              <el-select v-model="domain.value" filterable placeholder="Select">
                <el-option
                  v-for="item in getMasterScreenList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>

          </el-card>

            <el-form-item>
              <el-button type="success" @click="submitForm('screenForm')" size="small">Save</el-button>
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

//import uniqid from "uniqid";

export default {
  data() {
    return {
      id: this.$route.query.patient_id,
      screenForm: { screenings: [{ value: "" }] },
      masterScreenList: [],
    };
  },
  mounted() {
    // This is a lifecycle hook. Other lifecycle hooks are created, updated etc. Ref: https://vuejs.org/v2/api/#Options-Lifecycle-Hooks

    const params = {
      patientId: this.$route.query.patient_id,
      notify: this.$notify,
      userId: this.$store.state.userId,
    };
    this.$store.dispatch("dbGetMasterScreeningList", params);

    // 'Bipolar' 'Schizophrenia' 'Anxiety (GAD-7)' 'ADHD' 'Substance Abuse' 'Alcoholism screening' 
    // 'Depression' 'Schizophrenia' 'PTSD' 'Substance Abuse' 'PTSD' 'Drug Use'
    
  },
  methods: {
    addDomain() {
      this.screenForm.screenings.push({
        value: ""
      });
    },
    removeDomain(item) {
      var index = this.screenForm.screenings.indexOf(item);
      if (index !== -1) {
        this.screenForm.screenings.splice(index, 1);
      }
    },
    submitForm(formName) {
      const vm = this;
      this.$refs[formName].validate(async valid => {
        if (valid) {

            // Add screen
            let apptDate = new Date().toISOString().slice(0, 19).replace('T', ' ') 
            let screenList = [];

            // create screen data rowSet
            this.screenForm.screenings.forEach(item => {
              screenList.push({
                //uuid: uniqid(),
                screenUUID: item.value,
                patientUUID: vm.id,
                notes: 'test note',
                recordChangedByUUID:this.getUserId,
                recordChangedFromIPAddress: ''
              });
            });
            console.log(screenList);

            // store all screel data in db and get the fetch screen list
            await this.$store.dispatch("addPatientScreen", {
              data: screenList,
              notify: this.$notify,
              patientUUID: vm.id,
              date: apptDate
            });

            this.screenForm = { screenings: [{ value: "" }] };
            
          
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
  computed: {
    getUserId() {
      return this.$store.state.userId;
    },
    userScreenList() {
      return this.$store.state.screening.screeningList;
    },
    getMasterScreenList() {
      let masterScreenList = [];
      const dbMasterScreenList = this.$store.state.screening.screenMasterList;
      const currentScreenList  = this.$store.state.screening.screeningList;
      dbMasterScreenList.forEach(list => {
        if (currentScreenList.filter(item => item.scientificName == list.scientificName).length == 0) {
          masterScreenList.push({
            value: list.uuid, 
            label: list.scientificName
          });
        }
      })
      return masterScreenList;
    }
  },
  /*created: function() {
      // imagine getDataFor calls some API via AJAX
      this.masterScreenList = this.getMasterScreenList
  },*/
};
</script>

<style lang="scss" scoped>
.lbl-screen{
  padding: 0;
  margin: 0;
}
</style>