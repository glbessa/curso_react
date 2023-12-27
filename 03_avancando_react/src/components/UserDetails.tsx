export default function UserDetails({ user } : { user: {id: number, name: string, age: number, occupation: string} }) {
    return (
        <div className="" key={user.id}>
            <h3>{ user.name }</h3>
            <p>Idade: {user.age}</p>
            <p>Ocupação: {user.occupation}</p>
            <p>Pode tirar carteira de motorista? {user.age >= 18 ? 'Sim' : 'Não'}</p>
        </div>
    )
}