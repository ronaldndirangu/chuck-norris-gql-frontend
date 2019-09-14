import React from 'react';
import { FormFieldStyles } from './styles';
import Input from '../../styles/Input';

const FormField = ({ label, value, onChange, type, error, onBlur }) => {
  return (
    <FormFieldStyles>
      <FormFieldStyles.Label>{label}</FormFieldStyles.Label>
      <Input value={value} onChange={onChange} type={type} onBlur={onBlur} />
      <FormFieldStyles.Error>
        {error && error[label.toLowerCase()]}
      </FormFieldStyles.Error>
    </FormFieldStyles>
  );
};

export default FormField;
