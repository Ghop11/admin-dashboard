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
    DELETE_REPORT(state, data){
      let reports = state.reports;
      let updatedReports = [];
      reports.forEach((report ) => {
        if(report.clientNumber !==  data.clientNumber && report.orderNumber !== data.orderNumber){
          updatedReports.push(report);
        }
      });
      state.reports = updatedReports;
    },
    UPDATE_EXISTING_REPORT(state, data){
      let reports = state.reports;
      let updatedReports = [];

      reports.forEach((report ) => {
        if(report.clientNumber ==  data.clientNumber && report.orderNumber == data.orderNumber){
          updatedReports.push(data);
        } else {
          updatedReports.push(report)
        }
      });
      state.reports = updatedReports;
    },
  },
  actions: {
    actionMockData({commit}, event){
      let data = report.mockData;
      commit('INIT_REPORTS', data);
    },
    deleteReport({commit}, event){
      commit('DELETE_REPORT', event);
    },
    updateReports({commit}, event){
      // console.log(`event : ${JSON.stringify(event, null, 3)}`);
      commit('UPDATE_REPORTS', event);
    },
    updateExistingReport({commit}, event){
      commit('UPDATE_EXISTING_REPORT', event);
    },
  },
  getters: {
    getReports: state => {
      return state.reports;
    }
  },
  modules: {
  }
})
