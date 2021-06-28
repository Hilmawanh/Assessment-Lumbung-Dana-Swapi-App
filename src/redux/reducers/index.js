import { combineReducers } from "redux";
import getFilmsStar from "./getAllFilms";
import getProfileStars from "./getAllProfile";

export default combineReducers({
  getProfile: getProfileStars,
  getFilm: getFilmsStar,
});
