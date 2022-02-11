import React from "react";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import BooksContext from "../context/BooksContext";


import Header from "../components/Header";
import AddBook from "../components/AddBook";
import BookList from "../components/BookList";
import EditBook from "../components/EditBook";

const AppRouter = () => {
  const [books, setBooks] = useLocalStorage("books", []);

  return (
    <BrowserRouter>
      <Header />
      <div className="main-content">
        <BooksContext.Provider value={{books, setBooks}}>
          <Switch>
            <Route component={BookList} path="/" exact={true} />
            <Route component={AddBook} path="/add" />
            <Route component={EditBook} path="/edit/:id" />
            <Route component={() => <Redirect to="/" />} />
          </Switch>
        </BooksContext.Provider>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;