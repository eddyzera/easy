import React from 'react'
import classNames from 'classnames'
import styles from './Input.module.scss'
import { InputProps } from './types'

export const Input: React.FunctionComponent<InputProps> = ({ label, icon, placeholder, type }) => {
  const inputContainer = classNames(styles.inputContainer)
  const labelContainer = classNames(styles.labelContainer, {[styles._hasIcon]: icon})
  const input = classNames(styles.input)
  return (
    <div className={inputContainer}>
      <label className={labelContainer}>
        {label}
        <div>
          {icon}
          <input type={type} placeholder={placeholder} className={input} />
        </div>
      </label>
    </div>
  )
}