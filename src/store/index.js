import Vue from 'vue'
import Vuex from 'vuex'
import report from './reportData.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    reports: []
  },
  mutations: {
    INIT_REPORTS(state, data){
      state.reports = data;
    },
    UPDATE_REPORTS(state, data){
      state.reports.push(data)
    },
  },
  actions: {
    actionMockData({commit}, event){
      let data = report.mockData;
      commit('INIT_REPORTS', data)
    },
    updateReports({commit}, event){
      // console.log(`event : ${JSON.stringify(event, null, 3)}`);
      commit('UPDATE_REPORTS', event)
    }
  },
  getters: {
    getReports: state => {
      return state.reports;
    }
  },
  modules: {
  }
})
