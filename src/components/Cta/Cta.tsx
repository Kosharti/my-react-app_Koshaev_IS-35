import React from 'react';
import styles from './Cta.module.css';

const Cta: React.FC = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaContent}>
        <div className={styles.ctaText}>
          <h2>Set up your profile. <br /> Let jobs find you.</h2>
          <button>Join Now</button>
        </div>
        <img src="./img/Rectangle15.png" alt="CTA Image" className={styles.ctaImage} />
      </div>
    </section>
  );
};

export default Cta;