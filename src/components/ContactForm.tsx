import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  company: z.string().min(2, "Le nom de l'entreprise est requis"),
  email: z.string().email("Format d'email invalide"),
  phone: z.string().optional(),
  subject: z.enum(["quote", "support", "info"], {
    required_error: "Veuillez sélectionner un sujet",
  }),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "quote",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const validateForm = () => {
    try {
      contactSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log(formData);
      toast({
        title: "Message envoyé !",
        description: "Notre équipe vous répondra dans les plus brefs délais.",
      });
      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        subject: "quote",
        message: "",
      });
    }
  };

  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Nos coordonnées</h2>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Téléphone</h3>
                  <p className="text-text-secondary">+33 1 23 45 67 89</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-text-secondary">contact@capital-bureautique.fr</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Adresse</h3>
                  <p className="text-text-secondary">6 bis, rue Antoine Panier, 93170 Bagnolet</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold mb-2">Horaires d'ouverture</h3>
                <p className="text-text-secondary">Lundi - Vendredi : 9h00 - 18h00</p>
              </div>
            </div>

            <div className="mt-8">
              <iframe
                title="Capital Bureautique Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.2762464565586!2d2.4162!3d48.8636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d8f4e8e3f91%3A0x5cf0f1d0d4d0f0a0!2s6+Rue+Antoine+Panier%2C+93170+Bagnolet!5e0!3m2!1sfr!2sfr!4v1620000000000!5m2!1sfr!2sfr"
                className="w-full h-[300px] rounded-lg shadow-lg"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-6">Envoyez-nous un message</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nom complet *</label>
                <input
                  type="text"
                  className={`w-full p-3 border rounded-lg ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Entreprise *</label>
                <input
                  type="text"
                  className={`w-full p-3 border rounded-lg ${
                    errors.company ? "border-red-500" : "border-gray-300"
                  }`}
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  required
                />
                {errors.company && (
                  <p className="text-red-500 text-sm mt-1">{errors.company}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  className={`w-full p-3 border rounded-lg ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Téléphone</label>
                <input
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Sujet *</label>
                <select
                  className={`w-full p-3 border rounded-lg ${
                    errors.subject ? "border-red-500" : "border-gray-300"
                  }`}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value as "quote" | "support" | "info" })}
                  required
                >
                  <option value="quote">Demande de devis</option>
                  <option value="support">Support technique</option>
                  <option value="info">Demande d'information</option>
                </select>
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message *</label>
                <textarea
                  className={`w-full p-3 border rounded-lg h-32 ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Envoyer le message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};