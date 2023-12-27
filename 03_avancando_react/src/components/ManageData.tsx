import { useState } from 'react'

export default function ManageData() {
    let someData = 10;

    const [number, setNumber] = useState<number>(0);

    return (
        <div>
            <div>
                <p>Valor: {someData}</p>
                <button onClick={() => (someData = 15)}>Mudar valor</button>
            </div>
            <div>
                <p>Valor: {number}</p>
                <button onClick={() => setNumber(25)}>Mudar estado</button>
            </div>
        </div>
    );
}