import React from 'react';
import { FormFieldStyles } from './styles';
import Input from '../../styles/Input';

const FormField = ({ label, value, onChange, type }) => {
  return (
    <FormFieldStyles>
      <FormFieldStyles.Label>{label}</FormFieldStyles.Label>
      <Input value={value} onChange={onChange} type={type} />
    </FormFieldStyles>
  );
};

export default FormField;
