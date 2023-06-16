import Head from "next/head";

const Seo: React.FC = () => {
  return (
    <Head>
      <title>SPŠT Knižnica</title>
      <link
        rel="icon"
        href="https://www.spsbj.sk/wp-content/uploads/white-e1613722421883.png"
      />
      <meta charSet="utf-8" />
      <meta name="description" content="SPŠT Knižnica" />
      <meta name="author" content="Peter Dinis" />
      <meta
        name="keywords"
        content="SPŠT Knižnica, knižnica, kniznica, spst, spšt"
      />
    </Head>
  );
};

export default Seo;
