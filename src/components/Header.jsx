'use client';

import { Atom, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { crud, examples } from '@/data/crud';
import styles from './Header.module.css';

export default function Header() {
    const pathname = usePathname();
    const [light, setLight] = useState(false);

    const operation =
        crud.find((c) => pathname === `/${c.method.toLowerCase()}`) ||
        examples.find((e) => pathname === `/${e.method.toLowerCase()}`);

    const method = pathname === '/' ? 'CRUD' : operation?.method || '404';
    const color = pathname === '/' ? '#f5f5f5' : operation?.color || '#f5f5f5';

    return (
        <header className={`${styles.header} ${light ? styles.light : ''}`}>
            <div className={styles.left}>
                <Link href="/" className={styles.atom}>
                    <Atom size={50} />
                </Link>

                <div>
                    <h2>NextJS16 App Router</h2>
                    <p>
                        API Codeverse sobre <span>SÉRIES</span> - URL:{' '}
                        <a href={process.env.NEXT_PUBLIC_API_URL} className={styles.verb}>
                            {process.env.NEXT_PUBLIC_API_URL}
                        </a>
                    </p>
                </div>
            </div>

            <h1 style={{ color }}>{method.toUpperCase()}</h1>

            <button
                className={styles.themeButton}
                onClick={() => setLight(!light)}
            >
                {light ? <Moon size={20} /> : <Sun size={20} />}
            </button>
        </header>
    );
}