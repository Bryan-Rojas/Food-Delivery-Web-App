/* _app.js */

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