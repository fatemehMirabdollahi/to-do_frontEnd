<template>
  <div class="container" :style="{ width: width + 'px' }">
    <div
      class="i-flex-justify-start i-flex-align-center i-flex item "
      @click="toggle"
    >
      <span class="item-arrow" v-html="open ? '&#8249;' : '&#8250;'" />
    </div>
    <div
      v-for="item in mainList"
      :key="item.title"
      class=" i-flex-align-center i-flex item"
      :class="{ 'i-flex-justify-start': open, 'i-flex-justify-center': !open }"
    >
      <span
        class="item-element"
        :style="{ 'justify-content': open ? 'space-between' : 'center' }"
      >
        <img :src="require(`../assets/icons/${item.name}.svg`)" alt="" />
        <span :style="{ display: open ? 'inline' : 'none' }" class="title">
          {{ item.title }}
        </span>
        <span v-if="open">
          {{ item.num }}
        </span>
      </span>
    </div>
    <div style="margin-top:20px"></div>
    <div
      v-for="item in userLists"
      :key="item.title"
      class=" i-flex-align-center i-flex item"
      :class="{ 'i-flex-justify-start': open, 'i-flex-justify-center': !open }"
    >
      <span
        class="item-element"
        :style="{ 'justify-content': open ? 'space-between' : 'center' }"
      >
        <img :src="require(`../assets/icons/list.svg`)" alt="" />
        <span :style="{ display: open ? 'inline' : 'none' }" class="title">
          {{ item.name }}
        </span>
        <span v-if="open">
          {{ item.undone }}
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: 50,
      open: false,
      arrow: "&#33;",
      userLists: [],
      mainList: [
        {
          name: "myDay",
          title: "My Day",
          num: 0
        },
        {
          name: "important",
          title: "Important",
          num: 0
        },
        {
          name: "infinity",
          title: "All",
          num: 0
        }
      ]
    };
  },
  created() {
    this.$axios.get("/lists").then(response => {
      console.log(response.data);
      this.mainList[0].num = response.data.myday;
      this.mainList[1].num = response.data.important;
      this.mainList[2].num = response.data.all;
      this.userLists = response.data.lists;
    });
  },
  methods: {
    toggle() {
      if (this.open) {
        this.width = 50;
        this.open = false;
      } else {
        this.width = 200;
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
.test {
  flex: 1 0 auto;
}
.item {
  height: 40px;
  &-element {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 15px;
    & > span {
      margin-left: 10px;
    }
    .title {
      flex: 1 0 auto;
    }
  }
  &-arrow {
    font-size: 2em;
  }
}
</style>
