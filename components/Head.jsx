import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Azizul is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="azizul, azizulhakim, hakim, shovon, web developer, azizul web developer, azizul developer, full stack, azizul portfolio, AHS12, ahs12"
      />
      <meta property="og:title" content="Azizul's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building webapps that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/jD4tBYk.png" />
      <meta property="og:url" content="https://ahs12.github.io" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Azizul Hakim',
};
