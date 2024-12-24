import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

export const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Grâce à Capital Bureautique, nous avons réduit nos coûts d'impression de 30%.",
      author: "Jean Martin",
      company: "Entreprise X",
    },
    {
      quote: "Une intervention rapide et efficace, toujours à l'écoute de nos besoins.",
      author: "Marie Dubois",
      company: "Société Y",
    },
    {
      quote: "Un partenaire fiable qui comprend vraiment nos enjeux business.",
      author: "Pierre Durand",
      company: "Entreprise Z",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Ce que disent nos clients</h2>
        <p className="section-subtitle text-center">
          Plus de 3 000 entreprises nous font confiance pour améliorer leur productivité
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <Quote className="text-primary w-12 h-12 mb-4" />
              <p className="text-lg text-text-secondary mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-text-secondary">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};