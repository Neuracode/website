import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import styles from '../../styles/Courses.module.css';
import CourseHeader from '../../components/CourseHeader';

const IntroToTensorflow: React.FC = () => {
    const curriculumList = [
        'What is Tensorflow?',
        'Tensors',
        'Variables',
        'Model customization',
        'Tensorflow functions and graphs',
        'Loading and preprocessing data overview',
        'Data API',
        'TFRecord Format',
        'TF Transform',
        'Computer vision overview',
        'Convolutional neural networks overview',
        'Convolutional layer',
        'Pooling layer',
        'CNN Architectures',
        'Pretrained models',
        'Classification and localization',
        'Object detection',
        'Semantic segmentation',
    ];

    return (
        <>
            <CourseHeader
                name='Intro to Tensorflow'
                curriculumList={curriculumList}
                about='Learn how to use Tensorflow, a machine learning library that is primarily used for deep learning. It is used along with Keras and it mainly features a low-level API.'
            />
        </>
    );
};

export default IntroToTensorflow;
