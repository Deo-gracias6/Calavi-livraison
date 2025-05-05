import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import Button from '../components/common/Button';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-lg w-full text-center">
        <div className="bg-white shadow-md rounded-lg p-8">
          <div className="flex justify-center mb-6">
            <div className="h-24 w-24 bg-red-100 rounded-full flex items-center justify-center">
              <AlertTriangle size={48} className="text-red-500" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-neutral-800 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-neutral-700 mb-4">Page non trouvée</h2>
          <p className="text-neutral-600 mb-8">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <div className="flex justify-center">
            <Button to="/" variant="primary">
              Retour à l'accueil
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;