import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({
  // 開發階段開啟嚴格模式, 檢測資料維持單向操作
  strict: process.env.NODE_ENV === 'production' ? false : true,
  state: {
    indexData: []
  },
  // 只能透過mutations寫入state
  mutations: {
    SETINDEXDATA(state, indexData) {
      state.indexData = indexData;
    }
  },
  actions: {
    GETINDEXDATA(context) {
      return axios.get(`data.json?${new Date().getTime()}`).then(response => {
        context.commit('SETINDEXDATA', response.data);
      }).catch(error => {
        console.log(error);
      });
    }
  }
})