export default {
  setTrainer(state, context) {
    state.trainer = { ...context }
  },

  resetTrainer(state) {
    state.trainer = {}
  },
}
