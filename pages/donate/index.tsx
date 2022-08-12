import React from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import styles from '../../styles/Donate.module.css';
import ThreeDButton from '../../components/ThreeDButton';
import Head from 'next/head';

const Donate: React.FC = () => {
    return (
        <>
            <Head>
                <title>Donate</title>
            </Head>

            <Container>
                <h1>Donate</h1>
            </Container>

            <div className={styles.donateBackground}>
                <div className='d-flex align-items-center justify-content-center flex-column'>
                    <h1 className={styles.donateText}>Your contribution will inspire the next gneration of education</h1>
                    <a
                        href='/'
                        target='_blank'
                        rel='noreferrer'
                        className='text-decoration-none'
                    >
                        <div className='w-100 d-flex align-items-center justify-content-center'>
                            <ThreeDButton text='Donate' />
                        </div>
                    </a>
                </div>
            </div>

            <Container>

                <h2 className={styles.donateSubtext}>
                    Give an underserved student the chance to learn
                </h2>

                <h2 className={styles.donatePinktext}>
                    Machine Learning
                </h2>
                
                <section className={styles.sectionContainer2}>
                    <Link href='/courses' passHref={true}>
                        <div data-aos-once='true'>
                            <Card
                                style={{ width: '18rem' }}
                                className={`${styles.infoCard} mt-4 mb-5`}
                            >
                                <Card.Img
                                    variant='top'
                                    src='/home_icons/education.png'
                                    className={styles.smallIcon}
                                />
                                <Card.Body>
                                    <Card.Title>
                                        Learn Machine Learning
                                    </Card.Title>
                                    <Card.Text>
                                        With our sophisticated curriculum, you
                                        will easily progress through our courses
                                        with a firm grasp of the knowledge.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Link>
                    <Link href='/join' passHref={true}>
                        <div data-aos-once='true'>
                            <Card
                                style={{ width: '18rem' }}
                                className={`${styles.infoCard} mt-4 mb-5`}
                            >
                                <Card.Img
                                    variant='top'
                                    src='/home_icons/leadership.png'
                                    className={styles.smallIcon}
                                />
                                <Card.Body>
                                    <Card.Title>
                                        Volunteer Opportunity
                                    </Card.Title>
                                    <Card.Text>
                                        By volunteering for Neuracode, you will
                                        gain tutoring or leadership experience,
                                        and you will earn volunteer hours.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Link>

                    <Link href='/events/neurahacks' passHref={true}>
                        <div data-aos-once='true'>
                            <Card
                                style={{ width: '18rem' }}
                                className={`${styles.infoCard} mt-4 mb-5`}
                            >
                                <Card.Img
                                    variant='top'
                                    src='/home_icons/coding.png'
                                    className={styles.smallIcon}
                                />
                                <Card.Body>
                                    <Card.Title>
                                        Competitive Hackathons
                                    </Card.Title>
                                    <Card.Text>
                                        Using the machine learning skills you
                                        obtained from our courses or prior
                                        knowledge, create a cool project and
                                        earn rewards.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Link>

                    <Link href='/blog/latest-blogs' passHref={true}>
                        <div data-aos-once='true'>
                            <Card
                                style={{ width: '18rem' }}
                                className={`${styles.infoCard} mt-4 mb-5`}
                            >
                                <Card.Img
                                    variant='top'
                                    src='/home_icons/robot.png'
                                    className={styles.smallIcon}
                                />
                                <Card.Body>
                                    <Card.Title>Project Blog</Card.Title>
                                    <Card.Text>
                                        Further improve your ML skills by
                                        reading through our blogs on a variety
                                        of machine learning projects.{' '}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Link>
                </section>

            </Container>
        </>
    );
};

export default Donate;
