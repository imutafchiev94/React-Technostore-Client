import { Routes, Route } from "react-router-dom";
import AdminSubCategoriesList from "./SubCategoriesList/AdminSubCategoriesList";
import AdminSubCategoryCreate from "./SubCategoryCreate/AdminSubCategoryCreate";
import AdminSubCategoryEdit from "./SubCategoryEdit/AdminSubCategoryEdit";

const AdminSubCategories = () => {
    return (
        <Routes>
            <Route path="" element={<AdminSubCategoriesList />} />
            <Route path="/create" element={<AdminSubCategoryCreate />} />
            <Route path="/edit/:subCategoryId" element={<AdminSubCategoryEdit />} />
        </Routes>
    )
}

export default AdminSubCategories;