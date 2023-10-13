import { createReducer } from "@reduxjs/toolkit"

const initialState = {
  value: 10,
}
export const customReducer = createReducer(initialState, {
  increment: (state) => {
    state.value += 1
  },
  incrementByValue: (state, action) => {
    state.value += action.payload
  },
  decrement: (state) => {
    state.value -= 1
  },
})
