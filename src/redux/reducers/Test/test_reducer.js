import { FETCH_TESTS, FULFILLED, PENDING, REJECTED } from "../../types/types"

const initialState = {}

export default function (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case FETCH_TESTS + FULFILLED:
      return { ...state, ...payload }
    default:
      return state
  }
}
