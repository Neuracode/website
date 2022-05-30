import React from 'react';
import BlogLayout from '../../../components/blog/BlogLayout';
import Image from 'next/image';
import Head from 'next/head';

const WhatIsMachineLearning: React.FC = ({}) => {
    return (
        <>
            <Head>
                <title>
                    What is Machine Learning and Why You Should Learn It
                </title>
            </Head>
            <BlogLayout
                title='What is Machine Learning and Why You Should Learn It'
                author='Azam Ahmed'
                date='May 19, 2022'
            >
                <p>
                    You might have heard of the term <b>Machine Learning</b>{' '}
                    before, but do you know what it is?{' '}
                </p>
                <br />
                <div className='d-flex align-items-center justify-content-center'>
                    <Image
                        src='/blog_icons/blog/ai_subsets.png'
                        alt='AI Subsets'
                        width={500}
                        height={500}
                    />
                </div>
                <br />
                <div>
                    <span>
                        <b>What is Machine Learning?</b>
                    </span>
                    <ul>
                        <li style={{ listStyleType: 'circle' }}>
                            Machine learning is the process of training a model
                            to learn from data.{' '}
                        </li>
                        <li style={{ listStyleType: 'circle' }}>
                            As technology continues to advance, machine learning
                            is becoming more prevalent than ever before.
                        </li>
                        <li style={{ listStyleType: 'circle' }}>
                            Companies like Facebook, Amazon, Apple, Netflix, and
                            Google are collecting more data than ever before and
                            use machine learning to improve daily operations.
                        </li>
                    </ul>
                </div>
                <div>
                    <span>
                        <b>Why should I learn Machine Learning</b>
                    </span>
                    <ul>
                        <li style={{ listStyleType: 'circle' }}>
                            Analyze large amounts of data quickly
                        </li>
                        <li style={{ listStyleType: 'circle' }}>
                            Use Cases
                            <ol>
                                <li style={{ listStyleType: 'square' }}>
                                    Used in recommendation systems (used by
                                    YouTube and Netflix) - The model takes in
                                    previous data of what a user likes and finds
                                    patterns in the data to recommend new
                                    things.
                                </li>
                                <li style={{ listStyleType: 'square' }}>
                                    Face ID (used on smartphones) - Takes in
                                    pictures of your face and notices the
                                    features of the face and checks whether
                                    those features match another photo of a
                                    face.
                                </li>
                                <li style={{ listStyleType: 'square' }}>
                                    Protection from spam (used in Gmail), and
                                    more! - Recognize specific words or features
                                    of an email that have a probability of being
                                    considered spam and determine an overall
                                    chance of being spam.
                                </li>
                            </ol>
                        </li>
                    </ul>
                </div>
            </BlogLayout>
        </>
    );
};

export default WhatIsMachineLearning;
