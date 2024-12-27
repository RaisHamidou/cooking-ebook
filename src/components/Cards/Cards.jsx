"use client"
import { MyContext } from "@/context/Context";
import Link from "next/link";
import React, { useContext } from "react";

const Cards = ({ array }) => {
    const { addToCart, checkCart } = useContext(MyContext);

    const removeSpace = (str)=>{
        return str.replace(/\s+/g,"-")
    }

    const formatString = (str) =>{
        return str
        .normalize("NFD") // Décompose les caractères accentués en caractères de base et leurs diacritiques
        .replace(/[\u0300-\u036f]/g, "") // Supprime les diacritiques (accents)
        .replace(/\s+/g, "-") // Remplace les espaces par des tirets
        .toLowerCase(); // Convertit la chaîne en minuscules (optionnel)
    }

    return (
        <div className="container-cards-16-9">
            {array.map((post) => {
                const isInCart = checkCart(post.id);

                return (
                    <div key={post.id} className="content-card-16-9">
                    <Link href={`/books/${formatString(post.titre.toLowerCase())}`}>
                        <div className="img-card-16-9">
                            <img src={post.image} alt={post.titre} />
                            <button 
                                style={{ cursor: isInCart ? "inherit" : "pointer" }}
                                className="buy" 
                                onClick={(event) => {
                                    event.preventDefault(); // Empêche la redirection
                                    if (!isInCart) {
                                        addToCart(post.id, post.titre, post.price, post.image);
                                    }
                                }}
                                disabled={isInCart} 
                            >
                                {isInCart ? "Déjà dans le panier" : "Ajouter au panier"}
                            </button>
                            <h2 className="card-price">{post.price} €</h2>
                        </div>
                    </Link>
                    <div className="description-card-16-9">
                        <h2>{post.titre}</h2>
                    </div>
                </div>
                

                );
            })}
        </div>
    );
};

export default Cards;
