import { Users, TrendingUp, Clock, Award, Shield, Target, MapPin, Coins } from "lucide-react";

export const WhyUs = () => {
  const stats = [
    {
      icon: Users,
      value: "3000+",
      label: "Clients actifs",
    },
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
      value: "4h",
      label: "Délai d'intervention",
    },
  ];

  const engagements = [
    {
      icon: Clock,
      title: "Réactivité",
      description: "Intervention sur site en 4 heures et prise en main à distance en moins de 15 minutes.",
    },
    {
      icon: Shield,
      title: "Expertise technique",
      description: "Une équipe de techniciens certifiés en bureautique, téléphonie et informatique.",
    },
    {
      icon: Target,
      title: "Solutions sur mesure",
      description: "Des offres adaptées aux besoins spécifiques des TPE, PME et grandes entreprises.",
    },
    {
      icon: Coins,
      title: "Économie et performance",
      description: "Optimisation des coûts opérationnels grâce à des équipements modernes et fiables.",
    },
    {
      icon: MapPin,
      title: "Proximité",
      description: "Un service client local et accessible, principalement en Île-de-France.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Ce qui nous distingue</h2>
        <p className="section-subtitle text-center">
          Chez Capital Bureautique, nous plaçons la satisfaction client au cœur de nos priorités. Voici pourquoi nos clients nous font confiance :
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {engagements.map((engagement, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <engagement.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{engagement.title}</h3>
              <p className="text-text-secondary">{engagement.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
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