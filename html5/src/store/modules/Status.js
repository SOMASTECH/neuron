export default {
  state: {
    status: {},
    alarmList: [],
    writableList: []
  },
  mutations: {
    setAlarmStatus (state, data) {
      state.status = data
    },
    setAlarmList (state, data) {
      state.alarmList = data
    },
    setWritableList (state, writableList) {
      state.writableList = writableList
    }
  }
}
