import React from 'react';
import { Grid, Dropdown, Button } from 'semantic-ui-react';

const Operators = ({ mathFunctions, operands }) => {
    return (
        <Grid columns={2}>
            <Grid.Row>
                <Grid.Column>
                    <Dropdown
                        placeholder='Select Function'
                        fluid
                        search
                        selection
                        options={mathFunctions}
                    />
                </Grid.Column>
                <Grid.Column>
                    <Button style={{ marginLeft: '10px' }}>Add</Button>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Dropdown
                        placeholder='Select Operator'
                        fluid
                        search
                        selection
                        options={operands}
                    />
                </Grid.Column>
                <Grid.Column>
                    <Button style={{ marginLeft: '10px' }}>Add</Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default Operators;
