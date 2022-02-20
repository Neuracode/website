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
        <Card.Img variant='top' src={`/team/${image}`} className={styles.teamMemberImage} />
        <Card.Body>
          <Card.Title>
            {name} ~ {title}
          </Card.Title>
          <Card.Text>
            {description}
            <br />
            <div className='mt-3 d-flex justify-content-around'>
              {linkedin && (
                <a href={linkedin} target='_blank' rel='noopener noreferrer'>
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
                <a href={github} target='_blank' rel='noopener noreferrer'>
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
                <a href={website} target='_blank' rel='noopener noreferrer'>
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
