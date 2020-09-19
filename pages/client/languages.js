import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function Languages () {

    // how to go back to admin?

    return(
        <>
            <Layout>
                <Head>
                    Language Selection
                </Head>
                <h2>Language Selection</h2>
                <div className="langContainer">
                    <Link href="">
                        <a>
                            <img src="https://cdn.countryflags.com/thumbs/russia/flag-round-250.png" alt="rus" className="flag"></img>
                        </a>
                    </Link>
                    <Link href="">
                        <a>
                            <img src="https://cdn.countryflags.com/thumbs/latvia/flag-round-250.png" alt="lv" className="flag"></img>
                        </a>
                    </Link>
                    <Link href="">
                        <a>
                            <img src="https://cdn.countryflags.com/thumbs/united-kingdom/flag-round-250.png" alt="eng" className="flag"></img>
                        </a>
                    </Link>
                </div>
            </Layout>
        </>
    );
}