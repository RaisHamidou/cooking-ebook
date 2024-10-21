import express from "express"
import cors from "cors"
import paymentRoute from "./payment.js"


const app = express()
const corsOptions = {
    origin: 'https://9000-idx-book-1724166133410.cluster-p6qcyjpiljdwusmrjxdspyb5m2.cloudworkstations.dev', // Remplacez par votre domaine frontend
    methods: ['GET', 'POST'], // Méthodes HTTP autorisées
    credentials: true, // Autoriser les cookies (si nécessaire)
};

app.use(cors(corsOptions));
app.use(express.json())

app.use("/api/payment",paymentRoute)

export default app