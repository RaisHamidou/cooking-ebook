"use client";
import React, { useEffect, useState } from "react";
import openMenu from "./../../assets/svg/Hamb.svg";
import cartImg from "./../../assets/svg/cart.svg"
import Image from "next/image";
import { FaXmark } from "react-icons/fa6";
import Cart from "../Cart/Cart";

const Header = () => {
  const [displayState, setDisplayState] = useState();
  const [cartDisplay, setCartDisplay] = useState("none");
  const [cart, setCart] = useState("translate(100%)");
  
  const display = { display: displayState };

  const openCart = ()=>{
    setCartDisplay("block")
    setTimeout(() => {
        setCart("translate(0%)")
    }, 0.5); 
}



  useEffect(() => {
    const body = document.body;
    const openMenu = document.getElementsByClassName("openMenu")[0];
    const closeMenu = document.getElementsByClassName("closeMenu")[0];

    if (displayState === "flex") {
      body.style.overflow = "hidden";
      openMenu.style.display = "none";
      closeMenu.style.display = "block";
    } else {
      body.style.overflow = "auto";
      openMenu.style.display = "";
      closeMenu.style.display = "none";
    }
  }, [display]);

 /*  useEffect(()=>{
    const body = document.body;
    const cart = document.getElementById("Cart")
    if(cartDisplay === "block"){
      body.style.overflow = "hidden";

    }else{
      body.style.overflow = "auto";
      
    }
    
  },[cartDisplay]) */
  return (
    <>
    <header>
      <div onClick={() => setDisplayState("flex")} className="openMenu">
        <img src={openMenu.src} />
      </div>
      <div onClick={() => setDisplayState("none")} className="closeMenu">
        <FaXmark />
      </div>
      <div className="logo"><a href="/">Book.</a></div>
      <nav style={display} className="mainMenu">
        <ul className="menu">
          <li className="active"> <a href="/">Accueil</a></li>
          <li><a href="#achete">Acheter</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div onClick={openCart} className="cart">
    <img src={cartImg.src}/>
</div>
      
    </header>
    <Cart display={{display: cartDisplay}} setCartDisplay={setCartDisplay} cart={cart} setCart={setCart} />
    </>
  );
};
export default Header;
