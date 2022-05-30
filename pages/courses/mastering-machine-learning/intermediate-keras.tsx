import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import styles from '../../styles/Courses.module.css';
import CourseHeader from '../../../components/CourseHeader';
import Head from 'next/head';

const IntermediateKeras: React.FC = () => {
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
            <Head>
                <title>Intermediate Keras</title>
            </Head>
            <CourseHeader
                name='Intermediate Keras'
                curriculumList={curriculumList}
                about='Learn how to use Keras, a machine learning library for Python that is commonly used for artificial neural networks (ANNs) and deep learning. It is a high-level API that can be used along with TensorFlow.'
                startDate='June 30th'
                endDate='August 30th'
                dayAndTime='Saturday, 3:30PM - 5:00PM + Sunday, 3:30PM - 5:00PM'
                timeCommitment={4}
                recommendedGrades='8 - 12'
                prerequisites={[
                    'Basic Python',
                    'Intermediate Python',
                    'ML Concepts',
                ]}
            />
        </>
    );
};

export default IntermediateKeras;
