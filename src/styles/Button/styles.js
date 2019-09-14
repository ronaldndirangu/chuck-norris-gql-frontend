import styled from 'styled-components';
import { Colors } from '../../Colors';

const ButtonStyles = styled.button.attrs(props => ({
  // we can define static props
  type: props.type || 'button'
}))`
  height: 3rem;
  width: 20rem;
  font-size: 1rem;
  background-color: ${props => props.bgColor || Colors.primary}
  font-weight: 500;
  color: ${props => props.color || Colors.white}
  border-radius: 5px;
  border: solid 1px ${Colors.primary};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => (props.disabled ? '0.5' : '1')};
  transition: all 250ms ease-in-out 0s;


  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${props => (!props.disabled && 'transparent')};
    color: ${props => (props.disabled ? Colors.white : Colors.primary)};
    border: solid 1px ${Colors.primary};
  }
`;

export default ButtonStyles;
