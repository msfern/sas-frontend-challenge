import React from 'react';
import Category from '../../components/Category/index';
import './style.scss';

const Categories = ({ categories, goToCategory }) => {
  return (
    <div className="categories">
      <h1>Categorias</h1>
      <section className="categories__list">
        {Object.keys(categories).map((category) => (
          <Category
            key={categories[category].id}
            name={categories[category].name}
            id={categories[category].id}
            goToCategory={goToCategory}
          />
        ))}
      </section>
    </div>
  );
};

export default Categories;
