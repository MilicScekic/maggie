import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout({title, keywords, description, children}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content={keywords} />
                <meta name="description" content={description} />
                <meta name="theme-color" content="#57cc99" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/favicon.ico"></link>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <main className="container">{children}</main>
            <Footer/>
        </div>
    )
}

Layout.defaultProps = {
    title: 'Maggie - Blog website related to dogs',
    keywords: 'dogs, dog care, pets, animals',
    description: 'Maggie is an extraordinarily fast easy to use blog website where you can find guidelines for training your dog.'
}