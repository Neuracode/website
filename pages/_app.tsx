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

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <>
            <MainNavbar />
            <Component {...pageProps} />
            <footer>
                <Container className='w-100'>
                    {/* <p>
                        We&apos;re on a mission to democratize machine learning!
                        Support the mission by donating or applying for an
                        internship.
                    </p> */}
                    <div>
                        <Row>
                            <Col>
                                <div>
                                    <b className='footerCategory'>
                                        INFORMATION
                                    </b>
                                    <hr />
                                    <div>
                                        <Link href='/courses/overview' passHref>
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
                                                Team Members
                                            </p>
                                        </Link>
                                        <Link href='/blog/latest' passHref>
                                            <p
                                                role='button'
                                                className='footerLink'
                                            >
                                                Latest Blogs
                                            </p>
                                        </Link>
                                        <Link href='/events/hackathon' passHref>
                                            <p
                                                role='button'
                                                className='footerLink'
                                            >
                                                Hackathon (Coming Soon)
                                            </p>
                                        </Link>
                                        <Link
                                            href='https://forms.gle/7dYev7Agaj36qsHe8'
                                            passHref
                                        >
                                            <p
                                                role='button'
                                                className='footerLink'
                                            >
                                                Internship Applications
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col md={{ offset: 1 }}>
                                <div>
                                    <b className='footerCategory'>SOCIAL</b>
                                    <hr />
                                    <div>
                                        <a
                                            href='https://discord.gg/N2dC3nNA7n'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='text-decoration-none'
                                        >
                                            <Button
                                                className='footerLink socialButton text-decoration-none w-100'
                                                variant='outline-light'
                                            >
                                                <div className='socialBtnContent'>
                                                    <Image
                                                        src='/social_icons/discord-color.png'
                                                        width='30'
                                                        height='30'
                                                        alt='discord'
                                                        className='footerIcon'
                                                    />
                                                </div>
                                            </Button>
                                        </a>
                                        <a
                                            href='https://instagram.com/neuracode_'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='text-decoration-none'
                                        >
                                            <Button
                                                className='footerLink mt-3 text-decoration-none w-100'
                                                variant='outline-light'
                                            >
                                                <div className='socialBtnContent'>
                                                    <Image
                                                        src='/social_icons/instagram-color.png'
                                                        width='30'
                                                        height='30'
                                                        alt='instagram'
                                                        className='footerIcon'
                                                    />
                                                </div>
                                            </Button>
                                        </a>
                                        <a
                                            href='https://twitter.com/neuracode'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='text-decoration-none'
                                        >
                                            <Button
                                                className='footerLink mt-3 text-decoration-none w-100'
                                                variant='outline-light'
                                            >
                                                <div className='socialBtnContent'>
                                                    <Image
                                                        src='/social_icons/twitter-color.png'
                                                        width='30'
                                                        height='30'
                                                        alt='twitter'
                                                        className='footerIcon'
                                                    />
                                                </div>
                                            </Button>
                                        </a>
                                        <a
                                            href='https://www.linkedin.com/company/neuracode/'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='text-decoration-none'
                                        >
                                            <Button
                                                className='footerLink mt-3 text-decoration-none w-100'
                                                variant='outline-light'
                                            >
                                                <div className='socialBtnContent'>
                                                    <Image
                                                        src='/social_icons/linkedin-color.png'
                                                        width='30'
                                                        height='30'
                                                        alt='linkedin'
                                                        className='footerIcon'
                                                    />
                                                </div>
                                            </Button>
                                        </a>
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
                                                Contact Us
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <hr />
                    <p>
                        <span>
                            Copyright &copy; {new Date().getFullYear()}{' '}
                            Neuracode. All rights reserved.
                        </span>
                    </p>
                </Container>
            </footer>
        </>
    );
}

export default MyApp;
