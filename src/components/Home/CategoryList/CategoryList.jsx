import React from "react";
import { Link } from "react-router-dom";
import { products } from "../../Data/data";
import "./CategoryList.css";

const CategoryList = () => {
  const product = products[0];
  const categories = product.categories;

  return (
    <div className="category-container">
      <h2 className="category-title">Продукти</h2>
      <div className="category-grid">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/shop/${product.id}?categoryId=${category.categoryId}`}
            className="category-card-link"
          >
            <div className="category-card">
              <img
                src={category.image}
                alt={category.name}
                className="category-icon"
              />
              <div className="category-label">{category.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
