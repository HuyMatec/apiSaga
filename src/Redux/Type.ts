export interface Comment {
  id: string;
  createdAt: string;
  name: string;
  avatar: string;
}

interface Category {
  _id: string;
  name: string;
}

export interface New {
  _id: string;
  name: string;
  price: number;
  image: string;
  category: Category;
}
