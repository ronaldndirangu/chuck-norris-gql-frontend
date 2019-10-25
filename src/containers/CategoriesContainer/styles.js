import styled from 'styled-components';
import { Colors } from '../../Colors';

const Container = styled.div`
  display: flex;
  position: relative;
  height: 100%;

  > div {
    flex: 0.5;
    overflow: scroll;

    &:nth-child(3) {
      width: 45%;
      height: 100%;
      background-color: ${Colors.primary}45;
      padding: 30px;
      overflow: auto;
      box-shadow: -2px -3px 5px rgba(0,0,0,0.3);
      box-sizing: border-box;
      font-weight: 500;
      color: #181818;
    }
  }
`;

export const Brand = styled.div`
  margin: 20px;
  left: 20px;
  font-size: 2.5rem;
  cursor: pointer;
  color: ${Colors.primary}
  font-family: New Century Schoolbook, serif;
`;

export const Wrapper = styled.div`

`;

export default Container;
