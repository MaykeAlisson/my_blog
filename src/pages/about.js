import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import {
  AboutHeader,
  AboutDescription,
  AboutLink
} from '../styles/about';

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <AboutHeader>Sobre Mim</AboutHeader>
    <AboutDescription>
      Olá! Meu nome é {' '}
      <AboutLink href="https://br.linkedin.com/in/maykealisson" target="_blank">
        Mayke Alisson
      </AboutLink>{' '},
      atualmente moro em Uberlândia - Minas Gerais e atuo como analista de sistemas FullStack com foco em Java e React no{' '}
      <AboutLink href="http://www.arcom.com.br/" target="_blank">
        Arcom.
      </AboutLink>{' '}
    </AboutDescription>
    <AboutDescription>
      Atuando há mais de 3 anos com tecnologia, aprendi o poder que a tecnologia tem de impactar a vida das pessoas, fazendo-me sentir que nasci para o que faço.
    </AboutDescription>

    <AboutDescription>
      Aprendi a ser autodidata para alcançar meus objetivos e no processo me apaixonei por aprender coisas novas.
    </AboutDescription>

    <AboutDescription>
      Espero te ver aqui mais vezes, pois esse blog foi feito com muito carinho,
      para que você possa saber mais sobre esse universo tão fascinante da
      tecnologia e um pouco sobre meu universo particular também.
    </AboutDescription>

  </Layout>
);

export default AboutPage;