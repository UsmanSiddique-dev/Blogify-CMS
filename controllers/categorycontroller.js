import CategoryModel from "../models/category.model.js";

export const allCategory = async (req, res) => {
  const categories = await CategoryModel.find();
  res.render("admin/categories/index", {
    layout: "admin/layout",
    role: req.role,
    categories: categories,
  });
};
export const addCategoryPage = async (req, res) => {
  res.render("admin/categories/create", {
    layout: "admin/layout",
    role: req.role,
  });
};
export const addCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).send("Category name is required");
    }

    const category = await CategoryModel.create({
      title: name,
      description: description || "",
    });

    return res.redirect("/admin/category");
  } catch (error) {
    console.log(error);

    // Most common failure here is duplicate slug (same title)
    return res.status(500).send({
      error: "Internal server error",
    });
  }
};
export const updateCategoryPage = async (req, res) => {
  try {
    const category = await CategoryModel.findById(req.params.id);

    if (!category) {
      return res.status(404).send("Category not found");
    }

    res.render("admin/categories/update", {
      layout: "admin/layout",
      role: req.role,
      category: category,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
};
export const updateCategory = async (req, res) => {
  const id = req.params.id;
  try {
    const category = await CategoryModel.findByIdAndUpdate(id, {
      title: req.body.title,
      description: req.body.description,
    });

    if (!category) {
      return res.status(404).send("Category not found");
    }

    return res.redirect("/admin/category");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
};
export const deleteCategory = async (req, res) => {
  const id = req.params.id;
  try {
    const category = await CategoryModel.findByIdAndDelete(id);

    if (!category) {
      return res.status(404).send("Category not found");
    }

    return res.redirect("/admin/category");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
};