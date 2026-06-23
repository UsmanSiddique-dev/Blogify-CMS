import UserModel from "../models/user.model.js";

export const loginPage = async (req, res) => {
  res.render("admin/login", {
    layout: false,
  });
};
export const adminLogin = async (req, res) => {};
export const logout = async (req, res) => {};
export const dashboardPage = async (req, res) => {
  res.render("admin/dashboard");
};
export const settings = async (req, res) => {
  res.render("admin/settings");
};
export const allUser = async (req, res) => {
  res.render("admin/users/index");
};
export const addUserPage = async (req, res) => {
  res.render("admin/users/create");
};
export const addUser = async (req, res) => {
 const user=UserModel.create(req.body)
  res.redirect("/admin/users");
};
export const updateUserPage = async (req, res) => {
  res.render("admin/users/update");
};
export const updateUser = async (req, res) => {};
export const deleteUser = async (req, res) => {};
