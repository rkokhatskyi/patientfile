import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

// modules
import recommendationStateModule from './modules/recommendationState'
import diagnosisStateModule from './modules/diagnosisState'
import reminderStateModule from './modules/reminderState'
import goalStateModule from './modules/goalState'
import settingStateModule from './modules/settingState'
import StateAtCurrentTimeSplitAreaModule from './modules/StateAtCurrentTimeSplitArea'
import secondLayerTabDialogStateModule from './modules/secondLayerTabDialogState'
import stateAtSelectedTimeModule from './modules/stateAtSelectedTimeSide'
import socialHistoryStateModule from './modules/socialHistoryState'

import { ROLE_API_URL } from "@/const.js"
import searchCommandsList from '@/searchCommandsList.js'

export default new Vuex.Store({
  state: {
    userRole: '',
    searchCommandsList: searchCommandsList,
    focusComponent: "",
    connectionStatus: true, // true: online, false: offline
    userId: -1,
    selectedColumns: {
      recommendation: ["recommendationDescription"],
      reminder: ["description"]
    }
  },
  mutations: {
    setUserRole(state, data) {
      state.userRole = data
    },
    setFocusComponent(state, value) {
      state.focusComponent = value
    },
    setsearchCommandsList(state, list) {
      state.searchCommandsList = list
    },
    setConnectionStatus(state, value) {
      state.connectionStatus = value
    },
    setUserId(state, value) {
      // TODO: this should be userUUID
      state.userId = value
    },
    setSelectedColumns(state, value) {
      state.selectedColumns = value
    }
  },
  actions: {
    async getRoleDetails({ commit }, roleId) {
      const token = localStorage.getItem("token")
      const response = await fetch(`${ROLE_API_URL}/${roleId}`, {
        headers: {
          "Authorization": "Bearer " + token
        }
      })
      if (response.ok) {
        const json = await response.json()
        commit("setUserRole", json.name)
        if (json.availableComponents) {
          let componentList = json.availableComponents.split(',')
          componentList.push("clear")
          commit("setsearchCommandsList", componentList)
        }
      }
    }
  },
  modules: {
    recommendation: recommendationStateModule,
    diagnosis: diagnosisStateModule,
    reminder: reminderStateModule,
    goal: goalStateModule,
    setting: settingStateModule,
    StateAtCurrentTime: StateAtCurrentTimeSplitAreaModule,
    tabDialog: secondLayerTabDialogStateModule,
    stateAtSelectedTime: stateAtSelectedTimeModule,
    socialHistory: socialHistoryStateModule
  },
  plugins: [
    createPersistedState()
  ]
})
