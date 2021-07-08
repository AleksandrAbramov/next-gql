const { ApolloServer, gql } = require('apollo-server')
const typeDefs = gql`
  type Book {
    id: Int
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`
const books = [
  {
    id: 1,
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    id: 2,
    title: 'City of Glass',
    author: 'Paul Auster',
  },
  {
    id: 3,
    title: 'Custom Title1',
    author: 'Custom Author1',
  },
  {
    id: 4,
    title: 'Custom Title2',
    author: 'Custom Author3',
  },
  {
    id: 5,
    title: 'City of GlassSSSSSSSSSS',
    author: 'Paul AusterLIST',
  },
]

const resolvers = {
  Query: {
    books: () => books,
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
