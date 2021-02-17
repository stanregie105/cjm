import { FETCH_CARS } from "../actions/types";

export default function (state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_CARS:
      return [...state, ...payload];

    default:
      return state;
  }
}
