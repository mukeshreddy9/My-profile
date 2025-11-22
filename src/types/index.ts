// This file defines TypeScript types and interfaces used throughout the application.

export interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    liveLink: string;
    repoLink: string;
}

export interface SocialLink {
    platform: string;
    url: string;
}

export interface ContactForm {
    name: string;
    email: string;
    message: string;
}