import Layout from '../../components/Layout/Layout';
import styles from './new.module.scss';
import { useState, useEffect } from 'react';

const defaultForm = {
  title: '',
  description: '',
  url: '',
  priority: '',
  timeToFinish: '00:20',
};

const ResourceCreate = () => {
  const [form, setForm] = useState( defaultForm );

  const submitForm = () => {
    alert(JSON.stringify(form));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <Layout>
      <h2 className={styles.title}>Create new Resource </h2>
      <div className={styles.container}>
        <form
          autoComplete='on'
          action='submit'
          className={styles.form}
          onSubmit={submitForm}>
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
            value={form.title}
            onChange={handleChange}
          />
          <label htmlFor='description' className={styles.label}>
            Description
          </label>
          <textarea
            className={styles.textarea}
            name='description'
            placeholder='Do cardio'
            value={form.description}
            onChange={handleChange}></textarea>
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
            value={form.link}
            onChange={handleChange}
          />
          <div className={styles.numbers_container}>
            <p>
              <label htmlFor='priority' className={styles.label}>
                Priority
              </label>
              <select
                name='priority'
                id='priority'
                className={styles.select}
                value={form.priority}
                onChange={handleChange}>
                <option value='1' className={styles.option}>
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
                value={form.timeToFinish}
                onChange={handleChange}
                required
              />
            </p>
          </div>

          <button type='submit' className={styles.button}>
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ResourceCreate;
