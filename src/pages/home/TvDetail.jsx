import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TvApi } from "../../api";
import ContentLoading from "../../components/common/ContentLoading";
import NavbarDetail from "../../components/layout/NavbarDetail";

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

  if (!tv) return <ContentLoading />;

  return (
    <div className="flex flex-col bg-black">
      <NavbarDetail title={tv.name} />

      <div className="relative w-full h-[450px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
        <img
          src={`https://image.tmdb.org/t/p/original${tv.backdrop_path}`}
          alt={tv.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">Description</h2>
          <p className="text-gray-300 leading-relaxed mb-6">{tv.overview}</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-4 text-vase text-gray-400">
            <div>
              <span className="font-bold text-lg flex flex-col mb-2">
                Seasons
              </span>
              {tv.number_of_seasons}
            </div>
            <div>
              <span className="font-bold text-lg flex flex-col mb-2">
                Episode
              </span>
              {tv.number_of_episodes}
            </div>
            <div>
              <span className="font-bold text-lg flex flex-col mb-2">
                Runtime
              </span>
              {tv.episode_run_time?.length > 0
                ? `${tv.episode_run_time[0]} min`
                : "N/A"}
            </div>
            <div>
              <span className="font-bold text-lg flex flex-col mb-2">
                Release Date
              </span>
              {tv.first_air_date
                ? new Date(tv.first_air_date).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })
                : "Unknown"}
            </div>
            <div>
              <span className="font-bold text-lg flex flex-col mb-2">
                Genre
              </span>
              {tv.genres?.slice(0, 1).map((g) => g.name)}
            </div>
            <div>
              <span className="font-bold text-lg flex flex-col mb-2">
                Rating
              </span>
              {tv.vote_average}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 sm:ml-6 text-white">Cast</h2>
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-10">
            {tv.credits?.cast?.slice(0, 6).map((actor) => (
              <div key={actor.id} className="flex flex-col items-center">
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                      : "https://via.placeholder.com/150x200?text=No+Image"
                  }
                  alt={actor.name}
                  className="h-32 w-24 object-cover rounded-lg"
                />
                <p className="mt-2 font-semibold text-white text-center">
                  {actor.name}
                </p>
                <p className="text-sm text-gray-400 text-center">
                  as {actor.character}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TvDetail;
