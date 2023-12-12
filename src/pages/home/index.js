import styles from './home.module.css';
import { useAuth } from '@/app/context/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
    const router = useRouter();
    const { authenticated } = useAuth();

    useEffect(() => {
        if (!authenticated && typeof window !== 'undefined') {
            router.push('/');
        }
    }, [authenticated, router]);

    return (
        <div className={styles.container}>
            {authenticated ? (
                <h2>Bem-vindo à sua página inicial!</h2>
            ) : null}
        </div>
    );
}
