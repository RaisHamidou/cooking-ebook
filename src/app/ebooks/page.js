import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import Cards from "@/components/Cards/Cards"
const ebooks = ()=>{
    
    const array = [
        {id:1,titre:"Titre du livre 1", price: "15",image:"/image/book/book.png"}, 
        {id:2,titre:"Titre du livre 2", price: "15",image:"/image/book/book.png"}, 
        {id:3,titre:"Titre du livre 3", price: "15",image:"/image/book/book.png"}, 
        {id:4,titre:"Titre du livre 4", price: "15",image:"/image/book/book.png"}
      ];
    return(
        <section>
            <Header/>
            <div className="books-page-hero"><h1>Ebooks</h1></div>
            <div className="container-ebooks">
                <Cards array={array}/>
            </div>
            <Footer/>
        </section>
        
    )
}
export default ebooks