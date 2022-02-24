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

        <meta name='title' content='Neuracode' />
        <meta
          name='description'
          content='Neuracode is a nonprofit organization that educates students around the world on the topic of machine learning. We are on a mission to make sure that all students have the opportunity to learn about machine learning, including underrepresented groups. We help students of all backgrounds learn about machine learning, and we are always looking for new students to join our team. We are primarily looking for students who are in elementary school, middle school, or high school.'
        />
        <meta
          name='keywords'
          content='neuracode, machine learning, high school, coding, computer science, computer science, intro to machine learning, intro to python, intermediate python, intro to scikit-learn, intro to keras, intro to tensorflow, scikit-learn, keras, tensorflow, GitHub, LinkedIn, Discord, Email, python, ai, ml, ai enthusiast, artificial intelligence, neural networks'
        />
        <meta name='robots' content='index, follow' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='language' content='English' />
        <meta name='author' content='Azam Ahmed' />
        <meta name='subject' content='Neuracode: Teaching Machine Learning' />
        <meta name='copyright' content='Azam Ahmed' />
        <meta name='revisit-after' content='1 days' />
        <meta name='classification' content='Neuracode: Teaching Machine Learning' />
        <meta name='distribution' content='Global' />
        <meta name='rating' content='General' />
        <meta name='owner' content='Azam Ahmed' />
        <meta name='url' content='https://neuracode.org' />
        <meta name='identifier-URL' content='https://neuracode.org' />
        <meta name='coverage' content='Worldwide' />
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
          Educating students on machine learning <b>around the world</b>
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
