import styles from './campo.module.css'

const CampoTexto = (props) => {
    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className={styles.formulario}>
            <label>
                {props.label}
                <imput value={props.valor} onChange={aoDigitar} required={props.prior} placeholder={props.placeholder}/>
            </label>
        </div>
    )
}

export default CampoTexto