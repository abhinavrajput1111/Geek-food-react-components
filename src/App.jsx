import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import Section1 from "./components/section1.jsx";
import Section2_testimonial from "./Section_testimonial.jsx";

{
  /*import Footer from "./components/footer.jsx";*/
}
import Footer from "./components/Footer.jsx";

import "./App.css";
import Section_testimonial from "./Section_testimonial.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section1 />
      <Section2_testimonial />
      <Footer />
    </>
  );
}

export default App;
