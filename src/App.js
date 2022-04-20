import React from 'react';
import { FormspreeProvider } from '@formspree/react';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';

import './App.scss';

function App({ props, prefix, message}) {
  return (
    <main className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
        <FormspreeProvider project="1925190683409251957">
          <Contact {...props} {...prefix} {...message} />
        </FormspreeProvider>
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}

export default App;
