import Newsletter from '../components/Newsletter';
import ResourceHighlight from '../components/ResourceHighlight';
import ResourceList from '../components/ResourceList';
import Layout from '../components/Layout';
export default function Home() {
  return (
    <Layout>
      <Newsletter />
      <ResourceHighlight />
      <ResourceList />
    </Layout>
  );
}
