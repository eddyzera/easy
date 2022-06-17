import React from 'react'
import styles from './Modal.module.scss'
import { ModalProps } from './types'

export const Modal: React.FunctionComponent<ModalProps> = ({ children }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <p className={styles.modalClose}>x</p>
        </div>
        {children}
      </div>
    </div>
  )
}