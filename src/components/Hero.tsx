import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative w-full h-[88vh] border border-black bg-gray-100 flex flex-col items-center p-4">
      
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src="/images/aa.gif" 
          alt="Agentic AI Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-70"
        />
      </div>
   
      <div className="relative z-10 pt-40 text-center px-4">
        <h1 className="text-xl lg:text-4xl font-bold text-gray-800 mb-6 max-w-3xl leading-relaxed bg-slate-200 bg-opacity-80 p-4 rounded shadow-lg">
          Agentic AI refers to a type of artificial intelligence system where
          "agents" can autonomously make decisions, take actions, and learn on
          their own to achieve specific goals, essentially operating with minimal
          human oversight and adapting to changing circumstances, similar to how
          a human would approach a task. It's considered the next wave of AI
          focused on independent action and goal-oriented behavior.
        </h1>
      </div>
    </div>
  );
};

export default Hero;
