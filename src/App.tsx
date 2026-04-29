import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Categories } from "./components/Categories";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { CustomerReviews } from "./components/CustomerReviews";
import { InstagramFeed } from "./components/InstagramFeed";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-light flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Categories />
        <FeaturedProducts />
        <CustomerReviews />
        <InstagramFeed />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}
