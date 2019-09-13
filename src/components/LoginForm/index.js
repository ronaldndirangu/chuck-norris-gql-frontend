import React, { useState } from 'react';
import { FormStyles } from './styles';
import FormField from './FormField';
import Button from '../../styles/Button';

const LoginForm = ({ signIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    signIn({ variables: { email, password } });
  };

  return (
    <FormStyles onSubmit={handleSubmit}>
      <FormField
        label='Email'
        onChange={e => setEmail(e.target.value)} value={email}
      />
      <FormField
        type='password'
        label='Password'
        onChange={e => setPassword(e.target.value)} value={password}
      />
      <Button type='submit' label='Login' onClick={e => handleSubmit(e)} />
    </FormStyles>
  );
};

export default LoginForm;
