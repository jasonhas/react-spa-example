import axios from "axios"
import { useState, useEffect } from 'react'

export default function Products() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        const getData = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/products`)
                setData(response.data)
                setError(null)    
                console.log(response)
            } catch (err) {
                setError(err.message)
                setData(null)
            } finally {
                setLoading(false)
            }

        }
        getData();
    
    }, [])

    return (
        <section>
            <h1 className="p-6 text-4xl font-black text-center">Product Page</h1>
            {loading && <div>One moment while we load...</div>}
            {error && (
                <div>{`There is a problem loading store data - ${error}`}</div>
            )}
            <ul>
                {data &&
                    data.products.map(({ id, title, thumbnail}) => (
                        <li key={id}>
                            <h3>{title}</h3>
                            <img src={thumbnail} alt={title}/>
                        </li>
                    ))}
            </ul>
        </section>

    )
} 