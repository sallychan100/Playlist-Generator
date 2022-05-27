import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { Provider } from 'react-redux';
import store from './utils/store';

import Landing from './pages/Landing';
import DisplayResult from './pages/DisplayResult';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SavedPlaylists from './pages/SavedPlaylists'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Provider store={store}>
            <Nav />
            <Routes>
              <Route 
                path="/" 
                element={<Landing />} 
              />
              <Route 
                path="/signin" 
                element={<SignIn />} 
              />
              <Route 
                path="/signup" 
                element={<SignUp />} 
              />
                <Route 
                  path="/results" 
                  element={<DisplayResult />} 
                />
              <Route 
                path="/savedplaylists" 
                element={<SavedPlaylists />} 
              />
            </Routes>
          </Provider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
