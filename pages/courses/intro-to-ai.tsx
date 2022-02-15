import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../../styles/Courses.module.css';

const IntroToAI: React.FC = () => {
  return (
    <>
      <Container className='mb-5'>
        <h1 className={styles.title}>Intro to AI</h1>
        <main>
          <h3>Description</h3>
        </main>
      </Container>
    </>
  );
};

export default IntroToAI;
