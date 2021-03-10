import React from 'react';

const Categories = ({ categories, filterBtn }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterBtn(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  );
};

export default Categories;