"use client"

import type React from "react"

import { motion } from "framer-motion"
import Image from "next/image"

interface NavCardProps {
  title: string
  type: string
  icon: React.ReactNode
  description: string
  onClick: () => void
  delay: number
  imageUrl?: string
}

export const NavCard = ({ title, type, icon, description, onClick, delay, imageUrl }: NavCardProps) => {
  return (
    <motion.div
      className={`nav-card ${type}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        scale: 1.03,
        boxShadow: `0 10px 25px -5px rgba(var(--${type}-rgb), 0.4)`,
      }}
    >
      <div className="card-content">
        {imageUrl && (
          <div className="card-image-container">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              width={80}
              height={80}
              className="card-pokemon-image"
            />
          </div>
        )}
        <div className="card-header">
          <h3>{title}</h3>
          <div className="card-icon">{icon}</div>
        </div>
        <p>{description}</p>
        <div className="card-decoration">
          <div className="card-circle"></div>
        </div>
        <div className="card-footer">
          <span>Select</span>
        </div>
      </div>
    </motion.div>
  )
}
