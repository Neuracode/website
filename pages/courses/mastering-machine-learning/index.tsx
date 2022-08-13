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
                'Learn to use the general-purpose programming language, which has a huge machine learning community to support it. Python is the most popular language for machine learning and this teaches you the basics you need for the other courses, which all require Python.',
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
