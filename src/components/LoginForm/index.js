import React, { useState } from 'react';
import { FormStyles, LoginWrapper, FormContainer } from './styles';
import FormField from './FormField';
import Button from '../../styles/Button';
import FormBanner from './FormBanner';

const LoginForm = ({ signIn }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Submit');
    signIn({ variables: { email, password } });
  };

  const renderSigninFields = () => {
    return (
      <>
        <FormField
          type='password'
          label='Confirm Password'
          onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword}
        />
        <FormField
          type='text'
          label='Name'
          onChange={e => setName(e.target.value)} value={name}
        />
        <FormField
          type='text'
          label='Username'
          onChange={e => setUserName(e.target.value)} value={username}
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
          />
          <FormField
            type='password'
            label='Password'
            onChange={e => setPassword(e.target.value)} value={password}
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
          <Button label={isSignUp ? 'Signup' : 'Login'} onClick={e => handleSubmit(e)} />
        </FormStyles>
      </FormContainer>
    </LoginWrapper>
  );
};

export default LoginForm;
