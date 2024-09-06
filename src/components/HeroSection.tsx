import React from "react";
import Image from "next/image"; // Importing Image from next/image if using Next.js
import myMemoji from "/src/images/myMemoji.png";
import ScrollIndicator from "./ui/scroll-down";
const HeroSection: React.FC = () => {
    return (
        <div>
        <section className="min-h-screen flex items-center justify-center">
            <section className="bg-transparent min-h-screen flex items-start justify-start pt-16 font-serif">
                    <div className = "grid place-items-center">
                        
                        <Image src={myMemoji.src} alt="Memoji of Venai" width={250} height={250}/>
                        
                        <div className="text-neutral-content text-4xl lg:text-6xl font-extrabold pb-4" style={{display:'flex', gap: '20px' }}>
                            <h1> Hello, I'm </h1>
                            <h1 className="text-transparent bg-clip-text bg-gradient-to-br to-accent from-primary "> Venai </h1>
                        </div>
                        <p className="text-neutral-content text-lg lg:text-2xl pb-4">
                            Computer Science Student and Tech Enthusiast 
                        </p>
                        <div style = {{display:'flex', gap: '20px'}}>
                            <button className="group relative w-40 inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-gradient-to-br from-primary to-accent px-6 font-bold text-base-100 duration-500 font-sans"><div className="translate-y-0 opacity-100 group-hover:-translate-y-[150%] group-hover:opacity-0">👋🏽 Let's Talk</div><div className="absolute translate-y-[150%] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"><path d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></div></button>
                            <button className="group relative w-40 inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-gradient-to-br from-primary to-accent px-6 font-bold text-base-100 duration-500 font-sans"><div className="translate-y-0 opacity-100 group-hover:-translate-y-[150%] group-hover:opacity-0">📝 Resume</div><div className="absolute translate-y-[150%] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"><path d="M12 16V4M12 16L8 12M12 16L16 12M4 20H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div></button>
                        </div>
                    </div>
            </section>
        </section>
        <ScrollIndicator/>
        </div>
    );
}
export default HeroSection;