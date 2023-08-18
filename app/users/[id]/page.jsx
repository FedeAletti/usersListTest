import { UserCard } from "@/components/UserCard"
import Link from "next/link"

const getUser = async (id) => {
    const response = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await response.json()
    return data.data
}

const UserPage = async ({ params }) => {

    const user = await getUser(params.id)

    return (
        <div className="grid place-content-center h-screen">
            <Link href="/">Back</Link>
            <UserCard user={user}/>
        </div>
    )
}

export default UserPage