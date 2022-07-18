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
            name: 'Annabelle Deng',
            title: 'Director of Marketing',
            image: 'annabelle_deng.jpeg',
            description:
                'High school student interested in robotics and teaching students about coding',
        },
        {
            name: 'Jaren Chu',
            title: 'Director of Tutoring',
            image: 'jaren_chu.jpeg',
            description:
                'High school student interested in artificial intelligence and programming techniques',
        },
        {
            name: 'Sean Noh',
            title: 'Director of Java Data Structures',
            image: 'sean_noh.jpeg',
            description:
                'Computer science student that enjoys sharing knowledge and creating projects',
        },
        {
            name: 'Kevin Hwang',
            title: 'Director of Python Curriculum',
            image: 'kevin_hwang.jpeg',
            description:
                'High school student interested and involved in machine learning and robotics.',
        },
        {
            name: 'Frank Chang',
            title: 'Director of Machine Learning Curriculum',
            image: 'frank_chang.jpg',
            description:
                'Student at Chantilly High School with a passion for technology that will impact the future',
        },
        {
            name: 'Vishnu Sharma',
            title: 'Director of Machine Learning Curriculum',
            image: 'no_picture.jpg',
            description:
                'High school student interested in computer science, machine learning, and their applications',
        },
        {
            name: 'Raghav Paratkar',
            title: 'Director of Scratch Curriculum',
            image: 'raghav_paratkar.jpeg',
            description:
                'High school student with a passion for coding',
        },
    ];

    const volunteers: ITeamCard[] = [
        {
            name: 'Sanvi Srinivas',
            title: 'Tutor: Intro to ML',
            image: 'sanvi_srinivas.jpeg',
            description:
                'High school student interested in spreading and delving into artificial intelligence',
        },
        {
            name: 'Aditi Athreyas',
            title: 'Marketing + Discord Moderator',
            image: 'aditi_athreyas.jpeg',
            description:
                'High school student who loves to work with robotics and spends time designing robots',
        },
        {
            name: 'Ryan Zwatchska',
            title: 'Tutor: Intro to ML',
            image: 'ryan_zwatchska.jpeg',
            description:
                'High school student interested in teaching and learning more about the nature of artificial intelligence',
        },
        {
            name: 'Reza Razavi',
            title: 'Recruiter + Marketing + Tutor: Intro to Python + ML',
            image: 'reza_razavi.jpeg',
            description:
                'Currently a high school student with a passion for machine learning and computational neuroscience',
        },
        {
            name: 'Bertrand Lee',
            title: 'Tutor: Intro to ML + Python',
            image: 'bertrand_lee.jpeg',
            description:
                'High school student interested in learning and teaching topics about machine learning and python',
        },
        {
            name: 'Michael Ilie',
            title: 'Curriculum Creator + Tutor: Intermediate Python + Intermediate TensorFlow',
            image: 'michael_ilie.jpeg',
            description:
                'Junior entrepreneur, computer engineer, and high school student',
        },
        {
            name: 'Sai Challagundla',
            title: 'Discord Moderator + Tutor: Intro to Python',
            image: 'sai_challagundla.jpeg',
            description:
                'High school student who is interested in fintech and machine learning',
        },
        {
            name: 'Vibhuv Sharma',
            title: 'Tutor: Intro to Python + ML',
            image: 'no_picture.jpg',
            description:
                'Motivated student and programmer with a passion for Machine Learning and the future of technology',
        },
        {
            name: 'Adit Pakala',
            title: 'Tutor: Intro to Python + Intermediate Python',
            image: 'adit_pakala.jpeg',
            description:
                'High school student passionate about computer science and entrepreneurship',
        },
        {
            name: 'Teerthraj Parmar',
            title: 'Tutor: Intermediate Python + Intro to Python + ML',
            image: 'teerthraj_parmar.jpeg',
            description:
                'High school student interested in teaching kids ML and python',
        },
        {
            name: 'Risha Dinesh',
            title: 'Recruiter + Marketing + Discord Moderator',
            image: 'risha_dinesh.jpeg',
            description:
                'Motivated high school student with interest in all aspects of Mathematics, Computer Science and a big passion for giving back to the community',
        },
        {
            name: 'Anthony Tang',
            title: 'Tutor: Intro to Python + Java Data Structures',
            image: 'anthony_tang.jpeg',
            description:
                'High school student passionate about computer science and spreading computer science to others',
        },
        {
            name: 'Kristian Apostolov',
            title: 'Full-Stack Developer + Discord Bot Developer',
            image: 'kristian_apostolov.jpeg',
            description:
                'Helping others and tech are the two things that bring me the most dopamine',
        },
        {
            name: 'Bhuvnesh Nagpal',
            title: 'Discord Bot Developer + Tutor: Intro to Python + Intermediate Python + Intermediate Keras',
            image: 'bhuvnesh_nagpal.jpeg',
            description:
                'I\'m a high school student from India with a passion for technology and machine learning',
        },
        {
            name: 'David Antwi',
            title: 'Tutor: Intro to ML + Python + Intermediate Python + Intermediate Scikit-Learn + Intermediate Keras + Intermediate TensorFlow',
            image: 'david_antwi.jpeg',
            description:
                'I\'m passionate about machine learning, artificial intelligence, STEM and robotics',
        },
        {
            name: 'Aditya Bilawar',
            title: 'Tutor: Intro to ML + Intermediate Tensorflow + Java Data Structures',
            image: 'aditya_bilawar.jpeg',
            description:
                'Student from West Windsor-Plainsboro High School South who is interested in AI/ML, CS, and tech startups',
        },
        {
            name: 'Shreyaa Sanjay',
            title: 'Recruiter + Public Relations + Events Organizer',
            image: 'shreyaa_sanjay.jpeg',
            description:
                'High school student who loves sharing her interest in robotics and coding with others',
        },
        {
            name: 'David Ulloa',
            title: 'Frontend Developer + Tutor: Intro to Python',
            image: 'david_ulloa.jpeg',
            description:
                'Hello! My name is David and I\'m a passionate programmer. I hope to change the world around me by teaching computer science.',
        },
        {
            name: 'Julia Huang',
            title: 'Recruiter + Public Relations + Events Organizer',
            image: 'julia_huang.jpeg',
            description:
                'High school student interested in problem solving and spending time on the Internet',
        },
        {
            name: 'Ceiron Dushyanthan',
            title: 'Tutor: Block Coding with Scratch + Intro to Python + ML',
            image: 'ceiron_dushyanthan.jpeg',
            description:
                'Sophomore at Bridgewater-Raritan High School that is interested in artificial intelligence and quantum computing',
        },
        {
            name: 'Shrey Shingala',
            title: 'Tutor: Block Coding with Scratch + Intro to Python + Intermediate Python',
            image: 'shrey_shingala.jpeg',
            description:
                'High school student passionate about computer science and machine learning',
        },
        {
            name: 'Hira Usman',
            title: 'Tutor: Block Coding with Scratch + Recruiter + Public Relations + Events Organizer',
            image: 'hira_usman.jpeg',
            description:
                'A high school freshman who enjoys Biomedical Sciences, App-Building, and volunteering!',
        },
        {
            name: 'Aryan Aneesh',
            title: 'Events Organizer',
            image: 'aryan_aneesh.jpeg',
            description:
                'Passionate programmer driven to explore the intersection between service and computer science',
        },
        {
            name: 'Kirthan Murthy',
            title: 'Tutor: Block Coding with Scratch + Intro to Python',
            image: 'kirthan_murthy.png',
            description:
                'I am a high school student who enjoys the fields of computer science and business',
        },
        {
            name: 'Daniel Allen',
            title: 'Tutor: Block Coding with Scratch + Intro to Python',
            image: 'daniel_allen.jpg',
            description:
                'High School Student interested in robotics and a passion mentoring',
        },
        {
            name: 'Thomas Chia',
            title: 'Curriculum Creator + Tutor: Intermediate Keras + Intermediate TensorFlow',
            image: 'thomas_chia.png',
            description:
                'Rodman Scholar at the University of Virginia, ISEF 4th Place',
        },
        {
            name: 'Pankhuri Goyal',
            title: 'Tutor: Block Coding with Scratch + Intro to Python',
            image: 'pankhuri_goyal.jpg',
            description:
                'High School student with a love for Computer Science and mentoring',
        },
        {
            name: 'Aiden Jasul',
            title: 'Tutor: Intro to Python + Intermediate Python',
            image: 'aiden_jasul.jpg',
            description:
                'Student from Scotch Plains Fanwood High School determined to make an impact through computers and technology',
        },
        {
            name: 'Raymond Xu',
            title: 'Tutor: Intro to Python',
            image: 'raymond_xu.jpg',
            description:
                'High school student interested in CS',
        },
        {
            name: 'Chantal Pino',
            title: 'Tutor: Intro to Python + Public Relations',
            image: 'chantal_pino.png',
            description:
                'High school student interested in python, machine learning and hackathons',
        },
    ];

    const collegeVolunteers: ITeamCard[] = [
        {
            name: 'Justin Baltazar',
            title: 'Full-Stack Developer',
            image: 'justin_baltazar.jpeg',
            description:
                'A Computer Science and Mathematics double major at UMass Amherst with experience in software engineering and web development.',
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
