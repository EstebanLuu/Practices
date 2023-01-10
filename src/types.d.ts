export interface Sub {
  nick: string;
  subMonths: string | number;
  avatar: string;
  description: string;
}

export type responseFromApi = Array<{
  name: string;
  status: string;
  gender: string;
  image: string;
  results: Array;
}>;
