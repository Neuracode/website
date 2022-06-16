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
                about='This course was created for students who are looking for an introduction to coding and its fundamental concepts. By using Scratch for block coding students will explore fundamental computer science concepts such as conditionals, reusable functions, loops, and more! With knowledge of these concepts, students will be able to create a multitude of games, which involve stories, animations, music, and more.'
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
