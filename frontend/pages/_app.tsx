import '../styles/globals.css'
import type {AppProps} from 'next/app'

import type {ConfigOptions} from '@web3modal/react'
import {Web3Modal} from '@web3modal/react'
import {GlobalStyles} from "../styles/global.styled";
import {theme} from "../styles/theme.styled";
import {ThemeProvider} from "styled-components";


import { chains, providers } from '@web3modal/ethereum';
import {HeaderLayout} from "../src/components/layout/HeaderLayout/Header.layout";

const config: ConfigOptions = {
    projectId: 'b08b940279a402deb35485e65e2a76b6',
    theme: 'dark',
    accentColor: 'default',
    ethereum: {
        appName: 'web3Modal',
        chains: [chains.polygonMumbai],
        providers: [
            providers.alchemyProvider({ apiKey: process.env.ALCHEMY_URL }),
            providers.publicProvider()
          ]
    }
}

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles/>
                <HeaderLayout/>
                <Component {...pageProps} />
            </ThemeProvider>
            <Web3Modal config={config}/>
        </>
    )

}

export default MyApp
