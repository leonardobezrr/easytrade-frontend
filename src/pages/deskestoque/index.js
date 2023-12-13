import style from './estoque.module.css'
import Top from '../../components/topestoque'
import Detalhes from '../../components/detalhesestoque'
import Tabela from '../../components/tabelaestoque'


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