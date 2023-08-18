import { UserCard } from "@/components/UserCard"
import Link from "next/link"

const fetchUsers = async () => {
  const response = await fetch('https://reqres.in/api/users')
  const data = await response.json()
  return data
}

const HomePage = async () => {
  const users = await fetchUsers()

  return (
    <section className="mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center gap-5">
        {users.data.map((user) => (
          <Link key={user.id} href={`/users/${user.id}`}>
            <UserCard user={user} />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default HomePage