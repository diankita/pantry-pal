export type Children = {
  children: React.ReactNode;
};

export type Category = {
  name: string;
  image: string;
};

export type Ingredient = {
  name: string;
  amount: number;
  unit: string;
  id: number;
}

export type Recipe = {
  id: number;
  title: string;
  readyInMinutes: number;
  image: string;
  summary: string;
  instructions: string;
  ingredients: Ingredient[];
};
