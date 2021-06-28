import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilmStarActions } from "../../redux/actions/getAllFilms";
import "./style.css";
const Movies = () => {
  const dispatch = useDispatch();
  // const history = useHistory();

  // const [searchTerm, setSearchTerm] = useState("");

  const getFilm = useSelector((state) => state.getFilm.data);

  useEffect(() => {
    dispatch(getFilmStarActions());
    console.log(getFilm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="film">
      <div className="seach-form">
        <h2>The Movies</h2>
      </div>
      <div className="card">
        {getFilm.map((val, i) => {
          return (
            <div className="card-list" key={i}>
              <h2>{val.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
