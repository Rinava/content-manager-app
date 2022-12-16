import styles from './styles.module.scss';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { createContext, useEffect, useState } from 'react';

export const ResourcesContext = createContext(null);

const Layout = ({ children }) => {
  const [resources, setResources] = useState(null);

  const fetchResources = async (resources) => {
    if (resources) {
      setResources(resources);
      return;
    }
    try {
      const resData = await fetch(`/api/resources`);
      const data = await resData.json();
        setResources(data);
    } catch (error) {
      setResources(null);
    }
  };

  return (
    <ResourcesContext.Provider value={{ resources, fetchResources }}>
      <div className={styles.page}>
        <Navbar />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </ResourcesContext.Provider>
  );
};

export default Layout;
