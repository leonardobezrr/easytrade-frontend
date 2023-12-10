import styles from './cadastro.module.css'
import CampoTexto from '@/components/campotexto/campo'
import Botao from '@/components/botao'
import Image from 'next/image'
import { useState } from 'react'

const Cadastro = () => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    
    
    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log('Form foi submetido =>', nome, email, senha)
    }

    return(
        <section>
            <form>
                <h2>Cadastro</h2>
                <div className={styles.box-interno}>
                    <CampoTexto 
                    prior={true} 
                    label="Nome" 
                    placeholder="Digite seu nome..."
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}/>
                    <CampoTexto 
                    prior={true} 
                    label="Email" 
                    placeholder="Digite seu email..."
                    valor={email}
                    aoAlterado={valor => setEmail(valor)}/>
                    <CampoTexto 
                    prior={true} 
                    label="Senha" 
                    placeholder="Digite sua senha..."
                    valor={senha}
                    aoAlterado={valor => setSenha(valor)}/>
                    <Botao>Enviar</Botao>
                </div>
                <Image
                src="/imgcadastro.svg"
                alt='imgbackgroud cadastro'
                width={508}
                height={523}
                />
            </form>
        </section>
    )
}