import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {
  todos:[
    {text:'学习vuex',done:true},
    {text:'学习vuex',done:false},
    {text:'学习vuex',done:false},
    {text:'学习vuex',done:false},
  ]
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});