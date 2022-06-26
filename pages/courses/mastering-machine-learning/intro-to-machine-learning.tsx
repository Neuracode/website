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
                about='This course was created for students who are completely new to the field of AI and its practical applications. This course prepares you for our other machine learning courses by teaching you the basics of ML, which involves the different types of ways that machines can learn, common ML algorithms, how neural networks work, and more!'
                startDate='July 1st'
                endDate='August 26th'
                dayAndTime='Friday, 2:00PM - 3:30PM + Saturday, 2:00PM - 3:30PM'
                timeCommitment={3}
                recommendedGrades='6 - 10'
                prerequisites={[]}
            />
        </>
    );
};

export default IntroToMachineLearning;
