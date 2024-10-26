"use client"
import React,{createContext, useState, useEffect} from "react";

export const MyContext = createContext();
 const MyContextProvider = ({children})=>{
    const [currentCart, setCurrentCart] = useState([]);
    const [refrech, setRefrech] = useState(false);
    useEffect(() => {
        const storedCart = localStorage.getItem("book");
        if (storedCart) {
          setCurrentCart(JSON.parse(storedCart));
        }
      }, []);

      const addToCart = (id, title,price,img)=>{
        const newBook = {id,title,price,img}
        const updatedcart = [...currentCart,newBook]
        setCurrentCart(updatedcart)
        localStorage.setItem("book",JSON.stringify(updatedcart))
        setRefrech(!refrech)
      }

     const checkCart =(id)=>{
        const bookID =currentCart.some((book)=> book.id === id)
        if(bookID){
          return true
        }else{
          return false
        }
      }

      const total = currentCart.reduce((acc, item) => acc + Number(item.price), 0);
    return(
        <MyContext.Provider value={{currentCart, setCurrentCart, addToCart, checkCart, total}}>
            {children}
        </MyContext.Provider>
    )
}
export default MyContextProvider;