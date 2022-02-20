import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import styles from '../../styles/About.module.css';

const FAQ: React.FC = () => {
  return (
    <>
      <Container>
        <h1 className={styles.title}>FAQ</h1>
        <div className='mt-5 mb-5'>
          <Accordion>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>Are courses free?</Accordion.Header>
              <Accordion.Body>
                Yes! All courses are free. Our mission is to help students all
                around the world and help them become exposed to the field of
                AI.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1'>
              <Accordion.Header>Are you a non-profit?</Accordion.Header>
              <Accordion.Body>
                Yes, we are a non-profit completely and are a completely
                student-run organization.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='2'>
              <Accordion.Header>
                Will tutors earn volunteer hours?
              </Accordion.Header>
              <Accordion.Body>
                Yes, tutors will earn the number of volunteer hours they stay
                each class and an additional volunteer hour for getting used to
                the new system. Every presentation created by a tutor will earn
                a 4 volunteer hours.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='3'>
              <Accordion.Header>How will I attend the course?</Accordion.Header>
              <Accordion.Body>
                Classes will take place online over Zoom and the Zoom link will
                be sent to you via email when you sign up for the course.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>
    </>
  );
};

export default FAQ;
