import { ChangeEvent, useState } from 'react'

export default function Challenge() {

    const [ n1, setN1 ] = useState(0);
    const [ n2, setN2] = useState(0);

    const handleN1 = (e: ChangeEvent<HTMLInputElement>) => {
        setN1(Number(e.target.value));
    }
    const handleN2 = (e: ChangeEvent<HTMLInputElement>) => {
        setN2(Number(e.target.value));
    }

    const sum = (a: number, b: number) => {
        return a + b;
    }

    return (
        <div>
            <p>
                <input type="text" name='n1' onChange={handleN1}/>
                +
                <input type="text" name='n2' onChange={handleN2}/>
                = 
                {sum(n1, n2)}
            </p>
        </div>
    )
}