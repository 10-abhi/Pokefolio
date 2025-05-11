import { ArrowLeft , Github , ExternalLink } from "lucide-react"
import { ProjectCard } from "./projectCard"
import Image from "next/image"
export const ProjectsSection = ({ onBack }: { onBack: () => void }) => {
    return (
      <div className="section projects-section">
        <div className="section-header">
          <button className="back-button" onClick={onBack}>
            <ArrowLeft />
          </button>
          <h2>Projects</h2>
          <div className="section-icon fire"></div>
        </div>
  
        <div className="projects-grid">
          <ProjectCard
            title="PayHub"
            description="A Payment System which helps in p2p and bank to bank transactions"
            image="/placeholder.svg?height=200&width=350"
            types={["fire", "electric"]}
            techStack={["Next.js", "TypeScript","Express.js","Node.js","Turborepo","Tailwind CSS" , "Postgres"]}
            githubUrl="https://github.com/10-abhi/PayHub"
            demoUrl="https://pay-hub-user-app.vercel.app/"
          />
          <ProjectCard
            title="ScribVerse"
            description="A Blog web-app where user can write their blog and share it with others"
            image="/placeholder.svg?height=200&width=350"
            types={["dragon", "fairy"]}
            techStack={["React.js", "Express.js", "MongoDB", "TypeScript"]}
            githubUrl="https://github.com/10-abhi/ScribVerse"
            // demoUrl="https://demo.com"
          />
        </div>
  
        <div className="featured-project">
          <h3>Featured Project</h3>
  
          <div className="PayHub">
            <div className="featured-image">
              {/* <img src="/placeholder.svg?height=300&width=500" alt="Featured Project" /> */}
              <Image src="/placeholder.svg?height=300&width=500" alt="Featured Project" width={500} height={300}></Image>
              <div className="featured-types">
                <span className="type fire">Fire</span>
                <span className="type poison">Poison</span>
              </div>
              <h4>Payment WebApp</h4>
            </div>
  
            <div className="featured-details">
              <p>
                An immersive web application that simulates the evolution process of Pokémon with realistic animations and
                sound effects. Users can trigger evolutions, view detailed statistics, and share their evolved Pokémon
                with friends.
              </p>
  
              <div className="featured-features">
                <h5>Key Features</h5>
                <ul>
                  <li>Realistic evolution animations using Three.js and WebGL</li>
                  <li>Progressive Web App with offline capabilities</li>
                  <li>Social sharing with OG image generation</li>
                </ul>
              </div>
  
              <div className="featured-links">
                <a href="https://github.com/10-abhi/PayHub" target="_blank" rel="noopener noreferrer" className="github-link">
                  <Github size={16} />
                  View Code
                </a>
  
                <a href="https://pay-hub-user-app.vercel.app/" target="_blank" rel="noopener noreferrer" className="demo-link">
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  