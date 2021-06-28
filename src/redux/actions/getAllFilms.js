import axios from "axios";

export const getFilmStarActions = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FILMS_REQUEST" });

      const res = await axios.get(`https://swapi.dev/api/films`);
      console.log(res.data);
      dispatch({
        type: "FILMS_SET_FILMSS",
        payload: res.data.results,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: "FILMS_ERROR" });
    }
  };
};
