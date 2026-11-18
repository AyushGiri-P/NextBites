
export type Recipe = {
  id: number;
  title: string;
  cuisine: string;
  minutes: number;
  difficulty: string;
  image: string;
};

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Margherita Pizza",
    cuisine: "Italian",
    minutes: 30,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498",
  },
  {
    id: 2,
    title: "Chicken Biryani",
    cuisine: "Indian",
    minutes: 60,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
  },
  {
    id: 3,
    title: "Sushi Rolls",
    cuisine: "Japanese",
    minutes: 45,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
  },
  {
    id: 4,
    title: "Chocolate Pancakes",
    cuisine: "American",
    minutes: 20,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
  },
];
