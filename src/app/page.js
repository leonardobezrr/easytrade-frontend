import styles from './page.module.css'
import Navbar from '../components/navbar/navbar'
import Hero from '@/components/hero/hero'
import Footer from '@/components/footer/footer'



export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <Footer />
    </main>
  )
}
