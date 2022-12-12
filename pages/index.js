
import Layout from '../components/Layout';
import ResourcesSection from '../components/ResourcesSection';
import ActiveResource from '../components/ActiveResource';

export default function Home({ resources }) {
  return (
    <Layout>
      {resources ? (
        <>
          <ActiveResource />
          <ResourcesSection resources={resources} />
        </>
      ) : (
        <h2>Please create a resource</h2>
        // TODO make this a component
      )}
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const resData = await fetch('http:/localhost:3001/api/resources');
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
