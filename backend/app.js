import express from "express"
import cors from "cors"
import "dotenv/config";
import paymentRoute from "./api/payment.js"
import Databooks from "./data/books.js"
import bookRouter from "./api/book.js"
import axios from "axios";
const app = express()

app.use(cors());
app.use(express.json())

const PASSWORD = process.env.PASSWORD

app.use("/api/payment",paymentRoute)
app.use("/api/book", bookRouter, (req, res, next)=>{
    const auth = req.headers.authorization

    if(auth && auth === PASSWORD){
        next()
    }else {
        res.status(401).json({ message: 'Accès interdit.' });
    }
})


app.get('/api/books', (req, res) => {
    const auth = req.headers.authorization;
    if (auth && auth === PASSWORD) {
        res.json(Databooks);
    } else {
        res.status(401).json({ message: 'Accès interdit.' });
    }
});

app.get("/api/instagram-posts", async (req, res) => {
    const TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
  
    const response =  await axios.get(`https://graph.instagram.com/v17.0/me/media?fields=id,caption,media_type,media_url,timestamp&access_token=${TOKEN}`);
    const posts = await response.data;
    res.json(posts);
  }); 
  
export default app