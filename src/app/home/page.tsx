import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header"; // Import the Header component

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header /> {/* Include the Header component here */}
      <main className="flex-grow flex flex-col items-center justify-center p-10 bg-black">
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-bold text-gold">Bienvenue sur Hmiiza</h1>
          <p className="mt-4 text-lg text-custom-gray">
            Votre destination unique pour des produits de qualité.
          </p>
        </div>
        <Navbar />
      </main>
      <Footer />
    </div>
  );
}
