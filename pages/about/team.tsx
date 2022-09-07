import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../../styles/About.module.css';
import TeamCard from '../../components/TeamCard';
import Head from 'next/head';

const Team: React.FC = () => {
    interface ITeamCard {
        name: string;
        title: string;
        image: string;
        description?: string;
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
            title: 'Chief Operating Officer',
            image: 'jaiman_pandya.jpeg',
            description:
                'Student researcher in machine learning with a passion for computational biology',
            linkedin: 'https://www.linkedin.com/in/jaiman-pandya-825350234',
            github: 'https://github.com/Jaiman-Pandya',
            website: 'https://jaiman-pandya.github.io/Portfolio/', 
        },
        {
            name: 'Arnav Podichetty',
            title: 'Chief Tutoring Officer',
            image: 'arnav_podichetty.jpeg',
            description:
                'High school student interested in developing coding skills and teaching youth through innovative techniques',
        },
        {
            name: 'Eddie Tang',
            title: 'Chief Curriculum Officer',
            image: 'eddie_tang.jpeg',
            description:
                'High school freshman interested in teaching python and integrating different features into various discord bots',
            github: 'https://github.com/EDED2314',
        },
    ];

    const directors: ITeamCard[] = [
        {
            name: 'Jaren Chu',
            title: 'Director of Tutoring',
            image: 'jaren_chu.jpeg',
        },
        {
            name: 'Sean Noh',
            title: 'Director of Blogs',
            image: 'sean_noh.jpeg',
        },
        {
            name: 'Kevin Hwang',
            title: 'Director of Python Curriculum',
            image: 'kevin_hwang.jpeg',
        },
        {
            name: 'Frank Chang',
            title: 'Director of Machine Learning Curriculum',
            image: 'frank_chang.jpg',
        },
        {
            name: 'Vishnu Sharma',
            title: 'Director of Machine Learning Curriculum',
            image: 'vishnu_sharma.jpg',
        },
        {
            name: 'Raghav Paratkar',
            title: 'Director of Scratch Curriculum',
            image: 'raghav_paratkar.jpeg',
        },
    ];

    const volunteers: ITeamCard[] = [
        {
            name: 'Sanvi Srinivas',
            title: 'Tutor: Intro to ML',
            image: 'sanvi_srinivas.jpeg',
        },
        {
            name: 'Aditi Athreyas',
            title: 'Marketing + Discord Moderator',
            image: 'aditi_athreyas.jpeg',
        },
        {
            name: 'Ryan Zwatchska',
            title: 'Tutor: Intro to ML',
            image: 'ryan_zwatchska.jpeg',
        },
        {
            name: 'Reza Razavi',
            title: 'Recruiter + Marketing + Tutor: Intro to Python + ML',
            image: 'reza_razavi.jpeg',
        },
        {
            name: 'Bertrand Lee',
            title: 'Tutor: Intro to ML + Python',
            image: 'bertrand_lee.jpeg',
        },
        {
            name: 'Vibhuv Sharma',
            title: 'Tutor: Intro to Python + ML',
            image: 'no_picture.jpg',
        },
        {
            name: 'Adit Pakala',
            title: 'Tutor: Intro to Python + Intermediate Python',
            image: 'adit_pakala.jpeg',
        },
        {
            name: 'Teerthraj Parmar',
            title: 'Tutor: Intermediate Python + Intro to Python + ML',
            image: 'teerthraj_parmar.jpeg',
        },
        {
            name: 'Risha Dinesh',
            title: 'Recruiter + Marketing + Discord Moderator',
            image: 'risha_dinesh.jpeg',
        },
        {
            name: 'Kristian Apostolov',
            title: 'Full-Stack Developer + Discord Bot Developer',
            image: 'kristian_apostolov.jpeg',
        },
        {
            name: 'Aditya Bilawar',
            title: 'Tutor: Intro to ML',
            image: 'aditya_bilawar.jpeg',
        },
        {
            name: 'Shreyaa Sanjay',
            title: 'Recruiter + Public Relations + Events Organizer',
            image: 'shreyaa_sanjay.jpeg',
        },
        {
            name: 'Julia Huang',
            title: 'Recruiter + Public Relations + Events Organizer',
            image: 'julia_huang.jpeg',
        },
        {
            name: 'Ceiron Dushyanthan',
            title: 'Tutor: Block Coding with Scratch + Intro to Python + ML',
            image: 'ceiron_dushyanthan.jpeg',
        },
        {
            name: 'Shrey Shingala',
            title: 'Tutor: Block Coding with Scratch + Intro to Python + Intermediate Python',
            image: 'shrey_shingala.jpeg',
        },
        {
            name: 'Aryan Aneesh',
            title: 'Events Organizer',
            image: 'aryan_aneesh.jpeg',
        },
        {
            name: 'Kirthan Murthy',
            title: 'Tutor: Block Coding with Scratch + Intro to Python',
            image: 'kirthan_murthy.png',
        },
        {
            name: 'Pankhuri Goyal',
            title: 'Tutor: Block Coding with Scratch + Intro to Python',
            image: 'pankhuri_goyal.jpg',
        },
        {
            name: 'Aiden Jasul',
            title: 'Tutor: Intro to Python + Intermediate Python',
            image: 'aiden_jasul.jpg',
        },
        {
            name: 'Raymond Xu',
            title: 'Tutor: Intro to Python',
            image: 'raymond_xu.jpg',
        },
        {
            name: 'Ekam Ghai',
            title: 'Curriculum Creator',
            image: 'ekam_ghai.jpeg',
        },
    ];

    const collegeVolunteers: ITeamCard[] = [
        {
            name: 'Justin Baltazar',
            title: 'Full-Stack Developer',
            image: 'justin_baltazar.jpeg',
        },
    ];

    return (
        <>
            <Head>
                <title>Team | Neuracode</title>
            </Head>
            <Container>
                <h1 className={styles.title}>Team</h1>
                <h3 className={styles.topText}>
                    <span className={styles.topTextSpan}>Executive Board</span>
                </h3>
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
                <hr />
                <h3 className={styles.topText}>
                    <span className={styles.topTextSpan}>Directors</span>
                </h3>
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
                <hr />
                <h3 className={styles.topText}>
                    <span className={styles.topTextSpan}>Volunteers</span>
                </h3>
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
                <hr />
                <h3 className={styles.topText}>
                    <span className={`${styles.topTextSpan} ${styles.collegeVolunteers}`}>
                        College Volunteers
                    </span>
                </h3>
                <div className='mt-5 mb-5 d-flex flex-row flex-wrap justify-content-around'>
                    {collegeVolunteers.map((member) => (
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
