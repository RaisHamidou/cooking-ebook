"use client"
import React, { useContext, useEffect, useState } from "react";
const Details = ({ posts }) => {
  return (
    <>
      <div className="img-book-detail">
        <div className="img-book">
          <img src={posts.image} alt={posts.title} />
        </div>
      </div>
      <div className="detail-book">
        <div className="container-with-img">
          <div className="img-book">
            <img src={posts.image} alt={posts.title} />
          </div>
          <div className="container-whitout-img">
            <div className="title-detail-book">
              <h1>{posts.titre}</h1>
              <h2>Mrs Cooking</h2>
            </div>
            <div className="price-detail-book">
              <h2>{posts.price} €</h2>
            </div>
            <button className="btn-detail-book">Ajouter au panier</button>
          </div>
        </div>
        <div className="description-detail-book">
          <h2>Description</h2>
          <p>{posts.description}</p>
        </div>
      </div>
    </>
  );
};
export default Details;
