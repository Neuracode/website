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
                about='This course is meant for students who have already learned Intermediate Python, Intermediate Keras, and know basic machine learning concepts. TensorFlow is a machine learning library with a low-level API that is primarily used for deep learning along with Keras. With this library, students will have much more control over their machine learning models and will be able to create advanced projects.'
                startDate='July 1st'
                endDate='August 26th'
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
