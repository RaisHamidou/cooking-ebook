import Cards from "@/components/Cards/Cards";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import axios from "axios";




  export default async function Page({params}) {

    const {book} = await params
    let data = await axios.get(`http://localhost:4000/api/books`,{
        method: "GET",
        headers: {
          Authorization:"bejaia1984",
          Accept: "Application/json",
        },
    })
    let posts = await data.data 

    console.log(book)
    return (
        <section>
        <Header/>
        <div className="books-page-hero"><h1>Ebooks</h1></div>
        <div className="container-ebooks">
            <Cards array={posts}/>
        </div>
        <Footer/>
    </section>
    )
  }
