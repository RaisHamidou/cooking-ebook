import React, { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
const Cart = ({ display, cartDisplay, setCartDisplay, cart, setCart }) => {
  const [book, setBook] = useState()
  const [rafresh, setRafrech] = useState(false)
  const [product, setProduct] = useState()

  useEffect(()=>{
    const pct = localStorage.getItem("book")
    setProduct(pct)
  },[rafresh])

  //const product = localStorage.getItem("book")
  const deleteBook = ()=>{
    localStorage.removeItem("book")
    setRafrech(!rafresh)
  }
  useEffect(()=>{
    if(product){
      setBook(true)
    }else{
      setBook(false)
    }
  },[product, rafresh])
  const closeCart = () => {
    setCart("translateX(100%)");
    setTimeout(() => {
        setCartDisplay("none");
    }, 1); 
}
  return (
    <section style={display} id="Cart">
      <div onClick={() => setCartDisplay("none")} className="cart-overlay" />
      <div style={{ transform: cart }} className="container-cart">
        <div className="cart-head">
          <h1>Votre panier</h1>
          <div onClick={closeCart} className="close-cart">
            <FaXmark />
          </div>
        </div>
        {!book && <div className="empty-cart">
        <h2>Votre panier est vide</h2>
      </div>}
      {book && <>
        <div className="product-added">
          <div className="img-product-added"></div>
          <div className="product-info">
            <div className="title-product">
              <h2>Ebook - titre du livre</h2>
            </div>
            <div onClick={deleteBook} className="delete">
              supprimé
            </div>
          </div>
        </div>
        <div className="containter-total-price">
          <div className="total">Total</div>
          <div className="price">15€</div>
        </div>
        <div className="btn-buy">Confirmer la commande</div> 
        </>}
      </div>
      
     
      
    </section>
  );
};

export default Cart;
