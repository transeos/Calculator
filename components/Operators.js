import React from 'react';
import { Segment, Grid, Dropdown, Button } from 'semantic-ui-react';

const Operators = ({ mathFunctions, operands }) => {
    return (
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
                        <Button>Add</Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Dropdown
                            placeholder='Select Operator'
                            search
                            selection
                            options={operands}
                        />
                        <Button>Add</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
};

export default Operators;
