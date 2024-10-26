"use client"
import { MyContext } from "@/context/Context";
import React, { useContext } from "react";

const Cards = ({ array }) => {
    const { addToCart, checkCart } = useContext(MyContext);

    return (
        <div className="container-cards-16-9">
            {array.map((post) => {
                const isInCart = checkCart(post.id);

                return (
                    <div key={post.id} className="content-card-16-9">
                        <div className="img-card-16-9">
                            <img src={post.image} alt={post.titre} />
                            <button 
                            style={{ cursor: isInCart ? "inherit" : "pointer" }}
                                className="buy" 
                                onClick={() => {
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
