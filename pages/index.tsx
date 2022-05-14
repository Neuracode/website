import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { Container, Card, Accordion } from 'react-bootstrap';
import Image from 'next/image';
import ThreeDButton from '../components/ThreeDButton';

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
                    content='Neuracode is a nonprofit organization that educates students around the world on the topic of machine learning. Neuracode is on a mission to make sure that all students have the opportunity to learn about machine learning, including low-income or underrepresented groups. Neuracode helps students of all backgrounds learn about machine learning, and we are always looking for new students to join our team. Neuracode is primarily looking for students who are in middle school or high school. The website is Neuracode.org.'
                />
                <meta
                    name='keywords'
                    content='neuracode, nonprofit, non-profit, 501(c)(3), 501 c 3, 501c3, neura code, educate, education, low-income, low income, underrepresented students, student led, student-led, machine learning, high school, programming, coding, computer science, cs, intro to machine learning, intro to python, intermediate python, intro to scikit-learn, intro to keras, intro to tensorflow, scikit-learn, keras, tensorflow, GitHub, LinkedIn, Discord, Email, python, ai, ml, ai enthusiast, artificial intelligence, neural networks, azam ahmed, united states, neuracode global, new jersey, nj, neuracode.org, neural, ann, cnn, rnn, artificial neural network, convolutional neural network, recurrent neural network, nn, supervised learning, unsupervised learning, reinforcement learning, regression, classification, decision trees, random forests, gan, generative, generative adversarial networks, deep learning, azam, ahmed, azam ahmed president'
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

                <meta property='og:title' content='Neuracode' />
                <meta
                    property='og:description'
                    content='Neuracode is a nonprofit organization that educates students around the world on the topic of machine learning. Neuracode is on a mission to make sure that all students have the opportunity to learn about machine learning, including low-income or underrepresented groups. Neuracode helps students of all backgrounds learn about machine learning, and we are always looking for new students to join our team. Neuracode is primarily looking for students who are in middle school or high school. The website is Neuracode.org.'
                />
                <meta
                    property='og:image'
                    content='https://neuracode.org/android-chrome-192x192.png'
                />
                <meta property='og:url' content='https://neuracode.org' />
                <meta property='og:type' content='website' />

                <meta name='twitter:card' content='summary' />
                <meta name='twitter:site' content='neuracode' />
                <meta name='twitter:title' content='Neuracode' />
                <meta
                    name='twitter:description'
                    content='Neuracode is a nonprofit organization that educates students around the world on the topic of machine learning. Neuracode is on a mission to make sure that all students have the opportunity to learn about machine learning, including low-income or underrepresented groups. Neuracode helps students of all backgrounds learn about machine learning, and we are always looking for new students to join our team. Neuracode is primarily looking for students who are in middle school or high school. The website is Neuracode.org.'
                />
                <meta
                    name='twitter:image'
                    content='https://neuracode.org/android-chrome-192x192.png'
                />
                <meta name='twitter:url' content='https://neuracode.org' />

                <meta name='theme-color' content='#ffffff' />

                {/*eslint-disable-next-line @next/next/no-sync-scripts*/}
            </Head>

            <Container className={styles.main}>
                <section className={styles.sectionContainer}>
                    <div>
                        <h1
                            className={styles.title}
                            data-aos='flip-up'
                            data-aos-once='true'
                        >
                            Machine learning is for everyone!
                        </h1>

                        <h5
                            className={styles.description}
                            data-aos='slide-right'
                            data-aos-once='true'
                            data-aos-delay='100'
                        >
                            Neuracode is a nonprofit organization that is on a
                            mission to provide everyone an equal opportunity to
                            learn machine learning. We support students from a
                            variety of backgrounds, including low-income or
                            underrepresented students.
                        </h5>

                        <Link href='/courses/overview' passHref={true}>
                            <div
                                className={styles.coursesBtnWrapper}
                                data-aos='slide-right'
                                data-aos-once='true'
                                data-aos-delay='200'
                            >
                                <div className={styles.viewCoursesBtn}>
                                    <ThreeDButton text='View Courses' />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div
                        className={`d-flex align-items-center justify-content-center ${styles.aiImage}`}
                        data-aos='zoom-in-right'
                        data-aos-once='true'
                    >
                        <Image
                            src='/illustrations/artificial_intelligence.svg'
                            alt='artificial intelligence'
                            width='550'
                            height='450'
                        />
                    </div>
                </section>
                <section className={styles.sectionContainer2}>
                    <Link href='/courses/overview' passHref={true}>
                        <div data-aos='zoom-in-right' data-aos-once='true'>
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
                    <Link href='/join/overview' passHref={true}>
                        <div
                            data-aos='flip-up'
                            data-aos-once='true'
                        >
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
                                    <Card.Title>Internships</Card.Title>
                                    <Card.Text>
                                        Through our selective internship
                                        program, you will gain leadership
                                        experience along with team experience.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Link>

                    <Link href='/events/hackathon' passHref={true}>
                        <div
                            data-aos='flip-down'
                            data-aos-once='true'
                        >
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

                    <Link href='/blog/latest' passHref={true}>
                        <div data-aos='zoom-in-left' data-aos-once='true'>
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
                <section className={`${styles.sectionContainer3} mt-5 w-75`}>
                    <h2 className={styles.sectionTitle}>
                        Register for Classes
                    </h2>
                    <div className='d-flex flex-row justify-content-around align-items-center flex-wrap'>
                        <Image
                            src='/illustrations/learning.svg'
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
                            <p>✓ Rigorous Curriculum</p>
                            <p>✓ Plethora of Resources</p>
                            <p>✓ Online: Learn Anywhere</p>
                            <p>✓ Six Courses: Beginner to Advanced</p>
                            <p>✓ Knowledgeable Tutors</p>
                            <p>✓ Discord Community Support</p>

                            <a
                                href='https://forms.gle/y4jfEVaoNM2HrzRe8'
                                target='_blank'
                                rel='noreferrer'
                                className='text-decoration-none'
                            >
                                <div className='w-100 d-flex align-items-center justify-content-center'>
                                    <ThreeDButton text='Enroll Now!' />
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
                <section className={`${styles.sectionContainer4} mt-5 w-75`}>
                    <h2 className={styles.sectionTitle}>Join the Mission</h2>
                    <div className='d-flex flex-row justify-content-around align-items-center flex-wrap'>
                        <div
                            style={{ fontSize: '1.25rem' }}
                            data-aos='zoom-in-right'
                            data-aos-once='true'
                        >
                            <p>✓ Leadership/Tutoring Experience</p>
                            <p>✓ Volunteer Hours</p>
                            <p>✓ Work with a team</p>

                            <a
                                href='https://forms.gle/7dYev7Agaj36qsHe8'
                                target='_blank'
                                rel='noreferrer'
                                className='text-decoration-none'
                            >
                                <div className='w-100 d-flex align-items-center justify-content-center'>
                                    <ThreeDButton text='Apply Now!' />
                                </div>
                            </a>
                        </div>
                        <Image
                            src='/illustrations/teaching.svg'
                            alt='teaching'
                            width='550'
                            height='450'
                            data-aos='zoom-in-left'
                            data-aos-once='true'
                        />
                    </div>
                </section>
                <section className={`${styles.sectionContainer5} mt-5 w-75`}>
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
                                    Are all courses free?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Yes! All courses are free. Our mission is to
                                    help students all around the world and
                                    expose them to the field machine learning.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='1'>
                                <Accordion.Header>
                                    Is Neuracode a non-profit?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Yes, we are a non-profit and a completely
                                    student-run organization.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='2'>
                                <Accordion.Header>
                                    Will interns or tutors earn volunteer hours?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Yes, tutors will earn the number of
                                    volunteer hours they stay each class and an
                                    additional volunteer hour for getting used
                                    to the new system. Every presentation
                                    created by a tutor will earn a 4 volunteer
                                    hours.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='3'>
                                <Accordion.Header>
                                    How will I attend the course?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Classes will take place online over Zoom and
                                    the link to the meeting will be sent to you
                                    via email when you sign up for the course.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default Home;
