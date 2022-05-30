import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../../styles/Blog.module.css';
import BlogPreview from '../../components/blog/BlogPreview';
import Head from 'next/head';

const latest: React.FC = ({}) => {
    return (
        <>
            <Head>
                <title>Latest Blog Posts</title>
            </Head>
            <Container className='vh-100'>
                <h1 className={styles.title}>Latest Blogs</h1>
                <BlogPreview
                    image='/blog_icons/preview/neural_network.png'
                    title='What is Machine Learning and Why You Should Learn It'
                    author='Azam Ahmed'
                    date='May 19, 2022'
                    href='/blog/latest/what-is-machine-learning-and-why-you-should-learn-it'
                    description='Machine learning is a rapidly growing field that thousands of companies are beginning to take advantage of.'
                />
            </Container>
        </>
    );
};

export default latest;
