import toast from "react-hot-toast";
import Link from "next/link";
import { headers } from "next/headers";

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
      {series.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  )
}