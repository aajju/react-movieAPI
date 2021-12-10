import { useEffect, useState } from "react";
import Movie from "../components/Movie";
function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    )
      .then((r) => r.json())
      .then((data) => {
        setMovies(data.data.movies);
        setLoading(false);
      });
  }, []);

  console.log(movies);

  return (
    <div>
      <h1>Super Movie!!!</h1>
      {loading ? (
        <strong>Loading....</strong>
      ) : (
        movies.map((movie) => (
          <Movie
            id={movie.id}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
            coverImg={movie.medium_cover_image}
          />
        ))
      )}
    </div>
  );
}

export default Home;
