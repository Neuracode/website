import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Link from 'next/link';
import styles from '../styles/Courses.module.css';

interface ICourse {
    name: string;
    description: string;
    image: string;
    href: string;
    prerequisites: string[];
}

interface ICourseCards {
    courses: ICourse[];
}

const CourseCards: React.FC<ICourseCards> = ({ courses }) => {
    return (
        <Row lg={3} md={2} xs={1} className='gy-5'>
            {courses.map((course: ICourse, index: number) => (
                <Col key={index}>
                    <Link href={course.href} passHref={true}>
                        <Card className={styles.courseCard}>
                            <div className={styles.courseImgWrapper}>
                                <Card.Img
                                    variant='top'
                                    src={course.image}
                                    className={styles.courseImg}
                                />
                            </div>
                            <Card.Body>
                                <Card.Title className={styles.name}>
                                    {course.name}
                                </Card.Title>
                                <Card.Text>
                                    {course.description}
                                    <br />
                                    <br />
                                    <b>Prerequisites: </b>
                                    {course.prerequisites.join(', ') || 'None'}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            ))}
        </Row>
    );
};

export default CourseCards;
