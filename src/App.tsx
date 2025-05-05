import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DeliveryPage from './pages/DeliveryPage';
import CourierPage from './pages/CourierPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminLoginPage from './pages/admin/LoginPage';
import AdminDashboardPage from './pages/admin/DashboardPage';
import ProtectedRoute from './components/common/ProtectedRoute';
import { useAuth } from './contexts/AuthContext';

function App() {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route 
          path="poster-livraison" 
          element={
            <ProtectedRoute>
              <DeliveryPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="devenir-livreur" 
          
          element={
            <ProtectedRoute>
              <CourierPage />
            </ProtectedRoute>
          } 
        />
      </Route>
      
      <Route path="/admin">
        <Route path="login" element={<AdminLoginPage />} />
        <Route 
          path="dashboard" 
          element={
            <ProtectedRoute adminOnly>
              <AdminDashboardPage />
            </ProtectedRoute>
          }
        />
      </Route>
      
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;