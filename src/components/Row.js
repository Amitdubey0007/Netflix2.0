import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Row.css";

function Row({ title, fetchURL, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const baseurl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);
  console.log(movies);

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies.map((movie, index) => (
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            key={`${movie.id}-${index}`}
            src={`${baseurl}${
              isLargeRow ? movie?.poster_path : movie?.backdrop_path
            }`}
            alt={`${movie?.name}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
