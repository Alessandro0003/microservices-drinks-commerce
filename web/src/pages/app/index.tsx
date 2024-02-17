import { withPageAuthRequired } from "@auth0/nextjs-auth0"
import { useUser } from "@auth0/nextjs-auth0"

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

export const getServerSideProps = withPageAuthRequired()
