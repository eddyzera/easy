import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  label: string
  iconOnly?: React.ReactNode | JSX.Element
  leftIcon?: React.ReactNode | JSX.Element
  rightIcon?: React.ReactNode | JSX.Element
}