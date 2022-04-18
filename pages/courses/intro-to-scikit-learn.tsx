import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import styles from '../../styles/Courses.module.css';
import CourseHeader from '../../components/CourseHeader';

const IntroToScikitLearn: React.FC = () => {
    const curriculumList = [
        'What is Scikit-Learn?',
        'Classification overview',
        'Binary classification',
        'Measure performance',
        'Multi-class classification',
        'Multi-label classification',
        'Multi-output classification',
        'Algorithms overview',
        'Linear regression',
        'Gradient descent',
        'Polynomial regression',
        'Regularized linear models',
        'Logistic regression',
        'Support vector machines overview',
        'Linear SVM classification',
        'Nonlinear SVM classification',
        'SVM regression',
        'Online SVMs',
        'Decision trees overview',
        'Training decision trees',
        'Visualizing decision trees',
        'Estimating class probabilities',
        'Regularization hyper-parameters',
        'Regression',
        'Ensemble learning and random forests overview',
        'Voting classifiers',
        'Bagging and pasting',
        'Random patches and random subspaces',
        'Random forests',
        'Boosting',
        'Stacking',
        'Dimensionality reduction overview',
        'What is dimensionality?',
        'Dimensionality reduction',
        'Principal Component Analysis (PCA)',
        'Kernel PCA',
        'LLE',
        'Other dimensionality reduction techniques',
        'Clustering',
        'Gaussian mixtures',
    ];

    return (
        <>
            <CourseHeader
                name='Intro to Scikit-Learn'
                curriculumList={curriculumList}
                about='Learn how to use Scikit-Learn, a machine learning library for Python that includes a lot of useful machine learning algorithms and functions. It is not too complex and is a great way to get started with machine learning.'
            />
        </>
    );
};

export default IntroToScikitLearn;
