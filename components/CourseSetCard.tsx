import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Link from 'next/link';
import styles from '../styles/Courses.module.css';

interface ICourseSetCard {
    href: string;
    name: string;
    description: string;
    image: string;
}

const CourseSetCard: React.FC<ICourseSetCard> = ({ href, name, description, image }) => {
    return (
        <Row lg={3} md={2} xs={1} className='gy-5 mb-5'>

                <Col>
                    <Link href={href} passHref={true}>
                        <Card className={styles.courseCard}>
                            <div className={styles.courseImgWrapper}>
                                <Card.Img
                                    variant='top'
                                    src={`/course_icons/${image}`}
                                    className={styles.courseImg}
                                />
                            </div>
                            <Card.Body>
                                <Card.Title className={styles.name}>
                                    {name}
                                </Card.Title>
                                <Card.Text>
                                    {description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
        </Row>
    );
};

export default CourseSetCard;
