import { useEffect, useState } from 'react';
import ActionButtons from '../ActionButtons';
import styles from './styles.module.scss';

const ActiveResource = () => {
  const [activeResource, setActiveResource] = useState(null);
  const { id, title, description, link, timeToFinish } = activeResource || {};

  useEffect(() => {
    const fetchActiveResource = async () => {
      const response = await fetch('/api/active-resource');
      const data = await response.json();
      setActiveResource(data);
    };
    fetchActiveResource();
  }, []);

  const desactivateResource = () => {
    fetch(`/api/resources`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'PUT',
      body: JSON.stringify({ ...activeResource, active: false }),
    });
    setActiveResource(null);
  };
  
  return (
    <>
      {activeResource && (
        <div className={styles.active_resource}>
          <button onClick={desactivateResource}>Cancel</button>
          <h2 className={styles.title}>Active Resource</h2>
          <div className={styles.resource}>
            <ActionButtons id={id} />
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link}>{link}</a>
          </div>
          <h3>Time Left</h3>
          <p>{timeToFinish} hours</p>
          <button>Reset</button>
        </div>
      )}
    </>
  );
};

export default ActiveResource;
