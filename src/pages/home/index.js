import styles from './home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAuth } from '@/app/context/auth';


export default function Home() {
    const router = useRouter();
    const [vendas, setVendas] = useState([]);
    const [userAuth, setUserAuth] = useState()
    const [userLocalStorageState, setUserLocalStorageState] = useState({})
    const { handleLogout } = useAuth();

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
                <div className={styles.box}>
                    <Image
                    src="./usuario.svg"
                    alt='image usuario'
                    width={50}
                    height={50}
                    priority/>
                    <h2 className={styles.h2}>Bem-vindo à sua página inicial!</h2>
                    {userLocalStorageState && (
                        <div className={styles.tagp}>
                            <p className={styles.p}>Email: {userLocalStorageState.email}</p>
                            <p className={styles.p}>Nome: {userLocalStorageState.nome}</p>
                            <p className={styles.p}>ID: {userLocalStorageState.id}</p>
                        </div>
                    )}
                    <h3 className={styles.h3}>Suas Vendas:</h3>
                    <ul>

                        {vendas && vendas.length > 0 && vendas?.map((venda) => (

                            <li key={venda.id}>
                                ID da Venda: {venda.id}, Data: {venda.date}, Valor: {venda.valor_venda}
                            </li>
                        ))}
                    </ul>
                    <Link className={styles.cadvenda} href="/deskvendas">Tela de Vendas</Link><br />
                    <Link className={styles.cadvenda} href="/deskestoque">Tela de Estoque</Link><br/>
                    <Link className={styles.cadvenda} href="/cadastrarvenda">Cadastrar nova venda</Link><br />
                    <Link className={styles.cadvenda} href="/cadastrarproduto">Cadastrar novo produto</Link>
                    <button className={styles.logoutButton} onClick={handleLogout}>Logout</button>
                </div>
            )}
        </div>
    )

}