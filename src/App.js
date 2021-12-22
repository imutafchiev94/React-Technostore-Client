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
import AdminProductsList from './components/Admin/Products/ProductsList/AdminProductsList';
import AdminSubCategoriesList from './components/Admin/SubCategories/SubCategoriesList/AdminSubCategoriesList';
import AdminCategories from './components/Admin/Categories/AdminCategories';
import AdminCategoriesList from './components/Admin/Categories/CategoriesList/AdminCategoriesList';
import AdminCreateCategory from './components/Admin/Categories/CreateCategory/AdminCreateCategory';
import AdminEditCategory from './components/Admin/Categories/EditCategory/AdminEditcategory';
import AdminProducts from './components/Admin/Products/AdminProducts';
import AdminProductCreate from './components/Admin/Products/ProductCreate/AdminProductCreate';
import AdminProductEdit from './components/Admin/Products/ProductEdit/AdminProductEdit';
import AdminSubCategories from './components/Admin/SubCategories/AdminSubCategories';
import AdminSubCategoryCreate from './components/Admin/SubCategories/SubCategoryCreate/AdminSubCategoryCreate';
import AdminSubCategoryEdit from './components/Admin/SubCategories/SubCategoryEdit/AdminSubCategoryEdit';


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
        <Route path="admin/products" element={<AdminProducts />} >
            <Route path="" element={<AdminProductsList />} />
            <Route path="create" element={<AdminProductCreate />} />
            <Route path="edit/:productId" element={<AdminProductEdit />} />    
        </Route>
        <Route path="admin/subcategories" element={<AdminSubCategories />} >
            <Route path="" element={<AdminSubCategoriesList />} />
            <Route path="create" element={<AdminSubCategoryCreate />} />
            <Route path="edit/:subCategoryId" element={<AdminSubCategoryEdit />} />  
        </Route>
        <Route path="/*" element={<PageNotFound />} />
        
      </Routes>
    </main>
    <Footer/>
    </div>
  );
}

export default App;
