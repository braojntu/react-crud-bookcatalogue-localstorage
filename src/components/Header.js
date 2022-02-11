import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Book Catalogue</h1>
      <hr />
      <div className="links">
        <NavLink exact to="/" className="link" activeClassName="active">View Books</NavLink>
        <NavLink exact to="/add" className="link" activeClassName="active">Add Book
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
