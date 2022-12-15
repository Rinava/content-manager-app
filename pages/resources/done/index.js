import Layout from './../../../components/Layout';
import ResourcesSection from './../../../components/ResourcesSection';
import ActiveResource from './../../../components/ActiveResource';
const ResourcesDone = ({ doneResources }) => {
  return (
    <Layout>
      {doneResources ? (
        <>
          <ActiveResource />
          <h2>Done Resources</h2>
          <ResourcesSection resources={doneResources} />
        </>
      ) : (
        <h2>Please complete a Task first</h2>
      )}
    </Layout>
  );
};

export default ResourcesDone;

export async function getServerSideProps() {
  try {
    const resData = await fetch(`${process.env.API_URL}/resources/done`);
    const data = await resData.json();

    return {
      props: {
        doneResources: data,
      },
    };
  } catch (error) {
    return {
      props: {
        doneResources: null,
      },
    };
  }
}
