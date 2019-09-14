import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../../components/LoginForm';
import { loginUser } from '../../redux/actions/loginAction';

import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER, SIGNUP_USER } from '../../queries';
import { Redirect, withRouter } from 'react-router-dom';

const LoginContainer = ({ login, token }) => {
  const [signIn, { data, error, loading }] = useMutation(LOGIN_USER);
  const [signUp,
    { data: signupData, error: signupError, loading: signupLoading }] = useMutation(SIGNUP_USER);

  const decodedError = {};
  const extensions = (error && error.graphQLErrors && error.graphQLErrors[0].extensions) || (
    signupError && signupError.graphQLErrors && signupError.graphQLErrors[0].extensions);
  if (!signupError) {
    const key = extensions &&
      extensions.exception &&
      extensions.exception.data &&
      extensions.exception.data.key;
    const value = extensions &&
      extensions.exception &&
      extensions.exception.internalData &&
      extensions.exception.internalData.error;
    decodedError[key && key.toLowerCase()] = value;
  } else {
    const errors = extensions &&
      extensions.exception &&
      extensions.exception.details;
    errors && errors.forEach(error => {
      decodedError[error && error.path[0].toLowerCase()] = error.message;
    });
  }

  window.localStorage.setItem('token', token);

  if (data) {
    const { token, name } = data.signIn;
    login({ token, name });
  }

  return token ? (
    <Redirect to='/categories' />
  ) : (
    <LoginForm
      signIn={signIn}
      signUp={signUp}
      signupData={signupData}
      error={decodedError}
      loading={loading || signupLoading}
    />
  );
};

const mapStateToProps = ({ loginReducer }) => ({
  token: loginReducer.token
});

const mapDispatchToProps = dispatch => ({
  login: ({ name, token }) => dispatch(loginUser({ name, token }))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginContainer));
