import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {ConnectButton} from "@web3modal/react";
import {HeaderLayout} from "../src/components/layout/HeaderLayout/Header.layout";
import {IndexMainSection} from "../src/components/templates/IndexMainSection/IndexMain.section";

const Home: NextPage = () => {
    return (
            <IndexMainSection/>
    )
}

export default Home
