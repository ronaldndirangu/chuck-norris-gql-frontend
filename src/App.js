import React from 'react';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, from } from 'apollo-link';
import { ApolloProvider } from '@apollo/react-hooks';
import Routes from './routes';
import './app.scss';

const cache = new InMemoryCache();
const httpLink = new HttpLink({ uri: 'https://chuck-norris-api123.herokuapp.com/graphql' });

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
  link: from([authMiddleware, httpLink])
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
