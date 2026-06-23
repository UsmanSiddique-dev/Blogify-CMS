import mongoose from "mongoose";
import CategoryModel from "../models/category.model.js";
import NewsModel from "../models/news.model.js";
import UserModel from "../models/user.model.js";
import CommentModel from "../models/comments.model.js";


export const index = async (req, res) => {
    // const categories = await CategoryModel.find();
    // const products = await ProductModel.find();
    // const users = await UserModel.find();
    // const orders = await OrderModel.find();
    res.render("index" );
};
export const articleByCategories = async (req, res) => {
   // const category = await CategoryModel.findOne({ name: req.params.name });
    //const articles = await NewsModel.find({ category: category._id });
    res.render("category");
}

export const singleArticle = async (req, res) => {
    res.render("single");
}
export const search = async (req, res) => {
    res.render("search");
}
export const author = async (req, res) => {
    res.render("author");
}
export const addComment = async (req, res) => {
    res.render("single");
}

