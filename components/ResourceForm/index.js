import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import SnackBar from '../SnackBar';

const DEFAULT_FORM = {
  title: '',
  description: '',
  link: '',
  priority: 'Low',
  timeToFinish: '00:20',
};

const ResourceForm = ({ onSubmit, resourceToEdit }) => {
  const router = useRouter();
  const [form, setForm] = useState(resourceToEdit || DEFAULT_FORM);
  const [showSnackBar, setShowSnackBar] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  // TODO when the response is ok show a message , when the response is not ok show an error message
  const submitForm = (e) => {
    e.preventDefault();
    onSubmit(form);
    setShowSnackBar(true);
    if (resourceToEdit) {
      router.push('/');
    }
    setForm(DEFAULT_FORM);
  };

  return (
    <>
      <SnackBar
        message='Resource saved successfully!'
        type='success'
        show={showSnackBar}
        onClose={() => setShowSnackBar(false)}
      />
      <h2 className={styles.title}>
        {resourceToEdit ? 'Edit Resource' : 'Create New Resource'}
      </h2>
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
          <input
            className={styles.input}
            type='text'
            name='link'
            placeholder='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            pattern='[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)'
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
    </>
  );
};
export default ResourceForm;
