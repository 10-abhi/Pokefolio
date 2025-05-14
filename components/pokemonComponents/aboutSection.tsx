"use client"

import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import { GitHubContributions } from "../githubComps/github-contributions"

export const AboutSection = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="section about-section">
      <div className="section-header">
        <button className="back-button" onClick={onBack}>
          <ArrowLeft />
        </button>
        <h2>About Me</h2>
        <div className="section-icon grass"></div>
      </div>

      <div className="about-content">
        <div className="profile-card">
          <div className="profile-image">
            <Image src="/pfp.jpg" alt="Profile" width={300} height={300} className="rounded-full" />
            <div className="profile-level">Lv. 28 Developer</div>
          </div>

          <div className="profile-stats">
            <div className="stat-bar">
              <span>HP</span>
              <div className="bar-track">
                <div className="bar-fill hp" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div className="stat-bar">
              <span>ATK</span>
              <div className="bar-track">
                <div className="bar-fill atk" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="stat-bar">
              <span>DEF</span>
              <div className="bar-track">
                <div className="bar-fill def" style={{ width: "75%" }}></div>
              </div>
            </div>
            <div className="stat-bar">
              <span>SPD</span>
              <div className="bar-track">
                <div className="bar-fill spd" style={{ width: "95%" }}></div>
              </div>
            </div>
          </div>

          <div className="profile-types">
            <span className="type bg-blue-500">Water</span>
            <span className="type psychic">Psychic</span>
          </div>
        </div>

        <div className="about-details">
          <h3>My Journey</h3>

          <div className="journey-text">
            <p>
              I&apos;m on an epic quest to become a Master Developer, just like a Pokémon trainer striving to be the
              very best. My journey began in the world of HTML and CSS, capturing my first coding abilities before
              evolving my skills through JavaScript and beyond.
            </p>

            <p>
              With each project, I gain experience points and new abilities, strengthening my development team with
              frameworks like React and Next.js. I&apos;ve battled through challenges and gained badges of knowledge in
              frontend and backend technologies.
            </p>

            <p>
              Just as a Pokémon trainer carefully selects their team for different challenges, I adapt my tech stack to
              create the perfect solution for each project&apos;s unique requirements.
            </p>
          </div>

          <div className="trainer-stats">
            <h4>Trainer Stats</h4>

            <div className="stats-grid">
              <div className="stat-box">
                <p className="stat-label">Years Coding</p>
                <p className="stat-value">5+</p>
              </div>

              <div className="stat-box">
                <p className="stat-label">Projects</p>
                <p className="stat-value">20+</p>
              </div>

              <div className="stat-box">
                <p className="stat-label">Technologies</p>
                <p className="stat-value">15+</p>
              </div>
            </div>
          </div>

          <div className="github-contributions-wrapper w-full overflow-hidden mt-6">
            <GitHubContributions username="10-abhi" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
