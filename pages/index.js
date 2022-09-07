import React, { Component } from 'react';
import { Grid, Dropdown, Button, Segment, Input, Table, Icon, Label, Menu } from 'semantic-ui-react';
import Layout from '../components/Layout';

const mathFunctions = [
  { key: 'abs', value: 'abs', flag: 'abs', text: 'abs' },
  { key: 'log', value: 'log', flag: 'log', text: 'log' }
];

const operands = [
  { key: '+', value: '+', flag: '+', text: '+' },
  { key: '-', value: '-', flag: '-', text: '-' }
];

class AppMain extends Component {
  render() {
    return (
      <Layout>
        <Segment>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Dropdown
                  placeholder='Select Function'
                  search
                  selection
                  options={mathFunctions}
                />              
              </Grid.Column>
              <Grid.Column>
                <Dropdown
                  placeholder='Select Operator'
                  search
                  selection
                  options={operands}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment>
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
                <Button>Add/Update variable</Button>
              </Grid.Column>
              <Grid.Column>
                <Input placeholder='Enter variable...' />
              </Grid.Column>
              <Grid.Column>
                <Input placeholder='Enter value...' />
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Table celled striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Variable</Table.HeaderCell>
                <Table.HeaderCell>Value</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>x1</Table.Cell>
                <Table.Cell>1.1</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>y1</Table.Cell>
                <Table.Cell>1.2</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment>

        <Segment>
          <Table celled striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan='4'>History</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20</Table.Cell>
                <Table.Cell>
                  <Icon name='calculator' /> 210
                </Table.Cell>
                <Table.Cell>10 minutes ago</Table.Cell>
                <Table.Cell warning>
                  <Button.Content visible>
                    <Icon name='trash alternate' />
                  </Button.Content>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>x1 + y1</Table.Cell>
                <Table.Cell>
                  <Icon name='calculator' /> 3.3
                </Table.Cell>
                <Table.Cell>12 minutes ago</Table.Cell>
                <Table.Cell warning>
                  <Button.Content visible>
                    <Icon name='trash alternate' />
                  </Button.Content>
                </Table.Cell>
              </Table.Row>
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan='4'>
                  <Menu floated='right' pagination>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron left' />
                    </Menu.Item>
                    <Menu.Item as='a'>1</Menu.Item>
                    <Menu.Item as='a'>2</Menu.Item>
                    <Menu.Item as='a'>3</Menu.Item>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron right' />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Segment>
      </Layout>
    );
  };
}

export default AppMain;