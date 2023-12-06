import Image from 'next/image'
import styles from './navbar.module.css'

export default function Navbar(){
    return (
        <div className={styles.container}>
            <Image
                src="/logo.svg"
                alt='logo easy trade'
                width={133}
                height={72}
                property
                />
                <Image
                src="/menu_hamburg.svg"
                alt='menu hamburg'
                width={16}
                height={12}
                priority/>
        </div>
    )
}