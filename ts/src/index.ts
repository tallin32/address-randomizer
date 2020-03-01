import express from 'express';
const app = express();
app.get("/foo", (req, res) => {
    res.json({name: "Emily"})   
})
app.listen(3000);

