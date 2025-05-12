"use client"

import { SkillCard } from "./skillCard"
import { ArrowLeft } from "lucide-react"
import { GitHubTechStack } from "../githubComps/github-tech-stack"

export const SkillsSection = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="section skills-section">
      <div className="section-header">
        <button className="back-button" onClick={onBack}>
          <ArrowLeft />
        </button>
        <h2>Skills</h2>
        <div className="section-icon electric"></div>
      </div>

      <div className="skills-content">
        
        <div className="github-tech-wrapper w-full overflow-hidden mb-6">
          <GitHubTechStack username="10-abhi" className="w-full" />
        </div>

        <div className="skills-grid">
          <SkillCard
            title="Fire-Type Skills"
            type="fire"
            skills={["React & Next.js", "TypeScript", "Tailwind CSS", "Three.js", "HTML5 & CSS3"]}
          />

          <SkillCard
            title="Water-Type Skills"
            type="water"
            skills={["Node.js", "Express", "MongoDB", "SQL Databases", "RESTful APIs"]}
          />

          <SkillCard
            title="Electric-Type Tools"
            type="electric"
            skills={["Git & GitHub", "Docker", "CI/CD Pipelines", "Figma", "Jest & Testing"]}
          />
        </div>

        <div className="special-moves">
          <h3>Special Moves</h3>

          <div className="moves-list">
            <div className="move">
              <div className="move-header">
                <span>Full-Stack Development</span>
                <span className="move-pp">PP 30/30</span>
              </div>
              <div className="move-bar">
                <div className="move-fill" style={{ width: "95%" }}></div>
              </div>
              <p>End-to-end application development from UI to database</p>
            </div>

            <div className="move">
              <div className="move-header">
                <span>Responsive Design</span>
                <span className="move-pp">PP 25/25</span>
              </div>
              <div className="move-bar">
                <div className="move-fill" style={{ width: "90%" }}></div>
              </div>
              <p>Creating adaptive UIs for all device sizes</p>
            </div>

            <div className="move">
              <div className="move-header">
                <span>Performance Optimization</span>
                <span className="move-pp">PP 15/15</span>
              </div>
              <div className="move-bar">
                <div className="move-fill" style={{ width: "85%" }}></div>
              </div>
              <p>Reducing bundle size and improving load times</p>
            </div>
          </div>
        </div>

        <div className="abilities">
          <h3>Abilities</h3>

          <div className="abilities-list">
            <div className="ability">
              <div className="ability-icon fire"></div>
              <div className="ability-details">
                <h4>Adaptability</h4>
                <p>Quickly learns new technologies and adjusts to project requirements</p>
              </div>
            </div>

            <div className="ability">
              <div className="ability-icon water"></div>
              <div className="ability-details">
                <h4>Problem Solver</h4>
                <p>Analytically approaches challenges with systematic solutions</p>
              </div>
            </div>

            <div className="ability">
              <div className="ability-icon grass"></div>
              <div className="ability-details">
                <h4>Team Collaboration</h4>
                <p>Effectively communicates and works with diverse development teams</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
