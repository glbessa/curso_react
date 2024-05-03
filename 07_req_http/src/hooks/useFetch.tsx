import { useState, useEffect } from 'react'

export const useFetch = (url: string) => {
    const [data, setData] = useState(null);

    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    const httpConfig = (data: any, method: string) => {
        if (method === "POST") {
            setConfig({
                method,
                hearders: {
                    "Content-type":"application/json"
                },
                body: JSON.stringify(data)
            })
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url);

            const json = await res.json();

            setData(json);
        }

        fetchData();
    }, [url, callFetch]);

    useEffect(() => {
        const httpRequest = async () => {
            if (method === "POST") {
                let fetchOptions = [url, config];

                const res = await fetch(...fetchOptions);

                const json = await res.json();

                setCallFetch(json);
            }
        }

        httpRequest();
    }, [config]);

    return { data, httpConfig };
}