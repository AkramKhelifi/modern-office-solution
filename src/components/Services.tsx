import { Printer, Phone, Shield } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Printer,
      title: "Bureautique",
      description: "Solutions d'impression professionnelle, photocopieurs et traceurs adaptés à vos besoins.",
    },
    {
      icon: Phone,
      title: "Téléphonie",
      description: "Messagerie unifiée et solutions de communication modernes pour votre entreprise.",
    },
    {
      icon: Shield,
      title: "Informatique",
      description: "Cybersécurité, maintenance et solutions réseaux pour protéger votre activité.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Nos Services</h2>
        <p className="section-subtitle text-center">
          Des solutions complètes pour optimiser votre environnement de travail
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <service.icon size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};