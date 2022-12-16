import Layout from '../components/Layout';
import ResourcesSection from '../components/ResourcesSection';
import ActiveResource from '../components/ActiveResource';
import { useContext, useEffect } from 'react';
import { ResourcesContext } from '../components/Layout';

export default function Home({ resources }) {
  const { resources: ctxResources, fetchResources } =
    useContext(ResourcesContext);

  useEffect(() => {
    if (!ctxResources) {
      fetchResources(resources);
    }
  }, [ctxResources, fetchResources, resources]);

  return (
    <>
      {ctxResources ? (
        <>
          <ActiveResource />
          <ResourcesSection resources={ctxResources} />
        </>
      ) : (
        <h2>Please create a resource</h2>
        // TODO make this a component  and make this work
      )}
    </>
  );
}

export async function getServerSideProps() {
  try {
    const resData = await fetch(`${process.env.API_URL}/resources`);
    const data = await resData.json();

    return {
      props: {
        resources: data,
      },
    };
  } catch (error) {
    return {
      props: {
        resources: null,
      },
    };
  }
}
