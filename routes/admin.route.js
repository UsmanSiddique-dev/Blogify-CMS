import express from "express";
const router = express.Router();

import * as userController from "../controllers/usercontroller.js";
import * as categoryController from "../controllers/categorycontroller.js";
import * as articleController from "../controllers/articlecontroller.js";
import * as commentController from "../controllers/commentcontroller.js";
import {adminLogin} from "../middlewares/admin_login.js"
//Login Routes
router.get("/", userController.loginPage);
router.post("/index", userController.adminLogin);
router.get("/logout", userController.logout);
router.get("/dashboard",adminLogin, userController.dashboardPage);
router.get("/settings", adminLogin, userController.settings);
//User CRUD Routes
router.get("/users", adminLogin, userController.allUser);
router.get("/add-user", adminLogin, userController.addUserPage);
router.post("/add-user", adminLogin, userController.addUser);
router.get("/update-user/:id", adminLogin, userController.updateUserPage);
router.post("/update-user/:id", adminLogin, userController.updateUser);
router.get("/delete-user/:id", adminLogin, userController.deleteUser);

// CAtregory
router.get("/category",adminLogin, categoryController.allCategory);

router.get("/add-category",adminLogin, categoryController.addCategoryPage);
router.post("/add-category", adminLogin,categoryController.addCategory);
router.get("/update-category/:id",adminLogin, categoryController.updateCategoryPage);
router.post("/update-category/:id",adminLogin, categoryController.updateCategory);
router.get("/delete-category/:id",adminLogin, categoryController.deleteCategory);

// Article
router.get("/article",adminLogin, articleController.allArticle);

router.get("/add-article",adminLogin, articleController.addArticlePage);
router.post("/add-article",adminLogin, articleController.addArticle);
router.get("/update-article/:id",adminLogin, articleController.updateArticlePage);
router.post("/update-article/:id",adminLogin, articleController.updateArticle);
router.get("/delete-article/:id",adminLogin, articleController.deleteArticle);
// comments
router.get("/comments",adminLogin, commentController.allComments);

export default router;
