import style from "./detalhes.module.css"
import Image from "next/image"

export default function Detalhes(){
    return(
        <section className={style.detalhes}>
                <div className={style.infos}>
                    <div className={style.cards}>
                        <div className={style.card}>
                            <p className={style.titlecard}>Item:</p>
                            <p className={style.pdesc}>Lorem ipsun</p>
                        </div>
                        <div className={style.card}>
                            <p className={style.titlecard}>Quantidade°:</p>
                            <p className={style.pdesc}>40</p>
                        </div>
                        <div className={style.card}>
                            <p className={style.titlecard}>Descrição:</p>
                            <p className={style.pdesc}>Cerveja</p>
                        </div>
                        <div className={style.card}>
                            <p className={style.titlecard}>Preço:</p>
                            <p className={style.pdesc}>R$59,90</p>
                        </div>
                        <div className={style.card}>
                            <p className={style.titlecard}>ID:</p>
                            <p className={style.pdesc}>01</p>
                        </div>
                    </div>
                    <div className={style.pesquisa}>
                        <p>Pesquisar:</p>
                        <Image
                        src="/pesquisa.svg"
                        alt="shape pesquisa"
                        width={13.53}
                        height={13.67}
                        priority
                        />
                    </div>
                </div>
                <div className={style.filtros}>
                    <h3 className={style.h3}>Filtros:</h3>
                    <div className={style.typefiltro}>
                        <div>
                            <p className={style.pfiltros}>item</p>
                        </div>
                        <div>
                            <p className={style.pfiltros}>quantidade</p>
                        </div>
                        <div>
                            <p className={style.pfiltros}>preço</p>
                        </div>
                    </div>
                </div>
            </section>
    )
}