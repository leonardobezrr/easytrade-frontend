import styles from './page.module.css'
import Navbar from '../components/navbar/navbar'



export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
    </main>
  )
}
