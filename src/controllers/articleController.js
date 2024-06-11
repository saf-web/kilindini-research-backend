const Article = require("../model/ArticleModel")

const getAllArticles = async (req, res) => {
    const result = await Article.find().sort({createdAt: -1});
    res.status(200).json(result);
}

const getSearchedArticles = async (req, res) => {
    const {q} = req.query;
    try{
        let articles;
        if(q){
            articles = await Article.find({name: {$regex: q, $options: 'i'}})
        }
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({message: "No items found!"})
    }
}

const getSingleArticle = async(req, res) => {
    const {id} = req.params;
    try {
        const article = await Article.findById(id);
        res.json(article);
    } catch (error) {
        res.status(500).json({message: 'No Articles found'});
    }
}
module.exports = {
    getAllArticles,
    getSearchedArticles,
    getSingleArticle
}