import express from "express";
import Stripe from "stripe";
import "dotenv/config"

const router = express.Router()

const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

router.post("/create-payment", async (req, res)=>{
try{
const {amount} = req.body

const paymentInstend = await stripe.PaymentInstend.create({
    amount:amount,
    currency:"eur",
})
res.status(200).send({
    clientSecret:paymentInstend.client_secret
})


}catch(error){
    console.error('Erreur lors de la création du Payment Intent:', error);
        res.status(500).send({ error: error.message });
}
})

export default router;