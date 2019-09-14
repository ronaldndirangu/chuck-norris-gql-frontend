import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../../components/LoginForm';
import { loginUser } from '../../redux/actions/loginAction';

import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../../queries';
import { Redirect, withRouter } from 'react-router-dom';

const LoginContainer = ({ login, token }) => {
  const [signIn, { data, error, loading }] = useMutation(LOGIN_USER);
  console.log({ error });
  window.localStorage.setItem('token', token);

  if (data) {
    const { token, user } = data.signIn;
    login({ token, user });
  }

  return token ? (
    <Redirect to='/categories' />
  ) : (
    <LoginForm signIn={signIn} error={error} loading={loading} />
  );
};

const mapStateToProps = ({ loginReducer }) => ({
  token: loginReducer.token
});

const mapDispatchToProps = dispatch => ({
  login: ({ user, token }) => dispatch(loginUser({ user, token }))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginContainer));
