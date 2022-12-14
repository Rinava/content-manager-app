import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import ActionButtons from '../ActionButtons';
import Timer from '../Timer';
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
          <Timer time={timeToFinish} />

        </div>
      )}
    </>
  );
};

export default ActiveResource;
