import styled from 'styled-components';

const InputStyles = styled.input.attrs(props => ({
  // we can define static props
  type: props.type || 'text',
  value: props.value || ''
}))``;

export default InputStyles;
