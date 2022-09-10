import React, { Component } from 'react';
import Layout from '../components/Layout';
import { Tab } from 'semantic-ui-react';
import CalculatorInput from '../components/CalculatorInput';
import Operators from '../components/Operators';
import Variables from '../components/Variables';
import History from '../components/History';
import Numpad from '../components/Numpad';

const data1 = [
  { key: 'abs', value: 'abs', flag: 'abs', text: 'abs' },
  { key: 'log', value: 'log', flag: 'log', text: 'log' }
];

const data2 = [
  { key: '+', value: '+', flag: '+', text: '+' },
  { key: '-', value: '-', flag: '-', text: '-' }
];

function expressionChanged(event, data) {
  console.log(event.target.value);
}

class AppMain extends Component {
  render() {
    return (
      <Layout>
        <CalculatorInput userInputChanged={expressionChanged} />

        <Tab menu={{ pointing: true }} panes={[
          { menuItem: 'History', render: () => <Tab.Pane><History /></Tab.Pane> },
          { menuItem: 'Operators', render: () => <Tab.Pane><Operators mathFunctions={data1} operands={data2} /></Tab.Pane> },
          { menuItem: 'Variables', render: () => <Tab.Pane><Variables /></Tab.Pane> },
          { menuItem: 'Numpad', render: () => <Tab.Pane><Numpad /></Tab.Pane> }
        ]} />
      </Layout>
    );
  };
}

export default AppMain;