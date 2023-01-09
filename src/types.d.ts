export interface Sub {
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  created: string;
  episode: string;
  id: number;
  location: object;
  origin: object;
  url: string;
}

export type responseFromApi = Array<{
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  created: string;
  episode: string;
  id: number;
  location: object;
  origin: object;
  url: string;
  results: Array;
}>;
