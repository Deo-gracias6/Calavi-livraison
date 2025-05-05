import { useState, FormEvent, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Package, MapPin, User, Phone, FileText, Clock } from 'lucide-react';
import Button from '../components/common/Button';

const DeliveryPage = () => {
  const [formData, setFormData] = useState({
    pickupAddress: '',
    deliveryAddress: '',
    packageDetails: '',
    receiverName: '',
    receiverPhone: '',
    deliveryNotes: '',
    deliveryTime: '',
  });
  
  const [formErrors, setFormErrors] = useState({
    pickupAddress: '',
    deliveryAddress: '',
    packageDetails: '',
    receiverName: '',
    receiverPhone: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  
  useEffect(() => {
    document.title = 'Poster une livraison | CALAVI COURSES';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  const validateForm = () => {
    const errors = {
      pickupAddress: '',
      deliveryAddress: '',
      packageDetails: '',
      receiverName: '',
      receiverPhone: '',
    };
    
    let isValid = true;
    
    if (!formData.pickupAddress.trim()) {
      errors.pickupAddress = 'L\'adresse de retrait est requise';
      isValid = false;
    }
    
    if (!formData.deliveryAddress.trim()) {
      errors.deliveryAddress = 'L\'adresse de livraison est requise';
      isValid = false;
    }
    
    if (!formData.packageDetails.trim()) {
      errors.packageDetails = 'Les détails du colis sont requis';
      isValid = false;
    }
    
    if (!formData.receiverName.trim()) {
      errors.receiverName = 'Le nom du destinataire est requis';
      isValid = false;
    }
    
    if (!formData.receiverPhone.trim()) {
      errors.receiverPhone = 'Le téléphone du destinataire est requis';
      isValid = false;
    } else if (!(/^\d{10}$/.test(formData.receiverPhone.replace(/\s/g, '')))) {
      errors.receiverPhone = 'Numéro de téléphone invalide';
      isValid = false;
    }
    
    setFormErrors(errors);
    return isValid;
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user types
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors({
        ...formErrors,
        [name]: '',
      });
    }
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSuccessMessage('Votre demande de livraison a été enregistrée avec succès! Un livreur sera bientôt assigné à votre commande.');
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        pickupAddress: '',
        deliveryAddress: '',
        packageDetails: '',
        receiverName: '',
        receiverPhone: '',
        deliveryNotes: '',
        deliveryTime: '',
      });
      setSuccessMessage('');
    }, 5000);
  };
  
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-10">
            <h1 className="text-xl md:text-4xl font-bold text-neutral-800 mb-4">
              Poster une livraison
            </h1>
            <p className="text-neutral-600 text-xs">
              Remplissez le formulaire ci-dessous pour faire livrer votre colis rapidement
            </p>
          </div>
          
          {successMessage ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border-l-4 border-green-500 p-6 rounded-md shadow-md mb-10"
            >
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-md font-medium text-green-700">{successMessage}</p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white shadow-md rounded-lg p-6 md:p-8"
            >
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div  className='space-y-2'>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-2 text-xs text-primary-500" />
                        Adresse de retrait
                      </div>
                    </label>
                    <input
                      type="text"
                      name="pickupAddress"
                      value={formData.pickupAddress}
                      onChange={handleInputChange}
                      placeholder="123 Rue de Calavi, ITTA STATION"
                      className={`w-full px-4 py-2 text-xs border rounded-md focus:ring-primary-500 focus:border-primary-500 ${
                        formErrors.pickupAddress ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {formErrors.pickupAddress && (
                      <p className="mt-1 text-xs text-red-600">{formErrors.pickupAddress}</p>
                    )}
                  </div>
                  
                  <div className='space-y-2'>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-2 text-xs text-secondary-500" />
                        Adresse de livraison
                      </div>
                    </label>
                    <input
                      type="text"
                      name="deliveryAddress"
                      value={formData.deliveryAddress}
                      onChange={handleInputChange}
                      placeholder="456 Rue TANKPE, Carrefour"
                      className={`w-full px-4 py-2 text-xs border rounded-md focus:ring-primary-500 focus:border-primary-500 ${
                        formErrors.deliveryAddress ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {formErrors.deliveryAddress && (
                      <p className="mt-1 text-xs text-red-600">{formErrors.deliveryAddress}</p>
                    )}
                  </div>
                  
                  <div className='space-y-2'>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <div className="flex items-center">
                        <Package size={14} className="mr-2 text-primary-500 text-xs" />
                        Détails du colis
                      </div>
                    </label>
                    <textarea
                      name="packageDetails"
                      value={formData.packageDetails}
                      onChange={handleInputChange}
                      placeholder="Type et dimensions du colis, contenu, poids approximatif..."
                      rows={3}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-primary-500 focus:border-primary-500 text-xs ${
                        formErrors.packageDetails ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {formErrors.packageDetails && (
                      <p className="mt-1 text-xs text-red-600">{formErrors.packageDetails}</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className='space-y-2'>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        <div className="flex items-center">
                          <User size={14} className="mr-2 text-xs text-primary-500" />
                          Nom du destinataire
                        </div>
                      </label>
                      <input
                        type="text"
                        name="receiverName"
                        value={formData.receiverName}
                        onChange={handleInputChange}
                        placeholder="Déogratias AGBIDI"
                        className={`w-full px-4 py-2 border rounded-md text-xs focus:ring-primary-500 focus:border-primary-500 ${
                          formErrors.receiverName ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {formErrors.receiverName && (
                        <p className="mt-1 text-xs text-red-600">{formErrors.receiverName}</p>
                      )}
                    </div>
                    
                    <div className='space-y-2'>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        <div className="flex items-center">
                          <Phone size={14} className="mr-2 text-xs text-primary-500" />
                          Téléphone du destinataire
                        </div>
                      </label>
                      <input
                        type="tel"
                        name="receiverPhone"
                        value={formData.receiverPhone}
                        onChange={handleInputChange}
                        placeholder="01 53 56 44 97"
                        className={`w-full px-4 py-2 text-xs border rounded-md focus:ring-primary-500 focus:border-primary-500 ${
                          formErrors.receiverPhone ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {formErrors.receiverPhone && (
                        <p className="mt-1 text-xs text-red-600">{formErrors.receiverPhone}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className='space-y-2'>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <div className="flex items-center">
                        <Clock size={14} className="mr-2 text-xs text-primary-500" />
                        Heure de livraison souhaitée (optionnel)
                      </div>
                    </label>
                    <select
                      name="deliveryTime"
                      value={formData.deliveryTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 text-xs border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Dès que possible</option>
                      <option value="morning">Ce matin (9h-12h)</option>
                      <option value="afternoon">Cet après-midi (14h-18h)</option>
                      <option value="evening">Ce soir (18h-21h)</option>
                    </select>
                  </div>
                  
                  <div className='space-y-2'>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <div className="flex items-center">
                        <FileText size={14} className="mr-2 text-xs text-primary-500" />
                        Instructions de livraison (optionnel)
                      </div>
                    </label>
                    <textarea
                      name="deliveryNotes"
                      value={formData.deliveryNotes}
                      onChange={handleInputChange}
                      placeholder="Code d'entrée, étage, instructions spéciales..."
                      rows={2}
                      className="w-full px-4 py-2 text-xs border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  
                  <div className="pt-4">
                    <Button
                      type="submit"
                      variant="primary"
                      fullWidth
                      disabled={isSubmitting}
                      className="py-3 text-xs"
                      size='sm'
                    >
                      {isSubmitting ? 'Traitement en cours...' : 'Soumettre ma demande de livraison'}
                    </Button>
                  </div>
                </div>
              </form>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default DeliveryPage;