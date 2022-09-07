import React from 'react';
import { Input, Label, Icon } from 'semantic-ui-react';

const CalculatorInput = () => {
  return (
    <div>
      <br />
      <Input fluid
        focus={true}
        placeholder='Enter expression...'
        error={false}
        action={{
            color: 'teal',
            labelPosition: 'right',
            icon: 'copy',
            content: 'Copy',
        }}
      />
      <br />
      <Icon loading name='spinner' /> <Label as='a' content={"0"} icon='calculator' />
      <br /><br /><br />
    </div>
  );
};

export default CalculatorInput;
