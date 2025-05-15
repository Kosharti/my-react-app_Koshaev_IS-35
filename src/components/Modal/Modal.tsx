import React from 'react';
import styles from './Modal.module.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <span className={styles.closeButton} onClick={onClose}>&times;</span>
                <h2>Form</h2>
                <form>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className={styles.modalButtons}>
                        <button type="button" className={styles.okButton} onClick={onClose}>OK</button>
                        <button type="button" className={styles.cancelButton} onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;