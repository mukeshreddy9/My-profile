import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
            <form className="w-full max-w-lg">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        rows={4}
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600"
                >
                    Send Message
                </button>
            </form>
            <div className="mt-8">
                <h2 className="text-xl font-semibold">Connect with me:</h2>
                <div className="flex space-x-4 mt-2">
                    <a href="https://linkedin.com/in/mukesh-reddy-theddu" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>
                    <a href="https://github.com/mukesh-reddy-theddu" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
                </div>
            </div>
        </div>
    );
};

export default Contact;