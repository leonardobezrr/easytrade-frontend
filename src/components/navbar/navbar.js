import Image from 'next/image'
import styles from './navbar.module.css'

export default function Navbar(){
    return (
        <div className={styles.mainnavbar}>
            <div className={styles.logoeasy}>
                <Image
                    src="/logo.svg"
                    alt='logo easy trade'
                    width={133}
                    height={72}
                />
            </div>
            <div className='menu'>
                <Image
                    src="/menu_hamburg.svg"
                    alt='menu hamburg'
                    width={16}
                    height={12}
                />
            </div>
        </div>
    )
}