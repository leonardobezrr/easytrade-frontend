import styles from './home.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Home() {
    const router = useRouter();
    const [vendas, setVendas] = useState([]);
    const [userAuth, setUserAuth] = useState()
    const [userLocalStorageState, setUserLocalStorageState] = useState({})

    useEffect(() => {
        loadHome()
    }, []);

    const loadHome = async () => {
        const auth = localStorage.getItem('authenticated')
        const userLocalStorage = JSON.parse(localStorage.getItem('user'))

        if (auth == 'estaAutenticado') {
            setUserAuth(true)
            setUserLocalStorageState(userLocalStorage)
            fetchVendas(userLocalStorage.id);
        } else {
            router.push('/');
        }
    }

    const fetchVendas = async (id) => {
        try {
                const response = await fetch(`https://easytrade-backend-p5k1.onrender.com/vendas/listar/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    console.log('Dados das vendas:', data);
                    setVendas(data);
                } else {
                    console.error('Falha ao obter vendas:', response.statusText);
                }
            
        } catch (error) {
            console.error('Erro ao fazer requisição de vendas:', error);
        }
    }

    return (
        <div className={styles.container}>
            {userAuth && (
                <>
                    <h2>Bem-vindo à sua página inicial!</h2>
                    {userLocalStorageState && (
                        <>
                            <p>Email: {userLocalStorageState.email}</p>
                            <p>Nome: {userLocalStorageState.nome}</p>
                            <p>ID: {userLocalStorageState.id}</p>
                        </>
                    )}
                    <h3>Suas Vendas:</h3>
                    <ul>
                        {vendas.length > 0 && vendas?.map((venda) => (
                            <li key={venda.id}>
                                ID da Venda: {venda.id}, Data: {venda.date}, Valor: {venda.valor_venda}
                            </li>
                        ))}
                    </ul>
                    <Link href="/cadastrarvenda">Cadastrar nova venda</Link><br />
                    <Link href="/cadastrarproduto">Cadastrar novo produto</Link>
                </>
            )}
        </div>
    );
}