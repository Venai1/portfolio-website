import React from 'react'
import ProjectCard from './ui/project-card'
import musicProjectImage from '../../public/music-project.png';
import portfolioImage from '../../public/portfolio-image.png'
import GithubLogo from '../../public/github-icon.svg'
import YoutubeLogo from '../../public/youtube-icon.svg'
const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20 relative z-40'>

      <h1 className='text-6xl lg:text-7xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent pb-5 font-serif'>My Projects</h1>

      <div className='h-full w-full flex flex-col lg:flex-row gap-10 p-10'>
          
          <ProjectCard
          src = {portfolioImage.src}
          title = "Personal Portfolio Website"
          technologies = "JavaScript | React | TailwindCSS | Framer Motion"
          icon={GithubLogo.src}
          link = {"https://www.youtube.com/watch?v=Z5qX1AmCcXU"}
          description="
          Designed and developed a responsive, single-page portfolio website using Next.js, TypeScript, and Tailwind CSS, featuring dynamic themes, interactive elements, and a visually engaging layout to showcase my skills and projects.
          "
          />

          <ProjectCard
          src = {musicProjectImage.src}
          title = "Augmented Reality Music Visualizer"
          technologies = "C++ | Unreal Engine"
          icon={YoutubeLogo.src}
          link = {"https://www.youtube.com/watch?v=Z5qX1AmCcXU"}
          description="
          Created an engaging augmented reality (AR) experience that transforms music into a visual spectacle. The AR Music Visualizer provides users with a unique way to experience music by visualizing sound in real-time.
          "
          />

          <ProjectCard
          src = {musicProjectImage.src}
          title = "Augmented Reality Music Visualizer"
          technologies = "C++ | Unreal Engine"
          icon={GithubLogo.src}
          link = {"https://www.youtube.com/watch?v=Z5qX1AmCcXU"}
          description="
          Created an engaging augmented reality (AR) experience that transforms music into a visual spectacle. The AR Music Visualizer provides users with a unique way to experience music by visualizing sound in real-time.
          "
          />
      </div>

    </div>
  )
}

export default Projects
