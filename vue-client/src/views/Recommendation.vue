<template>
  <div>
    <button @click="show = !show">Click me</button>
    <transition name="fade">
      <Recommendation v-if="show" />
    </transition>
  </div>
</template>   
<script>
import Recommendation from "@/components/patient/Recommendations/Layer1Card.vue";
export default {
  components: {
    Recommendation
  },
  data() {
    return {
      show: false
    };
  },
  methods: {}
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>