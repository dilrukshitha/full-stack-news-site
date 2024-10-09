import MainArticle from '../components/MainArticle';
import NewsCard from '../components/NewsCard';
import Sidebar from '../components/Sidebar';

const HomePage = () => {
  return (
    <div className="container mx-auto p-4 grid grid-cols-4 gap-4">
      <div className="col-span-3">
        <MainArticle title="Main Article" image="path/to/image.jpg" content="Article content here..." />
        <div className="grid grid-cols-3 gap-4 mt-4">
          <NewsCard title="Article 1" image="path/to/image.jpg" description="Description 1" />
          <NewsCard title="Article 2" image="path/to/image.jpg" description="Description 2" />
          <NewsCard title="Article 3" image="path/to/image.jpg" description="Description 3" />
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default HomePage;
