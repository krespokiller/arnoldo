import { useState } from 'react';

import dynamic from 'next/dynamic';

import Header from '../components/Header/Header.js';

import Scene from '../components/Scene/Scene.js';

import Dinosaur from '../components/Dinosaur/Dinosaur.js';

import Footer from '../components/Footer/Footer.js';

const Home = () => {
  const [language, setLanguage] = useState('en');

  const Resume = dynamic(() => import('../components/Resume/Resume.js'));
  return (
    <div className="bg-primary text-white m-4">

      <Header language={language} setLanguage={setLanguage}/>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">

        <Resume language={language}/>

        <Scene />

      </div>

      <Dinosaur />

      <Footer />

    </div>
  );
};

export default Home;
