import type { AppProps } from 'next/app'
import { UserProvider  } from '@auth0/nextjs-auth0'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from '../lib/apollo'

export default function App({ Component, pageProps }: AppProps) {
  return( 
      <UserProvider>
        <ApolloProvider client={apolloClient}>
         <Component {...pageProps} />
        </ApolloProvider>
      </UserProvider> 
  )
}