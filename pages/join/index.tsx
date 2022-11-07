import React from 'react';
import { Container, Button } from 'react-bootstrap';
import PositionCard from '../../components/PositionCard';
import styles from '../../styles/Join.module.css';
import ThreeDButton from '../../components/ThreeDButton';
import Head from 'next/head';

const Overview: React.FC = () => {
    return (
        <>
            <Head>
                <title>Join Us</title>
            </Head>
            <Container>
                <h1>Join us!</h1>
                <div className='mt-5 text-center'>
                    <a
                        href='https://bit.ly/volunteer-neuracode'
                        target='_blank'
                        rel='noreferrer'
                        className='text-decoration-none'
                    >
                        <div className='w-100 d-flex align-items-center justify-content-center'>
                            <ThreeDButton text='Apply Now!' />
                        </div>
                    </a>
                </div>
                <div className='mt-5 mb-5 d-flex flex-row flex-wrap justify-content-around'>
                    <PositionCard
                        title='Tutor: Intro to Machine Learning'
                        description='Intro to Machine Learning tutors will be required to have basic knowledge of AI concepts and no programming knowledge is required; it is a conceptual course.'
                    />
                    <PositionCard
                        title='Tutor: Intro to Python'
                        description='Intro to Python tutors will be required to have basic knowledge of the Python programming language.'
                    />
                    <PositionCard
                        title='Tutor: Intermediate Python'
                        description='Intermediate Python tutors will be required to have advanced knowledge of the Python programming language, including concepts like OOP, magic methods, and more.'
                    />
                    <PositionCard
                        title='Tutor: Block Coding with Scratch'
                        description='Scratch tutors will be required to have knowledge of the scratch interface, programming concepts, and the blocks available in scratch.'
                    />
                    <PositionCard
                        title='Tutor: AI and Modern Applications'
                        description='AI and Modern Applications tutors will be required to have knowledge of AI concepts and computer vision, object detection, and natural language processing (NLP).'
                    />
                    <PositionCard
                        title='Frontend (UI/UX) Developer'
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
                    <PositionCard
                        title='Curriculum creator'
                        description='As an curriculum creator you will be required to create and maintain the Neuracode curriculum and help with the creation of the course materials (presentations, etc.).'
                    />
                </div>
            </Container>
        </>
    );
};

export default Overview;
