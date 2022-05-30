import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import styles from '../../../styles/Courses.module.css';
import CourseHeader from '../../../components/CourseHeader';
import Head from 'next/head';

const IntermediatePython: React.FC = () => {
    const curriculumList = [
        'Going in depth with classes and objects',
        'Collections',
        'Itertools',
        'Lambda functions',
        'Exceptions and errors',
        'Logging',
        'JSON',
        'Random numbers',
        'Decorators',
        'Generators',
        'Multithreading and multiprocessing',
        'Function arguments and * operator',
        'Shallow vs. deep copying',
        'Context managers',
        'NumPy',
        'Pandas',
        'Matplotlib',
        "What's next?",
    ];

    return (
        <>
            <Head>
                <title>Intermediate Python</title>
            </Head>
            <CourseHeader
                name='Intermediate Python'
                curriculumList={curriculumList}
                about='After the basics, intermediate Python is the next step in the machine learning journey. This course teaches you the more advanced concepts, which you will continue to use in other courses and your machine learning journey in general.'
                startDate='June 30th'
                endDate='August 30th'
                dayAndTime='Friday, 5:00PM - 6:30PM + Saturday, 5:00PM - 6:30PM'
                timeCommitment={3}
                recommendedGrades='8 - 10'
                prerequisites={['Basic Python']}
            />
        </>
    );
};

export default IntermediatePython;
