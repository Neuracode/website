import React from 'react';
import styles from '../../styles/Courses.module.css';
import CourseHeader from '../../../components/CourseHeader';
import Head from 'next/head';

const IntermediateTensorFlow: React.FC = () => {
    const curriculumList = [
        'What is TensorFlow?',
        'Tensors',
        'Variables',
        'Model customization',
        'TensorFlow functions and graphs',
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
            <Head>
                <title>Intermediate TensorFlow</title>
            </Head>
            <CourseHeader
                name='Intermediate TensorFlow'
                curriculumList={curriculumList}
                about='Learn how to use TensorFlow, a machine learning library that is primarily used for deep learning. It is used along with Keras and it mainly features a low-level API.'
                startDate='June 30th'
                endDate='August 30th'
                dayAndTime='Saturday, 5:00PM - 6:30PM + Sunday, 5:00PM - 6:30PM'
                timeCommitment={5}
                recommendedGrades='9 - 12'
                prerequisites={[
                    'Basic Python',
                    'Intermediate Python',
                    'ML Concepts',
                    'Keras',
                ]}
            />
        </>
    );
};

export default IntermediateTensorFlow;
