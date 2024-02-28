import { withApollo } from '../../lib/withApollo'
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import { getServerPageGetProducts, ssrGetProducts, useGetProducts } from '../../graphql/generated/page'

function HomePage(props) {
    const { user } = useUser()
    // const { data, loading, error } = useGetProducts()

    return (
        <div>
            <h1>Page Home</h1>
            <pre>
                {JSON.stringify(props, null, 2)}
            </pre>
            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>
        </div>
    )
}

export const getServerSideProps = withPageAuthRequired({
    getServerSideProps: async ( ctx ) => {
        return getServerPageGetProducts(null, ctx)
    }
})


export default withApollo(
    ssrGetProducts.withPage()(HomePage)
)
