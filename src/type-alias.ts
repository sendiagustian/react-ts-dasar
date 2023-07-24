export type ID = string | number;

export type Category = {
  id: ID;
  name: string;
  desc?: string;
};

export type Product = {
  id: ID;
  name: string;
  price: number;
  category: Category;
  desc?: string;
};
