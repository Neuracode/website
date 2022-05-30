import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import styles from '../../styles/Courses.module.css';
import CourseHeader from '../../../components/CourseHeader';
import Head from 'next/head';

const IntroToMachineLearning: React.FC = () => {
    const curriculumList = [
        'What is machine learning?',
        'Why use machine learning?',
        'Different types of machine learning',
        'Common machine learning algorithms',
        'Testing and validating algorithms',
        'Neural networks and different types of neural networks',
    ];

    return (
        <>
            <Head>
                <title>Intro to Machine Learning</title>
            </Head>
            <CourseHeader
                name='Intro to Machine Learning'
                curriculumList={curriculumList}
                about='Learn the basics of machine learning and theoretical knowledge on the topic. This course is meant as a primer for the other courses, which all rely on the concepts taught in this course.'
                startDate='June 30th'
                endDate='July 30th'
                dayAndTime='Friday, 2:00PM - 3:30PM + Saturday, 2:00PM - 3:30PM'
                timeCommitment={3}
                recommendedGrades='6 - 10'
                prerequisites={[]}
            />
        </>
    );
};

export default IntroToMachineLearning;
