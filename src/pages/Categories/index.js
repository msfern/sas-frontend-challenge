import React from 'react';
import Category from '../../components/Category/index';
import './style.scss';

const Categories = () => {
  return (
    <div className="categories">
      <h1>Categorias</h1>
      <section className="categories__list">
        <Category />
      </section>
    </div>
  );
};

export default Categories;
