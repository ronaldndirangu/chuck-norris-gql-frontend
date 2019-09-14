import styled from 'styled-components';
import { Colors } from '../../Colors';

export const LoginWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: whitesmoke;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
`;

export const FormStyles = styled.form`
  display: flex;
  flex: 0.5;
  flex-wrap: wrap;
  flex-direction: column;
  width: 40rem;
  height: ${props => props.height};
  padding: 2rem;
  align-items: center;
  justify-content: center;

  button {
    margin-top: 20px;
  }
`;

FormStyles.Title = styled.span`
  display: flex;
  margin-bottom: 50px;
  font-size: 2rem;
  color: ${Colors.coal};
`;

FormStyles.Links = styled.span`
  display: flex;
  color: ${Colors.coal};
  font-size: 0.8rem;

  span {
    color: ${Colors.primary};
    margin-left: 2px;
    cursor: pointer;
  }
`;

export const FormFieldStyles = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
  }

  input {
    margin-bottom: 20px;
  }
`;

FormFieldStyles.Label = styled.label`
  color: ${Colors.coal};
`;

export const FormBannerStyles = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.primary};
  flex: 0.5;
  align-items: center;
  justify-content: center;

  span {
    margin: 10px 0px;
  }
`;

FormBannerStyles.Title = styled.span`
  display: flex;
  color: ${Colors.coal};
  font-size: 3rem;
`;
FormBannerStyles.TagLine = styled.span`
  display: flex;
  color: ${Colors.white};
  font-size: 1rem;
  font-style: italic;

  &:before {
    content: open-quote;
  }

  &:after {
    content: close-quote;
  }

`;

export const FormContainer = styled.div`
  display: flex;
  background-color: ${Colors.white}
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.2);
`;
