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
                about='This course was designed for students who already know the basics of Python but are looking to delve deeper into the language. Students will learn about Object-Oriented Programming and key features of the Python language that will teach them everything they need to know for the advanced courses. Students will create projects in order to solidify their understanding.'
                startDate='July 1st'
                endDate='August 26th'
                dayAndTime='Friday, 5:00PM - 6:30PM + Saturday, 5:00PM - 6:30PM'
                timeCommitment={3}
                recommendedGrades='8 - 10'
                prerequisites={['Basic Python']}
            />
        </>
    );
};

export default IntermediatePython;
