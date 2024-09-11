import axios from "axios"
import express from "express"
import cors from "cors"
import qs from "qs"

const app = express()
app.use(express.json())

app.get("api/deauthorize", (req,res)=>{
    const useId = req.body.user_id
    if(useId){
        console.log("L'utilisateur avec l'ID ${userId} a révoqué l'autorisation !")
        res.status(200).send("success")
    }else{
        res.status(400).send("error")
    }
})

app.get("/api/callback", async (req, res) => {
    const code = req.query.code;

    if (!code) {
        return res.status(400).send("Erreur : Aucun code d'autorisation reçu");
    }

    try {
        const accessTokenResponse = await axios.post(`https://api.instagram.com/oauth/access_token`, 
            qs.stringify({
                client_id: "865903011781460",
                client_secret: "8caacc4a3b47e967690c1beefdceb9fa",
                grant_type: "authorization_code",
                redirect_uri: "https://cooking-ebook.vercel.app/api/callback",
                code: code
            }), 
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }
        );

        const accessTokenData = accessTokenResponse.data;
        const accessToken = accessTokenData.access_token;

        if (accessToken) {
            return res.send('Authentification réussie ! Token d\'accès : ' + accessToken);
        } else {
            return res.status(400).send("Erreur d'authentification");
        }
    } catch (error) {
        console.error(error.response?.data || error.message);
        return res.status(500).send("Erreur serveur lors de la requête d'accès au token");
    }
});


export default app