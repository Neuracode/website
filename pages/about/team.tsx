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
                        title='Founder + Chief Executive Officer'
                        image='azam.jpg'
                        description='High school student who loves to code and delve deeper
            into the field of machine learning.'
                        linkedin='https://www.linkedin.com/in/azam-ahmed'
                        github='https://github.com/azam999'
                        website='https://azamahmed.tech'
                    />
                    <TeamCard
                        name='Jaiman Pandya'
                        title='Chief Operating Officer'
                        image='jaiman_pandya.jpeg'
                        description='Student researcher in machine learning with a passion for computational biology'
                        linkedin='https://www.linkedin.com/in/jaiman-pandya-825350234'
                        github='https://github.com/Jaiman-Pandya'
                    />
                </div>
                <h3 className={styles.topText}>Directors</h3>
                <div className='mt-5 mb-5 d-flex flex-row flex-wrap justify-content-around'>
                    
                    <TeamCard
                        name='Annabelle Deng'
                        title='Director of Public Relations and Marketing'
                        image='annabelle_deng.jpeg'
                        description='High school student interested in robotics and teaching students about coding'
                    />
                    <TeamCard
                        name='Jaren Chu'
                        title='Director of Tutoring'
                        image='jaren_chu.jpeg'
                        description='High school sophomore interested in artificial intelligence and programming techniques'
                    />
                </div>
                <h3 className={styles.topText}>Tutors</h3>
                <div className='mt-5 mb-5 d-flex flex-row flex-wrap justify-content-around'>
                    <TeamCard
                        name='Arnav Podichetty'
                        title='Tutor: Intro to ML + Python'
                        image='arnav_podichetty.jpeg'
                        description='High school sophomore interested in developing coding skills and teaching youth through innovative techniques'
                    />
                    <TeamCard
                        name='Abubakr Elmallah'
                        title='Tutor: Intro to ML + Python'
                        image='abubakr_elmallah.jpeg'
                        description='High school student interested in computer science and strengthening coding skills in youth'
                    />
                    
                    <TeamCard
                        name='Sanvi Srinivas'
                        title='Tutor: Intro to ML'
                        image='sanvi_srinivas.jpeg'
                        description='High school student interested in spreading and delving into artificial intelligence.'
                    />
                </div>
            </Container>
        </>
    );
};

export default Team;
