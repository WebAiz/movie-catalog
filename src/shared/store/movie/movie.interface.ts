export interface GetMovieCatalogsPayload {
  title: string;
  page?: number;
}

export interface GetMovieCatalogsResponse {
  Search: MovieCatalog[];
  totalResults: number;
  Response: "True" | string;
  Error: string;
}

export interface MovieCatalog {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}
