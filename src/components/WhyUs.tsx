import { Users, TrendingUp, Clock, Award } from "lucide-react";

export const WhyUs = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "16M€",
      label: "CA Annuel",
    },
    {
      icon: Users,
      value: "35+",
      label: "Collaborateurs",
    },
    {
      icon: Clock,
      value: "25+",
      label: "Années d'expérience",
    },
    {
      icon: Award,
      value: "98%",
      label: "Clients satisfaits",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Pourquoi Nous Choisir</h2>
        <p className="section-subtitle text-center">
          Une expertise reconnue au service de votre réussite
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                <stat.icon size={32} className="text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
              <p className="text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};