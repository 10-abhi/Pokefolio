import { ArrowLeft  } from "lucide-react"
import { ProjectCard } from "./projectCard"

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
            image="/payhub.png"
            types={["fire", "electric"]}
            techStack={["Next.js", "TypeScript","Express.js","Node.js","Turborepo","Tailwind CSS" , "Postgres" , "React"]}
            githubUrl="https://github.com/10-abhi/PayHub"
            demoUrl="https://pay-hub-user-app.vercel.app/"
          />
          <ProjectCard
            title="ScribVerse"
            description="An Blog web-app where user can write their blog and share it with others currently intergating AI features where user will not have to write blogs manually"
            image="/scrib.png"
            types={["dragon", "fairy"]}
            techStack={["React.js", "MongoDB", "TypeScript", "Honojs","Cloudflare"]}
            githubUrl="https://github.com/10-abhi/ScribVerse"
            demoUrl="https://scrib-verse.vercel.app/"
          />
          <ProjectCard
            title="Realtime-ws-notifier"
            description="A lightweight WebSocket server using Redis Pub/Sub to deliver real-time events to connected users, based on their userId"
            image="/placeholder.svg?height=300&width=500"
            types={["dragon", "fairy"]}
            techStack={["Websocket", "Node.js", "Redis(Pubs/Subs)", "TypeScript"]}
            githubUrl="https://github.com/10-abhi/realtime-ws-notifier"
            // demoUrl="https://demo.com"
          />
        </div>
  
        {/* <div className="featured-project">
          <h3>Featured Project</h3>
  
          <div className="PayHub">
            <div className="featured-image">
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
        </div> */}
      </div>
    )
  }
  