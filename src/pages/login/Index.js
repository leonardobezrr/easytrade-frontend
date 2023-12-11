import styles from './login.module.css'
import CampoTexto from '@/components/campotexto/campo'
import Image from 'next/image'
import { useState } from 'react'

export default function Login(){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleCadastro = async () => {
        const url = 'https://easytrade-backend-p5k1.onrender.com/login'

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    senha: senha
                }),
            })

            if (response.ok) {
                console.log("login bem sucedido")
            } else {
                console.error("falha no login")
            }
        } catch (error) {
            console.error("erro ao fazer login", error)
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.form}>
                    <div className={styles.box_interno}>
                        <div className={styles.inputs}>
                            <h2>Login</h2>
                            <CampoTexto
                            prior={true}
                            type= "Text"
                            placeholder="Digite seu email..."
                            valor={email}
                            aoAlterado={valor => setEmail(valor)}/>
                            <CampoTexto
                            prior={true}
                            type="password"
                            placeholder="Digite sua senha..."
                            valor={senha}
                            aoAlterado={valor => setSenha(valor)}/>
                            <button onClick={handleCadastro}>Fazer cadastro</button>
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
