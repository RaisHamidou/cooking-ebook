"use client";

import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentStatus, setPaymentStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        try {
            // Appel à votre backend Express pour obtenir le client_secret
            const response = await axios.post(
                "https://9000-idx-book-1724166133410.cluster-p6qcyjpiljdwusmrjxdspyb5m2.cloudworkstations.dev/api/payment/create-payment",
                { amount: 1000 }, // Montant en centimes
                { headers: { "Content-Type": "application/json" },
                withCredentials: true,
             });

            const { clientSecret } = response.data;

            // Confirmation du paiement avec Stripe
            const { error, paymentIntent } = await stripe.confirmCardPayment(
                clientSecret,
                {
                    payment_method: {
                        card: elements.getElement(CardElement),
                    },
                }
            );

            if (error) {
                console.error(error.message);
                setPaymentStatus("Erreur : " + error.message);
            } else if (paymentIntent && paymentIntent.status === "succeeded") {
                setPaymentStatus("Paiement réussi !");
            }
        } catch (error) {
            console.error("Erreur lors de la requête vers le backend:", error);
            setPaymentStatus("Erreur lors de la requête");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe}>
                Payer
            </button>
            {paymentStatus && <p>{paymentStatus}</p>}
        </form>
    );
};

export default CheckoutForm;
