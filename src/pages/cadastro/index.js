import styles from './cadastro.module.css'
import CampoTexto from '@/components/campotexto/campo'
import Image from 'next/image'
import { useState } from 'react'

const Cadastro = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleCadastro = async () => {
        const url = 'https://easytrade-backend-p5k1.onrender.com/usuarios/criar'

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome: nome,
                    email: email,
                    senha: senha
                }),
            })

            if (response.ok) {
                console.log("cadastro bem sucedido")
            } else {
                console.error("falha no cadastro")
            }
        } catch (error) {
            console.error("erro ao fazer cadastro", error)
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.form}>
                    <div className={styles.box_interno}>
                        <div className={styles.inputs}>
                            <h2>Cadastro</h2>
                            <CampoTexto
                            prior={true}
                            type= "Text"
                            placeholder="Digite seu nome..."
                            valor={nome}
                            aoAlterado={valor => setNome(valor)}/>
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