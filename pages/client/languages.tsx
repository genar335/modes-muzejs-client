import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/languagelayout";

function Languages() {
  // how to go back to admin?

  const flagStyle = {
    //this can't be the way to do this
    width: "10rem",
    margin: "1rem 1rem 1rem 1rem",
  };

  return (
    <>
      <Layout>
        <Head>Language Selection</Head>
        <h2>Language Selection</h2>
        <div className="langContainer">
          <Link href="">
            <a>
              <img
                src="https://cdn.countryflags.com/thumbs/russia/flag-round-250.png"
                alt="rus"
                className="flag"
                style={flagStyle}
              />
            </a>
          </Link>
          <Link href="">
            <a>
              <img
                src="https://cdn.countryflags.com/thumbs/latvia/flag-round-250.png"
                alt="lv"
                className="flag"
                style={flagStyle}
              />
            </a>
          </Link>
          <Link href="">
            <a>
              <img
                src="https://cdn.countryflags.com/thumbs/united-kingdom/flag-round-250.png"
                alt="eng"
                className="flag"
                style={flagStyle}
              ></img>
            </a>
          </Link>
        </div>
      </Layout>
    </>
  );
}

export default Languages;
