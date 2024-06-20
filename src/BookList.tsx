export interface Book {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
}
//array of 10 book objects
export const bookList: Book[] = [
  {
    id: 1,
    name: "To Kill a Mockingbird",
    price: 12.99,
    category: "Fiction",
    description:
      "Harper Lee’s Pulitzer Prize-winning novel set in the American South during the 1930s.",
  },
  {
    id: 2,
    name: "1984",
    price: 15.49,
    category: "Fiction",
    description:
      "George Orwell’s dystopian classic about totalitarianism, surveillance, and government control.",
  },
  {
    id: 3,
    name: "The Hobbit",
    price: 9.99,
    category: "Fantasy",
    description:
      "J.R.R. Tolkien’s adventure novel about Bilbo Baggins and his quest to reclaim the Lonely Mountain.",
  },
  {
    id: 4,
    name: "Harry Potter and the Sorcerer's Stone",
    price: 19.99,
    category: "Fantasy",
    description:
      "J.K. Rowling’s first book in the Harry Potter series, introducing the magical world of Hogwarts.",
  },
];
