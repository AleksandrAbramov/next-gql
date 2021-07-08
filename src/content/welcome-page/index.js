import React, { useEffect, useState } from 'react'
import PageLayout from 'components/page-layout'
import Card from 'src/components/card'
import styles from './styles.module.scss'

const Welcome = ({ books }) => {
  const [state, setState] = useState(null)

  useEffect(() => {
    setState(books)
  }, [books])

  return (
    <PageLayout>
      <h1>This is WELCOME page!</h1>
      <div className={styles.cardsWrapper}>
        {state
          ? state.map((book) => (
              <Card key={book.title} {...book} className="mb-10" />
            ))
          : 'Loading...'}
      </div>
    </PageLayout>
  )
}
export default Welcome
