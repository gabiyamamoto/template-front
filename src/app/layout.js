import './globals.css';
import { Montserrat } from 'next/font/google';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Toaster } from 'react-hot-toast';
import Header from '@/components/Header';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-montserrat',
});

export const metadata = {
    title: 'Next.js CRUD',
    description: 'Projeto de exemplo de CRUD com Next.js, axios, Ant Design e React Hot Toast',
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" className={montserrat.variable}>
            <body>
                <Header />
                <AntdRegistry>{children}</AntdRegistry>
                <Toaster/>
            </body>
        </html>
    );
}
