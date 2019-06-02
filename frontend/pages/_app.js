/* 

This file will serve to override the default App.js used by Next and be rendered on each page, allowing us to set global styles/shared components in one place.

You can read more about the _app.js handling here:

https://nextjs.org/docs/#custom-app

Next.js uses the App component to initialize pages. You can override it and control the page initialization. Which allows you to do amazing things like:

- Persisting layout between page changes
- Keeping state when navigating pages
- Custom error handling using componentDidCatch
- Inject additional data into pages (for example by processing GraphQL queries)

*/

import React from 'react';
import App, {Container} from 'next/app';
import Head from 'next/head';

export default class MyApp extends App {
    static async getInitialProps({ Component, router, ctx}){
        let pageProps = {};

        if(Component.getInitialProps){
            pageProps = await Component.getInitialProps(ctx);
        }

        return {pageProps};
    }


    render() {
        const {Component, pageProps} = this.props;

        return(
            <>
                <Head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
                </Head>

                <Container>
                    <Component {...pageProps} />
                </Container>
            </>
        );
    }
}