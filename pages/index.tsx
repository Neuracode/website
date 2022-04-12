import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { Button, Container, Card } from 'react-bootstrap';
import Image from 'next/image';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Neuracode</title>
                <meta name='description' content='Neuracode' />
                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='/apple-touch-icon.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/favicon-16x16.png'
                />
                <link rel='manifest' href='/site.webmanifest' />
                <link
                    rel='mask-icon'
                    href='/safari-pinned-tab.svg'
                    color='#5bbad5'
                />
                <meta name='msapplication-TileColor' content='#da532c' />
                <meta name='theme-color' content='#ffffff' />

                <meta name='title' content='Neuracode' />
                <meta
                    name='description'
                    content='Neuracode is a nonprofit organization that educates students around the world on the topic of machine learning. We are on a mission to make sure that all students have the opportunity to learn about machine learning, including underrepresented groups. We help students of all backgrounds learn about machine learning, and we are always looking for new students to join our team. We are primarily looking for students who are in elementary school, middle school, or high school.'
                />
                <meta
                    name='keywords'
                    content='neuracode, machine learning, high school, coding, computer science, computer science, intro to machine learning, intro to python, intermediate python, intro to scikit-learn, intro to keras, intro to tensorflow, scikit-learn, keras, tensorflow, GitHub, LinkedIn, Discord, Email, python, ai, ml, ai enthusiast, artificial intelligence, neural networks'
                />
                <meta name='robots' content='index, follow' />
                <meta
                    httpEquiv='Content-Type'
                    content='text/html; charset=utf-8'
                />
                <meta name='language' content='English' />
                <meta name='author' content='Azam Ahmed' />
                <meta
                    name='subject'
                    content='Neuracode: Teaching Machine Learning'
                />
                <meta name='copyright' content='Azam Ahmed' />
                <meta name='revisit-after' content='1 days' />
                <meta
                    name='classification'
                    content='Neuracode: Teaching Machine Learning'
                />
                <meta name='distribution' content='Global' />
                <meta name='rating' content='General' />
                <meta name='owner' content='Azam Ahmed' />
                <meta name='url' content='https://neuracode.org' />
                <meta name='identifier-URL' content='https://neuracode.org' />
                <meta name='coverage' content='Worldwide' />
            </Head>

            <Container className={styles.main}>
                <section className={styles.sectionContainer}>
                    <div>
                        <h1 className={styles.title}>
                            Machine learning is for everyone!
                        </h1>

                        <h5 className={styles.description}>
                            Neuracode is a nonprofit organization that is on a
                            mission to provide everyone an equal opportunity to
                            learn machine learning. We support students from a
                            variety of backgrounds, including low-income or
                            underrepresented students.
                        </h5>

                        <Link href='/courses/overview' passHref={true}>
                            <button
                                type='button'
                                className={`${styles.btn} ${styles.cube} mt-4`}
                            >
                                <div className={styles.bgTop}>
                                    <div className={styles.bgInner}></div>
                                </div>
                                <div className={styles.bgRight}>
                                    <div className={styles.bgInner}></div>
                                </div>
                                <div className={styles.bg}>
                                    <div className={styles.bgInner}></div>
                                </div>
                                <div className={styles.btnText}>
                                    View Courses
                                </div>
                            </button>
                        </Link>
                    </div>
                    <div className='d-flex align-items-center justify-content-center'>
                        <Image
                            src='/artificial_intelligence.svg'
                            alt='artificial intelligence'
                            width='550'
                            height='450'
                        />
                    </div>
                </section>
                <section className={styles.sectionContainer2}>
                    <Link href='/courses/overview' passHref={true}>
                        <Card
                            style={{ width: '18rem' }}
                            className={`${styles.infoCard} mt-4 mb-5`}
                        >
                            <Card.Img
                                variant='top'
                                src='https://img.icons8.com/ios/1000/000000/education.png'
                                className={styles.smallIcon}
                            />
                            <Card.Body>
                                <Card.Title>Learn Machine Learning</Card.Title>
                                <Card.Text>
                                    With our sophisticated curriculum, you will
                                    easily progress through our courses with a
                                    firm grasp of the knowledge.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                    <Link href='/join/overview' passHref={true}>
                        <Card
                            style={{ width: '18rem' }}
                            className={`${styles.infoCard} mt-4 mb-5`}
                        >
                            <Card.Img
                                variant='top'
                                src='https://img.icons8.com/ios-filled/1000/000000/leadership.png'
                                className={styles.smallIcon}
                            />
                            <Card.Body>
                                <Card.Title>Enjoyable Internships</Card.Title>
                                <Card.Text>
                                    Through our selective internship program,
                                    you will gain leadership experience along
                                    with team experience.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>

                    <Link href='/events/hackathon' passHref={true}>
                        <Card
                            style={{ width: '18rem' }}
                            className={`${styles.infoCard} mt-4 mb-5`}
                        >
                            <Card.Img
                                variant='top'
                                src='https://img.icons8.com/ios-filled/1000/000000/laptop-coding.png'
                                className={styles.smallIcon}
                            />
                            <Card.Body>
                                <Card.Title>Competitive Hackathons</Card.Title>
                                <Card.Text>
                                    Using the machine learning skills you
                                    obtained from our courses or prior
                                    knowledge, create a cool project and earn
                                    rewards.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>

                    <Link href='/blog' passHref={true}>
                        <Card
                            style={{ width: '18rem' }}
                            className={`${styles.infoCard} mt-4 mb-5`}
                        >
                            <Card.Img
                                variant='top'
                                src='https://img.icons8.com/ios-filled/1000/000000/robot.png'
                                className={styles.smallIcon}
                            />
                            <Card.Body>
                                <Card.Title>Project Blog</Card.Title>
                                <Card.Text>
                                    Further improve your ML skills by reading
                                    through our blogs on a variety of machine
                                    learning projects.{' '}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </section>
            </Container>
        </div>
    );
};

export default Home;
