import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
//
import LanguageWrapper from './layouts/LanguageWrapper';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';


function App() {

  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to="/en" />} />
      <Route path='/:lang' element={<LanguageWrapper ><MainLayout /></LanguageWrapper>} >
        <Route index element={<HomePage />} />
      </Route>
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
}

export default App
