import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './components/PageNotFound/PageNotFound';
import ProductsListPage from './components/SubCategory/ProductsListPage';
import ProductDetailsPage from './components/ProductDetails/ProductDetailsPage';
import CartPage from './components/Cart/CartPage';
import AdminProductsList from './components/Admin/ProductsList/AdminProductsList';
import AdminSubCategoriesList from './components/Admin/SubCategoriesList/AdminSubCategoriesList';
import AdminCategories from './components/Admin/Categories/AdminCategories';
import AdminCategoriesList from './components/Admin/Categories/CategoriesList/AdminCategoriesList';
import AdminCreateCategory from './components/Admin/Categories/CreateCategory/AdminCreateCategory';
import AdminEditCategory from './components/Admin/Categories/EditCategory/AdminEditcategory';


function App() {
  return (
    <div className="App">
      <Header />	
    <main>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/category/:categoryId" element={<ProductsListPage />} />
        <Route path="/details/:productId" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="admin/categories" element={<AdminCategories />} >
            <Route path="" element={<AdminCategoriesList />} />
            <Route path="create" element={<AdminCreateCategory />} />
            <Route path="edit/:categoryId" element={<AdminEditCategory />} />  
        </Route>
        <Route path="admin/products" element={<AdminProductsList />} />
        <Route path="admin/subcategories" element={<AdminSubCategoriesList />} />
        <Route path="/*" element={<PageNotFound />} />
        
      </Routes>
    </main>
    <Footer/>
    </div>
  );
}

export default App;
