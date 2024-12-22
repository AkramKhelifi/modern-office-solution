import { Facebook, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Capital Bureautique</h3>
            <p className="text-white/80">
              Solutions professionnelles pour votre entreprise depuis plus de 25 ans.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white">Bureautique</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Téléphonie</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Informatique</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Maintenance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Liens utiles</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white">À propos</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Espace client</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Mentions légales</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white/80">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-white/80">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-white/80">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Capital Bureautique. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};