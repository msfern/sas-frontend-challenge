import React from 'react';
import './style.scss';

const Category = ({ name, id, goToCategory }) => {
  const handleClick = () => {
    goToCategory(name, id);
  };

  return (
    <div className="category__card" onClick={handleClick}>
      {name}
    </div>
  );
};

export default Category;
