<template>
  <div class="header i-flex i-flex-align-center">
    <span>To Do</span>
  </div>
  <div class="template-container">
    <main-lists></main-lists>
    <list></list>
    <task-info></task-info>
  </div>
</template>

<script>
import MainLists from "./MainLists.vue";
import TaskInfo from "./TaskInfo.vue";
import List from "./List.vue";
export default {
  components: {
    MainLists,
    TaskInfo,
    List
  }
};
</script>
<style>
.template-container {
  width: 100vw;
  flex: 1 0 100%;
  display: flex;
  height: 100%;
}
.header {
  width: 100%;
  background-color: var(--brand-color);
  height: 50px;
  padding: 10px 10px 10px 30px;
  font-size: large;
  font-weight: 800;
  color: var(--primary-color);
}
</style>
