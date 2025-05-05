import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-800 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo className="h-10 w-auto" />
            <p className="mt-4 text-neutral-300 text-xs">
              Service de livraison locale rapide pour vos colis et courses.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center hover:bg-primary-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center hover:bg-primary-500 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center hover:bg-primary-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/poster-livraison" className="text-neutral-300 hover:text-white transition-colors">
                  Poster une livraison
                </Link>
              </li>
              <li>
                <Link to="/devenir-livreur" className="text-neutral-300 hover:text-white transition-colors">
                  Devenir livreur
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-neutral-300 hover:text-white transition-colors">
                  Connexion
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Légal</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="#" className="text-neutral-300 hover:text-white transition-colors">
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link to="#" className="text-neutral-300 hover:text-white transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link to="#" className="text-neutral-300 hover:text-white transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="#" className="text-neutral-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center">
                <MapPin size={18} className="mr-2 text-primary-400" />
                <span className="text-neutral-300">
                  123 Rue de Calavi, Carefour ITTA.
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-primary-400" />
                <span className="text-neutral-300">+229 0153564497</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-primary-400" />
                <span className="text-neutral-300">contact@calavicourses.fr</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 mt-12 pt-8 text-center text-neutral-400 text-xs">
          <p>© {currentYear} CALAVI COURSES. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;