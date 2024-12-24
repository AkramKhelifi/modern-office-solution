import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { QuoteForm } from "@/components/QuoteForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyUs />
        <Services />
        <Testimonials />
        <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center">
              Prêt à transformer votre entreprise ?
            </h2>
            <p className="section-subtitle text-center">
              Demandez votre devis gratuit dès aujourd'hui et découvrez comment Capital Bureautique peut faire la différence.
            </p>
            <QuoteForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;