<template>
  <div class="container" :style="{ width: width + 'px' }">
    <div
      class="i-flex-justify-start i-flex-align-center i-flex item "
      @click="toggle"
    >
      <span class="item-arrow" v-html="open ? '&#8249;' : '&#8250;'" />
    </div>
    <div
      v-for="item in list"
      :key="item.title"
      class=" i-flex-align-center i-flex item"
      :class="{ 'i-flex-justify-start': open, 'i-flex-justify-center': !open }"
    >
      <span class="item-element">
        <img :src="require(`../assets/icons/${item.name}.svg`)" alt="" />
        <span :style="{ display: open ? 'inline' : 'none' }">{{
          item.title
        }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: 123,
      open: true,
      arrow: "&#33;",
      list: [
        {
          name: "myDay",
          title: "My Day"
        },
        {
          name: "important",
          title: "Important"
        },
        {
          name: "infinity",
          title: "All"
        }
      ]
    };
  },
  methods: {
    toggle() {
      if (this.open) {
        this.width = 55;
        this.open = false;
      } else {
        this.width = 140;
        setTimeout(() => {
          this.open = true;
        }, 50);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-left: 0px;
  height: 100%;
  padding: 0px;
  transition: width 0.1s;
  width: 100%;
  color: var(--on-secondary-color);
  background: var(--secondary-color);
  :hover.item {
    background-color: var(--secondary-color-light);
  }
  div:first-child {
    margin: 10px 10px;
    width: 30px;
    justify-content: center;
  }
}
.item {
  height: 40px;
  &-element {
    margin: 10px;
    & > span {
      margin-left: 10px;
    }
  }
  &-arrow {
    font-size: 2em;
  }
}
</style>
