import style from "./tabelaest.module.css"

export default function Tabela(){
    return(
        <div className={style.head}>
            <section className={style.tabela}>
                <div className={style.titles}>
                    <div className={style.tit}>
                        <h3 className={style.h3}>Item:</h3>
                    </div>
                    <p className={style.p}>Lorem Ipsum</p>
                </div>
                <div className={style.titles}>
                    <div className={style.tit}>
                        <h3 className={style.h3}>Quantidade</h3>
                    </div>
                    <p className={style.p}>Lorem Ipsum</p>
                </div>
                <div className={style.titles}>
                    <div className={style.tit}>
                        <h3 className={style.h3}>Descrição:</h3>
                    </div>
                    <p className={style.p}>Lorem Ipsum</p>
                </div>
                <div className={style.titles}>
                    <div className={style.tit}>
                        <h3 className={style.h3}>Preço:</h3>
                    </div>
                    <p className={style.p}>Lorem Ipsum</p>
                </div>
                <div className={style.titles}>
                    <div className={style.tit}>
                        <h3 className={style.h3}>Id°:</h3>
                    </div>
                    <p className={style.p}>Lorem Ipsum</p>
                </div>
            </section>
        </div>
    )
}
