import UserDetails from "./UserDetails";

export default function UsersRender({ users }: { users: {id: number, name: string, age: number, occupation: string}[]}) {
    return (
        <>
            {users.map((user) => (
                <UserDetails user={user} />
            ))}
        </>
    )
}