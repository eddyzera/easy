import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  label?: string
  iconOnly?: React.ReactNode | JSX.Element
  icon?: React.ReactNode | JSX.Element
  position?: 'left' | 'right'
}