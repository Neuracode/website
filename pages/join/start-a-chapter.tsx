import React from 'react';
import { Container, Card, Accordion } from 'react-bootstrap';
import Image from 'next/image';
import Head from 'next/head';
import type { NextPage } from 'next';
import Link from 'next/link';
import ThreeDButton from '../../components/ThreeDButton';
import styles from '../../styles/Home.module.css';

const StartAChapter: React.FC = ({}) => {
    return (
        <>
            <Head>
                <title>Start a Chapter</title>
            </Head>
            <Container className={styles.main}>
            <section className={`${styles.sectionContainer3} mt-5 w-75`}>
            <div>
                        <h1
                            className={styles.title}
                            data-aos='flip-up'
                            data-aos-once='true'
                        >
                            Start a Chapter
                        </h1>
                        </div>
                        <h3 className={styles.description}
                        data-aos='slide-right'
                        data-aos-once='true'
                        data-aos-delay='100'
                    >
                        Deliver a cutting-edge computer science curriculum spanning a wide 
                        variety of topics with a Neuracode: AI/ML Club at your school.
                    </h3>
                    <br/>
                    <h2 className={styles.sectionTitle}>
                        Why Start a Chapter?
                    </h2>
                    <div className='d-flex flex-row justify-content-around align-items-center flex-wrap'>
                        <Image
                            src='/illustrations/multitasking.svg'
                            alt='learning'
                            width='550'
                            height='450'
                            data-aos='zoom-in-right'
                            data-aos-once='true'
                        />
                        <div
                            style={{ fontSize: '1.25rem' }}
                            data-aos='zoom-in-left'
                            data-aos-once='true'
                        >
                            <div className={styles.infoBox}>
                                Diverse Content
                            </div>
                            <div className={styles.infoBox}>
                                Connect with Students
                            </div>
                            <div className={styles.infoBox}>
                                Suited for All Abilities
                            </div>
                            <div className={styles.infoBox}>
                                Have Fun While Learning!
                            </div>

                            <a
                                href='/'
                                target='_blank'
                                rel='noreferrer'
                                className='text-decoration-none'
                            >
                                <div className='w-100 d-flex align-items-center justify-content-center'>
                                    {/* <ThreeDButton text='Learn More' /> */}
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
                <section className={`${styles.sectionContainer4} mt-5 w-75`}>
                    <h2 className={styles.sectionTitle}>Benefits</h2>
                    <div className='d-flex flex-row justify-content-around align-items-center flex-wrap'>
                        <div
                            style={{ fontSize: '1.25rem' }}
                            data-aos='zoom-in-right'
                            data-aos-once='true'
                        >
                            <div className={styles.infoBox}>
                                Expert-curated Resources
                            </div>
                            <div className={styles.infoBox}>
                                Nationwide Network
                            </div>
                            <div className={styles.infoBox}>
                                Responsive Support Team
                            </div>
                            <div className={styles.infoBox}>
                                Branding Provided
                            </div>
                            <a
                                href='/join/volunteer'
                                target='_blank'
                                rel='noreferrer'
                                className='text-decoration-none'
                            >
                                <div className='w-100 d-flex align-items-center justify-content-center'>
                                    {/* <ThreeDButton text='Learn More' /> */}
                                </div>
                                <br/>
                            </a>
                        </div>
                        <Image
                            src='/illustrations/teamwork.svg'
                            alt='teaching'
                            width='550'
                            height='450'
                            data-aos='zoom-in-left'
                            data-aos-once='true'
                        />
                    </div>
                </section>
                {/* This is a third section below */}
                <section className={`${styles.sectionContainer5} mt-5`}>
                    <h2 className={styles.sectionTitle}>
                        Chapter Foundation Steps
                    </h2>
                    <div
                        className='mt-4 mb-5'
                        data-aos='flip-up'
                        data-aos-once='true'
                    >
                        <Accordion>
                            <Accordion.Item eventKey='0'>
                                <Accordion.Header>
                                    1. Find an Advisor
                                </Accordion.Header>
                                <Accordion.Body>
                                Search for a teacher that is tangentially related to the club by finding a teacher that has some 
                                common connections with you or your interests. If there is no common connection, then the easiest 
                                thing to do is find a teacher that is willing to advise you and be a reference for your club.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='1'>
                                <Accordion.Header>
                                    2. Find 10 Members + Exec Board
                                </Accordion.Header>
                                <Accordion.Body>
                                Once you have found an advisor, field at least 10 prospective club members and a student executive board 
                                that are enthusiastic about being involved in the club. These people can then help spread 
                                the word and generate interest for the club throughout your school. Meanwhile, your board should consist 
                                of motivated and involved individuals who are passionate about computer science. Their responsibility 
                                will be to handle any logistics necessary to a ensure a fully functional and operational club.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='2'>
                                <Accordion.Header>
                                    3. Create Bylaws
                                </Accordion.Header>
                                <Accordion.Body>
                                    Club bylaws should include Club Name, Type of Organization, Purpose of Organization,
                                    Goals and Objectives, Meeting Dates, Times, and Agendas, as well as Advisor Contact Information,
                                    Executive Board Members, and budget, if applicable. Contact the Neuracode team for any guidance
                                    or questions about successfully completing this step.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='3'>
                                <Accordion.Header>
                                    4. Create Meeting Schedule
                                </Accordion.Header>
                                <Accordion.Body>
                                Once the bylaws are in place and are approved by Neuracode, it is time to plan out the upcoming months 
                                and create your meeting schedule. You should plan out at least 2 meetings for your club a month. It is 
                                also a good idea to plan meetings for lunch and/or after school in order to make sure that your club is 
                                accessible and easy to participate in. If the board needs help managing the club meetings, reach out to 
                                us or your advisor. Remember that club and board members all have an important voice and role in supporting 
                                your club and providing a space for meaningful connections and activities.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <a
                                href='https://forms.gle/hn43NZ7iUJGEQPKu8'
                                target='_blank'
                                rel='noreferrer'
                                className='text-decoration-none'
                            >
                    <div className='w-100 d-flex align-items-center justify-content-center'>
                        <ThreeDButton text='Start a Chapter!' />
                    </div>
                    </a>
                    <br/>
                    <br/>
                </section>
            </Container>
        </>
    );
}
export default StartAChapter;
