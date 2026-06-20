import express from "express";
const router = express.Router();

import userController from "../controllers/usercontroller.js";
import categoryController from "../controllers/categorycontroller.js";
import articleController from "../controllers/articlecontroller.js";
import commentController from "../controllers/commentcontroller.js";


//Login Routes
router.get("/login", userController.loginPage());
router.post("/index", userController.adminLogin());
router.post("/logout", userController.logout());
//User CRUD Routes
router.get("/users", userController.allUser());
router.get("/add-user", userController.addUserPage());
router.post("/add-user", userController.addUser());
router.get("/update-user/:id", userController.updateUserPage());
router.post("/update-user/:id", userController.updateUser());
router.get("/delete-user/:id", userController.deleteUser());

// CAtregory
router.get("/category", categoryController.allCategory());

router.get("/add-category", categoryController.addCategoryPage());
router.post("/add-category", categoryController.addCategory());
router.get("/update-category/:id", categoryController.updateCategoryPage());
router.post("/update-category/:id", categoryController.updateCategory());
router.get("/delete-category/:id", categoryController.deleteCategory());

// Article
router.get("/article", articleController.allArticle());

router.get("/add-article", articleController.addArticlePage());
router.post("/add-article", articleController.addArticle());
router.get("/update-article/:id", articleController.updateArticlePage());
router.post("/update-article/:id", articleController.updateArticle());
router.get("/delete-article/:id", articleController.deleteArticle());
// comments
router.get("/comment", commentController.allComments());

module.exports = router;
