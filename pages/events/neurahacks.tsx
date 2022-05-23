import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../../styles/Events.module.css';
import Image from 'next/image';
import ThreeDButton from '../../components/ThreeDButton';

const neurahacks: React.FC = ({}) => {
    return (
        <div className={styles.hackathonBackground}>
            <div className='d-flex align-items-center justify-content-center flex-column'>
                <Image
                    src='/android-chrome-384x384.png'
                    width={200}
                    height={200}
                    alt='Neurahacks Logo'
                />
                <h1 className={styles.hackathonTitle}>NeuraHacks</h1>
                <h2>August 30th | Virtual</h2>
                <a
                    href='https://forms.gle/7dYev7Agaj36qsHe8'
                    target='_blank'
                    rel='noreferrer'
                    className='text-decoration-none'
                >
                    <div className='w-100 d-flex align-items-center justify-content-center'>
                        <ThreeDButton text='Sign up!' />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default neurahacks;
