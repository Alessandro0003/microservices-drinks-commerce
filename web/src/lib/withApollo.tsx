import { ApolloClient, ApolloProvider, InMemoryCache, NormalizedCacheObject, createHttpLink, from } from '@apollo/client'
import { GetServerSidePropsContext, NextPage } from 'next'

export type ApolloClientContext = GetServerSidePropsContext

export function getApolloClient(ssrCache?: NormalizedCacheObject) {
    const httpLink = createHttpLink({
        uri: 'http://localhost:3332/graphql',
        fetch,
    })
    
    const cache = new InMemoryCache().restore(ssrCache ?? {})
    
    return new ApolloClient({
        link: from([httpLink]),
        cache,
    })  
}

export const withApollo = (Component: NextPage) => {
    return function Provider(props: any ) {
        return (
            <ApolloProvider client={getApolloClient(props.apolloState)}>
                <Component {...props} />
            </ApolloProvider>
        )
    }
}



