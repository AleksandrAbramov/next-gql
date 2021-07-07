import React, { useRef } from 'react'
import Button from 'src/components/button'
import PageLayout from 'src/components/page-layout'
import styles from './styles.module.scss'

const Welcome = () => {
  const headerRef = useRef(null)
  const onClickHandler = () => {
    headerRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <PageLayout>
      <h1 ref={headerRef}>This is WELCOME page!</h1>
      <div className={styles.longDiv}></div>
      <Button onClick={onClickHandler} className="mt-8">
        Click
      </Button>
    </PageLayout>
  )
}
export default Welcome
