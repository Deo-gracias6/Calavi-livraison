import React, { createContext, useState, useContext, useEffect } from 'react';

type User = {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
} | null;

type AuthContextType = {
  user: User;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  adminLogin: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
};

// Mock user database
const MOCK_USERS = [
  {
    id: '1',
    email: 'user@example.com',
    name: 'User Test',
    password: 'password123',
    role: 'user' as const,
  },
  {
    id: '2',
    email: 'admin@calavi.fr',
    name: 'Admin',
    password: 'admin123',
    role: 'admin' as const,
  },
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem('calavi_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const foundUser = MOCK_USERS.find(
      u => u.email === email && u.password === password && u.role === 'user'
    );
    
    if (foundUser) {
      const { password, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('calavi_user', JSON.stringify(userWithoutPassword));
    } else {
      throw new Error('Email ou mot de passe incorrect');
    }
    
    setLoading(false);
  };

  const adminLogin = async (email: string, password: string) => {
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const foundUser = MOCK_USERS.find(
      u => u.email === email && u.password === password && u.role === 'admin'
    );
    
    if (foundUser) {
      const { password, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('calavi_user', JSON.stringify(userWithoutPassword));
    } else {
      throw new Error('Identifiants administrateur invalides');
    }
    
    setLoading(false);
  };

  const register = async (name: string, email: string, password: string) => {
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if user already exists
    const userExists = MOCK_USERS.some(u => u.email === email);
    
    if (userExists) {
      setLoading(false);
      throw new Error('Cet email est déjà utilisé');
    }
    
    // Create new user
    const newUser = {
      id: String(MOCK_USERS.length + 1),
      email,
      name,
      password,
      role: 'user' as const,
    };
    
    // Add to mock database
    MOCK_USERS.push(newUser);
    
    // Log in the user
    const { password: _, ...userWithoutPassword } = newUser;
    setUser(userWithoutPassword);
    localStorage.setItem('calavi_user', JSON.stringify(userWithoutPassword));
    
    setLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('calavi_user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        adminLogin,
        register,
        logout,
        isAuthenticated: !!user,
        isAdmin: user?.role === 'admin',
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};