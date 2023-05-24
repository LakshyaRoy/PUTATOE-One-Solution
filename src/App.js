import "./App.css";
import NavBar from "./components/navbar/navbar.component";
import SecondNav from "./components/SecondNav/secondNav.component";
import Main from "./components/main/main.component";
import AllProducts from "./components/AllProducts/allProducts.component";
import AllServicesComponent from "./components/AllServices/allServices.component";
import Footer from "./components/Footer/footer.component";
function App() {
  return (
    <>
      <NavBar />
      <SecondNav />
      <Main />
      <AllProducts />
      <AllServicesComponent />
      <Footer />
    </>
  );
}

export default App;
