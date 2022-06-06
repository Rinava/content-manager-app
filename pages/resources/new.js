import Layout from '../../components/Layout';
import styles from './new.module.scss';
const ResourceCreate = () => {
  return (
    <Layout>
      <h2>Create new Resource </h2>
      <div className={styles.container}>
        <form action='submit' autoComplete='on' className={styles.form}>
          <label htmlFor='title' className={styles.label}>
            Title
          </label>
          <input
            className={styles.input}
            type='text'
            name='title'
            placeholder='Go to the gym'
            required
            autoFocus
          />
          <label htmlFor='description' className={styles.label}>
            Description
          </label>
          <textarea
            className={styles.textarea}
            name='description'
            placeholder='Do cardio'></textarea>
          <label htmlFor='link' className={styles.label}>
            Link
          </label>
          <input
            className={styles.input}
            type='text'
            name='link'
            placeholder='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            required
            pattern='^(https?://)?([a-zA-Z0-9]([a-zA-ZäöüÄÖÜ0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$'
          />
          <div className={styles.numbers_container}>
            <p>
              <label htmlFor='priority' className={styles.label}>
                Priority
              </label>
              <select name='priority' id='priority' className={styles.select}>
                <option value='1' className={styles.option} >
                  1
                </option>
                <option value='2' className={styles.option}>
                  2
                </option>
                <option value='3' className={styles.option}>
                  3
                </option>
              </select>
            </p>

            <p>
              <label htmlFor='time' className={styles.label}>
                Time to finish
              </label>
              <input
                className={styles.time}
                type='time'
                name='time'
                value={'00:20'}
                required
              />
            </p>
          </div>

          <button className={styles.button}>Save</button>
        </form>
      </div>
    </Layout>
  );
};

export default ResourceCreate;
