import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HeroPage from './pages/heroPage/HeroPage';
import LanguageWrapper from './layouts/LanguageWrapper';


function App() {

  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to="/en" />} />
      <Route path='/:lang' element={<LanguageWrapper />} >
        <Route index element={<HeroPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
