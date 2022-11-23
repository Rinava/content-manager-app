import styles from './styles.module.scss';
const Newsletter = () => {
  return (
    <div className={styles.newsletter}>
      <h2 className={styles.title}>Newsletter</h2>
      <p className={styles.description}>
        Sign up for our newsletter to get the latest news and updates.
      </p>
      <form className={styles.form}>
        <input
          className={styles.email}
          type='email'
          placeholder='example@example.com'
        />
        <button className={styles.subscribe}>Subscribe</button>
      </form>
    </div>
  );
};
export default Newsletter;
