import ResourceHighlight from '../components/ResourceHighlight/ResourceHighlight';
import Layout from '../components/Layout';
import ResourcesSection from '../components/ResourcesSection';

export default function Home({ resources }) {
  return (
    <Layout>
      <ResourceHighlight resources={resources.slice(0, 2)} />
      <ResourcesSection resources={resources.slice(2)} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const resData = await fetch('http:/localhost:3001/api/resources');
  const data = await resData.json();

  return {
    props: {
      resources: data,
    },
  };
}
