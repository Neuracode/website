import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../../styles/Blog.module.css';

const authors: React.FC = () => {
    return (
        <Container className='vh-100'>
            <h1 className={styles.title}>Blog Authors</h1>
            <p>Coming soon...</p>
        </Container>
    );
};

export default authors;