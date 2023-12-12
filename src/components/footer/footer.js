import Image from 'next/image'
import styles from './footer.module.css'

export default function Footer(){
    return(
        <div className={styles.footer}>
            <Image className={styles.easy}
                src="/easy.svg"
                alt='logo easy'
                width={330.05}
                height={194.52}
                priority
            />
        </div>
    )
}