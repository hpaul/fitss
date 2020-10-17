import Link from "next/link"

import styles from "./Layout.module.css"

export default function Layout({ children }) {

  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Paul H.
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>Bits of a human</code>
        </p>

        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link href="/about">
              About
            </Link>
          </li>
        </ul>

        {children}

      </main>

      <footer className={styles.footer}>
        <div>
          <a
            href="https://fitss.ro"
            target="_blank"
            rel="noopener noreferrer"
          >
            Copyrights © 2020  
            <img src="/logo.png" width="30" alt="Fitss" className={styles.logo} />
          </a>
        </div>
        <div>
          <a href="mailto:paul@fitss.ro">paul@fitss.ro</a>
        </div>  
      </footer>
    </div>
  )
}