import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book, bookList } from "../../BookList";
const bookSlice = createSlice({
  name: "books",
  initialState: bookList,
  reducers: {
    addBook(state, action: PayloadAction<Book>) {
      state.push(action.payload);
    },
    editBook(state, action: PayloadAction<Book>) {
      const index = state.findIndex((book) => book.id === action.payload.id);
      state[index] = action.payload;
    },
    deleteBook(state, action: PayloadAction<number>) {
      return state.filter((book) => book.id !== action.payload);
    },
  },
});
export const { addBook, editBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;
