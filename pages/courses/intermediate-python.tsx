import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import styles from '../../styles/Courses.module.css';

const IntermediatePython: React.FC = () => {
  return (
    <>
      <Container>
        <h1 className={styles.title}>Intermediate Python</h1>
        <main>
          <h3>Concepts covered</h3>
          <ListGroup variant='flush'>
            <ListGroup.Item>Going in depth with classes and objects</ListGroup.Item>
            <ListGroup.Item>Collections</ListGroup.Item>
            <ListGroup.Item>Itertools</ListGroup.Item>
            <ListGroup.Item>Lambda functions</ListGroup.Item>
            <ListGroup.Item>Exceptions and errors</ListGroup.Item>
            <ListGroup.Item>Logging</ListGroup.Item>
            <ListGroup.Item>JSON</ListGroup.Item>
            <ListGroup.Item>Random numbers</ListGroup.Item>
            <ListGroup.Item>Decorators</ListGroup.Item>
            <ListGroup.Item>Generators</ListGroup.Item>
            <ListGroup.Item>Multithreading and multiprocessing</ListGroup.Item>
            <ListGroup.Item>Function arguments and &#40;*&#41; operator</ListGroup.Item>
            <ListGroup.Item>Shallow vs. deep copying</ListGroup.Item>
            <ListGroup.Item>Context managers</ListGroup.Item>
            <ListGroup.Item>NumPy</ListGroup.Item>
            <ListGroup.Item>Pandas</ListGroup.Item>
            <ListGroup.Item>What next?</ListGroup.Item>
          </ListGroup>
        </main>
      </Container>
    </>
  );
};

export default IntermediatePython;