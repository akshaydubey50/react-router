import React from "react";
import { Link, Outlet } from "react-router-dom";
export const Products = () => {
  return (
    <>
      <div className="search-bar-product">
        <input type="search" placeholder="Search Product" />
      </div>
      <nav className="featured-news-container">
        <Link to="featured">Featured</Link>
        <Link to="news">News</Link>
      </nav>
      <Outlet />
    </>
  );
};
