import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <Link href="/courses">
              <a>Courses</a>
          </Link>
      </main>

      <footer className={styles.footer}>
        <h1>Evrim Uysal Task</h1>

      </footer>
    </div>
  )
}
export default Home;
