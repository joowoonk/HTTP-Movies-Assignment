import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const initialMovie = {
  id: "",
  title: "",
  director: "",
  metascore: "",
  stars: [],
};

const MovieForm = () => {
  const [movie, setMovie] = useState(initialMovie);
  const { push } = useHistory();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://localhost:5000/api/movies/${id}`)
      .then((res) => {
        console.log({ res });
      })
      .catch((err) => {
        console.log({ err });
      });
  }, [id]);

  const handleChange = (e) => {
    e.persist();
    let value = e.target.value;
    if (e.target.name === "metascore") {
      value = parseInt(value, 10);
    }
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };

  const updateForm = (e) => {
    console.log("submitbutoon working");
  };

  return (
    <div>
      <h2>Update This Movie</h2>
      <form onSubmit={updateForm}>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={movie.title}
        />
        <input
          type="text"
          name="director"
          onChange={handleChange}
          placeholder="Director"
          value={movie.director}
        />
        <input
          type="text"
          name="metascore"
          onChange={handleChange}
          placeholder="Metascore"
          value={movie.metascore}
        />
        <input
          type="text"
          name="stars"
          onChange={handleChange}
          placeholder="Stars"
          value={movie.stars}
        />
        <button>Update</button>
      </form>
    </div>
  );
};

export default MovieForm;
