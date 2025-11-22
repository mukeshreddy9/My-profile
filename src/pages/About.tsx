import React from 'react';

const About: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">About Me</h1>
            <p className="mb-4">
                Hello! I'm Mukesh Reddy Theddu, a passionate software developer with a focus on building
                efficient and scalable web applications. With a strong foundation in JavaScript and
                frameworks like React, I enjoy creating user-friendly interfaces and optimizing performance.
            </p>
            <p className="mb-4">
                I have experience working with various technologies, including TypeScript, Tailwind CSS,
                and Vite, which allow me to develop modern and responsive applications. My goal is to
                continuously learn and improve my skills while contributing to meaningful projects.
            </p>
            <p>
                In my free time, I enjoy exploring new technologies, contributing to open-source projects,
                and sharing knowledge with the developer community. Feel free to connect with me on my
                social media platforms or check out my projects!
            </p>
        </div>
    );
};

export default About;