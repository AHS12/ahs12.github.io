import styles from '../styles/ContactCode.module.css';

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;website:{' '}
        <a href="https://ahs12.github.io" target="_blank" rel="noopener">
          https://ahs12.github.io
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;email:{' '}
        <a
          href="mailto:mdazizulhakim.cse@gmail.com"
          target="_blank"
          rel="noopener"
        >
          mdazizulhakim.cse@gmail.com
        </a>
        ;
      </p>
      {/* <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;email:{' '}
        <a
          href="mailto:azizul.hakim@coderslab.com.bd"
          target="_blank"
          rel="noopener"
        >
          azizul.hakim@coderslab.com.bd
        </a>
        ;
      </p> */}
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;github:{' '}
        <a href="https://github.com/AHS12" target="_blank" rel="noopener">
          AHS12
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;linkedin:{' '}
        <a
          href="https://www.linkedin.com/in/md-azizul-hakim-cse/"
          target="_blank"
          rel="noopener"
        >
          MD AZIZUL HAKIM
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;twitter:{' '}
        <a
          href="https://twitter.com/mdazizulhakim77"
          target="_blank"
          rel="noopener"
        >
          mdazizulhakim77
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;facebook:{' '}
        <a
          href="https://www.facebook.com/mdazizul.hakim.14"
          target="_blank"
          rel="noopener"
        >
          MD AZIZUL HAKIM
        </a>
        ;
      </p>
      
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
