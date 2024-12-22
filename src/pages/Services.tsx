import { Printer, Phone, Shield, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Services = () => {
  const services = [
    {
      icon: Printer,
      title: "Bureautique",
      subtitle: "Simplifiez votre quotidien avec nos solutions bureautiques",
      description: "Depuis plus de 10 ans, nous accompagnons les entreprises dans la gestion et l'optimisation de leurs équipements bureautiques. Que ce soit pour l'achat, la location ou la maintenance, nos solutions sont conçues pour répondre aux besoins spécifiques des professionnels, qu'il s'agisse de TPE, PME ou grandes entreprises.",
      offerings: [
        "Photocopieurs multifonctions (noir & blanc et couleur)",
        "Traceurs professionnels",
        "Solutions d'impression connectées"
      ],
      services: [
        "Maintenance réactive avec intervention sur site en moins de 4h",
        "Fourniture de consommables (encres, toners, pièces détachées)",
        "Formation à l'utilisation des équipements"
      ],
      benefits: [
        "Réduction des coûts d'impression",
        "Amélioration de la productivité grâce à des solutions connectées et intuitives",
        "Contrats sur mesure adaptés à vos besoins spécifiques"
      ]
    },
    {
      icon: Phone,
      title: "Téléphonie",
      subtitle: "Des solutions téléphoniques pour une communication optimisée",
      description: "Nos solutions de téléphonie d'entreprise sont conçues pour améliorer vos communications internes et externes tout en optimisant vos coûts. Que vous soyez une TPE ou une grande entreprise, nous proposons des systèmes performants et évolutifs, adaptés à toutes les tailles d'organisation.",
      offerings: [
        "Standard téléphonique IP et analogique",
        "Messagerie unifiée (intégration e-mails, SMS, messagerie vocale)",
        "Systèmes de conférence téléphonique avancés",
        "Solutions de mobilité pour les équipes en déplacement"
      ],
      services: [
        "Installation et configuration par nos experts",
        "Maintenance rapide avec prise en main à distance ou sur site",
        "Analyse et optimisation de vos forfaits téléphoniques"
      ],
      benefits: [
        "Meilleure réactivité grâce à des outils de communication intégrés",
        "Réduction des coûts opérationnels",
        "Évolutivité pour accompagner votre croissance"
      ]
    },
    {
      icon: Shield,
      title: "Informatique",
      subtitle: "Des solutions informatiques pour des entreprises performantes",
      description: "Parce que la gestion de votre infrastructure informatique est essentielle, Capital Bureautique propose des solutions complètes pour sécuriser et optimiser vos systèmes. Nous intervenons sur tous les aspects : matériel, logiciels et réseaux.",
      offerings: [
        "Cybersécurité : protection de vos données contre les menaces en ligne",
        "Maintenance des systèmes et réseaux : intervention préventive et curative",
        "Solutions cloud pour le stockage et la collaboration",
        "Mise en place de réseaux (LAN/WAN) adaptés à vos besoins"
      ],
      services: [],
      benefits: [
        "Continuité de vos activités grâce à une infrastructure fiable",
        "Sécurisation des données critiques",
        "Support technique personnalisé et réactif"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Des solutions adaptées à vos besoins professionnels
          </h1>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            Chez Capital Bureautique, nous nous engageons à fournir des solutions innovantes et sur mesure dans trois domaines stratégiques : la bureautique, la téléphonie et l'informatique. Découvrez comment nous pouvons simplifier et optimiser vos activités quotidiennes grâce à nos services personnalisés.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <service.icon size={32} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl text-primary">{service.title}</CardTitle>
                    <CardDescription className="text-xl mt-2">{service.subtitle}</CardDescription>
                  </div>
                </div>
                <p className="text-text-secondary">{service.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {service.offerings.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Nos offres</h3>
                    <ul className="space-y-2">
                      {service.offerings.map((offering, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <ChevronRight className="text-primary" size={16} />
                          <span>{offering}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.services.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Services inclus</h3>
                    <ul className="space-y-2">
                      {service.services.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <ChevronRight className="text-primary" size={16} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.benefits.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Avantages</h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <ChevronRight className="text-primary" size={16} />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-text-secondary mb-8 max-w-3xl mx-auto">
            Chez Capital Bureautique, notre mission est de vous offrir des services de qualité adaptés à vos besoins. Grâce à notre expertise, nous simplifions votre quotidien pour que vous puissiez vous concentrer sur l'essentiel : la croissance de votre activité.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-secondary">
              Demandez un devis personnalisé
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Contactez un expert dès maintenant
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;