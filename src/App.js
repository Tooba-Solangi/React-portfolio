import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import SectionTwo from "./components/sectionTwo/Section2";
import Card from "./components/Card/Card";
import CardFive from "./components/CardFive/CardFive";
import CardSix from "./components/CardSix/CardSix";
import CardSeven from "./components/CardSeven/CardSeven";
import CardEight from "./components/CardEight/CardEight";

function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <SectionTwo />
      <Card />
      <CardFive />
      <CardSix />
      <CardSeven />
      <CardEight />
      <Footer />
    </>
  );
}

export default App;
