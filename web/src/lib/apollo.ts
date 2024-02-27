import { ApolloClient, InMemoryCache, createHttpLink, from } from '@apollo/client'

const httplink = createHttpLink({
    uri: 'http://localhost:3332/graphql',
    fetch,
})

const cache = new InMemoryCache()

export const apolloClient = new ApolloClient({
    link: from([httplink]),
    cache,
})  