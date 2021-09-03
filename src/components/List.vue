<template>
  {{ listTitle }}
</template>

<script>
export default {
  computed: {
    listTitle() {
      return this.$store.state.selectedList.title;
    }
  }
};
</script>

<style></style>
