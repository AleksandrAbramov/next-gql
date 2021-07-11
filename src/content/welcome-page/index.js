import React, { useEffect, useState } from 'react'
import PageLayout from 'src/components/page-layout'
import Card from 'src/components/card'
import Button from 'src/components/button'
import { useRouter } from 'next/router'

import styles from './styles.module.scss'

const Welcome = ({ books }) => {
  const [state, setState] = useState(null)
  const { push } = useRouter()

  const backHandler = () => {
    push('/')
  }

  useEffect(() => {
    setState(books)
  }, [books])

  return (
    <PageLayout>
      <h1 className="mb-24">This is WELCOME page!</h1>
      <div className={styles.cardsWrapper}>
        {state
          ? state.map((book) => <Card key={book.title} {...book} />)
          : 'Loading...'}
      </div>
      <Button onClick={backHandler} className="mt-24">
        {'<'} Back to index
      </Button>
    </PageLayout>
  )
}
export default Welcome
