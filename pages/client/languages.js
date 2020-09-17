import Link from 'next/link'

export default function Languages () {

    // how to go back to admin?

    return(
        <>
            <h1>Language Selection</h1>
            <div className="langContainer">
                <Link href="">
                    <a>img rus</a>
                </Link>
                <Link href="">
                    <a>img lv</a>
                </Link>
                <Link href="">
                    <a>img eng</a>
                </Link>
            </div>
        </>
    );
}