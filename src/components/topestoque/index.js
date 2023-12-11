import style from "./top.module.css"
import BotaoEstoque from "../botaoestoque/botaoestoque"
import Image from "next/image"

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
                <BotaoEstoque>Criar</BotaoEstoque>
                <BotaoEstoque>Editar</BotaoEstoque>
            </div>
        </section>
    )
}