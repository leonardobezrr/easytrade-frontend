import style from './botaoest.module.css'
import Image from "next/image"
const BotaoEstoque = (props) => {
    return(
        <div className={style.but}>
            <buttom>
                {props.children}
            </buttom> 
        </div>
    )
}

export default BotaoEstoque