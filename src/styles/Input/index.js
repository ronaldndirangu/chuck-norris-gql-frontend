import React from 'react';
import InputStyles from './styles';

const Input = ({ value, onChange, type }) => (
  <InputStyles value={value} onChange={onChange} type={type} />
);

export default Input;
