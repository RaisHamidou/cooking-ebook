import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import Cards from "@/components/Cards/Cards"
import axios from "axios"
import URL from "@/components/config/config"

const ebooks = async ()=>{
    const res = await axios.get(`${URL}/api/books`,{
        headers: {
            'Authorization': 'bejaia1984', 
            'Content-Type': 'application/json'
        }

    })
    const data = await res.data
 
    return(
        <section>
            <Header/>
            <div className="books-page-hero"><h1>Ebooks</h1></div>
            <div className="container-ebooks">
                <Cards array={data}/>
            </div>
            <Footer/>
        </section>
        
    )
}
export default ebooks