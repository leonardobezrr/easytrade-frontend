import Botao from '../botao'
import styles from './hero.module.css'
import Link from 'next/link'

export default function Hero() {
    return (
        <div className={styles.mainhero}>
            <div className={styles.hero}>
                <section className={styles.title}>
                    <h1>EasyTrade</h1>
                    <p>Potencialize Seus Lucros: Simplificando o Gerenciamento de Vendas com Nosso Sistema Integrado</p>
                </section>
                <section className={styles.txtlogin}>
                    <p>Desbloqueie o potencial do seu negócio com um único clique. Faça login agora e impulsione suas vendas para o próximo nível!</p>
                    <Botao>
                        <Link href="/login">
                            Login
                        </Link>
                    </Botao>
                    <Botao>
                        <Link href="/cadastro">
                            Cadastro
                        </Link>
                    </Botao>
                </section>
            </div>
        </div>
    )
}