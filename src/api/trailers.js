import * as MoviesApi from "./movies";
import * as TvApi from "./tv";

export async function getTrailer(media) {
  try {
    if (media.title) {
      return await MoviesApi.getMovieTrailer(media.id);
    } else if (media.name) {
      return await TvApi.getTvTrailer(media.id);
    }
    return null;
  } catch (error) {
    console.error("Error fetching trailer:", error);
    return null;
  }
}
