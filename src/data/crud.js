import { KeyRound, Server, HardDrive } from 'lucide-react';

export const examples = [
    {
        id: 1,
        method: 'ApiKey',
        verb: 'Get',
        description: 'Lista de series com api exposta',
        Icon: KeyRound,
    },
    {
        id: 2,
        method: 'SSR',
        verb: 'Get',
        description: 'Lista séries renderizadas no SSR.',
        Icon: Server,
    },
    {
        id: 3,
        method: 'Offline',
        verb: 'Get',
        description: 'Lista séries consumida no SessionStorage.',
        Icon: HardDrive,
    },
];

export const crud = [
    {
        id: 2,
        method: 'Read',
        verb: 'Get',
        description: 'Lista de series com api exposta',
        Icon: KeyRound,
    }
]