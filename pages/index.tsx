import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {ConnectButton} from "@web3modal/react";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <ConnectButton />
    </div>
  )
}

export default Home
