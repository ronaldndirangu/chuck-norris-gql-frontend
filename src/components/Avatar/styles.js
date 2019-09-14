import styled from 'styled-components';
import { Colors } from '../../Colors';

const AvatarStyles = styled.button`
  display: flex;
  height: 50px;
  width: 50px;
  position: fixed;
  top: 10px;
  right: 10px;
  background-color: ${Colors.primary}
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

AvatarStyles.DropDown = styled.span`
  background-color: whitesmoke;
  z-index: 5;
  position: absolute;
  top: 50px;
  right: 5px;
  color: ${Colors.coal};
  font-size: 1rem;
  padding: 10px 50px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: ${Colors.primary};
  }
`;

export default AvatarStyles;
