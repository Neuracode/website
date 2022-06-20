import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from '../components/MainNavbar';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import * as ga from '../lib/ga';

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const { asPath } = useRouter();

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            ga.pageview(url);
        };
        //When the component is mounted, subscribe to router changes
        //and log those page views
        router.events.on('routeChangeComplete', handleRouteChange);

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const formUrl = 'https://forms.gle/y4jfEVaoNM2HrzRe8';

    return (
        <>
            {asPath === '/' ? (
                <div className='banner'>
                    <div>
                        Do you want to learn machine learning?{' '}
                        <a
                            href={formUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <b
                                className='text-decoration-underline cursor-pointer'
                                style={{ color: 'white' }}
                            >
                                Sign up
                            </b>
                        </a>{' '}
                        for any course by June 28th!
                    </div>
                </div>
            ) : null}

            <MainNavbar />
            <Component {...pageProps} />
            <footer>
                <Container className='w-100'>
                    <div>
                        <Row>
                            <Col>
                                <div>
                                    <b className='footerCategory'>
                                        INFORMATION
                                    </b>
                                    <hr />
                                    <div>
                                        <Link href='/courses' passHref>
                                            <p
                                                role='button'
                                                className='footerLink'
                                            >
                                                Courses Overview
                                            </p>
                                        </Link>
                                        <Link href='/about/team' passHref>
                                            <p
                                                role='button'
                                                className='footerLink'
                                            >
                                                Our Team
                                            </p>
                                        </Link>
                                        <Link
                                            href='/blog/latest-blogs'
                                            passHref
                                        >
                                            <p
                                                role='button'
                                                className='footerLink'
                                            >
                                                Latest Blogs
                                            </p>
                                        </Link>
                                        <Link
                                            href='/events/neurahacks'
                                            passHref
                                        >
                                            <p
                                                role='button'
                                                className='footerLink'
                                            >
                                                NeuraHacks
                                            </p>
                                        </Link>
                                        <Link
                                            href='/about/volunteer'
                                            passHref
                                        >
                                            <p
                                                role='button'
                                                className='footerLink'
                                            >
                                                Volunteer
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col md={{ offset: 1 }}>
                                <div>
                                    <b className='footerCategory'>SUPPORT</b>
                                    <hr />
                                    <div>
                                        <Link
                                            href='mailto:contact@neuracode.org'
                                            passHref
                                        >
                                            <p
                                                role='button'
                                                className='footerLink'
                                            >
                                                Email Us
                                            </p>
                                        </Link>
                                        <Link
                                            href='tel:6092551853'
                                            passHref
                                        >
                                            <p
                                                role='button'
                                                className='footerLink'
                                            >
                                                Call Us
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <hr />
                    <p>
                        <div className='d-flex flex-row justify-content-between'>
                            <span>
                                Copyright &copy; {new Date().getFullYear()}{' '}
                                Neuracode. All rights reserved.
                            </span>
                            <span>
                                <a href="https://www.facebook.com/Neuracode-115543031164767/" target="_blank" rel="noreferrer noopener" className="me-3">
                                    <Image src="/social_icons/facebook.png" alt="facebook" width={35} height={35} />
                                </a>
                                <a href="https://instagram.com/neuracode_" target="_blank" rel="noreferrer noopener" className="me-3">
                                    <Image src="/social_icons/instagram.png" alt="instagram" width={35} height={35} />
                                </a>
                                <a href="https://www.linkedin.com/company/neuracode/" target="_blank" rel="noreferrer noopener" className="me-3">
                                    <Image src="/social_icons/linkedin.png" alt="linkedin" width={35} height={35} />
                                </a>
                                <a href="https://twitter.com/neuracode" target="_blank" rel="noreferrer noopener">
                                    <Image src="/social_icons/twitter.png" alt="twitter" width={35} height={35} />
                                </a>
                            </span>
                            {/* <span>EIN: 88-1756778</span> */}
                        </div>
                    </p>
                </Container>
            </footer>
        </>
    );
}

export default MyApp;
