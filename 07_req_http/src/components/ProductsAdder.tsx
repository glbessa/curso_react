import './ProductsAdder.css';

import { ChangeEvent, useState, FormEvent, useEffect } from 'react';
import { productsEndpoint } from '../data/endpoints';


export default function ProductsAdder() {
    const [name, setName] = useState<string>("");
    const [price, setPrice] = useState<number>(0.0);

    const resetForm = () => {
        setName("");
        setPrice(0.0);
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const product = {
            name,
            price
        }

        /*const res = await fetch(productsEndpoint, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        });
        
        const addProduct = await res.json();

        setProducts((prevProducts) => [...prevProducts, addedProduct]);
        */

        httpConfig(product, "POST");

        resetForm();
    };

    return (
        <div className="productsAdder">
            <form method="post" onSubmit={handleSubmit}>
                <label>
                    <span>Name:</span>
                    <input type="text" name="name" onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} value={name} />
                </label>
                <label>
                    <span>Price:</span>
                    <input type="number" name="price" onChange={(e: ChangeEvent<HTMLInputElement>) => setPrice(Number(e.target.value))} value={price}/>
                </label>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    );
}