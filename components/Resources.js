const Resources = ({ resources, highlight }) => {
  return (
    <>
      {resources.map((resource) => {
        const { id, title, description, image, imageDesc, createdAt } =
          resource;
        return (
          <div key={id} className='hero-content-item'>
            <time>{createdAt}</time>
            <h2>{title}</h2>
            <img src={image} alt={imageDesc} />
            <p>{description}</p>
            {!highlight && <button>Read More</button>}
          </div>
        );
      })}
    </>
  );
};

export default Resources;
