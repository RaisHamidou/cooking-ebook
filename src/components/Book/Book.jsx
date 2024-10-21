"use client"
import React from "react";
import book from "../../assets/book/book.png";
const Book = () => {
  const addToCart = ()=>{
    localStorage.setItem("book", JSON.stringify([{title: "titre du livre", price: "15€"}]))
  }
  return (
    <section id="book">
      <div className="container-info-book">
        <h1>Titre</h1>
        <p className="info-book">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        <button >Acheter</button>
      </div>
      <div className="book-img">
        <img src={book.src} alt="book" />
      </div>
    </section>
  );
};

export default Book;
