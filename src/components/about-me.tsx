import React from 'react';
import TimelineDemo from './timeline-entries';

export const AboutMe = () => {
    return(
        <div className = "z-20">
            <div className = "max-w-3xl mx-auto px-4 md:px-8 lg:px-10">
                <h2 className="text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent pb-5 font-serif text-center ">
                    About Me
                </h2>
                <h3 className = "text-2xl text-neutral-content text-center">I'm currently a Computer Science student at CUNY Queens College, set to graduate in May 2025. 
                <br/>
                <br/>
                With a strong foundation in software development and a passion for solving complex problems,
                I am actively seeking full-time roles to apply my skills and contribute to innovative projects.
                </h3>
            </div>
        </div>

    )
}