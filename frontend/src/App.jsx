import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Skills from './pages/Skills'
import SkillDetail from './pages/SkillDetail'
import Forum from './pages/Forum'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/skills/:id" element={<SkillDetail />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
