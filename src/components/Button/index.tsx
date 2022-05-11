import React from 'react'
import classNames from 'classnames'
import styles from './Button.module.scss'
import { ButtonProps } from './types'

export const Button: React.FunctionComponent<ButtonProps> = ({
  className,
  label,
  variant = 'primary',
  iconOnly,
  icon,
  position = 'left',
  ...props
}) => {
  const isIconLeft = icon && label && position === 'left'
  const isIconRight = icon && label && position === 'right'
  const isIconOnly = icon && !label
  const hasVariant = variant === 'primary' ? styles._primary : styles._secondary
  const buttonContainer = classNames(
    styles.button,
    hasVariant,
    {
      [styles._iconLeft]: isIconLeft,
      [styles._iconRight]: isIconRight,
      [styles._iconOnly]: isIconOnly
    },
    className
  )

  return (
    <button {...props} className={buttonContainer}>
      {isIconLeft && icon}
      {isIconOnly ? icon : label}
      {isIconRight && icon}
    </button>
  )
}