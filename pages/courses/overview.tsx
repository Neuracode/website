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
      name: 'Intro to Machine Learning',
      description: 'Learn the basics of machine learning and theoretical knowledge on the topic. This course is meant as a primer for the other courses, which all rely on the concepts taught in this course.',
      image:
        'https://img.icons8.com/external-photo3ideastudio-gradient-photo3ideastudio/512/000000/external-ai-digital-business-photo3ideastudio-gradient-photo3ideastudio.png',
      href: '/courses/intro-to-machine-learning',
      prerequisites: [],
    },
    {
      name: 'Intro to Python',
      description: 'Learn to use the general-purpose programming knowledge, which has a huge machine learning community to support it. Python is the most popular language for machine learning and this teaches you the basics you need for the other courses, which all require Python.',
      image: 'https://img.icons8.com/color/480/000000/python--v2.png',
      href: '/courses/intro-to-python',
      prerequisites: [],
    },
    {
      name: 'Intermediate Python',
      description:
        'After the basics, intermediate Python is the next step in the machine learning journey. This course teaches you the more advanced concepts, which you will continue to use in other courses and your machine learning journey in general.',
      image: 'https://img.icons8.com/color/480/000000/python--v2.png',
      href: '/courses/intermediate-python',
      prerequisites: ['Basic Python'],
    },
    {
      name: 'Intro to Scikit-Learn',
      description: 'Learn how to use Scikit-Learn, a machine learning library for Python that includes a lot of useful machine learning algorithms and functions. It is not too complex and is a great way to get started with machine learning.',
      image: 'https://avatars2.githubusercontent.com/u/365630?v=3&s=400',
      href: '/courses/intro-to-scikit-learn',
      prerequisites: ['Basic Python', 'Intermediate Python', 'AI Concepts'],
    },
    {
      name: 'Intro to Keras',
      description: 'Learn how to use Keras, a machine learning library for Python that is commonly used for artificial neural networks (ANNs) and deep learning. It is a high-level API that can be used along with Tensorflow.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg',
      href: '/courses/intro-to-keras',
      prerequisites: ['Basic Python', 'Intermediate Python', 'AI Concepts'],
    },
    {
      name: 'Intro to Tensorflow',
      description: 'Learn how to use Tensorflow, a machine learning library that is primarily used for deep learning. It is used along with Keras and it mainly features a low-level API.',
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
      <Row lg={3} md={2} xs={1} className='g-5 justify-content-center'>
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
                  <Card.Title className={styles.name}>{course.name}</Card.Title>
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
