import React from "react";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListPage from './pages/List.page';
import BookDetail from './pages/Detail.page';
import SuccessPage from "./pages/Success.page";
import MainLayout from "./layouts/main.layout";


function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
