import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="mb-2">© {new Date().getFullYear()} Mukesh Reddy Theddu. All rights reserved.</p>
                <a href="assets/Profile.pdf" className="text-blue-400 hover:underline">
                    Download Resume
                </a>
            </div>
        </footer>
    );
};

export default Footer;