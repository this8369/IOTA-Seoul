import React from 'react';
import Header from './components/Header';
import MainLayout from './components/MainLayout';
import NewsList from './components/NewsList';
import NewsDetail from './components/NewsDetail';
import { newsData } from './data/newsData';
import { useAnimations } from './hooks/useAnimations';
import { useLanguage } from './context/LanguageContext';

export default function App() {
  const [currentPage, setCurrentPage] = React.useState('home'); // 'home', 'news', 'news_detail'

  useAnimations(currentPage);
  const [selectedArticle, setSelectedArticle] = React.useState(null);

  React.useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash;

      if (hash === '#news') {
        setCurrentPage('news');
        setSelectedArticle(null);
      } else if (hash.startsWith('#news-detail-')) {
        const id = parseInt(hash.replace('#news-detail-', ''), 10);
        const article = newsData.find((a) => a.id === id);
        if (article) {
          setCurrentPage('news_detail');
          setSelectedArticle(article);
        } else {
          setCurrentPage('news');
        }
      } else {
        setCurrentPage('home');

        let targetId = hash === '#' || hash === '#top' || hash === '' ? 'top' : hash.substring(1);
        let checkCount = 0;
        const checkInterval = setInterval(() => {
          const target = targetId === 'top' ? document.getElementById('scroll-container') : document.getElementById(targetId);
          checkCount++;
          if (target || checkCount > 50) {
            clearInterval(checkInterval);
            if (targetId === 'top') {
              window.scrollTo({ top: 0, behavior: 'instant' });
            } else if (target) {
              target.scrollIntoView({ behavior: 'instant', block: 'start' });
            }
          }
        }, 50);
      }
    };

    window.addEventListener('popstate', handlePopState);

    // Initial load handling
    if (window.location.hash) {
      handlePopState();
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

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
    window.history.pushState(null, '', `#news-detail-${article.id}`);
  };

  const handleBackToOptions = () => {
    setCurrentPage('news');
    window.history.pushState(null, '', '#news');
  };

  const handleNavigateToHome = () => {
    setCurrentPage('home');
    window.history.pushState(null, '', window.location.pathname);
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
