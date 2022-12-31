export interface Sub {
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export type responseFromApi = Array<{
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}>;
