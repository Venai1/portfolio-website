import React from 'react'
import Image from 'next/image';

interface Props {
  src: string;
  title: string;
  description: string;
  technologies: string;
  icon: string;
  link: string;
}

const ProjectCard = ({src, title, description, technologies, icon, link} : Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <div className="relative w-full h-72">
        <Image
          src={src}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <a href={link} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4">
          <button className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-neutral transition-colors hover:bg-primary">
            <Image
              src={icon}
              alt="GitHub Logo"
              width={20}
              height={20}
              className="h-5 w-5 text-neutral-200"
            />
          </button>
        </a>
      </div>
      <div className='relative p-4'>
        <h1 className='text-2xl font-semibold text-accent'>{title}</h1>
        <h3 className='text-xl font-semibold text-white'>{technologies}</h3>
        <p className='mt-2 text-gray-300'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard