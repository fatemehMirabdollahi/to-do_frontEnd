<template>
  <div class="container" :style="{ width: width + 'px' }">
    <div
      @click="toggle()"
      class=" i-flex-align-center i-flex item"
      :class="{ 'i-flex-justify-start': open, 'i-flex-justify-center': !open }"
    >
      <span
        class="item-element"
        :style="{ 'justify-content': open ? 'space-between' : 'center' }"
      >
        <img
          :src="
            require(`../assets/icons/${
              open ? 'right-arrow.svg' : 'left-arrow.svg'
            }`)
          "
          alt=""
        />
        <span :style="{ display: open ? 'inline' : 'none' }" class="title">
        </span>
      </span>
    </div>
    <div
      v-for="item in mainList"
      :key="item.title"
      class=" i-flex-align-center i-flex item"
      :class="{ 'i-flex-justify-start': open, 'i-flex-justify-center': !open }"
      @click="selectList('mainList', item.name)"
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
      :key="item.list_title"
      class=" i-flex-align-center i-flex item"
      :class="{ 'i-flex-justify-start': open, 'i-flex-justify-center': !open }"
      @click="selectList('userList', item.list_title)"
    >
      <span
        class="item-element"
        :style="{ 'justify-content': open ? 'space-between' : 'center' }"
      >
        <img :src="require(`../assets/icons/list.svg`)" alt="" />
        <span :style="{ display: open ? 'inline' : 'none' }" class="title">
          {{ item.list_title }}
        </span>
        <span v-if="open">
          {{ item.undone }}
        </span>
      </span>
    </div>
    <div
      :style="{ width: width + 'px' }"
      class=" i-flex-align-center i-flex item"
      :class="{
        'i-flex-justify-start': open,
        'i-flex-justify-center': !open,
        test: userLists.length > 16
      }"
    >
      <span
        class="item-element new-list"
        :style="{
          'justify-content': open ? 'space-between' : 'center',
          'padding-left': open ? '15px' : '0px',
          color: focus ? 'gray' : '#09000d'
        }"
        @click="toggle(true)"
      >
        &#x2b;
        <input
          v-model="newlist"
          v-if="open"
          @focus="focus = true"
          @blur="focus = false"
          @keyup.enter="add"
        />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newlist: "",
      focus: false,
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
    this.$store.commit("selectList", {
      title: "myDay",
      group: "mianList"
    });
    this.getData();
  },
  methods: {
    add() {
      if (this.newlist)
        this.$axios
          .post("/lists", { name: this.newlist })
          .then(() => {
            this.getData();
            this.newlist = "";
          })
          .catch(error => {
            console.log(error);
          });
    },
    getData() {
      this.$axios.get("/lists").then(response => {
        this.mainList[0].num = response.data.myday;
        this.mainList[1].num = response.data.important;
        this.mainList[2].num = response.data.all;
        this.userLists = response.data.lists;
      });
    },
    selectList(group, title) {
      this.$store.commit("selectList", {
        title: title,
        group: group
      });
    },
    toggle(test) {
      if (test == true) {
        this.width = 200;
        setTimeout(() => {
          this.open = true;
        }, 50);
        return;
      }
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
  padding: 0px;
  padding-right: 0px;
  // padding-top: 50px;
  overflow-y: scroll;
  // padding-bottom: 50px;
  // height: 100%;
  margin-left: 0px;
  height: 100%;
  transition: width 0.1s;
  width: 100%;
  color: var(--on-secondary-color);
  background: var(--secondary-color);
  :hover.item {
    background-color: var(--secondary-color-light);
  }
  :hover {
    background-color: var(--secondary-color-light);
  }
  div:first-child {
    margin: 10px 10px;
    width: 30px;
    justify-content: center;
  }
}
.test {
  position: absolute;
  bottom: 0px;
  transition: width 0.1s;
}
.tests {
  background: var(--secondary-color);
  position: absolute;
  top: 50px;
  transition: width 0.1s;
  width: 100%;
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
.new-list {
  margin: 0px;
  height: 40px;
  font-size: xx-large;
  background: var(--secondary-color);
  input {
    background: var(--secondary-color);
    margin-right: 0px;
    font-size: medium;
    margin-left: 10px;
    height: 30px;
    width: 100%;
    border: none;
    background-color: rgba(255, 25, 12, 0);
    color: var(--on-secondary-color);
  }
}
</style>
