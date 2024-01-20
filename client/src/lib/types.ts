export type Children = {
  children: React.ReactNode;
};

export type Category = {
  name: string;
  image: string;
}

export type Recipe = {
  id: integer;
  title: string;
  readyInMinutes: integer;
  image?: string;
  summary: string;
  instructions: string;
}