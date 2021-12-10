import { useEffect, useState } from "react";
import { useParams } from "react-router";

function Detail() {
  const { id } = useParams();
  //   console.log(id);
  const [details, setDetails] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetails(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(details);

  return (
    <div>
      <h1>{details.title}</h1>
      <img src={details.large_cover_image} />
      <p>{details.description_full}</p>
    </div>
  );
}
export default Detail;
