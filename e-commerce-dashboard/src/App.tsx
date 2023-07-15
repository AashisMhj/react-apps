import { Container, Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { ProductsPage, LoadingPage, ErrorPage, ProductDetailPage } from './pages';
import NavBar from './Navbar';
function App() {

  return (
    <>
      <NavBar />
      <Container >
        <Box margin={2}>

          <Routes >
            <Route path='/' element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/loading" element={<LoadingPage />} />
            <Route path="/error" element={<ErrorPage />} />
          </Routes>
        </Box>
      </Container>
    </>
  )
}

export default App
