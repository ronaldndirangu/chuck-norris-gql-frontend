import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_CATEGORIES } from '../../queries';
import Categories from '../../components/Categories';
import Joke from '../../components/Joke';
import Container, { Brand } from './styles';
import Avatar from '../../components/Avatar';
import { doLogout } from '../../redux/actions/loginAction';

const CategoriesContainer = ({ history, logout, user }) => {
  const [category, setCategory] = useState();
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  const handleCategoryClick = category => {
    setCategory(category);
  };

  console.log({ user });
  return (
    <Container>
      <Brand>ChuckNorris</Brand>
      <Avatar logout={logout} history={history} />
      <Categories
        data={data}
        error={error}
        loading={loading}
        handleCategoryClick={handleCategoryClick}
      />
      <Joke category={category} />
    </Container>
  );
};

const mapStateToProps = ({ loginReducer }) => ({
  user: loginReducer.user
});

const mapDispatchToprops = dispatch => ({
  logout: () => dispatch(doLogout())
});

export default connect(mapStateToProps, mapDispatchToprops)(withRouter(CategoriesContainer));
