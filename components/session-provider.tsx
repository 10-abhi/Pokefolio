"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type SessionContextType = {
  hasVisitedBefore: boolean
  setHasVisitedBefore: (value: boolean) => void
}

const SessionContext = createContext<SessionContextType | undefined>(undefined)

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [hasVisitedBefore, setHasVisitedBefore] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const visited = localStorage.getItem("pokemon-portfolio-visited") === "true"
    setHasVisitedBefore(visited)
    setIsLoaded(true)
  }, [])

  const updateVisitedStatus = (value: boolean) => {
    setHasVisitedBefore(value)
    localStorage.setItem("pokemon-portfolio-visited", value ? "true" : "false")
  }

  if (!isLoaded) {
    return null
  }

  return (
    <SessionContext.Provider
      value={{
        hasVisitedBefore,
        setHasVisitedBefore: updateVisitedStatus,
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}

export function useSession() {
  const context = useContext(SessionContext)
  if (context === undefined) {
    throw new Error("useSession must be used within a SessionProvider")
  }
  return context
}
