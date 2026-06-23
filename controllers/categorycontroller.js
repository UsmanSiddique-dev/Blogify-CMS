
import CategoryModel from "../models/category.model.js";

export const allCategory = async (req, res) => {
    res.render("admin/categories/index", {
        layout: "admin/layout"
    });
};
export const addCategoryPage = async (req, res) => {
    res.render("admin/categories/create", {
        layout: "admin/layout"
    });
};
export const addCategory = async (req, res) => {};
export const updateCategoryPage = async (req, res) => {
    res.render("admin/categories/update", {
        layout: "admin/layout"
    });
};
export const updateCategory = async (req, res) => {}
export const deleteCategory = async (req, res) => {}


