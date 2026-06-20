import express from "express";
const router = express.Router();
//Login Routes
router.get("/login", loginPage);
router.post("/index", adminLogin);
router.post("/logout", logout);
//User CRUD Routes
router.get("/users", allUser);
router.get("/add-user", addUserPage);
router.post("/add-user", addUser);
router.get("/update-user/:id", updateUserPage);
router.post("/update-user/:id", updateUser);
router.get("/delete-user/:id", deleteUser);

// CAtregory
router.get("/category", allCategory);

router.get("/add-category", addCategoryPage);
router.post("/add-category", addCategory);
router.get("/update-category/:id", updateCategoryPage);
router.post("/update-category/:id", updateCategory);
router.get("/delete-category/:id", deletecategory);

// Article
router.get("/article", allArticle);

router.get("/add-article", addArticlePage);
router.post("/add-article", addArticle);
router.get("/update-article/:id", updateArticlePage);
router.post("/update-article/:id", updateArticle);
router.get("/delete-article/:id", deleteArticle);
// comments
router.get("/comment", allComments);

module.exports = router;
