import { motion } from 'framer-motion';
import { ClipboardList, MapPin, Package } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Poster une demande',
    description: 'Remplissez les détails de votre livraison via notre plateforme.',
    icon: <ClipboardList size={36} />,
  },
  {
    id: 2,
    title: 'Trouver un livreur',
    description: 'Les livreurs à proximité acceptent votre demande.',
    icon: <MapPin size={36} />,
  },
  {
    id: 3,
    title: 'Recevoir votre colis',
    description: 'Le livreur récupère et livre votre colis rapidement.',
    icon: <Package size={36} />,
  },
];

const HowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-white" id="how-it-works">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4"
          >
            Comment ça marche
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
            Notre processus simple en trois étapes pour faire livrer vos colis rapidement et en toute sécurité.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="bg-white p-8 rounded-lg shadow-md text-center border border-neutral-100 hover:border-primary-200 transition-colors"
            >
              <div className="w-16 h-16 mx-auto bg-primary-50 rounded-full flex items-center justify-center text-primary-500 mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                {step.title}
              </h3>
              <p className="text-neutral-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;