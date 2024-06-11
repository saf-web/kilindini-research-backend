const express = require('express')
const mongoose = require('mongoose');
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

//techsaf4
//VusowGsCfrPmAKc6

app.use(express.json());
app.use(cors());

async function main() {
  await mongoose.connect('mongodb+srv://techsaf4:VusowGsCfrPmAKc6@kilindini-app.q5npqi2.mongodb.net/kilindini-app?retryWrites=true&w=majority&appName=kilindini-app');


}

main().then(() => console.log("Mongodb Connected Succesfully!")).catch(err => console.log(err));

//routes
const ArticleRoutes = require("./src/routes/ArticleRoutes");
const CategoryRoutes = require("./src/routes/categoryRoute");

app.use('/api', ArticleRoutes)
app.use('/api/', CategoryRoutes)


app.get('/', (req, res) => {
  res.send('Kilindini Research App Server is running!')
  })
  
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})