import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux"; // gives access to reducer at index.tsc
import { RootState } from "./index";
import { Root } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Book } from "./BookList";
import { editBook, deleteBook } from "./redux/books/bookSlice";
function App() {
  const books = useSelector((state: RootState) => state.books);
  console.log("books");
  console.log(books);
  const dispatch = useDispatch();
  const handleEdit = (book: Book) => {
    console.log("Edit book", book);
    dispatch(editBook(book));
  };
  const handleDelete = (id: number) => {
    // Implement delete functionality
    console.log("Delete book with id:", id);
    dispatch(deleteBook(id));
  };

  return (
    <div className="App container">
      <h2>Bookstore</h2>
      <button className="btn btn-primary">Add Book</button>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td className="col-md-3 col-sm-12">{book.name}</td>
              <td className="col-md-2 col-sm-12">{book.price}</td>
              <td className="col-md-2 col-sm-12 ">{book.category}</td>
              <td className="col-md-5 col-sm-12 ">{book.description}</td>
              <td className="col-md-3 col-sm-12 ">
                <button
                  className="btn btn-primary m-2"
                  onClick={() => handleEdit(book)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(book.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
