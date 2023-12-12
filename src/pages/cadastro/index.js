import styles from './cadastro.module.css'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router';

const Cadastro = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleCadastro = async () => {
        try {
            const userData = await register(nome, email, senha);
            console.log('Login bem-sucedido. Nome do usuário:', userData);
        } catch (error) {
            console.error('Erro ao fazer login', error);
        }
    };

    return(
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.form}>
                    <div className={styles.box_interno}>
                        <div className={styles.inputs}>
                            <h2>Cadastro</h2>
                            <input className={styles.inputCadastro} type='text' placeholder='Digite seu nome...' value={nome} onChange={(e) => setNome(e.target.value)}/>
                            <input className={styles.inputCadastro} type='email' placeholder='Digite seu e-mail...' value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <input className={styles.inputCadastro} type='password' placeholder='Digite sua senha...' value={senha} onChange={(e) => setSenha(e.target.value)}/>
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