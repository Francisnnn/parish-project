import Footer from "../components/layout/Footer";
import HomePage from "./homepage/index";
export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <HomePage />
      </main>
      <Footer />
      <div className="back-to-top" id="backToTop">
        <i className="fas fa-arrow-up"></i>
      </div>
    </>
  );
}
