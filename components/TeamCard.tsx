import React from 'react';
import { Card } from 'react-bootstrap';
import Image from 'next/image';
import styles from '../styles/About.module.css';

interface ITeamCard {
    name: string;
    title: string;
    image: string;
    description: string;
    linkedin?: string;
    website?: string;
    github?: string;
}

const TeamCard: React.FC<ITeamCard> = ({
    name,
    title,
    image,
    description,
    linkedin,
    website,
    github,
}) => {
    return (
        <>
            <Card className={styles.teamMemberCard}>
                <Image
                    src='/geometric_background.jpg'
                    alt='Geometric Background'
                    width={200}
                    height={150}
                    className={styles.teamMemberBackground}
                ></Image>
                <div className={styles.teamMemberImageWrapper}>
                    <Image
                        src={`/team/${image}`}
                        alt='Team Member Image'
                        width={200}
                        height={200}
                        className={styles.teamMemberImage}
                    />
                </div>

                <Card.Body className='d-flex flex-column align-items-center'>
                    <br />
                    <Card.Title className='d-flex flex-column align-items-center text-align-center'>
                        <span className={styles.teamMemberName}>{name}</span>
                        <span className={styles.teamMemberTitle}>{title}</span>
                    </Card.Title>
                    <Card.Text>
                        <p className={styles.teamMemberDescription}>
                            {description}
                        </p>
                        <div className='mt-3 d-flex justify-content-around'>
                            {linkedin && (
                                <a
                                    href={linkedin}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Image
                                        width={30}
                                        height={30}
                                        src='/team/icons/linkedin.png'
                                        alt='linkedin'
                                        role='button'
                                    />
                                </a>
                            )}
                            {github && (
                                <a
                                    href={github}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Image
                                        width={30}
                                        height={30}
                                        src='/team/icons/github.png'
                                        alt='github'
                                        role='button'
                                    />
                                </a>
                            )}
                            {website && (
                                <a
                                    href={website}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Image
                                        width={30}
                                        height={30}
                                        src='/team/icons/domain.png'
                                        alt='website'
                                        role='button'
                                    />
                                </a>
                            )}
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default TeamCard;
