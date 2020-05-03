import React, { useState } from 'react';
import Layout from '../components/layout';
import Hero from '../views/Hero';
import Projects from '../views/Projects';
import Contact from '../views/Contact';
import Footer from '../views/Footer';
import Loader from '../components/loader';

const IndexPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return (
      <Layout>
        <Loader finish={() => setIsLoading(false)} />
      </Layout>
    );
  }
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
