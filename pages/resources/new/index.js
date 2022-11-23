import Layout from './../../../components/Layout';
import styles from './styles.module.scss';
import { useState, useEffect } from 'react';

const defaultForm = {
  title: '',
  description: '',
  link: '',
  priority: 'Low',
  timeToFinish: '00:20',
};

const ResourceCreate = () => {
  const [form, setForm] = useState(defaultForm);

  const submitForm = (e) => {
    e.preventDefault();
    fetch('/api/resources', {
      body: JSON.stringify(form),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })
      .then((response) => console.log(response?.data))
      .catch((error) => alert('Error during the creation of the resource'));
  };
  // TODO when the response is ok show a message and clear the form, when the response is not ok show an error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    console.log(form);
  }, [form]);

  //TODO add image too
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
            maxLength={80}
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
            maxLength={800}
            onChange={handleChange}></textarea>
          <label htmlFor='link' className={styles.label}>
            Link
          </label>
          {/* TODO correct the validation for youtube */}
          <input
            className={styles.input}
            type='text'
            name='link'
            placeholder='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
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
                <option value='Low' className={styles.option}>
                  Low
                </option>
                <option value='Medium' className={styles.option}>
                  Medium
                </option>
                <option value='High' className={styles.option}>
                  High
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
                name='timeToFinish'
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
