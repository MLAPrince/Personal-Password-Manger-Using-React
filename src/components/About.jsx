import React from 'react'

const About = () => {
  return (
    <div className='text-white relative'>
      <div className="container mx-auto px-4 py-10 max-w-2xl relative z-10">
        <h1 className="text-4xl font-bold mb-4 text-lime-400">About Me</h1>
        <p className="mb-4 text-lg">Hi! My name is <span className="font-bold text-white">Muhammad Mohiuddin</span>, but you might know me as <span className="font-bold text-lime-400">MLA</span> on many platforms. I use MLA as my username, nickname, and online identity everywhere.</p>
        <p className="mb-4">I'm currently learning web development and building cool projects to improve my skills. I love exploring new technologies and bringing ideas to life through code.</p>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2 text-lime-300">My Projects</h2>
          <ul className="list-disc list-inside ml-4">
            <li><span className="font-bold">Spotify Home Page Clone</span>  A responsive clone of Spotify's homepage UI.</li>
            <li><span className="font-bold">Twitter Home Page Clone</span>  A modern recreation of Twitter's homepage.</li>
            <li><span className="font-bold">Todo App (React)</span>  A fully functional todo app built with React.</li>
            <li><span className="font-bold">Password Manager (this app)</span>  Securely save and manage your credentials.</li>
          </ul>
        </div>
        <p className="mb-4">I believe in learning by doing, and every project helps me grow as a developer. Thanks for checking out my work!</p>
        <p className="text-sm text-gray-400">Feel free to connect with me as <span className="font-bold text-lime-400">MLA</span> anywhere online.</p>
      </div>
    </div>
  )
}

export default About
