import "./app.scss";
import NavBar from "./components/navbar/NavBar";

const App = () => {
  return (
    <div>
      <section>
        <NavBar />
      </section>
      <section>Parallax</section>
      <section>Services</section>
      <section>Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section>Portfolio4</section>
      <section>Contact</section>
    </div>
  );
};

export default App;
