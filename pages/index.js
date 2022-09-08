import React, { Component } from 'react';
import Layout from '../components/Layout';
import Operators from '../components/Operators';
import Variables from '../components/Variables';
import History from '../components/History';

const data1 = [
  { key: 'abs', value: 'abs', flag: 'abs', text: 'abs' },
  { key: 'log', value: 'log', flag: 'log', text: 'log' }
];

const data2 = [
  { key: '+', value: '+', flag: '+', text: '+' },
  { key: '-', value: '-', flag: '-', text: '-' }
];

class AppMain extends Component {
  render() {
    return (
      <Layout>
        <Operators mathFunctions={data1} operands={data2} />

        <Variables />

        <History />
      </Layout>
    );
  };
}

export default AppMain;