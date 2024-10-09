import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-blue-800 p-4 text-white">
      <nav className="flex justify-between">
        <h1 className="text-xl font-bold">DailyScope</h1>
        <div className="flex space-x-4">
          <button onClick={() => navigate('/')} className="hover:underline">Home</button>
          <button onClick={() => navigate('/politics')} className="hover:underline">Politics</button>
          <button onClick={() => navigate('/tech')} className="hover:underline">Tech News</button>
          <button onClick={() => navigate('/sports')} className="hover:underline">Sports</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
