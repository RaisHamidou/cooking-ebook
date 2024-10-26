import express from "express";
import Stripe from "stripe";
import "dotenv/config";
import nodemailer from "nodemailer";
import books from "../data/books.js";

const router = express.Router();
// Instanciez Stripe avec la clé secrète
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post("/create-payment", async (req, res) => {
  try {
    const { amount } = req.body; // Récupérez le montant du corps de la requête
    // Créez le Payment Intent avec le montant et la devise
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "eur",
    });
    // Envoyez l'ID et le client_secret au frontend
    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id, // Ajout de l'ID du PaymentIntent
    });
  } catch (error) {
    console.error("Erreur lors de la création du Payment Intent:", error);
    res.status(500).send({ error: error.message });
  }
});

router.post("/confirm-payment", async (req, res) => {
  const { paymentIntentId, email, bookIds } = req.body; 
  

  try {
    // Obtenez le PaymentIntent en utilisant l'ID
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    if (paymentIntent.status === "succeeded") {
      const attachments = bookIds.map((id) => {
        const book = books.find((b) => b.id === id);
        return {
          filename: `${book.titre}.pdf`,
          path: book.pdfPath, // Assurez-vous que pdfPath est défini
          contentType: "application/pdf",
        };
      });

      const transporter = nodemailer.createTransport({
        service: "gmail",
        port: 465,
        secure: true,
        auth: {
          user: "contact.dzairhistory@gmail.com",
          pass: "pjeayqokvsvnmvud",
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Vos ebooks sont disponibles',
        text: 'Merci pour votre achat. Vous trouverez vos ebooks en pièce jointe.',
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                <h1 style="color: #4CAF50;">Merci pour votre achat!</h1>
                <p>Bonjour,</p>
                <p>Vous trouverez vos ebooks en pièce jointe.</p>
                <p style="background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
                    Cordialement,<br>
                    <strong>L'équipe</strong>
                </p>
            </div>
        `,
        attachments: attachments,
    };

      await transporter.sendMail(mailOptions);
      console.log("Ebooks envoyé avec succès.");
      res.status(200).send({ message: "Email envoyé avec succès." });
    } else {
      res.status(400).send({ message: "Le paiement a échoué." });
      console.log("Erreur lors de l'envoi des ebboks");
    }
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'ebook:", error);
    res.status(500).send({ error: "Erreur lors de l'envoi de l'ebook." });
  }
});

export default router;
