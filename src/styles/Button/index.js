import React from 'react';
import ButtonStyles from './styles';

const Button = ({ label, type, onClick, bgColor, color, disabled, borderColor }) => {
  return (
    <ButtonStyles
      type={type}
      onClick={onClick}
      borderColor={borderColor}
      bgColor={bgColor}
      color={color}
      disabled={disabled}
    >{label}
    </ButtonStyles>
  );
};

export default Button;
