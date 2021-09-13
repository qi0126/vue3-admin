const state = {
  isCollapse: false
}

const mutations = {
  M_COLLAPSE(state) {
    state.isCollapse = !state.isCollapse
  }
}

const actions = {
  A_COLLAPSE({ commit }) {
    commit('M_COLLAPSE')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
