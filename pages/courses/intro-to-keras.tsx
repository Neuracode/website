import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import styles from '../../styles/Courses.module.css';
import CourseHeader from '../../components/CourseHeader';

const IntroToKeras: React.FC = () => {
    const curriculumList = [
        'What is Keras?',
        'Multilayer Perceptron (MLP) overview',
        'Sequential API',
        'Functional API',
        'Subclassing API',
        'Tuning Hyperparameters',
        'Vanishing/Exploding Gradient',
        'Pretrained layers',
        'Optimizers',
        'Regularization',
    ];

    return (
        <>
            <CourseHeader
                name='Intro to Keras'
                curriculumList={curriculumList}
                about='Learn how to use Keras, a machine learning library for Python that is commonly used for artificial neural networks (ANNs) and deep learning. It is a high-level API that can be used along with Tensorflow.'
            />
        </>
    );
};

export default IntroToKeras;
