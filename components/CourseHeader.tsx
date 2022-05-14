import React from 'react';
import styles from '../styles/Courses.module.css';
import ThreeDButton from './ThreeDButton';
import { Container, ListGroup } from 'react-bootstrap';

interface CourseHeaderProps {
    name: string;
    about: string;
    curriculumList: string[];
    startDate: string;
    endDate: string;
    dayAndTime: string;
    timeCommitment: number;
    recommendedGrades: string;
    prerequisites: string[];
}

const CourseHeader: React.FC<CourseHeaderProps> = ({
    name,
    curriculumList,
    about,
    startDate,
    endDate,
    dayAndTime,
    timeCommitment,
    recommendedGrades,
    prerequisites
}) => {
    return (
        <>
            <div className={styles.courseHeader}>
                <div>
                    <h1 className={styles.title}>{name}</h1>
                    <a
                        href='https://forms.gle/y4jfEVaoNM2HrzRe8'
                        target='_blank'
                        rel='noreferrer'
                        className='text-decoration-none'
                    >
                        <div className='w-100 d-flex align-items-center justify-content-center'>
                            <ThreeDButton text='Enroll Now!' />
                        </div>
                    </a>
                </div>
            </div>
            <Container>
                <section className='mb-4'>
                    <h2 style={{ fontWeight: 800 }}>
                        What will I learn in this course
                    </h2>
                    <p>{about}</p>
                </section>
                <section className='mb-4'>
                    <h2 style={{ fontWeight: 800 }}>
                        Information
                    </h2>
                    <p><b>Date:</b> {startDate} to {endDate} (Summer)</p>
                    <p><b>When:</b> {dayAndTime}</p>
                    <p><b>Time Commitment:</b> {timeCommitment} hours per week</p>
                    <p><b>Recommended Grades: </b> {recommendedGrades}</p>
                    <p><b>Prerequisites: </b> {prerequisites.join(', ') || 'None'}</p>
                </section>
                <section className='mb-5'>
                    <h2 style={{ fontWeight: 800 }}>Course Curriculum</h2>
                    <ListGroup variant='flush'>
                        {curriculumList.map((item, index) => (
                            <ListGroup.Item key={index}>{item}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </section>
            </Container>
        </>
    );
};

export default CourseHeader;
