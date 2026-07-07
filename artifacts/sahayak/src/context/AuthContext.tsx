import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  mobile: string;
  age: string;
  gender: string;
  state: string;
  district: string;
  region: string;
  address: string;
  pincode: string;
  disabilityType: string;
  disabilityPercentage: string;
  hasUdid: string;
  udidNumber?: string;
  employmentStatus: string;
  educationLevel: string;
  annualIncome: string;
  preferredLanguage: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, pass: string) => Promise<void>;
  register: (data: any) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('sahayak_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error('Failed to parse user from local storage');
      }
    }
    setIsLoaded(true);
  }, []);

  const login = async (email: string, pass: string) => {
    // Mock login: Accept any email/pass
    const mockUser: User = {
      id: "usr_123",
      name: "Rahul Kumar",
      email: email,
      mobile: "9876543210",
      age: "28",
      gender: "Male",
      state: "Delhi",
      district: "New Delhi",
      region: "Urban",
      address: "123, Model Town",
      pincode: "110009",
      disabilityType: "Locomotor",
      disabilityPercentage: "60",
      hasUdid: "Yes",
      udidNumber: "DL0120230001234",
      employmentStatus: "Working",
      educationLevel: "Graduate",
      annualIncome: "1-3L",
      preferredLanguage: "Hindi"
    };
    
    // Check if there's a stored user that matches the email (basic mock check)
    const stored = localStorage.getItem('sahayak_user');
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.email === email) {
        setUser(parsed);
        return;
      }
    }
    
    setUser(mockUser);
    localStorage.setItem('sahayak_user', JSON.stringify(mockUser));
  };

  const register = async (data: any) => {
    const newUser: User = {
      id: `usr_${Date.now()}`,
      ...data
    };
    setUser(newUser);
    localStorage.setItem('sahayak_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('sahayak_user');
  };

  const updateProfile = (data: Partial<User>) => {
    if (!user) return;
    const updated = { ...user, ...data };
    setUser(updated);
    localStorage.setItem('sahayak_user', JSON.stringify(updated));
  };

  if (!isLoaded) return null;

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateProfile, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
