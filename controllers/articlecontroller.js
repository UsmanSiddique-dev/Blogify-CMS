import NewsModel from "../models/news.model.js";
import UserModel from "../models/user.model.js";
import CommentModel from "../models/comments.model.js";
import CategoryModel from "../models/category.model.js";

export const allArticle = async (req, res) => {
  res.render("admin/articles/index", { role: req.role });
};
export const addArticlePage = async (req, res) => {
  const categories = await CategoryModel.find({});
  res.render("admin/articles/create", {
    role: req.role,
    categories: categories,
  });
};
export const addArticle = async (req, res) => {
  try {
    const { title, content, category } = req.body;
    const article = new NewsModel({
      title,
      content,
      category,
      author: req.id,
      image: req.file.filename,
    });
    await article.save();
    res.redirect("/admin/article");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const updateArticlePage = async (req, res) => {
  res.render("admin/articles/update", { role: req.role });
};
export const updateArticle = async (req, res) => {};
export const deleteArticle = async (req, res) => {};
