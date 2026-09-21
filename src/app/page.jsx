import { crud, examples } from '@/data/crud';
import Card from '@/components/Card';
import styles from './page.module.css';

export default async function Page() {
    //await new Promise((resolve) => setTimeout(resolve, 5000));

    return (
        <>
            <main className={styles.main}>
                {examples.map(({id, verb, method, description, color, Icon}) => (
                    <Card
                        key={id}
                        verb={verb}
                        method={method}
                        description={description}
                        Icon={Icon}
                    />
                ))}
                {crud.map(({id, verb, method, description, color, Icon}) => (
                    <Card
                        key={id}
                        verb={verb}
                        method={method}
                        description={description}
                        Icon={Icon}
                    />
                ))}
            </main>
            <footer className={styles.footer}>
                <p>Codeverse &copy; {new Date().getFullYear()} - Todos os direitos reservados.</p>
                <p>Next.js - Axios - Ant Design - Lucite</p>
            </footer>
        </>
    );
}
