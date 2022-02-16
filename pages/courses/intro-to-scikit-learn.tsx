import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import styles from '../../styles/Courses.module.css';

const IntroToScikitLearn: React.FC = () => {
  return (
    <>
      <Container>
        <h1 className={styles.title}>Intro to Scikit-Learn</h1>
        <main>
          <h3>Concepts covered</h3>
          <ListGroup variant='flush'>
            <ListGroup.Item>What is Scikit-Learn?</ListGroup.Item>
            <ListGroup.Item>Classification overview</ListGroup.Item>
            <ListGroup.Item>Binary classification</ListGroup.Item>
            <ListGroup.Item>Measure performance</ListGroup.Item>
            <ListGroup.Item>Multi-class classification</ListGroup.Item>
            <ListGroup.Item>Multi-label classification</ListGroup.Item>
            <ListGroup.Item>Multi-output classification</ListGroup.Item>
            <ListGroup.Item>Algorithms overview</ListGroup.Item>
            <ListGroup.Item>Linear regression</ListGroup.Item>
            <ListGroup.Item>Gradient descent</ListGroup.Item>
            <ListGroup.Item>Polynomial regression</ListGroup.Item>
            <ListGroup.Item>Regularized linear models</ListGroup.Item>
            <ListGroup.Item>Logistic regression</ListGroup.Item>
            <ListGroup.Item>Support vector machines overview</ListGroup.Item>
            <ListGroup.Item>Linear SVM classification</ListGroup.Item>
            <ListGroup.Item>Nonlinear SVM classification</ListGroup.Item>
            <ListGroup.Item>SVM regression</ListGroup.Item>
            <ListGroup.Item>Online SVMs</ListGroup.Item>
            <ListGroup.Item>Decision trees overview</ListGroup.Item>
            <ListGroup.Item>Training decision trees</ListGroup.Item>
            <ListGroup.Item>Visualizing decision trees</ListGroup.Item>
            <ListGroup.Item>Estimating class probabilities</ListGroup.Item>
            <ListGroup.Item>Regularization hyper-parameters</ListGroup.Item>
            <ListGroup.Item>Regression</ListGroup.Item>
            <ListGroup.Item>Ensemble learning and random forests overview</ListGroup.Item>
            <ListGroup.Item>Voting classifiers</ListGroup.Item>
            <ListGroup.Item>Bagging and pasting</ListGroup.Item>
            <ListGroup.Item>Random patches and random subspaces</ListGroup.Item>
            <ListGroup.Item>Random forests</ListGroup.Item>
            <ListGroup.Item>Boosting</ListGroup.Item>
            <ListGroup.Item>Stacking</ListGroup.Item>
            <ListGroup.Item>Dimensionality reduction overview</ListGroup.Item>
            <ListGroup.Item>What is dimensionality?</ListGroup.Item>
            <ListGroup.Item>Dimensionality reduction</ListGroup.Item>
            <ListGroup.Item>PCA</ListGroup.Item>
            <ListGroup.Item>Kernel PCA</ListGroup.Item>
            <ListGroup.Item>LLE</ListGroup.Item>
            <ListGroup.Item>Other dimensionality reduction techniques</ListGroup.Item>
            <ListGroup.Item>Clustering</ListGroup.Item>
            <ListGroup.Item>Gaussian mixtures</ListGroup.Item>
          </ListGroup>
        </main>
      </Container>
    </>
  );
};

export default IntroToScikitLearn;
