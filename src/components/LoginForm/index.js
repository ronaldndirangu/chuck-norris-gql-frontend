import React, { useState, useEffect } from 'react';
import { FormStyles, LoginWrapper, FormContainer } from './styles';
import FormField from './FormField';
import Button from '../../styles/Button';
import FormBanner from './FormBanner';

const LoginForm = ({ signIn, error, signUp, signupData, loading }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [currentError, setCurrentError] = useState({});

  useEffect(() => {
    setCurrentError(error);
  }, [error]);

  useEffect(() => {
    setIsSignUp(false);
  }, [signupData]);

  const checkMatchingPasswords = (e) => {
    if (confirmPassword !== password) {
      setCurrentError({ ...error, confirmpassword: 'Does not match password provided' });
    } else {
      setCurrentError({});
    }
  };

  useEffect(() => {
    setEmail('');
    setPassword('');
    setCurrentError({});
  }, [isSignUp]);

  const handleSubmit = e => {
    e.preventDefault();
    if (isSignUp) {
      signUp({ variables: { email, password, name, username } });
    } else {
      signIn({ variables: { email, password } });
    }
  };

  const renderSigninFields = () => {
    return (
      <>
        <FormField
          type='password'
          label='ConfirmPassword'
          onBlur={e => checkMatchingPasswords(e)}
          onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword}
          error={currentError}
        />
        <FormField
          type='text'
          label='Name'
          onChange={e => setName(e.target.value)} value={name}
          error={currentError}
        />
        <FormField
          type='text'
          label='Username'
          onChange={e => setUserName(e.target.value)} value={username}
          error={currentError}
        />
      </>
    );
  };

  return (
    <LoginWrapper>
      <FormContainer>
        <FormBanner />
        <FormStyles height={isSignUp ? '40rem' : '30rem'}>
          <FormStyles.Title>
            {isSignUp ? 'Signup' : 'Login'}
          </FormStyles.Title>
          <FormField
            label='Email'
            onChange={e => setEmail(e.target.value)} value={email}
            error={currentError}
          />
          <FormField
            type='password'
            label='Password'
            onChange={e => setPassword(e.target.value)} value={password}
            error={currentError}
          />
          {
            isSignUp && renderSigninFields()
          }
          {
            !isSignUp ? (
              <FormStyles.Links>
                Dont have and account,
                <span onClick={() => setIsSignUp(true)}>sign up</span>
              </FormStyles.Links>
            )
              : (
                <FormStyles.Links>
                  I already have an account,
                  <span onClick={() => setIsSignUp(false)}>sign in</span>
                </FormStyles.Links>
              )
          }
          <Button
            label={isSignUp ? 'Signup' : 'Login'}
            onClick={e => handleSubmit(e)}
            disabled={loading || (!isSignUp && (!email || !password)) || (
              isSignUp &&
              (!email || !password || !confirmPassword || !name || !username || currentError.confirmPassword)
            )}
          />
        </FormStyles>
      </FormContainer>
    </LoginWrapper>
  );
};

export default LoginForm;
