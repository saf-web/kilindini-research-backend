const express = require('express');
const router = express.Router();

const ArticleController = require("../controllers/articleController")

router.get("/all-articles", ArticleController.getAllArticles);
router.get("/articles", ArticleController.getSearchedArticles);
router.get("/articles/:id", ArticleController.getSingleArticle)

module.exports = router;