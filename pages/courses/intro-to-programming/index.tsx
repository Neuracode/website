import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../../../styles/Courses.module.css';
import CourseCards from '../../../components/CourseCards';

const IntroToProgramming: React.FC = ({}) => {
    interface ICourse {
        name: string;
        description: string;
        image: string;
        href: string;
        prerequisites: string[];
    }

    const courses: ICourse[] = [
        {
            name: 'Block Coding with Scratch',
            description:
                'If you are completely new to coding, this course is for you. This course is meant to teach you the basics of coding, and will help you get started with the rest of the courses. It is based on drag-and-drop programming, which is great for young learners.',
            image: '/course_icons/scratch.png',
            href: '/courses/intro-to-programming/block-coding-with-scratch',
            prerequisites: [],
        },
    ]

    return (
        <Container className='mb-5'>
            <h1 className={styles.title}>Intro to Programming</h1>
            <main className='mt-5'>
                <CourseCards courses={courses} />
            </main>
        </Container>
    );
};

export default IntroToProgramming;
