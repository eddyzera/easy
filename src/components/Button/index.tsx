import React from 'react'
import className from 'classnames'
import styles from './Button.module.scss'
import { ButtonProps } from './types'

export const Button: React.FunctionComponent<ButtonProps> = ({ 
  label,
  variant = 'primary',
  iconOnly,
  leftIcon,
  rightIcon,
  ...props
}) => {
  const hasVariant = variant === 'primary' ? styles._primary : styles._secondary
  const buttonContainer = className(styles.button, hasVariant)
  return (
    <button {...props} className={buttonContainer}>
      <label>{label}</label>
    </button>
  )
}