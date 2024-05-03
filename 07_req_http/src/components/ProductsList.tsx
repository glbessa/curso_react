import {useState, useEffect} from 'react';
import { productsEndpoint } from '../data/endpoints';
import { productType } from '../types';
import { RealFormatter } from '../formatters';

import { useFetch } from '../hooks/useFetch';

export default function ProductsList() {
    const [products, setProducts] = useState<productType[]>([]);

    const { data: items } : { data: any } = useFetch(productsEndpoint);

    return (
        <>
            <h1>Lista de Produtos</h1>
            <ul>
                {items && items.map((product: productType) => (
                    <li key={product.id}>
                    {product.name} - {RealFormatter.format(product.price)}
                    </li>
                ))}
            </ul>
        </>
    );
}