import express from "express";
const router = express.Router();

import * as userController from "../controllers/usercontroller.js";
import * as categoryController from "../controllers/categorycontroller.js";
import * as articleController from "../controllers/articlecontroller.js";
import * as commentController from "../controllers/commentcontroller.js";
import { adminLogin } from "../middlewares/admin_login.js";
import { isAdmin } from "../middlewares/author_login.js";
import  upload  from "../middlewares/multer_upload.js";
//Login Routes
router.get("/", userController.loginPage);
router.post("/index", userController.adminLogin);
router.get("/logout", userController.logout);
router.get("/dashboard", adminLogin, userController.dashboardPage);
router.get("/settings", adminLogin, isAdmin, userController.settings);
//User CRUD Routes
router.get("/users", adminLogin, isAdmin, userController.allUser);
router.get("/add-user", adminLogin, isAdmin, userController.addUserPage);
router.post("/add-user", adminLogin, isAdmin, userController.addUser);
router.get(
  "/update-user/:id",
  adminLogin,
  isAdmin,
  userController.updateUserPage,
);
router.post("/update-user/:id", adminLogin, isAdmin, userController.updateUser);
router.get("/delete-user/:id", adminLogin, isAdmin, userController.deleteUser);

// Catregory
router.get("/category", adminLogin, isAdmin, categoryController.allCategory);

router.get(
  "/add-category",
  adminLogin,
  isAdmin,
  categoryController.addCategoryPage,
);
router.post(
  "/add-category",
  adminLogin,
  isAdmin,
  categoryController.addCategory,
);
router.get(
  "/update-category/:id",
  adminLogin,
  isAdmin,
  categoryController.updateCategoryPage,
);
router.post(
  "/update-category/:id",
  adminLogin,
  isAdmin,
  categoryController.updateCategory,
);
router.get(
  "/delete-category/:id",
  adminLogin,
  isAdmin,
  categoryController.deleteCategory,
);

// Article
router.get("/article", adminLogin, articleController.allArticle);

router.get("/add-article", adminLogin, articleController.addArticlePage);
router.post(
  "/add-article",
  adminLogin,
  upload.single("image"),
  articleController.addArticle,
);
router.get(
  "/update-article/:id",
  adminLogin,
  articleController.updateArticlePage,
);
router.post(
  "/update-article/:id",
  adminLogin,
  upload.single("image"),
  articleController.updateArticle,
);
router.get("/delete-article/:id", adminLogin, articleController.deleteArticle);
// comments
router.get("/comments", adminLogin, commentController.allComments);

export default router;
