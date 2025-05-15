import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <strong>Jobly.co</strong><br />
        We support a pool of diverse young creatives and engineers.<br />
        <strong>© 2023 Jobly.co Copyright and All rights reserved.</strong>
      </div>
      <div className={styles.copyright}>
        <a href="#">Terms and Conditions</a> · <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;