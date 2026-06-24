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
  const users = await UserModel.find();

  res.render("admin/users/index", {
    users,
  });
};
export const addUserPage = async (req, res) => {
  res.render("admin/users/create");
};
export const addUser = async (req, res) => {
  const user = UserModel.create(req.body);
  res.redirect("/admin/users");
};
export const updateUserPage = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.render("admin/users/update", {
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error: "Internal server Error",
    });
  }
};
export const updateUser = async (req, res) => {
  try {
    const { fullname, password, role } = req.body;
    const user = await UserModel.findById(req.params.id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    user.fullname = fullname || user.fullname;
    if (password) {
      user.password = password;
    }

    user.role = role || user.role;
    await user.save();
    res.redirect("/admin/users");
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error: "Internal server Error",
    });
  }
};
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserModel.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.redirect("/admin/users");
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error: "Internal server Error",
    });
  }
};
