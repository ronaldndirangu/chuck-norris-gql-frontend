import React from 'react';
import ButtonStyles from './styles';

const Button = ({ label, type, onClick }) => {
  return (
    <ButtonStyles type={type} onClick={onClick}>{label}</ButtonStyles>
  );
};

export default Button;
