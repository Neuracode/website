import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../../styles/Events.module.css';

const neurahacks: React.FC = ({}) => {
    return (
        <Container className='vh-100'>
            <h1 className={styles.title}>Neurahacks</h1>
            <p>Coming soon...</p>
        </Container>
    );
};

export default neurahacks;