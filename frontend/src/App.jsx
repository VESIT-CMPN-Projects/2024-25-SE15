import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Skills from './pages/Skills';
import SkillDetail from './pages/SkillDetail';
import Forum from './pages/Forum';
import Login from './pages/Login';
import Register from './pages/Register';
import Support from './pages/Support';
import { LanguageProvider } from './contexts/LanguageContext';

// Loading spinner for Suspense fallback
const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <Suspense fallback={<LoadingSpinner />}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/skills/:id" element={<SkillDetail />} />
              <Route path="/forum" element={<Forum />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/support" element={<Support />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Suspense>
    </LanguageProvider>
  );
}

export default App;
