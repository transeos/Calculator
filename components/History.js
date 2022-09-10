import React from 'react';
import { Button, Table, Menu, Icon } from 'semantic-ui-react';

const History = () => {
    return (
        <Table celled striped>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell colSpan='4'>History</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                <Table.Row>
                    <Table.Cell>1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15</Table.Cell>
                    <Table.Cell>
                        <Icon name='calculator' /> 120
                    </Table.Cell>
                    <Table.Cell>10 minutes ago</Table.Cell>
                    <Table.Cell>
                        <Button>
                            <Button.Content>
                                <Icon name='trash alternate' />
                            </Button.Content>
                        </Button>
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>x1 + y1</Table.Cell>
                    <Table.Cell>
                        <Icon name='calculator' /> 3.3
                    </Table.Cell>
                    <Table.Cell>12 minutes ago</Table.Cell>
                    <Table.Cell>
                        <Button>
                            <Button.Content>
                                <Icon name='trash alternate' />
                            </Button.Content>
                        </Button>
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
    );
};

export default History;
