import Resources from './Resources';
const ResourceHighlight = ({ resources }) => {
  return (
    <section className='hero'>
      <div className='hero-content'>
        <section className='resource-highlight'>
          <div className='resource-highlight-content'>
            <Resources resources={resources} highlight/>
          </div>
        </section>
      </div>
    </section>
  );
};
export default ResourceHighlight;
