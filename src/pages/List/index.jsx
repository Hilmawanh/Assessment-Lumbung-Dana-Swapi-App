/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import "./styleList.css";
import { useDispatch, useSelector } from "react-redux";
import { getProfileStarsActions } from "../../redux/actions/getAllProfile";
import { Link } from "react-router-dom";

const List = () => {
  const dispatch = useDispatch();
  // const history = useHistory();

  const [searchTerm, setSearchTerm] = useState("");

  const getProfileStars = useSelector((state) => state.getProfile.data);

  useEffect(() => {
    dispatch(getProfileStarsActions());
    console.log(getProfileStars);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="list">
      <div className="seach-form">
        <h2 className="char">The Charahcters</h2>

        <input
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>

      <div className="card-container-list">
        {getProfileStars
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val;
            }
          })
          .map((val, i) => {
            return (
              <div className="card-list" key={i}>
                <h2 className="char-name">{val.name}</h2>
                <p>{val.height}</p>

                <Link
                  to={`/list/detail/${val.url[val.url.length - 2]}`}
                  style={{ textDecoration: "none" }}
                >
                  <button>Read Details</button>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default List;
