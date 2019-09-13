import styled from 'styled-components';

const ButtonStyles = styled.button.attrs(props => ({
  // we can define static props
  type: props.type || 'button'
}))``;

export default ButtonStyles;
