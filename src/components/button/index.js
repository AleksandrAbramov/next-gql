import React from 'react'
import cx from 'classnames'
import styles from './styles.module.scss'

const Button = ({ children, className, ...rest }) => {
  return (
    <button className={cx(styles.button, className)} {...rest}>
      {children}
    </button>
  )
}

export default Button
