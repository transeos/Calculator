import React from 'react';
import { Segment, Grid, Input, Button, Table } from 'semantic-ui-react';

const Variables = () => {
    return (
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
    );
};

export default Variables;
