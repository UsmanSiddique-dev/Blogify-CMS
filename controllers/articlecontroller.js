import NewsModel from "../models/news.model.js";
import UserModel from "../models/user.model.js";
import CommentModel from "../models/comments.model.js";

export const allArticle = async (req, res) => {
  res.render("admin/articles/index",{role:req.role});
};
export const addArticlePage = async (req, res) => {
  res.render("admin/articles/create",{role:req.role});
};
export const addArticle = async (req, res) => {};
export const updateArticlePage = async (req, res) => {
  res.render("admin/articles/update",{role:req.role});
};
export const updateArticle = async (req, res) => {};
export const deleteArticle = async (req, res) => {};
