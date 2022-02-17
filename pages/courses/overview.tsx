import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from '../../styles/Courses.module.css';
import Link from 'next/link';

const Overview: React.FC = () => {
  interface ICourse {
    name: string;
    description: string;
    image: string;
    href: string;
    prerequisites: string[];
  }

  const courses: ICourse[] = [
    {
      name: 'Intro to AI',
      description: 'Learn how to build an AI model',
      image:
        'https://img.icons8.com/external-photo3ideastudio-gradient-photo3ideastudio/512/000000/external-ai-digital-business-photo3ideastudio-gradient-photo3ideastudio.png',
      href: '/courses/intro-to-ai',
      prerequisites: [],
    },
    {
      name: 'Intro to Python',
      description: 'Learn how to use basic python',
      image: 'https://img.icons8.com/color/480/000000/python--v2.png',
      href: '/courses/intro-to-python',
      prerequisites: [],
    },
    {
      name: 'Intermediate Python',
      description:
        'Building upon previous knowledge, learn to use more advanced python',
      image: 'https://img.icons8.com/color/480/000000/python--v2.png',
      href: '/courses/intermediate-python',
      prerequisites: ['Basic Python'],
    },
    {
      name: 'Intro to Scikit-Learn',
      description: 'Learn how to use Scikit-Learn',
      image: 'https://avatars2.githubusercontent.com/u/365630?v=3&s=400',
      href: '/courses/intro-to-scikit-learn',
      prerequisites: ['Basic Python', 'Intermediate Python', 'AI Concepts'],
    },
    {
      name: 'Intro to Keras',
      description: 'Learn how to use Keras',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg',
      href: '/courses/intro-to-keras',
      prerequisites: ['Basic Python', 'Intermediate Python', 'AI Concepts'],
    },
    {
      name: 'Intro to Tensorflow',
      description: 'Learn how to use Tensorflow',
      image: 'https://img.icons8.com/color/480/000000/tensorflow.png',
      href: '/courses/intro-to-tensorflow',
      prerequisites: [
        'Basic Python',
        'Intermediate Python',
        'AI Concepts',
        'Keras',
      ],
    },
  ];

  function CourseCards() {
    return (
      <Row lg={3} md={2} xs={2} className='g-5 justify-content-center'>
        {courses.map((course: ICourse, index) => (
          <Col key={index}>
            <Link href={course.href} passHref={true}>
              <Card className={styles.courseCard}>
                <Card.Img
                  variant='top'
                  src={course.image}
                  className={styles.courseImg}
                />
                <Card.Body>
                  <Card.Title>{course.name}</Card.Title>
                  <Card.Text>
                    {course.description}
                    <br />
                    <br />
                    <b>Prerequisites:</b>{' '}
                    {course.prerequisites.join(', ') || 'None'}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    );
  }

  return (
    <>
      <Container className='mb-5'>
        <h1 className={styles.title}>Overview</h1>
        <main className='mt-5'>
          <CourseCards />
        </main>
      </Container>
    </>
  );
};

export default Overview;
