import { gql, useQuery } from '@apollo/client'
import { useUser, getAccessToken, withPageAuthRequired } from '@auth0/nextjs-auth0'

const PRODUCTS_QUERY = gql`
    query GetProduct {
        products {
            title
        } 
    }
`

export default function HomePage() {
    const { user } = useUser()
    const { data, loading, error } = useQuery(PRODUCTS_QUERY)

    return (
        <div>
            <h1>Page Home</h1>
            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>
        </div>
    )
}

export const getServerSideProps = withPageAuthRequired({
    getServerSideProps: async ({req, res }) => {
        console.log(getAccessToken(req, res))

        return {
            props: {}
        }
    }
})
