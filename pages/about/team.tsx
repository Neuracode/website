import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../../styles/About.module.css';
import TeamCard from '../../components/TeamCard';

const Team: React.FC = () => {
  return (
    <>
      <Container>
        <h1 className={styles.title}>Team</h1>
        <h3 className={styles.topText}>
          As AI continues to grow, Neuracode&apos;s mission is to help students
          around the world become exposed to the field
        </h3>
        <div className='mt-5 mb-5 d-flex flex-row flex-wrap justify-content-around'>
          <TeamCard
            name='Azam Ahmed'
            title='Founder'
            image='azam.jpg'
            description='High school student who loves to code and delve deeper
            into the field of AI'
            linkedin='https://www.linkedin.com/in/azam-ahmed'
            github='https://github.com/azam999'
            website='https://azamahmed.tech'
          />
        </div>
      </Container>
    </>
  );
};

export default Team;
