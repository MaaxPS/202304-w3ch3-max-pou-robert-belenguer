import { type SeriesStructure } from "../../types/types";

export const moveSerie = (
  serie: SeriesStructure,
  name: string,
  index: number
) => {
  serie.isWatched = true;
  serie.score = index + 1;
};
