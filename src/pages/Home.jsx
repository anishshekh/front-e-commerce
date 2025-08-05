import Header from "../components/Header"
import Hero from "../section/Hero"
import ProductGrid from "../components/ProductGrid"
import Footer from "../components/Footer"
import products from "../data/products.json"


const Home = () => {

  return (
    <>
      <div className="container  mx-auto">

        {/* <Header /> */}
        <Hero />
        <ProductGrid products={products} />
        {/* <Footer /> */}

      </div>
    </>
  )
}

export default Home