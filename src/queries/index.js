import { gql } from 'apollo-boost';

const SIGNUP_USER = gql`
  mutation SignUp($email: String!, $name: String!, $username: String!, $password: String!) {
    signUp(email: $email, name: $name, username: $username, password: $password){
      id,
      name
    }
  }
`;

const LOGIN_USER = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(email: $email,  password: $password){
      token,
      name
    }
  }
`;

const GET_CATEGORIES = gql`
  {
    categories
  }
`;

const GET_JOKE = gql`
  query Joke($category: String!){
    joke(category: $category) {
      id,
      value,
      categories
    }
  }
`;

export {
  SIGNUP_USER,
  LOGIN_USER,
  GET_CATEGORIES,
  GET_JOKE
};
