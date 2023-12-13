import style from "./lista.module.css"

const ListaSuspensa = (props) => {
    return(
        <div>
            <label className={style.label}>{props.label}</label>
            <select className={style.select} onChange={evento => props.aoAlterado(evento.target.value)} required={props.prior} value={props.value}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa