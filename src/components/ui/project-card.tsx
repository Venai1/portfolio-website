import React from 'react'
import Image from 'next/image';
import GithubLogo from '../../../public/github-icon.svg'
interface Props {
    src: string;
    title: string;
    description: string;
}

const ProjectCard = ({src, title, description} : Props) => {
  return (
    <div className = "relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
        
        <button className="absolute inline-flex h-12 w-12 top-4 right-4 items-center justify-center rounded-md bg-neutral transition-colors hover:bg-primary">
          <Image
            src={GithubLogo.src} // Use the imported GitHub icon here
            alt="GitHub Logo"
            width={20} // Adjust the width as needed
            height={20} // Adjust the height as needed
            className="h-5 w-5 text-neutral-200"
          />
        </button>

        <Image
            src = {src}
            alt = {title}
            width = {1000}
            height = {1000}
            className = "w-full object-contain"
        />
        

        <div className='relative p-4'>
            <h1 className='text-2xl font-semibold text-white'>{title}</h1>
            <p className='mt-2 text-gray-300'>{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard
