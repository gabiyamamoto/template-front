import axios from "axios";
import Link from 'next/link';

export default async function Series() {
    let series = [];

    try {
        const response = await axios.get(`${process.env.API_URL_SERIES}?limit=50`, {
            headers: {
                'x-api-key': process.env.API_KEY
            }
        });
        series = response.data.data;
    } catch (error) {
        console.error('Erro ao buscar séries:', error);
    }

    return (
        <ul>
            {series.map((item) => {
                return <li key={item.id}>
                    <h2>{item.title}</h2>
                    <Link href={`/read/${item.id}`}>
                        Ver série
                    </Link>
                </li>;
            })}
        </ul>
    );
}