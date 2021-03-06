import React from 'react';
import Layout from '../components/layout';
import Hero from '../views/Hero';
import Projects from '../views/Projects';
import Contact from '../views/Contact';
import Footer from '../views/Footer';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
