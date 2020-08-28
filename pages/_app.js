import '../public/css/bootstrap.min.css';
import '../public/css/animate.min.css';
import '../public/css/boxicons.min.css';
import '../public/css/flaticon.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-image-lightbox/style.css';
import '../public/css/style.css';
import '../public/css/responsive.css';

import { RecoilRoot } from 'recoil'
import App from 'next/app';
import Layout from '../components/_App/Layout';

export default class MyApp extends App {
    static async getInitialProps({ Component, ctx }){
        let pageProps = {};
        if(Component.getInitialProps){
            pageProps = await Component.getInitialProps(ctx)
        }
        return { pageProps }
    }
    render () {
        const { Component, pageProps } = this.props
        return (
            <RecoilRoot>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </RecoilRoot>
        );
    }
}