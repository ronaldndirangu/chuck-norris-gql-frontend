import React from 'react';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, from } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { ApolloProvider } from '@apollo/react-hooks';
import Routes from './routes';
import './app.scss';

const cache = new InMemoryCache();
const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' });

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      authorization: window.localStorage.getItem('token') || null
    }
  });

  return forward(operation);
});

// Apollo client setup
const client = new ApolloClient({
  cache,
  link: from([errorLink, authMiddleware, httpLink])
});

function App () {
  return (
    <ApolloProvider client={client}>
      <div id='main'>
        <Routes />
      </div>
    </ApolloProvider>
  );
}

export default App;
