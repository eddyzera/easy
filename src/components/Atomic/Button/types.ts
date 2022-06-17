import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  label?: string
  icon?: React.ReactNode | JSX.Element
  position?: 'left' | 'right'
}