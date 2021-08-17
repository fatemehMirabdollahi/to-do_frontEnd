<template>
  <div class="app">
    <router-view />
  </div>
</template>
<script>
import variables from "./assets/scss/_export.module.scss";
export default {
  setup() {},
  mounted() {
    console.log(variables);
  }
};
</script>
<style lang="scss" scoped>
.app {
  height: 100vh;
  //solves firefox rtl problem
  overflow: hidden;
}
</style>
