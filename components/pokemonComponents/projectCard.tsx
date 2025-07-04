import { Github, ExternalLink } from "lucide-react"
import { ReactNode } from "react"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  image: ReactNode
  types: string[]
  techStack: string[]
  githubUrl: string
  demoUrl?: string
}

export const ProjectCard = ({ 
  title, 
  description, 
  image, 
  types, 
  techStack, 
  githubUrl, 
  demoUrl 
}: ProjectCardProps) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <Image src={image as string} alt={""} width={350} height={200}></Image>
        <div className="project-types">
          {types.map((type) => (
            <span key={type} className={`type ${type}`}>
              {type}
            </span>
          ))}
        </div>
        <h3>{title}</h3>
      </div>
      <div className="project-details">
        <p>{description}</p>
        <div className="tech-stack">
          {techStack.map((tech) => (
            <span key={tech} className="tech">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github size={16} />
            Code
          </a>
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}