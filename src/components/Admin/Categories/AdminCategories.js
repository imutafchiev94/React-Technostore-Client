import { Routes, Route } from "react-router-dom";
import AdminCategoriesList from "./CategoriesList/AdminCategoriesList";
import AdminCreateCategory from "./CreateCategory/AdminCreateCategory";
import AdminEditCategory from "./EditCategory/AdminEditcategory";

const AdminCategories = () => {
    return (
        <Routes>
            <Route path="" element={<AdminCategoriesList />} />
            <Route path="/create" element={<AdminCreateCategory />} />
            <Route path="/edit/:categoryId" element={<AdminEditCategory />} />
        </Routes>
    )
}

export default AdminCategories;