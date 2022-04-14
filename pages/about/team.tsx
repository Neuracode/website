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
          Executive Board
        </h3>
        <div className='mt-5 mb-5 d-flex flex-row flex-wrap justify-content-around'>
          <TeamCard
            name='Azam Ahmed'
            title='Founder + President'
            image='azam.jpg'
            description='High school student who loves to code and delve deeper
            into the field of machine learning.'
            linkedin='https://www.linkedin.com/in/azam-ahmed'
            github='https://github.com/azam999'
            website='https://azamahmed.tech'
          />
        </div>
        <h3 className={styles.topText}>
          Interns
        </h3>
      </Container>
    </>
  );
};

export default Team;
