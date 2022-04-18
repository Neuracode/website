import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import styles from '../../styles/Courses.module.css';
import CourseHeader from '../../components/CourseHeader';

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
            <CourseHeader
                name='Intro to Python'
                curriculumList={curriculumList}
                about='Learn to use the general-purpose programming knowledge, which has a huge machine learning community to support it. Python is the most popular language for machine learning and this teaches you the basics you need for the other courses, which all require Python.'
            />
        </>
    );
};

export default IntroToPython;
