import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../../styles/About.module.css';
import TeamCard from '../../components/TeamCard';

const Team: React.FC = () => {
    return (
        <>
            <Container>
                <h1 className={styles.title}>Team</h1>
                <h3 className={styles.topText}>Executive Board</h3>
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
                <h3 className={styles.topText}>Directors</h3>
                <div className='mt-5 mb-5 d-flex flex-row flex-wrap justify-content-around'>
                    <TeamCard
                        name='Jaiman Pandya'
                        title='Director of Outreach'
                        image='jaiman_pandya.jpeg'
                        description='Student researcher in machine learning with a passion for computational biology'
                        linkedin='https://www.linkedin.com/in/jaiman-pandya-825350234'
                        github='https://github.com/Jaiman-Pandya'
                    />
                    <TeamCard
                        name='Annabelle Deng'
                        title='Director of Finances'
                        image='annabelle_deng.jpeg'
                        description='High school student interested in robotics and teaching students about coding'
                    />
                </div>
                <h3 className={styles.topText}>Interns</h3>
            </Container>
        </>
    );
};

export default Team;
