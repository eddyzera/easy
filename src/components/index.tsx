import React from 'react'
import styles from './Hello.module.scss'

export const Hello: React.FunctionComponent<{ label: string }> = ({ label }) => {
  return <h1 className={styles.hello}>{label}</h1>
}