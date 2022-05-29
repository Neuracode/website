import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../../styles/About.module.css';
import TeamCard from '../../components/TeamCard';

const Team: React.FC = () => {
    interface ITeamCard {
        name: string;
        title: string;
        image: string;
        description: string;
        linkedin?: string;
        website?: string;
        github?: string;
    }

    const executiveBoard: ITeamCard[] = [
        {
            name: 'Azam Ahmed',
            title: 'Founder + Chief Executive Officer',
            image: 'azam.jpg',
            description:
                'High school student who loves to code and delve deeper into the field of machine learning',
            linkedin: 'https://www.linkedin.com/in/azam-ahmed',
            github: 'https://github.com/azam999',
            website: 'https://azamahmed.tech',
        },
        {
            name: 'Jaiman Pandya',
            title: 'Founder + Chief Operating Officer',
            image: 'jaiman_pandya.jpeg',
            description:
                'Student researcher in machine learning with a passion for computational biology',
            linkedin: 'https://www.linkedin.com/in/jaiman-pandya-825350234',
            github: 'https://github.com/Jaiman-Pandya',
        },
    ];

    const directors: ITeamCard[] = [
        {
            name: 'Annabelle Deng',
            title: 'Co-director of Public Relations and Marketing',
            image: 'annabelle_deng.jpeg',
            description:
                'High school student interested in robotics and teaching students about coding',
        },
        {
            name: 'Arca Baran',
            title: 'Co-director of Public Relations and Marketing',
            image: 'arca_baran.jpeg',
            description:
                'HTHS Class of 2023 student interested in spreading and communicating about technology to all',
        },
        {
            name: 'Jaren Chu',
            title: 'Co-director of Tutoring',
            image: 'jaren_chu.jpeg',
            description:
                'High school sophomore interested in artificial intelligence and programming techniques',
        },
        {
            name: 'Arnav Podichetty',
            title: 'Co-director of Tutoring',
            image: 'arnav_podichetty.jpeg',
            description: 'High school sophomore interested in developing coding skills and teaching youth through innovative techniques'
        },
        {
            name: 'Eddie Tang',
            title: 'Director of Python Curriculum',
            image: 'eddie_tang.jpeg',
            description: 'High school freshman interested in teaching python and integrating different features into various discord bots'
        },
    ];

    const volunteers: ITeamCard[] = [
        {
            name: 'Abubakr Elmallah',
            title: 'Tutor: Intro to ML + Python + Discord Moderator',
            image: 'abubakr_elmallah.jpeg',
            description: 'High school student interested in computer science and strengthening coding skills in youth',
        },
        {
            name: 'Sanvi Srinivas',
            title: 'Tutor: Intro to ML',
            image: 'sanvi_srinivas.jpeg',
            description: 'High school student interested in spreading and delving into artificial intelligence'
        },
        {
            name: 'Aditi Athreyas',
            title: 'Public Relations + Discord Moderator',
            image: 'aditi_athreyas.jpeg',
            description: 'High school student who loves to work with robotics and spends time designing robots',
        },
        {
            name: 'Ryan Zwatchska',
            title: 'Tutor: Intro to ML',
            image: 'ryan_zwatchska.jpeg',
            description: 'High school student interested in teaching and learning more about the nature of artificial intelligence'
        },
        {
            name: 'Reza Razavi',
            title: 'Recruiter + Public Relations + Tutor: Intro to Python + ML',
            image: 'reza_razavi.jpeg',
            description: 'Currently a high school student with a passion for machine learning and computational neuroscience'
        },
        {
            name: 'Prabhas Gade',
            title: 'Tutor: Intro to ML',
            image: 'prabhas_gade.jpeg',
            description: 'High School student who has a passion for computer programming, robotics, and AI'
        },
        {
            name: 'Bertrand Lee',
            title: 'Tutor: Intro to ML + Python',
            image: 'bertrand_lee.jpeg',
            description: 'High school student interested in learning and teaching topics about machine learning and python'
        },
        {
            name: 'Michael Ilie',
            title: 'Curriculum Creator + Tutor: Intermediate Python + Intermediate Tensorflow',
            image: 'michael_ilie.jpeg',
            description: 'Junior entrepreneur, computer engineer, and high school student'
        },
        {
            name: 'Kevin Hwang',
            title: 'Curriculum Creator + Discord Moderator',
            image: 'kevin_hwang.jpeg',
            description: 'High school student interested and involved in machine learning and robotics.'
        },
        {
            name: 'Sai Challagundla',
            title: 'Discord Moderator + Tutor: Intro to Python',
            image: 'sai_challagundla.jpeg',
            description: 'High school student who is interested in fintech and machine learning'
        },
        {
            name: 'Vibhuv Sharma',
            title: 'Tutor: Intro to Python + ML',
            image: 'no_picture.jpg',
            description: 'Motivated student and programmer with a passion for Machine Learning and the future of technology'
        },
        {
            name: 'Adit Pakala',
            title: 'Tutor: Intro to Python + Intermediate Python',
            image: 'adit_pakala.jpeg',
            description: 'High school student passionate about computer science and entrepreneurship'
        },
        {
            name: 'Teerthraj Parmar',
            title: 'Tutor: Intermediate Python + Intro to Python + ML',
            image: 'teerthraj_parmar.jpeg',
            description: 'High school student interested in teaching kids ML and python'
        },
        {
            name: 'Justin Baltazar',
            title: 'Full-Stack Developer + Curriculum Creator',
            image: 'justin_baltazar.jpeg',
            description: 'A Computer Science and Math double major with experience in software engineering, web development, and machine learning'
        }
    ]

    return (
        <>
            <Container>
                <h1 className={styles.title}>Team</h1>
                <h3 className={styles.topText}>Executive Board</h3>
                <div className='mt-5 mb-5 d-flex flex-row flex-wrap justify-content-around'>
                    {executiveBoard.map((member) => (
                        <TeamCard
                            key={member.name}
                            name={member.name}
                            title={member.title}
                            image={member.image}
                            description={member.description}
                            linkedin={member.linkedin}
                            github={member.github}
                            website={member.website}
                        />
                    ))}
                </div>
                <h3 className={styles.topText}>Directors</h3>
                <div className='mt-5 mb-5 d-flex flex-row flex-wrap justify-content-around'>
                    {directors.map((member) => (
                        <TeamCard
                            key={member.name}
                            name={member.name}
                            title={member.title}
                            image={member.image}
                            description={member.description}
                        />
                    ))}
                </div>
                <h3 className={styles.topText}>Volunteers</h3>
                <div className='mt-5 mb-5 d-flex flex-row flex-wrap justify-content-around'>
                {volunteers.map((member) => (
                        <TeamCard
                            key={member.name}
                            name={member.name}
                            title={member.title}
                            image={member.image}
                            description={member.description}
                        />
                    ))}
                </div>
            </Container>
        </>
    );
};

export default Team;
