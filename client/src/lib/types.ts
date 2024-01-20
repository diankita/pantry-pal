export type Children = {
  children: React.ReactNode;
};

export type Category = {
  name: string;
  image: string;
};

export type Recipe = {
  id: number;
  title: string;
  readyInMinutes: number;
  image: string;
  summary: string;
  instructions: string;
};
