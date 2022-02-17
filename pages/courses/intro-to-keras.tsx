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
            <ListGroup.Item>Multilayer Perceptron &#40;MLP&#41; overview</ListGroup.Item>
            <ListGroup.Item>Sequential API</ListGroup.Item>
            <ListGroup.Item>Functional API</ListGroup.Item>
            <ListGroup.Item>Subclassing API</ListGroup.Item>
            <ListGroup.Item>Tuning Hyperparameters</ListGroup.Item>
            <ListGroup.Item>Vanishing/Exploding Gradient</ListGroup.Item>
            <ListGroup.Item>Pretrained layers</ListGroup.Item>
            <ListGroup.Item>Optimizers</ListGroup.Item>
            <ListGroup.Item>Regularization</ListGroup.Item>
          </ListGroup>
        </main>
      </Container>
    </>
  );
};

export default IntroToKeras;
