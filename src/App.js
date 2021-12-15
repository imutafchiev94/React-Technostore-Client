import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './components/PageNotFound/PageNotFound';
import ProductsListPage from './components/SubCategory/ProductsListPage';

function App() {
  return (
    <div className="App">
      <Header />	
    <main>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/store" element={<ProductsListPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </main>
    <Footer/>
    </div>
  );
}

export default App;
