import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../../styles/Courses.module.css';
import Image from 'next/image';
import CourseSetCard from '../../components/CourseSetCard';
import Head from 'next/head';

const Courses: React.FC = ({}) => {
    const whyUsList = [
        {
            name: 'FREE Virtual Lessons',
            logo: '/course_icons/zoom.png',
        },
        {
            name: 'Large Discord Community',
            logo: '/course_icons/crowd.png',
        },
        {
            name: 'Exercises and Solutions',
            logo: '/course_icons/list.png',
        },
        {
            name: 'Project-based learning',
            logo: '/course_icons/tasks.png',
        },
        {
            name: 'Hackathons: Apply your knowledge',
            logo: '/course_icons/code.png',
        },
        {
            name: '5:1 student-to-tutor ratio',
            logo: '/course_icons/teacher.png',
        },
    ];

    const gainList = [
        {
            name: 'Learn core technologies',
            logo: '/course_icons/code.png',
        },
        {
            name: 'Create your own projects',
            logo: '/course_icons/tasks.png',
        },
        {
            name: 'Ahead of the game',
            logo: '/course_icons/rocket.png',
        },
    ];

    return (
        <>
            <Head>
                <title>Courses</title>
                <meta
                    name='description'
                    content='Neuracode offers a variety of free courses on topic such as intro to programming, mastering machine learning, and Java data structures.'
                />
            </Head>
            <Container className='mb-5'>
                <h1 className={styles.title}>Courses</h1>
                <main className='mt-5'>
                    <div className={styles.choosingCourses}>
                        <div className={styles.choosingCoursesInfoWrapper}>
                            <div className={styles.choosingCoursesInfo}>
                                <h2
                                    style={{ fontWeight: 800 }}
                                    className='mb-3'
                                >
                                    Why us?
                                </h2>
                                {whyUsList.map((item, index) => (
                                    <div
                                        key={index}
                                        className={styles.whyUsOrGainItem}
                                    >
                                        <Image
                                            src={item.logo}
                                            width={40}
                                            height={40}
                                            alt='logo'
                                            className={`${styles.whyUsOrGainItemImg} p-2`}
                                        />
                                        <span
                                            className={
                                                styles.whyUsOrGainItemName
                                            }
                                            style={{ fontWeight: 700 }}
                                        >
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.choosingCoursesInfoWrapper}>
                            <div className={styles.choosingCoursesInfo}>
                                <h2
                                    style={{ fontWeight: 800 }}
                                    className='mb-3'
                                >
                                    What will I gain?
                                </h2>
                                {gainList.map((item, index) => (
                                    <div
                                        key={index}
                                        className={styles.whyUsOrGainItem}
                                    >
                                        <Image
                                            src={item.logo}
                                            width={40}
                                            height={40}
                                            alt='logo'
                                            className={`${styles.whyUsOrGainItemImg} p-2`}
                                        />
                                        <span
                                            className={
                                                styles.whyUsOrGainItemName
                                            }
                                            style={{ fontWeight: 700 }}
                                        >
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='d-flex flex-row flex-wrap w-100 justify-content-around'>
                        <CourseSetCard
                            href='/courses/intro-to-programming'
                            name='Intro to Programming'
                            description='Learn the basics of programming'
                            image='intro_to_programming.png'
                        />
                        <CourseSetCard
                            href='/courses/mastering-machine-learning'
                            name='Mastering Machine Learning'
                            description='Master machine learning through a series of
                                    courses that goes from teaching you the
                                    basics of Python to applying machine
                                    learning to real-world problems with
                                    Scikit-Learn, TensorFlow, and Keras.'
                            image='machine_learning.png'
                        />
                        <CourseSetCard
                            href='/courses/java-data-structures'
                            name='Java Data Structures'
                            description='If you already know the basics of Java (arrays, array lists, class structure), this course will move you to the next level. You will get an understanding of the core data structures taught in college courses and assessed in tech interviews. This course is a must for anyone planning a career in Computer Science.'
                            image='data_structures.png'
                        />
                    </div>
                </main>
            </Container>
        </>
    );
};

export default Courses;
