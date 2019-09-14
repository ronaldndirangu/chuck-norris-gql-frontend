import styled from 'styled-components';

const JokeStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 250ms ease-in-out 1s;

  span {
    text-align: center;
    font-size: 1.2rem;
  }

  button {
    margin: 50px;
  }
`;

export default JokeStyles;
