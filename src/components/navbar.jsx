import { Link } from 'gatsby';
import React from 'react';

export const PostsNavbar = () => (
  <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <div className="container-lg ps-md-4 pe-md-4">
      <Link to="/posts" className="navbar-brand" style={{ textDecoration: 'underline' }}>
        Blog de Angel
      </Link>
    </div>
  </nav>
)
