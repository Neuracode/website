import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../../../styles/Courses.module.css';
import CourseCards from '../../../components/CourseCards';
import Head from 'next/head';

const MasteringMachineLearning: React.FC = () => {
    interface ICourse {
        name: string;
        description: string;
        image: string;
        href: string;
        prerequisites: string[];
    }

    const courses: ICourse[] = [
        {
            name: 'Intro to Machine Learning',
            description:
                'Learn the basics of machine learning and theoretical knowledge on the topic. This course is meant as a primer for the other courses, which all rely on the concepts taught in this course.',
            image: '/course_icons/neural-network.png',
            href: '/courses/mastering-machine-learning/intro-to-machine-learning',
            prerequisites: [],
        },
        {
            name: 'Intro to Python',
            description:
                'Learn to use the general-purpose programming knowledge, which has a huge machine learning community to support it. Python is the most popular language for machine learning and this teaches you the basics you need for the other courses, which all require Python.',
            image: '/course_icons/python.png',
            href: '/courses/mastering-machine-learning/intro-to-python',
            prerequisites: [],
        },
        {
            name: 'Intermediate Python',
            description:
                'After the basics, intermediate Python is the next step in the machine learning journey. This course teaches you the more advanced concepts, which you will continue to use in other courses and your machine learning journey in general.',
            image: '/course_icons/python.png',
            href: '/courses/mastering-machine-learning/intermediate-python',
            prerequisites: ['Basic Python'],
        },
        {
            name: 'Intermediate Scikit-Learn',
            description:
                'Learn how to use Scikit-Learn, a machine learning library for Python that includes a lot of useful machine learning algorithms and functions. It is not too complex and is a great way to get started with machine learning.',
            image: 'https://avatars2.githubusercontent.com/u/365630?v=3&s=400',
            href: '/courses/mastering-machine-learning/intermediate-scikit-learn',
            prerequisites: [
                'Basic Python',
                'Intermediate Python',
                'ML Concepts',
            ],
        },
        {
            name: 'Intermediate Keras',
            description:
                'Learn how to use Keras, a machine learning library for Python that is commonly used for artificial neural networks (ANNs) and deep learning. It is a high-level API that can be used along with TensorFlow.',
            image: '/course_icons/keras_icon.png',
            href: '/courses/mastering-machine-learning/intermediate-keras',
            prerequisites: [
                'Basic Python',
                'Intermediate Python',
                'ML Concepts',
            ],
        },
        {
            name: 'Intermediate TensorFlow',
            description:
                'Learn how to use TensorFlow, a machine learning library that is primarily used for deep learning. It is used along with Keras and it mainly features a low-level API.',
            image: '/course_icons/tensorflow.png',
            href: '/courses/mastering-machine-learning/intermediate-tensorflow',
            prerequisites: [
                'Basic Python',
                'Intermediate Python',
                'ML Concepts',
                'Keras',
            ],
        },
    ];

    return (
        <>
            <Head>
                <title>Mastering Machine Learning</title>
            </Head>
            <Container className='mb-5'>
                <h1 className={styles.title}>Mastering Machine Learning</h1>
                <main className='mt-5'>
                    <CourseCards courses={courses} />
                </main>
            </Container>
            <div style={{ height: '3rem' }}></div>
        </>
    );
};

export default MasteringMachineLearning;
