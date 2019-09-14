import React from 'react';
import CategoriesWrapper from './styles';

const Categories = ({ data, loading, error, handleCategoryClick }) => {
  const displayCategories = () => {
    if (loading) return 'Loading categories...';
    if (error) return `Error! ${error.message}`;
    return data.categories.map(category => (
      <CategoriesWrapper.ListItem key={category} onClick={() => handleCategoryClick(category)}>
        {category}
      </CategoriesWrapper.ListItem>
    ));
  };
  return (
    <CategoriesWrapper>
      <CategoriesWrapper.Title>Categories:</CategoriesWrapper.Title>
      <CategoriesWrapper.List>
        {displayCategories()}
      </CategoriesWrapper.List>
    </CategoriesWrapper>
  );
};

export default Categories;
