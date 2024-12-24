import { ArrowRight } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { WhyUs } from "@/components/WhyUs";

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
              Des solutions bureautiques, téléphoniques et informatiques sur mesure pour votre entreprise
            </h1>
            <p className="text-xl text-text-secondary mb-12 animate-slide-up">
              Boostez votre productivité et optimisez vos coûts avec Capital Bureautique, le partenaire de confiance des entreprises en France
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-slide-up">
              <button className="btn-primary flex items-center gap-2">
                Demander un devis <ArrowRight size={20} />
              </button>
              <button className="btn-secondary">Parler à un expert</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">4h</h3>
                <p className="text-text-secondary">Intervention sur site</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">15 min</h3>
                <p className="text-text-secondary">Prise en main à distance</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">24/7</h3>
                <p className="text-text-secondary">Support client dédié</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyUs />

      {/* Services Section */}
      <Services />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Prêt à transformer votre entreprise ?
            </h2>
            <p className="text-xl text-text-secondary mb-12">
              Demandez votre devis gratuit dès aujourd'hui et découvrez comment Capital Bureautique peut faire la différence.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}