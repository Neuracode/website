import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../../styles/Blog.module.css';

interface BlogLayoutProps {
    title: string;
    author: string;
    date: string;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({title, author, date, children}) => {
    return (
        <Container className={`${styles.blogLayout} mb-5`}>
            <div className='d-flex align-items-center justify-content-center'>
                <h1 className={styles.title}>{title}</h1>
            </div>
            
            <p className={styles.author}>By <b>{author}</b> on {date}</p>
            <br />
            <p>{children}</p>
        </Container>
    );
};

export default BlogLayout;