import axios from "axios";

export const getProfileStarsActions = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "PROFILE_REQUEST" });

      if (id) {
        const data = await axios.get();
        dispatch({
          type: "PROFILE_SET_PROFILE",
          payload: data.data.results,
        });

        console.log(data.results);
      } else {
        const res = await axios.get(`https://swapi.dev/api/people`);
        console.log(res.data);
        dispatch({
          type: "PROFILE_SET_PROFILES",
          payload: res.data.results,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: "PROFILE_ERROR" });
    }
  };
};
