import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './hooks/useLanguage';
import { Header } from './components/layout/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { CouplesTherapyPage } from './pages/CouplesTherapyPage';
import { IndividualTherapyPage } from './pages/IndividualTherapyPage';
import { IntimacySexualityPage } from './pages/IntimacySexualityPage';
import { ArticlesListPage } from './pages/ArticlesListPage';
import { ArticlePage } from './pages/ArticlePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  return (
    <LanguageProvider>
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-therapy-sand-50 flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/poru-terapija" element={<CouplesTherapyPage />} />
            <Route path="/individuali-terapija" element={<IndividualTherapyPage />} />
            <Route path="/artumas-ir-seksualumas" element={<IntimacySexualityPage />} />
            <Route path="/tekstai" element={<ArticlesListPage />} />
            <Route path="/tekstai/:slug" element={<ArticlePage />} />
            <Route path="/apie-mane" element={<AboutPage />} />
            <Route path="/kontaktai" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
