import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { Button } from 'react-bootstrap';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Neuracode</title>
        <meta name='description' content='Neuracode' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span style={{ color: '#ff7100' }}>N</span>
          <span style={{ color: '#e3771c' }}>e</span>
          <span style={{ color: '#c67d39' }}>u</span>
          <span style={{ color: '#aa8255' }}>r</span>
          <span style={{ color: '#8e8871' }}>a</span>
          <span style={{ color: '#718e8e' }}>c</span>
          <span style={{ color: '#5594aa' }}>o</span>
          <span style={{ color: '#3999c6' }}>d</span>
          <span style={{ color: '#1c9fe3' }}>e</span>
        </h1>

        <h3 className={styles.description}>
          Our courses will help you <b>learn AI fast</b>
        </h3>

        <Link href='/courses/overview' passHref={true}>
          <Button
            id='get-started-btn'
            variant='primary'
            className={styles.getStartedBtn}
          >
            Get Started!
          </Button>
        </Link>
      </main>
    </div>
  );
};

export default Home;
