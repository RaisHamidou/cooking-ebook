import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import PaymentComponents from "@/components/Payement/Payement"

const PayementPage = ()=>{
    return(

    <div>
        <Header/>
        <h1>Bienvenue sur la page de paiement</h1>
        <PaymentComponents/> 
        <Footer/>
    </div>
    )
}

export default PayementPage