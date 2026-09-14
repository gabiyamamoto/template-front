import { KeyRound, Server, HardDrive } from 'lucide-react';

export const examples = [
    {
        id: 1,
        method: 'ApiKey',
        verb: 'Get',
        description: 'Lista de series com api exposta',
        color: 'purple',
        Icon: KeyRound,
    },
    {
        id: 2,
        method: 'SSR',
        verb: 'Get',
        description: 'Lista séries renderizadas no SSR.',
        color: 'purple',
        Icon: Server,
    },
    {
        id: 3,
        method: 'Offline',
        verb: 'Get',
        description: 'Lista séries consumida no SessionStorage.',
        color: 'purple',
        Icon: HardDrive,
    }
];

export const crud = [
    {
        id: 1,
        method: 'ApiKey',
        verb: 'Get',
        description: 'Lista de series com api exposta',
        color: 'purple',
        Icon: KeyRound,
    }
]