import { Button } from 'antd';
import Link from 'next/link';

export default function UpdatePlaceHolder() {
    return (
        <main>
            <h2>Update Placeholder</h2>
            <p>Vá para card Get - Read e selecione a série desejada.</p>
            <Link href="/read">
                <Button type="primary">Ir para Get - Read</Button>
            </Link>
        </main>
    );
}