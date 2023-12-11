import style from './estoque.module.css'
import Top from '../topestoque'
import Detalhes from '../detalhesestoque'
import Tabela from '../tabelaestoque'


export default function Estoque(){
    return(
        <div className={style.table}>
            <Top />
            <Detalhes />
            <Tabela />
            
            <section className={style.tabela}>

            </section>
        </div>
    )
}