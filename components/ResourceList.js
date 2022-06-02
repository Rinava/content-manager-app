import Resources from './Resources';
const ResourceList = ({ resources }) => {
  return (
    <section className='hero'>
      <div className='hero-content'>
        <Resources resources={resources} />
      </div>
    </section>
  );
};
export default ResourceList;
