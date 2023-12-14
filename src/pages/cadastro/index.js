import { useAuth } from '@/app/context/auth'
import styles from './cadastro.module.css'
import Image from 'next/image'
import { useState } from 'react'

const Cadastro = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const { register } = useAuth()

    const handleCadastro = async () => {
        try {
            const userData = await register(nome, email, senha);
            console.log('Cadastro bem-sucedido. Usuário', userData);
            alert('Sucesso ao cadastrar usuário.'); 
            localStorage.setItem('user', JSON.stringify(
                userData,
            ))
            localStorage.setItem('authenticated', "estaAutenticado")
        } catch (error) {
            console.error('Erro ao cadastrar usuário', error);
            alert('Erro ao cadastrar usuário. Por favor, tente novamente.'); 
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.form}>
                    <div className={styles.box_interno}>
                        <div className={styles.inputs}>
                            <h2>Cadastro</h2>
                            <input className={styles.inputCadastro} type='text' placeholder='Digite seu nome...' value={nome} onChange={(e) => setNome(e.target.value)} />
                            <input className={styles.inputCadastro} type='email' placeholder='Digite seu e-mail...' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input className={styles.inputCadastro} type='password' placeholder='Digite sua senha...' value={senha} onChange={(e) => setSenha(e.target.value)} />
                            <button onClick={handleCadastro}>Fazer cadastro</button>
                        </div>
                    </div>
                    <div className={styles.imagem}>
                        <Image
                            src="/imgcadastro.svg"
                            alt='imgbackgroud cadastro'
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

export default Cadastro