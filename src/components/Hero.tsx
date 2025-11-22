import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-teal-500 text-white text-center">
            <img 
                src="/path/to/your/photo.jpg" 
                alt="Mukesh Reddy Theddu" 
                className="w-32 h-32 rounded-full mb-4 shadow-lg" 
            />
            <h1 className="text-4xl font-bold mb-2">Mukesh Reddy Theddu</h1>
            <p className="text-lg mb-4">A passionate developer specializing in building exceptional digital experiences.</p>
            <div className="flex space-x-4">
                <a 
                    href="#projects" 
                    className="bg-white text-blue-500 px-4 py-2 rounded shadow hover:bg-gray-200 transition"
                >
                    View Projects
                </a>
                <a 
                    href="#contact" 
                    className="bg-transparent border-2 border-white text-white px-4 py-2 rounded shadow hover:bg-white hover:text-blue-500 transition"
                >
                    Contact Me
                </a>
            </div>
        </section>
    );
};

export default Hero;