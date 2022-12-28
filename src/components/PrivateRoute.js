import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { redirect } from 'react-router-dom';
import Dashboard from './Dashboard';

export default function PrivateRoute({ children }) {
    const { currentUser } = useAuth();
  return (
    currentUser ? children : <Navigate to="/login" />
  )
}
