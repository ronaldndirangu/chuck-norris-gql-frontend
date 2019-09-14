import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_CATEGORIES } from '../../queries';
import Categories from '../../components/Categories';
import Joke from '../../components/Joke';
import Container, { Brand, Wrapper } from './styles';
import Avatar from '../../components/Avatar';
import { doLogout } from '../../redux/actions/loginAction';

const CategoriesContainer = ({ history, logout, user, token }) => {
  const [category, setCategory] = useState();
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  const handleCategoryClick = category => {
    setCategory(category);
  };

  return !token ? (
    <Redirect to='/' />
  ) : (
    <Container>
      <Avatar logout={logout} history={history} text={user[0]} />
      <Wrapper>
        <Brand>ChuckNorris</Brand>
        <Categories
          data={data}
          error={error}
          loading={loading}
          handleCategoryClick={handleCategoryClick}
        />

      </Wrapper>
      <Joke category={category} />
    </Container>
  );
};

const mapStateToProps = ({ loginReducer }) => ({
  user: loginReducer.user,
  token: loginReducer.token
});

const mapDispatchToprops = dispatch => ({
  logout: () => dispatch(doLogout())
});

export default connect(mapStateToProps, mapDispatchToprops)(withRouter(CategoriesContainer));
