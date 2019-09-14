import styled from 'styled-components';
import { Colors } from '../../Colors';

const Container = styled.div`
  display: flex;
  position: relative;
  height: 100%;

  > div {
    flex: 0.5;

    &:nth-child(4) {
      width: 45%;
      height: 100%;
      background-color: ${Colors.primary}75;
      padding: 30px;
      overflow: auto;
      box-shadow: -2px -3px 5px rgba(0,0,0,0.3);
      box-sizing: border-box;
      color: #fff;
    }
  }
`;

export const Brand = styled.div`
  position: absolute;
  top: 10px;
  left: 20px;
  font-size: 2.5rem;
  cursor: pointer;
  color: ${Colors.primary}
  font-family: New Century Schoolbook, serif;
`;

export default Container;
