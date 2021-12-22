import { Routes, Route } from "react-router-dom";
import AdminProductsList from "./ProductsList/AdminProductsList";
import AdminProductCreate from "./ProductCreate/AdminProductCreate";
import AdminProductEdit from "./ProductEdit/AdminProductEdit";

const AdminProducts = () => {
    return (
        <Routes>
            <Route path="" element={<AdminProductsList />} />
            <Route path="/create" element={<AdminProductCreate />} />
            <Route path="/edit/:productId" element={<AdminProductEdit />} />
        </Routes>
    )
}

export default AdminProducts;