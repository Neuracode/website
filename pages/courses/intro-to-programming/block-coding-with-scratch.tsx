import React from 'react';
import styles from '../../styles/Courses.module.css';
import CourseHeader from '../../../components/CourseHeader';
import Head from 'next/head';

const BlockCodingWithScratch: React.FC = () => {
    const curriculumList = [
        'Introduction',
        'Animations with sprites',
        'Stories',
        'Games',
        'More projects'
    ];

    return (
        <>
            <Head>
                <title>Block Coding with Scratch</title>
            </Head>
            <CourseHeader
                name='Block Coding with Scratch'
                curriculumList={curriculumList}
                about='If you are completely new to coding, this course is for you. This course is meant to teach you the basics of coding, and will help you get started with the rest of the courses. It is based on drag-and-drop programming, which is great for young learners.'
                startDate='June 30th'
                endDate='July 30th'
                dayAndTime='Friday, 3:00PM - 4:30PM + Saturday, 3:00PM - 4:30PM'
                timeCommitment={3}
                recommendedGrades='2-6'
                prerequisites={[]}
            />
        </>
    );
};

export default BlockCodingWithScratch;
