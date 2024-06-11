const Category = require("../model/categoryModel");
const Article = require("../model/ArticleModel");


const getCategory = async (req, res) => {
    const {category} = req.params;

    try {
        const categoryData = await Category.findOne({name: category});
        console.log(categoryData)
        if(!categoryData){
            return res.status(404).json({message: "Category not Found"})
        }

        const articles = await Article.find({menuId: categoryData.menuId})
        
        
        res.status(200).json(articles) 
    } catch (error) {
        res.status(500).json({message:"Not Found"});
    }
}
module.exports = {
    getCategory
}