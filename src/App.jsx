import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/layout'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'
import ProductPage from './pages/productPage'
import WishlistPage from './pages/WishList'
import { Navigate } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='/category/:categoryName' element={<CategoryPage />}/>
          <Route path='/product' element={<ProductPage />}/>
          <Route path='whishlist' element={<WishlistPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
