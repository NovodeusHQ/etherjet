import React from 'react';
import styles from './MovingText.module.scss';
import Star from '@/components/SVGs/Star';

export const MovinText = ({ texts }: { texts: string[] }) => {
  return (
    <section className={styles.movingText}>
      <article className={styles.movingTextContainer}>
        {texts.map((text, index) => (
          <h2 key={index} className={styles.movingTextItem}>
            {text} <Star />
          </h2>
        ))}
      </article>
    </section>
  );
};
