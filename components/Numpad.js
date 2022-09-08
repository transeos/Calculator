import React from 'react';
import { Icon, Grid, Button } from 'semantic-ui-react';

const Numpad = () => {
  return (
    <Grid columns='equal'>
      <Grid.Row>
        <Grid.Column>
          <Button fluid basic color='black'>1/x</Button>
        </Grid.Column>
        <Grid.Column>
          <Button fluid basic color='black'>x^2</Button>
        </Grid.Column>
        <Grid.Column>
          <Button fluid basic color='black'><span>&#8730;</span>x</Button>
        </Grid.Column>
        <Grid.Column>
          <Button fluid>
            <Button.Content visible>
              <Icon name='angle double left' />
            </Button.Content>
          </Button>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Button fluid basic color='black'>7</Button>
        </Grid.Column>
        <Grid.Column>
          <Button fluid basic color='black'>8</Button>
        </Grid.Column>
        <Grid.Column>
          <Button fluid basic color='black'>9</Button>
        </Grid.Column>
        <Grid.Column>
          <Button fluid basic color='blue'>/</Button>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Button fluid basic color='black'>4</Button>
        </Grid.Column>
        <Grid.Column>
          <Button fluid basic color='black'>5</Button>
        </Grid.Column>
        <Grid.Column>
          <Button fluid basic color='black'>6</Button>
        </Grid.Column>
        <Grid.Column>
          <Button fluid basic color='blue'>X</Button>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Button fluid basic color='black'>1</Button>
        </Grid.Column>
        <Grid.Column>
          <Button fluid basic color='black'>2</Button>
        </Grid.Column>
        <Grid.Column>
          <Button fluid basic color='black'>3</Button>
        </Grid.Column>
        <Grid.Column>
          <Button fluid basic color='blue'>-</Button>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Button fluid basic color='black'>+/-</Button>
        </Grid.Column>
        <Grid.Column>
          <Button fluid basic color='black'>0</Button>
        </Grid.Column>
        <Grid.Column>
          <Button fluid basic color='black'>.</Button>
        </Grid.Column>
        <Grid.Column>
          <Button fluid basic color='blue'>+</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Numpad;
