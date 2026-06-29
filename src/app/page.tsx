import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Products } from "@/components/products";
import { Stats } from "@/components/stats";
import { Vision } from "@/components/vision";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Products />
        <Vision />
        <About />
      </main>
      <Footer />
    </>
  );
}
