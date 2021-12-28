const AboutPage = () => {
  return (
    <>
      {/* <h1>I am Too Lazy to write something about me!</h1> */}
      <h2>I am a programmer who wants to utilize his Skill and Knowledge and enrich my domain of knowledge.</h2>
      <br />
      <h3>I will be more than happy to help someone with my skillsets.</h3>

      <br />
      <p>Industry experienced Full Stack Developer & Video Game Developer specialized in PHP & Laravel Framework,Javascript,Jquery & React, C++ & Unreal Engine.</p>
      <br />

      <p>Also experienced in Git & Github/Gitlab, VPS server, Apache & Nginx, Various App Deployment.</p>
      <br />
      <h3>Always love facing challenges and solving them.</h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
