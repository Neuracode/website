import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import styles from '../../styles/Courses.module.css';

const IntroToPython: React.FC = () => {
  return (
    <>
      <Container>
        <h1 className={styles.title}>Intro to Python</h1>
        <main>
          <h3>Concepts covered</h3>
          <ListGroup variant='flush'>
            <ListGroup.Item>What is Python?</ListGroup.Item>
            <ListGroup.Item>Installation</ListGroup.Item>
            <ListGroup.Item>Variables</ListGroup.Item>
            <ListGroup.Item>Data types</ListGroup.Item>
            <ListGroup.Item>Operators</ListGroup.Item>
            <ListGroup.Item>Input</ListGroup.Item>
            <ListGroup.Item>Comments</ListGroup.Item>
            <ListGroup.Item>Lists, tuples, and sets</ListGroup.Item>
            <ListGroup.Item>Functions</ListGroup.Item>
            <ListGroup.Item>If statements</ListGroup.Item>
            <ListGroup.Item>Loops and nested loops</ListGroup.Item>
            <ListGroup.Item>Dictionaries</ListGroup.Item>
            <ListGroup.Item>Try/Except</ListGroup.Item>
            <ListGroup.Item>Files</ListGroup.Item>
            <ListGroup.Item>Modules</ListGroup.Item>
            <ListGroup.Item>Intro to classes and objects</ListGroup.Item>
          </ListGroup>
        </main>
      </Container>
    </>
  );
};

export default IntroToPython;