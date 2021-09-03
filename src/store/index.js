import Vuex from "vuex";

export default Vuex.createStore({
  state: {
    selectedList: {}
  },
  mutations: {
    selectList(state, list) {
      state.selectedList = list;
    }
  },
  actions: {},
  modules: {}
});
