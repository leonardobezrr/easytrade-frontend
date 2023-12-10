import Image from 'next/image'
import styles from './footer.module.css'

export default function Footer(){
    return(
        <section>
             <Image className={styles.easy}
                src="/easy.svg"
                alt='logo easy'
                width={330.05}
                height={194.52}
            />
            <Image className={styles.foot}
                src="/footer.svg"
                alt='imgbackgroud footer'
                width={1440}
                height={347}
            />
        </section>
    )
}