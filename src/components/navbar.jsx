import { Link } from 'gatsby';
import React from 'react';

export const PostsNavbar = () => (
  <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <div className="container-lg">
      <Link to="/posts" className="navbar-brand">
        Blog de Angel
      </Link>
    </div>
  </nav>
)
