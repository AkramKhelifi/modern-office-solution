import { WhyUs } from "@/components/WhyUs";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const WhyUsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 pt-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Capital Bureautique, votre partenaire de confiance
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Depuis plus de 10 ans, nous accompagnons des milliers d'entreprises dans leurs besoins en solutions bureautiques, téléphoniques et informatiques. Nos clients nous choisissent pour notre expertise, notre réactivité et notre engagement à fournir des services de qualité adaptés à leurs besoins.
          </p>
        </section>

        <WhyUs />

        <section className="py-16 text-center">
          <h2 className="section-title">Ce que nos clients disent de nous</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="italic text-text-secondary mb-4">
                "Capital Bureautique nous a permis d'optimiser notre infrastructure informatique tout en réduisant nos coûts. Leur réactivité est impressionnante !"
              </p>
              <p className="font-semibold">Jean Dupont</p>
              <p className="text-sm text-text-secondary">Directeur, PME Services</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="italic text-text-secondary mb-4">
                "Une équipe professionnelle et à l'écoute. Leurs solutions sur mesure ont parfaitement répondu à nos besoins."
              </p>
              <p className="font-semibold">Marie Martin</p>
              <p className="text-sm text-text-secondary">Responsable IT, Tech Solutions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="italic text-text-secondary mb-4">
                "Excellent service client et expertise technique remarquable. Je recommande vivement leurs services."
              </p>
              <p className="font-semibold">Pierre Durand</p>
              <p className="text-sm text-text-secondary">Gérant, Cabinet d'architectes</p>
            </div>
          </div>
        </section>

        <section className="py-16 text-center bg-primary/5 rounded-lg">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Prêt à bénéficier de notre expertise ?
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins.
          </p>
          <Button size="lg" className="bg-primary hover:bg-secondary">
            Demandez un devis personnalisé
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhyUsPage;