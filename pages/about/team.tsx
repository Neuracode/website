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
                        title='Founder + President + Chief Executive Officer'
                        image='azam.jpg'
                        description='High school student who loves to code and delve deeper into the field of machine learning'
                        linkedin='https://www.linkedin.com/in/azam-ahmed'
                        github='https://github.com/azam999'
                        website='https://azamahmed.tech'
                    />
                    <TeamCard
                        name='Jaiman Pandya'
                        title='Vice President + Chief Operating Officer'
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
                <h3 className={styles.topText}>Volunteers</h3>
                <div className='mt-5 mb-5 d-flex flex-row flex-wrap justify-content-around'>
                    <TeamCard
                        name='Arnav Podichetty'
                        title='Tutor: Intro to ML + Python'
                        image='arnav_podichetty.jpeg'
                        description='High school sophomore interested in developing coding skills and teaching youth through innovative techniques'
                    />
                    <TeamCard
                        name='Abubakr Elmallah'
                        title='Tutor: Intro to ML + Python + Discord Moderator'
                        image='abubakr_elmallah.jpeg'
                        description='High school student interested in computer science and strengthening coding skills in youth'
                    />
                    <TeamCard
                        name='Sanvi Srinivas'
                        title='Tutor: Intro to ML'
                        image='sanvi_srinivas.jpeg'
                        description='High school student interested in spreading and delving into artificial intelligence'
                    />
                    <TeamCard
                        name='Aditi Athreyas'
                        title='Public Relations + Discord Moderator'
                        image='aditi_athreyas.jpeg'
                        description='High school student who loves to work with robotics and spends time designing robots'
                    />
                    <TeamCard
                        name='Ryan Zwatchska'
                        title='Tutor: Intro to ML'
                        image='ryan_zwatchska.jpeg'
                        description='High school student interested in teaching and learning more about the nature of artificial intelligence'
                    />
                    <TeamCard
                        name='Reza Razavi'
                        title='Recruiter + Public Relations + Events Organizer'
                        image='reza_razavi.jpeg'
                        description='Currently a high school student with a passion for machine learning and computational neuroscience'
                    />
                    <TeamCard
                        name='Prabhas Gade'
                        title='Tutor: Intro to ML'
                        image='prabhas_gade.jpeg'
                        description='High School student who has a passion for computer programming, robotics, and AI'
                    />
                    <TeamCard
                        name='Bertrand Lee'
                        title='Tutor: Intro to ML + Python'
                        image='bertrand_lee.jpeg'
                        description='High school student interested in learning and teaching topics about machine learning and python.'
                    />
                </div>
            </Container>
        </>
    );
};

export default Team;
