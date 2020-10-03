export default {
  setMember(state, context) {
    state.member = { ...context }
  },

  resetMember(state) {
    state.member = {}
  },

  setCourse(state, context) {
    state.course = { ...context }
  },

  resetCourse(state) {
    state.course = { list: [], pagination: {} }
  },

  setBookingLogs(state, context) {
    state.bookingLogs = { ...context }
  },

  resetBookingLogs(state) {
    state.bookingLogs = { list: [], pagination: {} }
  },
}
