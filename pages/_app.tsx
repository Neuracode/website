import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from '../components/MainNavbar';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {
    interface loaderProps {
        src: string;
    }
    const customLoader = ({ src }: loaderProps) => {
        return `https://img.icons8.com/ios/1000/000000/${src}`;
    };

    return (
        <>
            <MainNavbar />
            <Component {...pageProps} />
            <footer>
                <Container className='w-100'>
                    <p>
                        We&apos;re on a mission to democratize machine learning!
                        Support the mission by donating or applying for an
                        internship.
                    </p>
                    <hr />
                    <p>
                        <span>
                            Copyright &copy; {new Date().getFullYear()}{' '}
                            Neuracode. All rights reserved.
                        </span>
                        <span
                            style={{ width: '120px' }}
                            className='d-flex justify-content-between mt-2'
                        >
                            <Link
                                href='mailto:contact@neuracode.org'
                                passHref={true}
                            >
                                <Image
                                    loader={customLoader}
                                    src='https://img.icons8.com/ios/1000/000000/mail.png'
                                    width='30'
                                    height='30'
                                    alt='email'
                                    className='footerIcon p-1'
                                />
                            </Link>
                            <Link
                                href='https://discord.gg/N2dC3nNA7n'
                                passHref={true}
                            >
                                <Image
                                    loader={customLoader}
                                    src='https://img.icons8.com/ios/1000/000000/discord-logo--v1.png'
                                    width='30'
                                    height='30'
                                    alt='discord'
                                    className='footerIcon p-1'
                                />
                            </Link>
                            <Link
                                href='https://instagram.com/neuracode.global'
                                passHref={true}
                            >
                                <Image
                                    loader={customLoader}
                                    src='https://img.icons8.com/ios/1000/000000/instagram-new--v1.png'
                                    width='30'
                                    height='30'
                                    alt='instagram'
                                    className='footerIcon p-1'
                                />
                            </Link>
                        </span>
                    </p>
                </Container>
            </footer>
        </>
    );
}

export default MyApp;
