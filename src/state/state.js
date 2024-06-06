import { defineStore } from "pinia";
export const userCount = defineStore("counter", {
  state: () => ({
    count: 0,
    status: "failed",
  }),
  getters: {
    getCount: (state) => {
      return state.count;
    },
    getStatus: (state) => {
      if (state.count <= 0) {
        state.status = "Failed";
      } else {
        if (state.count > 50) {
          state.status = "Passed";
        }
      }
      return state.status;
    },
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
});
