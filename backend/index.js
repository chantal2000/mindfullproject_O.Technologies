const express = require("express");
const app = express();
const cors = require('cors')
app.use(cors());
const pool = require("./db")
app.use(express.json());

// create article
app.post("/article", async(req, res) => {
    try {
        console.log(req.body);
        const { user_id } = req.body;
        const { article_title } = req.body;
        const { article_description } = req.body;
        const newarticle = await pool.query('INSERT INTO mindfull (user_id,article_title,article_description) VALUES($1,$2,$3)', [user_id, article_title, article_description]);
        res.json(newarticle)
    } catch (err) {
        console.error(err.message)
    }
});
// Delete article
app.delete("/article/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const deletearticle = await pool.query("DELETE ROM mindfull WHERE user_id=$1", [id]);
        res.json("Article was deleted")
    } catch (err) {
        console.log(err.message);
    }
});
// Edit an article
app.put("/article/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { article_description } = req.body;
        const updateArticle = await pool.query(
            "UPDATE mindfull SET description = $1 WHERE user_id = $2", [article_description, id]
        );

        res.json("An article was edited!");
    } catch (err) {
        console.error(err.message);
    }
});
//See all shared articles

app.get("/article", async(req, res) => {
    try {
        const ReadAllArticles = await pool.query("SELECT * FROM mindfull");
        res.json(ReadAllArticles.rows);
    } catch (err) {
        console.error(err.message);
    }
});
//Read  specific Articles
app.get("/article/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const article = await pool.query("SELECT * FROM mindfull WHERE user_id = $1", [id]);
        res.json(article.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});
app.listen(5300, () => {
    console.log("the server  has started on the port 5300")
});