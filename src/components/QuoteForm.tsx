import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { z } from "zod";

const quoteSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Format d'email invalide"),
  phone: z.string().optional(),
  company: z.string().min(2, "Le nom de l'entreprise est requis"),
  need: z.string().min(10, "Veuillez décrire brièvement votre besoin"),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export const QuoteForm = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    need: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      quoteSchema.parse(formData);
      console.log("Form data:", formData);
      toast({
        title: "Demande envoyée !",
        description: "Nous vous contacterons dans les plus brefs délais pour établir votre devis.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        need: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors = error.errors.map((e) => e.message);
        toast({
          title: "Erreur de validation",
          description: errors.join("\n"),
          variant: "destructive",
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Nom complet *</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Email *</label>
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
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
          <label className="block text-sm font-medium mb-2">Entreprise *</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Votre besoin *</label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg h-32"
            value={formData.need}
            onChange={(e) => setFormData({ ...formData, need: e.target.value })}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn-primary w-full">
          Recevoir mon devis gratuit
        </button>
      </div>
    </form>
  );
};