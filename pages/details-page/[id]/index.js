import DetailsPage from 'src/content/details-page'
import client from '../../../client'
import { GET_BOOKS } from 'src/api/getBooks.query'

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_BOOKS,
  })
  console.log('SSR DATA: ', data)

  return {
    props: {
      books: data.books,
    },
  }
}

export default DetailsPage
