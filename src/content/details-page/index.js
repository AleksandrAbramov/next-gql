import React from 'react'
import Button from 'src/components/button'
import PageLayout from 'src/components/page-layout'
import { useRouter } from 'next/router'

const DetailsPage = ({ books }) => {
  const {
    query: { id: queryId },
    back,
  } = useRouter()

  const bookResult = books.reduce(
    (acc, book) =>
      book?.id == queryId
        ? { title: book.title, author: book.author, id: book.id }
        : { ...acc },
    {}
  )

  const onBackHandler = (e) => {
    e.preventDefault()
    back()
  }

  return (
    <PageLayout>
      <h1>Title: {bookResult.title}</h1>
      <h2>Author: {bookResult.author}</h2>
      <h3>Id: {bookResult.id}</h3>
      <Button onClick={onBackHandler} className="mt-10">
        {'<'} Back
      </Button>
    </PageLayout>
  )
}

export default DetailsPage
