import React from 'react';
import styles from '../../styles/Courses.module.css';
import CourseHeader from '../../../components/CourseHeader';
import Head from 'next/head';

const IntermediateScikitLearn: React.FC = () => {
    const curriculumList = [
        'What is Scikit-Learn?',
        'Classification overview',
        'Binary classification',
        'Measure performance',
        'Multi-class classification',
        'Multi-label classification',
        'Multi-output classification',
        'Algorithms overview',
        'Linear regression',
        'Gradient descent',
        'Polynomial regression',
        'Regularized linear models',
        'Logistic regression',
        'Support vector machines overview',
        'Linear SVM classification',
        'Nonlinear SVM classification',
        'SVM regression',
        'Online SVMs',
        'Decision trees overview',
        'Training decision trees',
        'Visualizing decision trees',
        'Estimating class probabilities',
        'Regularization hyper-parameters',
        'Regression',
        'Ensemble learning and random forests overview',
        'Voting classifiers',
        'Bagging and pasting',
        'Random patches and random subspaces',
        'Random forests',
        'Boosting',
        'Stacking',
        'Dimensionality reduction overview',
        'What is dimensionality?',
        'Dimensionality reduction',
        'Principal Component Analysis (PCA)',
        'Kernel PCA',
        'LLE',
        'Other dimensionality reduction techniques',
        'Clustering',
        'Gaussian mixtures',
    ];

    return (
        <>
            <Head>
                <title>Intermediate Scikit-Learn</title>
            </Head>
            <CourseHeader
                name='Intermediate Scikit-Learn'
                curriculumList={curriculumList}
                about='This course is meant for students who have already learned Intermediate Python and know basic machine learning concepts. By taking the course, students will learn more about machine learning and Scikit-Learn, a machine learning library for Python that includes a lot of useful machine learning algorithms and functions. Students will use this library along with a variety of different datasets to create machine learning projects.'
                startDate='July 1st'
                endDate='August 26th'
                dayAndTime='Saturday, 2:00PM - 3:30PM + Sunday, 2:00PM - 3:30PM'
                timeCommitment={4}
                recommendedGrades='8 - 12'
                prerequisites={[
                    'Basic Python',
                    'Intermediate Python',
                    'ML Concepts',
                ]}
            />
        </>
    );
};

export default IntermediateScikitLearn;
