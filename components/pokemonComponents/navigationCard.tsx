import { motion } from "framer-motion"
import Image from "next/image"

interface NavCardProps {
  title: string
  type: string
  icon: React.ReactNode
  description: string
  onClick: () => void
  delay: number
  image: string
}

export const NavCard = ({ title, type, icon, onClick, delay, image }: NavCardProps) => {
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
        <div className="card-header">
          <h3>{title}</h3>
          <div className="card-icon">{icon}</div>
        </div>
        <div className="card-decoration">
          <Image className="card-circle" src={image} alt={title} width={100} height={100}></Image>
        </div>
        <div className="card-footer">
          <span>Select</span>
        </div>
      </div>
    </motion.div>
  )
}