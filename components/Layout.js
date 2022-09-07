import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import CalculatorInput from './CalculatorInput.js'

const Layout = (props) => {
  return (
    <Container>
      <Head>
        <link
          async rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
        />
      </Head>

      <CalculatorInput />

      {props.children}
    </Container>
  );
};

export default Layout;