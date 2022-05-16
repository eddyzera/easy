import React from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  placeholder?: string
  icon?: React.ReactNode | JSX.Element
  type: 'text' | 'email' | 'number'
}