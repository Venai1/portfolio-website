import React from 'react'
import ProjectCard from './ui/project-card'
import musicProjectImage from '../../public/music-project.png';
const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20 relative z-40'>

      <h1 className='text-6xl lg:text-7xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent pb-5 font-serif'>My Projects</h1>

      <div className='h-full w-full flex flex-col md:flex-row gap-10 p-10'>
          <ProjectCard
          src = {musicProjectImage.src}
          title = "Portfolio Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />

          <ProjectCard
          src = {musicProjectImage.src}
          title = "Portfolio Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
          <ProjectCard
          src = {musicProjectImage.src}
          title = "Portfolio Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
      </div>

    </div>
  )
}

export default Projects
