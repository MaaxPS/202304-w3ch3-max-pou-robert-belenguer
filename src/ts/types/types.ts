export interface SeriesStructure {
  id: number;
  name: string;
  creator: string;
  year: number;
  poster: string;
  isWatched: boolean;
  score: number;
  emmies: number;
}

export type Series = SeriesStructure[];

export interface ComponentStructure {
  element: Element;

  renderHtml: () => void;
}
