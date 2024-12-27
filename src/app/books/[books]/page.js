import Details from "@/components/Details/Details";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import axios from "axios";

export default async function Page({ params }) {
  const { books } = await params;
  let data = await axios.get(`http://localhost:4000/api/books/${books}`);
  let posts = await data.data;

  return (
    <section>
      <Header />
      <section className="container-detail-book">
        <Details posts={posts}/>
      </section>
      <Footer />
    </section>
  );
}
