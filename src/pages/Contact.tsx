import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Contactez-nous
              </h1>
              <p className="text-text-secondary text-lg">
                Vous avez une question ou besoin d'informations supplémentaires sur nos services ? 
                Notre équipe est à votre disposition pour répondre à toutes vos demandes. 
                Remplissez notre formulaire ou contactez-nous directement via les coordonnées ci-dessous.
              </p>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;