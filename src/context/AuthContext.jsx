import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext({})

export function useAuth() {
  return useContext(AuthContext)
}

export default function AuthProvider({ children }) {
  const [isAuthenticated ,setisAuthenticated] = useState(null)
  return (
    <AuthContext.Provider value={{ isAuthenticated , setisAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}
