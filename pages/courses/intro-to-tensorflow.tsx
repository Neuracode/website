import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import styles from '../../styles/Courses.module.css';

const IntroToTensorflow: React.FC = () => {
  return (
    <>
      <Container>
        <h1 className={styles.title}>Intro to Tensorflow</h1>
        <main>
          <h3>Concepts covered</h3>
          <ListGroup variant='flush'>
            <ListGroup.Item>What is Tensorflow?</ListGroup.Item>
            <ListGroup.Item>Tensors</ListGroup.Item>
            <ListGroup.Item>Variables</ListGroup.Item>
            <ListGroup.Item>Model customization</ListGroup.Item>
            <ListGroup.Item>Tensorflow functions and graphs</ListGroup.Item>
            <ListGroup.Item>Loading and preprocessing data overview</ListGroup.Item>
            <ListGroup.Item>Data API</ListGroup.Item>
            <ListGroup.Item>TFRecord Format</ListGroup.Item>
            <ListGroup.Item>Features API</ListGroup.Item>
            <ListGroup.Item>TF Transform</ListGroup.Item>
            <ListGroup.Item>Computer vision overview</ListGroup.Item>
            <ListGroup.Item>Convolutional neural networks overview</ListGroup.Item>
            <ListGroup.Item>Convolutional overview</ListGroup.Item>
            <ListGroup.Item>Convolutional layer</ListGroup.Item>
            <ListGroup.Item>Pooling layer</ListGroup.Item>
            <ListGroup.Item>CNN Architectures</ListGroup.Item>
            <ListGroup.Item>Pretrained models</ListGroup.Item>
            <ListGroup.Item>Classification and localization</ListGroup.Item>
            <ListGroup.Item>Object detection</ListGroup.Item>
            <ListGroup.Item>Semantic segmentation</ListGroup.Item>
          </ListGroup>
        </main>
      </Container>
    </>
  );
};

export default IntroToTensorflow;
