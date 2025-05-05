import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { useAuth } from '../../contexts/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Logo className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/poster-livraison"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isScrolled
                  ? 'text-primary-700 hover:bg-primary-50'
                  : 'text-primary-700 hover:bg-white/20'
              }`}
            >
              Poster une livraison
            </Link>
            <Link
              to="/devenir-livreur"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isScrolled
                  ? 'text-primary-700 hover:bg-primary-50'
                  : 'text-primary-700 hover:bg-white/20'
              }`}
            >
              Devenir livreur
            </Link>
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="btn-outline text-sm py-1"
              >
                Déconnexion
              </button>
            ) : (
              <Link to="/login" className="btn-primary text-sm py-2">
                Connexion
              </Link>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden rounded-md p-2 text-primary-500 hover:bg-primary-50 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${
          isOpen ? 'block' : 'hidden'
        } bg-white border-t border-gray-100 mt-2`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/poster-livraison"
            className="block px-3 py-2 rounded-md text-base font-medium text-primary-700 hover:bg-primary-50"
          >
            Poster une livraison
          </Link>
          <Link
            to="/devenir-livreur"
            className="block px-3 py-2 rounded-md text-base font-medium text-primary-700 hover:bg-primary-50"
          >
            Devenir livreur
          </Link>
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-primary-700 hover:bg-primary-50"
            >
              Déconnexion
            </button>
          ) : (
            <Link
              to="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-primary-700 hover:bg-primary-50"
            >
              Connexion
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;