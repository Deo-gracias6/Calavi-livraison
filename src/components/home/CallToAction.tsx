import { motion } from 'framer-motion';
import Button from '../common/Button';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Prêt à profiter du service de livraison le plus rapide ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg mb-8 text-primary-100"
          >
            Rejoignez des milliers d'utilisateurs satisfaits et découvrez la facilité de livraison en ville
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button to="/poster-livraison" variant="secondary" size="sm">
              Poster une livraison
            </Button>
            <Button
              to="/devenir-livreur"
              className="bg-white text-primary-700 hover:bg-primary-50"
              size="sm"
            >
              Devenir livreur
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;