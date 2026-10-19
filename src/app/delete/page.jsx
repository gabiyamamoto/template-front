import { Button } from 'antd';
import Link from 'next/link';

export default function DeletePlaceHolder() {
    return (
        <main>
            <h2>Delete Placeholder</h2>
            <p>Vá para card Get - Read e selecione a série desejada.</p>
            <Link href="/read">
                <Button type="primary">Ir para Get - Read</Button>
            </Link>
        </main>
    );
}