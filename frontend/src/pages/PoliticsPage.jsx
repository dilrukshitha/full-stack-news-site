import React, { useEffect, useState } from 'react';
import NewsCard from '../components/NewsCard';
import newsApi from '../services/newsApi';

const PoliticsPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch politics news using the API
    newsApi.getNewsByCategory('politics')
      .then((response) => {
        setArticles(response);
      })
      .catch((error) => {
        console.error('Error fetching politics news:', error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Politics News</h1>
      <div className="grid grid-cols-3 gap-6">
        {articles.map((article, index) => (
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

export default PoliticsPage;
