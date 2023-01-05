import { render } from '@testing-library/react';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import App from 'App';
import { AppRoutes } from 'AppRoutes';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Router } from 'react-router-dom';

describe(' test the apollocilent', () => {
    test('should render the data enter page', () => {
        const cache = new InMemoryCache({ freezeResults: true });
        const apolloClient = new ApolloClient({
            cache,
            uri: process.env.REACT_APP_GRAPH_URI,
            assumeImmutableResults: true
        });
        render(
        <ApolloProvider client={apolloClient}>
            <BrowserRouter>
            {/* <Router history={history}>
                <AppRoutes />
            </Router> */}
            </BrowserRouter>
        </ApolloProvider>
        );
    });
});