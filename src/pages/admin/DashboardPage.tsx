import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Package,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
} from 'lucide-react';
import AdminLayout from '../../layouts/AdminLayout';

// Mock data
const mockStats = {
  totalDeliveries: 1234,
  pendingDeliveries: 45,
  totalCouriers: 89,
  pendingApplications: 12,
  completionRate: 98.5,
  averageDeliveryTime: '28 min',
};

const mockDeliveries = [
  {
    id: 1,
    status: 'pending',
    pickupAddress: '123 Rue deCalavi',
    deliveryAddress: '456 Carrefour Maria-Gléta',
    customerName: 'Sophie AGBIDI',
    timestamp: '2024-02-20T14:30:00',
  },
  // Add more mock deliveries...
];

const mockApplications = [
  {
    id: 1,
    name: 'Jean-Baptiste',
    email: 'jean@email.com',
    vehicle: 'Scooter',
    experience: '2 ans',
    status: 'pending',
    appliedAt: '2024-02-19T10:15:00',
  },
  // Add more mock applications...
];

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="mb-8 space-y-2">
          <h1 className="text-xl font-bold text-gray-800">
            Tableau de bord administrateur
          </h1>
          <p className="text-gray-600 text-xs">
            Gérez les livraisons et les candidatures des livreurs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary-100 rounded-full">
                  <Package className="h-4 w-4 text-primary-600" />
                </div>
                <h3 className="text-gray-600 text-lg">Total des livraisons</h3>
              </div>
            </div>
            <span className="text-2xl flex items-center justify-center font-bold text-primary-600">
              {mockStats.totalDeliveries}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-orange-100 rounded-full">
                  <Clock className="h-4 w-4  text-orange-600" />
                </div>
                <h3 className="text-gray-600 text-lg">Livraisons en attente</h3>
              </div>
            </div>
            <span className="text-2xl flex items-center justify-center font-bold text-orange-600">
              {mockStats.pendingDeliveries}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <Users className="h-4 w-4  text-green-600" />
                </div>
                <h3 className="text-gray-600 text-lg">Livreurs actifs</h3>
              </div>
            </div>
            <span className="text-2xl flex items-center justify-center font-bold text-green-600">
              {mockStats.totalCouriers}
            </span>
          </motion.div>
        </div>

        <div className="bg-white rounded-lg shadow-md">
          <div className="border-b">
            <nav className="flex">
              <button
                className={`px-6 py-4 text-xs font-medium ${activeTab === 'overview'
                  ? 'border-b-2 border-primary-500 text-primary-600'
                  : 'text-gray-500 hover:text-gray-700'
                  }`}
                onClick={() => setActiveTab('overview')}
              >
                Vue d'ensemble
              </button>
              <button
                className={`px-6 py-4 text-xs font-medium ${activeTab === 'deliveries'
                  ? 'border-b-2 border-primary-500 text-primary-600'
                  : 'text-gray-500 hover:text-gray-700'
                  }`}
                onClick={() => setActiveTab('deliveries')}
              >
                Livraisons
              </button>
              <button
                className={`px-6 py-4 text-xs font-medium ${activeTab === 'applications'
                  ? 'border-b-2 border-primary-500 text-primary-600'
                  : 'text-gray-500 hover:text-gray-700'
                  }`}
                onClick={() => setActiveTab('applications')}
              >
                Candidatures
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xs font-medium text-gray-600">
                        Taux de complétion
                      </h4>
                      <span className="text-green-600 text-xs font-semibold">
                        {mockStats.completionRate}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 rounded-full h-2"
                        style={{ width: `${mockStats.completionRate}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xs font-medium text-gray-600">
                        Temps moyen de livraison
                      </h4>
                      <span className="text-primary-600 text-xs font-semibold">
                        {mockStats.averageDeliveryTime}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4  text-primary-500 mr-2" />
                      <span className="text-xs text-gray-500">
                        -2min par rapport à la semaine dernière
                      </span>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xs font-medium text-gray-600">
                        Candidatures en attente
                      </h4>
                      <span className="text-orange-600 text-xs font-semibold">
                        {mockStats.pendingApplications}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <AlertCircle className="h-4 w-4  text-orange-500 mr-2" />
                      <span className="text-xs text-gray-500">
                        Nécessite votre attention
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'deliveries' && (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Adresse de retrait
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Adresse de livraison
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Client
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {mockDeliveries.map((delivery) => (
                      <tr key={delivery.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${delivery.status === 'pending'
                            ? 'bg-orange-100 text-orange-800'
                            : 'bg-green-100 text-green-800'
                            }`}>
                            {delivery.status === 'pending' ? 'En attente' : 'Terminé'}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-xs whitespace-nowrap">
                          {delivery.pickupAddress}
                        </td>
                        <td className="px-6 py-4 text-xs whitespace-nowrap">
                          {delivery.deliveryAddress}
                        </td>
                        <td className="px-6 py-4 text-xs whitespace-nowrap">
                          {delivery.customerName}
                        </td>
                        <td className="px-6 py-4 text-xs whitespace-nowrap">
                          {new Date(delivery.timestamp).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-xs whitespace-nowrap">
                          <button className="text-primary-600 hover:text-primary-900">
                            Détails
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'applications' && (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Candidat
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Véhicule
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Expérience
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {mockApplications.map((application) => (
                      <tr key={application.id}>
                        <td className="px-6 py-4 text-xs whitespace-nowrap">
                          <div>
                            <div className="text-xs font-medium text-gray-900">
                              {application.name}
                            </div>
                            <div className="text-xs text-gray-500">
                              {application.email}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-xs whitespace-nowrap">
                          {application.vehicle}
                        </td>
                        <td className="px-6 py-4 text-xs whitespace-nowrap">
                          {application.experience}
                        </td>
                        <td className="px-6 py-4 text-xs whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${application.status === 'pending'
                            ? 'bg-orange-100 text-orange-800'
                            : 'bg-green-100 text-green-800'
                            }`}>
                            {application.status === 'pending' ? 'En attente' : 'Approuvé'}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-xs whitespace-nowrap">
                          {new Date(application.appliedAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-xs whitespace-nowrap space-x-2">
                          <button className="text-green-600 hover:text-green-900">
                            <CheckCircle className="h-4 w-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <XCircle className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default DashboardPage;