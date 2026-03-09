import React from 'react';
import Header from './components/Header';
import MainLayout from './components/MainLayout';
import NewsList from './components/NewsList';
import NewsDetail from './components/NewsDetail';
import { useAnimations } from './hooks/useAnimations';

export default function App() {
  const [currentPage, setCurrentPage] = React.useState('home'); // 'home', 'news', 'news_detail'

  useAnimations(currentPage);
  const [selectedArticle, setSelectedArticle] = React.useState(null);

  React.useEffect(() => {
    window.isNewsPage = currentPage !== 'home';
  }, [currentPage]);

  const handleNavigateToNews = () => {
    setCurrentPage('news');
    setSelectedArticle(null);
  };

  const handleSelectArticle = (article) => {
    setSelectedArticle(article);
    setCurrentPage('news_detail');
  };

  const handleBackToOptions = () => {
    setCurrentPage('news');
  };

  const handleNavigateToHome = () => {
    setCurrentPage('home');
  };

  return (
    <div className="scroll-container font-sans" id="scroll-container">
      <Header onNavigateToNews={handleNavigateToNews} onNavigateToHome={handleNavigateToHome} currentPage={currentPage} />

      {currentPage === 'home' && <MainLayout />}

      {currentPage === 'news' && (
        <NewsList onSelectArticle={handleSelectArticle} />
      )}

      {currentPage === 'news_detail' && (
        <NewsDetail article={selectedArticle} onBack={handleBackToOptions} />
      )}
    </div>
  );
}
