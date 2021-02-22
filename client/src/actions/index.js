import axios from "axios";
import { FETCH_CARS } from "./types";

export const fetchCars = () => async (dispatch) => {
  //console.log("Action sent", request);
  const res = await axios.get("/api/v1/vehicles");
  console.log(res.data);
  dispatch({
    type: FETCH_CARS,
    payload: res.data.data.data
  });
};
