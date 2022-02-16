import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import styles from '../../styles/Courses.module.css';

const IntroToAI: React.FC = () => {
  return (
    <>
      <Container className='mb-5'>
        <h1 className={styles.title}>Intro to AI</h1>
        <main>
          <h3>Concepts covered</h3>
          <ListGroup variant='flush'>
            <ListGroup.Item>What is machine learning?</ListGroup.Item>
            <ListGroup.Item>Why use machine learning?</ListGroup.Item>
            <ListGroup.Item>Different types of machine learning</ListGroup.Item>
            <ListGroup.Item>Common machine learning algorithms</ListGroup.Item>
            <ListGroup.Item>Testing and validating algorithms</ListGroup.Item>
            <ListGroup.Item>Neural networks and different types of neural networks</ListGroup.Item>
          </ListGroup>
        </main>
      </Container>
    </>
  );
};

export default IntroToAI;
