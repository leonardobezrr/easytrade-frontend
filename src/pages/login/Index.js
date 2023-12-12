import styles from './login.module.css'
import Image from 'next/image'
import { useState } from 'react'
import { useAuth } from '@/app/context/auth';

export default function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const { login } = useAuth();

    const handleLogin = async () => {
        try {
            const userData = await login(email, senha);
            console.log('Login bem-sucedido. Usuário', userData);
        } catch (error) {
            console.error('Erro ao fazer login', error);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.form}>
                    <div className={styles.box_interno}>
                        <div className={styles.inputs}>
                            <h2>Login</h2>
                            <input className={styles.inputLogin} type='email' placeholder='Digite seu e-mail...' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input className={styles.inputLogin} type='password' placeholder='Digite sua senha...' value={senha} onChange={(e) => setSenha(e.target.value)} />
                            <button onClick={handleLogin}>Fazer login</button>
                        </div>
                    </div>
                    <div className={styles.imagem}>
                        <Image
                            src="/imglogin.svg"
                            alt='imgbackgroud login'
                            width={597}
                            height={523}
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
