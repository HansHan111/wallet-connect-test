import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ConnectMetamask from '../components/ConnectMetamask'

export default function Home() {
  return (
    <div className={styles.container}>
      <ConnectMetamask />
    </div>
  )
}
