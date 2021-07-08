import React from 'react'
import Button from '../button'
import { useRouter } from 'next/router'
import cx from 'classnames'
import styles from './styles.module.scss'

const Card = ({ id, title, author, className }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push({
      pathname: '/details-page/[id]',
      query: { id },
    })
  }
  return (
    <div className={cx(className, styles.cardContainer)}>
      <p className={styles.title}>Title: {title}</p>
      <p className={styles.author}>Author: {author}</p>
      <Button className="mt-10" onClick={handleClick}>
        Details
      </Button>
    </div>
  )
}

export default Card
