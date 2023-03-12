import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Head from 'next/head'

export default function App({Component, pageProps}: AppProps) {
    return <>
        <Head>
            <title>RapidMobil | Mobila la comanda</title>
            <meta name="keywords" content="Mobilă la comandă, Mobilă personalizată, Design interior, Mobilă de lux, Mobila din lemn, Mobilă pentru bucătărie, Mobilă pentru living, Mobilă pentru birou, Mobilă pentru dormitor, Comandă mobilă online, Mobilă pentru copii, Mobilă pentru bucatarie, bucatarie la comanda , dormitor la comanda, mobila la comanda md, mobila la comanda in moldova , dormitor la comanda , dormitor , rapidmobil, rapidmobil mobila la comanda, rapidmobil web site mobila la comanda, mobila la comanda chisinau"/>
            <meta name="description" content="RapidMobil | Mobila la comanda"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/icon-rapid-mobil.ico"/>
            <link rel="manifest" href="/manifest.json" />
            <link rel="apple-touch-icon" href="/icon.png" />
        </Head>
        <Component {...pageProps} />
    </>
}
