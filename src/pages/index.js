import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Cases from '@sections/Cases';
import Brands from '@sections/Brands';
import Team from '@sections/Team';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <Cases />
    {/* <Brands /> */}
    <About />
    <Team />
    <Faq />
    <Footer />
  </Layout>
);

export default IndexPage;
