import style from "./top.module.css"
import BotaoEstoque from "../botaoestoque/botaoestoque"
import Image from "next/image"
import Link from "next/link"

export default function Top(){
    return(
        <section className={style.top}>
            <Image
            src="/menubuttom.svg"
            alt='menubuttom'
            width={24}
            height={22.9}
            priority/>
            <h2 className={style.title}>Estoque:</h2>
            <div className={style.but}>
                <BotaoEstoque>
                    <Link href="/cadastrarproduto">Cadastrar novo produto</Link>
                </BotaoEstoque>
            </div>
        </section>
    )
}