import React from 'react';
import { Input, Label, Icon, Button, Grid } from 'semantic-ui-react';

const CalculatorInput = ({ userInputChanged }) => {
  return (
    <div>
      <br />
      <Input fluid focus={true} placeholder='Enter expression...' onChange={userInputChanged} >
        <Button>
          <Button.Content >
            <Icon name='copy outline' />
          </Button.Content>
        </Button>
        <input />
        <Button color='orange'>
          <Button.Content >
            <Icon name='times rectangle' />
          </Button.Content>
        </Button>
      </Input>

      <br />

      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column textAlign='left'>
            <Icon loading name='spinner' />
            <Label fluid content={"1234567890"} size={"big"} icon='calculator' />
          </Grid.Column>
          <Grid.Column textAlign='right'>
          <Button>
              <Button.Content >
                <Icon name='copy outline' />
              </Button.Content>
            </Button>
            <Button>
              <Button.Content >
                <Icon name='share alternate' />
              </Button.Content>
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <br /><br />
    </div>
  );
};

export default CalculatorInput;
