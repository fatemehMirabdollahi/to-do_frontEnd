<template>
  <div class="home">
    <div class="header"><span>my works</span></div>
    <div class="item">
      <span>add Task:</span>
      <input
        @focus="unholder"
        v-on:keyup.13="add(newTask)"
        type="text"
        name=""
        id=""
        v-model="newTask"
      />
    </div>
    <div v-for="(item, index) in todo" :key="'t' + index">
      <div class="item">
        <div style="flex:1;" class="field">
          <button class="dobut dobut-do" @click="doT(index)"></button>
        </div>
        <div style="flex:10;" class="field">
          <span>{{ item }}</span>
        </div>
        <div style="flex:1;" class="field">
          <button @click="deleteT(index)">delete</button>
          <button @click="edit(index)">edit</button>
        </div>
      </div>
    </div>
    <div class="header"><span>completed</span></div>
    <div v-for="(item, index) in dones" :key="'d' + index">
      <div class="item">
        <div style="flex:1;" class="field">
          <button class="dobut dobut-undo" @click="undoT(index)"></button>
        </div>
        <div style="flex:10;" class="field">
          <span>{{ item }}</span>
        </div>
        <div style="flex:1;" class="field">
          <button @click="deleteDon(index)">delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import json from "./works";
export default {
  components: {},
  data() {
    return {
      newTask: "",
      todo: json["todo"],
      dones: json["done"],
    };
  },
  methods: {
    deleteT(index) {
      this.todo.splice(index, 1);
    },
    deleteDon(index) {
      this.dones.splice(index, 1);
    },
    doT(index) {
      this.dones.unshift(this.todo[index]);
      this.todo.splice(index, 1);
    },
    edit() {},
    undoT(index) {
      this.todo.unshift(this.dones[index]);
      this.dones.splice(index, 1);
    },
    add(task) {
      if (task) this.todo.unshift(task);
      this.newTask = "add Task";
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  width: 70%;
  margin: 50px;
  border: firebrick solid;
  padding: 10px;
}

.dobut {
  width: 18px;
  height: 18px;
  border-radius: 10px;
  border: solid #823b5c;
  &-undo {
    background: #b85282;
  }
  &-do {
    background-color: white;
  }
}
.item {
  width: 90%;
  align-items: center;
  display: flex;
  border-bottom: solid gray 0.5px;
  padding: 10px;
  margin-left: 5%;
  margin-right: 5%;
}
.field {
  display: flex;
}
hr {
  height: 10px;
  background-color: chartreuse;
}
.header {
  font-weight: 600;
  font-size: 1.3em;
  margin: 10px;
}
input {
  border: none;
  border-bottom: solid black;
  &:focus {
    border: none;
    border-bottom: solid black;
  }
}
</style>
