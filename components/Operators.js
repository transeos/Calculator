import React from 'react';
import { Grid, Dropdown, Button } from 'semantic-ui-react';

const Operators = ({ mathFunctions, operands }) => {
    return (
        <Grid columns={2} textAlign={'center'}>
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
                    <Button>Add</Button>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Dropdown
                        placeholder='Select Operator'
                        search
                        selection
                        options={operands}
                    />
                </Grid.Column>
                <Grid.Column>
                    <Button>Add</Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default Operators;
