import styles from "./botao.module.css"

const Botao = (props) => {
    return (
        <button className={styles.botao}>
            {props.children}
        </button>
    )
}

export default Botao