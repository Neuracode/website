import React from 'react';
import { Container, Card, Accordion  } from 'react-bootstrap';
import altStyles from '../../styles/Courses.module.css';
import Image from 'next/image';
import Head from 'next/head';
import type { NextPage } from 'next';
import Link from 'next/link';
import ThreeDButton from '../../components/ThreeDButton';
import styles from '../../styles/Home.module.css';


const Volunteer: React.FC = ({}) => {
    const whyVolunteerList = [
        {
            name: 'Fully Remote',
            logo: '/course_icons/zoom.png',
        },
        {
            name: 'Engage with Students',
            logo: '/course_icons/crowd.png',
        },
        {
            name: 'Content Provided',
            logo: '/course_icons/list.png',
        },
        {
            name: 'Obtain Computer Science Experience',
            logo: '/course_icons/code.png',
        },
        {
            name: 'Sharpen Your Tutoring Skills',
            logo: '/course_icons/teacher.png',
        }
    ];

    return (
        <>
            <Head>
                <title>Volunteer</title>
                <meta
                    name='description'
                    content='Neuracode offers a variety of free courses on topic such as intro to programming, mastering machine learning, and Java data structures.'
                />
            </Head>
            <Container className={styles.main}>
                <section className={`${styles.sectionContainer3} mt-5 w-75`}>
                
                    <div>
                        <h1
                            className={styles.title}
                            data-aos='flip-up'
                            data-aos-once='true'
                        >
                            Join Us
                        </h1>
                        </div>
                    
                    
                    <div className='d-flex flex-row justify-content-around align-items-center flex-wrap' id='test'>
                    <h3 className={styles.description}
                        data-aos='slide-right'
                        data-aos-once='true'
                        data-aos-delay='100'
                    >
                        From the comfort of your own home, you can help grow the next generation of 
                        computer scientists while gaining practical, hands-on experience.
                    </h3>
                        <Image
                            src='/illustrations/join.svg'
                            alt='join'
                            width='450'
                            height='350'
                            data-aos='zoom-in-right'
                            data-aos-once='true'
                        />
                        <div
                            style={{ fontSize: '1.25rem' }}
                            data-aos='zoom-in-left'
                            data-aos-once='true'
                        >
                            <div className={styles.infoBox}>
                                Fully Remote
                            </div>
                            <div className={styles.infoBox}>
                                Engage with Students
                            </div>
                            <div className={styles.infoBox}>
                                Content and Schedule Provided
                            </div>
                            <div className={styles.infoBox}>
                                Gain Technical Knowledge 
                            </div>
                            <div className={styles.infoBox}>
                                Improve Tutoring Skills
                            </div>

                            <a
                                href= 'https://docs.google.com/forms/d/e/1FAIpQLSeoy9YX618hIeBu-Fxu9dFTwkpx9dgwyuAKjcfj3TkQNGLbgw/viewform'
                                target='_blank'
                                rel='noreferrer'
                                className='text-decoration-none'
                            >
                                <div className='w-100 d-flex align-items-center justify-content-center'>
                                    <ThreeDButton text='Apply Now' />
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
                <br/>
                <section className={`${styles.sectionContainer5} mt-5`}>
                    <h2 className={styles.sectionTitle}>
                        Frequently Asked Questions
                    </h2>
                    <div
                        className='mt-4 mb-5'
                        data-aos='flip-up'
                        data-aos-once='true'
                    >
                        <Accordion>
                            <Accordion.Item eventKey='0'>
                                <Accordion.Header>
                                    Who can become a volunteer?
                                </Accordion.Header>
                                <Accordion.Body>
                                At Neuracode, we believe that our team should be made of young, bright, 
                                creative and curious individuals who help change the way people think and act. 
                                So we welcome fellow students over the age of 13 with a passion for teaching 
                                computer science to apply to our volunteer team and become the change agents 
                                for their communities.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='1'>
                                <Accordion.Header>
                                    Do I need to have tutoring or teaching experience to be a tutor?
                                </Accordion.Header>
                                <Accordion.Body>
                                No prior experience is required. While some members of our tutoring team do have prior 
                                teaching or tutoring experience, we can get you started teaching on what students need to know, 
                                as long as you have a willingness to learn and grow.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='2'>
                                <Accordion.Header>
                                    Will volunteers earn volunteer hours?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Yes. Tutors will earn the number of
                                    volunteer hours they stay each class and an
                                    additional volunteer hour for getting used
                                    to the new system. Every presentation
                                    created by a tutor will earn 4 volunteer
                                    hours. The number of volunteer hours earned
                                    by students in other positions will be
                                    calculated based on the position they are
                                    in.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='3'>
                                <Accordion.Header>
                                    Will volunteers get paid?
                                </Accordion.Header>
                                <Accordion.Body>
                                Neuracode operates on a completely voluntary basis, and tutors will not be reimbursed. 
                                We believe that in order to reach the widest base of student, it is important to make the 
                                learning experience accessible to everyone. Our model is that the vast majority of 
                                tutors will be motivated by self-interest, professional development and a desire to impact the world around them. 
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='4'>
                                <Accordion.Header>
                                    What is the time commitment for tutoring?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Depending on the class schedule, prospective tutors must be available for all the scheduled
                                    online course sessions and training schedules if applicable for no more than a few hours a week.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='5'>
                                <Accordion.Header>
                                    What do I do if I need help?
                                </Accordion.Header>
                                <Accordion.Body>
                                    The Neuracode team is here to help tutors and volunteers alike to the best of 
                                    their ability. New tutors will go through a training and onboarding process, giving them the tools and
                                    the necessary knowledge needed to succeed the best they can at their roles. Don't hesistate to contact the
                                    team members on Discord for any additional advice or tips needed along the way.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </section>
                <br/>
                <br/>
                <br/>
                </Container>
        </>
    );
}

export default Volunteer;




