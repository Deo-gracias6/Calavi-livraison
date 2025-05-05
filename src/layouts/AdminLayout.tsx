import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
} from 'lucide-react';
import { useState } from 'react';
import Logo from '../components/common/Logo';
import { useAuth } from '../contexts/AuthContext';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();
  
  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between h-16 px-4 border-b">
            <Logo className="h-8" />
            <button
              className="lg:hidden text-gray-500 hover:text-gray-700"
              onClick={toggleSidebar}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <nav className="flex-1 px-4 py-6 space-y-1">
            <a
              href="/admin/dashboard"
              className="flex items-center px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
            >
              <LayoutDashboard className="h-4 w-4 mr-3" />
              Tableau de bord
            </a>
            <a
              href="/admin/deliveries"
              className="flex items-center px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
            >
              <Package className="h-4 w-4 mr-3" />
              Livraisons
            </a>
            <a
              href="/admin/couriers"
              className="flex items-center px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
            >
              <Users className="h-4 w-4 mr-3" />
              Livreurs
            </a>
            <a
              href="/admin/settings"
              className="flex items-center px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
            >
              <Settings className="h-4 w-4 mr-3" />
              Paramètres
            </a>
          </nav>
          
          <div className="border-t px-4 py-4">
            <button
              onClick={handleLogout}
              className="flex items-center px-4 py-2 text-xs text-gray-700 hover:bg-primary-600 hover:text-white rounded-md w-full"
            >
              <LogOut className="h-4 w-4 mr-3" />
              Déconnexion
            </button>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="lg:pl-64">
        <div className="sticky top-0 z-20 bg-white border-b">
          <div className="flex items-center justify-between h-16 px-4">
            <button
              className="lg:hidden text-gray-500 hover:text-gray-700"
              onClick={toggleSidebar}
            >
              <Menu className="h-6 w-6" />
            </button>
            
            <div className="flex items-center">
              <div className="relative">
                <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                  <img
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Admin"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <span className="font-medium text-xs">Admin</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <main className="flex-1">{children}</main>
      </div>
      
      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default AdminLayout;