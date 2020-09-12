import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import {Provider} from 'next-auth/client'
import '../src/styles.css'
import {ApolloClient, InMemoryCache} from '@apollo/client';
import {ApolloProvider} from '@apollo/client';

export default function MyApp(props) {
    const {Component, pageProps} = props;

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);


    const client = new ApolloClient({
        uri: 'https://inspect-person-api.herokuapp.com/v1/graphql',
        cache: new InMemoryCache()
    });

    return (
        <Provider session={pageProps.session}>
            <ApolloProvider client={client}>
                <React.Fragment>
                    <Head>
                        <title>My page</title>
                        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
                    </Head>
                    <ThemeProvider theme={theme}>
                        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                        <CssBaseline/>
                        <Component {...pageProps} />
                    </ThemeProvider>
                </React.Fragment>
            </ApolloProvider>
        </Provider>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};
