import React, { useState, useEffect } from "react";
import "./detailStyle.css";
import { useParams } from "react-router-dom";

const Detail = () => {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [dataPeople, setDataPeople] = useState([]);
  const [dataFilm, setDataFilm] = useState([]);
  // const [dataHomeWorld, setDataHomeWorld] = useState([]);

  let id = useParams();

  useEffect(() => {
    fetch("https://swapi.dev/api/people/" + id.id)
      .then((res) => res.json())

      .then((data) => {
        setDataPeople(data);

        async function getMovieList() {
          try {
            let res1 = await Promise.all(data?.films.map((val) => fetch(val)));
            let response1 = await Promise.all(res1.map((val) => val.json()));
            setDataFilm(response1);
            console.log(response1);
          } catch (error) {
            console.log(error);
          }
        }
        getMovieList();
        console.log(getMovieList());
      })

      .catch((err) => console.log(err))
      .finally(() => setLoading(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(dataPeople);

  return (
    <div className="detail">
      <div className="form">
        <span className="subtitle">Full Name</span>
        <h2 className="title">{dataPeople.name}</h2>
      </div>

      <div className="form">
        <span className="subtitle">Gender</span>
        <h2 className="title">{dataPeople.gender}</h2>
      </div>

      <div className="form">
        <span className="subtitle">Height</span>
        <h2 className="title">{dataPeople.height}</h2>
      </div>

      <div className="movie-list">
        <span className="subtitle">Movies :</span>
        {dataFilm.map((val) => {
          return <h2 className="title">{val.title}</h2>;
        })}
      </div>
    </div>
  );
};

export default Detail;
