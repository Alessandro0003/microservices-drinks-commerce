import { withPageAuthRequired } from "@auth0/nextjs-auth0"
import { useUser, getAccessToken } from "@auth0/nextjs-auth0"

export default function HomePage() {
    const { user } = useUser()

    return (
        <div>
            <h1>Page Home</h1>
            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>
            
            <a href="/api/auth/logout">Logout</a>
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
