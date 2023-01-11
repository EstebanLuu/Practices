export interface Sub {
  nick: string;
  subMonths: string | number;
  avatar: string;
  description: string;
  id?: string;
  created?: string;
  location?: string;
  origin?: string;
}

export type responseFromApi = Array<{
  name: string;
  status: string;
  gender: string;
  image: string;
  id: string;
}>;

export type CharacterResponse = Object<{
  name: string;
  status: string;
  gender: string;
  image: string;
  created: string;
  location: string;
  origin: string;
  id: string;
}>;
