import React from 'react';
import { Input, Label, Icon, Button } from 'semantic-ui-react';

const CalculatorInput = ({ userInputChanged }) => {
  return (
    <div>
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
      </div>
      <div>
        <br />
        <Icon loading name='spinner' />
        <Label fluid content={"1111111111111"} size={"huge"} icon='calculator' />
        <Button>
          <Button.Content >
            <Icon name='copy outline' />
          </Button.Content>
        </Button>
      </div>

      <br /><br />
    </div>
  );
};

export default CalculatorInput;
