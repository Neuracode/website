import React from 'react';
import styles from '../styles/Courses.module.css';
import ThreeDButton from './ThreeDButton';
import { Container, ListGroup } from 'react-bootstrap';

interface CourseHeaderProps {
    name: string;
    about: string;
    curriculumList: string[];
}

const CourseHeader: React.FC<CourseHeaderProps> = ({
    name,
    curriculumList,
    about
}) => {
    return (
        <>
            <div className={styles.courseHeader}>
                <div>
                    <h1>{name}</h1>
                    <a
                        href='https://forms.gle/y4jfEVaoNM2HrzRe8'
                        target='_blank'
                        rel='noreferrer'
                        className='text-decoration-none'
                    >
                        <button className='w-100 d-flex align-items-center justify-content-center'>
                            <ThreeDButton text='Enroll Now!' />
                        </button>
                    </a>
                </div>
            </div>
            <Container>
                <section>
                    <h2 style={{ fontWeight: 800 }}>
                        Why should I take <span>{name}</span>
                    </h2>
                    <p>{about}</p>
                </section>
                <section>
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
