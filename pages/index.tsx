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
        <link rel='icon' href='/neuracode_logo.png' />
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

        <Link href='/courses/overview' passHref={true} >
        <Button
          id='get-started-btn'
          variant='primary'
          className={styles.getStartedBtn}
        >
          Get Started!
        </Button>
        </Link>
      </main>

      <footer className={styles.footer}>
        Copyright &copy; {new Date().getFullYear()} Neuracode
      </footer>
    </div>
  );
};

export default Home;
