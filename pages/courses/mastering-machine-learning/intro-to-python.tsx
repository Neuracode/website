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
        'Modules'
    ];

    return (
        <>
            <Head>
                <title>Intro to Python</title>
            </Head>
            <CourseHeader
                name='Intro to Python'
                curriculumList={curriculumList}
                about='This course was created for students who are looking to learn more about Python or want to learn the language that will allow them to apply their machine learning knowledge. In this course, students will learn by code examples and analogies that teach them fundamental programming concepts, including variables, loops, lists, conditionals, and more! Students will apply their knowledge to create a variety of different projects.'
                startDate='July 1st'
                endDate='August 26th'
                dayAndTime='Friday, 3:30PM - 5:00PM + Saturday, 3:30PM - 5:00PM'
                timeCommitment={3}
                recommendedGrades='6 - 10'
                prerequisites={[]}
            />
        </>
    );
};

export default IntroToPython;
