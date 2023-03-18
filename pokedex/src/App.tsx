import React from "react";
import {Routes, Route} from 'react-router-dom';
import ListPage from '@/views/ListPage';
import DetailPage from '@/views/DetailPage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<ListPage />} />
      <Route path="/info/:id" element={<DetailPage />} />
    </Routes>
  )
}

export default App
