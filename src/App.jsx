import React from 'react';
import Header from './components/Header';
import MainLayout from './components/MainLayout';
import NewsList from './components/NewsList';
import NewsDetail from './components/NewsDetail';
import { useAnimations } from './hooks/useAnimations';
import { useLanguage } from './context/LanguageContext';

export default function App() {
  const [currentPage, setCurrentPage] = React.useState('home'); // 'home', 'news', 'news_detail'

  useAnimations(currentPage);
  const [selectedArticle, setSelectedArticle] = React.useState(null);

  React.useEffect(() => {
    window.isNewsPage = currentPage !== 'home';
  }, [currentPage]);

  const { lang } = useLanguage();

  React.useEffect(() => {
    // Re-apply language translations when page changes
    const applyLanguage = () => {
      const krTargetTexts = document.querySelectorAll(".kr-target-text");
      const enOnlyTexts = document.querySelectorAll(".en-only-text");
      const dualTexts = document.querySelectorAll("[data-en][data-kr]");

      dualTexts.forEach(el => {
        el.innerHTML = el.getAttribute(`data-${lang}`);
      });

      if (lang === 'kr') {
        krTargetTexts.forEach(el => {
          el.classList.add('font-normal');
          el.classList.remove('font-light');
        });
        enOnlyTexts.forEach(el => {
          el.style.display = 'none';
        });
      } else {
        krTargetTexts.forEach(el => {
          el.classList.add('font-light');
          el.classList.remove('font-normal');
        });
        enOnlyTexts.forEach(el => {
          el.style.display = 'block';
        });
      }
    };

    // Slight delay to ensure DOM is rendered after page change
    setTimeout(applyLanguage, 50);
  }, [currentPage, lang]);

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
