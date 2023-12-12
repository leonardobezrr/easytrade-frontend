// home
import styles from './home.module.css';
import { useAuth } from '@/app/context/auth';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Home() {
    const router = useRouter();
    const { authenticated, user } = useAuth();
    const [vendas, setVendas] = useState([]);

    useEffect(() => {
        const fetchVendas = async () => {
            try {
                if (user && user.id) {
                    const response = await fetch(`https://easytrade-backend-p5k1.onrender.com/vendas/listar/${user.id}`);
                    if (response.ok) {
                        const data = await response.json();
                        console.log('Dados das vendas:', data); // Adicione este log
                        setVendas(data);
                    } else {
                        console.error('Falha ao obter vendas:', response.statusText);
                    }
                }
            } catch (error) {
                console.error('Erro ao fazer requisição de vendas:', error);
            }
        }

        if (authenticated) {
            fetchVendas();
        } else {
            // Redirecionar para a página de login se não autenticado
            router.push('/');
        }
    }, [authenticated, user, router]); // Removido user.id, pois user pode ser null

    return (
        <div className={styles.container}>
            {authenticated ? (
                <>
                    <h2>Bem-vindo à sua página inicial!</h2>
                    {user && (
                        <>
                            <p>Email: {user.email}</p>
                            <p>Nome: {user.nome}</p>
                            <p>ID: {user.id}</p>
                        </>
                    )}
                    <h3>Suas Vendas:</h3>
                    <ul>
                        {vendas?.map((venda) => (
                            <li key={venda.id}>
                                ID da Venda: {venda.id}, Data: {venda.date}, Valor: {venda.valor_venda}
                            </li>
                        ))}
                    </ul>
                </>
            ) : null}
        </div>
    );
}
