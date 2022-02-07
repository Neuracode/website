import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Button } from 'react-bootstrap';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SynapticAI</title>
        <meta name='description' content='SynapticAI' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span
            style={{
              color: '#ff7100',
            }}
          >
            S
          </span>
          <span style={{ color: '#e3771c' }}>y</span>
          <span style={{ color: '#c67d39' }}>n</span>
          <span style={{ color: '#aa8255' }}>a</span>
          <span style={{ color: '#8e8871' }}>p</span>
          <span style={{ color: '#718e8e' }}>t</span>
          <span style={{ color: '#5594aa' }}>i</span>
          <span style={{ color: '#3999c6' }}>c</span>
          <span style={{ color: '#1c9fe3' }}>A</span>
          <span style={{ color: '#00a5ff' }}>I</span>
        </h1>

        <h3 className={styles.description}>Our courses will help you <b>learn AI fast</b></h3>

        <Button id="get-started-btn" variant='primary' className={styles.getStartedBtn}>Get Started!</Button>
      </main>

      <footer className={styles.footer}>
        Copyright &copy; {new Date().getFullYear()} SynapticAI
      </footer>
    </div>
  );
};

export default Home;
