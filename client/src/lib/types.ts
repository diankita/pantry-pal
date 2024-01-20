export type TopNavConfig = {
  visible: boolean;
  title?: string;
  showBackButton: boolean;
}

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
