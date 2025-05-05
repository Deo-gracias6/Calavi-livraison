import { motion } from 'framer-motion';

const stats = [
  {
    id: 1,
    value: '15k+',
    label: 'Livraisons',
    suffix: 'par mois',
  },
  {
    id: 2,
    value: '200+',
    label: 'Livreurs',
    suffix: 'actifs',
  },
  {
    id: 3,
    value: '98%',
    label: 'Satisfaction',
    suffix: 'client',
  },
  {
    id: 4,
    value: '10+',
    label: 'Villes',
    suffix: 'couvertes',
  },
];

const Stats = () => {
  return (
    <section className="py-16 bg-primary-500 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-primary-200 text-sm uppercase tracking-wider">
                {stat.label} <span className="block md:inline">{stat.suffix}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;