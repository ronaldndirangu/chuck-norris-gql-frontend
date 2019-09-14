import React from 'react';
import InputStyles from './styles';

const Input = ({ value, onChange, type, onBlur }) => (
  <InputStyles value={value} onChange={onChange} type={type} onBlur={onBlur} />
);

export default Input;
