const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get("/cards/:id", (req, res) => {
    console.log(req.params)
    res.json({name:"Super Awesome Magic Card"})    
});

router.post("/sendstuff",async (req,res) => {
    console.log(req.body)
    return res.json({status:"whatevs",dataYouSent:req.body});
})


module.exports = router;