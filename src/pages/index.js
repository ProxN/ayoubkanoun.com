import React from 'react';
import Layout from '../components/layout';
import Hero from '../views/Hero';
import Projects from '../views/Projects';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
    </Layout>
  );
};

export default IndexPage;
