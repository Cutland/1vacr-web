import React from 'react';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import InfoSection from './components/InfoSection.js';
import OperationsCalendar from './components/OperationsCalendar.js';
import JoinUp from './components/JoinUp.js';
import Rules from './components/Rules.js';
import Media from './components/Media.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <InfoSection />
        <Media />
        <OperationsCalendar />
        <JoinUp />
        <Rules />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}