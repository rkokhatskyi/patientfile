<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <CardHeader
          ctName="AI Scribe"
          actions="A,M,F,D"
          :typeOfStateDisplayArea="typeOfStateDisplayArea"
          @handleClickOnAInCardHeader="handleClickOnAInCardHeader"
          @handleClickOnMInCardHeader="handleClickOnMInCardHeader"
          @handleClickOnFInCardHeader="handleClickOnFInCardHeader"
          @handleClickOnDInCardHeader="handleClickOnDInCardHeader"
          ref="card_header"
        />
      </div>
    </el-card>
  </div>
</template>

<script>
import CardHeader from "@/components/common/CardHeader";
export default {
  components: {
    CardHeader
  },
  data() {
    return {
      selectedRows: []
    };
  },
  methods: {
    handleClickOnAInCardHeader() {},
    handleClickOnMInCardHeader() {},
    handleClickOnFInCardHeader() {},
    handleClickOnDInCardHeader() {}
  }
};
</script>