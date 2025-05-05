import { motion } from 'framer-motion';
import Button from '../common/Button';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-neutral-800 mb-6 leading-tight">
              Un service de<br />
              <span className="text-primary-500">livraison locale</span><br />
              rapide
            </h1>
            <p className="text-xs text-neutral-600 mb-8 max-w-lg">
              Pour les petites entreprises et particuliers ayant besoin d'envoyer des colis ou des courses dans la ville.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button to="/poster-livraison" variant="primary" size="sm">
                Poster une livraison
              </Button>
              <Button to="/devenir-livreur" variant="outline" size="sm">
                Devenir livreur
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/images.png"
                  alt="Livreur sur un scooter"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center text-primary-500 font-bold">
                  <span className="text-xs mr-1">30</span>
                  <span className="text-xs leading-tight">min<br/>
                  livraison<br/>moyenne</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;