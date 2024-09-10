import express from "express"

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
export default app