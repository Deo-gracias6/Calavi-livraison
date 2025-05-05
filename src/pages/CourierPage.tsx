import { useState, FormEvent, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Clipboard, FileText, Truck, Camera } from 'lucide-react';
import Button from '../components/common/Button';

const CourierPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    birthDate: '',
    vehicleType: '',
    licenseNumber: '',
    experience: '',
    motivation: '',
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    birthDate: '',
    vehicleType: '',
    licenseNumber: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [step, setStep] = useState(1);

  useEffect(() => {
    document.title = 'Devenir livreur | CALAVI COURSES';

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const validateStep = (currentStep: number) => {
    const errors = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      postalCode: '',
      birthDate: '',
      vehicleType: '',
      licenseNumber: '',
    };

    let isValid = true;

    if (currentStep === 1) {
      if (!formData.firstName.trim()) {
        errors.firstName = 'Le prénom est requis';
        isValid = false;
      }

      if (!formData.lastName.trim()) {
        errors.lastName = 'Le nom est requis';
        isValid = false;
      }

      if (!formData.email.trim()) {
        errors.email = 'L\'email est requis';
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = 'Format d\'email invalide';
        isValid = false;
      }

      if (!formData.phone.trim()) {
        errors.phone = 'Le téléphone est requis';
        isValid = false;
      } else if (!(/^\d{10}$/.test(formData.phone.replace(/\s/g, '')))) {
        errors.phone = 'Numéro de téléphone invalide';
        isValid = false;
      }
    } else if (currentStep === 2) {
      if (!formData.address.trim()) {
        errors.address = 'L\'adresse est requise';
        isValid = false;
      }

      if (!formData.city.trim()) {
        errors.city = 'La ville est requise';
        isValid = false;
      }

      if (!formData.postalCode.trim()) {
        errors.postalCode = 'Le code postal est requis';
        isValid = false;
      } else if (!/^\d{5}$/.test(formData.postalCode)) {
        errors.postalCode = 'Code postal invalide';
        isValid = false;
      }

      if (!formData.birthDate.trim()) {
        errors.birthDate = 'La date de naissance est requise';
        isValid = false;
      } else {
        // Check if user is at least 18 years old
        const birthDate = new Date(formData.birthDate);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (age < 18 || (age === 18 && monthDiff < 0)) {
          errors.birthDate = 'Vous devez avoir au moins 18 ans';
          isValid = false;
        }
      }
    } else if (currentStep === 3) {
      if (!formData.vehicleType) {
        errors.vehicleType = 'Le type de véhicule est requis';
        isValid = false;
      }

      if (!formData.licenseNumber.trim()) {
        errors.licenseNumber = 'Le numéro de permis est requis';
        isValid = false;
      }
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

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateStep(step)) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setSuccessMessage('Votre candidature a été envoyée avec succès! Notre équipe va l\'examiner et vous contactera très prochainement.');
    setIsSubmitting(false);

    // Reset form after 5 seconds
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        birthDate: '',
        vehicleType: '',
        licenseNumber: '',
        experience: '',
        motivation: '',
      });
      setSuccessMessage('');
      setStep(1);
    }, 5000);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="container-custom">
        <motion.div
          key={`step-${step}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-8">
            <h1 className="text-xl md:text-4xl font-bold text-neutral-800 mb-4">
              Devenir livreur
            </h1>
            <p className="text-neutral-600 mb-6 text-xs">
              Rejoignez notre équipe de livreurs et gagnez de l'argent en effectuant des livraisons dans votre ville
            </p>

            {!successMessage && (
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center w-full max-w-xs">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex-1 flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center text-xs justify-center ${i === step
                          ? 'bg-primary-500 text-white'
                          : i < step
                            ? 'bg-primary-200 text-primary-700'
                            : 'bg-gray-200 text-gray-500'
                          }`}
                      >
                        {i}
                      </div>
                      {i < 4 && (
                        <div
                          className={`h-1 flex-1 ${i < step ? 'bg-primary-300' : 'bg-gray-200'
                            }`}
                        ></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
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
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-neutral-800 flex items-center mb-4">
                      <User size={14} className="mr-2 text-xs text-primary-500" />
                      Informations personnelles
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className='space-y-1'>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          Prénom
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Jean"
                          className={`w-full px-4 py-2 text-xs border rounded-md focus:ring-primary-500 focus:border-primary-500 ${formErrors.firstName ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        {formErrors.firstName && (
                          <p className="mt-1 text-xs text-red-600">{formErrors.firstName}</p>
                        )}
                      </div>

                      <div className='space-y-1'>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          Nom
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Yémalin"
                          className={`w-full px-4 py-2 text-xs border rounded-md focus:ring-primary-500 focus:border-primary-500 ${formErrors.lastName ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        {formErrors.lastName && (
                          <p className="mt-1 text-xs text-red-600">{formErrors.lastName}</p>
                        )}
                      </div>
                    </div>

                    <div className='space-y-1'>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        <div className="flex items-center">
                          <Mail size={14} className="mr-2 text-xs text-primary-500" />
                          Email
                        </div>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="yemalin@example.com"
                        className={`w-full px-4 py-2 text-xs border rounded-md focus:ring-primary-500 focus:border-primary-500 ${formErrors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-xs text-red-600">{formErrors.email}</p>
                      )}
                    </div>

                    <div className='space-y-1'>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        <div className="flex items-center">
                          <Phone size={14} className="mr-2 text-xs text-primary-500" />
                          Téléphone
                        </div>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="06 53 56 44 97 "
                        className={`w-full px-4 py-2 text-xs border rounded-md focus:ring-primary-500 focus:border-primary-500 ${formErrors.phone ? 'border-red-500' : 'border-gray-300'
                          }`}
                      />
                      {formErrors.phone && (
                        <p className="mt-1 text-xs text-red-600">{formErrors.phone}</p>
                      )}
                    </div>

                    <div className="pt-4">
                      <Button
                        type="button"
                        variant="primary"
                        fullWidth
                        onClick={handleNext}
                        className="text-xs"
                        size='sm'
                      >
                        Continuer
                      </Button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-xs font-semibold text-neutral-800 flex items-center mb-4">
                      <Clipboard size={14} className="mr-2 text-primary-500" />
                      Adresse et informations complémentaires
                    </h2>

                    <div className='space-y-1'>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Adresse
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="123 Rue de Calavi, ITTA STATION"
                        className={`w-full px-4 py-2 text-xs border rounded-md focus:ring-primary-500 focus:border-primary-500 ${formErrors.address ? 'border-red-500' : 'border-gray-300'
                          }`}
                      />
                      {formErrors.address && (
                        <p className="mt-1 text-xs text-red-600">{formErrors.address}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className='space-y-1'>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          Ville
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="Calavi"
                          className={`w-full px-4 py-2 text-xs border rounded-md focus:ring-primary-500 focus:border-primary-500 ${formErrors.city ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        {formErrors.city && (
                          <p className="mt-1 text-xs text-red-600">{formErrors.city}</p>
                        )}
                      </div>

                      <div className='space-y-1'>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          Code postal
                        </label>
                        <input
                          type="text"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          placeholder="00229"
                          className={`w-full px-4 py-2 text-xs border rounded-md focus:ring-primary-500 focus:border-primary-500 ${formErrors.postalCode ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        {formErrors.postalCode && (
                          <p className="mt-1 text-xs text-red-600">{formErrors.postalCode}</p>
                        )}
                      </div>
                    </div>

                    <div className='space-y-1'>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Date de naissance
                      </label>
                      <input
                        type="date"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleInputChange}
                        max={new Date().toISOString().split('T')[0]}
                        className={`w-full px-4 py-2 text-xs border rounded-md focus:ring-primary-500 focus:border-primary-500 ${formErrors.birthDate ? 'border-red-500' : 'border-gray-300'
                          }`}
                      />
                      {formErrors.birthDate && (
                        <p className="mt-1 text-xs text-red-600">{formErrors.birthDate}</p>
                      )}
                    </div>

                    <div className="flex space-x-4 pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handlePrevious}
                        className="flex-1 text-xs"
                        size='sm'
                      >
                        Retour
                      </Button>
                      <Button
                        type="button"
                        variant="primary"
                        onClick={handleNext}
                        className="flex-1 text-xs"
                        size='sm'
                      >
                        Continuer
                      </Button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-xs font-semibold text-neutral-800 flex items-center mb-4">
                      <Truck size={14} className="mr-2 text-primary-500" />
                      Informations du véhicule
                    </h2>

                    <div className='space-y-1'>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Type de véhicule
                      </label>
                      <select
                        name="vehicleType"
                        value={formData.vehicleType}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 text-xs border rounded-md focus:ring-primary-500 focus:border-primary-500 ${formErrors.vehicleType ? 'border-red-500' : 'border-gray-300'
                          }`}
                      >
                        <option value="">Sélectionnez un type de véhicule</option>
                        <option value="bike">Vélo</option>
                        <option value="ebike">Vélo électrique</option>
                        <option value="scooter">Scooter</option>
                        <option value="moto">Moto</option>
                        <option value="car">Voiture</option>
                      </select>
                      {formErrors.vehicleType && (
                        <p className="mt-1 text-xs text-red-600">{formErrors.vehicleType}</p>
                      )}
                    </div>

                    <div className='space-y-1'>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Numéro de permis (si applicable)
                      </label>
                      <input
                        type="text"
                        name="licenseNumber"
                        value={formData.licenseNumber}
                        onChange={handleInputChange}
                        placeholder="12AB34567"
                        className={`w-full px-4 py-2 text-xs border rounded-md focus:ring-primary-500 focus:border-primary-500 ${formErrors.licenseNumber ? 'border-red-500' : 'border-gray-300'
                          }`}
                      />
                      {formErrors.licenseNumber && (
                        <p className="mt-1 text-xs text-red-600">{formErrors.licenseNumber}</p>
                      )}
                    </div>

                    <div className='space-y-1'>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        <div className="flex items-center">
                          <Camera size={14} className="mr-2 text-primary-500" />
                          Photo du véhicule
                        </div>
                      </label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4h-12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                            >
                              <span className="text-xs">Télécharger un fichier</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                              />
                            </label>
                            <p className="pl-1 text-xs">ou glisser-déposer</p>
                          </div>
                          <p className="text-xs text-gray-500">
                            PNG, JPG, GIF jusqu'à 10MB
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-4 pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handlePrevious}
                        className="flex-1 text-xs"
                        size='sm'
                      >
                        Retour
                      </Button>
                      <Button
                        type="button"
                        variant="primary"
                        onClick={handleNext}
                        className="flex-1 text-xs"
                        size='sm'
                      >
                        Continuer
                      </Button>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-6">
                    <h2 className="text-xs font-semibold text-neutral-800 flex items-center mb-4">
                      <FileText size={14} className="mr-2 text-primary-500" />
                      Expérience et motivation
                    </h2>

                    <div className='space-y-1'>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Expérience de livraison (si applicable)
                      </label>
                      <textarea
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="Décrivez votre expérience précédente en tant que livreur ou dans un domaine similaire..."
                        className="w-full px-4 py-2 text-xs border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Pourquoi souhaitez-vous devenir livreur chez CALAVI COURSES ?
                      </label>
                      <textarea
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Partagez votre motivation pour rejoindre notre équipe de livreurs..."
                        className="w-full px-4 py-2 text-xs border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>

                    <div className="flex items-center mt-4">
                      <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        required
                        className="h-4 w-4 text-xs text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <label htmlFor="terms" className="ml-2 block text-xs text-gray-900">
                        J'accepte les{' '}
                        <a href="#" className="font-medium text-xs text-primary-600 hover:text-primary-500">
                          conditions d'utilisation
                        </a>{' '}
                        et la{' '}
                        <a href="#" className="font-medium text-xs text-primary-600 hover:text-primary-500">
                          politique de confidentialité
                        </a>
                      </label>
                    </div>

                    <div className="flex space-x-4 pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handlePrevious}
                        className="flex-1 text-xs"
                        size='sm'
                      >
                        Retour
                      </Button>
                      <Button
                        type="submit"
                        variant="primary"
                        disabled={isSubmitting}
                        className="flex-1 text-xs"
                        size='sm'
                      >
                        {isSubmitting ? 'Envoi en cours...' : 'Soumettre ma candidature'}
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default CourierPage;