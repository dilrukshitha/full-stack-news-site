import React, { useEffect, useState } from 'react';
import NewsCard from '../components/NewsCard';
import newsApi from '../services/newsApi';

const TechPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch tech news using the API
    newsApi.getNewsByCategory('tech')
      .then((response) => {
        setArticles(response);
      })
      .catch((error) => {
        console.error('Error fetching tech news:', error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Tech News</h1>
      <div className="grid grid-cols-3 gap-6">
      {Array.isArray(articles) && articles?.map((article, index) => (
          <NewsCard 
            key={index}
            title={article.title}
            image={article.imageUrl}
            description={article.description}
          />
        ))}
      </div>
    </div>
  );
};

export default TechPage;
