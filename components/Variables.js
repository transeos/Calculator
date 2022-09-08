import React from 'react';
import { Table, Form } from 'semantic-ui-react';

const Variables = () => {
    return (
        <div>
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Enter variable...' placeholder='x' />
                    <Form.Input fluid label='Enter value...' placeholder='1' />
                </Form.Group>
                <Form.Button>Add/Update variable</Form.Button>
            </Form>

            <Table definition>
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
        </div>
    );
};

export default Variables;
