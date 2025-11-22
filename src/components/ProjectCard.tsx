import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    techStack: string[];
    liveLink: string;
    repoLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack, liveLink, repoLink }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-700 mb-4">{description}</p>
            <div className="mb-4">
                <span className="font-medium">Tech Stack:</span>
                <ul className="list-disc list-inside">
                    {techStack.map((tech, index) => (
                        <li key={index} className="text-gray-600">{tech}</li>
                    ))}
                </ul>
            </div>
            <div className="flex justify-between">
                <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    View Live
                </a>
                <a href={repoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    View Code
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;