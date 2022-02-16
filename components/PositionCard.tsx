import React from 'react';
import { Card } from 'react-bootstrap';
import Image from 'next/image';
import styles from '../styles/Join.module.css';

interface IPositionCard {
  title: string;
  // image: string;
  description: string;
}

const PositionCard: React.FC<IPositionCard> = ({
  title,
  // image,
  description,
}) => {
  return (
    <>
      <Card className={styles.positionCard}>
        {/* <Card.Img variant='top' src={`/team/${image}`} className={styles.positionImage} /> */}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default PositionCard;
