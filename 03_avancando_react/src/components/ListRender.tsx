import { useState } from 'react';

export default function ListRender() {
    //const [list, setList] = useState<string[]>(['matheus', 'pedro', 'josias']);

    const [users, setUsers] = useState([
        { id: 1, name: 'matheus', age: 31},
        { id: 2, name: 'joão', age: 18},
        { id: 3, name: 'pedro', age: 41},
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            console.log(prevUsers);
            return prevUsers.filter((user) => randomNumber !== user.id);
        })
    }

    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Excluir aleatório!</button>
        </div>
    )
}