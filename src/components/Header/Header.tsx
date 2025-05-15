import React, { useState } from 'react';
import styles from './Header.module.css';
import Modal from '../Modal/Modal';

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.zaglovok}>Jobly</div>
      <nav>
        <a href="#">For Recruiters</a>
        <button className={styles.login} onClick={openModal}>Sign Up</button>
        <a href="#">Log in</a>
      </nav>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </header>
  );
};

export default Header;