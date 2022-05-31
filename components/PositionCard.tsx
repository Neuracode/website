import React from 'react';
import { Card } from 'react-bootstrap';
import styles from '../styles/Join.module.css';

interface IPositionCard {
  title: string;
  description: string;
}

const PositionCard: React.FC<IPositionCard> = ({
  title,
  description,
}) => {
  return (
    <>
      <Card className={styles.positionCard}>
        <span className={styles.colorBar}></span>
        <Card.Body className={styles.positionCardBody}>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default PositionCard;
