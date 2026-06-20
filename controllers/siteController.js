import mongoose from "mongoose";
import CategoryModel from "../models/Category.js";
import NewsModel from "../models/news.model.js";
import UserModel from "../models/User.js";
import CommentModel from "../models/comments.model.js";


export const index = async (req, res) => {
    const categories = await CategoryModel.find();
    const products = await ProductModel.find();
    const users = await UserModel.find();
    const orders = await OrderModel.find();
    res.render("index", { categories, products, users, orders });
};
export const articleByCategories = async (req, res) => {}

export const singleArticle = async (req, res) => {}
export const search = async (req, res) => {}
export const author = async (req, res) => {}
export const addComment = async (req, res) => {}

