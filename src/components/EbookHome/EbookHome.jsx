import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Cards from "@/components/Cards/Cards";
import axios from "axios";
import URL from "../config/config";

const EbookHome = async () => {
  const res = await axios.get(`${URL}/api/books`, {
    headers: {
      Authorization: "bejaia1984",
      "Content-Type": "application/json",
    },
  });
  const data = await res.data;
  return (
    <section className="ebooksHome">
      <div className="books-page-hero">
        <h1>Mes dernière ebook</h1>
      </div>

      <div className="container-ebooks">
        <Cards array={data} />
      </div>
    </section>
  );
};
export default EbookHome;
