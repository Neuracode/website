import React from 'react';
import styles from '../styles/ThreeDButton.module.css';

interface ThreeDButtonProps {
    text: string;
}

const ThreeDButton: React.FC<ThreeDButtonProps> = ({ text }) => {
    return (
        <button type='button' className={`${styles.btn} ${styles.cube} mt-4`}>
            <div className={styles.bgTop}>
                <div className={styles.bgInner}></div>
            </div>
            <div className={styles.bgRight}>
                <div className={styles.bgInner}></div>
            </div>
            <div className={styles.bg}>
                <div className={styles.bgInner}></div>
            </div>
            <div className={styles.btnText}>{text}</div>
        </button>
    );
};

export default ThreeDButton;
