import styled from 'styled-components';
import { Colors } from '../../Colors';

const InputStyles = styled.input.attrs(props => ({
  // we can define static props
  type: props.type || 'text',
  value: props.value || ''
}))`
  height: 2.5rem;
  width: 20rem;
  font-size: 1rem;
  border: solid 1px ${Colors.coal};
  padding: 0px 5px;
  border-radius: 2px;

  &:focus {
    outline: none;
  }
`;

export default InputStyles;
