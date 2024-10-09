const NewsCard = ({ title, image, description }) => {
    return (
      <div className="border p-4 shadow-md">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        <h2 className="text-lg font-bold mt-2">{title}</h2>
        <p>{description}</p>
      </div>
    );
  };
  
  export default NewsCard;
  