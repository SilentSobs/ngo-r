import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({ extraClassName }) => {
  return (
    <section className={`page-header ${extraClassName}`}>
      <div
        className="page-header__bg"
        style={{ backgroundImage: `url('assets/images/backgrounds/page-header-bg-1-1.jpg')` }}
      ></div>
      {/* /.page-header__bg */}
      <div className="container">
        <h2 className="page-header__title">It is a long established fact that a reader</h2>
        <ul className="cleenhearts-breadcrumb list-unstyled">
          <li>
            <i className="icon-home"></i> 
            <Link to="/">Home</Link>
          </li>
          <li>
            <span>Donation List</span>
          </li>
          <li>
            <span>It is a long established fact that a reader</span>
          </li>
        </ul>
        {/* /.cleenhearts-breadcrumb list-unstyled */}
      </div>
      {/* /.container */}
    </section>
  );
};

export default PageHeader;
