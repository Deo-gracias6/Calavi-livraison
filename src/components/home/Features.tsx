import { motion } from 'framer-motion';
import { Clock, Shield, Zap, MapPin, Percent, Users } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'Livraison rapide',
    description: 'Livraison en moins de 30 minutes dans votre ville',
    icon: <Clock size={24} />,
  },
  {
    id: 2,
    title: 'Sécurité garantie',
    description: 'Vos colis sont assurés pendant tout le transport',
    icon: <Shield size={24} />,
  },
  {
    id: 3,
    title: 'Service efficace',
    description: 'Interface simple pour poster vos demandes de livraison',
    icon: <Zap size={24} />,
  },
  {
    id: 4,
    title: 'Livraison locale',
    description: 'Service optimisé pour les livraisons en ville',
    icon: <MapPin size={24} />,
  },
  {
    id: 5,
    title: 'Prix compétitifs',
    description: 'Tarifs adaptés aux particuliers et aux entreprises',
    icon: <Percent size={24} />,
  },
  {
    id: 6,
    title: 'Livreurs vérifiés',
    description: 'Tous nos livreurs sont vérifiés et formés',
    icon: <Users size={24} />,
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4"
          >
            Pourquoi choisir CALAVI COURSES
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto w-24 h-1 bg-secondary-500 mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-neutral-600"
          >
            Découvrez les avantages qui font de notre service la solution idéale pour vos livraisons en ville
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 border border-neutral-100 rounded-lg hover:border-primary-200 hover:shadow-md transition-all"
            >
              <div className="p-3 bg-primary-50 rounded-full inline-flex text-primary-500 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;