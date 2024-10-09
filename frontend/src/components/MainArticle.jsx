const MainArticle = ({ title, image, content }) => {
    return (
      <div className="bg-white p-6 shadow-lg">
        <img src={image} alt={title} className="w-full h-60 object-cover" />
        <h1 className="text-2xl font-bold mt-4">{title}</h1>
        <p>{content}</p>
      </div>
    );
  };
  
  export default MainArticle;
  