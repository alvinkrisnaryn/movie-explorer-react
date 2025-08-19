import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TvApi } from "../api";

function TvDetail() {
  const { id } = useParams();
  const [tv, setTv] = useState(null);

  useEffect(() => {
    async function fetchTv() {
      try {
        const data = await TvApi.getTvDetail(id);
        setTv(data);
      } catch (error) {
        console.error("Error fetching tv detail:", error);
      }
    }
    fetchTv();
  }, [id]);

  if (!tv) return <p>Loading...</p>;

  return (
    <div className="flex flex-col bg-gray-300/50 rounded-lg p-7 m-6 max-w-sm">
      <h1 className="text-2xl font-bold text-center">{tv.name}</h1>
      <p className="text-2xl font-bold mb-4 text-center">{tv.release_year}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
        alt={tv.name}
        className="mb-4"
      />
      <p>{tv.overview}</p>
    </div>
  );
}

export default TvDetail;
