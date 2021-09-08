const AboutPage = () => {
  return (
    <>
      <h1>I am Too Lazy to write something about me!</h1>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
