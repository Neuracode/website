import React from 'react';
import styles from '../../styles/Blog.module.css';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPreviewProps {
    title: string;
    author: string;
    date: string;
    href: string;
    image: string;
    description: string;
}

const BlogPreview: React.FC<BlogPreviewProps> = ({
    title,
    author,
    date,
    href,
    image,
    description
}) => {
    return (
        <Link href={href} passHref>
            <div className={styles.blogPreviewCard}>
                <div className={styles.blogPreviewImage}>
                    <Image
                        src={image}
                        alt='Blog Preview Image'
                        width={100}
                        height={100}
                    />
                </div>
                <div>
                    <h2 className={styles.blogPreviewTitle}>{title}</h2>
                    <p className={styles.blogPreviewDescription}>{description}</p>
                    <p>
                        {author} • {date}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default BlogPreview;
