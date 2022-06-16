import React from 'react';
import styles from '../../styles/Courses.module.css';
import CourseHeader from '../../../components/CourseHeader';
import Head from 'next/head';


const IntroToPython: React.FC = () => {
    const curriculumList = [
        'What is Python?',
        'Installation',
        'Variables',
        'Data types',
        'Operators',
        'Input',
        'Comments',
        'Lists, tuples, and sets',
        'Functions',
        'If statements',
        'Loops and nested loops',
        'Dictionaries',
        'Try/Except',
        'Files',
        'Modules',
        'Intro to classes and objects',
    ];

    return (
        <>
            <Head>
                <title>Intro to Python</title>
            </Head>
            <CourseHeader
                name='Intro to Python'
                curriculumList={curriculumList}
                about='Learn to use the general-purpose programming language, which has a huge machine learning community to support it. Python is the most popular language for machine learning and this teaches you the basics you need for the other courses, which all require Python.'
                startDate='June 30th'
                endDate='July 30th'
                dayAndTime='Friday, 3:30PM - 5:00PM + Saturday, 3:30PM - 5:00PM'
                timeCommitment={3}
                recommendedGrades='6 - 10'
                prerequisites={[]}
            />
        </>
    );
};

export default IntroToPython;
