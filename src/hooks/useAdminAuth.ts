"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface AdminSession {
  username: string;
  loginTime: string;
  expires: string;
}

export function useAdminAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [session, setSession] = useState<AdminSession | null>(null);
  const router = useRouter();

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = () => {
    console.log('Checking auth status...');
    try {
      const sessionData = localStorage.getItem('adminSession');
      console.log('Session data from localStorage:', sessionData);
      
      if (!sessionData) {
        console.log('No session found');
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }

      const session: AdminSession = JSON.parse(sessionData);
      console.log('Parsed session:', session);
      
      const now = new Date();
      const expiresAt = new Date(session.expires);
      console.log('Session expires:', expiresAt, 'Current time:', now);

      if (now > expiresAt) {
        // Session expired
        console.log('Session expired, logging out...');
        logout();
        return;
      }

      console.log('Session valid, user authenticated');
      setSession(session);
      setIsAuthenticated(true);
      setIsLoading(false);
    } catch (error) {
      console.error('Error checking auth status:', error);
      logout();
    }
  };

  const logout = () => {
    console.log('Logging out user...');
    localStorage.removeItem('adminSession');
    setSession(null);
    setIsAuthenticated(false);
    setIsLoading(false);
    window.location.href = '/admin/login';
  };

  const extendSession = () => {
    if (session) {
      const extendedSession = {
        ...session,
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // Extend by 24h
      };
      localStorage.setItem('adminSession', JSON.stringify(extendedSession));
      setSession(extendedSession);
    }
  };

  return {
    isAuthenticated,
    isLoading,
    session,
    logout,
    extendSession,
    checkAuthStatus
  };
}
