import React from 'react';
import { Container, Button } from 'react-bootstrap';
import PositionCard from '../../components/PositionCard';
import styles from '../../styles/Join.module.css';

const Overview: React.FC = () => {
  return (
    <>
      <Container>
        <h1>Join us!</h1>
        <h3 className={styles.topText}>
          We are looking for people who are interested in AI and want to spread
          their knowledge to the world
        </h3>
        <div className='mt-5 text-center'>
          <a href='https://forms.gle/7dYev7Agaj36qsHe8'>
            <Button variant='outline-danger' size='lg'>
              Apply Now!
            </Button>
          </a>
        </div>
        <div className='mt-5 mb-5 d-flex flex-row flex-wrap justify-content-around'>
          <PositionCard
            title='Tutor: Intro to AI'
            description='Intro to AI tutors will be required to have basic knowledge of AI concepts and no programming knowledge is required; it is a conceptual course.'
          />
          <PositionCard
            title='Tutor: Intro to Python'
            description='Intro to Python tutors will be required to have basic knowledge of the Python programming knowledge.'
          />
          <PositionCard
            title='Tutor: Intermediate Python'
            description='Intermediate Python tutors will be required to have advanced knowledge of the Python programming knowledge, including concepts like OOP, magic methods, and more.'
          />
          <PositionCard
            title='Tutor: Intro to Scikit-Learn'
            description='Scikit-Learn tutors will be required to have knowledge of Scikit-Learn and AI concepts.'
          />
          <PositionCard
            title='Tutor: Intro to Keras'
            description='Keras tutors will be required to have knowledge of Keras and AI concepts.'
          />
          <PositionCard
            title='Tutor: Intro to Tensorflow'
            description='Tensorflow tutors will be required to have knowledge of Tensorflow and AI concepts.'
          />
          <PositionCard
            title='Frontend Developer'
            description='Frontend developers will be required to have knowledge of and experience with both Next.js and CSS.'
          />
          <PositionCard
            title='Recruiter'
            description='You will be required to find and contact people who have optimal knowledge for any of our available positions.'
          />
          <PositionCard
            title='Discord moderator'
            description='Moderators will control the Neuracode discord server and create a safe environment for students by eliminating crude behavior.'
          />
          <PositionCard
            title='Marketing/PR'
            description='As a marketer and public relations officer, you will be required to post and moderate content on Instagram, LinkedIn, and YouTube, along with reaching out to other organizations.'
          />
          <PositionCard
            title='Events organizer'
            description='As an events organizer you will be required to organize events for Neuracode, including workshops, hackathons, and more.'
          />
        </div>
      </Container>
    </>
  );
};

export default Overview;
