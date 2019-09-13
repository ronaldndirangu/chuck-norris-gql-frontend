import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_CATEGORIES } from '../../queries';
import { getJoke } from '../../redux/actions/jokeAction';

const CategoriesContainer = ({ history, getJoke }) => {
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  const handleCategoryClick = category => {
    getJoke({ category });
    history.push('/joke');
  };

  const displayCategories = () => {
    if (loading) return 'Loading categories...';
    if (error) return `Error! ${error.message}`;
    return data.categories.map(category => (
      <li key={category} onClick={() => handleCategoryClick(category)}>{category}</li>
    ));
  };

  return (
    <div>
      <ul>
        {displayCategories()}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ loginReducer }) => ({
  token: loginReducer.token
});

const mapDispatchToprops = dispatch => ({
  getJoke: ({ category }) => dispatch(getJoke({ category }))
});

export default connect(mapStateToProps, mapDispatchToprops)(withRouter(CategoriesContainer));
