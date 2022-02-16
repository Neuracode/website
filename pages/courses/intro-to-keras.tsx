import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import styles from '../../styles/Courses.module.css';

const IntroToKeras: React.FC = () => {
  return (
    <>
      <Container>
        <h1 className={styles.title}>Intro to Keras</h1>
        <main>
          <h3>Concepts covered</h3>
          <ListGroup variant='flush'>
            <ListGroup.Item>What is Keras?</ListGroup.Item>
          </ListGroup>
        </main>
      </Container>
    </>
  );
};

export default IntroToKeras;
