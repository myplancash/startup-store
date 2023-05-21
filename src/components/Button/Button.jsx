import React from 'react'
import { BaseButton, GoogleButton, InvertedButton } from './Button.styles.jsx';

export const BUTTON_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
}

const getButton = (buttonClass = BUTTON_CLASSES.base) => ({
    [BUTTON_CLASSES.base]: BaseButton,
    [BUTTON_CLASSES.google]: GoogleButton,
    [BUTTON_CLASSES.inverted]: InvertedButton,
  }[buttonClass]
)

const Button = ({ children, buttonClass, ...otherProps }) => {
  const CustomButton = getButton(buttonClass)
  return (
    <CustomButton {...otherProps}>{children}</CustomButton>
  )
}

export default Button