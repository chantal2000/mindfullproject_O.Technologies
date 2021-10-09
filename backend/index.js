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
        const { article_title, article_description, song_name } = req.body;
        const newarticle = await pool.query('INSERT INTO myarticles (article_title,article_description,song_name) VALUES($article_title,$article_description,$song_name)', [article_title, article_description, song_name]);
        res.json(newarticle)
    } catch (err) {
        console.error(err.message)
    }
});
// Delete article
app.delete("/article/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const deletearticle = await pool.query(`DELETE FROM myarticles WHERE user_id=$id`, [id]);
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
            `UPDATE myarticles SET description = $article_description WHERE user_id = $id`, [article_description, id]
        );

        res.json("An article was edited!");
    } catch (err) {
        console.error(err.message);
    }
});
//See all shared articles

app.get("/article", async(req, res) => {
    try {
        const ReadAllArticles = await pool.query("SELECT * FROM myarticles");
        res.json(ReadAllArticles.rows);
    } catch (err) {
        console.error(err.message);
    }
});
//Read  specific Articles
app.get("/article/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const article = await pool.query("SELECT * FROM myarticles WHERE user_id = $id", [id]);
        res.json(article.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});
app.listen(6260, () => {
    console.log("the server  has started on the port 6260")
});